import type { Lesson } from "@/lib/content/types";

const lesson: Lesson = {
  id: "visual-identity",
  slug: "visual-identity",
  title: "שפה ויזואלית — לפני שקוראים מילה",
  courseId: "storytelling",
  order: 3,
  duration: "13 דקות",
  xpReward: 80,
  heroImagePrompt: "Consistent visual brand identity on phone screens, cohesive color palette swatches, minimal and elegant design, soft morning light photography",
  outcomes: [
    "להגדיר palette ויזואלי קבוע ל-Status",
    "לבחור פורמטים שמתאימים לתוכן שלך",
    "ליצור template אחד שחוסך זמן בכל פרסום",
  ],
  whyItMatters:
    "לפני שקוראים מילה — העין כבר שפטה. ויזואליות עקבית = brand recognition. אנשים יזהו אותך לפני שיקראו את שמך.",
  content: `## הרגע שלפני הקריאה

מחקרים מראים שמוח אנושי מעבד תמונה **60,000 פעמים** מהר יותר מטקסט. כלומר — הויזואל שלך עושה את העבודה לפני שיש לו סיכוי לקרוא.

---

## 3 אלמנטים ויזואליים לStatus

### 1. צבעים (Brand Palette)
בחר **2-3 צבעים** ועמוד בהם. לא 10. לא "מה שיש ל-Canva".

**למה 3?** פחות = יותר זכיר. יותר = כאוס.

דוגמה: ירוק כהה + לבן + זהב בהיר = מיידי ומזוהה.

### 2. פונטים
פונט אחד ראשי. אולי שני. לא יותר.

**מומלצים לעברית:** Assistant, Heebo, Rubik
**לכותרות:** גדול + מודגש. **לגוף:** קטן + קריא.

### 3. סגנון תמונות
תחליט: **אותנטי** (סלפי, חיים אמיתיים, ספונטני) או **ממותג** (templates נקיים, overlay, עיצוב)?

שניהם עובדים. ערבוב — לא עובד.

---

## פורמטים שעובדים ב-WhatsApp Status

| פורמט | מתי להשתמש | זמן הכנה |
|--------|------------|----------|
| טקסט על רקע צבעוני | טיפים קצרים, ציטוטים | 2 דקות |
| תמונה + כיתוב | עדויות, תוצאות, behind-the-scenes | 5 דקות |
| וידאו 15-30 שניות | הוראות, סיפורים, Q&A | 10 דקות |
| Carousel (3-5 שקפים) | מדריכים, step-by-step | 15 דקות |

### כלל הבהירות
**כל Status** — שאל: "האם מישהו שרואה את זה ב-3 שניות יבין על מה מדובר?"

---

## איך ליצור Template ב-Canva (10 דקות)

1. פתח Canva → "WhatsApp Status" (1080x1920)
2. בחר צבע רקע מה-palette שלך
3. הוסף שדה טקסט עם הפונט שלך
4. שמור כ-Template
5. בכל פרסום — שכפל ושנה רק את הטקסט`,
  realWorldExample: `**נטע, מטפלת בתזונה**

3 צבעים: ירוק עמוק + לבן + זהב בהיר

כל Status: תמונה של אוכל עם overlay ירוק + טקסט לבן + 1 עובדה מפתיעה.

**מה שאנשים אמרו לה:** "אני מזהה מיד שזה הסטטוס של נטע, עוד לפני שאני רואה את השם."

זה brand recognition. לא צריך לוגו. צריך עקביות.`,
  commonMistakes: [
    "שימוש ב-5+ צבעים שונים — כאוס ויזואלי",
    "טקסט קטן שקשה לקריאה על mobile",
    "לוגו גדול שחוסם את התוכן הראשי",
    "לשנות סגנון כל שבוע — אין brand recognition",
  ],
  quiz: [
    {
      id: "vi-q1",
      type: "recognition",
      question: "כמה צבעים מומלץ לבחור ל-brand palette?",
      options: ["1", "2-3", "5-6", "כמה שיותר — יותר מגוון"],
      correctIndex: 1,
      explanation: "2-3 צבעים ליצירת עקביות זכירה בלי להיות מונוטוני.",
    },
    {
      id: "vi-q2",
      type: "free-recall",
      question: "מה השאלה שצריך לשאול על כל Status לפני פרסום?",
      sampleAnswer: "האם מישהו שרואה את זה ב-3 שניות יבין על מה מדובר?",
    },
  ],
  actionItem: {
    title: "הגדר את ה-Visual Identity שלך",
    description:
      "בחר 2-3 צבעים, פונט, וסגנון תמונות. צור template אחד ב-Canva. פרסם Status אחד בפורמט החדש ובדוק איך זה נראה על הטלפון.",
    timeEstimate: "35 דקות",
  },
  nextLessonSlug: "content-pillars",
  frameworks: ["Visual Branding", "Color Psychology", "Brand Recognition"],
};

export default lesson;
