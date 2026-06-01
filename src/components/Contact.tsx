"use client";

import { FormEvent, useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { TelegramButton } from "@/components/ui/TelegramButton";
import { site } from "@/lib/content";

type FormState = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-border bg-surface/60 px-5 py-3.5 text-base text-white placeholder:text-muted/60 transition-colors focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/30 sm:py-4 sm:text-sm";

const trustPoints = [
  "Бесплатная консультация по структуре сайта",
  "Фиксируем сроки и этапы до старта",
  "Передаём проект с аналитикой и инструкцией",
];

export function Contact() {
  const [status, setStatus] = useState<FormState>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    if (!data.get("name") || !data.get("phone")) {
      setStatus("error");
      return;
    }

    await new Promise((r) => setTimeout(r, 800));
    setStatus("success");
    form.reset();
  }

  return (
    <Section id="contact" className="scroll-mt-20" size="large">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            label="Контакты"
            title="Обсудим ваш проект"
            description="Оставьте заявку или напишите в Telegram — ответим в течение рабочего дня."
          />
          <Reveal delay={0.1}>
            <ul className="space-y-3 text-sm text-muted">
              {trustPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="text-gold" aria-hidden="true">
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <ul className="mt-8 space-y-3 text-sm">
              <li>
                <span className="text-muted">Email: </span>
                <a
                  href={`mailto:${site.email}`}
                  className="text-white transition-colors hover:text-gold"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <span className="text-muted">Telegram: </span>
                <a
                  href={site.telegram}
                  className="text-white transition-colors hover:text-gold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {site.telegramHandle}
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <TelegramButton
                variant="primary"
                className="w-full px-8 py-4 text-base sm:w-auto"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <form
            onSubmit={handleSubmit}
            className="card-premium p-6 sm:p-8 md:p-10"
          >
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
              <label className="sm:col-span-2">
                <span className="mb-2 block text-xs uppercase tracking-wider text-muted">
                  Имя *
                </span>
                <input
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  className={inputClass}
                  placeholder="Как к вам обращаться"
                />
              </label>
              <label>
                <span className="mb-2 block text-xs uppercase tracking-wider text-muted">
                  Телефон *
                </span>
                <input
                  type="tel"
                  name="phone"
                  required
                  autoComplete="tel"
                  className={inputClass}
                  placeholder="+7 (___) ___-__-__"
                />
              </label>
              <label>
                <span className="mb-2 block text-xs uppercase tracking-wider text-muted">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  className={inputClass}
                  placeholder="mail@company.ru"
                />
              </label>
              <label className="sm:col-span-2">
                <span className="mb-2 block text-xs uppercase tracking-wider text-muted">
                  О проекте
                </span>
                <textarea
                  name="message"
                  rows={4}
                  className={`${inputClass} resize-none`}
                  placeholder="Ниша, сроки, что важно на сайте"
                />
              </label>
            </div>

            {status === "error" && (
              <p className="mt-4 text-sm text-red-400" role="alert">
                Заполните обязательные поля: имя и телефон.
              </p>
            )}
            {status === "success" && (
              <p className="mt-4 text-sm text-gold" role="status">
                Спасибо! Мы свяжемся с вами в ближайшее время.
              </p>
            )}

            <div className="mt-6 flex flex-col gap-3 sm:mt-8">
              <TelegramButton variant="primary" className="w-full py-4 text-base" />
              <Button
                type="submit"
                variant="secondary"
                className="w-full py-4 text-base"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Отправка…" : "Отправить заявку"}
              </Button>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-muted">
              Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
