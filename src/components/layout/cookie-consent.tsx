"use client";

import { AnimatePresence, m } from "framer-motion";
import { Cookie } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSite } from "@/lib/i18n";

const STORAGE_KEY = "cookie-consent";

export function CookieConsent() {
  const { ui } = useSite();
  const c = ui.cookie;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored !== "accepted" && stored !== "essential") {
        // small delay so it doesn't fight the page loader
        const t = setTimeout(() => setVisible(true), 900);
        return () => clearTimeout(t);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const choose = (value: "accepted" | "essential") => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* storage unavailable */
    }
    // Update Google Consent Mode v2 based on the choice.
    window.gtag?.("consent", "update", {
      analytics_storage: value === "accepted" ? "granted" : "denied",
    });
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <m.div
          role="dialog"
          aria-label={c.title}
          aria-live="polite"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed inset-x-4 bottom-4 z-[120] mx-auto max-w-xl rounded-2xl border border-border bg-card/95 p-5 shadow-2xl backdrop-blur sm:p-6"
        >
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-600/15 to-cyan-accent/15 text-brand-500">
              <Cookie className="size-4" />
            </span>
            <div className="flex-1">
              <p className="font-[family-name:var(--font-display)] text-sm font-semibold">{c.title}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                {c.message}{" "}
                <Link href="/privacy" className="font-medium text-brand-700 underline-offset-2 hover:underline dark:text-brand-300">
                  {c.learnMore}
                </Link>
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                <button
                  type="button"
                  onClick={() => choose("accepted")}
                  className="rounded-lg bg-brand-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-brand-700"
                >
                  {c.accept}
                </button>
                <button
                  type="button"
                  onClick={() => choose("essential")}
                  className="rounded-lg border border-border bg-transparent px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {c.decline}
                </button>
              </div>
            </div>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
