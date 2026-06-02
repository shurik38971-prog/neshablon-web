import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { about } from "@/lib/content";

export function About() {
  return (
    <Section id="about" className="scroll-mt-20" size="compact">
      <Reveal>
        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-gradient-to-br from-surface-elevated/80 via-surface/50 to-background px-6 py-8 sm:px-10 sm:py-10">
          <p className="eyebrow">О студии</p>
          <p className="mt-4 font-display text-2xl text-white sm:text-3xl">
            {about.greeting}
          </p>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
