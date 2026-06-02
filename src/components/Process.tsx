"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { processSteps } from "@/lib/content";

export function Process() {
  const reduceMotion = useReducedMotion();

  return (
    <Section id="process" className="scroll-mt-20 bg-surface/20">
      <SectionHeading
        label="Процесс"
        title="Как проходит работа"
        description="Четыре понятных этапа — от первого созвона до запуска и поддержки."
        align="center"
        className="mx-auto"
      />

      <div className="relative">
        <div
          className="absolute left-[12.5%] right-[12.5%] top-[2.75rem] hidden h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent lg:block"
          aria-hidden="true"
        />

        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.07}>
              <li className="card-premium group relative flex h-full flex-col p-6 sm:p-7 lg:pt-8">
                <div className="mb-5 flex items-start justify-between gap-3">
                  <motion.span
                    className="font-display text-4xl leading-none text-gold/90 transition-colors group-hover:text-gold sm:text-5xl"
                    initial={reduceMotion ? false : { opacity: 0.6 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                  >
                    {step.step}
                  </motion.span>
                  {index < processSteps.length - 1 && (
                    <span
                      className="mt-2 hidden text-gold/40 lg:inline"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  )}
                </div>
                <h3 className="font-display text-xl leading-snug text-white sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted sm:text-base">
                  {step.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
