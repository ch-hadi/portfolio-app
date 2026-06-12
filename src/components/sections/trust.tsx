"use client";

import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { Counter } from "@/components/ui/counter";
import { useSite } from "@/lib/i18n";

const techStrip = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Nest.js",
  "PostgreSQL",
  "MongoDB",
  "OpenAI",
  "RAG",
  "AWS",
  "Docker",
  "Tailwind CSS",
  "Stripe",
  "GraphQL",
  "Redux",
];

export function Trust() {
  const { stats } = useSite();
  return (
    <section className="relative py-16">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Stagger className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <StaggerItem key={s.label} className="text-center md:text-left">
              <p className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight sm:text-5xl">
                <span className="text-gradient">
                  <Counter value={s.value} suffix={s.suffix} />
                </span>
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <div className="relative mt-14 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
        <div className="flex shrink-0 animate-marquee gap-4 pr-4">
          {[...techStrip, ...techStrip].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="whitespace-nowrap rounded-full border border-border bg-card/60 px-5 py-2 text-sm font-medium text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
