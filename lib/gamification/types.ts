export interface UserProgress {
  completedLessons: string[];      // lesson slugs
  xp: number;
  level: number;
  streakCount: number;
  longestStreak: number;
  lastActiveDate: string | null;   // ISO date string
  badges: string[];                // badge slugs
  actionItemsCompleted: string[];  // lesson slugs with completed action items
}

export interface Badge {
  slug: string;
  title: string;
  description: string;
  emoji: string;
  checkUnlock: (progress: UserProgress, allLessonsCount: number) => boolean;
}

export const LEVELS = [
  { level: 1, minXp: 0,    title: "מתחיל" },
  { level: 2, minXp: 150,  title: "סקרן" },
  { level: 3, minXp: 400,  title: "מתפתח" },
  { level: 4, minXp: 750,  title: "פעיל" },
  { level: 5, minXp: 1200, title: "מיומן" },
  { level: 6, minXp: 1800, title: "מקצועי" },
  { level: 7, minXp: 2500, title: "מומחה" },
  { level: 8, minXp: 3300, title: "מוביל" },
  { level: 9, minXp: 4200, title: "אלוף" },
  { level: 10, minXp: 5000, title: "מאסטר Brand" },
] as const;

export function getLevelFromXp(xp: number): { level: number; title: string; nextXp: number; progress: number } {
  type LevelEntry = { level: number; minXp: number; title: string };
  let current: LevelEntry = LEVELS[0];
  let next: LevelEntry = LEVELS[1];

  for (let i = 0; i < LEVELS.length - 1; i++) {
    if (xp >= LEVELS[i].minXp && xp < LEVELS[i + 1].minXp) {
      current = LEVELS[i];
      next = LEVELS[i + 1];
      break;
    }
    if (xp >= LEVELS[LEVELS.length - 1].minXp) {
      current = LEVELS[LEVELS.length - 1];
      next = LEVELS[LEVELS.length - 1];
    }
  }

  const rangeXp = next.minXp - current.minXp;
  const earnedXp = xp - current.minXp;
  const progress = rangeXp > 0 ? Math.min(100, Math.round((earnedXp / rangeXp) * 100)) : 100;

  return {
    level: current.level,
    title: current.title,
    nextXp: next.minXp,
    progress,
  };
}

export const BADGES: Badge[] = [
  {
    slug: "first-lesson",
    title: "צעד ראשון",
    description: "השלמת את השיעור הראשון שלך",
    emoji: "🎯",
    checkUnlock: (p) => p.completedLessons.length >= 1,
  },
  {
    slug: "course-1-complete",
    title: "בסיס יציב",
    description: "השלמת את Mini-Course 1 — Foundations",
    emoji: "🏗️",
    checkUnlock: (p) =>
      ["why-status", "jtbd", "brand-identity"].every((s) =>
        p.completedLessons.includes(s)
      ),
  },
  {
    slug: "streak-3",
    title: "מתמיד",
    description: "3 ימים ברצף",
    emoji: "🔥",
    checkUnlock: (p) => p.streakCount >= 3,
  },
  {
    slug: "streak-7",
    title: "שבוע שלם",
    description: "7 ימים ברצף — אתה אלוף!",
    emoji: "💪",
    checkUnlock: (p) => p.streakCount >= 7,
  },
  {
    slug: "half-way",
    title: "באמצע הדרך",
    description: "השלמת 50% מהקורס",
    emoji: "🌅",
    checkUnlock: (p, total) => p.completedLessons.length >= total / 2,
  },
  {
    slug: "action-hero",
    title: "Action Hero",
    description: "ביצעת 5 תרגולים מעשיים",
    emoji: "⚡",
    checkUnlock: (p) => p.actionItemsCompleted.length >= 5,
  },
  {
    slug: "capstone-hero",
    title: "Capstone Hero",
    description: "השלמת את פרויקט הסיכום",
    emoji: "🏆",
    checkUnlock: (p) => p.completedLessons.includes("capstone"),
  },
  {
    slug: "all-done",
    title: "מאסטר Status",
    description: "השלמת את כל 23 השיעורים!",
    emoji: "👑",
    checkUnlock: (p, total) => p.completedLessons.length >= total,
  },
];
