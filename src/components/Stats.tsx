"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { stats } from "@/lib/content";

export function Stats() {
  return (
    <section
      aria-label="Ключевые показатели"
      className="border-y border-border bg-surface/30 py-14"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ul className="grid grid-cols-2 gap-10 lg:grid-cols-4 lg:gap-6">
          {stats.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.06}>
              <li className="text-center lg:text-left">
                <motion.p
                  className="font-display text-4xl text-gold md:text-5xl"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  {item.value}
                </motion.p>
                <p className="mt-2 text-sm text-muted">{item.label}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
