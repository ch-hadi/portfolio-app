"use client";

import { LOCALES, useLocale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <div
      role="group"
      aria-label="Select language"
      className="flex items-center rounded-full border border-border bg-card/50 p-0.5 backdrop-blur"
    >
      {LOCALES.map(({ code, label, full }) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-label={full}
            aria-pressed={active}
            className={cn(
              "rounded-full px-2.5 py-1 text-xs font-semibold transition-colors",
              active ? "bg-brand-600 text-white" : "text-muted-foreground hover:text-foreground"
            )}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
