"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/lib/content";

function hasProjectUrl(url: string) {
  return url.length > 0 && url !== "#";
}

export function Portfolio() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="portfolio"
      className="scroll-mt-20 border-t border-border bg-[linear-gradient(180deg,rgba(201,169,98,0.04)_0%,transparent_28%)] py-20 sm:py-28 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[92rem] px-[var(--container-x)]">
        <Reveal>
          <div className="mb-14 text-center sm:mb-20 lg:mb-24">
            <p className="eyebrow">Портфолио</p>
            <h2 className="mt-5 font-display text-[clamp(2.5rem,7vw,5rem)] font-medium leading-[1.05] tracking-tight text-white">
              Наши проекты
            </h2>
            <p className="prose-muted mx-auto mt-6 max-w-2xl">
              Живые сайты с измеримым результатом — посмотрите, как мы решаем задачи
              в разных нишах.
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col gap-16 sm:gap-20 lg:gap-28">
          {projects.map((project, index) => {
            const live = hasProjectUrl(project.liveUrl);

            return (
              <Reveal key={project.id} delay={index * 0.04}>
                <article className="group">
                  <a
                    href={live ? project.liveUrl : "#contact"}
                    target={live ? "_blank" : undefined}
                    rel={live ? "noopener noreferrer" : undefined}
                    className="card-premium relative block overflow-hidden rounded-2xl sm:rounded-3xl"
                  >
                    <div className="relative aspect-[4/3] w-full sm:aspect-[16/10] sm:min-h-[min(65vh,580px)]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        unoptimized
                        priority={index === 0}
                        loading={index === 0 ? "eager" : "lazy"}
                        className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.04]"
                        sizes="(max-width: 768px) 100vw, 92rem"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />

                      <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs uppercase tracking-widest text-gold backdrop-blur-sm sm:left-6 sm:top-6">
                        {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                      </div>

                      <motion.div
                        className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        aria-hidden="true"
                      >
                        <span className="rounded-full border border-white/30 bg-white/10 px-6 py-2 text-sm text-white backdrop-blur-md">
                          Смотреть проект →
                        </span>
                      </motion.div>

                      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-10 lg:p-14">
                        <h3 className="font-display text-[clamp(1.75rem,4vw,3.25rem)] leading-tight text-white">
                          {project.title}
                        </h3>
                        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base lg:text-lg">
                          {project.description}
                        </p>
                        <p className="mt-3 text-xs text-gold sm:text-sm">{project.result}</p>
                      </div>
                    </div>
                  </a>

                  <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:items-center">
                    <Button
                      href={live ? project.liveUrl : "#contact"}
                      variant="primary"
                      external={live}
                      className="w-full px-10 py-4 text-base sm:w-auto"
                    >
                      Смотреть проект
                    </Button>
                    {!reduceMotion && (
                      <span className="hidden text-sm text-muted sm:inline">
                        Откроется в новой вкладке
                      </span>
                    )}
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
