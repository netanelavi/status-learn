"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { LogOut, Trophy, Zap, Flame, Target } from "lucide-react";
import { getProgress } from "@/lib/gamification/storage";
import { getLevelFromXp, BADGES } from "@/lib/gamification/types";
import type { UserProgress } from "@/lib/gamification/types";
import { XpBar } from "@/components/gamification/xp-bar";
import { BadgeGrid } from "@/components/gamification/badge-grid";
import { AppLayout } from "@/components/layout/app-layout";

const TOTAL_LESSONS = 23;

export default function ProfilePage() {
  const router = useRouter();
  const [progress, setProgress] = useState<UserProgress | null>(null);

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  }

  if (!progress) {
    return (
      <AppLayout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
        </div>
      </AppLayout>
    );
  }

  const levelInfo = getLevelFromXp(progress.xp);
  const earnedBadges = BADGES.filter(b => progress.badges.includes(b.slug));
  const overallPct = Math.round((progress.completedLessons.length / TOTAL_LESSONS) * 100);

  const stats = [
    { label: "שיעורים הושלמו", value: progress.completedLessons.length, icon: Target, suffix: `/${TOTAL_LESSONS}` },
    { label: "סה\"כ XP", value: progress.xp, icon: Zap, suffix: "" },
    { label: "Streak נוכחי", value: progress.streakCount, icon: Flame, suffix: " ימים" },
    { label: "ה-Streak הארוך", value: progress.longestStreak, icon: Trophy, suffix: " ימים" },
  ];

  return (
    <AppLayout>
      <div className="max-w-2xl mx-auto px-4 py-6 pb-24 md:pb-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Profile card */}
          <div className="bg-card border border-border rounded-2xl p-6 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-[var(--gold)]/5" />
            <div className="relative z-10">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-4xl mx-auto mb-4">
                👤
              </div>
              <h1 className="text-xl font-display font-black text-foreground mb-1">admin</h1>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium">
                <Zap className="w-3 h-3" />
                רמה {levelInfo.level} — {levelInfo.title}
              </div>
            </div>
          </div>

          {/* XP Bar */}
          <XpBar
            xp={progress.xp}
            level={levelInfo.level}
            levelTitle={levelInfo.title}
            nextXp={levelInfo.nextXp}
            progress={levelInfo.progress}
          />

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-card border border-border rounded-xl p-4 text-center">
                <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                <div className="text-2xl font-display font-black text-foreground">
                  {stat.value}<span className="text-sm text-muted-foreground font-normal">{stat.suffix}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Overall progress */}
          <div className="bg-card border border-border rounded-2xl p-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-bold text-foreground">התקדמות בקורס</h2>
              <span className="text-primary font-bold">{overallPct}%</span>
            </div>
            <div className="h-3 bg-muted rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${overallPct}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-primary to-[var(--gold)] rounded-full"
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              {progress.completedLessons.length} מתוך {TOTAL_LESSONS} שיעורים הושלמו
            </p>
          </div>

          {/* Badges */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-display font-bold text-foreground">
                הישגים ({earnedBadges.length}/{BADGES.length})
              </h2>
            </div>
            <BadgeGrid earnedBadges={progress.badges} showAll />
          </div>

          {/* Action items */}
          {progress.actionItemsCompleted.length > 0 && (
            <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700/30 rounded-xl p-4">
              <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
                ⚡ ביצעת {progress.actionItemsCompleted.length} תרגולים מעשיים — מדהים!
              </p>
            </div>
          )}

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 py-3 border border-border rounded-xl text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            יציאה מהמערכת
          </button>
        </motion.div>
      </div>
    </AppLayout>
  );
}
