"use client";

import { m } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { useSite } from "@/lib/i18n";

export function Experience() {
  const { experience, ui } = useSite();
  return (
    <Section id="experience">
      <SectionHeader
        kicker={ui.experience.kicker}
        title={<>{ui.experience.title[0]}<span className="text-brand-gradient">{ui.experience.title[1]}</span>{ui.experience.title[2]}</>}
        description={ui.experience.description}
      />

      <div className="relative">
        {/* Timeline spine */}
        <div className="absolute left-[1.05rem] top-2 bottom-2 w-px bg-gradient-to-b from-brand-500/60 via-border to-transparent" />

        <div className="space-y-8">
          {experience.map((job, i) => (
            <Reveal key={`${job.company}-${i}`} direction="up" delay={0.05}>
              <div className="relative pl-12 sm:pl-14">
                {/* Node */}
                <span className="absolute left-[1.05rem] top-4 z-10 flex size-9 -translate-x-1/2 items-center justify-center rounded-full border border-border bg-card">
                  <m.span
                    className="flex size-9 items-center justify-center rounded-full"
                    whileInView={job.current ? { boxShadow: ["0 0 0 0 rgba(244,35,47,0.5)", "0 0 0 10px rgba(244,35,47,0)"] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Briefcase className="size-4 text-brand-500" />
                  </m.span>
                </span>

                <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-colors hover:border-ring/40 card-shadow sm:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">{job.role}</h3>
                      <p className="text-sm font-medium text-brand-500">
                        {job.company}
                        <span className="text-muted-foreground"> · {job.location}</span>
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge>{job.period}</Badge>
                      {job.current && (
                        <Badge className="border-emerald-500/30 bg-emerald-500/10 text-emerald-500">{ui.experience.current}</Badge>
                      )}
                    </div>
                  </div>

                  <ul className="mt-4 grid gap-x-8 gap-y-2 text-sm leading-relaxed text-muted-foreground md:grid-cols-2">
                    {job.highlights.map((h, hi) => (
                      <li key={hi} className="relative pl-4 before:absolute before:left-0 before:top-2.5 before:size-1.5 before:rounded-full before:bg-brand-500/60">
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <span key={t} className="rounded-md bg-muted px-2 py-0.5 font-[family-name:var(--font-mono)] text-xs text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
