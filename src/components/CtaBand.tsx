"use client";

import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { TelegramButton } from "@/components/ui/TelegramButton";

type CtaBandProps = {
  title: string;
  description: string;
  primaryTelegram?: boolean;
};

export function CtaBand({
  title,
  description,
  primaryTelegram = true,
}: CtaBandProps) {
  return (
    <Section size="compact" className="bg-surface/40">
      <Reveal>
        <div className="flex flex-col items-center gap-8 rounded-2xl border border-gold/15 bg-gradient-to-br from-gold/[0.08] via-surface-elevated/80 to-background px-6 py-12 text-center sm:px-12 sm:py-14 lg:flex-row lg:justify-between lg:text-left">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl text-white sm:text-3xl lg:text-4xl">
              {title}
            </h2>
            <p className="prose-muted mt-3 text-base">{description}</p>
          </div>
          <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
            {primaryTelegram ? (
              <TelegramButton
                variant="primary"
                className="w-full px-8 py-4 text-base sm:w-auto"
              />
            ) : null}
            <Button
              href="#contact"
              variant="secondary"
              className="w-full px-8 py-4 text-base sm:w-auto"
            >
              Оставить заявку
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
