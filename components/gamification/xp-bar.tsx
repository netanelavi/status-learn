"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useCountUp } from "@/hooks/use-count-up";

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
  const displayXp = useCountUp(xp, 900);
  const displayNextXp = useCountUp(nextXp, 900);

  return (
    <div className={cn("space-y-2", className)}>
      {/* Level label */}
      <div className="flex items-center justify-between text-sm">
        <span className="font-semibold text-foreground">
          רמה {level} — {levelTitle}
        </span>
        <span className="text-muted-foreground ltr-inline">
          {displayXp.toLocaleString()} / {displayNextXp.toLocaleString()} XP
        </span>
      </div>

      {/* Track */}
      <div className="relative h-3 w-full overflow-hidden rounded-full bg-muted">
        <motion.div
          className={cn(
            "relative h-full rounded-full overflow-hidden",
            isFull
              ? "bg-[var(--gold)] animate-xp-glow-pulse"
              : "bg-primary"
          )}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          {/* Shimmer overlay */}
          <span
            aria-hidden="true"
            className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-xp-shimmer"
          />
        </motion.div>
      </div>

      {isMaxLevel && (
        <p className="text-center text-xs font-semibold text-[var(--gold)]">
          🏆 הגעת לרמה המקסימלית!
        </p>
      )}
    </div>
  );
}
