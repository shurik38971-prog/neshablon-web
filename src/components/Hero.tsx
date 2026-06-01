"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { TelegramButton } from "@/components/ui/TelegramButton";
import { hero, niches } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();

  const fade = (delay: number, y = 20) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease },
        };

  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden pt-[5.5rem] pb-28 md:pb-24">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-[28%] h-[min(520px,80vw)] w-[min(520px,80vw)] -translate-x-1/2 rounded-full bg-gold/[0.06] blur-[100px]" />
        <div className="absolute -right-24 top-16 h-64 w-64 rounded-full bg-white/[0.02] blur-3xl" />
      </div>

      <div className="section-container relative z-10 py-12 text-center sm:py-16 lg:py-20">
        <motion.p {...fade(0.1, 12)} className="eyebrow">
          {hero.eyebrow}
        </motion.p>

        <motion.h1
          {...fade(0.2, 28)}
          className="mx-auto mt-6 max-w-5xl font-display text-[clamp(2.25rem,6.5vw,4.75rem)] font-medium leading-[1.08] tracking-tight text-white"
        >
          {hero.title}{" "}
          <span className="text-gradient-gold italic">{hero.highlight}</span>
        </motion.h1>

        <motion.p {...fade(0.35, 20)} className="prose-muted mx-auto mt-7 max-w-2xl">
          {hero.subtitle}
        </motion.p>

        <motion.ul
          {...fade(0.45, 16)}
          className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-2"
        >
          {niches.map((niche) => (
            <li
              key={niche}
              className="rounded-full border border-border bg-surface/60 px-3.5 py-1.5 text-xs text-white/80"
            >
              {niche}
            </li>
          ))}
        </motion.ul>

        <motion.div
          {...fade(0.55, 20)}
          className="mx-auto mt-10 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center"
        >
          <TelegramButton
            variant="primary"
            className="w-full px-8 py-4 text-base sm:w-auto"
            label="Написать в Telegram"
          />
          <Button href="#portfolio" variant="secondary" className="w-full sm:w-auto">
            Смотреть проекты
          </Button>
        </motion.div>

        <motion.p {...fade(0.65, 12)} className="mt-6 text-xs text-muted sm:text-sm">
          {hero.trustLine}
        </motion.p>

        <motion.div {...fade(0.85)} className="mt-16 flex justify-center md:mt-20">
          <a
            href="#portfolio"
            className="flex flex-col items-center gap-2 text-xs uppercase tracking-widest text-muted transition-colors hover:text-gold"
            aria-label="Прокрутить к проектам"
          >
            <span>Проекты</span>
            <motion.span
              animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="block h-8 w-px bg-gradient-to-b from-gold to-transparent"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
