"use client";

import { TelegramButton } from "@/components/ui/TelegramButton";

export function MobileCtaBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/90 p-3 backdrop-blur-xl md:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <TelegramButton
        variant="primary"
        className="w-full py-3.5 text-sm"
        label="Написать в Telegram"
      />
    </div>
  );
}
