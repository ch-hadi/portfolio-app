"use client";

import { GraduationCap, Languages as LanguagesIcon } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { education, languages } from "@/data/site";

export function Education() {
  return (
    <Section id="education">
      <SectionHeader
        kicker="Education & languages"
        title={<>Grounded in <span className="text-brand-gradient">computer science & AI</span>.</>}
        description="A software engineering foundation, now sharpened with graduate research in applied AI and computer vision."
      />

      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <Stagger className="space-y-5">
          {education.map((edu) => (
            <StaggerItem key={edu.degree}>
              <div className="flex gap-4 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-colors hover:border-ring/40 card-shadow">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600/15 to-cyan-accent/15 text-brand-500">
                  <GraduationCap className="size-5" />
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">{edu.degree}</h3>
                    {edu.current && (
                      <Badge className="border-emerald-500/30 bg-emerald-500/10 text-emerald-500">Enrolled</Badge>
                    )}
                  </div>
                  <p className="text-sm font-medium text-brand-500">{edu.school}</p>
                  <p className="text-xs text-muted-foreground">
                    {edu.location} · {edu.period}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {edu.focus.map((f) => (
                      <span key={f} className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal direction="left">
          <div className="h-full rounded-2xl border border-border bg-card/60 p-6 backdrop-blur card-shadow">
            <p className="mb-5 inline-flex items-center gap-2 font-[family-name:var(--font-display)] text-lg font-semibold">
              <LanguagesIcon className="size-5 text-brand-500" /> Languages
            </p>
            <div className="space-y-4">
              {languages.map((lang) => (
                <div key={lang.name} className="flex items-center justify-between gap-3 border-b border-border pb-4 last:border-0 last:pb-0">
                  <div>
                    <p className="text-sm font-semibold">{lang.name}</p>
                    <p className="text-xs text-muted-foreground">{lang.level}</p>
                  </div>
                  <Badge className="shrink-0 border-brand-500/30 bg-brand-500/10 text-brand-500">{lang.badge}</Badge>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
