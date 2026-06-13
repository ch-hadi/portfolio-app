"use client";

import { Mail } from "lucide-react";
import { LegalShell } from "@/components/layout/legal-shell";
import { useSite } from "@/lib/i18n";

export default function PrivacyPage() {
  const { ui, profile } = useSite();
  const t = ui.legal.privacy;

  return (
    <LegalShell>
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
        {t.title}
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">{t.subtitle}</p>

      <p className="mt-8 text-sm leading-relaxed text-muted-foreground">{t.intro}</p>

      <div className="mt-8 space-y-8">
        {t.sections.map((s) => (
          <section key={s.heading}>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-500">{s.heading}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
          </section>
        ))}
      </div>

      <a
        href={`mailto:${profile.email}`}
        className="mt-10 inline-flex items-center gap-2 rounded-lg border border-border bg-card/60 px-4 py-2.5 text-sm font-medium transition-colors hover:border-ring/40"
      >
        <Mail className="size-4 text-brand-500" /> {profile.email}
      </a>
    </LegalShell>
  );
}
