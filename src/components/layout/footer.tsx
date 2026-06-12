"use client";

import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Wordmark } from "@/components/ui/monogram";
import { useSite } from "@/lib/i18n";

export function Footer() {
  const { navLinks, profile, ui } = useSite();
  const f = ui.footer;
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border px-5 py-14 sm:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <a href="#home" aria-label="Home">
            <Wordmark monogramSize={38} />
          </a>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {f.tagline}
          </p>
          <p className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 text-brand-500" /> {profile.location}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold">{f.navigate}</h3>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">{f.connect}</h3>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="size-4" /> {f.email}
              </a>
            </li>
            <li>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Linkedin className="size-4" /> LinkedIn <ArrowUpRight className="size-3" />
              </a>
            </li>
            <li>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="size-4" /> GitHub <ArrowUpRight className="size-3" />
              </a>
            </li>
            <li>
              <a
                href={profile.links.resume}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {f.resume}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex w-full max-w-6xl flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
        <p>
          © {year} {profile.name}. {f.rights}
        </p>
      </div>
    </footer>
  );
}
