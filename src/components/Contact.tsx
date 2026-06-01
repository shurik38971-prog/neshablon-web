"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/content";

type FormState = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-border bg-surface/60 px-5 py-4 text-sm text-white placeholder:text-muted/60 transition-colors focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/30";

function TelegramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

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
    <section id="contact" className="border-t border-border py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <SectionHeading
              label="Контакты"
              title="Обсудим ваш проект"
              description="Оставьте заявку — ответим в течение рабочего дня. Или напишите сразу в Telegram."
            />
            <Reveal delay={0.2}>
              <ul className="mt-10 space-y-4 text-sm text-muted">
                <li>
                  <span className="text-white">Email: </span>
                  <a
                    href={`mailto:${site.email}`}
                    className="transition-colors hover:text-gold"
                  >
                    {site.email}
                  </a>
                </li>
                <li>
                  <span className="text-white">Telegram: </span>
                  <a
                    href={site.telegram}
                    className="transition-colors hover:text-gold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {site.telegramHandle}
                  </a>
                </li>
              </ul>

              <div className="mt-8">
                <Button
                  href={site.telegram}
                  variant="secondary"
                  external
                  className="gap-2.5"
                >
                  <TelegramIcon />
                  Написать в Telegram
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <motion.form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-surface/30 p-8 md:p-10"
              initial={false}
            >
              <div className="grid gap-5 sm:grid-cols-2">
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

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full sm:w-auto"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? "Отправка…" : "Отправить заявку"}
                </Button>
                <Button
                  href={site.telegram}
                  variant="ghost"
                  external
                  className="w-full gap-2 sm:w-auto"
                >
                  <TelegramIcon />
                  Telegram
                </Button>
              </div>

              <p className="mt-4 text-xs text-muted">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
              </p>
            </motion.form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
