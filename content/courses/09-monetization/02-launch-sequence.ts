import type { Lesson } from "@/lib/content/types";

const lesson: Lesson = {
  id: "launch-sequence",
  slug: "launch-sequence",
  title: "Launch Sequence — שבוע שמוכר",
  courseId: "monetization",
  order: 2,
  duration: "20 דקות",
  xpReward: 110,
  heroImagePrompt: "Rocket launching with a countdown timer, bold red and white, cinematic wide angle, energy and momentum",
  outcomes: [
    "לבנות sequence של 7 Status לפני ובמהלך לאנץ'",
    "ליצור urgency אמיתי ולא מניפולטיבי",
    "לדעת בדיוק מה לפרסם כל יום בשבוע לאנץ'",
  ],
  whyItMatters:
    "לאנץ' בלי מבנה = מוצר שלא נמכר. לאנץ' עם sequence = לקוחות שמחכים, ציפייה שמצטברת, ומכירות שנסגרות לפני שפתחת.",
  content: `## למה צריך Launch Sequence?

כי אנשים לא קונים כשהם רואים פעם ראשונה. הם קונים אחרי חשיפה חוזרת, לאחר שנבנה אמון, כשהם רואים ראיות.

Sequence בונה כל זה בשיטתיות.

---

## ה-Launch Sequence ב-7 ימים

### יום 1-2: Problem Awareness
Status שמציג את הבעיה שהמוצר פותר.

> "האם גם אתה מסיים כל חודש בתחושה ש'עבדתי המון, הרווחתי מעט'?"

### יום 3: Insight / Tease
מחשבה חדשה על הבעיה, + רמז שמשהו מגיע.

> "יש סיבה אחת לזה — ותוך 3 ימים אני חולק אותה"

### יום 4: Social Proof
עדות של מי שכבר עבד איתך / קיבל תוצאה.

> "יעל הייתה בדיוק במצב הזה לפני 4 חודשים..."

### יום 5: Details Reveal
מה בדיוק המוצר/שירות, למי הוא מיועד, מה כולל.

### יום 6: Urgency (אמיתי)
> "פותח 5 מקומות — בגלל הזמן האישי שאני נותן לכל לקוח"

### יום 7: Launch + CTA
> "פתוח לרישום. לפרטים — DM 'מוכן'"

### יום 8 (bonus): Closed
> "סגרנו. תודה ל-12 שנרשמו. הבא — בעוד חודשיים."

---

## Urgency אמיתי vs. מזויף

❌ מזויף: "מבצע מוגבל!" (כשהוא לא מוגבל)
❌ מזויף: "נשארו 2 מקומות" (כשאין מגבלה)

✅ אמיתי: "פותח 5 מקומות — כי כל לקוח מקבל גישה ישירה אלי"
✅ אמיתי: "Workshop ב-[תאריך]. לא ייחזר — [סיבה אמיתית]"

Urgency מזויף פוגע באמינות לטווח ארוך. Urgency אמיתי מחזק אותה.`,
  realWorldExample: `**לירן, מאמן כלכלי**

שבוע לפני ה-Workshop:

יום 1: "האם אתה מגיע לסוף חודש בתחושת חנק?" (Problem)
יום 3: "יש 3 הרגלים שכולם עושים שגורמים לזה" (Insight)
יום 5: "Workshop שינה את זה ל-12 אנשים השנה" (Social proof)
יום 6: "נשארו 3 מקומות — Workshop יום ג' הקרוב" (Urgency)
יום 7: "סגור. תודה ל-15 שנרשמו 🙏" (Close)

**תוצאה:** Workshop מלא. רשימת המתנה ל-3 חודשים קדימה.`,
  commonMistakes: [
    "לאנץ' בלי build-up — מפרסמים ישר את המוצר ותמהים למה לא קונים",
    "Urgency מזויפת — פוגעת באמינות ואת זה לא מרפאים",
    "לא לעדכן 'נסגר' — זה מהלך brand חשוב",
    "לדלג על יום Social Proof — זה היום הכי חשוב",
  ],
  quiz: [
    {
      id: "ls-q1",
      type: "recognition",
      question: "מה היום הראשון ב-Launch Sequence?",
      options: [
        "מחיר ופרטי המוצר",
        "Problem Awareness — הצגת הבעיה",
        "CTA לרישום",
        "Social Proof",
      ],
      correctIndex: 1,
      explanation: "קודם בונים ציפייה ומזדהים עם הבעיה. פרטים ומחיר מגיעים רק אחרי שיש עניין.",
    },
    {
      id: "ls-q2",
      type: "free-recall",
      question: "מה ההבדל בין Urgency אמיתי למזויף? תן דוגמה לכל אחד.",
      sampleAnswer: "מזויף: 'נשארו 2 מקומות' כשאין מגבלה. אמיתי: '5 מקומות — כי כל לקוח מקבל גישה ישירה אלי'",
    },
  ],
  actionItem: {
    title: "תכנן Launch Sequence למוצר/שירות שלך",
    description:
      "בחר מוצר/שירות. תכנן sequence של 5-7 ימים. כתוב כותרת קצרה לכל Status. החלט מה ה-Urgency האמיתי שלך.",
    timeEstimate: "35 דקות",
  },
  nextLessonSlug: "dm-conversion",
  frameworks: ["Launch Sequence", "Jeff Walker PLF", "Scarcity Principle (Cialdini)"],
};

export default lesson;
