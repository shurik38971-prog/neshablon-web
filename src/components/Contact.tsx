"use client";

import { FormEvent, useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { TelegramButton } from "@/components/ui/TelegramButton";
import { site } from "@/lib/content";

type FormState = "idle" | "submitting" | "success" | "error" | "config_error";

const inputClass =
  "w-full rounded-xl border border-border bg-surface/60 px-5 py-3.5 text-base text-white placeholder:text-muted/60 transition-colors focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/30 sm:py-4 sm:text-sm";

const trustPoints = [
  "Бесплатная консультация по структуре сайта",
  "Фиксируем сроки и этапы до старта",
  "Передаём проект с аналитикой и инструкцией",
];

export function Contact() {
  const [status, setStatus] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formStartedAt, setFormStartedAt] = useState(() => Date.now());

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();

    if (!name || !phone) {
      setStatus("error");
      setErrorMessage("Заполните обязательные поля: имя и телефон.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email: String(data.get("email") ?? "").trim() || undefined,
          message: String(data.get("message") ?? "").trim() || undefined,
          website: String(data.get("website") ?? "").trim(),
          formStartedAt,
        }),
      });

      const result = (await response.json().catch(() => ({}))) as {
        error?: string;
        message?: string;
      };

      if (!response.ok) {
        if (result.error === "not_configured") {
          setStatus("config_error");
          setErrorMessage(
            result.message ??
              "Отправка с сайта ещё не настроена. Напишите нам в Telegram — ответим быстрее.",
          );
          return;
        }

        setStatus(result.error === "delivery_failed" ? "config_error" : "error");
        setErrorMessage(
          result.message ?? "Не удалось отправить заявку. Попробуйте Telegram или позже.",
        );
        return;
      }

      setStatus("success");
      form.reset();
      setFormStartedAt(Date.now());
    } catch {
      setStatus("error");
      setErrorMessage("Нет связи с сервером. Напишите в Telegram или попробуйте позже.");
    }
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
            <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
              <label>
                Сайт
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </label>
            </div>
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
                  disabled={status === "submitting"}
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
                  disabled={status === "submitting"}
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
                  disabled={status === "submitting"}
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
                  disabled={status === "submitting"}
                />
              </label>
            </div>

            {(status === "error" || status === "config_error") && errorMessage && (
              <p className="mt-4 text-sm text-red-400" role="alert">
                {errorMessage}
              </p>
            )}
            {status === "config_error" && (
              <div className="mt-4">
                <TelegramButton variant="primary" className="w-full py-3.5 text-sm" />
              </div>
            )}
            {status === "success" && (
              <p className="mt-4 text-sm text-gold" role="status">
                Спасибо! Заявка отправлена — свяжемся с вами в ближайшее время.
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
