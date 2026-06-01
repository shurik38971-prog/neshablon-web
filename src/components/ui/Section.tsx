import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  size?: "default" | "large" | "compact";
  border?: boolean;
};

const sizeClasses = {
  compact: "py-16 sm:py-20",
  default: "section-padding",
  large: "py-24 sm:py-32 lg:py-40",
};

export function Section({
  id,
  children,
  className = "",
  containerClassName = "",
  size = "default",
  border = true,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${border ? "border-t border-border" : ""} ${sizeClasses[size]} ${className}`}
    >
      <div className={`section-container ${containerClassName}`}>{children}</div>
    </section>
  );
}
