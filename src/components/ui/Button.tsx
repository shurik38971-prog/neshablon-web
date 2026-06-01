import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gold text-black hover:bg-gold-light border border-gold/80 shadow-[0_0_40px_-12px_rgba(201,169,98,0.5)]",
  secondary:
    "bg-transparent text-white border border-white/20 hover:border-gold/60 hover:text-gold",
  ghost: "bg-transparent text-muted hover:text-white border border-transparent",
};

type BaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type ButtonAsButton = BaseProps &
  ComponentPropsWithoutRef<"button"> & { href?: undefined };

type ButtonAsLink = BaseProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, "href"> & {
    href: string;
    external?: boolean;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseClass =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${baseClass} ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, external, ...linkProps } = props;

    if (external || isExternalHref(href)) {
      const isPlaceholder = href === "#";
      return (
        <a
          href={href}
          className={`${classes}${isPlaceholder ? " pointer-events-none opacity-50" : ""}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-disabled={isPlaceholder || undefined}
          {...(linkProps as ComponentPropsWithoutRef<"a">)}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = props as ButtonAsButton;
  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
