import nodemailer from "nodemailer";
import type { ContactPayload } from "@/lib/contact";
import { formatContactPlainText } from "@/lib/contact";
import { readEnv } from "@/lib/env";

type SendResult = { ok: true } | { ok: false; reason: string };

export async function sendTelegramNotification(
  data: ContactPayload,
): Promise<SendResult> {
  const token = readEnv("TELEGRAM_BOT_TOKEN");
  const chatId = readEnv("TELEGRAM_CHAT_ID");

  if (!token || !chatId) {
    return { ok: false, reason: "telegram_not_configured" };
  }

  const text = formatContactPlainText(data);
  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  const attempts: Record<string, unknown>[] = [{ chat_id: chatId, text }];

  let lastError = "unknown";

  for (const body of attempts) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(20_000),
      });

      if (response.ok) return { ok: true };

      const errorBody = await response.text();
      lastError = errorBody;
      console.error("Telegram API error:", errorBody);

      if (errorBody.includes("can't parse entities")) continue;
      break;
    } catch (error) {
      lastError = error instanceof Error ? error.message : "network_error";
      console.error("Telegram fetch error:", error);
    }
  }

  return { ok: false, reason: lastError };
}

async function trySendMail(
  transporter: nodemailer.Transporter,
  options: nodemailer.SendMailOptions,
): Promise<boolean> {
  try {
    await transporter.sendMail(options);
    return true;
  } catch (error) {
    console.error("SMTP send error:", error);
    return false;
  }
}

export async function sendEmailNotification(data: ContactPayload): Promise<SendResult> {
  const host = readEnv("SMTP_HOST");
  const user = readEnv("SMTP_USER");
  const pass = readEnv("SMTP_PASS");
  const to = readEnv("CONTACT_TO_EMAIL") ?? user;

  if (!host || !user || !pass || !to) {
    return { ok: false, reason: "smtp_not_configured" };
  }

  const mail = {
    from: `"Не шаблон" <${user}>`,
    to,
    replyTo: data.email || undefined,
    subject: `Заявка с сайта — ${data.name}`,
    text: formatContactPlainText(data),
  };

  const portEnv = readEnv("SMTP_PORT");
  const configs: { port: number; secure: boolean }[] = portEnv
    ? [{ port: Number(portEnv), secure: Number(portEnv) === 465 }]
    : [
        { port: 465, secure: true },
        { port: 587, secure: false },
      ];

  for (const { port, secure } of configs) {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      requireTLS: !secure,
      auth: { user, pass },
      connectionTimeout: 15_000,
      greetingTimeout: 15_000,
      socketTimeout: 20_000,
    });

    const sent = await trySendMail(transporter, mail);
    transporter.close();
    if (sent) return { ok: true };
  }

  return { ok: false, reason: "smtp_send_failed" };
}

export function getNotificationChannels() {
  const telegram = Boolean(readEnv("TELEGRAM_BOT_TOKEN") && readEnv("TELEGRAM_CHAT_ID"));
  const email = Boolean(
    readEnv("SMTP_HOST") &&
      readEnv("SMTP_USER") &&
      readEnv("SMTP_PASS") &&
      (readEnv("CONTACT_TO_EMAIL") || readEnv("SMTP_USER")),
  );

  return { telegram, email };
}
