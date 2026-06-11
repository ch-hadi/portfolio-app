"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/data/site";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeader
        kicker="Experience"
        title={<>Five years of <span className="text-brand-gradient">shipping</span>.</>}
        description="A track record across Healthcare, EdTech, Real Estate and AI, with measurable impact at every stop."
      />

      <div className="relative">
        {/* Timeline spine */}
        <div className="absolute left-[1.05rem] top-2 bottom-2 w-px bg-gradient-to-b from-brand-500/60 via-border to-transparent md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-10">
          {experience.map((job, i) => (
            <Reveal key={`${job.company}-${i}`} direction={i % 2 === 0 ? "right" : "left"} delay={0.05}>
              <div
                className={`relative grid gap-4 md:grid-cols-2 ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`}
              >
                {/* Node */}
                <span className="absolute left-[1.05rem] top-4 z-10 flex size-9 -translate-x-1/2 items-center justify-center rounded-full border border-border bg-card md:left-1/2">
                  <motion.span
                    className="flex size-9 items-center justify-center rounded-full"
                    whileInView={job.current ? { boxShadow: ["0 0 0 0 rgba(124,77,255,0.5)", "0 0 0 10px rgba(124,77,255,0)"] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Briefcase className="size-4 text-brand-500" />
                  </motion.span>
                </span>

                <div className={`pl-12 md:pl-0 [direction:ltr] ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"}`}>
                  <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-colors hover:border-ring/40 card-shadow">
                    <div className={`flex flex-wrap items-center gap-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      <Badge>{job.period}</Badge>
                      {job.current && (
                        <Badge className="border-emerald-500/30 bg-emerald-500/10 text-emerald-500">Current</Badge>
                      )}
                    </div>
                    <h3 className="mt-3 font-[family-name:var(--font-display)] text-lg font-semibold">{job.role}</h3>
                    <p className="text-sm font-medium text-brand-500">{job.company}</p>
                    <p className="text-xs text-muted-foreground">{job.location}</p>

                    <ul className={`mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground ${i % 2 === 0 ? "md:text-right" : ""}`}>
                      {job.highlights.map((h, hi) => (
                        <li key={hi}>{h}</li>
                      ))}
                    </ul>

                    <div className={`mt-4 flex flex-wrap gap-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      {job.tech.map((t) => (
                        <span key={t} className="rounded-md bg-muted px-2 py-0.5 font-[family-name:var(--font-mono)] text-xs text-muted-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
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
