import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className = "", priority = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center transition-opacity hover:opacity-90 ${className}`}
      aria-label="Не шаблон — на главную"
    >
      <Image
        src="/logo.png"
        alt="Не шаблон"
        width={540}
        height={96}
        priority={priority}
        className="h-8 w-auto sm:h-10 md:h-11"
      />
    </Link>
  );
}
