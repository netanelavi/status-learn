"use client";

import { toast } from "sonner";
import { BADGES, LEVELS } from "@/lib/gamification/types";

export function showLevelUpToast(newLevel: number, newBadgeSlugs: string[]) {
  const levelInfo = LEVELS.find((l) => l.level === newLevel);
  const title = levelInfo?.title ?? "";

  toast.success(`🎉 עלית לרמה ${newLevel} — ${title}!`, {
    description:
      newBadgeSlugs.length > 0
        ? newBadgeSlugs
            .map((slug) => {
              const badge = BADGES.find((b) => b.slug === slug);
              return badge ? `${badge.emoji} פתחת: ${badge.title}` : null;
            })
            .filter(Boolean)
            .join("\n")
        : undefined,
    duration: 5000,
    style: {
      background: "var(--card)",
      border: "1px solid var(--gold)",
      boxShadow: "0 0 20px oklch(0.72 0.16 75 / 0.3)",
    },
  });
}

export function showBadgeToast(badgeSlugs: string[]) {
  badgeSlugs.forEach((slug) => {
    const badge = BADGES.find((b) => b.slug === slug);
    if (!badge) return;
    toast(`${badge.emoji} פתחת הישג חדש!`, {
      description: `${badge.title} — ${badge.description}`,
      duration: 4000,
    });
  });
}
