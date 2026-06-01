"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/lib/content";

export function Process() {
  return (
    <section id="process" className="border-t border-border py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          label="Процесс"
          title="Как мы работаем"
          description="Прозрачные этапы без сюрпризов — вы всегда знаете, на каком шаге проект."
        />

        <div className="relative">
          <div
            className="absolute left-0 right-0 top-8 hidden h-px gold-line lg:block"
            aria-hidden="true"
          />

          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.1}>
                <li className="relative">
                  <motion.div
                    className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-surface font-display text-xl text-gold"
                    whileInView={{ scale: [0.9, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {step.step}
                  </motion.div>
                  <h3 className="font-display text-2xl text-white">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted">{step.description}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
