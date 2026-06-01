"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/content";

export function Stats() {
  return (
    <section
      aria-label="Ключевые показатели"
      className="border-y border-border bg-surface/30 py-14 lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ul className="grid grid-cols-1 sm:grid-cols-3">
          {stats.map((item, index) => (
            <li
              key={item.label}
              className={`flex flex-col items-center justify-center px-6 py-6 text-center sm:py-4 ${
                index > 0 ? "border-t border-border sm:border-t-0 sm:border-l" : ""
              }`}
            >
              <motion.p
                className="font-display text-4xl leading-none text-gold md:text-5xl"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                {item.value}
              </motion.p>
              <p className="mt-3 max-w-[12rem] text-sm leading-snug text-muted">
                {item.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
