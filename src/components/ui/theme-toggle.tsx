"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex size-10 items-center justify-center rounded-full border border-border bg-card/50 backdrop-blur transition-colors hover:bg-muted"
    >
      {mounted && (
        <>
          <Sun className="size-[1.1rem] rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute size-[1.1rem] rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100" />
        </>
      )}
    </button>
  );
}
