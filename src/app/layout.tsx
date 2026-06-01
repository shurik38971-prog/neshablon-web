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
  title: "Не шаблон — премиальные сайты для бизнеса",
  description:
    "Разрабатываем современные сайты для бизнеса в России. Без шаблонов, без конструкторов, с акцентом на результат.",
  keywords: [
    "веб-студия",
    "разработка сайтов",
    "сайт для бизнеса",
    "дизайн сайта",
    "Не шаблон",
  ],
  openGraph: {
    title: "Не шаблон — сайты, которые выглядят дороже своей стоимости",
    description:
      "Индивидуальные сайты для клиник, недвижимости, салонов и локального бизнеса.",
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
      <body className="min-h-screen antialiased overflow-x-hidden">
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
