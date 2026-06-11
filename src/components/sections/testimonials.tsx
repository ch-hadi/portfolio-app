"use client";

import { Quote } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { testimonials } from "@/data/site";

export function Testimonials() {
  return (
    <Section id="testimonials">
      <SectionHeader
        kicker="Testimonials"
        title={<>Trusted by teams who <span className="text-brand-gradient">ship</span>.</>}
        description="What clients and colleagues say about working with me."
      />

      <Stagger className="columns-1 gap-5 sm:columns-2 [&>*]:mb-5">
        {testimonials.map((t) => (
          <StaggerItem key={t.quote} className="break-inside-avoid">
            <figure className="relative rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-colors hover:border-ring/40 card-shadow">
              <Quote className="size-7 text-brand-500/40" />
              <blockquote className="mt-3 text-[0.95rem] leading-relaxed text-foreground/90">“{t.quote}”</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-cyan-accent text-sm font-semibold text-white">
                  {t.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                </span>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
