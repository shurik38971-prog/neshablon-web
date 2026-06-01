# Не шаблон

Премиальный лендинг веб-студии: Next.js 16, TypeScript, Tailwind CSS 4, Framer Motion.

## Запуск локально

**Разработка** (горячая перезагрузка):

```bash
npm install
npm run dev
```

**Продакшен локально** (сначала сборка, потом сервер):

```bash
npm run build
npm run start
```

Или одной командой: `npm run preview`

Откройте в браузере: **http://localhost:3000** (не `/upload` и не папку проекта).

> `npm run build` **не запускает сайт** — только собирает файлы в `.next`. После сборки нужен `npm run start` или `npm run dev`.

## Структура

- `src/app/page.tsx` — главная страница
- `public/portfolio/` — тематические обложки кейсов (стоматология, недвижимость, барбершоп)
- `src/lib/content.ts` — тексты, кейсы, блок «Почему мы»
- `.env.local` — URL живых проектов (см. `.env.example`)

### Заявки с формы

Скопируйте `.env.example` в `.env.local` (локально) и добавьте те же переменные в **Vercel → Settings → Environment Variables**.

**Telegram (рекомендуется):**

1. Создайте бота через [@BotFather](https://t.me/BotFather), скопируйте `TELEGRAM_BOT_TOKEN`.
2. Напишите боту любое сообщение.
3. Узнайте `TELEGRAM_CHAT_ID` через [@userinfobot](https://t.me/userinfobot) или `https://api.telegram.org/bot<TOKEN>/getUpdates`.

**Почта (Yandex):**

1. Включите пароль приложения в Яндекс ID.
2. Заполните `SMTP_*` и `CONTACT_TO_EMAIL=neshablon-web@yandex.ru`.

Нужен **хотя бы один** канал (Telegram или SMTP), иначе форма покажет подсказку написать в Telegram.

### Ссылки на кейсы

В `src/lib/content.ts` у каждого проекта укажите `liveUrl`:

```ts
liveUrl: "https://ваш-сайт-клиники.ru",
```

Пустая строка — кнопка «Обсудить похожий» ведёт в контакты.
