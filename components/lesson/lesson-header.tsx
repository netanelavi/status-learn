import { ClockIcon, ZapIcon } from "lucide-react";
import type { Lesson } from "@/lib/content/types";
import { cn } from "@/lib/utils";

interface LessonHeaderProps {
  lesson: Lesson;
  lessonIndex: number;
  totalLessons: number;
  courseTitle: string;
  className?: string;
}

export function LessonHeader({
  lesson,
  lessonIndex,
  totalLessons,
  courseTitle,
  className,
}: LessonHeaderProps) {
  return (
    <div className={cn("relative w-full overflow-hidden rounded-2xl", className)}>
      {/* Hero image or gradient fallback */}
      {lesson.heroImageUrl ? (
        <img
          src={lesson.heroImageUrl}
          alt={lesson.title}
          className="h-56 w-full object-cover md:h-72"
        />
      ) : (
        <div className="h-56 w-full bg-gradient-to-br from-primary/80 via-primary/60 to-[var(--gold)]/40 md:h-72" />
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-8">
        {/* Top meta row */}
        <div className="mb-3 flex items-center gap-2 text-xs font-medium text-white/80">
          <span className="rounded-full bg-white/20 px-2.5 py-1 backdrop-blur-sm">
            {courseTitle}
          </span>
          <span className="rounded-full bg-white/20 px-2.5 py-1 backdrop-blur-sm">
            שיעור {lessonIndex} מתוך {totalLessons}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-display text-2xl font-bold leading-tight text-white md:text-3xl">
          {lesson.title}
        </h1>

        {/* Duration + XP badges */}
        <div className="mt-3 flex items-center gap-3">
          <div className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
            <ClockIcon className="size-3.5" />
            {lesson.duration}
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-[var(--gold)]/80 px-3 py-1.5 text-xs font-semibold text-[var(--gold-foreground)] backdrop-blur-sm">
            <ZapIcon className="size-3.5" />
            {lesson.xpReward} XP
          </div>
        </div>
      </div>
    </div>
  );
}
