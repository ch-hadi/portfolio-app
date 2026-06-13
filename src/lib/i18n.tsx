"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import * as EN from "@/data/site";
import { de as deRaw } from "@/data/site.de";

export type Locale = "en" | "de";

export const LOCALES: { code: Locale; label: string; full: string }[] = [
  { code: "en", label: "EN", full: "English" },
  { code: "de", label: "DE", full: "Deutsch" },
];

const en = {
  profile: EN.profile,
  brand: EN.brand,
  bio: EN.bio,
  stats: EN.stats,
  skillGroups: EN.skillGroups,
  experience: EN.experience,
  projects: EN.projects,
  currentProject: EN.currentProject,
  research: EN.research,
  education: EN.education,
  achievements: EN.achievements,
  languages: EN.languages,
  workAuth: EN.workAuth,
  services: EN.services,
  navLinks: EN.navLinks,
  ui: EN.ui,
};

export type SiteBundle = typeof en;

const bundles: Record<Locale, SiteBundle> = {
  en,
  de: deRaw as unknown as SiteBundle,
};

const STORAGE_KEY = "locale";

function isLocale(v: string | null): v is Locale {
  return v === "en" || v === "de";
}

type LocaleContextValue = { locale: Locale; setLocale: (l: Locale) => void };

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
    if (isLocale(stored)) setLocaleState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
      document.cookie = `NEXT_LOCALE=${l};path=/;max-age=31536000;samesite=lax`;
    } catch {
      /* storage unavailable */
    }
  }, []);

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}

/** Returns the full content bundle for the active locale. */
export function useSite(): SiteBundle {
  const { locale } = useLocale();
  return bundles[locale];
}
