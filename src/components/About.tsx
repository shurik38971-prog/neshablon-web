import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { about } from "@/lib/content";

export function About() {
  return (
    <Section id="about" className="scroll-mt-20 bg-surface/20" size="compact">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">О студии</p>
          <h2 className="mt-4 font-display text-3xl text-white sm:text-4xl">
            {about.title}
          </h2>
          <p className="prose-muted mx-auto mt-5">{about.description}</p>
        </div>
      </Reveal>
    </Section>
  );
}
