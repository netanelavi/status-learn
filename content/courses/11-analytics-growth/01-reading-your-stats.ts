import type { Lesson } from "@/lib/content/types";

const lesson: Lesson = {
  id: "reading-your-stats",
  slug: "reading-your-stats",
  title: "קריאת המספרים — הנתונים שמספרים את האמת",
  courseId: "analytics-growth",
  order: 1,
  duration: "14 דקות",
  xpReward: 90,
  heroImagePrompt: "Clean dashboard with glowing charts and analytics graphs, data visualization, growth metrics, dark background with green accent lines",
  outcomes: [
    "לדעת אילו מדדים חשובים ואילו מסיחי דעת",
    "לקרוא את הסטטיסטיקות של WhatsApp Status נכון",
    "לזהות איזה תוכן עובד — ולמה",
  ],
  whyItMatters:
    "רוב בעלי העסקים מעלים תוכן ומקווים לטוב. מי שמסתכל על המספרים — מבין מה עובד, מה לא, ומכפיל רק את מה שמניב תוצאות.",
  content: `## המדדים שחשובים ב-WhatsApp Status

### 1. Views (צפיות)
כמה אנשים ראו את ה-Status שלך.
- **מה זה אומר:** טווח ההגעה שלך
- **מה לא:** לא מודד מעורבות

### 2. Reply Rate (אחוז תגובות)
כמה אנשים שלחו לך הודעה בעקבות Status.
- **זה המדד האמיתי.** תגובה = עניין = לקוח פוטנציאלי
- יחס טוב: 3-8% מהצופים מגיבים

### 3. Forward Rate (שיתופים)
כמה אנשים העבירו את ה-Status הלאה.
- תוכן שמשתפים = תוכן שמצמיח את הקהל בחינם

---

## הטבלה שתשנה לך את הגישה

| סוג תוכן | Views | Replies | Forwards |
|----------|-------|---------|----------|
| טיפ כללי | גבוה | נמוך | בינוני |
| סיפור אישי | בינוני | **גבוה** | נמוך |
| Behind the scenes | נמוך | גבוה | נמוך |
| Counter-Intuitive | בינוני | גבוה | **גבוה** |
| Offer/CTA | נמוך | **גבוה** | נמוך |

**המסקנה:** Views זה ego. Replies זה business.

---

## שיטת ה-3 שבועות

**שבוע 1:** פרסם כרגיל — לא לשנות כלום.
**שבוע 2:** רשום כל Status + Views + Replies.
**שבוע 3:** פרסם רק את הפורמטים שיצרו הכי הרבה Replies.

---

## מה לא למדוד (בזבוז זמן)

❌ **Story Views בלבד** — views ללא context לא אומרים כלום
❌ **Likes** — ב-WhatsApp אין לייקים, זה לא רלוונטי
❌ **כמות Posts** — עקביות ללא איכות = spam

---

## הטבלה השבועית שלך

| תאריך | נושא | Format | Views | Replies | Forwards | הערות |
|-------|------|--------|-------|---------|----------|-------|
| | | | | | | |

**כלל:** 10 דקות בסוף כל שבוע — זה ההשקעה שמשנה הכל.`,
  realWorldExample: `**מיה, מאמנת אישית**

מיה העלתה 5 Statuses בשבוע במשך חודש. לא מדדה כלום.

אחרי שהתחילה למדוד:
- טיפים כלליים: 200 views, 2 replies
- סיפורים אישיים: 150 views, **18 replies**
- Offers: 120 views, **25 replies**

**מה עשתה:** הפסיקה לפרסם טיפים. התמקדה בסיפורים + offers.

**התוצאה:** תוך 3 שבועות — 4 לקוחות חדשים מ-Status בלבד.`,
  commonMistakes: [
    "להסתכל על Views ולהתרגש — זה לא הכסף",
    "לא לרשום את הנתונים — הזיכרון מרמה",
    "להסיק מסקנות מ-Status אחד — צריך לפחות 10 לדאטה אמיתית",
    "לא להשוות פורמטים — רק השוואה מגלה מה עובד",
  ],
  quiz: [
    {
      id: "rys-q1",
      type: "recognition",
      question: "מה המדד החשוב ביותר לעסק ב-Status?",
      options: [
        "Views — כמה אנשים ראו",
        "Reply Rate — כמה אנשים הגיבו",
        "כמות Statuses בשבוע",
        "Forward Rate — כמה שיתפו",
      ],
      correctIndex: 1,
      explanation: "Views זה ego. Replies זה business — תגובה מציינת עניין אמיתי ולקוח פוטנציאלי.",
    },
    {
      id: "rys-q2",
      type: "free-recall",
      question: "מה שיטת ה-3 שבועות?",
      sampleAnswer: "שבוע 1: פרסם כרגיל. שבוע 2: תעד Views + Replies לכל Status. שבוע 3: פרסם רק פורמטים שיצרו הכי הרבה Replies.",
    },
  ],
  actionItem: {
    title: "בנה את הטבלה השבועית שלך",
    description:
      "עצב טבלה פשוטה (Excel / Notes) עם: תאריך, נושא, פורמט, Views, Replies, Forwards. רשום את 5 ה-Statuses האחרונים שלך. מה גילית?",
    timeEstimate: "15 דקות",
  },
  nextLessonSlug: "growth-experiments",
  frameworks: ["Data-Driven Marketing", "Reply Rate Optimization", "Content Analytics"],
};

export default lesson;
