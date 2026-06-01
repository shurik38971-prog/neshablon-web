"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/lib/content";

export function Portfolio() {
  return (
    <section id="portfolio" className="border-t border-border py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          label="Портфолио"
          title="Избранные кейсы"
          description="Результаты для бизнеса — не «красивые страницы», а заявки, запись и доверие к бренду."
        />

        <div className="flex flex-col gap-16 lg:gap-24">
          {projects.map((project, index) => {
            const hasLiveUrl =
              Boolean(project.liveUrl) && project.liveUrl !== "#";

            return (
              <Reveal key={project.id} delay={0.1}>
                <article
                  className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                    index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <motion.div
                    className="relative aspect-[4/3] min-h-[240px] overflow-hidden rounded-2xl border border-border bg-surface"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      unoptimized
                      priority={index === 0}
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </motion.div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-gold">
                      Кейс {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-4 font-display text-3xl text-white md:text-4xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 max-w-md leading-relaxed text-muted">
                      {project.description}
                    </p>
                    <p className="mt-3 text-sm text-gold/90">{project.result}</p>
                    <div className="mt-8 flex flex-wrap gap-4">
                      <Button
                        href={hasLiveUrl ? project.liveUrl : "#contact"}
                        variant="secondary"
                        external={hasLiveUrl}
                      >
                        {hasLiveUrl ? "Открыть проект" : "Обсудить похожий"}
                      </Button>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
