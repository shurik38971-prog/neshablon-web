import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { techStack } from "@/lib/content";

export function TechStack() {
  return (
    <Section id="stack" className="scroll-mt-20 bg-surface/30">
      <SectionHeading
        label="Технологии"
        title="Современный стек"
        description="Не конструктор — профессиональная разработка на инструментах уровня зарубежных продуктовых команд."
        align="center"
        className="mx-auto"
      />

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {techStack.map((item, index) => (
          <Reveal key={item.name} delay={index * 0.05}>
            <li className="card-premium flex h-full flex-col p-5 sm:p-6">
              <span className="font-display text-xl text-white sm:text-2xl">{item.name}</span>
              <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                {item.description}
              </p>
            </li>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={0.2}>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted">
          Клиенту не обязательно разбираться в технологиях — важно, что сайт быстрый,
          надёжный и готов к росту.
        </p>
      </Reveal>
    </Section>
  );
}
