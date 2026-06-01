"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="border-t border-border py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          label="Отзывы"
          title="Что говорят клиенты"
          description="Предприниматели и владельцы локального бизнеса — наш основной фокус."
          align="center"
        />

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.author} delay={index * 0.1}>
              <motion.blockquote
                className="flex h-full flex-col justify-between rounded-2xl border border-border bg-surface/40 p-8"
                whileHover={{ borderColor: "rgba(201, 169, 98, 0.35)" }}
                transition={{ duration: 0.3 }}
              >
                <p className="font-display text-xl leading-relaxed text-white/90">
                  «{item.quote}»
                </p>
                <footer className="mt-8 border-t border-border pt-6">
                  <cite className="not-italic">
                    <span className="block text-sm font-medium text-white">
                      {item.author}
                    </span>
                    <span className="mt-1 block text-xs text-muted">{item.role}</span>
                  </cite>
                </footer>
              </motion.blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
