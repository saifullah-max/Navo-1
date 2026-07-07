import {
  academicDatabase,
  type AcademicEntry,
  type Citizenship,
  type GradeTier,
  type SatBand,
} from "@/components/data/academicDatabase";

export interface ProfileForMatch {
  citizenship: Citizenship;
  satBand: SatBand | null;
  gradeTier: GradeTier;
  needsFinancialAid: boolean;
}

export type MatchedOn = "both" | "sat" | "grades";
export type AidFit = "good" | "limited" | "unlikely";

export interface MatchedEntry extends AcademicEntry {
  matchedOn: MatchedOn;
  aidFit: AidFit;
  score: number;
}

const SAT_ORDER: SatBand[] = ["1550-1600", "1500-1550", "1450-1500", "1400-1450", "1300-1400", "1200-1300"];
const GRADE_ORDER: GradeTier[] = ["A*", "A", "B", "C"];

export function satScoreToBand(rawScore: string | number | undefined): SatBand | null {
  if (rawScore === undefined || rawScore === null) return null;
  const numeric = typeof rawScore === "number" ? rawScore : Number.parseFloat(String(rawScore).replace(/[^\d.]/g, ""));
  if (!Number.isFinite(numeric) || numeric <= 0) return null;
  if (numeric >= 1550) return "1550-1600";
  if (numeric >= 1500) return "1500-1550";
  if (numeric >= 1450) return "1450-1500";
  if (numeric >= 1400) return "1400-1450";
  if (numeric >= 1300) return "1300-1400";
  if (numeric >= 1200) return "1200-1300";
  return null;
}

export function actScoreToSatBand(rawScore: string | number | undefined): SatBand | null {
  if (rawScore === undefined || rawScore === null) return null;
  const numeric = typeof rawScore === "number" ? rawScore : Number.parseFloat(String(rawScore).replace(/[^\d.]/g, ""));
  if (!Number.isFinite(numeric) || numeric <= 0) return null;
  return satScoreToBand(Math.round(numeric * 42.5));
}

export function gradesToTier(input: string | undefined, curriculum: "a-levels" | "ib" | "american" = "a-levels"): GradeTier {
  const raw = (input ?? "").trim();
  if (!raw) return "B";

  if (curriculum === "ib") {
    const match = raw.match(/(\d{2})/);
    const score = match ? Number.parseInt(match[1], 10) : NaN;
    if (Number.isFinite(score)) {
      if (score >= 42) return "A*";
      if (score >= 38) return "A";
      if (score >= 32) return "B";
      return "C";
    }
    return "B";
  }

  if (curriculum === "american") {
    const gpa = Number.parseFloat(raw.replace(/[^0-9.]/g, ""));
    if (Number.isFinite(gpa)) {
      if (gpa >= 3.9) return "A*";
      if (gpa >= 3.7) return "A";
      if (gpa >= 3.3) return "B";
      return "C";
    }
    return "B";
  }

  // A-levels: parse letters
  const upper = raw.toUpperCase();
  const stars = (upper.match(/A\*/g) ?? []).length;
  const withoutStars = upper.replace(/A\*/g, "");
  const straightAs = (withoutStars.match(/A/g) ?? []).length;
  const bs = (withoutStars.match(/B/g) ?? []).length;
  const cs = (withoutStars.match(/C/g) ?? []).length;

  if (stars >= 2) return "A*";
  if (stars >= 1 || straightAs >= 2) return "A";
  if (straightAs >= 1 || bs >= 2) return "B";
  if (bs >= 1 || cs >= 1) return "C";
  return "B";
}

function evaluateAid(entry: AcademicEntry, needsAid: boolean): AidFit {
  if (!needsAid) return "good";
  const maxAid = entry.maxAid.toUpperCase();
  const finAid = entry.financialAid.toUpperCase();

  if (finAid.includes("NO FINANCIAL AID") || maxAid === "NA") return "unlikely";
  if (
    maxAid.includes("100%") ||
    maxAid.includes("FULL MERIT") ||
    maxAid === "NEED BASED" ||
    maxAid.includes("FINANCIAL AID")
  ) {
    return "good";
  }
  if (maxAid.includes("LIMITED")) return "limited";
  return "limited";
}

function poolFor(citizenship: Citizenship): AcademicEntry[] {
  return academicDatabase.filter((entry) => entry.citizenship === citizenship);
}

function filterByRegion(entries: AcademicEntry[], region: string): AcademicEntry[] {
  if (region === "all") return entries;
  return entries.filter((entry) => entry.region === region);
}

function classifyMatch(entry: AcademicEntry, satBand: SatBand | null, gradeTier: GradeTier): MatchedOn | null {
  const satMatch = satBand ? entry.sat.includes(satBand) : entry.sat.length === 0;
  const gradesMatch = entry.grades.includes(gradeTier);
  if (satMatch && gradesMatch) return "both";
  if (satMatch) return "sat";
  if (gradesMatch) return "grades";
  return null;
}

export function recommendFromDatabase(
  profile: ProfileForMatch,
  limit = 5,
  region: string = "all"
): MatchedEntry[] {
  const pool = filterByRegion(poolFor(profile.citizenship), region);

  const scored: MatchedEntry[] = [];
  for (const entry of pool) {
    const matchedOn = classifyMatch(entry, profile.satBand, profile.gradeTier);
    if (!matchedOn) continue;

    let score = 0;
    if (matchedOn === "both") score += 100;
    else if (matchedOn === "sat") score += 60;
    else score += 55;

    const satIdx = profile.satBand ? SAT_ORDER.indexOf(profile.satBand) : -1;
    if (satIdx >= 0 && entry.sat.includes(profile.satBand!)) {
      score += Math.max(0, 20 - satIdx * 3);
    }
    const gradeIdx = GRADE_ORDER.indexOf(profile.gradeTier);
    if (entry.grades.includes(profile.gradeTier)) {
      score += Math.max(0, 15 - gradeIdx * 4);
    }

    const aidFit = evaluateAid(entry, profile.needsFinancialAid);
    if (profile.needsFinancialAid) {
      if (aidFit === "good") score += 12;
      else if (aidFit === "limited") score += 4;
      else score -= 5;
    }

    scored.push({ ...entry, matchedOn, aidFit, score });
  }

  scored.sort((a, b) => b.score - a.score);

  const seen = new Set<string>();
  const out: MatchedEntry[] = [];
  for (const item of scored) {
    const key = `${item.university}|${item.region}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(item);
    if (out.length >= limit) break;
  }
  return out;
}

export function searchDatabase(
  citizenship: Citizenship,
  query: string,
  region: string = "all"
): AcademicEntry[] {
  const q = query.trim().toLowerCase();
  const pool = filterByRegion(poolFor(citizenship), region);
  if (!q) return pool.slice(0, 20);
  const filtered = pool.filter((entry) => entry.university.toLowerCase().includes(q));
  const seen = new Set<string>();
  const out: AcademicEntry[] = [];
  for (const entry of filtered) {
    if (seen.has(entry.university)) continue;
    seen.add(entry.university);
    out.push(entry);
    if (out.length >= 12) break;
  }
  return out;
}
