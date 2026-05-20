import type { MetadataRoute } from "next";
import { getAllLessonsStatic } from "@/lib/content/static-lessons";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://status-learn.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const lessons = getAllLessonsStatic();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/courses`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/login`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  const lessonRoutes: MetadataRoute.Sitemap = lessons.map((lesson) => ({
    url: `${BASE_URL}/lesson/${lesson.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...lessonRoutes];
}
