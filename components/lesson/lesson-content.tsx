"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { XCircleIcon } from "lucide-react";
import type { Lesson } from "@/lib/content/types";
import { cn } from "@/lib/utils";

interface LessonContentProps {
  lesson: Lesson;
  className?: string;
}

/** Very lightweight Markdown → HTML converter for Hebrew lesson content */
function simpleMarkdownToHtml(md: string): string {
  return md
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^# (.+)$/gm, "<h1>$1</h1>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/^- (.+)$/gm, "<li>$1</li>")
    .replace(/(<li>.*<\/li>\n?)+/g, (m) => `<ul>${m}</ul>`)
    .replace(/\n{2,}/g, "</p><p>")
    .replace(/^(?!<[hul])/gm, "")
    .trim()
    .replace(/^(.+)/, "<p>$1")
    .replace(/(.+)$/, "$1</p>");
}

export function LessonContent({ lesson, className }: LessonContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const container = el.closest("[data-lesson-scroll]") ?? document.documentElement;

    function onScroll() {
      const scrollTop = (container as HTMLElement).scrollTop ?? window.scrollY;
      const scrollHeight =
        (container as HTMLElement).scrollHeight - (container as HTMLElement).clientHeight;
      setScrollProgress(scrollHeight > 0 ? Math.min(1, scrollTop / scrollHeight) : 0);
    }

    (container as HTMLElement).addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      (container as HTMLElement).removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const mainHtml = simpleMarkdownToHtml(lesson.content);
  const exampleHtml = simpleMarkdownToHtml(lesson.realWorldExample);

  return (
    <div ref={contentRef} className={cn("space-y-8", className)}>
      {/* Scroll progress bar */}
      <div className="sticky top-0 z-10 h-0.5 w-full bg-muted">
        <motion.div
          className="h-full bg-primary origin-right"
          style={{ scaleX: scrollProgress, transformOrigin: "right" }}
        />
      </div>

      {/* Why it matters */}
      <div className="rounded-xl border border-primary/20 bg-primary/5 px-5 py-4">
        <p className="text-sm font-semibold text-primary mb-1">למה זה חשוב?</p>
        <p className="text-sm text-foreground leading-relaxed">{lesson.whyItMatters}</p>
      </div>

      {/* Main content */}
      <div
        className="prose prose-sm max-w-none text-foreground
          [&_h1]:font-display [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:mb-3
          [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mb-2 [&_h2]:mt-6
          [&_h3]:font-semibold [&_h3]:text-base [&_h3]:mb-1.5 [&_h3]:mt-4
          [&_p]:leading-relaxed [&_p]:mb-3
          [&_ul]:list-disc [&_ul]:pr-5 [&_ul]:space-y-1
          [&_li]:text-sm [&_li]:leading-relaxed
          [&_strong]:font-semibold [&_strong]:text-foreground"
        dangerouslySetInnerHTML={{ __html: mainHtml }}
      />

      {/* Learning outcomes */}
      {lesson.outcomes.length > 0 && (
        <div className="rounded-xl border border-border bg-card p-5 space-y-3">
          <h3 className="font-semibold text-sm text-foreground">בסוף השיעור תוכל:</h3>
          <ul className="space-y-1.5">
            {lesson.outcomes.map((outcome, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <span className="mt-0.5 text-primary">✓</span>
                <span className="leading-relaxed">{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Real-world example — WhatsApp mockup style */}
      <div className="space-y-3">
        <h3 className="font-display text-lg font-bold">דוגמה מהחיים</h3>
        <div className="rounded-2xl border border-border bg-[#0a2310] p-4 space-y-3">
          {/* WhatsApp-style header */}
          <div className="flex items-center gap-2 pb-2 border-b border-white/10">
            <div className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center">
              <span className="text-xs font-bold text-white">W</span>
            </div>
            <div>
              <p className="text-xs font-semibold text-white">WhatsApp Status</p>
              <p className="text-[0.65rem] text-green-400">דוגמה אמיתית</p>
            </div>
          </div>
          <div
            className="text-sm text-white/90 leading-relaxed
              [&_p]:mb-2 [&_strong]:text-green-400 [&_em]:text-white/70"
            dangerouslySetInnerHTML={{ __html: exampleHtml }}
          />
        </div>
      </div>

      {/* Common mistakes */}
      {lesson.commonMistakes.length > 0 && (
        <div className="space-y-3">
          <h3 className="font-display text-lg font-bold">טעויות נפוצות</h3>
          <ul className="space-y-2">
            {lesson.commonMistakes.map((mistake, i) => (
              <li key={i} className="flex items-start gap-2.5 rounded-xl border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm">
                <XCircleIcon className="mt-0.5 size-4 shrink-0 text-destructive" />
                <span className="leading-relaxed">{mistake}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Frameworks */}
      {lesson.frameworks.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {lesson.frameworks.map((fw) => (
            <span
              key={fw}
              className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
            >
              {fw}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
