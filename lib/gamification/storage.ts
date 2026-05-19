"use client";

import type { UserProgress } from "./types";
import { getLevelFromXp, BADGES } from "./types";

const STORAGE_KEY = "status_learn_progress";

const DEFAULT_PROGRESS: UserProgress = {
  completedLessons: [],
  xp: 0,
  level: 1,
  streakCount: 0,
  longestStreak: 0,
  lastActiveDate: null,
  badges: [],
  actionItemsCompleted: [],
};

export function getProgress(): UserProgress {
  if (typeof window === "undefined") return DEFAULT_PROGRESS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_PROGRESS };
    return { ...DEFAULT_PROGRESS, ...JSON.parse(raw) };
  } catch {
    return { ...DEFAULT_PROGRESS };
  }
}

export function saveProgress(progress: UserProgress) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function completeLesson(
  slug: string,
  xpReward: number,
  totalLessonsCount: number
): { progress: UserProgress; newBadges: string[]; leveledUp: boolean } {
  const prev = getProgress();

  if (prev.completedLessons.includes(slug)) {
    return { progress: prev, newBadges: [], leveledUp: false };
  }

  const today = new Date().toISOString().split("T")[0];
  const prevLevel = getLevelFromXp(prev.xp).level;

  // Streak logic
  let newStreak = prev.streakCount;
  if (prev.lastActiveDate !== today) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yStr = yesterday.toISOString().split("T")[0];
    newStreak = prev.lastActiveDate === yStr ? prev.streakCount + 1 : 1;
  }

  const newXp = prev.xp + xpReward;
  const newLevel = getLevelFromXp(newXp).level;

  const updated: UserProgress = {
    ...prev,
    completedLessons: [...prev.completedLessons, slug],
    xp: newXp,
    level: newLevel,
    streakCount: newStreak,
    longestStreak: Math.max(prev.longestStreak, newStreak),
    lastActiveDate: today,
  };

  // Check new badges
  const newBadges = BADGES.filter(
    (b) => !prev.badges.includes(b.slug) && b.checkUnlock(updated, totalLessonsCount)
  ).map((b) => b.slug);

  updated.badges = [...prev.badges, ...newBadges];

  saveProgress(updated);

  return {
    progress: updated,
    newBadges,
    leveledUp: newLevel > prevLevel,
  };
}

export function completeActionItem(slug: string): UserProgress {
  const prev = getProgress();
  if (prev.actionItemsCompleted.includes(slug)) return prev;
  const updated = {
    ...prev,
    actionItemsCompleted: [...prev.actionItemsCompleted, slug],
  };
  saveProgress(updated);
  return updated;
}
