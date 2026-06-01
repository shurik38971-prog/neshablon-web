"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { TelegramButton } from "@/components/ui/TelegramButton";
import { site } from "@/lib/content";

export function TelegramCta() {
  return (
    <section
      id="telegram-cta"
      className="border-y border-gold/20 bg-gradient-to-b from-gold/10 via-surface/40 to-background py-20 lg:py-28"
    >
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
            Быстрый ответ
          </p>
          <h2 className="mt-4 font-display text-3xl text-white md:text-5xl">
            Обсудим проект в Telegram
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted">
            Напишите нишу и задачу — ответим в течение дня, без длинных брифов и
            ожидания на почте.
          </p>
          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <TelegramButton
              variant="primary"
              className="w-full px-10 py-4 text-base sm:w-auto"
              label="Написать в Telegram"
            />
            <a
              href={site.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gold transition-colors hover:text-gold-light"
            >
              {site.telegramHandle}
            </a>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
