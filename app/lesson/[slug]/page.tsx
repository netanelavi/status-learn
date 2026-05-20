import { notFound } from "next/navigation";
import LessonView from "./lesson-view";
import { getAllLessonsStatic, getLessonBySlugStatic } from "@/lib/content/static-lessons";

export async function generateStaticParams() {
  return getAllLessonsStatic().map((lesson) => ({ slug: lesson.slug }));
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

  // Determine index in all lessons
  const allLessons = getAllLessonsStatic();
  const lessonIndex = allLessons.findIndex((l) => l.slug === slug);
  const nextLesson = allLessons[lessonIndex + 1] ?? null;

  return <LessonView lesson={lesson} nextLesson={nextLesson} totalLessons={allLessons.length} lessonIndex={lessonIndex} />;
}
