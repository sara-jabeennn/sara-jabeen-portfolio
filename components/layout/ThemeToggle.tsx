"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  // resolvedTheme is undefined until after mount (SSR can't know the user's
  // preference) - branching on that directly avoids a separate mounted
  // state + effect just to dodge a hydration mismatch.
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label={
        resolvedTheme ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle theme"
      }
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {resolvedTheme ? (
        isDark ? (
          <Sun className="size-4" aria-hidden="true" />
        ) : (
          <Moon className="size-4" aria-hidden="true" />
        )
      ) : (
        <Sun className="size-4 opacity-0" aria-hidden="true" />
      )}
    </Button>
  );
}
