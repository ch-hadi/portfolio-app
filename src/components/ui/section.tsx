import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("relative scroll-mt-24 px-5 py-24 sm:px-8 md:py-32", className)}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeader({
  kicker,
  title,
  description,
  align = "left",
}: {
  kicker: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={cn("mb-16 max-w-2xl", align === "center" && "mx-auto text-center")}>
      <span
        className={cn(
          "inline-flex items-center gap-2.5 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-brand-500",
          align === "center" && "justify-center"
        )}
      >
        <span className="size-1.5 rounded-full bg-brand-500" />
        {kicker}
      </span>
      <h2 className="mt-5 font-[family-name:var(--font-display)] text-[2rem] font-bold leading-[1.08] tracking-[-0.02em] sm:text-4xl md:text-[2.6rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-[1.075rem]">{description}</p>
      )}
    </Reveal>
  );
}
