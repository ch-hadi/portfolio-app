"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Premium, theme-aware portrait treatment.
 *
 * Serves a different optimized image per theme:
 *   - dark mode  uses srcDark  (ideally a dark / rim-lit cutout)
 *   - light mode uses srcLight (ideally a clean, bright cutout)
 *
 * Drop transparent PNGs at the paths below for the best result:
 *   /public/profile-dark.png   and   /public/profile-light.png
 * Until then both fall back to /profile.jpg.
 *
 * The treatment (ambient glow, gradient hairline ring, theme-colored
 * bottom fade) "melts" the portrait into the page so it never reads as a
 * pasted rectangle, and works even without a transparent cutout.
 */
export function Portrait({
  srcDark = "/profile.jpg",
  srcLight = "/profile.jpg",
  className,
}: {
  srcDark?: string;
  srcLight?: string;
  className?: string;
}) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const src = mounted && resolvedTheme === "light" ? srcLight : srcDark;

  return (
    <div className={cn("relative", className)}>
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 scale-110 rounded-[2.2rem] opacity-70 blur-2xl"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 30%, color-mix(in srgb, var(--ring) 45%, transparent), transparent 70%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.25 }}
        className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.9rem] bg-muted"
      >
        <Image
          key={src}
          src={src}
          alt="Hammad Ahmed Riaz, Full Stack & AI Engineer"
          fill
          priority
          sizes="(max-width: 1024px) 80vw, 420px"
          className="object-cover object-top"
        />

        {/* subtle brand duotone wash for cohesion */}
        <div
          aria-hidden
          className="absolute inset-0 mix-blend-soft-light"
          style={{ background: "linear-gradient(150deg, #8f6dff55, transparent 45%, #22d3ee44)" }}
        />

        {/* theme-colored bottom fade melts photo into the page */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-2/5"
          style={{ background: "linear-gradient(to top, var(--background), transparent)" }}
        />

        {/* top sheen */}
        <div aria-hidden className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/10 to-transparent" />

        {/* gradient hairline ring */}
        <div
          aria-hidden
          className="absolute inset-0 rounded-[1.9rem]"
          style={{
            padding: 1,
            background: "linear-gradient(150deg, color-mix(in srgb, var(--ring) 60%, transparent), transparent 40%)",
            WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />
      </motion.div>
    </div>
  );
}
