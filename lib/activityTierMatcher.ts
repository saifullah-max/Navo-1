import { ACTIVITY_TIER_DB, type TierEntry } from "@/components/data/activityTierDatabase";

export interface ActivityInput {
  title: string;
  description: string;
  role: string;
  duration: string;
  category: string;
}

export interface TierResult {
  tier: 1 | 2 | 3;
  confidence: "high" | "medium" | "low";
  rationale: string[];
  strengths: string[];
  weaknesses: string[];
  bestMatch?: TierEntry;
}

const CATEGORY_ALIASES: Record<string, string[]> = {
  leadership: ["Leadership"],
  "clubs-societies": ["Clubs/Societies"],
  internships: ["Internships", "Internships/Work Experiences"],
  sports: ["Sports"],
  "honours-awards": ["Honours/Awards", "Awards & Honors"],
  "community-service": ["Community Service & Projects"],
};

function tokenize(input: string): Set<string> {
  return new Set(
    input
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, " ")
      .split(/\s+/)
      .filter((token) => token.length > 2)
  );
}

function similarity(a: string, b: string): number {
  const tokensA = tokenize(a);
  const tokensB = tokenize(b);
  if (!tokensA.size || !tokensB.size) return 0;
  let overlap = 0;
  for (const token of tokensA) if (tokensB.has(token)) overlap += 1;
  return overlap / Math.max(tokensA.size, tokensB.size);
}

function candidatesForCategory(categoryId: string): TierEntry[] {
  const aliases = CATEGORY_ALIASES[categoryId] ?? [];
  if (!aliases.length) return ACTIVITY_TIER_DB;
  return ACTIVITY_TIER_DB.filter((entry) => aliases.includes(entry.category));
}

const TIER_1_HITS = /founder|president|captain|head|national|international|olympiad|imo|ipho|research|published|awarded|represented|elite|professional|varsity|coach|director|chair/i;
const TIER_2_HITS = /member|volunteer|assistant|intern|team|club|society|competed|participated|organized|coordinator/i;

export function matchActivityTier(input: ActivityInput): TierResult {
  const haystack = `${input.title} ${input.role} ${input.description}`.trim();
  const candidates = candidatesForCategory(input.category);

  let bestMatch: TierEntry | undefined;
  let bestScore = 0;
  for (const entry of candidates) {
    const nameScore = similarity(haystack, entry.name);
    const descScore = entry.desc ? similarity(haystack, entry.desc) : 0;
    const combined = nameScore * 0.7 + descScore * 0.3;
    if (combined > bestScore) {
      bestScore = combined;
      bestMatch = entry;
    }
  }

  const rationale: string[] = [];
  const strengths: string[] = [];
  const weaknesses: string[] = [];

  const hasTier1Signal = TIER_1_HITS.test(haystack);
  const hasTier2Signal = TIER_2_HITS.test(haystack);
  const hasNumbers = /\d/.test(haystack);
  const hasScale = /\b(national|international|state|regional|nationwide|global|olympiad|championship)\b/i.test(haystack);
  const hasRecognition = /\b(award|winner|finalist|champion|medal|published|featured|selected)\b/i.test(haystack);

  let tier: 1 | 2 | 3;
  let confidence: TierResult["confidence"];

  if (bestMatch && bestScore >= 0.35) {
    tier = bestMatch.tier;
    confidence = bestScore >= 0.6 ? "high" : "medium";
    rationale.push(
      `Closest benchmark: “${bestMatch.name}” (Tier ${bestMatch.tier}) from the internal dataset.`
    );
  } else if (hasTier1Signal && (hasScale || hasRecognition)) {
    tier = 1;
    confidence = "medium";
    rationale.push("Strong leadership + scale/recognition signals point to Tier 1.");
  } else if (hasTier2Signal || hasNumbers) {
    tier = 2;
    confidence = bestScore >= 0.2 ? "medium" : "low";
    rationale.push("Sustained participation with some measurable involvement — Tier 2 territory.");
  } else {
    tier = 3;
    confidence = "low";
    rationale.push("Limited signals of leadership, scale, or recognition — Tier 3 by default.");
  }

  if (hasScale) strengths.push("Operates at a competitive scale (national / international / state).");
  if (hasRecognition) strengths.push("External recognition (award, championship, publication) validates the work.");
  if (hasNumbers) strengths.push("Includes quantifiable outcomes — reads as concrete impact.");
  if (hasTier1Signal) strengths.push("Signals leadership or founding role rather than passive membership.");

  if (!hasScale) weaknesses.push("No mention of competitive scale — reach ≥ regional/national to move up.");
  if (!hasRecognition) weaknesses.push("No external recognition cited — awards or publications would strengthen the case.");
  if (!hasNumbers) weaknesses.push("Missing metrics — add numbers (people served, funds raised, hours) for credibility.");
  if (!hasTier1Signal && tier > 1) weaknesses.push("Consider stepping into a founding or leadership role to elevate this activity.");

  return { tier, confidence, rationale, strengths, weaknesses, bestMatch };
}
