import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { whyUs } from "@/lib/content";

export function WhyUs() {
  return (
    <section id="why-us" className="border-t border-border py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          label="Отличие"
          title='Почему «Не шаблон»'
          description="Клиент покупает не сайт — а результат. Мы строим проекты под заявки, доверие и рост бизнеса."
        />

        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.07}>
              <li className="flex gap-4 rounded-2xl border border-border bg-surface/40 p-6 transition-colors hover:border-gold/25">
                <span
                  className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/50 text-sm text-gold"
                  aria-hidden="true"
                >
                  ✓
                </span>
                <div>
                  <h3 className="font-display text-xl text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
