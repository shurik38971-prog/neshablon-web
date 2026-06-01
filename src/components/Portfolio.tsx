"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/lib/content";

function hasProjectUrl(url: string) {
  return url.length > 0 && url !== "#";
}

export function Portfolio() {
  return (
    <section id="portfolio" className="border-t border-border py-32 lg:py-44">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-10">
        <Reveal>
          <div className="mb-20 text-center lg:mb-28">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
              Портфолио
            </p>
            <h2 className="mt-5 font-display text-5xl font-medium text-white sm:text-6xl lg:text-7xl">
              Наши проекты
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base text-muted sm:text-lg">
              Реальные сайты для клиник, недвижимости и локального бизнеса —
              с фокусом на заявки и доверие к бренду.
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col gap-24 lg:gap-36">
          {projects.map((project, index) => {
            const live = hasProjectUrl(project.liveUrl);

            return (
              <Reveal key={project.id} delay={0.05}>
                <article className="group">
                  <a
                    href={live ? project.liveUrl : "#contact"}
                    target={live ? "_blank" : undefined}
                    rel={live ? "noopener noreferrer" : undefined}
                    className="relative block overflow-hidden rounded-3xl border border-border bg-surface"
                  >
                    <div className="relative aspect-[16/10] min-h-[280px] w-full sm:min-h-[360px] lg:min-h-[min(70vh,640px)]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        unoptimized
                        priority={index === 0}
                        className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
                        sizes="100vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
                      <div className="absolute inset-x-0 bottom-0 p-8 sm:p-12 lg:p-16">
                        <p className="text-xs uppercase tracking-[0.3em] text-gold">
                          Кейс {String(index + 1).padStart(2, "0")}
                        </p>
                        <h3 className="mt-3 font-display text-3xl text-white sm:text-4xl lg:text-5xl">
                          {project.title}
                        </h3>
                        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
                          {project.description}
                        </p>
                        <p className="mt-3 text-sm text-gold/90">{project.result}</p>
                      </div>
                    </div>
                  </a>

                  <div className="mt-8 flex justify-center sm:justify-start">
                    <Button
                      href={live ? project.liveUrl : "#contact"}
                      variant="primary"
                      external={live}
                      className="px-10 py-4 text-base"
                    >
                      Смотреть проект
                    </Button>
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
