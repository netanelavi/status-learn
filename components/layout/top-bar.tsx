"use client";

import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { SunIcon, MoonIcon, LogOutIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function TopBar({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-40 flex h-14 items-center justify-between border-b border-border bg-card/80 px-4 backdrop-blur-sm",
        className
      )}
    >
      {/* Logo — right side in RTL */}
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
          <span className="text-sm font-bold text-primary-foreground">S</span>
        </div>
        <span className="font-display text-lg font-bold text-foreground">
          Status Learn
        </span>
      </div>

      {/* Actions — left side in RTL */}
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="icon"
          aria-label={theme === "dark" ? "עבור למצב בהיר" : "עבור למצב כהה"}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <SunIcon className="size-4" />
          ) : (
            <MoonIcon className="size-4" />
          )}
        </Button>
        <Button
          variant="ghost"
          size="icon"
          aria-label="התנתק"
          onClick={handleLogout}
        >
          <LogOutIcon className="size-4" />
        </Button>
      </div>
    </header>
  );
}
