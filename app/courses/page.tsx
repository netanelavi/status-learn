"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Lock, CheckCircle2, Clock, Zap } from "lucide-react";
import { getProgress } from "@/lib/gamification/storage";
import type { UserProgress } from "@/lib/gamification/types";
import { AppLayout } from "@/components/layout/app-layout";

const COURSES = [
  {
    id: "foundations", emoji: "🏗️", title: "Foundations",
    subtitle: "למה Status > כל השאר", color: "indigo",
    lessons: [
      { slug: "why-status", title: "למה Status > שאר הערוצים", duration: "10 דקות", xp: 75 },
      { slug: "jtbd", title: "Jobs-to-be-Done — למה אנשים צופים בסטטוס שלך", duration: "12 דקות", xp: 80 },
      { slug: "brand-identity", title: "הגדרת מותג אישי — אתה המדריך לא הגיבור", duration: "14 דקות", xp: 90 },
    ],
  },
  {
    id: "hooks-attention", emoji: "🎣", title: "Hooks & Attention",
    subtitle: "גורמים לאצבע לעצור", color: "amber",
    lessons: [
      { slug: "success-framework", title: "SUCCESs — מה גורם לרעיון לדבוק", duration: "14 דקות", xp: 90 },
      { slug: "opening-hooks", title: "פתיחים שעוצרים אצבע", duration: "15 דקות", xp: 100 },
      { slug: "visual-first", title: "ויזואל ראשון: צבע, טקסט, פנים", duration: "12 דקות", xp: 85 },
      { slug: "stepps-framework", title: "STEPPS — שש הסיבות שאנשים משתפים", duration: "15 דקות", xp: 100 },
      { slug: "hooks-workshop", title: "סדנה — 10 הוקים לאותו מסר", duration: "20 דקות", xp: 120 },
    ],
  },
  {
    id: "trust-credibility", emoji: "🤝", title: "Trust & Credibility",
    subtitle: "בונים אמון בלי לבקש", color: "emerald",
    lessons: [
      { slug: "authority-social-proof", title: "Authority + Social Proof — בונים אמון בלי לבקש", duration: "13 דקות", xp: 90 },
      { slug: "client-stories", title: "סיפורי לקוחות — הדרך הכי חזקה לאמון", duration: "15 דקות", xp: 100 },
      { slug: "reciprocity", title: "Reciprocity — תן לפני שאתה מבקש", duration: "12 דקות", xp: 85 },
      { slug: "behind-the-scenes", title: "Behind the Scenes — vulnerability vs. authority", duration: "13 דקות", xp: 90 },
    ],
  },
  {
    id: "engagement-following", emoji: "🚀", title: "Engagement & Following",
    subtitle: "מגדילים קהל ומעורבות", color: "rose",
    lessons: [
      { slug: "hook-model-status", title: "Hook Model — לולאת ההרגל שמחזירה אנשים", duration: "15 דקות", xp: 100 },
      { slug: "variable-rewards", title: "Variable Rewards — סקרים, חידות, cliffhangers", duration: "13 דקות", xp: 90 },
      { slug: "community-building", title: "מ-Viewers ל-Community", duration: "14 דקות", xp: 100 },
      { slug: "daily-triggers", title: "Triggers יומיים — בניית הרגל צפייה", duration: "12 דקות", xp: 85 },
      { slug: "contact-list-growth", title: "הגדלת רשימת אנשי קשר — Funnels לוואטסאפ", duration: "15 דקות", xp: 110 },
    ],
  },
  {
    id: "conversion", emoji: "💰", title: "Conversion",
    subtitle: "הופכים צופים ללקוחות", color: "violet",
    lessons: [
      { slug: "effective-cta", title: "CTA יעיל — הפסיכולוגיה של בקשת פעולה", duration: "14 דקות", xp: 100 },
      { slug: "irresistible-offer", title: "הצעה שאי-אפשר לסרב — Value Equation", duration: "16 דקות", xp: 110 },
      { slug: "status-copywriting", title: "Copywriting לסטטוס — קצר, מדבר, רגשי", duration: "14 דקות", xp: 95 },
      { slug: "ethical-scarcity", title: "Scarcity ו-Urgency אתיים", duration: "12 דקות", xp: 85 },
      { slug: "measuring-optimizing", title: "מדידה ואופטימיזציה — KPIs שחשובים בסטטוס", duration: "13 דקות", xp: 90 },
    ],
  },
  {
    id: "storytelling", emoji: "📖", title: "Storytelling",
    subtitle: "סיפורים שגורמים לאנשים לעצור", color: "purple",
    lessons: [
      { slug: "hook-anatomy", title: "אנטומיה של Hook — 3 השניות הראשונות", duration: "14 דקות", xp: 80 },
      { slug: "brand-story", title: "סיפור המותג — המבנה שגורם לאנשים לזכור", duration: "16 דקות", xp: 90 },
      { slug: "visual-identity", title: "שפה ויזואלית — לפני שקוראים מילה", duration: "13 דקות", xp: 80 },
    ],
  },
  {
    id: "content-system", emoji: "⚙️", title: "Content System",
    subtitle: "מנגנון תוכן שעובד לבד", color: "orange",
    lessons: [
      { slug: "content-pillars", title: "עמודי תוכן — לעולם לא תיגמר לך רעיונות", duration: "16 דקות", xp: 90 },
      { slug: "batch-creation", title: "Batch Creation — חודש תוכן ב-2 שעות", duration: "12 דקות", xp: 80 },
      { slug: "repurposing", title: "Repurposing — מתוכן אחד לעשרה", duration: "14 דקות", xp: 80 },
    ],
  },
  {
    id: "monetization", emoji: "💵", title: "Monetization",
    subtitle: "הופכים נוכחות לכסף אמיתי", color: "teal",
    lessons: [
      { slug: "pricing-value", title: "תמחור — איך לדבר על כסף בלי להבריח", duration: "17 דקות", xp: 100 },
      { slug: "launch-sequence", title: "Launch Sequence — שבוע שמוכר", duration: "20 דקות", xp: 110 },
      { slug: "dm-conversion", title: "DM Conversion — מStatus לכסף", duration: "16 דקות", xp: 100 },
    ],
  },
  {
    id: "voice-authenticity", emoji: "🎙️", title: "Voice & Authenticity",
    subtitle: "להישמע כמוך ולא כמו AI", color: "pink",
    lessons: [
      { slug: "authentic-voice", title: "קול אמיתי — איך להישמע כמוך ולא כמו AI", duration: "15 דקות", xp: 90 },
      { slug: "anti-generic", title: "Anti-Generic — השיטה לתוכן שאי-אפשר לשכפל", duration: "13 דקות", xp: 85 },
      { slug: "opinion-content", title: "תוכן עם דעה — ההפך מבטוח הוא ויראלי", duration: "14 דקות", xp: 85 },
    ],
  },
  {
    id: "analytics-growth", emoji: "📊", title: "Analytics & Growth",
    subtitle: "מספרים שמספרים את האמת", color: "lime",
    lessons: [
      { slug: "reading-your-stats", title: "קריאת המספרים — הנתונים שמספרים את האמת", duration: "14 דקות", xp: 90 },
      { slug: "growth-experiments", title: "ניסויי גדילה — איך לבדוק מה עובד", duration: "13 דקות", xp: 85 },
      { slug: "content-decisions", title: "החלטות תוכן מבוססות דאטה — מהנחשים לנבונים", duration: "12 דקות", xp: 90 },
    ],
  },
  {
    id: "video-content", emoji: "🎬", title: "Video & Short Content",
    subtitle: "וידאו שעוצר אצבעות", color: "sky",
    lessons: [
      { slug: "filming-basics", title: "צילום בסמארטפון — הטכניקות שמשנות הכל", duration: "15 דקות", xp: 85 },
      { slug: "editing-for-status", title: "עריכה לStatus — פשוט ומנצח", duration: "13 דקות", xp: 80 },
      { slug: "video-hooks", title: "Hook ויזואלי — 3 השניות שקובעות הכל", duration: "14 דקות", xp: 90 },
    ],
  },
];

const CAPSTONE = {
  id: "capstone", emoji: "🏆", title: "Capstone Project",
  subtitle: "קמפיין 7-ימי שלם", color: "gold",
  lessons: [
    { slug: "capstone", title: "תכנן קמפיין סטטוס 7-ימי שלם", duration: "25 דקות", xp: 150 },
  ],
};

const ACCENT_COLORS: Record<string, string> = {
  indigo: "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20",
  amber: "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20",
  emerald: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20",
  rose: "text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-900/20",
  violet: "text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/20",
  purple: "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20",
  orange: "text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20",
  teal: "text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/20",
  pink: "text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-900/20",
  lime: "text-lime-600 dark:text-lime-400 bg-lime-50 dark:bg-lime-900/20",
  sky: "text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-900/20",
  gold: "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20",
};

function CourseCard({
  course,
  progress,
  isLocked,
  prevCompleted,
}: {
  course: typeof COURSES[0];
  progress: UserProgress;
  isLocked: boolean;
  prevCompleted: boolean;
}) {
  const [open, setOpen] = useState(false);
  const done = course.lessons.filter(l => progress.completedLessons.includes(l.slug)).length;
  const pct = Math.round((done / course.lessons.length) * 100);

  return (
    <div className={`border rounded-2xl overflow-hidden transition-all ${isLocked ? "opacity-60" : ""}`}>
      <button
        onClick={() => !isLocked && setOpen(!open)}
        className="w-full flex items-center justify-between p-4 bg-card hover:bg-muted/30 transition-colors text-right"
        disabled={isLocked}
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{course.emoji}</span>
          <div className="text-right">
            <p className="font-display font-bold text-foreground">{course.title}</p>
            <p className="text-sm text-muted-foreground">{course.subtitle}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0 mr-2">
          {isLocked ? (
            <Lock className="w-4 h-4 text-muted-foreground" />
          ) : (
            <>
              <span className="text-sm font-bold text-primary hidden sm:block">{pct}%</span>
              <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
            </>
          )}
        </div>
      </button>

      {/* Progress bar */}
      {!isLocked && (
        <div className="h-1 bg-muted">
          <div
            className="h-full bg-primary/60 transition-all duration-700"
            style={{ width: `${pct}%` }}
          />
        </div>
      )}

      <AnimatePresence>
        {open && !isLocked && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="divide-y divide-border">
              {course.lessons.map((lesson, i) => {
                const isCompleted = progress.completedLessons.includes(lesson.slug);
                return (
                  <Link
                    key={lesson.slug}
                    href={`/lesson/${lesson.slug}`}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-muted/20 transition-colors"
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold ${
                      isCompleted
                        ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : i + 1}
                    </div>
                    <div className="flex-1 text-right min-w-0">
                      <p className={`text-sm font-medium truncate ${isCompleted ? "text-muted-foreground line-through" : "text-foreground"}`}>
                        {lesson.title}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0 mr-2">
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />{lesson.duration}
                      </span>
                      <span className={`flex items-center gap-0.5 text-xs px-2 py-0.5 rounded-full ${ACCENT_COLORS[course.color]}`}>
                        <Zap className="w-3 h-3" />{lesson.xp}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function CoursesPage() {
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

  const allLessons = COURSES.flatMap(c => c.lessons);
  const totalXp = COURSES.reduce((sum, c) => sum + c.lessons.reduce((s, l) => s + l.xp, 0), 0) + 150;

  return (
    <AppLayout>
      <div className="max-w-3xl mx-auto px-4 py-6 pb-24 md:pb-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <h1 className="text-2xl font-display font-black text-foreground mb-1">המסלול</h1>
          <p className="text-muted-foreground">
            {allLessons.length + 1} שיעורים · {totalXp} XP סה&quot;כ ·{" "}
            {progress.completedLessons.length} הושלמו
          </p>
        </motion.div>

        <div className="space-y-3">
          {COURSES.map((course, i) => {
            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <CourseCard
                  course={course}
                  progress={progress}
                  isLocked={false}
                  prevCompleted={true}
                />
              </motion.div>
            );
          })}

          {/* Capstone */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <div className="border-2 border-[var(--gold)]/30 rounded-2xl overflow-hidden">
              <Link
                href="/lesson/capstone"
                className="flex items-center justify-between p-4 bg-gradient-to-r from-[var(--gold)]/10 to-amber-600/5 hover:from-[var(--gold)]/15 transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <p className="font-display font-bold text-foreground">Capstone Project</p>
                    <p className="text-sm text-muted-foreground">קמפיין 7-ימי שלם · 150 XP</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mr-2">
                  {progress.completedLessons.includes("capstone") && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  )}
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </AppLayout>
  );
}
