import { NextResponse } from "next/server";
import { parseContactPayload } from "@/lib/contact";
import {
  getNotificationChannels,
  sendEmailNotification,
  sendTelegramNotification,
} from "@/lib/notify";

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
          "На сервере не настроена отправка заявок. Напишите в Telegram или настройте переменные окружения.",
      },
      { status: 503 },
    );
  }

  const delivered: string[] = [];
  const errors: string[] = [];

  if (channels.telegram) {
    const ok = await sendTelegramNotification(payload);
    if (ok) delivered.push("telegram");
    else errors.push("telegram");
  }

  if (channels.email) {
    const ok = await sendEmailNotification(payload);
    if (ok) delivered.push("email");
    else errors.push("email");
  }

  if (delivered.length === 0) {
    return NextResponse.json(
      { error: "delivery_failed", message: "Не удалось отправить заявку. Попробуйте Telegram." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, delivered });
}
