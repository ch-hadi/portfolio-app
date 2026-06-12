"use client";

import { CheckCircle2 } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { useSite } from "@/lib/i18n";

export function About() {
  const { achievements, bio, ui } = useSite();
  return (
    <Section id="about">
      <SectionHeader
        kicker={ui.about.kicker}
        title={<>{ui.about.title[0]}<span className="text-brand-gradient">{ui.about.title[1]}</span>{ui.about.title[2]}</>}
        description={bio.short}
      />

      <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <Reveal className="space-y-5">
          {bio.paragraphs.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]">
              {p}
            </p>
          ))}

          <div className="grid gap-4 pt-4 sm:grid-cols-2">
            {bio.philosophy.map((ph) => (
              <SpotlightCard key={ph.title} className="p-5">
                <h3 className="font-[family-name:var(--font-display)] text-base font-semibold">{ph.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{ph.body}</p>
              </SpotlightCard>
            ))}
          </div>
        </Reveal>

        <Reveal direction="left">
          <div className="sticky top-28 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur card-shadow">
            <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">{ui.about.whyHire}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{ui.about.whyHireSub}</p>
            <Stagger className="mt-5 space-y-3.5">
              {achievements.map((a) => (
                <StaggerItem key={a} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-500" />
                  <span className="text-sm leading-relaxed text-muted-foreground">{a}</span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
