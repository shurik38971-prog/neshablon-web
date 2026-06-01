/** Замените liveUrl на URL опубликованных кейсов */
export const advantages = [
  {
    title: "Не используем шаблоны",
    description:
      "Каждый сайт проектируем с нуля под ваш бренд — без Tilda, Wix и готовых тем WordPress.",
  },
  {
    title: "Адаптация под мобильные устройства",
    description:
      "Вёрстка под смартфоны и планшеты: удобные кнопки, читаемый текст, быстрая запись с телефона.",
  },
  {
    title: "Быстрая загрузка сайта",
    description:
      "Оптимизация изображений и кода — страницы открываются за секунды, Lighthouse 90+.",
  },
  {
    title: "Поддержка после запуска",
    description:
      "Правки, аналитика, новые блоки и развитие сайта — не бросаем после публикации.",
  },
] as const;

export const stats = [
  { value: "100%", label: "адаптивность" },
  { value: "90+", label: "Lighthouse" },
  { value: "<2 сек", label: "загрузка страницы" },
] as const;

export const techStack = [
  { name: "Next.js", description: "Современный фреймворк для быстрых сайтов" },
  { name: "React", description: "Интерактивные интерфейсы без перезагрузок" },
  { name: "TypeScript", description: "Надёжный код без скрытых ошибок" },
  { name: "Vercel", description: "Стабильный хостинг и мгновенные обновления" },
  { name: "Supabase", description: "Базы данных и авторизация при необходимости" },
] as const;

export const whyUs = [
  {
    title: "Не используем конструкторы",
    description: "Только код и полный контроль над скоростью, SEO и дизайном.",
  },
  {
    title: "Не копируем шаблоны",
    description: "Каждый проект — отдельная визуальная система под ваш бизнес.",
  },
  {
    title: "Делаем дизайн под бизнес",
    description: "Учитываем нишу, аудиторию и задачу — заявки, а не «красивую картинку».",
  },
  {
    title: "Настраиваем аналитику",
    description: "Метрика, цели, события — чтобы видеть, откуда приходят клиенты.",
  },
  {
    title: "Поддерживаем после запуска",
    description: "Правки, обновления и развитие сайта после публикации.",
  },
] as const;

export const projects = [
  {
    id: "dental",
    title: "Стоматологическая клиника",
    description:
      "Увеличили количество заявок за счёт удобной онлайн-записи и понятной структуры услуг.",
    result: "Онлайн-запись · доверие к врачам · рост обращений",
    image: "/portfolio/case-dental.jpg",
    liveUrl: "https://premium-dental-clinic-bay.vercel.app",
  },
  {
    id: "realestate",
    title: "Премиальная недвижимость",
    description:
      "Премиальный сайт недвижимости с акцентом на дорогие объекты и получение заявок от покупателей.",
    result: "Премиум-подача · каталог объектов · заявки от покупателей",
    image: "/portfolio/case-realestate.jpg",
    liveUrl: "https://prestige-estates-sigma.vercel.app",
  },
  {
    id: "barbershop",
    title: "Барбершоп",
    description:
      "Упростили запись и усилили имидж бренда — гости записываются через мессенджер за пару кликов.",
    result: "Запись в 2 клика · сильный визуал · рост повторных визитов",
    image: "/portfolio/case-barbershop.jpg",
    liveUrl: "https://barber-premium-gamma.vercel.app",
  },
] as const;

export const processSteps = [
  { step: "01", title: "Обсуждение", description: "Бриф, цели, аудитория и референсы." },
  { step: "02", title: "Прототип", description: "Структура страниц и логика конверсии." },
  { step: "03", title: "Разработка", description: "Дизайн, вёрстка и интеграции." },
  { step: "04", title: "Запуск", description: "Публикация, тесты и передача проекта." },
] as const;

export const testimonials = [
  {
    quote:
      "Сайт выглядит на уровне клиник в центре Москвы. Запись через форму выросла уже в первый месяц.",
    author: "Елена К.",
    role: "Владелица стоматологии, Казань",
  },
  {
    quote:
      "Наконец перестали стыдиться ссылки в объявлениях. Клиенты сами отмечают, что «сайт дорогой».",
    author: "Артём В.",
    role: "Риелтор, премиум-сегмент",
  },
  {
    quote:
      "Сделали быстро, без лишних созвонов. Запись в барбершоп стала проще — и для нас, и для гостей.",
    author: "Максим Д.",
    role: "Основатель барбершопа",
  },
] as const;

export const site = {
  email: "hello@neshablon.ru",
  telegram: "https://t.me/neshablon_web",
  telegramHandle: "@neshablon_web",
} as const;

export const navLinks = [
  { label: "Преимущества", href: "#advantages" },
  { label: "Проекты", href: "#portfolio" },
  { label: "Стек", href: "#stack" },
  { label: "Процесс", href: "#process" },
  { label: "Контакты", href: "#contact" },
] as const;
