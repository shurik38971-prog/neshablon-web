import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { whyUs } from "@/lib/content";

export function WhyUs() {
  return (
    <Section id="why-us" className="scroll-mt-20">
      <SectionHeading
        label="Отличие"
        title='Почему «Не шаблон»'
        description="Клиент покупает не сайт — а результат. Строим проекты под заявки, доверие и рост бизнеса."
      />

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {whyUs.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.05}>
            <li
              className={`card-premium flex gap-4 p-5 sm:p-6 ${
                index === whyUs.length - 1 ? "sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""
              }`}
            >
              <span
                className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/45 text-sm text-gold"
                aria-hidden="true"
              >
                ✓
              </span>
              <div>
                <h3 className="font-display text-lg text-white sm:text-xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
