import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://status-learn-nerya-s-projects.vercel.app";

export const metadata: Metadata = {
  title: "כל הקורסים והשיעורים",
  description:
    "11 קורסים ו-37 שיעורים לבניית מותג אישי חזק דרך WhatsApp Status. Foundations, Hooks, Trust, Conversion, Storytelling, ועוד — הכל בעברית.",
  alternates: {
    canonical: `${BASE_URL}/courses`,
  },
  openGraph: {
    title: "כל הקורסים | Status Learn",
    description:
      "11 קורסים · 37 שיעורים · עברית · Mobile-first. בנה מותג שמוכר דרך WhatsApp Status.",
    url: `${BASE_URL}/courses`,
    type: "website",
    locale: "he_IL",
  },
};

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
