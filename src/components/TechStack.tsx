import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { techStack } from "@/lib/content";

export function TechStack() {
  return (
    <section id="stack" className="border-t border-border py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          label="Технологии"
          title="Современный стек"
          description="Не конструктор и не шаблон — профессиональная разработка на инструментах уровня зарубежных студий."
        />

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {techStack.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.06}>
              <li className="group flex h-full flex-col rounded-2xl border border-border bg-surface/50 p-6 transition-colors hover:border-gold/35">
                <span className="font-display text-2xl text-white transition-colors group-hover:text-gold">
                  {item.name}
                </span>
                <p className="mt-3 text-xs leading-relaxed text-muted">
                  {item.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
