"use client";

import { m } from "framer-motion";
import { Activity, Cpu } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { useSite } from "@/lib/i18n";

export function CurrentProject() {
  const { currentProject, ui } = useSite();
  return (
    <Section id="current">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card/60 p-8 backdrop-blur card-shadow sm:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-brand-600/15 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-sm font-medium text-emerald-500">
                <Activity className="size-4 animate-pulse" /> {currentProject.status}
              </span>

              <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
                {ui.current.buildingPre}<span className="text-brand-gradient">{currentProject.name}</span>
              </h2>
              <p className="mt-2 text-sm font-medium text-muted-foreground">{currentProject.tag}</p>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">{currentProject.blurb}</p>

              {/* Progress */}
              <div className="mt-7">
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-medium">{ui.current.buildProgress}</span>
                  <span className="text-brand-500">{currentProject.progress}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-muted">
                  <m.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${currentProject.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                    className="relative h-full rounded-full bg-gradient-to-r from-brand-500 to-cyan-accent"
                  >
                    <span className="absolute inset-0 animate-pulse bg-white/20" />
                  </m.div>
                </div>
              </div>

              <div className="mt-7">
                <p className="mb-3 text-sm font-semibold">{ui.current.currentFocus}</p>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {currentProject.goals.map((g) => (
                    <li key={g} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-500" />
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Architecture stack */}
            <div className="rounded-2xl border border-border bg-background/50 p-6">
              <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold">
                <Cpu className="size-4 text-brand-500" /> {ui.current.architecture}
              </p>
              <div className="space-y-3">
                {currentProject.architecture.map((layer, i) => (
                  <m.div
                    key={layer.layer}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex items-center justify-between rounded-xl border border-border bg-card/60 px-4 py-3"
                  >
                    <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{layer.layer}</span>
                    <span className="font-[family-name:var(--font-mono)] text-sm">{layer.value}</span>
                  </m.div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {currentProject.tech.map((t) => (
                  <span key={t} className="rounded-md bg-muted px-2 py-0.5 font-[family-name:var(--font-mono)] text-xs text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
