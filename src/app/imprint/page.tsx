"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { LegalShell } from "@/components/layout/legal-shell";
import { useSite } from "@/lib/i18n";

export default function ImprintPage() {
  const { ui, profile } = useSite();
  const t = ui.legal.imprint;

  return (
    <LegalShell>
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
        {t.title}
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">{t.subtitle}</p>

      <section className="mt-10">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-500">{t.responsibleHeading}</h2>
        <div className="mt-3 space-y-1.5 text-sm leading-relaxed text-muted-foreground">
          <p className="font-medium text-foreground">{profile.name}</p>
          <p className="inline-flex items-center gap-2">
            <MapPin className="size-4 text-brand-500" /> {profile.location}
          </p>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-500">{t.contactHeading}</h2>
        <div className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted-foreground">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <Mail className="size-4 text-brand-500" /> {profile.email}
          </a>
          <br />
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <Phone className="size-4 text-brand-500" /> {profile.phone}
          </a>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-500">{t.disclaimerHeading}</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.disclaimer}</p>
      </section>

      <section className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-500">{t.copyrightHeading}</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.copyright}</p>
      </section>
    </LegalShell>
  );
}
