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

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
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
