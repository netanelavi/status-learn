"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Zap, AlertTriangle } from "lucide-react";
import type { Lesson } from "@/lib/content/types";
import { completeLesson } from "@/lib/gamification/storage";
import { LessonHeader } from "@/components/lesson/lesson-header";
import { LessonContent } from "@/components/lesson/lesson-content";
import { RetrievalQuiz } from "@/components/lesson/retrieval-quiz";
import { ActionItemCard } from "@/components/lesson/action-item-card";
import { showLevelUpToast } from "@/components/gamification/level-up-toast";
import { AppLayout } from "@/components/layout/app-layout";

const TOTAL_LESSONS = 23;

interface LessonViewProps {
  lesson: Lesson;
  nextLesson: Lesson | null;
  totalLessons: number;
  lessonIndex: number;
}

export default function LessonView({ lesson, nextLesson, totalLessons, lessonIndex }: LessonViewProps) {
  const [phase, setPhase] = useState<"reading" | "quiz" | "done">("reading");

  const COURSE_TITLES: Record<string, string> = {
    "foundations": "יסודות",
    "hooks-attention": "Hooks & Attention",
    "trust-credibility": "Trust & Credibility",
    "engagement-following": "Engagement & Following",
    "conversion": "Conversion",
    "capstone": "Capstone",
  };
  const courseTitle = COURSE_TITLES[lesson.courseId] ?? lesson.courseId;

  const handleQuizComplete = useCallback((score: number) => {
    const result = completeLesson(lesson.slug, lesson.xpReward, TOTAL_LESSONS);
    if (result.leveledUp || result.newBadges.length > 0) {
      showLevelUpToast(result.progress.level, result.newBadges);
    }
    setPhase("done");
  }, [lesson.slug, lesson.xpReward]);

  return (
    <AppLayout>
      <div className="max-w-2xl mx-auto px-4 py-4 pb-24 md:pb-8">
        {/* Back link */}
        <Link
          href="/courses"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          חזרה לקורסים
        </Link>

        {/* Header */}
        <LessonHeader
          lesson={lesson}
          lessonIndex={lessonIndex}
          totalLessons={totalLessons}
          courseTitle={courseTitle}
        />

        {phase === "reading" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 space-y-6"
          >
            <LessonContent lesson={lesson} />

            <motion.button
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              onClick={() => setPhase("quiz")}
              className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 active:scale-[0.98] transition-all shadow-lg shadow-primary/20"
            >
              מוכן לתרגול! ←
            </motion.button>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => handleQuizComplete(0)}
              className="w-full py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              דלג על הבוחן →
            </motion.button>
          </motion.div>
        )}

        {phase === "quiz" && (
          <div className="mt-6">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-3 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-primary flex-shrink-0" />
              <p className="text-sm text-foreground">
                ענה מהזיכרון — לא מותר לגלול למעלה! זה מה שגורם ללימוד לדבוק. 🧠
              </p>
            </div>
            <RetrievalQuiz
              questions={lesson.quiz}
              lessonSlug={lesson.slug}
              onComplete={handleQuizComplete}
            />
          </div>
        )}

        {phase === "done" && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 space-y-4"
          >
            {/* XP Award */}
            <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700/30 rounded-2xl p-5 text-center">
              <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto mb-3" />
              <h2 className="text-lg font-display font-black text-foreground mb-1">
                מעולה! השיעור הושלם 🎉
              </h2>
              <div className="inline-flex items-center gap-1.5 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 rounded-full px-4 py-1.5 text-sm font-bold">
                <Zap className="w-4 h-4" />
                +{lesson.xpReward} XP הרווחת!
              </div>
            </div>

            {/* Action Item */}
            <ActionItemCard actionItem={lesson.actionItem} lessonSlug={lesson.slug} />

            {/* Next lesson */}
            {nextLesson ? (
              <Link
                href={`/lesson/${nextLesson.slug}`}
                className="flex items-center justify-between bg-primary text-primary-foreground rounded-2xl p-5 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 active:scale-[0.99]"
              >
                <div>
                  <p className="text-sm opacity-80 mb-0.5">השיעור הבא</p>
                  <p className="font-bold">{nextLesson.title}</p>
                </div>
                <ArrowLeft className="w-5 h-5 rotate-180 opacity-80" />
              </Link>
            ) : (
              <Link
                href="/dashboard"
                className="flex items-center justify-center gap-2 bg-[var(--gold)] text-[var(--gold-foreground)] rounded-2xl p-5 font-bold hover:opacity-90 transition-all shadow-lg"
              >
                🏆 סיימת! חזרה לדשבורד
              </Link>
            )}

            <Link
              href="/courses"
              className="block text-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              חזרה לרשימת הקורסים
            </Link>
          </motion.div>
        )}
      </div>

    </AppLayout>
  );
}
