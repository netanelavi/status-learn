/**
 * static-lessons.ts
 * Aggregates all lesson content files and exposes helpers used by lesson pages.
 * Used by: app/lesson/[slug]/page.tsx, lesson-view.tsx
 */

import type { Lesson } from "./types";

// ── Course 1: Foundations ──────────────────────────────────────────────────
import whyStatus from "@/content/courses/01-foundations/01-why-status";
import jtbd from "@/content/courses/01-foundations/02-jtbd";
import brandIdentity from "@/content/courses/01-foundations/03-brand-identity";

// ── Course 2: Hooks & Attention ────────────────────────────────────────────
import successFramework from "@/content/courses/02-hooks-attention/01-success-framework";
import openingHooks from "@/content/courses/02-hooks-attention/02-opening-hooks";
import visualFirst from "@/content/courses/02-hooks-attention/03-visual-first";
import steppsFramework from "@/content/courses/02-hooks-attention/04-stepps-framework";
import hooksWorkshop from "@/content/courses/02-hooks-attention/05-hooks-workshop";

// ── Course 3: Trust & Credibility ──────────────────────────────────────────
import authoritySocialProof from "@/content/courses/03-trust-credibility/01-authority-social-proof";
import clientStories from "@/content/courses/03-trust-credibility/02-client-stories";
import reciprocity from "@/content/courses/03-trust-credibility/03-reciprocity";
import behindTheScenes from "@/content/courses/03-trust-credibility/04-behind-the-scenes";

// ── Course 4: Engagement & Following ──────────────────────────────────────
import hookModelStatus from "@/content/courses/04-engagement-following/01-hook-model-status";
import variableRewards from "@/content/courses/04-engagement-following/02-variable-rewards";
import communityBuilding from "@/content/courses/04-engagement-following/03-community-building";
import dailyTriggers from "@/content/courses/04-engagement-following/04-daily-triggers";
import contactListGrowth from "@/content/courses/04-engagement-following/05-contact-list-growth";

// ── Course 5: Conversion ───────────────────────────────────────────────────
import effectiveCta from "@/content/courses/05-conversion/01-effective-cta";
import irresistibleOffer from "@/content/courses/05-conversion/02-irresistible-offer";
import statusCopywriting from "@/content/courses/05-conversion/03-status-copywriting";
import ethicalScarcity from "@/content/courses/05-conversion/04-ethical-scarcity";
import measuringOptimizing from "@/content/courses/05-conversion/05-measuring-optimizing";

// ── Capstone ───────────────────────────────────────────────────────────────
import capstone from "@/content/courses/06-capstone/01-capstone";

// ── Course 7: Storytelling ─────────────────────────────────────────────────
import hookAnatomy from "@/content/courses/07-storytelling/01-hook-anatomy";
import brandStory from "@/content/courses/07-storytelling/02-brand-story";
import visualIdentity from "@/content/courses/07-storytelling/03-visual-identity";

// ── Course 8: Content System ───────────────────────────────────────────────
import contentPillars from "@/content/courses/08-content-system/01-content-pillars";
import batchCreation from "@/content/courses/08-content-system/02-batch-creation";
import repurposing from "@/content/courses/08-content-system/03-repurposing";

// ── Course 9: Monetization ─────────────────────────────────────────────────
import pricingValue from "@/content/courses/09-monetization/01-pricing-value";
import launchSequence from "@/content/courses/09-monetization/02-launch-sequence";
import dmConversion from "@/content/courses/09-monetization/03-dm-conversion";

// ── Course 10: Voice & Authenticity ───────────────────────────────────────
import authenticVoice from "@/content/courses/10-voice-authenticity/01-authentic-voice";
import antiGeneric from "@/content/courses/10-voice-authenticity/02-anti-generic";
import opinionContent from "@/content/courses/10-voice-authenticity/03-opinion-content";

// ---------------------------------------------------------------------------
// Master list — order determines lesson sequence
// ---------------------------------------------------------------------------
const ALL_LESSONS: Lesson[] = [
  // Foundations
  whyStatus,
  jtbd,
  brandIdentity,
  // Hooks & Attention
  successFramework,
  openingHooks,
  visualFirst,
  steppsFramework,
  hooksWorkshop,
  // Trust & Credibility
  authoritySocialProof,
  clientStories,
  reciprocity,
  behindTheScenes,
  // Engagement & Following
  hookModelStatus,
  variableRewards,
  communityBuilding,
  dailyTriggers,
  contactListGrowth,
  // Conversion
  effectiveCta,
  irresistibleOffer,
  statusCopywriting,
  ethicalScarcity,
  measuringOptimizing,
  // Capstone
  capstone,
  // Storytelling
  hookAnatomy,
  brandStory,
  visualIdentity,
  // Content System
  contentPillars,
  batchCreation,
  repurposing,
  // Monetization
  pricingValue,
  launchSequence,
  dmConversion,
  // Voice & Authenticity
  authenticVoice,
  antiGeneric,
  opinionContent,
];

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

export function getAllLessonsStatic(): Lesson[] {
  return ALL_LESSONS;
}

export function getLessonBySlugStatic(slug: string): Lesson | undefined {
  return ALL_LESSONS.find((l) => l.slug === slug);
}
