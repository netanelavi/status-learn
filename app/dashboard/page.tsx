"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, BookOpen, ArrowLeft, Lock } from "lucide-react";
import { getProgress } from "@/lib/gamification/storage";
import { getLevelFromXp, BADGES } from "@/lib/gamification/types";
import type { UserProgress } from "@/lib/gamification/types";
import { XpBar } from "@/components/gamification/xp-bar";
import { StreakFlame } from "@/components/gamification/streak-flame";
import { BadgeGrid } from "@/components/gamification/badge-grid";
import { AppLayout } from "@/components/layout/app-layout";
import { useCountUp } from "@/hooks/use-count-up";

// Static course data until content manifest is ready
const MINI_COURSES = [
  { id: "foundations", slug: "foundations", title: "Foundations", emoji: "🏗️", subtitle: "למה Status > כל השאר", lessons: ["why-status", "jtbd", "brand-identity"], color: "indigo" },
  { id: "hooks-attention", slug: "hooks-attention", title: "Hooks & Attention", emoji: "🎣", subtitle: "גורמים לאצבע לעצור", lessons: ["success-framework", "opening-hooks", "visual-first", "stepps-framework", "hooks-workshop"], color: "amber" },
  { id: "trust-credibility", slug: "trust-credibility", title: "Trust & Credibility", emoji: "🤝", subtitle: "בונים אמון בלי לבקש", lessons: ["authority-social-proof", "client-stories", "reciprocity", "behind-the-scenes"], color: "emerald" },
  { id: "engagement-following", slug: "engagement-following", title: "Engagement & Following", emoji: "🚀", subtitle: "מגדילים קהל ומעורבות", lessons: ["hook-model-status", "variable-rewards", "community-building", "daily-triggers", "contact-list-growth"], color: "rose" },
  { id: "conversion", slug: "conversion", title: "Conversion", emoji: "💰", subtitle: "הופכים צופים ללקוחות", lessons: ["effective-cta", "irresistible-offer", "status-copywriting", "ethical-scarcity", "measuring-optimizing"], color: "violet" },
];

const ALL_LESSONS = MINI_COURSES.flatMap(c => c.lessons);
const TOTAL_LESSONS = ALL_LESSONS.length + 1; // +1 capstone

const COURSE_COLORS: Record<string, string> = {
  indigo: "from-indigo-500/15 to-indigo-600/5 border-indigo-200/50 dark:border-indigo-700/30",
  amber: "from-amber-500/15 to-amber-600/5 border-amber-200/50 dark:border-amber-700/30",
  emerald: "from-emerald-500/15 to-emerald-600/5 border-emerald-200/50 dark:border-emerald-700/30",
  rose: "from-rose-500/15 to-rose-600/5 border-rose-200/50 dark:border-rose-700/30",
  violet: "from-violet-500/15 to-violet-600/5 border-violet-200/50 dark:border-violet-700/30",
};

export default function DashboardPage() {
  const [progress, setProgress] = useState<UserProgress | null>(null);

  useEffect(() => {
    setProgress(getProgress());
  }, []);

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

  // Find next lesson
  const nextLessonSlug = ALL_LESSONS.find(s => !progress.completedLessons.includes(s)) ?? "capstone";

  const coursesWithLock = MINI_COURSES.map((course, i) => {
    const done = course.lessons.filter(s => progress.completedLessons.includes(s)).length;
    const total = course.lessons.length;
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;
    let isLocked = false;
    if (i > 0) {
      const prevDone = MINI_COURSES[i - 1].lessons.filter(s => progress.completedLessons.includes(s)).length;
      isLocked = prevDone < MINI_COURSES[i - 1].lessons.length;
    }
    return { ...course, done, total, pct, isLocked };
  });

  const recentBadges = BADGES.filter(b => progress.badges.includes(b.slug)).slice(-3);

  const overallPct = Math.round((progress.completedLessons.length / TOTAL_LESSONS) * 100);

  const stagger = { show: { transition: { staggerChildren: 0.07 } } };
  const fadeUp = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto px-4 py-6 pb-24 md:pb-8">
        <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-6">

          {/* Header */}
          <motion.div variants={fadeUp}>
            <h1 className="text-2xl font-display font-black text-foreground mb-1">
              שלום! 👋
            </h1>
            <p className="text-muted-foreground">
              רמה {levelInfo.level} — <span className="text-foreground font-medium">{levelInfo.title}</span>
              {" · "}{progress.completedLessons.length}/{TOTAL_LESSONS} שיעורים
            </p>
          </motion.div>

          {/* XP + Streak row */}
          <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-2">
              <XpBar
                xp={progress.xp}
                level={levelInfo.level}
                levelTitle={levelInfo.title}
                nextXp={levelInfo.nextXp}
                progress={levelInfo.progress}
              />
            </div>
            <StreakFlame streak={progress.streakCount} />
          </motion.div>

          {/* Overall progress */}
          <motion.div variants={fadeUp} className="bg-card border border-border rounded-2xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">התקדמות כוללת</span>
              <span className="text-sm font-bold text-primary">{overallPct}%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${overallPct}%` }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                className="h-full bg-primary rounded-full"
              />
            </div>
          </motion.div>

          {/* Next lesson CTA */}
          <motion.div variants={fadeUp}>
            <Link
              href={`/lesson/${nextLessonSlug}`}
              className="group flex items-center justify-between bg-primary text-primary-foreground rounded-2xl p-5 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 active:scale-[0.99]"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm opacity-80">המשך ללמוד</p>
                  <p className="font-semibold">השיעור הבא שלך</p>
                </div>
              </div>
              <ArrowLeft className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity rotate-180" />
            </Link>
          </motion.div>

          {/* Mini-course cards */}
          <motion.div variants={fadeUp}>
            <h2 className="text-lg font-display font-bold text-foreground mb-3">המסלול שלך</h2>
            <div className="space-y-3">
              {coursesWithLock.map((course) => (
                <div
                  key={course.id}
                  className={`bg-gradient-to-br ${COURSE_COLORS[course.color]} border rounded-xl p-4 ${course.isLocked ? "opacity-50" : ""}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{course.emoji}</span>
                      <div>
                        <p className="font-semibold text-sm text-foreground">{course.title}</p>
                        <p className="text-xs text-muted-foreground">{course.subtitle}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {course.isLocked ? (
                        <Lock className="w-4 h-4 text-muted-foreground" />
                      ) : (
                        <span className="text-xs font-bold text-primary">{course.pct}%</span>
                      )}
                    </div>
                  </div>
                  {!course.isLocked && (
                    <div className="h-1.5 bg-background/50 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary/60 rounded-full transition-all duration-700"
                        style={{ width: `${course.pct}%` }}
                      />
                    </div>
                  )}
                  <p className="text-xs text-muted-foreground mt-1.5">
                    {course.done}/{course.total} שיעורים
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recent badges */}
          {recentBadges.length > 0 && (
            <motion.div variants={fadeUp}>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-display font-bold text-foreground">הישגים אחרונים</h2>
                <Link href="/profile" className="text-sm text-primary">כל ה-badges</Link>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {recentBadges.map(badge => (
                  <div key={badge.slug} className="bg-card border border-[var(--gold)]/30 rounded-xl p-3 text-center">
                    <div className="text-2xl mb-1">{badge.emoji}</div>
                    <p className="text-xs font-medium text-foreground">{badge.title}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Courses link */}
          <motion.div variants={fadeUp}>
            <Link
              href="/courses"
              className="flex items-center justify-between bg-card border border-border rounded-xl p-4 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-primary" />
                <span className="font-medium text-foreground">כל הקורסים והשיעורים</span>
              </div>
              <ArrowLeft className="w-4 h-4 text-muted-foreground rotate-180" />
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </AppLayout>
  );
}
