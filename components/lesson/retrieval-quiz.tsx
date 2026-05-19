"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckIcon, XIcon, ChevronLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { QuizQuestion } from "@/lib/content/types";
import { cn } from "@/lib/utils";

interface RetrievalQuizProps {
  questions: QuizQuestion[];
  lessonSlug: string;
  onComplete: (score: number) => void;
}

type AnswerState = "idle" | "answered" | "revealed";

export function RetrievalQuiz({
  questions,
  lessonSlug: _lessonSlug,
  onComplete,
}: RetrievalQuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answerState, setAnswerState] = useState<AnswerState>("idle");
  const [freeText, setFreeText] = useState("");
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [done, setDone] = useState(false);

  const question = questions[currentIndex];
  const total = questions.length;
  const progressPct = Math.round(((currentIndex + (done ? 1 : 0)) / total) * 100);

  function handleRecognitionSelect(idx: number) {
    if (answerState !== "idle") return;
    setSelectedOption(idx);
    setAnswerState("answered");
    if (idx === question.correctIndex) {
      setCorrectCount((c) => c + 1);
    }
  }

  function handleFreeRecallReveal() {
    setAnswerState("revealed");
    // Give credit if user typed something meaningful (≥10 chars)
    if (freeText.trim().length >= 10) {
      setCorrectCount((c) => c + 1);
    }
  }

  function handleCuedRecallReveal() {
    setAnswerState("revealed");
    if (freeText.trim().length >= 5) {
      setCorrectCount((c) => c + 1);
    }
  }

  function handleNext() {
    if (currentIndex + 1 >= total) {
      setDone(true);
      const finalScore = correctCount + (question.type !== "recognition" && freeText.trim().length >= 5 ? 0 : 0);
      onComplete(Math.round((correctCount / total) * 100));
    } else {
      setCurrentIndex((i) => i + 1);
      setAnswerState("idle");
      setFreeText("");
      setSelectedOption(null);
    }
  }

  if (done) {
    const score = Math.round((correctCount / total) * 100);
    const passed = score >= 60;
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl border border-border bg-card p-6 text-center"
      >
        <div className="mb-4 text-5xl">{passed ? "🎉" : "💪"}</div>
        <h3 className="font-display text-xl font-bold mb-2">
          {passed ? "כל הכבוד!" : "המשיכו לנסות!"}
        </h3>
        <p className="text-muted-foreground mb-6">
          ענית נכון על {correctCount} מתוך {total} שאלות
        </p>
        <div
          className={cn(
            "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold mb-6",
            passed
              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
              : "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
          )}
        >
          {passed ? <CheckIcon className="size-4" /> : <XIcon className="size-4" />}
          {score}%{passed ? " — עברת!" : " — לא עברת (נדרש 60%)"}
        </div>
        <br />
        <Button
          onClick={() => onComplete(score)}
          className="gap-2"
          size="lg"
        >
          המשך לתרגול
          <ChevronLeftIcon className="size-4" />
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Progress bar */}
      <div className="space-y-1">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>שאלה {currentIndex + 1} מתוך {total}</span>
          <span>{correctCount} נכון</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
          <motion.div
            className="h-full rounded-full bg-primary"
            animate={{ width: `${progressPct}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>

      {/* Question card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.25 }}
          className="rounded-2xl border border-border bg-card p-5 space-y-4"
        >
          <p className="font-semibold text-base leading-relaxed">{question.question}</p>

          {/* Free recall */}
          {question.type === "free-recall" && (
            <div className="space-y-3">
              <textarea
                value={freeText}
                onChange={(e) => setFreeText(e.target.value)}
                disabled={answerState !== "idle"}
                placeholder="כתוב את תשובתך כאן..."
                rows={3}
                className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 disabled:opacity-60"
              />
              {answerState === "idle" && (
                <Button
                  onClick={handleFreeRecallReveal}
                  variant="outline"
                  disabled={freeText.trim().length === 0}
                  className="w-full"
                >
                  הצג תשובה לדוגמה
                </Button>
              )}
              {answerState === "revealed" && question.sampleAnswer && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl border border-green-200 bg-green-50 p-4 dark:border-green-800/40 dark:bg-green-900/20"
                >
                  <p className="text-xs font-semibold text-green-700 dark:text-green-400 mb-1">
                    תשובה לדוגמה:
                  </p>
                  <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed">
                    {question.sampleAnswer}
                  </p>
                  {question.explanation && (
                    <p className="mt-2 text-xs text-green-700/70 dark:text-green-400/70">
                      {question.explanation}
                    </p>
                  )}
                </motion.div>
              )}
            </div>
          )}

          {/* Cued recall */}
          {question.type === "cued-recall" && (
            <div className="space-y-3">
              {question.hint && (
                <div className="rounded-xl bg-primary/5 border border-primary/20 px-4 py-2.5 text-sm text-primary">
                  <span className="font-semibold">רמז: </span>{question.hint}
                </div>
              )}
              <input
                type="text"
                value={freeText}
                onChange={(e) => setFreeText(e.target.value)}
                disabled={answerState !== "idle"}
                placeholder="כתוב את תשובתך..."
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 disabled:opacity-60"
              />
              {answerState === "idle" && (
                <Button
                  onClick={handleCuedRecallReveal}
                  variant="outline"
                  disabled={freeText.trim().length === 0}
                  className="w-full"
                >
                  הצג תשובה
                </Button>
              )}
              {answerState === "revealed" && question.sampleAnswer && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl border border-green-200 bg-green-50 p-4 dark:border-green-800/40 dark:bg-green-900/20"
                >
                  <p className="text-xs font-semibold text-green-700 dark:text-green-400 mb-1">
                    תשובה נכונה:
                  </p>
                  <p className="text-sm text-green-800 dark:text-green-300">
                    {question.sampleAnswer}
                  </p>
                </motion.div>
              )}
            </div>
          )}

          {/* Recognition */}
          {question.type === "recognition" && question.options && (
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {question.options.map((opt, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = idx === question.correctIndex;
                const showResult = answerState === "answered";

                return (
                  <button
                    key={idx}
                    onClick={() => handleRecognitionSelect(idx)}
                    disabled={answerState !== "idle"}
                    className={cn(
                      "rounded-xl border px-4 py-3 text-right text-sm font-medium transition-all",
                      "disabled:cursor-default",
                      !showResult && "border-border bg-background hover:bg-muted hover:border-primary/40",
                      showResult && isCorrect && "border-green-400 bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400",
                      showResult && isSelected && !isCorrect && "border-red-400 bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400",
                      showResult && !isSelected && !isCorrect && "border-border bg-background opacity-50"
                    )}
                  >
                    <span className="flex items-center justify-between gap-2">
                      <span>{opt}</span>
                      {showResult && isCorrect && <CheckIcon className="size-4 text-green-500 shrink-0" />}
                      {showResult && isSelected && !isCorrect && <XIcon className="size-4 text-red-500 shrink-0" />}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {/* Recognition explanation */}
          {question.type === "recognition" && answerState === "answered" && question.explanation && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-800 dark:border-blue-800/40 dark:bg-blue-900/20 dark:text-blue-300"
            >
              <span className="font-semibold">הסבר: </span>{question.explanation}
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Next button — shown after answering */}
      {answerState !== "idle" && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Button onClick={handleNext} className="w-full gap-2" size="lg">
            {currentIndex + 1 >= total ? "סיים חידון" : "שאלה הבאה"}
            <ChevronLeftIcon className="size-4" />
          </Button>
        </motion.div>
      )}
    </div>
  );
}
