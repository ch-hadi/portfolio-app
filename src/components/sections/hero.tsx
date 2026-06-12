"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Magnetic } from "@/components/ui/magnetic";
import { Portrait } from "@/components/ui/portrait";
import { brand, profile } from "@/data/site";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
};

const roles = ["Full Stack Engineer", "AI Application Developer"];

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-5 pt-32 pb-20 sm:px-8">
      <AuroraBackground />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <motion.div variants={container} initial="hidden" animate="show">
          {/* role + location line: instant context */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/50 px-3 py-1 backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              Available for work
            </span>
            <span className="inline-flex items-center gap-1.5 text-muted-foreground">
              <MapPin className="size-3.5" /> Salzburg, Austria
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-7 font-[family-name:var(--font-display)] text-[2.6rem] font-bold leading-[1.04] tracking-[-0.02em] sm:text-[3.4rem] lg:text-[3.75rem]"
          >
            I build production-grade
            <br className="hidden sm:block" /> <span className="text-brand-gradient">web &amp; AI products</span> that
            ship.
          </motion.h1>

          <motion.div variants={item} className="mt-5 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            {roles.map((r, i) => (
              <span key={r} className="inline-flex items-center gap-2">
                {i > 0 && <span className="size-1 rounded-full bg-brand-500/60" />}
                <span className="font-medium text-foreground/80">{r}</span>
              </span>
            ))}
          </motion.div>

          <motion.p variants={item} className="mt-3 text-sm text-muted-foreground">
            Pursuing an MSc in Salzburg, open to working-student &amp; part-time engineering roles (20 hrs/week).
          </motion.p>

          <motion.p variants={item} className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]">
            {brand.heroSub}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <Magnetic>
              <Button size="lg" className="group" asChild>
                <a href="#contact">
                  Hire Me <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                </a>
              </Button>
            </Magnetic>
            <Button size="lg" variant="outline" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <a href={profile.links.resume} download>
                <Download /> Résumé
              </a>
            </Button>
          </motion.div>

          <motion.div variants={item} className="mt-9 flex items-center gap-3">
            {[
              { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
              { icon: Linkedin, href: profile.links.linkedin, label: "LinkedIn" },
              { icon: Github, href: profile.links.github, label: "GitHub" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex size-10 items-center justify-center rounded-full text-muted-foreground transition-all hover:-translate-y-0.5 hover:bg-muted hover:text-foreground"
              >
                <Icon className="size-[1.1rem]" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Portrait: premium focal point */}
        <div className="relative mx-auto w-full max-w-[22rem] lg:max-w-[26rem]">
          <Portrait />

          {/* floating credential chips */}
          <motion.div
            animate={{ y: [0, -9, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 top-12 hidden rounded-2xl glass border border-border/70 px-4 py-2.5 sm:block"
          >
            <p className="font-[family-name:var(--font-display)] text-lg font-bold text-brand-gradient">5+ yrs</p>
            <p className="text-[0.7rem] text-muted-foreground">Shipping production</p>
          </motion.div>
          <motion.div
            animate={{ y: [0, 11, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            className="absolute -right-3 bottom-16 hidden rounded-2xl glass border border-border/70 px-4 py-2.5 sm:block"
          >
            <p className="font-[family-name:var(--font-display)] text-lg font-bold text-brand-gradient">1,000+</p>
            <p className="text-[0.7rem] text-muted-foreground">Daily AI users</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
