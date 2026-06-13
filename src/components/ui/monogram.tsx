import { cn } from "@/lib/utils";

/**
 * Personal brand mark: a crafted "HR" monogram.
 * Restrained, scalable, recognizable at any size (favicon to hero).
 * Chosen over a photo-logo: a face doesn't scale down or read as a brand.
 */
export function Monogram({ className, size = 36 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      role="img"
      aria-label="Hammad Riaz monogram"
    >
      <defs>
        <linearGradient id="hr-grad" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8f6dff" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      {/* squircle plate */}
      <rect x="1" y="1" width="38" height="38" rx="11" className="fill-foreground" />
      <rect x="1.5" y="1.5" width="37" height="37" rx="10.5" stroke="url(#hr-grad)" strokeOpacity="0.55" />
      {/* H */}
      <rect x="10" y="11" width="2.6" height="18" rx="1.3" className="fill-background" />
      <rect x="17.4" y="11" width="2.6" height="18" rx="1.3" className="fill-background" />
      <rect x="10" y="18.7" width="10" height="2.6" rx="1.3" fill="url(#hr-grad)" />
      {/* R */}
      <rect x="23.2" y="11" width="2.6" height="18" rx="1.3" className="fill-background" />
      <path
        d="M25.8 11.6h3.1a3.4 3.4 0 0 1 0 6.8h-3.1"
        stroke="url(#hr-grad)"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path d="M26.4 18.6 30.2 29" stroke="url(#hr-grad)" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

export function Wordmark({ className, monogramSize = 34 }: { className?: string; monogramSize?: number }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span aria-hidden="true" className="contents">
        <Monogram size={monogramSize} />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-[family-name:var(--font-display)] text-[0.95rem] font-semibold tracking-tight">
          Hammad Riaz
        </span>
        <span className="mt-0.5 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Full Stack · AI
        </span>
      </span>
    </span>
  );
}
