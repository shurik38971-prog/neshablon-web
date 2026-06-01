import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { advantages } from "@/lib/content";

export function Advantages() {
  return (
    <Section id="advantages" className="scroll-mt-20">
      <SectionHeading
        label="Преимущества"
        title="Что вы получаете"
        description="Конкретные решения под бизнес — без общих обещаний и конструкторов."
      />

      <div className="grid gap-5 md:grid-cols-2 md:gap-6">
        {advantages.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.06}>
            <article className="card-premium group h-full p-7 sm:p-9 lg:p-10">
              <span className="font-display text-4xl font-light text-gold/35 transition-colors group-hover:text-gold/65 sm:text-5xl">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-display text-xl text-white sm:text-2xl lg:text-[1.75rem]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                {item.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
