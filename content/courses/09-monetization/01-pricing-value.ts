import type { Lesson } from "@/lib/content/types";

const lesson: Lesson = {
  id: "pricing-value",
  slug: "pricing-value",
  title: "תמחור — איך לדבר על כסף בלי להבריח",
  courseId: "monetization",
  order: 1,
  duration: "17 דקות",
  xpReward: 100,
  heroImagePrompt: "Gold coins transforming into value icons — stars, arrows, growth charts, clean white background with warm gold accents, premium feel",
  outcomes: [
    "לדבר על מחיר מבלי לאבד לקוחות",
    "להסביר ערך בצורה שמצדיקה כל מחיר",
    "לבנות Value Ladder ב-Status",
  ],
  whyItMatters:
    "אנשים לא קונים מחיר — הם קונים ערך. הבעיה היא שרוב בעלי העסקים לא יודעים לתקשר ערך. התוצאה: מכירות שנכשלות לא בגלל המחיר, אלא בגלל ההסבר.",
  content: `## הטעות הגדולה: מחיר ללא הקשר

"חבילת ייעוץ — 3,500 ₪"

אין הקשר. אין ערך. אין מכירה.

---

## Value = תועלת / מחיר

רוצה שהמחיר יראה נמוך יותר? אל תוריד את המחיר — **הגדל את התועלת הנתפסת**.

---

## Value Ladder ב-Status

### Step 1 — חינמי
טיפ, מדריך PDF, וובינר, חישוב חינמי
*מטרה: לבנות אמון ולהגדיל רשימה*

### Step 2 — כניסה (₪50-300)
מוצר דיגיטלי, ייעוץ שעה, template
*מטרה: לקוחות ראשונים, המרת מעוניינים לקונים*

### Step 3 — עיקרי (₪500-3,000)
שירות המרכזי שלך
*מטרה: הכנסה עיקרית*

### Step 4 — VIP (₪5,000+)
עבודה אישית מוגדלת, Retainer חודשי
*מטרה: לקוחות האידיאלי*

---

## שיטת ה-ROI Frame

במקום:
> "המחיר הוא 2,000 ₪"

אמור:
> "השקעה של 2,000 ₪ שהחזירה ללקוח שלי 15,000 ₪ תוך 3 חודשים"

**הנוסחה:** השקעה → תוצאה ספציפית → ROI מספרי

---

## 3 עקרונות תמחור ב-Status

1. **לעולם לא להתנצל על המחיר** — ביטחון במחיר = ביטחון בשירות
2. **להקדים ערך למחיר** — הראה קודם מה יש, ואז כמה עולה
3. **לכלול social proof** — "לקוח X שילם X וקיבל X"`,
  realWorldExample: `**גיל, מומחה SEO**

Status שמכר:

"לפני 6 חודשים: 200 כניסות ליום מגוגל.
אחרי 4 חודשי עבודה איתי: 1,400 כניסות ליום.
עבודה שעלתה 4,800 ₪ — הכניסה 60,000 ₪ בהכנסות.

נשאר לי מקום לעוד לקוח אחד. DM אם מעניין."

**תוצאה:** 7 הודעות. 2 לקוחות חדשים.`,
  commonMistakes: [
    "לפרסם מחיר ללא הוכחת ערך קודמת — זה לא מכירה, זה תפריט",
    "להתנצל על המחיר — 'זה יקר אבל...' הורג מכירות",
    "לא להציע Value Ladder — מאבד לקוחות שלא מוכנים לשלם הכי הרבה",
    "ROI מעורפל — 'ישתפר' > 'יגדל ב-40%'",
  ],
  quiz: [
    {
      id: "pv-q1",
      type: "cued-recall",
      question: "מה הנוסחה לתפיסת Value?",
      hint: "Value = _______ / _______",
      sampleAnswer: "Value = תועלת / מחיר",
    },
    {
      id: "pv-q2",
      type: "recognition",
      question: "מה שיטת ה-ROI Frame?",
      options: [
        "להוריד מחיר עד שהלקוח מסכים",
        "להסביר השקעה + תוצאה ספציפית + ROI מספרי",
        "להשוות למחיר של המתחרים",
        "לתת הנחה לכל מי שמבקש",
      ],
      correctIndex: 1,
      explanation: "ROI Frame: השקעה → תוצאה ספציפית → ROI = מצדיק כל מחיר.",
    },
  ],
  actionItem: {
    title: "כתוב Status שמוכר ב-ROI Frame",
    description:
      "בחר שירות אחד. כתוב Status לפי הנוסחה: השקעה (₪X) → תוצאה ספציפית → ROI (₪Y). כלול עדות אמיתית אם יש.",
    timeEstimate: "25 דקות",
  },
  nextLessonSlug: "launch-sequence",
  frameworks: ["Value Ladder", "ROI Framing", "Value-Based Pricing"],
};

export default lesson;
