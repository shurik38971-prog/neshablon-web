import { Reveal } from "@/components/ui/Reveal";

type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`mb-12 max-w-3xl sm:mb-16 lg:mb-20 ${alignClass} ${className}`}>
      <Reveal y={16}>
        <p className="eyebrow">{label}</p>
      </Reveal>
      <Reveal delay={0.06} y={20}>
        <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.25rem)] font-medium leading-[1.12] tracking-tight text-white">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.12} y={16}>
          <p className="prose-muted mt-5 max-w-2xl">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
