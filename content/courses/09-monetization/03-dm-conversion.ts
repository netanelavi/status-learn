import type { Lesson } from "@/lib/content/types";

const lesson: Lesson = {
  id: "dm-conversion",
  slug: "dm-conversion",
  title: "DM Conversion — מStatus לכסף",
  courseId: "monetization",
  order: 3,
  duration: "16 דקות",
  xpReward: 100,
  heroImagePrompt: "WhatsApp chat bubbles flowing into a money symbol, clean graphic design, green and white brand colors, conversion funnel visualization",
  outcomes: [
    "לבנות funnel שממיר צופי Status לשיחות DM",
    "לנהל שיחת מכירה ראשונה ב-WhatsApp נכון",
    "לדעת מה לומר ומה לא לומר בדקות הראשונות",
  ],
  whyItMatters:
    "Status הוא ה-awareness. DM הוא ה-conversion. בלי מעבר חלק ביניהם — כל העבודה על Status הולכת לאיבוד.",
  content: `## מה קורה אחרי שמישהו רואה את ה-Status שלך?

90% — גולשים הלאה.
9% — שומרים בזיכרון.
1% — פונים.

**המטרה:** להגדיל את ה-1% ולהמיר את ה-9%.

---

## Status שמייצר DMs

**נוסחה:**  ערך + שאלה/רמז + CTA נמוך חיכוך

דוגמה:
> "3 הדברים שעשיתי שהגדילו את הכנסותי ב-40% תוך 6 חודשים. אם רוצה את הרשימה המלאה — שלח לי 'רשימה'"

**למה 'שלח לי X' עובד:**
- חיכוך נמוך (לא צריך לחשוב מה לכתוב)
- סגנון שיחה, לא טופס
- מי ששולח — כבר עשה micro-commitment

---

## שלבי DM Conversation

### שלב 1: קבלה חמה
"שמחתי שפנית! לפני שאשלח לך — ספר לי: מה המצב שלך עכשיו ב[תחום]?"

**לא:** לשלוח ישר את הקישור/הפרטים.

### שלב 2: הבנת הצורך
שאל שאלות פתוחות. הקשב. לא מוכרים — מבינים.

"מה הניסיון שלך עם זה עד עכשיו?"
"מה הכי חשוב לך בפתרון?"

### שלב 3: Bridge לפגישה
"נשמע שאתה בדיוק מי שאני עובד איתו. בוא נקבע 20 דקות לשיחה — ללא התחייבות — ואני אסביר לך בדיוק איך נוכל לעזור"

---

## מה לא לומר בשלב ראשון

❌ "כמה תקציב יש לך?" — הורג שיחה
❌ "המחיר הוא X" — מוקדם מדי
❌ "שלח לי מה נוח לך" — לא מנחה, לא ממיר

---

## זמן תגובה = כסף

תגובה תוך **פחות משעה** = פי 3 יותר המרות לעומת תגובה יום אחרי.`,
  realWorldExample: `**אמיר, מאמן כושר**

Status: "הלקוח שלי ירד 8 ק"ג תוך 6 שבועות. הסוד? לא דיאטה... שלח לי 'סוד' ואספר"

**18 הודעות. 6 הפכו לפגישות. 3 לקוחות חדשים.**

הסיבה: Status שגורם לאנשים לשלח מילה אחת = חיכוך מינימלי.
פתיחת שיחה עם שאלה = הבנה לפני מכירה.
Conversion = תוצאה ולא פלא.`,
  commonMistakes: [
    "להזניח DMs — לענות 24 שעות אחרי = לקוח שכבר קר",
    "לפתוח מיד עם מחיר — הורג עניין לפני שנבנה",
    "שיחת מכירה מלאה ב-DM — DM הוא לתיאום, לא לסגירה",
    "CTA עם חיכוך גבוה — 'מלא טופס', 'שלח מייל' < 'שלח לי X'",
  ],
  quiz: [
    {
      id: "dc-q1",
      type: "recognition",
      question: "מה ה-CTA בעל החיכוך הנמוך ביותר ב-DM?",
      options: [
        "מלא טופס באתר",
        "שלח מייל לכתובת שלי",
        "שלח לי את המילה 'מעוניין'",
        "התקשר אלי",
      ],
      correctIndex: 2,
      explanation: "מילה אחת ב-DM = חיכוך מינימלי + micro-commitment שמוביל להמרה.",
    },
    {
      id: "dc-q2",
      type: "free-recall",
      question: "מה 3 השלבים של DM Conversation שממירה?",
      sampleAnswer: "קבלה חמה + שאלת עומק, הבנת הצורך עם שאלות פתוחות, Bridge לפגישה/שיחה",
    },
  ],
  actionItem: {
    title: "בנה את ה-DM Script שלך",
    description:
      "כתוב Script של 3 שלבים: (1) קבלה חמה + שאלה, (2) שאלת עומק, (3) הצעת שיחה. שמור בנייד לשימוש מיידי.",
    timeEstimate: "25 דקות",
  },
  nextLessonSlug: "authentic-voice",
  frameworks: ["Sales Funnel", "Conversational Selling", "SPIN Selling"],
};

export default lesson;
