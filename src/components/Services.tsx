import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { services } from "@/lib/content";

export function Services() {
  return (
    <Section id="services" className="scroll-mt-20">
      <SectionHeading
        label="Услуги"
        title="Что делаем"
        description="Прозрачные форматы и ориентир по стоимости — точную смету согласуем после брифа."
        align="center"
        className="mx-auto"
      />

      <ul className="grid gap-5 lg:grid-cols-3 lg:gap-6">
        {services.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.07}>
            <li
              className={`card-premium flex h-full flex-col p-6 sm:p-8 ${
                item.highlighted
                  ? "border-gold/35 bg-gradient-to-b from-gold/[0.08] to-surface/40"
                  : ""
              }`}
            >
              <h3 className="font-display text-2xl text-white sm:text-3xl">{item.title}</h3>

              <ul className="mt-6 flex-1 space-y-2.5">
                {item.features.map((feature) => (
                  <li key={feature} className="flex gap-2.5 text-sm text-muted sm:text-base">
                    <span className="text-gold" aria-hidden="true">
                      ·
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <p className="mt-8 font-display text-2xl text-gold sm:text-3xl">{item.price}</p>

              <Button
                href="#contact"
                variant={item.highlighted ? "primary" : "secondary"}
                className="mt-6 w-full"
              >
                Обсудить проект
              </Button>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
