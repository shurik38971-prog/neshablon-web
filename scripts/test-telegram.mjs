/**
 * Локальная проверка Telegram (из корня проекта):
 * node --env-file=.env.local scripts/test-telegram.mjs
 */
const token = process.env.TELEGRAM_BOT_TOKEN?.trim().replace(/^["']|["']$/g, "");
const chatId = process.env.TELEGRAM_CHAT_ID?.trim().replace(/^["']|["']$/g, "");

if (!token || !chatId) {
  console.error("Задайте TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID в .env.local");
  process.exit(1);
}

const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    chat_id: chatId,
    text: "Тест заявки — Не шаблон. Если видите это сообщение, Telegram настроен верно.",
  }),
});

const data = await res.json();
console.log(JSON.stringify(data, null, 2));
process.exit(data.ok ? 0 : 1);
