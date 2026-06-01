"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TelegramButton } from "@/components/ui/TelegramButton";
import { navLinks } from "@/lib/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="section-container flex h-[4.5rem] items-center justify-between sm:h-20">
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-tight text-white transition-colors hover:text-gold sm:text-2xl"
        >
          Не шаблон
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex xl:gap-10"
          aria-label="Основная навигация"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <TelegramButton variant="secondary" className="!px-5 !py-2.5 text-xs" label="Telegram" />
          <Button href="#contact" variant="primary" className="!px-5 !py-2.5 text-xs">
            Обсудить проект
          </Button>
        </div>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className={`h-px w-6 bg-white transition-all duration-300 ${
              menuOpen ? "translate-y-[5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-white transition-all duration-300 ${
              menuOpen ? "scale-0 opacity-0" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-white transition-all duration-300 ${
              menuOpen ? "-translate-y-[5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-2xl md:hidden"
          >
            <nav
              className="flex h-full flex-col items-center justify-center gap-7 px-6"
              aria-label="Мобильная навигация"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="font-display text-3xl text-white"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <TelegramButton
                variant="primary"
                className="mt-2 w-full max-w-xs"
                onClick={() => setMenuOpen(false)}
              />
              <Button
                href="#contact"
                variant="secondary"
                className="w-full max-w-xs"
                onClick={() => setMenuOpen(false)}
              >
                Оставить заявку
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
