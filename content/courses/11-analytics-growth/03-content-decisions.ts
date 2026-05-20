import type { Lesson } from "@/lib/content/types";

const lesson: Lesson = {
  id: "content-decisions",
  slug: "content-decisions",
  title: "החלטות תוכן מבוססות דאטה — מהנחשים לנבונים",
  courseId: "analytics-growth",
  order: 3,
  duration: "12 דקות",
  xpReward: 90,
  heroImagePrompt: "Decision tree with data nodes, analytics leading to strategic choices, clean infographic style, gold and dark blue",
  outcomes: [
    "לקבל החלטות תוכן מבוססות דאטה ולא תחושות בטן",
    "לבנות מנגנון שיפור חודשי",
    "לדעת מתי לוותר על פורמט שלא עובד",
  ],
  whyItMatters:
    "אינטואיציה טובה לנחש, דאטה טוב להחליט. מי שמחליט על בסיס מספרים — מפסיק לבזבז זמן על תוכן שלא עובד ומשקיע יותר במה שמניב.",
  content: `## מהנחשים להחלטות נבונות

### השאלות שצריך לשאול כל חודש

**1. מה ה-3 Statuses שיצרו הכי הרבה Replies?**
→ זה ה-content DNA שלך. שכפל אותו.

**2. מה ה-3 Statuses שלא יצרו כלום?**
→ הפסק לפרסם אותם — לא משנה כמה אתה אוהב אותם.

**3. מה הזמן שעובד הכי טוב?**
→ כוון את ה-Statuses הכבדים לשעה הזו.

**4. איזה נושא מייצר הכי הרבה שיחות?**
→ זה מה שהקהל שלך באמת רוצה.

---

## מסגרת ה-Stop / Start / Continue

**STOP:** תוכן שעובד פחות מ-2 replies בממוצע
**START:** פורמט שניסית פעם אחת וקיבל תגובות טובות
**CONTINUE:** כל מה שמעל 5 replies בעקביות

---

## הסינון החודשי — 30 דקות שמשנות הכל

1. פתח את הרשימה שלך (הטבלה מהשיעור הקודם)
2. סמן את ה-Top 3 ו-Bottom 3
3. שאל: "למה הטוב עבד? מה המשותף?"
4. תכנן את חודש הבא בהתאם

---

## כשדאטה ואינטואיציה מתנגשים

**תמיד תן לדאטה לנצח בסבב הראשון.**

אחרי 3 חודשים של מדידה — האינטואיציה שלך תהיה מדויקת הרבה יותר, כי היא תהיה מבוססת על ניסיון אמיתי.

---

## מדד ה-ROT (Return on Time)

לכל שעה שהשקעת בתוכן — כמה replies קיבלת?

| פורמט | זמן הכנה | Replies | ROT |
|-------|----------|---------|-----|
| טיפ כללי | 5 דקות | 1 | נמוך |
| סיפור אישי | 15 דקות | 12 | **גבוה** |
| וידאו | 60 דקות | 8 | בינוני |

**בחר פורמטים עם ROT גבוה — לא פורמטים שאתה רגיל אליהם.**`,
  realWorldExample: `**שירה, מעצבת פנים**

אחרי 3 חודשי מדידה:

- Before/After projects: ממוצע 18 replies
- טיפי עיצוב כלליים: ממוצע 1.5 replies
- Behind the scenes: ממוצע 11 replies

**ההחלטה:** 70% Before/After, 30% Behind the scenes. אפס טיפים כלליים.

**3 חודשים אחר כך:**
- פניות חדשות: מ-3 לחודש ל-17 לחודש
- זמן שחסכה: 4 שעות בשבוע (הפסיקה לייצר תוכן שלא עובד)`,
  commonMistakes: [
    "לוותר על פורמט אחרי Status אחד כושל — תן לו 5 ניסיונות",
    "להמשיך עם תוכן שלא עובד כי 'אני אוהב אותו'",
    "לא לסמן מה ה-Top ו-Bottom בסוף כל חודש",
    "להתמקד בנושאים שמעניינים אותך — לא בנושאים שמעניינים את הקהל",
  ],
  quiz: [
    {
      id: "cd-q1",
      type: "recognition",
      question: "מה מסגרת Stop / Start / Continue?",
      options: [
        "Stop: הכל. Start: מחדש. Continue: אחרי שבוע",
        "Stop: מתחת ל-2 replies. Start: פורמט שעבד פעם. Continue: מעל 5 replies",
        "Stop: פורמטים ישנים. Start: כל פורמט חדש. Continue: הכל",
        "Stop: ניסויים. Start: מדידה. Continue: לפרסם",
      ],
      correctIndex: 1,
      explanation: "Stop = מה שלא עובד (מתחת ל-2 replies). Start = מה שעבד ולא ניצלת. Continue = מה שעובד בעקביות.",
    },
    {
      id: "cd-q2",
      type: "free-recall",
      question: "מה מדד ROT ואיך הוא עוזר?",
      sampleAnswer: "ROT = Return on Time. כמה replies קיבלת לכל שעת הכנה. עוזר לבחור פורמטים שמניבים יותר תוצאות ביחס לזמן שמושקע.",
    },
  ],
  actionItem: {
    title: "עשה את הסינון החודשי שלך",
    description:
      "סקור את כל ה-Statuses של החודש האחרון. זהה Top 3 ו-Bottom 3. מלא את ה-Stop/Start/Continue. החלט על 3 שינויים לחודש הבא.",
    timeEstimate: "30 דקות",
  },
  nextLessonSlug: "filming-basics",
  frameworks: ["Data-Driven Decisions", "Stop/Start/Continue", "ROT Analysis"],
};

export default lesson;
