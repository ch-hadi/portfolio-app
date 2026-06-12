"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Lightbulb, Target, TrendingUp } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BrowserFrame } from "@/components/ui/browser-frame";
import { projects } from "@/data/site";

export function Projects() {
  return (
    <Section id="projects" className="bg-muted/20">
      <SectionHeader
        kicker="Featured work"
        title={<>Case studies, not just <span className="text-brand-gradient">screenshots</span>.</>}
        description="Each of these shipped to production. Here's the challenge, the solution, and the result, presented as a real product."
      />

      <div className="space-y-20">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={0.05}>
            <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              {/* Browser-framed product mockup */}
              <motion.div
                initial={{ opacity: 0, y: 30, rotateX: 6 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                whileHover={{ y: -6 }}
                className={`relative [perspective:1200px] ${i % 2 === 1 ? "lg:order-2" : ""}`}
              >
                {/* ambient glow */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-6 -z-10 rounded-full opacity-60 blur-3xl"
                  style={{ background: "radial-gradient(circle, color-mix(in srgb, var(--ring) 35%, transparent), transparent 70%)" }}
                />
                <BrowserFrame url={project.previewUrl}>
                  <Image
                    src={project.image}
                    alt={`${project.name} product screenshot`}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover object-top"
                  />
                </BrowserFrame>
              </motion.div>

              {/* Content */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-brand-500">
                    {project.tag}
                  </span>
                  <Badge className="border-emerald-500/30 bg-emerald-500/10 text-emerald-500">{project.status}</Badge>
                </div>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight sm:text-3xl">
                  {project.name}
                </h3>

                <div className="mt-5 space-y-3.5 text-sm leading-relaxed">
                  <div className="flex gap-3">
                    <Target className="mt-0.5 size-4 shrink-0 text-rose-400" />
                    <p className="text-muted-foreground"><span className="font-semibold text-foreground">Challenge: </span>{project.challenge}</p>
                  </div>
                  <div className="flex gap-3">
                    <Lightbulb className="mt-0.5 size-4 shrink-0 text-amber-400" />
                    <p className="text-muted-foreground"><span className="font-semibold text-foreground">Solution: </span>{project.solution}</p>
                  </div>
                  <div className="flex gap-3">
                    <TrendingUp className="mt-0.5 size-4 shrink-0 text-emerald-400" />
                    <p className="text-muted-foreground"><span className="font-semibold text-foreground">Results: </span>{project.results.join(" · ")}</p>
                  </div>
                </div>

                {/* feature highlights */}
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-3.5 shrink-0 text-brand-500" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="rounded-md bg-muted px-2.5 py-1 font-[family-name:var(--font-mono)] text-xs text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.links.demo} target="_blank" rel="noreferrer">
                      Visit Live Site <ArrowUpRight />
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
