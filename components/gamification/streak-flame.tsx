"use client";

import { cn } from "@/lib/utils";

interface StreakFlameProps {
  streak: number;
  className?: string;
}

export function StreakFlame({ streak, className }: StreakFlameProps) {
  const active = streak > 0;

  return (
    <div
      className={cn(
        "flex flex-col items-center gap-1 select-none",
        className
      )}
    >
      <span
        className={cn(
          "text-4xl leading-none",
          active ? "animate-streak-fire" : "grayscale opacity-40"
        )}
        role="img"
        aria-label={active ? "אש פעילה" : "אין רצף"}
      >
        🔥
      </span>
      <span
        className={cn(
          "text-3xl font-bold tabular-nums leading-tight",
          active ? "text-[var(--gold)]" : "text-muted-foreground"
        )}
      >
        {streak}
      </span>
      <span className="text-xs font-medium text-muted-foreground">
        ימי רצף
      </span>
    </div>
  );
}
