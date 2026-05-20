declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

function push(event: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}

export const gtm = {
  lessonStart: (slug: string, title: string, courseId: string) =>
    push({ event: "lesson_start", lesson_slug: slug, lesson_title: title, course_id: courseId }),

  lessonComplete: (slug: string, title: string, courseId: string, xpEarned: number) =>
    push({ event: "lesson_complete", lesson_slug: slug, lesson_title: title, course_id: courseId, xp_earned: xpEarned }),

  quizComplete: (slug: string, score: number) =>
    push({ event: "quiz_complete", lesson_slug: slug, score }),

  quizSkip: (slug: string) =>
    push({ event: "quiz_skip", lesson_slug: slug }),

  badgeEarned: (badgeSlug: string, badgeTitle: string) =>
    push({ event: "badge_earned", badge_slug: badgeSlug, badge_title: badgeTitle }),

  login: () =>
    push({ event: "login" }),

  ctaClick: (location: string) =>
    push({ event: "cta_click", location }),
};
