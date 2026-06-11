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
        className="absolute -top-1/4 left-1/2 h-[48rem] w-[48rem] -translate-x-1/2 rounded-full opacity-30 blur-[130px] dark:opacity-35"
        style={{
          background:
            "conic-gradient(from 90deg at 50% 50%, #7c4dff 0deg, #22d3ee 130deg, #6d34f5 240deg, #7c4dff 360deg)",
          animation: "aurora 20s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -bottom-40 right-10 h-[28rem] w-[28rem] rounded-full opacity-20 blur-[120px]"
        style={{
          background: "radial-gradient(circle, #22d3ee 0%, transparent 70%)",
          animation: "aurora 26s ease-in-out infinite reverse",
        }}
      />
    </div>
  );
}
