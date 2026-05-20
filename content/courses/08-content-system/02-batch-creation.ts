import type { Lesson } from "@/lib/content/types";

const lesson: Lesson = {
  id: "batch-creation",
  slug: "batch-creation",
  title: "Batch Creation — חודש תוכן ב-2 שעות",
  courseId: "content-system",
  order: 2,
  duration: "12 דקות",
  xpReward: 80,
  heroImagePrompt: "Productive workspace with multiple screens showing content creation, time blocks calendar, warm focused lighting, efficiency concept",
  outcomes: [
    "לבצע סשן יצירה שבועי של 2 שעות",
    "ליצור תוכן ל-7 ימים בישיבה אחת",
    "לסיים שבוע שלם ב-Status עם ראש שקט",
  ],
  whyItMatters:
    "יצירה יומית = שחיקה מובטחת. Batch creation = חופש יצירתי + עקביות ללא לחץ. זה אחד מהשינויים הכי מהירים שאפשר לעשות.",
  content: `## ה-2 שעות שמחליפות יצירה יומית

### מה זה Batch Creation?

במקום לחשוב על Status כל יום — קובעים **יום יצירה שבועי** ויוצרים את כל התוכן ל-7 ימים קדימה **בישיבה אחת**.

---

### שיטת ה-Batch — 3 שלבים

**שלב 1: Brain Dump (30 דקות)**
כתוב 10-15 רעיונות בלי לעצור לשפוט. כמה שיותר. כן, גם הרעיונות ה'טיפשים'.

> "מה קרה השבוע שיכול לעניין את הקהל שלי? מה נשאלתי? מה לימדתי?"

**שלב 2: יצירה (60-70 דקות)**
בחר 5-7 רעיונות. כתוב/צלם/ערוך. אל תחכה לשלמות — Draft ראשון תמיד מספיק.

**שלב 3: ארגון (15-20 דקות)**
שמור בתיקייה. קבע לכל אחד: **מתי לפרסם + באיזה עמוד תוכן הוא שייך**.

---

### כלים מומלצים

- **Notion / Google Sheets** — לוח תכנון תוכן
- **Canva** — עיצוב מהיר עם templates
- **Keep / Notes** — רעיונות ספונטניים לאורך השבוע
- **WhatsApp Business** — לתזמון (זמין בחלק מהמכשירים)

---

### ה-Time Block הקבוע

קבע יום ושעה קבועים. ראשון בבוקר, חמישי בצהריים — לא משנה. **מה שקבוע — קורה**.

ואל תשכח: השאר מקום ל-**20% תוכן ספונטני** — חדשות, אירועים, רגעים שקורים.`,
  realWorldExample: `**ריבה, עורכת דין**

כל יום ראשון 9:00-11:00: Batch session קבוע.

**לפני:** "כל יום הייתי מתלבטת שעה על מה לפרסם, ולרוב לא פרסמתי בכלל"

**אחרי:** "6 Status מוכנים לשבוע. לא נגעתי בטלפון במהלך השבוע לצרכי תוכן"

**המפתח:** לא השינה בזמן — השינה בכמות הזמן לקבלת החלטות.`,
  commonMistakes: [
    "Batch session ללא מבנה — גורר ל-4 שעות של שום דבר",
    "לא לשמור template — מתחיל מאפס כל שבוע",
    "לא להשאיר מקום לתוכן ספונטני — אפשר להחמיץ רגעים מעולים",
    "להתחיל ב-Batch בלי Brain Dump קודם — יוצא תוכן של 'לחץ'",
  ],
  quiz: [
    {
      id: "bc-q1",
      type: "recognition",
      question: "כמה זמן מומלץ להקדיש ל-Batch session שבועי?",
      options: ["30 דקות", "2 שעות", "חצי יום", "כל היום"],
      correctIndex: 1,
      explanation: "2 שעות מאפשרות יצירה איכותית של שבוע שלם ללא שחיקה.",
    },
    {
      id: "bc-q2",
      type: "cued-recall",
      question: "מה 3 השלבים של Batch session?",
      hint: "Brain Dump → _____ → _____",
      sampleAnswer: "Brain Dump → יצירה → ארגון",
    },
  ],
  actionItem: {
    title: "בצע את ה-Batch הראשון שלך",
    description:
      "קבע 2 שעות בלוח הזמנים השבוע. בצע את 3 השלבים: Brain Dump, יצירה, ארגון. צור לפחות 4 Status מוכנים לשבוע הבא.",
    timeEstimate: "120 דקות",
  },
  nextLessonSlug: "repurposing",
  frameworks: ["Batch Processing", "Time Blocking", "GTD (Getting Things Done)"],
};

export default lesson;
