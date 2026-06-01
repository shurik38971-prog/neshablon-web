export type ContactPayload = {
  name: string;
  phone: string;
  email?: string;
  message?: string;
};

export function parseContactPayload(body: unknown): ContactPayload | null {
  if (!body || typeof body !== "object") return null;

  const { name, phone, email, message } = body as Record<string, unknown>;

  if (typeof name !== "string" || typeof phone !== "string") return null;

  const trimmedName = name.trim();
  const trimmedPhone = phone.trim();

  if (trimmedName.length < 2 || trimmedPhone.length < 6) return null;

  return {
    name: trimmedName.slice(0, 120),
    phone: trimmedPhone.slice(0, 40),
    email: typeof email === "string" && email.trim() ? email.trim().slice(0, 120) : undefined,
    message:
      typeof message === "string" && message.trim()
        ? message.trim().slice(0, 2000)
        : undefined,
  };
}

export function formatContactMessage(data: ContactPayload): string {
  const lines = [
    "<b>Новая заявка — Не шаблон</b>",
    "",
    `<b>Имя:</b> ${escapeHtml(data.name)}`,
    `<b>Телефон:</b> ${escapeHtml(data.phone)}`,
  ];

  if (data.email) lines.push(`<b>Email:</b> ${escapeHtml(data.email)}`);
  if (data.message) lines.push("", `<b>Сообщение:</b>\n${escapeHtml(data.message)}`);

  lines.push("", `<i>${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })} МСК</i>`);

  return lines.join("\n");
}

export function formatContactPlainText(data: ContactPayload): string {
  const lines = [
    "Новая заявка — Не шаблон",
    "",
    `Имя: ${data.name}`,
    `Телефон: ${data.phone}`,
  ];

  if (data.email) lines.push(`Email: ${data.email}`);
  if (data.message) lines.push("", `Сообщение:\n${data.message}`);

  lines.push("", new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" }) + " МСК");

  return lines.join("\n");
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
