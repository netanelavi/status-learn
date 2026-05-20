import type { Course, Lesson } from "./types";

// ---------------------------------------------------------------------------
// Course definitions (titles, metadata, lesson manifests)
// ---------------------------------------------------------------------------

export const COURSES: Course[] = [
  {
    id: "foundations",
    slug: "foundations",
    title: "יסודות",
    subtitle: "הבנת הבסיס — מה זה Brand ולמה Status?",
    order: 1,
    emoji: "🏗️",
    color: "blue",
    totalXp: 200,
    lessons: [], // populated below
  },
  {
    id: "storytelling",
    slug: "storytelling",
    title: "סיפור מותג",
    subtitle: "איך לספר סיפורים שמושכים ומשאירים רושם",
    order: 2,
    emoji: "📖",
    color: "purple",
    totalXp: 300,
    lessons: [],
  },
  {
    id: "content-system",
    slug: "content-system",
    title: "מערכת תוכן",
    subtitle: "בניית מנגנון תוכן עקבי ואמין",
    order: 3,
    emoji: "⚙️",
    color: "orange",
    totalXp: 350,
    lessons: [],
  },
  {
    id: "engagement",
    slug: "engagement",
    title: "אינטראקציה ומעורבות",
    subtitle: "הפיכת צופים ללקוחות ועוקבים פעילים",
    order: 4,
    emoji: "💬",
    color: "green",
    totalXp: 350,
    lessons: [],
  },
  {
    id: "monetization",
    slug: "monetization",
    title: "מונטיזציה",
    subtitle: "הפיכת הנוכחות לרווחים אמיתיים",
    order: 5,
    emoji: "💰",
    color: "yellow",
    totalXp: 400,
    lessons: [],
  },
  {
    id: "capstone",
    slug: "capstone",
    title: "פרויקט סיכום",
    subtitle: "בנה את אסטרטגיית ה-Status המלאה שלך",
    order: 6,
    emoji: "🏆",
    color: "gold",
    totalXp: 200,
    lessons: [],
  },
];

// ---------------------------------------------------------------------------
// All lessons
// ---------------------------------------------------------------------------

export const ALL_LESSONS: Lesson[] = [
  // ---- Course 1: Foundations ----
  {
    id: "why-status",
    slug: "why-status",
    title: "למה WhatsApp Status?",
    courseId: "foundations",
    order: 1,
    duration: "10 דקות",
    xpReward: 60,
    heroImagePrompt: "person looking at phone with WhatsApp open, warm light",
    outcomes: [
      "להסביר מדוע Status הוא ערוץ השיווק הפחות תחרותי כיום",
      "לזהות את ההבדל בין presence ל-brand",
    ],
    whyItMatters:
      "בזמן שכולם רצים לאינסטגרם ולטיקטוק, קיים ערוץ שמגיע ל-100% מהאנשים שלך — ללא אלגוריתמים, ללא תשלום. זה Status.",
    content: `## ה-Status הוא הנכס הדיגיטלי הנסתר שלך

כשאתה פותח Status ב-WhatsApp, מי רואה אותו? **רק אנשי הקשר שלך**. אנשים שכבר בחרו לשמור את המספר שלך. זו רשימת תפוצה שבנית ללא מאמץ.

### למה זה חשוב

- **ללא אלגוריתמים**: Status מוצג לפי סדר צפייה, לא לפי פופולריות
- **ללא תחרות**: רוב העסקים עדיין לא משתמשים ב-Status בצורה מקצועית
- **אמון גבוה**: הקשר עם אנשי הקשר שלך כבר קיים

### ה-Funnel של Status

Status → עניין → שיחה → לקוח. פשוט, ישיר, יעיל.`,
    realWorldExample: `**מוטי, יועץ עסקי מרמת גן**

כל יום ב-8:00 בבוקר: "טיפ עסקי של היום — [טיפ קצר וחד]"

תוך 3 חודשים: 4 לקוחות חדשים פנו אליו ואמרו "ראיתי ב-Status שלך..."`,
    commonMistakes: [
      "לפרסם רק כש'יש משהו למכור'",
      "להעתיק תוכן מפלטפורמות אחרות בלי להתאים לפורמט",
      "לפרסם פחות מ-3 פעמים בשבוע",
    ],
    quiz: [
      {
        id: "q1",
        type: "recognition",
        question: "מה היתרון העיקרי של WhatsApp Status לעומת אינסטגרם?",
        options: [
          "יש יותר משתמשים",
          "אין אלגוריתם — מגיע לכולם",
          "ניתן לשתף קישורים",
          "יש סטטיסטיקות טובות יותר",
        ],
        correctIndex: 1,
        explanation: "Status מוצג לכל אנשי הקשר שלך ללא סינון אלגוריתמי.",
      },
      {
        id: "q2",
        type: "free-recall",
        question: "תאר במילים שלך: מה ההבדל בין presence ל-brand?",
        sampleAnswer:
          "Presence = להיות שם. Brand = לגרום לאנשים להרגיש משהו ספציפי כשהם רואים אותך. Brand זה הרשמה שאתה משאיר.",
      },
    ],
    actionItem: {
      title: "ניתוח ה-Status הנוכחי שלך",
      description:
        "עבור על 10 ה-Status האחרונים שפרסמת. כמה מהם היו 'brand building' וכמה היו רק 'broadcast'? רשום את התוצאות.",
      timeEstimate: "15 דקות",
    },
    nextLessonSlug: "jtbd",
    frameworks: ["Brand Building", "Content Funnel"],
  },
  {
    id: "jtbd",
    slug: "jtbd",
    title: "Jobs To Be Done — מה הלקוח באמת רוצה?",
    courseId: "foundations",
    order: 2,
    duration: "12 דקות",
    xpReward: 70,
    heroImagePrompt: "person thinking deeply, whiteboard with customer journey",
    outcomes: [
      "להגדיר את ה-Job שהלקוח שלך 'מגייס' אותך לבצע",
      "לזהות את הפרק הרגשי מאחורי כל קנייה",
    ],
    whyItMatters:
      "אנשים לא קונים מוצר — הם קונים גרסה טובה יותר של עצמם. כשתבין מה ה-Job האמיתי, תדע בדיוק מה לכתוב ב-Status.",
    content: `## Jobs To Be Done (JTBD)

תיאוריית ה-JTBD אומרת: **אנשים לא קונים מוצרים — הם מגייסים פתרונות לביצוע משימות**.

### דוגמה קלאסית

מקדחה: אף אחד לא רוצה מקדחה. הם רוצים **חור בקיר**. ועוד יותר עמוק — הם רוצים **ציור שתלוי יפה**.

### 3 שכבות של Job

1. **Functional** — "אני רוצה לרדת 5 קילו"
2. **Emotional** — "אני רוצה להרגיש טוב עם עצמי"
3. **Social** — "אני רוצה שאחרים יראו אותי כבריא"

### איך זה קשור ל-Status?

כל Status שלך צריך לדבר לאחד מהשכבות האלה. Status שמדבר רק על ה-product לא עובד.`,
    realWorldExample: `**מאמנת כושר — לפני vs. אחרי JTBD**

❌ לפני: "חבילת אימונים חדשה! 10 מפגשים ב-₪800"

✅ אחרי: "לפני 6 חודשים רחל לא הצליחה לרוץ 5 דקות. היום היא סיימה את ה-10K הראשון שלה 🏅 זה מה שקורה כשמבינים שהשינוי מגיע מבפנים"`,
    commonMistakes: [
      "לדבר רק על features ולא על תועלות רגשיות",
      "להניח שאתה יודע מה הלקוח רוצה בלי לשאול",
      "לנסות לדבר לכולם במקום ל-avatar מוגדר",
    ],
    quiz: [
      {
        id: "q1",
        type: "recognition",
        question: "לפי JTBD, מדוע אנשים קונים מקדחה?",
        options: [
          "כי הם אוהבים כלי עבודה",
          "כי הם רוצים חורים בקיר",
          "כי המחיר זול",
          "כי המותג ידוע",
        ],
        correctIndex: 1,
        explanation: "JTBD: אנשים קונים כלי לביצוע משימה (Job), לא את הכלי עצמו.",
      },
      {
        id: "q2",
        type: "cued-recall",
        question: "מהן 3 השכבות של Job לפי JTBD?",
        hint: "Functional, _______, _______",
        sampleAnswer: "Functional, Emotional, Social",
      },
    ],
    actionItem: {
      title: "מצא את ה-Job האמיתי של הלקוח שלך",
      description:
        "שאל 3 לקוחות קיימים: 'מה גרם לך לפנות אלי לראשונה?' רשום את התשובות וחפש את ה-Job הרגשי/חברתי מאחוריהן.",
      timeEstimate: "20 דקות",
    },
    nextLessonSlug: "brand-identity",
    frameworks: ["Jobs To Be Done", "Outcome-Driven Innovation"],
  },
  {
    id: "brand-identity",
    slug: "brand-identity",
    title: "זהות המותג — מי אתה ב-3 מילים?",
    courseId: "foundations",
    order: 3,
    duration: "15 דקות",
    xpReward: 70,
    heroImagePrompt: "brand identity design, clean minimal logo, warm colors",
    outcomes: [
      "להגדיר 3 תכונות מותג ברורות",
      "לבנות משפט positioning חד וברור",
    ],
    whyItMatters:
      "בלי זהות ברורה, ה-Status שלך יהיה רועש. עם זהות ברורה, כל Status יחזק את המותג שלך.",
    content: `## זהות מותג = עקביות + ייחודיות

### מה זה Brand Identity?

זה מה שאנשים חושבים עליך כשאתה לא בחדר. זו ה-impression הרגשית שאתה משאיר.

### הנוסחה: 3 תכונות מותג

בחר 3 תכונות שמגדירות אותך. לא 10, לא 1 — **3**.

דוגמאות:
- "מקצועי, חם, ישיר"
- "יצירתי, מוכוון תוצאות, מעורר"
- "אמין, מעמיק, מחויב"

### משפט ה-Positioning

"אני [מה אתה עושה] ל[מי] שרוצה [תוצאה רגשית]"

**דוגמה:** "אני מאמן עסקי לבעלי עסקים קטנים שרוצים להפסיק לעבוד קשה ולהתחיל לעבוד חכם"`,
    realWorldExample: `**דנה, מעצבת גרפית**

3 תכונות: **נקי, אמיץ, מוכוון עסקים**

כל Status שלה: עיצובים נקיים + הסבר עסקי למה הבחירות האלה עובדות.

תוצאה: לקוחות פונים אליה עם "ראיתי שאת מבינה עסקים, לא רק עיצוב"`,
    commonMistakes: [
      "לבחור תכונות גנריות כמו 'מקצועי ואמין'",
      "לשנות את הטון כל שבוע",
      "לפחד להיות ספציפי וייחודי",
    ],
    quiz: [
      {
        id: "q1",
        type: "free-recall",
        question: "כתוב את משפט ה-Positioning שלך לפי הנוסחה שלמדת",
        sampleAnswer:
          'דוגמה: "אני [X] ל[Y] שרוצה [תוצאה]". מלא לפי התחום שלך.',
      },
    ],
    actionItem: {
      title: "בנה את זהות המותג שלך",
      description:
        "כתוב: (1) 3 תכונות מותג. (2) משפט positioning. (3) שמור אותם בנגישות — תצטרך אותם לכל שיעור הבא.",
      timeEstimate: "25 דקות",
    },
    nextLessonSlug: "hook-anatomy",
    frameworks: ["Brand Positioning", "Simon Sinek Golden Circle"],
  },

  // ---- Course 2: Storytelling ----
  {
    id: "hook-anatomy",
    slug: "hook-anatomy",
    title: "אנטומיה של Hook — 3 השניות הראשונות",
    courseId: "storytelling",
    order: 1,
    duration: "14 דקות",
    xpReward: 80,
    heroImagePrompt: "attention-grabbing headline, bold typography, stop scrolling",
    outcomes: [
      "לכתוב Hook שעוצר גלילה תוך 3 שניות",
      "להשתמש ב-5 סוגי פתיחות שעובדות",
    ],
    whyItMatters:
      "אם ה-3 שניות הראשונות לא תופסות — אין שיעור שני. ה-Hook הוא הכניסה לכל שיחה.",
    content: `## 3 השניות שקובעות הכל

כשמישהו פותח את ה-Status שלך, מוחו שואל: **"האם זה רלוונטי לי?"** תוך שניות ספורות.

### 5 פתיחות שעובדות

1. **שאלה מתגרה** — "האם אתה עושה את הטעות הזו?"
2. **מספר מפתיע** — "97% מהעסקים מפסידים לקוחות בגלל דבר אחד"
3. **סיפור קצר** — "לפני שנה הייתי על סף פשיטת רגל. היום..."
4. **הבטחה ברורה** — "תוך 60 שניות תבין למה..."
5. **התנגדות** — "כולם אומרים X. הם טועים."

### מה לא לעשות

❌ "שלום לכולם, היום אני רוצה לשתף..."
❌ "כידוע לכם..."
❌ "חשוב לי לספר לכם..."`,
    realWorldExample: `**עו"ד שרון, תל אביב**

❌ לפני: "חשוב לדעת על חוק חדש בנושא שכירות"

✅ אחרי: "השוכר שלך יכול לסיים את החוזה ללא קנס — ואתה לא יודע את זה 😨"

תוצאה: מ-20 צפיות → 140 צפיות על אותו תוכן`,
    commonMistakes: [
      "פתיחה עם ברכה במקום תוכן",
      "Hook ארוך מדי — יותר מ-7 מילים",
      "Hook שלא קשור לתוכן האמיתי",
    ],
    quiz: [
      {
        id: "q1",
        type: "recognition",
        question: "איזו פתיחה היא Hook יעיל?",
        options: [
          "שלום חברים, היום אני רוצה לשתף אתכם במשהו חשוב",
          "97% מהעסקים מפסידים לקוחות בגלל דבר אחד",
          "כידוע לכולנו, שיווק הוא חשוב מאוד בעידן הדיגיטלי",
          "בפוסט של היום נדון בנושא מעניין",
        ],
        correctIndex: 1,
        explanation: "מספר מפתיע + בעיה = Hook שעוצר גלילה.",
      },
    ],
    actionItem: {
      title: "כתוב 5 Hooks לתחום שלך",
      description:
        "לפי 5 הסוגים שלמדת, כתוב Hook אחד לכל סוג. בחר את הטוב ביותר ופרסם אותו השבוע.",
      timeEstimate: "20 דקות",
    },
    nextLessonSlug: "success-framework",
    frameworks: ["Hook Model", "Attention Economy"],
  },
  {
    id: "success-framework",
    slug: "success-framework",
    title: "מסגרת SUCCESs — סיפורים שנדבקים",
    courseId: "storytelling",
    order: 2,
    duration: "18 דקות",
    xpReward: 90,
    heroImagePrompt: "sticky notes, memorable ideas, brain concept",
    outcomes: [
      "ליישם את 6 עקרונות SUCCESs על תוכן Status",
      "לכתוב סיפור שאנשים יזכרו ויספרו",
    ],
    whyItMatters:
      "מה שנדבק — נמכר. חיפ ו-דן היית ב-Made to Stick הגדירו למה רעיונות מסוימים חיים לנצח. זה ה-framework שלך.",
    content: `## SUCCESs — 6 עקרונות לרעיונות שנדבקים

### S — Simple (פשוט)
מצא את הליבה של הרעיון. לא "7 שלבים ל..." אלא "הסוד האחד שמשנה הכל".

### U — Unexpected (מפתיע)
שבור ציפיות. "כולם חושבים X, האמת היא Y."

### C — Concrete (קונקרטי)
דוגמאות ספציפיות > הכללות. "לקוח הרוויח 15,000 ₪" > "לקוחות מרוויחים יותר".

### C — Credible (אמין)
סטטיסטיקות, עדויות, ניסיון אישי. מה מוכיח שאתה יודע?

### E — Emotional (רגשי)
דבר לאדם, לא לקבוצה. "האם גם אתה..." > "אנשים רבים..."

### S — Stories (סיפורים)
סיפורים = סימולטור חיים. הם גורמים לאנשים לחיות את הניסיון.`,
    realWorldExample: `**מאמן NLP — לפני vs SUCCESs**

❌ לפני: "מציע אימון אישי לשיפור ביטחון עצמי וניהול רגשות"

✅ SUCCESs:
- **S** — "טכניקה אחת שינתה את החיים של דן"
- **U** — "הוא לא ניסה 'לחשוב חיובי' — הוא עשה ההפך"
- **C** — "תוך 21 יום דן קיבל 3 קידומים בעבודה"`,
    commonMistakes: [
      "להשתמש בכל 6 עקרונות בכל פוסט — choose 2-3",
      "סיפורים ארוכים מדי — Status לא רומן",
      "להיות קונקרטי בנתונים אבל מופשט ברגש",
    ],
    quiz: [
      {
        id: "q1",
        type: "cued-recall",
        question: "מה ראשי התיבות של SUCCESs?",
        hint: "Simple, Unexpected, Concrete, Credible, _______, _______",
        sampleAnswer: "Emotional, Stories",
      },
    ],
    actionItem: {
      title: "עצב מחדש Status ישן עם SUCCESs",
      description:
        "קח Status ישן שפרסמת ועצב אותו מחדש תוך שימוש ב-3 עקרונות לפחות. השווה את שתי הגרסאות.",
      timeEstimate: "30 דקות",
    },
    nextLessonSlug: "visual-language",
    frameworks: ["SUCCESs Framework", "Made to Stick"],
  },
  {
    id: "visual-language",
    slug: "visual-language",
    title: "שפה ויזואלית ב-Status",
    courseId: "storytelling",
    order: 3,
    duration: "13 דקות",
    xpReward: 80,
    heroImagePrompt: "visual design, consistent colors, phone screen with beautiful content",
    outcomes: [
      "להגדיר palette ויזואלי ל-Status שלך",
      "לבחור פורמטים שעובדים: טקסט, תמונה, וידאו",
    ],
    whyItMatters:
      "לפני שקוראים מילה, העין כבר שפטה. ויזואליות עקבית = brand recognition.",
    content: `## ויזואליות = רושם ראשוני + זיכרון

### 3 אלמנטים ויזואליים לStatus

**1. צבעים** — בחר 2-3 צבעים ועמוד בהם. הצבעים שלך = הפנים שלך.

**2. פונטים** — Hebrew: David, Assistant, Heebo. בחר פונט ראשי ושמור עליו.

**3. סגנון תמונות** — אותנטי (סלפי/חיים אמיתיים) או ממותג (templates)?

### פורמטים שעובדים ב-WhatsApp Status

| פורמט | מתי להשתמש |
|--------|------------|
| טקסט על רקע | טיפים קצרים, ציטוטים |
| תמונה + כיתוב | עדויות, תוצאות |
| וידאו קצר (15-30 שניות) | הוראות, behind-the-scenes |
| GIF | הומור, תגובות |`,
    realWorldExample: `**נטע, מטפלת בתזונה**

3 צבעים: ירוק עמוק + לבן + זהב בהיר

כל Status: תמונה של אוכל עם overlay ירוק + טקסט לבן + 1 עובדה מפתיעה.

תוצאה: "אני מזהה מיד שזה הסטטוס של נטע" — לקוחות אמרו לה זאת.`,
    commonMistakes: [
      "שימוש ב-5+ צבעים שונים",
      "טקסט קטן שקשה לקריאה",
      "לוגו גדול שחוסם את התוכן",
    ],
    quiz: [
      {
        id: "q1",
        type: "recognition",
        question: "כמה צבעים מומלץ לבחור ל-brand palette?",
        options: ["1", "2-3", "5-6", "כמה שיותר"],
        correctIndex: 1,
        explanation: "2-3 צבעים ליצירת עקביות בלי להיות מונוטוני.",
      },
    ],
    actionItem: {
      title: "הגדר את ה-Visual Identity שלך",
      description:
        "בחר 2-3 צבעים, פונט, וסגנון תמונות. צור template פשוט ב-Canva ופרסם Status אחד בפורמט החדש.",
      timeEstimate: "35 דקות",
    },
    nextLessonSlug: "content-pillars",
    frameworks: ["Visual Branding", "Color Psychology"],
  },

  // ---- Course 3: Content System ----
  {
    id: "content-pillars",
    slug: "content-pillars",
    title: "עמודי תוכן — המבנה שמשמר עקביות",
    courseId: "content-system",
    order: 1,
    duration: "16 דקות",
    xpReward: 90,
    heroImagePrompt: "content calendar, pillars structure, organized planning",
    outcomes: [
      "להגדיר 4-5 עמודי תוכן לערוץ ה-Status שלך",
      "לתכנן שבוע תוכן שלם",
    ],
    whyItMatters:
      "בלי מבנה — תנגמר לך הרעיונות תוך שבועיים. עם עמודי תוכן, אף פעם לא תצטרך לחשוב 'על מה לפרסם היום'.",
    content: `## עמודי תוכן = מנגנון האוטומציה של היצירתיות

### מה זה עמוד תוכן?

קטגוריה חוזרת של תוכן שמחזקת את המותג שלך. דוגמה לעמודים של מאמן עסקי:

1. **טיפ** — "טיפ עסקי של היום"
2. **סיפור** — case study של לקוח
3. **שאלה** — שאלה שמעוררת מחשבה
4. **Behind the scenes** — יום בחיים שלי
5. **המלצה** — כלי/ספר/שירות שאני אוהב

### כלל ה-80/20

80% תוכן שמביא ערך, 20% מכירות.

### תכנון שבועי

ראשון: טיפ | שלישי: סיפור | חמישי: שאלה | שבת: behind-the-scenes`,
    realWorldExample: `**יוסי, סוכן נדל"ן**

עמודי תוכן: שוק (מחירים), טיפ (טעויות קונים), סיפור (עסקה מוצלחת), אישי (חיי משפחה)

"כשהגדרתי את העמודים, הפסקתי לבהות במסך שעה לפני כל Status"`,
    commonMistakes: [
      "יותר מ-6 עמודים — קשה לתחזק",
      "כל הפוסטים מאותו עמוד (רק טיפים / רק מכירות)",
      "לא לתת שם מזכיר לעמוד — זה עוזר לזכור",
    ],
    quiz: [
      {
        id: "q1",
        type: "free-recall",
        question: "רשום 4 עמודי תוכן שמתאימים לתחום שלך",
        sampleAnswer:
          "דוגמה: טיפ מקצועי, סיפור לקוח, שאלה לקהל, behind-the-scenes, המלצה.",
      },
    ],
    actionItem: {
      title: "הגדר 4 עמודי תוכן + תכנן שבוע",
      description:
        "כתוב 4 עמודים. לאחר מכן, תכנן 4 Status לשבוע הבא — אחד לכל עמוד. כתוב כותרת לכל אחד.",
      timeEstimate: "25 דקות",
    },
    nextLessonSlug: "batch-creation",
    frameworks: ["Content Pillars", "Editorial Calendar"],
  },
  {
    id: "batch-creation",
    slug: "batch-creation",
    title: "Batch Creation — חיסכון בזמן",
    courseId: "content-system",
    order: 2,
    duration: "12 דקות",
    xpReward: 80,
    heroImagePrompt: "productive person creating content in one session, efficiency",
    outcomes: [
      "לבצע סשן יצירה שבועי של 2 שעות",
      "ליצור תוכן ל-7 ימים בישיבה אחת",
    ],
    whyItMatters:
      "יצירה יומית מובילה לשחיקה. Batch creation = חופש יצירתי + עקביות ללא לחץ.",
    content: `## ה-2 שעות שמחליפות יצירה יומית

### מה זה Batch Creation?

במקום לחשוב על Status כל יום — קובעים **יום יצירה שבועי** ויוצרים את כל התוכן ל-7 ימים קדימה.

### שיטת ה-Batch

**שלב 1 (30 דקות): ריכוז רעיונות**
רשום 10 רעיונות ללא עריכה. כמה שיותר.

**שלב 2 (60 דקות): יצירה**
בחר 5-7 רעיונות. כתוב/צלם/ערוך.

**שלב 3 (30 דקות): ארגון**
שמור בתיקייה, קבע מתי לפרסם.

### כלים מומלצים

- **Notion / Google Sheets** — לוח תכנון
- **Canva** — עיצוב מהיר
- **WhatsApp Business** — תזמון (בחלק מהמכשירים)`,
    realWorldExample: `**ריבה, עורכת דין**

כל יום ראשון 9:00-11:00: Batch session.
תוצאה: 6 Status מוכנים לשבוע. "לא נגעתי בTelephn במהלך השבוע לצרכי תוכן"`,
    commonMistakes: [
      "Batch session ללא מבנה — גורר ל-4 שעות",
      "לא לשמור template — מתחיל מאפס כל פעם",
      "לשכוח להשאיר מקום לתוכן ספונטני (חדשות, אירועים)",
    ],
    quiz: [
      {
        id: "q1",
        type: "recognition",
        question: "כמה זמן מומלץ להקדיש ל-Batch session שבועי?",
        options: ["30 דקות", "2 שעות", "חצי יום", "כל היום"],
        correctIndex: 1,
        explanation: "2 שעות מאפשרות יצירה איכותית ללא שחיקה.",
      },
    ],
    actionItem: {
      title: "בצע את ה-Batch הראשון שלך",
      description:
        "קבע 2 שעות בלוח הזמנים השבוע. בצע את 3 השלבים: רעיונות, יצירה, ארגון. צור לפחות 4 Status.",
      timeEstimate: "120 דקות",
    },
    nextLessonSlug: "repurposing",
    frameworks: ["Batch Processing", "Time Blocking"],
  },
  {
    id: "repurposing",
    slug: "repurposing",
    title: "Repurposing — מתוכן אחד לעשרה",
    courseId: "content-system",
    order: 3,
    duration: "14 דקות",
    xpReward: 80,
    heroImagePrompt: "content recycling, one piece to many, creative reuse",
    outcomes: [
      "להפוך כל תוכן מקורי ל-5+ וריאציות",
      "לבנות ספריית תוכן שמתרחבת לאורך זמן",
    ],
    whyItMatters:
      "הבעיה הגדולה ביצירת תוכן היא הזמן. Repurposing פותר אותה — אתה יוצר פחות ומפרסם יותר.",
    content: `## כל רעיון = 10 Status פוטנציאליים

### מה זה Repurposing?

לקחת תוכן קיים ולהציג אותו מזוויות שונות.

### 6 דרכי Repurposing

1. **מאמר → Series** — מחלקים ל-5 Status קצרים
2. **וידאו → ציטוטים** — 3 משפטים בולטים הופכים ל-3 Status
3. **שאלה שנשאלתי → תשובה ציבורית**
4. **Case study → Before/After**
5. **תוצאה → סיפור מאחורי התוצאה**
6. **טיפ ישן + עדכון** — "לפני שנה כתבתי X. היום אני חושב..."

### ספריית תוכן

שמור **כל** Status שפרסמת. תוך שנה — מאגר של 200+ רעיונות.`,
    realWorldExample: `**מיכאל, מנהל שיווק**

פוסט אחד על "5 טעויות בפרסום בפייסבוק" הפך ל:
- 5 Status נפרדים (טעות אחת כל פעם)
- Status על "הטעות הגדולה ביותר" (הכי ויראלי)
- Before/After של קמפיין שתוקן`,
    commonMistakes: [
      "Repurposing ללא עריכה — אותו טקסט בצורות שונות",
      "לא לחכות מספיק זמן בין וריאציות",
      "להתעצל על ספריית תוכן — זה משתלם לטווח ארוך",
    ],
    quiz: [
      {
        id: "q1",
        type: "free-recall",
        question: "תאר 3 דרכים לעשות Repurposing לתוכן שכבר יצרת",
        sampleAnswer:
          "לחלק מאמר ל-Series, לחלץ ציטוטים מוידאו, לספר את הסיפור מאחורי תוצאה.",
      },
    ],
    actionItem: {
      title: "עשה Repurposing לתוכן קיים",
      description:
        "בחר Status שפרסמת בחודשיים האחרונים. צור 3 וריאציות שונות ממנו ותזמן אותן ל-3 ימים שונים.",
      timeEstimate: "30 דקות",
    },
    nextLessonSlug: "cta-science",
    frameworks: ["Content Repurposing", "Content Pyramid"],
  },

  // ---- Course 4: Engagement ----
  {
    id: "cta-science",
    slug: "cta-science",
    title: "מדע ה-CTA — לגרום לאנשים לפעול",
    courseId: "engagement",
    order: 1,
    duration: "14 דקות",
    xpReward: 90,
    heroImagePrompt: "call to action button, conversion, action taking",
    outcomes: [
      "לכתוב CTA שמגדיל תגובות ב-300%",
      "לדעת מתי ואיך לבקש פעולה",
    ],
    whyItMatters:
      "תוכן ללא CTA = תוכן ללא מטרה. הבדל בין 'פרסמתי' לבין 'פרסמתי ומכרתי'.",
    content: `## CTA — Call To Action שעובד

### למה אנשים לא מגיבים?

לא כי הם לא מעוניינים — אלא כי לא ביקשת ספציפית.

### 4 סוגי CTA ל-Status

1. **Micro-commitment** — "שלח לי 👍 אם זה עזר לך"
2. **שאלה** — "מה הטעות שלך? שתף בתגובה"
3. **הנחיה ברורה** — "לפרטים — שלח לי הודעה עכשיו"
4. **Social proof** — "שלח לחבר שצריך לשמוע את זה"

### עקרון Cialdini: Reciprocity

תן תחילה. CTA אחרי ערך = עובד. CTA ללא ערך = ספאם.

### טיימינג

CTA **בסוף** הStatus, אחרי שסיפקת ערך.`,
    realWorldExample: `**ד"ר שירה, רופאת שיניים**

❌ "לתיאום תור — התקשרו 050-..."

✅ "האם ידעת שצחצוח שגוי גורם ל-60% מבעיות החניכיים? הכינותי מדריך חינמי. כתבי לי 'מדריך' ואשלח ישירות"

תוצאה: 23 הודעות ביממה`,
    commonMistakes: [
      "CTA ארוך מדי",
      "יותר מ-CTA אחד לStatus",
      "CTA לפני שסיפקת ערך",
    ],
    quiz: [
      {
        id: "q1",
        type: "recognition",
        question: "מה עקרון Reciprocity של Cialdini?",
        options: [
          "תמיד לבקש קודם",
          "לתת קודם ואז לבקש",
          "לא לבקש בכלל",
          "לבקש פעמיים",
        ],
        correctIndex: 1,
        explanation: "Reciprocity: כשנותנים קודם — אנשים מרגישים מחויבים להחזיר.",
      },
    ],
    actionItem: {
      title: "כתוב 3 CTAs שונים לStatus הבא",
      description:
        "לפי 4 הסוגים שלמדת, כתוב 3 CTAs שונים לאותו תוכן. פרסם עם הטוב ביותר ומדוד תגובות.",
      timeEstimate: "20 דקות",
    },
    nextLessonSlug: "dm-funnel",
    frameworks: ["Cialdini Principles", "Conversion Optimization"],
  },
  {
    id: "dm-funnel",
    slug: "dm-funnel",
    title: "DM Funnel — מStatus לשיחה",
    courseId: "engagement",
    order: 2,
    duration: "16 דקות",
    xpReward: 95,
    heroImagePrompt: "WhatsApp conversation, direct message, sales conversation",
    outcomes: [
      "לבנות funnel שממיר צופי Status לשיחות DM",
      "לנהל שיחת מכירה ראשונה ב-WhatsApp",
    ],
    whyItMatters:
      "Status הוא ה-awareness. DM הוא ה-conversion. בלי funnel — אין כסף.",
    content: `## מStatus → DM → לקוח

### ה-Funnel ב-3 שלבים

**שלב 1: Status שמעורר סקרנות**
Status שמסתיים בשאלה פתוחה או הצעה לפרטים נוספים.

**שלב 2: DM opener**
כשמישהו שולח — יש לך Script פשוט:
- "שמחתי שפנית! ספר לי קצת יותר על המצב שלך..."
- שאלות פתוחות > הצעת מחיר מיידית

**שלב 3: הפנייה לפגישה/שיחה**
"נשמע שאתה בדיוק מי שאני עובד איתו. בוא נקבע 20 דקות לשיחה — בלי התחייבות"

### המשפט שלא לומר
❌ "כמה תקציב יש לך?" — בשלב ראשון זה הורג שיחה.`,
    realWorldExample: `**אמיר, מאמן כושר**

Status: "הלקוח שלי ירד 8 ק"ג תוך 6 שבועות. הסוד? לא דיאטה... שלח לי 'סוד' ואספר"

תוצאה: 18 הודעות. 6 הפכו לפגישות. 3 לקוחות חדשים.`,
    commonMistakes: [
      "להזניח DMs — לענות 24 שעות אחרי",
      "לפתוח מיד עם מחיר",
      "שיחת מכירה ב-DM במקום שיחת טלפון",
    ],
    quiz: [
      {
        id: "q1",
        type: "free-recall",
        question: "מה הסיבה שלא לפתוח DM עם שאלת תקציב?",
        sampleAnswer:
          "כי זה הורג את הקשר לפני שנבנה אמון. קודם צריך להבין את הבעיה ולבנות ערך.",
      },
    ],
    actionItem: {
      title: "בנה את ה-DM Script שלך",
      description:
        "כתוב Script של 3 שלבים: פתיחה חמה, שאלת עומק, הצעת פגישה. שמור אותו נגיש לשימוש.",
      timeEstimate: "25 דקות",
    },
    nextLessonSlug: "social-proof",
    frameworks: ["Sales Funnel", "Conversational Selling"],
  },
  {
    id: "social-proof",
    slug: "social-proof",
    title: "Social Proof — עדויות שמוכרות",
    courseId: "engagement",
    order: 3,
    duration: "13 דקות",
    xpReward: 85,
    heroImagePrompt: "testimonials, reviews, social proof, trust building",
    outcomes: [
      "לאסוף ולהציג עדויות בצורה שממירה",
      "לבנות מנגנון שיטתי לאיסוף social proof",
    ],
    whyItMatters:
      "אנשים סומכים על אנשים יותר ממותגים. עדות אחת שווה יותר מ-10 פוסטים שלך.",
    content: `## Social Proof — ה-shortcut לאמון

### 5 סוגי Social Proof

1. **עדות מספרית** — "200 לקוחות מרוצים"
2. **Before/After** — תמונות/מספרים
3. **ציטוט ישיר** — "מה אמר הלקוח?"
4. **Logo wall** — רשימת לקוחות/שותפים
5. **Media mention** — "כפי שסוקר ב..."

### איך לאסוף עדויות

שאל 3 שאלות פשוטות:
- "מה היה המצב לפני שעבדנו יחד?"
- "מה השתנה?"
- "למי היית ממליץ עלי?"

### הצגה נכונה ב-Status

תמיד כלול: **שם + מה השתנה + מספר** (כמה זמן, כמה כסף, כמה %). כלליות לא מוכרת.`,
    realWorldExample: `**תמר, יועצת שיווק**

❌ "לקוחות מרוצים ממני מאוד"

✅ "שני, בעלת מכון יופי: 'תוך חודשיים הכפלתי את מספר הלקוחות החדשים. לא האמנתי שStatus יכול לעשות את זה'"`,
    commonMistakes: [
      "עדות כללית ללא פרטים ספציפיים",
      "לא לבקש אישור מהלקוח לפרסום",
      "לשכוח לעדכן — עדויות ישנות מחלישות",
    ],
    quiz: [
      {
        id: "q1",
        type: "recognition",
        question: "מה חייב להיות בעדות שממירה?",
        options: [
          "תמונה יפה",
          "שם + שינוי + מספר ספציפי",
          "המלצה כללית חמה",
          "לוגו המותג",
        ],
        correctIndex: 1,
        explanation: "ספציפיות = אמינות. שם + תוצאה + מספר.",
      },
    ],
    actionItem: {
      title: "אסוף 3 עדויות השבוע",
      description:
        "שלח ל-3 לקוחות מרוצים את 3 השאלות שלמדת. פרסם את העדות הטובה ביותר כStatus.",
      timeEstimate: "30 דקות",
    },
    nextLessonSlug: "pricing-status",
    frameworks: ["Social Proof", "Trust Building", "Cialdini Principles"],
  },

  // ---- Course 5: Monetization ----
  {
    id: "pricing-status",
    slug: "pricing-status",
    title: "תמחור ב-Status — איך לדבר על כסף",
    courseId: "monetization",
    order: 1,
    duration: "17 דקות",
    xpReward: 100,
    heroImagePrompt: "pricing, money, value, business deal",
    outcomes: [
      "לדבר על מחיר מבלי לאבד לקוחות",
      "לבנות Value Ladder ב-Status",
    ],
    whyItMatters:
      "אנשים לא קונים מחיר — הם קונים ערך. הבעיה היא שרוב בעלי העסקים לא יודעים לתקשר ערך.",
    content: `## איך לדבר על מחיר בלי להבריח לקוחות

### הטעות הגדולה: מחיר ללא הקשר

"חבילת ייעוץ — 3,500 ₪" — אין הקשר, אין ערך, אין מכירה.

### Value = תועלת / מחיר

הגדל את המונה (תועלת), לא הקטן את המכנה (מחיר).

### Value Ladder

**Step 1** — חינמי: טיפ, מדריך, וובינר
**Step 2** — זול (₪50-200): מוצר כניסה
**Step 3** — בינוני (₪500-2000): שירות עיקרי
**Step 4** — יקר (₪5000+): VIP / Retainer

### שיטת ה-ROI Frame

במקום: "המחיר הוא 2,000 ₪"
אמור: "השקעה של 2,000 ₪ שהחזירה ל-X לקוח 15,000 ₪ תוך 3 חודשים"`,
    realWorldExample: `**גיל, מומחה SEO**

Status שמכר:
"לפני 6 חודשים: 200 כניסות ליום מגוגל.
אחרי 4 חודשי עבודה: 1,400 כניסות ליום.
עבודה שעלתה 4,800 ₪ — הכניסה 60,000 ₪ בהכנסות.
יש לי עוד מקום לעוד לקוח אחד. DM אם מעניין."`,
    commonMistakes: [
      "לפרסם מחיר ללא הוכחת ערך קודמת",
      "להתנצל על המחיר",
      "לא להציע חבילות שונות",
    ],
    quiz: [
      {
        id: "q1",
        type: "cued-recall",
        question: "מה הנוסחה לתפיסת Value?",
        hint: "Value = _______ / _______",
        sampleAnswer: "Value = תועלת / מחיר",
      },
    ],
    actionItem: {
      title: "כתוב Status שמוכר ב-ROI Frame",
      description:
        "בחר שירות אחד. כתוב Status לפי שיטת ה-ROI Frame: השקעה → תוצאה → ROI. פרסם.",
      timeEstimate: "25 דקות",
    },
    nextLessonSlug: "launch-strategy",
    frameworks: ["Value Ladder", "ROI Framing", "Value-Based Pricing"],
  },
  {
    id: "launch-strategy",
    slug: "launch-strategy",
    title: "אסטרטגיית לאנץ' ב-WhatsApp",
    courseId: "monetization",
    order: 2,
    duration: "20 דקות",
    xpReward: 110,
    heroImagePrompt: "product launch, countdown, excitement, rocket",
    outcomes: [
      "לבנות sequence של Status לפני ובמהלך לאנץ'",
      "ליצור urgency אמיתי ולא מניפולטיבי",
    ],
    whyItMatters:
      "לאנץ' בלי מבנה = מוצר שלא נמכר. לאנץ' עם sequence = לקוחות שמחכים.",
    content: `## ה-Launch Sequence ב-Status

### 7 ימי לאנץ'

**יום 1-2: Problem awareness**
Status שמציג את הבעיה שהמוצר פותר.

**יום 3-4: Solution teaser**
"יש פתרון. עוד 3 ימים."

**יום 5: Social proof**
עדות מלקוח beta / תוצאה.

**יום 6: Details reveal**
מה בדיוק המוצר/שירות.

**יום 7: Launch + CTA**
"פתוח לרישום. מקומות מוגבלים."

### Urgency אמיתי

❌ "מבצע מוגבל!" (שקרי)
✅ "פותח רק 5 מקומות בגלל הזמן האישי שאני נותן"`,
    realWorldExample: `**לירן, מאמן כלכלי**

שבוע לפני ה-Workshop שלו:
יום 1: "האם אתה סוף החודש?" (Problem)
יום 3: "Workshop שינה את זה ל-12 אנשים" (Social proof)
יום 5: "3 ימים + 3 מקומות נשארו" (Urgency)
יום 7: "סגרנו. תודה ל-15 שנרשמו"`,
    commonMistakes: [
      "לאנץ' בלי build-up — מפרסמים ישר",
      "urgency מזויפת — פוגעת באמינות",
      "לא לעדכן: 'נסגר' — מחזק את הbrand",
    ],
    quiz: [
      {
        id: "q1",
        type: "recognition",
        question: "מה היום הראשון ב-Launch Sequence?",
        options: [
          "מחיר ופרטים",
          "Problem awareness",
          "CTA לרישום",
          "Social proof",
        ],
        correctIndex: 1,
        explanation: "קודם מציגים בעיה, אחר כך פתרון. זה בונה ציפייה.",
      },
    ],
    actionItem: {
      title: "תכנן Launch Sequence למוצר/שירות שלך",
      description:
        "בחר מוצר/שירות. תכנן sequence של 5 Status (לא 7 אם זה קצר). כתוב כותרת לכל Status.",
      timeEstimate: "35 דקות",
    },
    nextLessonSlug: "retention-upsell",
    frameworks: ["Launch Sequence", "Jeff Walker PLF", "Scarcity Principle"],
  },
  {
    id: "retention-upsell",
    slug: "retention-upsell",
    title: "שימור לקוחות ו-Upsell",
    courseId: "monetization",
    order: 3,
    duration: "15 דקות",
    xpReward: 100,
    heroImagePrompt: "customer retention, loyalty, upsell, relationship",
    outcomes: [
      "לשמור על לקוחות קיימים עם Status",
      "ליצור Upsell טבעי ולא דוחף",
    ],
    whyItMatters:
      "לקוח קיים עולה 5x פחות מלקוח חדש. Status הוא הכלי המושלם לשמר ולהגדיל.",
    content: `## לקוחות קיימים = הנכס הכי יקר

### Status לשימור

**סוגי תוכן שמשמרים:**
- Behind the scenes של עבודה עבורם
- תוצאות / עדכונים
- טיפים בלעדיים "לקהל הפנימי"
- תוכן "לפני כולם"

### Upsell טבעי

לא "יש לי עוד שירות" אלא "לקוח X כבר עבד איתי ב-X, עכשיו עברנו ל-Y ותוצאות ה-Y..."

### The Loyalty Loop

1. **תן ערך** לשוטף לא רק לפני מכירה
2. **בקש feedback** — מחזק engagement
3. **Celebrate wins** — שתף הצלחות שלהם`,
    realWorldExample: `**צחי, מפתח אתרים**

Status שבועי ל"תלמידים": "עדכון: כלי חדש שמקצר בניית אתר ב-30%. הראשונים לדעת אתם."

תוצאה: 60% מהלקוחות הישנים חזרו לפרויקטים נוספים.`,
    commonMistakes: [
      "לשכוח מלקוחות אחרי הסגירה",
      "Upsell לפני שנסתיים השירות הנוכחי",
      "לא לבקש המלצות מלקוחות מרוצים",
    ],
    quiz: [
      {
        id: "q1",
        type: "recognition",
        question: "כמה יקר לגייס לקוח חדש לעומת שימור קיים?",
        options: ["2x", "5x", "10x", "שווה"],
        correctIndex: 1,
        explanation: "לקוח חדש עולה 5x יותר מאשר שימור קיים.",
      },
    ],
    actionItem: {
      title: "שלח Status בלעדי ל'לקוחות VIP'",
      description:
        "צור Status עם תוכן בלעדי ורשום בכיתוב 'לקהל הפנימי שלי'. ראה מי מגיב.",
      timeEstimate: "20 דקות",
    },
    nextLessonSlug: "capstone",
    frameworks: ["Customer Retention", "Loyalty Loop", "LTV Optimization"],
  },

  // ---- Course 6: Capstone ----
  {
    id: "capstone",
    slug: "capstone",
    title: "פרויקט הסיכום — אסטרטגיית Status המלאה",
    courseId: "capstone",
    order: 1,
    duration: "30 דקות",
    xpReward: 200,
    heroImagePrompt: "graduation, achievement, trophy, complete strategy",
    outcomes: [
      "לבנות תוכנית Status ל-90 יום",
      "לשלב את כל הכלים שנלמדו לאסטרטגיה אחת",
    ],
    whyItMatters:
      "זה הרגע שכל מה שלמדת הופך לתוכנית פעולה. לא עוד תיאוריה — זה ה-playbook שלך.",
    content: `## הפרויקט: תוכנית 90 יום

### חלק 1: Brand Foundation
- הגדרת Brand Identity (מי אתה ב-3 מילים)
- Avatar: מי הלקוח האידיאלי?
- Value proposition: מה מייחד אותך?

### חלק 2: Content System
- 4-5 עמודי תוכן
- לוח תוכן לחודש ראשון
- Batch schedule (מתי + כמה זמן)

### חלק 3: Engagement & Sales
- DM Script
- Launch Sequence לשירות אחד
- 3 עדויות מלקוחות

### חלק 4: Metrics
- מה אתה מודד? (צפיות, DMs, המרות)
- מטרות לחודש 1, 2, 3

### המסקנה
אסטרטגיית Status טובה = **עקביות + ערך + מערכת יחסים**. זה לא וירוס — זו בניית אמון לאורך זמן.`,
    realWorldExample: `**The Full Picture**

בעל עסק שיישם את כל המודולים:
- חודש 1: בנה Brand Identity + 20 Status ראשונים
- חודש 2: ראשונות 5 פניות DM אורגניות
- חודש 3: לאנץ' ראשון → 3 לקוחות חדשים
- חודש 6: Status הפך לערוץ #1 שלו`,
    commonMistakes: [
      "לחכות עד שהכל מושלם — להתחיל עכשיו",
      "לדלג על מדידה — ללא נתונים אין שיפור",
      "לשנות אסטרטגיה כל שבוע — תן זמן לראות תוצאות",
    ],
    quiz: [
      {
        id: "q1",
        type: "free-recall",
        question: "מה 3 העמודות של אסטרטגיית Status מוצלחת?",
        sampleAnswer: "עקביות + ערך + מערכת יחסים",
      },
    ],
    actionItem: {
      title: "כתוב את תוכנית 90 הימים שלך",
      description:
        "מלא את 4 החלקים: Brand, Content, Engagement, Metrics. זה ה-document החשוב ביותר שתצא מהקורס הזה. שמור אותו.",
      timeEstimate: "60 דקות",
    },
    frameworks: ["Strategic Planning", "90-Day Sprint", "OKRs"],
  },
];

// Attach lessons to courses
const lessonsByCourse = ALL_LESSONS.reduce<Record<string, Lesson[]>>((acc, lesson) => {
  if (!acc[lesson.courseId]) acc[lesson.courseId] = [];
  acc[lesson.courseId].push(lesson);
  return acc;
}, {});

export const COURSES_WITH_LESSONS: Course[] = COURSES.map((course) => ({
  ...course,
  lessons: (lessonsByCourse[course.id] ?? []).sort((a, b) => a.order - b.order),
}));

export function getLessonBySlug(slug: string): Lesson | undefined {
  return ALL_LESSONS.find((l) => l.slug === slug);
}

export function getCourseByLessonSlug(slug: string): Course | undefined {
  const lesson = getLessonBySlug(slug);
  if (!lesson) return undefined;
  return COURSES_WITH_LESSONS.find((c) => c.id === lesson.courseId);
}
