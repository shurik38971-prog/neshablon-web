import Link from "next/link";
import { navLinks } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div>
            <Link
              href="/"
              className="font-display text-2xl font-semibold text-white"
            >
              Не шаблон
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted">
              Премиальные сайты для малого и среднего бизнеса в России.
            </p>
          </div>

          <nav
            className="flex flex-wrap gap-x-8 gap-y-3"
            aria-label="Навигация в подвале"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="gold-line mt-12 mb-8 w-full opacity-60" />

        <div className="flex flex-col gap-4 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Не шаблон. Все права защищены.</p>
          <p className="text-muted/80">
            ИП · разработка сайтов · Москва и вся Россия
          </p>
        </div>
      </div>
    </footer>
  );
}
