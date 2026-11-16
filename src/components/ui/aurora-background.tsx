"use client";

import { cn } from "@/lib/utils";

/**
 * Decorative animated aurora + grid backdrop.
 * Pure CSS animation (GPU-friendly), respects prefers-reduced-motion.
 */
export function AuroraBackground({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)} aria-hidden>
      <div
        className="aurora-1 absolute -top-1/4 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full opacity-30 blur-[80px] will-change-transform sm:h-[48rem] sm:w-[48rem] sm:blur-[130px] dark:opacity-35"
        style={{
          background:
            "conic-gradient(from 90deg at 50% 50%, #f4232f 0deg, #ff5a52 130deg, #de0f1b 240deg, #f4232f 360deg)",
        }}
      />
      <div
        className="aurora-2 absolute -bottom-40 right-10 hidden h-[28rem] w-[28rem] rounded-full opacity-20 blur-[120px] will-change-transform sm:block"
        style={{
          background: "radial-gradient(circle, #ff5a52 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
