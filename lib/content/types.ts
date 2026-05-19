export interface QuizQuestion {
  id: string;
  type: "free-recall" | "cued-recall" | "recognition";
  question: string;
  options?: string[];          // recognition only
  correctIndex?: number;       // recognition only
  hint?: string;               // cued-recall
  sampleAnswer?: string;       // free-recall / cued-recall — shown after attempt
  explanation?: string;
}

export interface ActionItem {
  title: string;
  description: string;
  timeEstimate: string;
}

export interface Lesson {
  id: string;
  slug: string;
  title: string;
  courseId: string;
  order: number;
  duration: string;            // e.g. "12 דקות"
  xpReward: number;            // 50-150
  heroImagePrompt: string;     // AI image generation prompt
  heroImageUrl?: string;
  outcomes: string[];          // UbD outcomes: "בסוף תוכל ל..."
  whyItMatters: string;        // 1 paragraph story hook
  content: string;             // Markdown content (Hebrew)
  realWorldExample: string;    // Markdown — demo status / case study
  commonMistakes: string[];
  quiz: QuizQuestion[];
  actionItem: ActionItem;
  nextLessonSlug?: string;
  frameworks: string[];        // e.g. ["SUCCESs", "Hook Model"]
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  order: number;
  emoji: string;
  color: string;               // Tailwind color class for accent
  lessons: Lesson[];
  totalXp: number;
}
