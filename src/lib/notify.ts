import nodemailer from "nodemailer";
import type { ContactPayload } from "@/lib/contact";
import { formatContactMessage, formatContactPlainText } from "@/lib/contact";

export async function sendTelegramNotification(data: ContactPayload): Promise<boolean> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) return false;

  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: formatContactMessage(data),
      parse_mode: "HTML",
      disable_web_page_preview: true,
    }),
  });

  if (!response.ok) {
    console.error("Telegram API error:", await response.text());
    return false;
  }

  return true;
}

export async function sendEmailNotification(data: ContactPayload): Promise<boolean> {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO_EMAIL ?? user;
  const port = Number(process.env.SMTP_PORT ?? "465");

  if (!host || !user || !pass || !to) return false;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      from: `"Не шаблон" <${user}>`,
      to,
      replyTo: data.email || undefined,
      subject: `Заявка с сайта — ${data.name}`,
      text: formatContactPlainText(data),
    });
    return true;
  } catch (error) {
    console.error("SMTP error:", error);
    return false;
  }
}

export function getNotificationChannels() {
  const telegram = Boolean(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID);
  const email = Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS &&
      (process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER),
  );

  return { telegram, email };
}
