# Не шаблон

Премиальный лендинг веб-студии: Next.js 16, TypeScript, Tailwind CSS 4, Framer Motion.

## Запуск

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

## Сборка

```bash
npm run build
npm start
```

## Структура

- `src/app/page.tsx` — главная страница
- `public/portfolio/` — тематические обложки кейсов (стоматология, недвижимость, барбершоп)
- `src/lib/content.ts` — тексты, кейсы, блок «Почему мы»
- `.env.local` — URL живых проектов (см. `.env.example`)

Контактная форма готова к подключению API (сейчас имитирует отправку на клиенте).

### Ссылки на кейсы

В `src/lib/content.ts` у каждого проекта укажите `liveUrl`:

```ts
liveUrl: "https://ваш-сайт-клиники.ru",
```

Пустая строка — кнопка «Обсудить похожий» ведёт в контакты.
