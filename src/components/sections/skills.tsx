"use client";

import { motion } from "framer-motion";
import { Brain, Cloud, Database, Layout, Server, Wrench, type LucideIcon } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { skillGroups } from "@/data/site";

const icons: Record<string, LucideIcon> = {
  Layout,
  Server,
  Database,
  Brain,
  Cloud,
  Wrench,
};

const levelLabel: Record<number, string> = {
  5: "Expert",
  4: "Advanced",
  3: "Intermediate",
  2: "Learning",
};

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeader
        kicker="Capabilities"
        title={<>A full-stack toolkit, <span className="text-brand-gradient">AI-ready</span>.</>}
        description="From pixel-perfect frontends to type-safe backends and production LLM systems. Here's the stack I ship with."
      />

      <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => {
          const Icon = icons[group.icon] ?? Wrench;
          return (
            <StaggerItem key={group.category}>
              <SpotlightCard className="h-full">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600/15 to-cyan-accent/15 text-brand-500">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] text-base font-semibold">{group.category}</h3>
                </div>

                <ul className="space-y-3.5">
                  {group.skills.map((skill) => (
                    <li key={skill.name}>
                      <div className="mb-1.5 flex items-center justify-between text-sm">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{levelLabel[skill.level]}</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(skill.level / 5) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                          className="h-full rounded-full bg-gradient-to-r from-brand-500 to-cyan-accent"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}
