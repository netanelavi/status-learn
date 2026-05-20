import type { Lesson } from "@/lib/content/types";

const lesson: Lesson = {
  id: "repurposing",
  slug: "repurposing",
  title: "Repurposing — מתוכן אחד לעשרה",
  courseId: "content-system",
  order: 3,
  duration: "14 דקות",
  xpReward: 80,
  heroImagePrompt: "One seed growing into multiple branches and fruits, digital illustration, content multiplication concept, vibrant green and gold",
  outcomes: [
    "להפוך כל תוכן מקורי ל-5+ וריאציות",
    "לבנות ספריית תוכן שמתרחבת לאורך זמן",
    "לעבוד פחות ולפרסם יותר",
  ],
  whyItMatters:
    "כל Status שכתבת הוא 10 Status פוטנציאליים. Repurposing לא מחסיר — הוא מכפיל. זה הדרך לייצר נוכחות גבוהה בלי לשחוק את עצמך.",
  content: `## כל רעיון = 10 Status פוטנציאליים

### מה זה Repurposing?

לקחת תוכן קיים ולהציג אותו מזוויות שונות, לקהלים שונים, בפורמטים שונים.

לא העתקה. **הגדלה**.

---

## 6 דרכי Repurposing

### 1. מאמר/פוסט ארוך → Series
מחלקים ל-5 Status קצרים. כל Status = נקודה אחת.

### 2. וידאו → ציטוטים
3 משפטים בולטים מהוידאו = 3 Status עצמאיים.

### 3. שאלה שנשאלתי → תשובה ציבורית
"קיבלתי שאלה מ-DM: [שאלה]. הנה התשובה שלי..."

### 4. Case study → Before/After
"לקוח X היה במצב Y. אחרי Z חודשים — תראו את זה"

### 5. תוצאה → הסיפור מאחורי התוצאה
"פרסמתי שלקוח הכפיל הכנסות. הנה מה שבאמת קרה שם"

### 6. טיפ ישן + עדכון
"לפני שנה כתבתי X. היום אני חושב אחרת. הנה למה..."

---

## ספריית תוכן

שמור **כל** Status שפרסמת. בתוך שנה — מאגר של 200+ רעיונות מוכנים.

**כלי:** תיקייה ב-Google Drive / Notion עם תאריך + נושא + ביצועים.

---

## כלל 3 החודשים

תוכן שפרסמת לפני 3 חודשים — 95% מהקהל לא ראה. מותר לעשות לו Repurposing.`,
  realWorldExample: `**מיכאל, מנהל שיווק**

פוסט אחד על "5 טעויות בפרסום בפייסבוק" הפך ל:
- 5 Status נפרדים (טעות אחת כל פעם)
- Status על "הטעות שעולה הכי הרבה כסף" (הנצפה ביותר)
- Before/After של קמפיין שתוקן
- שאלה: "איזו טעות אתה עושה?"
- Series: "הטעויות שלי — שנה אחר שנה"

**סה"כ:** 7 Status מ-1 רעיון. 3 שעות עבודה → 3 שבועות תוכן.`,
  commonMistakes: [
    "Repurposing ללא עריכה — אותו טקסט בצורות שונות זה לא Repurposing, זה spam",
    "לא לחכות מספיק זמן בין וריאציות — 2-3 שבועות לפחות",
    "לא לבנות ספריית תוכן — כל הרווח הולך לאיבוד",
    "לעשות Repurposing לתוכן גרוע — קודם לשפר",
  ],
  quiz: [
    {
      id: "rp-q1",
      type: "free-recall",
      question: "תאר 3 דרכים שונות לעשות Repurposing לאותו תוכן",
      sampleAnswer: "לחלק מאמר ל-Series, לחלץ ציטוטים מוידאו, לספר את הסיפור מאחורי תוצאה, לעשות Before/After",
    },
    {
      id: "rp-q2",
      type: "recognition",
      question: "כמה זמן צריך לחכות לפני Repurposing של תוכן?",
      options: ["שבוע", "חודש", "3 חודשים", "שנה"],
      correctIndex: 2,
      explanation: "לאחר 3 חודשים, 95% מהקהל לא ראה את התוכן המקורי.",
    },
  ],
  actionItem: {
    title: "עשה Repurposing לתוכן קיים",
    description:
      "בחר Status שפרסמת בחודשיים האחרונים. צור 3 וריאציות שונות. תזמן אותן ל-3 ימים שונים השבוע.",
    timeEstimate: "30 דקות",
  },
  nextLessonSlug: "pricing-value",
  frameworks: ["Content Repurposing", "Content Pyramid", "Omnichannel Marketing"],
};

export default lesson;
