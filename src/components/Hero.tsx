"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden pt-20">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gold/5 blur-[120px]" />
        <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-white/[0.02] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-gold"
        >
          Веб-студия · Россия
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display mx-auto max-w-5xl text-4xl font-medium leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Сайты, которые помогают бизнесу{" "}
          <span className="text-gradient-gold italic">зарабатывать</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
        >
          Создаём современные сайты для компаний, 
          которые хотят выделяться среди конкурентов 
          и получать заявки через интернет.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href="#contact" variant="primary">
            Обсудить проект
          </Button>
          <Button href="#portfolio" variant="secondary">
            Смотреть кейсы
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-24 flex justify-center"
        >
          <a
            href="#advantages"
            className="flex flex-col items-center gap-2 text-xs uppercase tracking-widest text-muted transition-colors hover:text-gold"
            aria-label="Прокрутить вниз"
          >
            <span>Листайте</span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="block h-8 w-px bg-gradient-to-b from-gold to-transparent"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
