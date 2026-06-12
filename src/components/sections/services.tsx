"use client";

import {
  Globe,
  Layers,
  Rocket,
  Smartphone,
  Sparkles,
  Webhook,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { useSite } from "@/lib/i18n";

const icons: Record<string, LucideIcon> = {
  Layers,
  Globe,
  Smartphone,
  Webhook,
  Rocket,
  Sparkles,
};

export function Services() {
  const { services, ui } = useSite();
  return (
    <Section id="services" className="bg-muted/20">
      <SectionHeader
        kicker={ui.services.kicker}
        title={<>{ui.services.title[0]}<span className="text-brand-gradient">{ui.services.title[1]}</span>{ui.services.title[2]}</>}
        description={ui.services.description}
      />

      <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => {
          const Icon = icons[service.icon] ?? Layers;
          return (
            <StaggerItem key={service.title}>
              <SpotlightCard className="group h-full">
                <div className="flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600/15 to-cyan-accent/15 text-brand-500 transition-transform duration-300 group-hover/spot:scale-110">
                    <Icon className="size-6" />
                  </span>
                  <span className="font-[family-name:var(--font-mono)] text-xs text-muted-foreground">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-display)] text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
              </SpotlightCard>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}
