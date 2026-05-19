"use client";

import { motion } from "framer-motion";
import { BADGES } from "@/lib/gamification/types";
import { cn } from "@/lib/utils";

interface BadgeGridProps {
  earnedBadges: string[];
  showAll?: boolean;
  className?: string;
}

export function BadgeGrid({
  earnedBadges,
  showAll = false,
  className,
}: BadgeGridProps) {
  const badges = showAll ? BADGES : BADGES.slice(0, earnedBadges.length > 0 ? undefined : 3);
  const displayBadges = showAll
    ? BADGES
    : earnedBadges.length > 0
    ? BADGES.filter((b) => earnedBadges.includes(b.slug)).slice(0, 6)
    : BADGES.slice(0, 3);

  if (displayBadges.length === 0) return null;

  return (
    <div
      className={cn(
        "grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6",
        className
      )}
    >
      {displayBadges.map((badge, i) => {
        const earned = earnedBadges.includes(badge.slug);
        return (
          <motion.div
            key={badge.slug}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.07, duration: 0.3 }}
            title={badge.description}
            className={cn(
              "flex flex-col items-center gap-1.5 rounded-xl border p-3 text-center transition-all",
              earned
                ? "border-[var(--gold)] bg-[var(--gold)]/5 shadow-[0_0_8px_var(--gold)/30]"
                : "border-border bg-card opacity-50 grayscale"
            )}
          >
            <span className="text-2xl leading-none" role="img" aria-label={badge.title}>
              {badge.emoji}
            </span>
            <span
              className={cn(
                "text-xs font-semibold leading-tight",
                earned ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {badge.title}
            </span>
            {earned && (
              <span className="text-[0.65rem] text-muted-foreground leading-tight">
                {badge.description}
              </span>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
