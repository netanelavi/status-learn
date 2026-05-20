import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LessonView from "./lesson-view";
import { getAllLessonsStatic, getLessonBySlugStatic } from "@/lib/content/static-lessons";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://status-learn-nerya-s-projects.vercel.app";

export async function generateStaticParams() {
  return getAllLessonsStatic().map((lesson) => ({ slug: lesson.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const lesson = getLessonBySlugStatic(slug);

  if (!lesson) {
    return { title: "שיעור לא נמצא" };
  }

  const description = lesson.whyItMatters
    ? lesson.whyItMatters.slice(0, 155)
    : `למד ${lesson.title} — חלק מקורס שיווק WhatsApp Status המקיף בעברית.`;

  const url = `${BASE_URL}/lesson/${lesson.slug}`;

  const lessonJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: lesson.title,
    description,
    url,
    inLanguage: "he-IL",
    provider: {
      "@type": "Organization",
      name: "Status Learn",
      url: BASE_URL,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      inLanguage: "he-IL",
    },
    timeRequired: lesson.duration ? `PT${lesson.duration.replace(/[^0-9]/g, "")}M` : undefined,
  };

  return {
    title: lesson.title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${lesson.title} | Status Learn`,
      description,
      url,
      type: "article",
      locale: "he_IL",
    },
    twitter: {
      card: "summary",
      title: `${lesson.title} | Status Learn`,
      description,
    },
    other: {
      "application/ld+json": JSON.stringify(lessonJsonLd),
    },
  };
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lesson = getLessonBySlugStatic(slug);

  if (!lesson) {
    notFound();
  }

  const allLessons = getAllLessonsStatic();
  const lessonIndex = allLessons.findIndex((l) => l.slug === slug);
  const nextLesson = allLessons[lessonIndex + 1] ?? null;

  return <LessonView lesson={lesson} nextLesson={nextLesson} totalLessons={allLessons.length} lessonIndex={lessonIndex} />;
}
