/**
 * Проверка Telegram:
 * node --env-file=.env.local scripts/test-telegram.mjs
 */
function clean(value) {
  if (!value) return "";
  const t = value.trim();
  if (
    (t.startsWith('"') && t.endsWith('"')) ||
    (t.startsWith("'") && t.endsWith("'"))
  ) {
    return t.slice(1, -1).trim();
  }
  return t;
}

const token = clean(process.env.TELEGRAM_BOT_TOKEN);
const chatId = clean(process.env.TELEGRAM_CHAT_ID);

if (!token || !chatId) {
  console.error("Задайте TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID в .env.local");
  process.exit(1);
}

const meRes = await fetch(`https://api.telegram.org/bot${token}/getMe`);
const meData = await meRes.json();

if (!meData.ok) {
  console.error("Неверный TELEGRAM_BOT_TOKEN:", meData.description);
  process.exit(1);
}

const botId = String(meData.result.id);
const botUsername = meData.result.username;

console.log(`Бот: @${botUsername} (id: ${botId})`);
console.log(`TELEGRAM_CHAT_ID в .env: ${chatId}\n`);

if (chatId === botId) {
  console.error(
    "TELEGRAM_CHAT_ID совпадает с ID бота. Укажите свой User ID из @userinfobot.\n",
  );
  process.exit(1);
}

async function getRecentChats() {
  const res = await fetch(`https://api.telegram.org/bot${token}/getUpdates?limit=10`);
  const data = await res.json();
  if (!data.ok || !data.result?.length) return [];

  const chats = new Map();
  for (const update of data.result) {
    const chat = update.message?.chat ?? update.my_chat_member?.chat;
    if (!chat?.id) continue;
    chats.set(String(chat.id), {
      id: chat.id,
      type: chat.type,
      title: chat.title ?? [chat.first_name, chat.last_name].filter(Boolean).join(" "),
      username: chat.username,
    });
  }
  return [...chats.values()];
}

const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    chat_id: chatId,
    text: "Тест заявки — Не шаблон. Если видите это, Telegram настроен верно.",
  }),
});

const data = await res.json();

if (data.ok) {
  console.log("Успех! Сообщение отправлено.\n", JSON.stringify(data, null, 2));
  process.exit(0);
}

console.error("Ошибка отправки:\n", JSON.stringify(data, null, 2), "\n");

if (data.description?.includes("chat not found")) {
  console.log(`Что сделать:

1. Откройте в Telegram: https://t.me/${botUsername}
2. Нажмите «Запустить» / Start (обязательно один раз)
3. Напишите боту любое сообщение, например: «тест»
4. Снова запустите этот скрипт

Бот видит только те чаты, где с ним уже был диалог.
`);

  const chats = await getRecentChats();

  if (chats.length === 0) {
    console.log(
      "Сейчас у бота нет входящих сообщений (getUpdates пустой).\n" +
        "Значит /start ещё не нажимали — сделайте шаги выше.\n",
    );
  } else {
    console.log("Чаты, которые бот уже «видит» (можно подставить id в TELEGRAM_CHAT_ID):\n");
    for (const c of chats) {
      const label = c.title || c.username || c.type;
      console.log(`  TELEGRAM_CHAT_ID=${c.id}  —  ${label} (${c.type})`);
    }
    console.log(
      "\nСкопируйте нужный id в .env.local и Vercel, затем снова: node --env-file=.env.local scripts/test-telegram.mjs\n",
    );
  }
}

process.exit(1);
