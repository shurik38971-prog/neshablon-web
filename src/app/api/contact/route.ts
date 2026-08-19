import { NextResponse } from "next/server";
import { parseContactPayload } from "@/lib/contact";
import {
  getNotificationChannels,
  sendEmailNotification,
  sendTelegramNotification,
} from "@/lib/notify";

/** Nodemailer требует Node.js — на Edge почта не отправится. */
export const runtime = "nodejs";
export const maxDuration = 30;

const deliveryHint =
  "Проверьте в Vercel: TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID (напишите боту /start). Для почты — SMTP_USER и пароль приложения Yandex.";

const MIN_FORM_FILL_MS = 2500;
const MAX_FORM_AGE_MS = 2 * 60 * 60 * 1000;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const blockedPhoneDigits = new Set(["79999999999"]);

const rateLimitStore = new Map<string, number[]>();

function silentSuccess() {
  return NextResponse.json({ ok: true, delivered: [] });
}

function getClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (rateLimitStore.get(ip) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );

  if (recent.length >= RATE_LIMIT_MAX) {
    rateLimitStore.set(ip, recent);
    return true;
  }

  recent.push(now);
  rateLimitStore.set(ip, recent);
  return false;
}

function isBotSubmission(body: unknown) {
  if (!body || typeof body !== "object") return true;

  const record = body as Record<string, unknown>;
  const honeypot = typeof record.website === "string" ? record.website.trim() : "";
  const startedAt = typeof record.formStartedAt === "number" ? record.formStartedAt : NaN;
  const elapsed = Date.now() - startedAt;
  const phone = typeof record.phone === "string" ? record.phone.replace(/\D/g, "") : "";

  if (honeypot) return true;
  if (!Number.isFinite(startedAt)) return true;
  if (elapsed < MIN_FORM_FILL_MS || elapsed > MAX_FORM_AGE_MS) return true;
  if (blockedPhoneDigits.has(phone)) return true;

  return false;
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  if (isBotSubmission(body) || isRateLimited(getClientIp(request))) {
    return silentSuccess();
  }

  const payload = parseContactPayload(body);

  if (!payload) {
    return NextResponse.json({ error: "validation" }, { status: 400 });
  }

  const channels = getNotificationChannels();

  if (!channels.telegram && !channels.email) {
    return NextResponse.json(
      {
        error: "not_configured",
        message:
          "На сервере не настроена отправка заявок. Напишите в Telegram или добавьте переменные в Vercel.",
      },
      { status: 503 },
    );
  }

  const delivered: string[] = [];
  const failed: string[] = [];

  if (channels.telegram) {
    const result = await sendTelegramNotification(payload);
    if (result.ok) delivered.push("telegram");
    else failed.push("telegram");
  }

  if (channels.email) {
    const result = await sendEmailNotification(payload);
    if (result.ok) delivered.push("email");
    else failed.push("email");
  }

  if (delivered.length === 0) {
    return NextResponse.json(
      {
        error: "delivery_failed",
        message:
          "Не удалось отправить заявку. Напишите нам в Telegram — кнопка ниже. Если вы владелец сайта: " +
          deliveryHint,
        failed,
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, delivered });
}
