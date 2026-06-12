"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarClock, Github, Linkedin, Mail, MessageCircle, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { useSite } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Contact() {
  const { profile, ui } = useSite();
  const c = ui.contact;
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const channels = [
    { icon: Mail, label: c.labelEmail, value: profile.email, href: `mailto:${profile.email}` },
    { icon: Linkedin, label: c.labelLinkedin, value: c.channelLinkedin, href: profile.links.linkedin },
    { icon: Github, label: c.labelGithub, value: c.channelGithub, href: profile.links.github },
    {
      icon: MessageCircle,
      label: c.labelWhatsapp,
      value: c.channelWhatsapp,
      href: `https://wa.me/${profile.whatsapp.replace(/\D/g, "")}`,
    },
  ];

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // No backend wired. Composes an email via the user's mail client.
    // Replace with a real handler (Resend, Formspree, route handler) in production.
    const subject = encodeURIComponent(`${c.subject} ${form.name || c.fallbackName}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const inputClass =
    "w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30";

  return (
    <Section id="contact">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card/50 backdrop-blur card-shadow">
        <div className="pointer-events-none absolute -left-24 -top-24 size-72 rounded-full bg-brand-600/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 size-72 rounded-full bg-cyan-accent/15 blur-3xl" />

        <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[1fr_1.1fr]">
          {/* Left: pitch + channels */}
          <Reveal>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-brand-500">
              <span className="h-px w-6 bg-gradient-to-r from-brand-500 to-cyan-accent" />
              {c.kicker}
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
              {c.title[0]}<span className="text-brand-gradient">{c.title[1]}</span>
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              {c.description}
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {channels.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-border bg-background/50 p-3.5 transition-all hover:-translate-y-0.5 hover:border-ring/40"
                >
                  <span className="flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-600/15 to-cyan-accent/15 text-brand-500">
                    <Icon className="size-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">{label}</p>
                    <p className="truncate text-sm font-medium">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            <a
              href={profile.links.calendly}
              target="_blank"
              rel="noreferrer"
              className="mt-3 flex items-center justify-between gap-3 rounded-xl border border-brand-500/30 bg-brand-500/5 p-4 transition-colors hover:bg-brand-500/10"
            >
              <span className="flex items-center gap-3">
                <CalendarClock className="size-5 text-brand-500" />
                <span className="text-sm font-medium">{c.bookCall}</span>
              </span>
              <ArrowRight className="size-4 text-brand-500" />
            </a>
          </Reveal>

          {/* Right: form */}
          <Reveal direction="left">
            <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-background/40 p-6 sm:p-7">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium">{c.formName}</label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={c.phName}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium">{c.formEmail}</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder={c.phEmail}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium">{c.formMessage}</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder={c.phMessage}
                    className={cn(inputClass, "resize-none")}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="size-4" /> {c.submit}
                </Button>

                <motion.p
                  initial={false}
                  animate={{ opacity: sent ? 1 : 0, height: sent ? "auto" : 0 }}
                  className="overflow-hidden text-center text-sm text-emerald-500"
                >
                  {c.success}
                </motion.p>
                <p className="text-center text-xs text-muted-foreground">
                  {c.preferEmail}{" "}
                  <a href={`mailto:${profile.email}`} className="text-brand-500 underline-offset-2 hover:underline">
                    {profile.email}
                  </a>
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
