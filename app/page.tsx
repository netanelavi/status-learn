"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Zap, Trophy, Users, Target, TrendingUp } from "lucide-react";

const miniCourses = [
  { emoji: "🏗️", title: "Foundations", subtitle: "למה Status > כל השאר", lessons: 3, color: "from-indigo-500/20 to-indigo-600/10" },
  { emoji: "🎣", title: "Hooks & Attention", subtitle: "גורמים לאצבע לעצור", lessons: 5, color: "from-amber-500/20 to-amber-600/10" },
  { emoji: "🤝", title: "Trust & Credibility", subtitle: "בונים אמון בלי לבקש", lessons: 4, color: "from-emerald-500/20 to-emerald-600/10" },
  { emoji: "🚀", title: "Engagement & Following", subtitle: "מגדילים קהל ומעורבות", lessons: 5, color: "from-rose-500/20 to-rose-600/10" },
  { emoji: "💰", title: "Conversion", subtitle: "הופכים צופים ללקוחות", lessons: 5, color: "from-violet-500/20 to-violet-600/10" },
];

const stats = [
  { value: "23", label: "שיעורים", icon: BookOpen },
  { value: "8", label: "מסגרות ידע", icon: Target },
  { value: "90%+", label: "Open rate בסטטוס", icon: TrendingUp },
  { value: "0₪", label: "תקציב פרסום נדרש", icon: Trophy },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 pt-16 pb-8">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/8 blur-3xl" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[var(--gold)]/10 blur-3xl" />
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            23 שיעורים · עברית · Mobile-first
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-foreground leading-tight mb-6"
          >
            בנה מותג שמוכר
            <span className="block text-primary">דרך WhatsApp Status</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed"
          >
            90% מהאנשים ברשימת האנשי קשר שלך יראו את הסטטוס שלך עוד היום.
            מה הם יראו — ייקבע אם יהפכו ללקוחות, עוקבים, או ישכחו שאתה קיים.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/login"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold text-base hover:bg-primary/90 active:scale-[0.98] transition-all shadow-lg shadow-primary/25"
            >
              <Zap className="w-4 h-4" />
              מתחיל ללמוד עכשיו
            </Link>
            <a
              href="#courses"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-3.5 rounded-xl font-semibold text-base hover:bg-secondary/80 transition-all"
            >
              מה לומדים?
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 border-y border-border bg-card/50">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
              <div className="text-2xl font-display font-black text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Problem → Solution */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-black text-foreground mb-4">
              הבעיה שרוב האנשים לא מדברים עליה
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              יש לך ידע, שירות, או מוצר שעוזר לאנשים — אבל הם לא יודעים על זה.
              אתה מפרסם, מנסה, ומרגיש שאתה מדבר לחלל.
              זה לא כי אתה לא טוב. זה כי לא לימדו אותך{" "}
              <strong>את הפסיכולוגיה</strong> שמאחורי תוכן שגורם לאנשים לעצור, לקרוא, ולפעול.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary/5 border border-primary/20 rounded-2xl p-6 text-center"
          >
            <p className="text-lg font-medium text-foreground mb-2">
              📱 WhatsApp Status הוא הערוץ עם{" "}
              <span className="text-primary font-bold">Open Rate של 70-90%</span>
            </p>
            <p className="text-muted-foreground">
              לעומת 20% באימייל ו-3% בפוסטים באינסטגרם. האנשים שלך כבר שם.
              השאלה היא — מה אתה עושה עם זה?
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mini-Courses */}
      <section id="courses" className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-display font-black text-foreground mb-3">
              5 מיני-קורסים · 23 שיעורים
            </h2>
            <p className="text-muted-foreground">מסלול לימוד מדורג מהבסיס ועד המכירה</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {miniCourses.map((course, i) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`bg-gradient-to-br ${course.color} border border-border rounded-2xl p-5`}
              >
                <div className="text-3xl mb-3">{course.emoji}</div>
                <h3 className="font-display font-bold text-foreground mb-1">{course.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{course.subtitle}</p>
                <span className="text-xs text-muted-foreground">{course.lessons} שיעורים</span>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-[var(--gold)]/20 to-amber-600/10 border-2 border-[var(--gold)]/40 rounded-2xl p-5"
            >
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="font-display font-bold text-foreground mb-1">Capstone Project</h3>
              <p className="text-sm text-muted-foreground mb-2">קמפיין 7-ימי שלם</p>
              <span className="text-xs text-muted-foreground">שיעור סיכום</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What you&apos;ll achieve */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-black text-foreground mb-8">
              בסוף התוכנית תוכל ל...
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 text-right">
              {[
                "✅ לבנות נוכחות יומיומית בוואטסאפ שמביאה לקוחות",
                "✅ לכתוב הוקים שגורמים לאנשים לעצור ולקרוא",
                "✅ לבנות אמינות ו-authority בלי לבקש",
                "✅ לתכנן קמפיין שיווקי שלם בסטטוס",
                "✅ להשתמש ב-7 מסגרות שיווק מוכחות",
                "✅ למדוד מה עובד ולהשתפר כל שבוע",
              ].map((it, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="bg-card border border-border rounded-xl p-4 text-sm text-foreground font-medium"
                >
                  {it}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gamification preview */}
      <section className="py-16 px-4 bg-primary/5 border-y border-primary/10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl mb-4">🎮</div>
            <h2 className="text-2xl font-display font-black text-foreground mb-3">
              לא עוד קורס שמתעלמים ממנו
            </h2>
            <p className="text-muted-foreground mb-6">
              מערכת XP, badges, streaks, ורמות — ה-Hook Model שלימדנו בשיעור 13, ממומש בתוך הפלטפורמה עצמה.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["⚡ XP ורמות", "🔥 Streaks", "🏅 Badges", "📊 Progress tracking", "🎯 Action items"].map((tag) => (
                <span key={tag} className="bg-card border border-border rounded-full px-4 py-1.5 text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto text-center"
        >
          <h2 className="text-3xl font-display font-black text-foreground mb-4">
            מתחיל עכשיו?
          </h2>
          <p className="text-muted-foreground mb-8">
            השיעור הראשון לוקח 10 דקות. האצבע של מישהו יעצור בסטטוס שלך כבר הלילה.
          </p>
          <Link
            href="/login"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/25 active:scale-[0.98]"
          >
            <Zap className="w-5 h-5" />
            כניסה לפלטפורמה
          </Link>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Users className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">הצטרף ולמד בקצב שלך</span>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-6 px-4 text-center text-sm text-muted-foreground">
        <p>Status Learn · בנה מותג אישי דרך WhatsApp Status</p>
      </footer>
    </div>
  );
}
