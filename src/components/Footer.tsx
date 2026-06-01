import Link from "next/link";
import { Logo } from "@/components/Logo";
import { TelegramButton } from "@/components/ui/TelegramButton";
import { navLinks } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border pb-24 pt-14 md:pb-16">
      <div className="section-container">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Премиальные сайты для малого и среднего бизнеса в России — без
              шаблонов, с фокусом на заявки.
            </p>
            <div className="mt-6">
              <TelegramButton variant="secondary" className="text-sm" />
            </div>
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

        <div className="gold-line my-10 w-full opacity-50" />

        <div className="flex flex-col gap-3 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Не шаблон. Все права защищены.</p>
          <p>Разработка сайтов · Москва и вся Россия</p>
        </div>
      </div>
    </footer>
  );
}
