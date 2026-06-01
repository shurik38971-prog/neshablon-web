import { Reveal } from "@/components/ui/Reveal";

type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`mb-16 max-w-2xl ${alignClass}`}>
      <Reveal>
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-gold">
          {label}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display text-4xl font-medium leading-tight text-white md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="mt-5 text-base leading-relaxed text-muted">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
