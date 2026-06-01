"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <Section id="testimonials" className="scroll-mt-20">
      <SectionHeading
        label="Отзывы"
        title="Что говорят клиенты"
        description="Предприниматели и владельцы локального бизнеса — наш основной фокус."
        align="center"
        className="mx-auto"
      />

      <div className="grid gap-5 md:grid-cols-3 md:gap-6">
        {testimonials.map((item, index) => (
          <Reveal key={item.author} delay={index * 0.08}>
            <blockquote className="card-premium flex h-full flex-col justify-between p-6 sm:p-8">
              <p className="font-display text-lg leading-relaxed text-white/90 sm:text-xl">
                «{item.quote}»
              </p>
              <footer className="mt-8 border-t border-border pt-5">
                <cite className="not-italic">
                  <span className="block text-sm font-medium text-white">{item.author}</span>
                  <span className="mt-1 block text-xs text-muted">{item.role}</span>
                </cite>
              </footer>
            </blockquote>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
