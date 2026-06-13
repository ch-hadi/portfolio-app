"use client";

import { m } from "framer-motion";
import {
  Activity,
  AudioWaveform,
  Brain,
  CheckCircle2,
  CircleDashed,
  Eye,
  FlaskConical,
  GraduationCap,
  Grid2x2,
  MapPin,
  Microscope,
  Minimize2,
  Network,
  Scan,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { useSite } from "@/lib/i18n";

const interestIcons: Record<string, LucideIcon> = {
  Eye,
  Scan,
  Minimize2,
  AudioWaveform,
  Brain,
  Network,
  Grid2x2,
  Microscope,
};

export function Research() {
  const { research, ui } = useSite();
  const r = ui.research;

  return (
    <Section id="research" className="bg-muted/20">
      <SectionHeader
        kicker={r.kicker}
        title={
          <>
            {r.title[0]}
            <span className="text-brand-gradient">{r.title[1]}</span>
            {r.title[2]}
          </>
        }
        description={r.description}
      />

      {/* ── Hero: academic identity + active research project ────────── */}
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card/50 p-8 backdrop-blur card-shadow sm:p-10 lg:p-12">
          <div className="pointer-events-none absolute -left-24 -top-24 size-72 rounded-full bg-brand-600/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 size-72 rounded-full bg-cyan-accent/15 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_1.15fr]">
            {/* Left — academic identity */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-sm font-medium text-emerald-500">
                <Activity className="size-4 animate-pulse" /> {research.status}
              </span>

              <h3 className="mt-5 flex items-start gap-3 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight sm:text-3xl">
                <span className="mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600/15 to-cyan-accent/15 text-brand-500">
                  <GraduationCap className="size-5" />
                </span>
                <span>{research.degree}</span>
              </h3>

              <p className="mt-3 text-sm font-medium text-brand-500">{research.institution}</p>
              <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <MapPin className="size-3.5" /> {research.location} · {research.enrolled}
              </p>

              <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">{research.intro}</p>
            </div>

            {/* Right — research project card */}
            <div className="rounded-2xl border border-border bg-background/50 p-6 sm:p-7">
              <span className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-brand-500">
                <FlaskConical className="size-4" /> {research.project.title}
              </span>

              <div className="mt-4 rounded-xl border border-brand-500/25 bg-brand-500/5 p-4">
                <p className="text-[0.7rem] font-semibold uppercase tracking-wide text-muted-foreground">
                  {research.project.questionLabel}
                </p>
                <p className="mt-1.5 font-[family-name:var(--font-display)] text-base font-semibold leading-snug">
                  {research.project.question}
                </p>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{research.project.summary}</p>

              {/* headline metrics */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                {research.metrics.map((m) => (
                  <div key={m.label} className="rounded-xl border border-border bg-card/60 p-3.5">
                    <p className="text-brand-gradient font-[family-name:var(--font-display)] text-2xl font-bold">
                      {m.value}
                    </p>
                    <p className="mt-0.5 text-xs leading-tight text-muted-foreground">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* ── Research focus areas ─────────────────────────────────────── */}
      <div className="mt-12">
        <p className="mb-5 inline-flex items-center gap-2 text-sm font-semibold">
          <span className="h-px w-6 bg-gradient-to-r from-brand-500 to-cyan-accent" /> {r.focusAreas}
        </p>
        <Stagger className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {research.interests.map((interest) => {
            const Icon = interestIcons[interest.icon] ?? Brain;
            return (
              <StaggerItem key={interest.label}>
                <div className="group flex h-full items-center gap-3 rounded-2xl border border-border bg-card/60 p-4 transition-colors hover:border-ring/40">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-600/15 to-cyan-accent/15 text-brand-500 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="size-4" />
                  </span>
                  <span className="text-sm font-medium leading-tight">{interest.label}</span>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>

      {/* ── Research approach: visual timeline ───────────────────────── */}
      <div className="mt-12">
        <p className="mb-7 inline-flex items-center gap-2 text-sm font-semibold">
          <span className="h-px w-6 bg-gradient-to-r from-brand-500 to-cyan-accent" /> {r.approach}
        </p>

        <div className="relative">
          {/* connector line (desktop) */}
          <div className="pointer-events-none absolute left-0 right-0 top-5 hidden h-px bg-gradient-to-r from-brand-500/50 via-border to-cyan-accent/50 lg:block" />

          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {research.timeline.map((step) => (
              <StaggerItem key={step.phase} className="h-full">
                <div className="relative flex h-full flex-col">
                  {/* numbered node */}
                  <span
                    className={`relative z-10 flex size-10 items-center justify-center rounded-full border font-[family-name:var(--font-mono)] text-sm font-bold backdrop-blur ${
                      step.done
                        ? "border-brand-500/40 bg-background text-brand-500"
                        : "border-emerald-500/40 bg-background text-emerald-500"
                    }`}
                  >
                    {step.phase}
                    {!step.done && (
                      <m.span
                        className="absolute inset-0 rounded-full border border-emerald-500/60"
                        animate={{ scale: [1, 1.35, 1], opacity: [0.7, 0, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      />
                    )}
                  </span>

                  <div className="mt-4 flex-1 rounded-2xl border border-border bg-card/60 p-5 backdrop-blur transition-colors hover:border-ring/40 card-shadow">
                    <h4 className="font-[family-name:var(--font-display)] text-[0.95rem] font-semibold leading-snug">
                      {step.title}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{step.desc}</p>
                    <span
                      className={`mt-3 inline-flex items-center gap-1.5 text-[0.7rem] font-medium ${
                        step.done ? "text-brand-500" : "text-emerald-500"
                      }`}
                    >
                      {step.done ? <CheckCircle2 className="size-3.5" /> : <CircleDashed className="size-3.5" />}
                      {step.done ? r.done : r.inProgress}
                    </span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>

      {/* ── Models & methods ─────────────────────────────────────────── */}
      <div className="mt-12">
        <p className="mb-5 inline-flex items-center gap-2 text-sm font-semibold">
          <span className="h-px w-6 bg-gradient-to-r from-brand-500 to-cyan-accent" /> {r.models}
        </p>
        <div className="flex flex-wrap gap-2">
          {research.models.map((m) => (
            <span
              key={m}
              className="inline-flex items-center gap-1.5 rounded-lg border border-brand-500/30 bg-brand-500/10 px-3 py-1.5 font-[family-name:var(--font-mono)] text-xs font-medium text-brand-700 dark:text-brand-300"
            >
              <span className="size-1.5 rounded-full bg-brand-500" />
              {m}
            </span>
          ))}
        </div>
      </div>

      {/* ── Tools & libraries ────────────────────────────────────────── */}
      <div className="mt-10">
        <p className="mb-5 inline-flex items-center gap-2 text-sm font-semibold">
          <span className="h-px w-6 bg-gradient-to-r from-brand-500 to-cyan-accent" /> {r.tools}
        </p>
        <div className="flex flex-wrap gap-2">
          {research.tech.map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card/60 px-3 py-1.5 font-[family-name:var(--font-mono)] text-xs text-muted-foreground"
            >
              <span className="size-1.5 rounded-full bg-brand-500/70" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
