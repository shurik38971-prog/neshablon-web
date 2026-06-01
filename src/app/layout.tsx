import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Не шаблон — сайты для бизнеса, которые приносят заявки",
  description:
    "Премиальная веб-студия: индивидуальные сайты без шаблонов для клиник, недвижимости, салонов и локального бизнеса. Next.js, быстрый запуск, поддержка.",
  keywords: [
    "веб-студия",
    "разработка сайтов",
    "сайт под ключ",
    "сайт для бизнеса",
    "Не шаблон",
  ],
  openGraph: {
    title: "Не шаблон — премиальные сайты для бизнеса",
    description:
      "Сайты без конструкторов и шаблонов. Фокус на заявки, скорость и доверие к бренду.",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="min-h-screen overflow-x-hidden antialiased">
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
