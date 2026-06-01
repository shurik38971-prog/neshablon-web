"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { TelegramButton } from "@/components/ui/TelegramButton";
import { site } from "@/lib/content";

export function TelegramCta() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="telegram-cta"
      className="scroll-mt-20 border-y border-gold/20 bg-gradient-to-b from-gold/[0.12] via-surface/50 to-background py-20 sm:py-24 lg:py-28"
    >
      <div className="section-container text-center">
        <Reveal>
          <p className="eyebrow">Быстрый ответ</p>
          <h2 className="mt-5 font-display text-[clamp(2rem,5vw,3.5rem)] leading-tight text-white">
            Обсудим проект в Telegram
          </h2>
          <p className="prose-muted mx-auto mt-5 max-w-xl">
            Напишите нишу и задачу — ответим в течение дня. Без длинных брифов и
            ожидания на почте.
          </p>
          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-4"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            <TelegramButton
              variant="primary"
              className="w-full max-w-sm px-10 py-4 text-base sm:w-auto"
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
