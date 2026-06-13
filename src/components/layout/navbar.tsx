"use client";

import { AnimatePresence, m, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { Wordmark } from "@/components/ui/monogram";
import { useSite } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { navLinks, ui } = useSite();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <m.div
        className="h-0.5 origin-left bg-gradient-to-r from-brand-500 to-cyan-accent"
        style={{ scaleX: progress }}
      />
      <div className="px-4 pt-3 sm:px-6">
        <nav
          className={cn(
            "mx-auto flex max-w-6xl items-center justify-between rounded-full border border-transparent px-4 py-2.5 transition-all duration-300",
            scrolled && "glass border-border card-shadow"
          )}
        >
          <a href="#home" className="group">
            <Wordmark />
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
            <Button size="sm" className="hidden sm:inline-flex" asChild>
              <a href="#contact">{ui.nav.hireMe}</a>
            </Button>
            <button
              type="button"
              aria-label={ui.nav.toggleMenu}
              onClick={() => setOpen((v) => !v)}
              className="flex size-10 items-center justify-center rounded-full border border-border bg-card/50 md:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <m.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mx-4 mt-2 overflow-hidden rounded-2xl glass border border-border p-2 md:hidden"
          >
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="p-2">
                <Button className="w-full" asChild>
                  <a href="#contact" onClick={() => setOpen(false)}>
                    {ui.nav.hireMe}
                  </a>
                </Button>
              </li>
            </ul>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
