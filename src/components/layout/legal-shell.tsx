"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/layout/footer";
import { Wordmark } from "@/components/ui/monogram";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useSite } from "@/lib/i18n";

export function LegalShell({ children }: { children: React.ReactNode }) {
  const { ui } = useSite();

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/" aria-label="Home">
            <Wordmark monogramSize={32} />
          </Link>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main id="main" className="mx-auto w-full max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" /> {ui.legal.backHome}
        </Link>
        <div className="mt-8">{children}</div>
      </main>

      <Footer />
    </>
  );
}
