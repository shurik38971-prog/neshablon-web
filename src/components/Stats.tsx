"use client";

import { motion, useReducedMotion } from "framer-motion";
import { stats } from "@/lib/content";

export function Stats() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Ключевые показатели"
      className="border-y border-border bg-surface/50"
    >
      <div className="section-container py-10 sm:py-12">
        <ul className="grid grid-cols-1 sm:grid-cols-3">
          {stats.map((item, index) => (
            <li
              key={item.label}
              className={`flex flex-col items-center justify-center px-4 py-5 text-center sm:py-3 ${
                index > 0 ? "border-t border-border sm:border-t-0 sm:border-l" : ""
              }`}
            >
              <motion.p
                className="font-display text-4xl leading-none text-gold md:text-[2.75rem]"
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                {item.value}
              </motion.p>
              <p className="mt-3 max-w-[11rem] text-sm leading-snug text-muted">
                {item.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
