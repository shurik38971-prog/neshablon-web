import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
        <head>
    <Script
      id="yandex-metrika"
      strategy="afterInteractive"
    >
      {`
        (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {
              if (document.scripts[j].src === r) { return; }
            }
            k=e.createElement(t),
            a=e.getElementsByTagName(t)[0],
            k.async=1,
            k.src=r,
            a.parentNode.insertBefore(k,a);
        })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=109572178', 'ym');

        ym(109572178, 'init', {
          ssr:true,
          webvisor:true,
          clickmap:true,
          ecommerce:"dataLayer",
          referrer: document.referrer,
          url: location.href,
          accurateTrackBounce:true,
          trackLinks:true
        });
      `}
    </Script>
  </head>
         <body className="min-h-screen overflow-x-hidden antialiased">
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
