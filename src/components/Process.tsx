"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { processSteps } from "@/lib/content";

export function Process() {
  const reduceMotion = useReducedMotion();

  return (
    <Section id="process" className="scroll-mt-20">
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

        <ol className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.08}>
              <li className="relative">
                <motion.div
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-surface font-display text-lg text-gold sm:mb-6 sm:h-16 sm:w-16 sm:text-xl"
                  initial={reduceMotion ? false : { scale: 0.92 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  {step.step}
                </motion.div>
                <h3 className="font-display text-xl text-white sm:text-2xl">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
