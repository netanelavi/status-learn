import type { Lesson } from "@/lib/content/types";

const lesson: Lesson = {
  id: "lesson-13",
  slug: "hook-model-status",
  title: "Hook Model — לולאת ההרגל שמחזירה אנשים",
  courseId: "engagement-following",
  order: 1,
  duration: "16 דקות",
  xpReward: 100,
  heroImagePrompt:
    "Geometric editorial illustration: a circular loop made of amber arrows forming a habit cycle, small indigo figures at each stage, concentric rings in warm cream and deep indigo, retro halftone texture, editorial design with mechanical precision",
  outcomes: [
    "להסביר את 4 שלבי Hook Model וכיצד הם חלים על וואטסאפ סטטוס",
    "לתכנן תמהיל תוכן שבועי שיוצר משתנות (variability)",
    "לדעת מהן 5 קטגוריות התוכן שיש לסרוגן ולמה",
  ],
  whyItMatters:
    'נתי איאל חקר שנים כיצד מוצרים כמו TikTok, Instagram ו-WhatsApp עצמה גורמים לנו לחזור שוב ושוב. הוא גילה מבנה בן 4 שלבים שחוזר על עצמו: Trigger, Action, Variable Reward, Investment. ברגע שמוצר — או תוכן — בנוי לפי המבנה הזה, הצופה לא בוחר לחזור. הוא פשוט חוזר. בשיעור הזה נבנה את ה-Hook שלך לסטטוס.',

  content: `## מה זה Hook Model?

**Hook Model** של Nir Eyal הוא מחזור בן 4 שלבים שמוצרים ממכרים בנויים סביבו:

**Trigger → Action → Variable Reward → Investment → (חזרה ל-Trigger)**

כל שלב מזין את הבא — ויוצר לולאה שהולכת ומתחזקת עם הזמן.

---

## שלב 1: Trigger — הגורם שגורם לפעולה

**External Trigger**: ההודעה שמגיעה — "יש סטטוס חדש מ..." — הסמל האדום על WhatsApp.

**Internal Trigger** (החזק יותר): "תן לראות מה [פלוני] שתף היום" — מחשבה שמגיעה מבפנים, ללא גירוי חיצוני.

**המטרה**: להפוך מ-External ל-Internal. איך? עקביות + ציפייה. כשאתה עולה בסטטוסים שיוצרים ציפייה — אנשים יתחילו לחשוב עליך לפני שרואים את הסמל.

---

## שלב 2: Action — הפעולה הכי פשוטה אפשרית

הצופה צריך לעשות הכי מעט אפשרי כדי לראות את התוכן שלך. זו הסיבה שסטטוס עדיף על קישור חיצוני: טאפ אחד מול 3+ פעולות.

**מה מפחית friction?**
- סטטוסים קצרים עם CTA ברור
- טקסט גדול וקריא (לא 3 פסקאות בגופן קטן)
- ויזואל שמעביר רעיון תוך 2 שניות

---

## שלב 3: Variable Reward — הגמול המשתנה

זה הלב של ה-Hook. **Variable Reinforcement** (Skinner) הוכח: גמול לא-צפוי ממכר הרבה יותר מגמול קבוע.

הצופה לא יודע מה יהיה בסטטוס הבא שלך:
- אולי טיפ שחסך לו שעה
- אולי סיפור מצחיק
- אולי שאלה שגרמה לו לחשוב

**הכלל**: אם הצופים יודעים בדיוק מה יגיע — הם יפסיקו לבדוק.

### 5 סוגי תוכן לסרוגן:
| # | סוג | מה זה נותן לצופה |
|---|-----|-----------------|
| 1 | **Teaching** | ידע שאפשר לפעול לפיו |
| 2 | **Story** | חיבור רגשי |
| 3 | **Question** | תחושת שייכות ופעולה |
| 4 | **Behind the Scenes** | אמינות ואנושיות |
| 5 | **Value Drop** | הפתעה — משהו שלא ציפו |

---

## שלב 4: Investment — ההשקעה שבונה מחויבות

כל פעם שצופה עושה פעולה קטנה — הוא "משקיע" בקשר:
- **תשובה לשאלה** שפרסמת
- **תגובה לסקר** (👍 / ❤️)
- **הודעה ישירה** בתגובה לסטטוס
- **שמירת מספר** שלך בעקבות CTA

ככל שמישהו השקיע יותר — ככל שסיכוי שיחזור גדל. ה-Investment לא מתגמל מיד — הוא מגדיל את הסיכוי לחזור ל-Trigger הבא.

---

## תכנון שבועי לפי Hook Model

> **שלח 5 סטטוסים בשבוע = כל יום סוג אחר**
>
> ראשון: Teaching | שלישי: Story | חמישי: Question
> שני: Behind Scenes | רביעי: Value Drop
>
> סדר שונה כל שבוע = Variability.
`,

  realWorldExample: `**שבוע תוכן לדוגמה:**

---

**ראשון (Teaching):**
💡 *"3 טעויות שרוב העסקים עושים בניסוח מחירון — ולמה הם גורמות לאיבוד לקוחות:"*

**שלישי (Behind the Scenes):**
📸 *[תמונת שולחן עמוס] "6 בבוקר — לפני שהלקוחות מתחילים. כך אני מתכנן יום של פגישות:"*

**רביעי (Value Drop):**
🎁 *"נתקלתי בכלי AI שחוסך לי 2 שעות בשבוע. חינמי לחלוטין. מי רוצה שאשלח לינק?"*

**חמישי (Question):**
❓ *"מה אתם מעדיפים: לקוחות שמשלמים מעט ויש הרבה מהם, או לקוחות שמשלמים הרבה ויש מעט מהם?"*

**שבת (Story):**
🧵 *"הלקוח שאמר 'הצעת המחיר שלך יקרה מדי' — וסגרנו בכל זאת. הנה מה שעשיתי:"*

---`,

  commonMistakes: [
    "לפרסם רק סוג תוכן אחד (למשל, רק טיפים) — ה-Variability נעלמת וה-engagement יורד",
    "ליצור External Triggers (בקשה 'לשמור את המספר') בלי קודם לבנות ערך — אנשים לא ישמרו אם אין סיבה",
    "להתעלם מהשקעות הצופים — כשמישהו מגיב לסקר ולא מקבל ריאקציה, ה-Investment loop נשבר",
    "לפרסם ב-consistency אפסית — ה-Trigger הפנימי נבנה רק מחזרתיות. פוסט אחד בחודש לא יוצר הרגל",
  ],

  quiz: [
    {
      id: "q13-1",
      type: "recognition",
      question: "מהי ההבדל בין External Trigger לבין Internal Trigger?",
      options: [
        "External הוא הודעה של WhatsApp, Internal הוא מחשבה שמגיעה מבפנים ללא גירוי",
        "External הוא לאנשים חדשים, Internal הוא לעוקבים ותיקים",
        "External הוא פוסטים שיווקיים, Internal הוא תוכן אישי",
        "אין הבדל מהותי — שניהם גורמים לאותה פעולה",
      ],
      correctIndex: 0,
      explanation:
        "Internal Trigger חזק יותר כי הוא אוטומטי ואינו תלוי בגירוי חיצוני. המטרה היא להגיע למצב שבו הצופה חושב עליך לפני שרואה את הסמל.",
    },
    {
      id: "q13-2",
      type: "recognition",
      question: "מדוע Variable Reward ממכר יותר מגמול קבוע לפי Skinner?",
      options: [
        "כי הגמול המשתנה תמיד גדול יותר",
        "כי מוח האדם 'לומד' מהר את הגמול הקבוע ומפסיק לשים לב אליו — הבלתי-צפוי נשאר מעניין",
        "כי גמול קבוע יוצר ציפיות שלא תמיד מתממשות",
        "כי גמול משתנה יוצר פחות תלות",
      ],
      correctIndex: 1,
      explanation:
        "Habituation — המוח מסתגל לגירוי קבוע ומפסיק להגיב. גירוי משתנה שומר על ה-dopamine system פעיל — כמו מכונת מזל.",
    },
    {
      id: "q13-3",
      type: "free-recall",
      question: "תאר את 4 שלבי Hook Model וכיצד כל שלב מוביל לשלב הבא.",
      sampleAnswer:
        "Trigger (גירוי — חיצוני או פנימי — מוביל לפעולה) → Action (פעולה פשוטה — צפייה בסטטוס) → Variable Reward (גמול בלתי-צפוי — טיפ, סיפור, שאלה) → Investment (תגובה, סקר, הודעה) → Investment מגביר את הרגישות לTrigger הבא.",
    },
    {
      id: "q13-4",
      type: "recognition",
      question: "מה קורה כשצופה מגיב לסקר שפרסמת ואתה לא מגיב בחזרה?",
      options: [
        "שום דבר — הסקר עצמו הוא ה-engagement",
        "ה-Investment loop נשבר — הצופה למד שהשקעתו לא מוכרת, ולכן יפחית השקעה עתידית",
        "זה מגדיל את המסתורין ועוזר לVariability",
        "זה בסדר כל עוד אתה מגיב ל-50% מהתגובות",
      ],
      correctIndex: 1,
      explanation:
        "ההשקעה בשלב 4 אמורה לחזק את הקשר. כשהיא מתעלמת, הצופה מרגיש שהשקעתו לא שווה — ונוצר לולאת השקעה יורדת.",
    },
    {
      id: "q13-5",
      type: "cued-recall",
      question: "כיצד 5 סוגי תוכן שונים יוצרים Variable Reward בעיני הצופה?",
      hint: "חשוב על ציפיות הצופה לפני שהוא פותח את הסטטוס",
      sampleAnswer:
        "כשהצופה לא יודע מה יגיע — טיפ? סיפור? שאלה? — הפתיחה עצמה היא Variable Reward. כל סוג תוכן מספק גמול שונה (ידע, חיבור, בידור). הגיוון שומר על הציפייה עם כל טאפ.",
    },
  ],

  actionItem: {
    title: "שבוע תוכן מגוון",
    description:
      "תכנן שבוע שלם של סטטוסים — אחד לכל סוג תוכן. 5 סוגים = 5 ימים: Teaching, Story, Question, Behind the Scenes, Value Drop. כתוב לכל יום כותרת אחת בלבד — אל תכתוב את הסטטוסים המלאים עדיין, רק את הנושא.",
    timeEstimate: "15 דקות",
  },

  nextLessonSlug: "variable-rewards",
  frameworks: ["Hook Model (Nir Eyal)", "Variable Reinforcement (Skinner)", "Content Rotation"],
};

export default lesson;
