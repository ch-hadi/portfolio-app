import type { ReactNode } from "react";
import { Lock } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * macOS-style browser window chrome for presenting product screenshots/mockups.
 * Drop a real <Image> inside, or one of the recreated <ProductMockup> scenes.
 */
export function BrowserFrame({
  url = "app.example.com",
  children,
  className,
}: {
  url?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-card/80 shadow-2xl shadow-black/20 backdrop-blur",
        className
      )}
    >
      {/* title bar */}
      <div className="flex items-center gap-3 border-b border-border bg-muted/60 px-3.5 py-2.5">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="mx-auto flex w-full max-w-[16rem] items-center justify-center gap-1.5 rounded-md border border-border bg-background/60 px-3 py-1 text-[0.7rem] text-muted-foreground">
          <Lock className="size-2.5" />
          {url}
        </div>
      </div>
      {/* viewport */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-background">{children}</div>
    </div>
  );
}

/**
 * Phone device frame for mobile mockups.
 */
export function DeviceFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[1.6rem] border-[5px] border-foreground/85 bg-background shadow-2xl shadow-black/30",
        className
      )}
    >
      <div className="relative aspect-[9/19] w-full overflow-hidden">
        <div className="absolute left-1/2 top-1.5 z-10 h-1.5 w-12 -translate-x-1/2 rounded-full bg-foreground/40" />
        {children}
      </div>
    </div>
  );
}
