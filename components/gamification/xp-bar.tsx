"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface XpBarProps {
  xp: number;
  level: number;
  levelTitle: string;
  nextXp: number;
  progress: number; // 0-100
  className?: string;
}

export function XpBar({
  xp,
  level,
  levelTitle,
  nextXp,
  progress,
  className,
}: XpBarProps) {
  const isMaxLevel = xp >= nextXp && nextXp === xp;
  const isFull = progress >= 100;

  return (
    <div className={cn("space-y-2", className)}>
      {/* Level label */}
      <div className="flex items-center justify-between text-sm">
        <span className="font-semibold text-foreground">
          רמה {level} — {levelTitle}
        </span>
        <span className="text-muted-foreground ltr-inline">
          {xp.toLocaleString()} / {nextXp.toLocaleString()} XP
        </span>
      </div>

      {/* Track */}
      <div className="relative h-3 w-full overflow-hidden rounded-full bg-muted">
        <motion.div
          className={cn(
            "h-full rounded-full",
            isFull
              ? "bg-[var(--gold)] shadow-[0_0_12px_var(--gold)] animate-xp-pulse"
              : "bg-primary"
          )}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        />
      </div>

      {isMaxLevel && (
        <p className="text-center text-xs font-semibold text-[var(--gold)]">
          🏆 הגעת לרמה המקסימלית!
        </p>
      )}
    </div>
  );
}
