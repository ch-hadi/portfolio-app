"use client";

import { BadgeCheck, Globe2, MapPin, Plane, ShieldCheck } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { workAuth } from "@/data/site";

const icons = [ShieldCheck, MapPin, Globe2, Plane];

export function Visa() {
  return (
    <Section id="visa" className="bg-muted/20">
      <SectionHeader
        kicker="Work authorization"
        title={<>EU-authorized, <span className="text-brand-gradient">ready to start</span>.</>}
        description="Based in Salzburg with legal work authorization in Austria, so there's no relocation friction and no visa wait. Available on-site in the DACH region and fully remote worldwide."
      />

      <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {workAuth.points.map((point, i) => {
          const Icon = icons[i] ?? BadgeCheck;
          return (
            <StaggerItem key={point.label}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-ring/40 card-shadow">
                <div className="pointer-events-none absolute -right-8 -top-8 size-24 rounded-full bg-brand-600/10 blur-2xl transition-opacity group-hover:opacity-100" />
                <span className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600/15 to-cyan-accent/15 text-brand-500">
                  <Icon className="size-5" />
                </span>
                <p className="mt-4 text-xs font-medium uppercase tracking-wide text-muted-foreground">{point.label}</p>
                <p className="mt-1 font-[family-name:var(--font-display)] text-lg font-semibold">{point.value}</p>
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>

      <div className="mt-6 flex items-center justify-center gap-2 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 px-5 py-4 text-center text-sm text-emerald-600 dark:text-emerald-400">
        <BadgeCheck className="size-4 shrink-0" />
        <span>
          {workAuth.status}. {workAuth.detail}. {workAuth.remote}.
        </span>
      </div>
    </Section>
  );
}
