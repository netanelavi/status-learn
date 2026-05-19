"use client";

import { useState } from "react";
import { ZapIcon, CheckCircle2Icon, ClockIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { completeActionItem } from "@/lib/gamification/storage";
import { getProgress } from "@/lib/gamification/storage";
import type { ActionItem } from "@/lib/content/types";
import { cn } from "@/lib/utils";

interface ActionItemCardProps {
  lessonSlug: string;
  actionItem: ActionItem;
  className?: string;
}

export function ActionItemCard({
  lessonSlug,
  actionItem,
  className,
}: ActionItemCardProps) {
  const initialCompleted = getProgress().actionItemsCompleted.includes(lessonSlug);
  const [completed, setCompleted] = useState(initialCompleted);

  function handleToggle() {
    if (completed) return;
    completeActionItem(lessonSlug);
    setCompleted(true);
  }

  return (
    <div
      className={cn(
        "rounded-2xl border p-5 transition-all",
        completed
          ? "border-green-300 bg-green-50 dark:border-green-800/50 dark:bg-green-900/10"
          : "border-[var(--gold)]/40 bg-[var(--gold)]/5",
        className
      )}
    >
      {/* Header */}
      <div className="mb-3 flex items-center gap-2">
        <div
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-lg",
            completed ? "bg-green-500" : "bg-[var(--gold)]"
          )}
        >
          {completed ? (
            <CheckCircle2Icon className="size-4 text-white" />
          ) : (
            <ZapIcon className="size-4 text-[var(--gold-foreground)]" />
          )}
        </div>
        <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          תרגול מעשי
        </span>
      </div>

      {/* Title + description */}
      <h3 className="font-display text-base font-bold mb-1.5">
        {actionItem.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {actionItem.description}
      </p>

      {/* Time estimate */}
      <div className="mb-4 flex items-center gap-1.5 text-xs text-muted-foreground">
        <ClockIcon className="size-3.5" />
        <span>זמן משוער: {actionItem.timeEstimate}</span>
      </div>

      {/* CTA */}
      {completed ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-2 text-sm font-semibold text-green-700 dark:text-green-400"
        >
          <CheckCircle2Icon className="size-4" />
          מעולה! ביצעת את התרגול
        </motion.div>
      ) : (
        <Button
          onClick={handleToggle}
          variant="outline"
          className="w-full border-[var(--gold)]/50 hover:bg-[var(--gold)]/10 hover:border-[var(--gold)]"
        >
          ✅ סימנתי כבצוע
        </Button>
      )}
    </div>
  );
}
