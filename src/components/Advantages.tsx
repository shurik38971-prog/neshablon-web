import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { advantages } from "@/lib/content";

export function Advantages() {
  return (
    <section id="advantages" className="border-t border-border py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          label="Преимущества"
          title="Почему с нами работают"
          description="Фокус на качестве, скорости и измеримом результате для вашего бизнеса."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="group relative h-full rounded-2xl border border-border bg-surface/50 p-8 transition-colors duration-500 hover:border-gold/30">
                <span className="font-display text-5xl font-light text-gold/40 transition-colors group-hover:text-gold/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-display text-2xl text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
