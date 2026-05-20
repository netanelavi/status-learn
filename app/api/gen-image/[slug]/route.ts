import { NextRequest } from "next/server";
import { experimental_generateImage as generateImage } from "ai";
import { gateway } from "@ai-sdk/gateway";
import { getLessonBySlugStatic } from "@/lib/content/static-lessons";

export const maxDuration = 60;

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const lesson = getLessonBySlugStatic(slug);

  if (!lesson) {
    return Response.json({ error: "not found" }, { status: 404 });
  }

  const { image } = await generateImage({
    model: gateway.imageModel("openai/gpt-image-2"),
    prompt: lesson.heroImagePrompt,
  });

  return Response.json({
    slug,
    mediaType: image.mediaType,
    base64: image.base64,
  });
}
