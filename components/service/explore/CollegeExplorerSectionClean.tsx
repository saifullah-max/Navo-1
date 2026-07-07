"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, MapPin, Plus, ShieldAlert, ShieldCheck, ShieldX } from "lucide-react";
import AcademicProfileModal, { type StudentProfile } from "./AcademicProfileModal";
import { academicDatabase, type AcademicEntry } from "../../data/academicDatabase";
import {
  actScoreToSatBand,
  gradesToTier,
  recommendFromDatabase,
  satScoreToBand,
  searchDatabase,
  type MatchedEntry,
} from "@/lib/academicMatcher";

const REGION_ORDER = ["US", "UK", "Europe", "Canada", "Asia"];

const matchChipStyle: Record<MatchedEntry["matchedOn"], string> = {
  both: "bg-green-100 text-green-700 border border-green-200",
  sat: "bg-yellowCust/40 text-[#03336d] border border-yellowCust",
  grades: "bg-blue-100 text-blue-700 border border-blue-200",
};

const matchLabel: Record<MatchedEntry["matchedOn"], string> = {
  both: "Strong Match",
  sat: "SAT Match",
  grades: "Grades Match",
};

const aidChip: Record<MatchedEntry["aidFit"], { icon: typeof ShieldCheck; label: string; className: string }> = {
  good: { icon: ShieldCheck, label: "Aid Available", className: "text-green-600" },
  limited: { icon: ShieldAlert, label: "Limited Aid", className: "text-amber-600" },
  unlikely: { icon: ShieldX, label: "Aid Unlikely", className: "text-red-500" },
};

function profileToMatch(profile: StudentProfile) {
  const satBand =
    profile.testType === "sat"
      ? satScoreToBand(profile.testScore)
      : profile.testType === "act"
        ? actScoreToSatBand(profile.testScore)
        : null;
  const gradeTier = gradesToTier(profile.grades, profile.curriculum);
  return {
    citizenship: profile.citizenship,
    satBand,
    gradeTier,
    needsFinancialAid: profile.needsFinancialAid,
  };
}

export default function CollegeExplorerSectionClean() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);
  const [manualEntries, setManualEntries] = useState<AcademicEntry[]>([]);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [profile, setProfile] = useState<StudentProfile | null>(null);
  const [hasAppliedProfile, setHasAppliedProfile] = useState(false);
  const [regionFilter, setRegionFilter] = useState<string>("all");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const searchCitizenship = profile?.citizenship ?? "international";

  const availableRegions = useMemo(() => {
    const set = new Set<string>();
    for (const entry of academicDatabase) {
      if (entry.citizenship === searchCitizenship) set.add(entry.region);
    }
    return Array.from(set).sort((a, b) => REGION_ORDER.indexOf(a) - REGION_ORDER.indexOf(b));
  }, [searchCitizenship]);

  useEffect(() => {
    setRegionFilter("all");
  }, [searchCitizenship]);

  const searchResults = useMemo(() => {
    return searchDatabase(searchCitizenship, query, regionFilter).filter(
      (entry) => !manualEntries.some((m) => m.university === entry.university)
    );
  }, [searchCitizenship, query, regionFilter, manualEntries]);

  const recommended = useMemo<MatchedEntry[]>(() => {
    if (!profile) return [];
    return recommendFromDatabase(profileToMatch(profile), 5, regionFilter);
  }, [profile, regionFilter]);

  function handleSelect(entry: AcademicEntry) {
    setManualEntries((previous) => {
      if (previous.some((item) => item.university === entry.university)) return previous;
      return [...previous, entry];
    });
    setQuery("");
    setSuggestionsOpen(false);
    inputRef.current?.blur();
  }

  function removeEntry(name: string) {
    setManualEntries((previous) => previous.filter((entry) => entry.university !== name));
  }

  function handleProfileSave(nextProfile: StudentProfile) {
    setProfile(nextProfile);
    setHasAppliedProfile(true);
    setManualEntries([]);
  }

  function handleProfileClear() {
    setProfile(null);
    setHasAppliedProfile(false);
    setManualEntries([]);
  }

  return (
    <section className="relative overflow-visible bg-[#e8eff7] px-4 py-24 sm:px-6 lg:px-8 xl:py-28">
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative z-20">
            <h3 className="text-sm md:text-base lg:text-lg xl:text-xl uppercase tracking-normal font-bold text-black mb-4">College Explorer</h3>
            <p className="text-left font-['Poppins'] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#03336d] leading-tight mb-6 tracking-tight uppercase">
              Find Colleges That Fit Your Profile
            </p>
            <p className="font-['Poppins'] text-3xl text-gray-800 !leading-[2.25rem] md:leading-relaxed text-left mb-10">
              Build your academic profile and we&apos;ll match you against our internal database of universities — using the exact SAT bands, grade tiers and aid data each school admits by.
            </p>

            <div className="mt-10 max-w-2xl space-y-6">
              {availableRegions.length > 1 && (
                <div>
                  <label className="block text-base lg:text-lg font-semibold text-[#163b55] mb-2">
                    Filter by country / region
                  </label>
                  <select
                    value={regionFilter}
                    onChange={(event) => setRegionFilter(event.target.value)}
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-base text-[#163b55] shadow-sm outline-none focus:border-blue-400"
                  >
                    <option value="all">All regions</option>
                    {availableRegions.map((region) => (
                      <option key={region} value={region}>{region}</option>
                    ))}
                  </select>
                </div>
              )}

              <div className="relative z-50">
                <span className="absolute inset-y-0 left-4 flex items-center text-slate-400">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <circle cx="11" cy="11" r="7" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </span>
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(event) => {
                    setQuery(event.target.value);
                    setSuggestionsOpen(event.target.value.trim().length > 0);
                  }}
                  onFocus={() => setSuggestionsOpen(query.trim().length > 0)}
                  onBlur={() => window.setTimeout(() => setSuggestionsOpen(false), 150)}
                  placeholder={`Search universities (${searchCitizenship === "us" ? "US" : searchCitizenship === "canadian" ? "Canadian" : "International"} sheet)...`}
                  className="h-16 w-full rounded-xl border border-slate-200 bg-white px-14 text-base text-[#163b55] shadow-sm outline-none placeholder:text-slate-400 focus:border-blue-400"
                  maxLength={100}
                />

                {suggestionsOpen && searchResults.length > 0 && (
                  <ul className="absolute left-0 right-0 top-[calc(100%+8px)] z-[2000] max-h-72 overflow-auto rounded-xl border border-slate-200 bg-white shadow-2xl">
                    {searchResults.map((entry) => (
                      <li
                        key={`${entry.university}-${entry.region}`}
                        onMouseDown={() => handleSelect(entry)}
                        className="flex cursor-pointer items-center justify-between gap-4 px-4 py-3 transition hover:bg-slate-50"
                      >
                        <div>
                          <div className="font-semibold text-[#03336d]">{entry.university}</div>
                          <div className="text-sm text-slate-500">{entry.region}</div>
                        </div>
                        <Plus className="h-5 w-5 shrink-0 text-blue-900" />
                      </li>
                    ))}
                  </ul>
                )}

                {suggestionsOpen && query.trim().length > 0 && searchResults.length === 0 && (
                  <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-[2000] rounded-xl border border-slate-200 bg-white p-4 text-center text-slate-500 shadow-2xl">
                    No universities found matching &quot;{query}&quot;
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={() => setProfileModalOpen(true)}
                className="bg-yellowCust rounded-lg px-8 py-3 uppercase"
              >
                Build My Profile
              </button>
            </div>
          </div>

          <aside className="space-y-4">
            {!hasAppliedProfile && manualEntries.length === 0 ? (
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-center font-['Poppins'] font-bold text-xl sm:text-xl md:text-3xl lg:text-4xl text-[#03336d] leading-tight mb-6 tracking-tight uppercase">
                  Build Your Profile First
                </p>
                <p className="mt-3 text-center text-base sm:text-xl ">
                  Click &quot;Build My Profile&quot; on the left to enter your citizenship, grades, SAT score and aid needs. We&apos;ll instantly match you to universities from our internal database.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {recommended.map((entry) => {
                  const AidIcon = aidChip[entry.aidFit].icon;
                  return (
                    <div
                      key={`rec-${entry.university}-${entry.region}`}
                      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <div className="font-semibold text-[#03336d] text-base md:text-lg xl:text-xl">
                            {entry.university}
                          </div>
                          <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500">
                            <span className="inline-flex items-center gap-1 text-sm xl:text-base">
                              <MapPin className="h-4 w-4" />
                              {entry.region}
                            </span>
                            <span className="text-xs xl:text-sm text-slate-600">{entry.maxAid || entry.financialAid}</span>
                          </div>
                        </div>
                        <span className={`flex-shrink-0 text-[11px] font-bold px-2.5 py-1 rounded-full ${matchChipStyle[entry.matchedOn]}`}>
                          {matchLabel[entry.matchedOn]}
                        </span>
                      </div>
                      {profile?.needsFinancialAid && (
                        <div className={`flex items-center gap-1.5 mt-2 text-xs font-medium ${aidChip[entry.aidFit].className}`}>
                          <AidIcon className="h-3.5 w-3.5" />
                          <span>{aidChip[entry.aidFit].label}</span>
                        </div>
                      )}
                    </div>
                  );
                })}

                {manualEntries.map((entry) => (
                  <div
                    key={`manual-${entry.university}-${entry.region}`}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <div>
                      <div className="font-semibold text-[#03336d] text-base md:text-lg xl:text-xl">{entry.university}</div>
                      <div className="mt-1 flex items-center gap-4 text-sm text-slate-500">
                        <span className="inline-flex items-center gap-1 text-sm xl:text-base">
                          <MapPin className="h-4 w-4" />
                          {entry.region}
                        </span>
                        <span className="text-xs xl:text-sm text-slate-600">{entry.maxAid || entry.financialAid}</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeEntry(entry.university)}
                      className="text-xl leading-none text-slate-400 transition hover:text-slate-600"
                    >
                      ×
                    </button>
                  </div>
                ))}

                {hasAppliedProfile && recommended.length === 0 && manualEntries.length === 0 && (
                  <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm text-center">
                    <p className="text-slate-600 text-sm sm:text-base">
                      No matches found for your profile in the {searchCitizenship === "us" ? "US" : searchCitizenship === "canadian" ? "Canadian" : "International"} database. Try adjusting your grades or SAT score and reapply.
                    </p>
                  </div>
                )}

                {hasAppliedProfile && (
                  <button
                    type="button"
                    onClick={() => router.push("/auth")}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#133a8a] px-6 py-4 text-lg font-semibold text-white transition hover:bg-[#0f2f70]"
                  >
                    Get Your Full Personalized List
                    <ArrowRight className="h-4 w-4" />
                  </button>
                )}
              </div>
            )}
          </aside>
        </div>
      </div>

      <AcademicProfileModal
        open={profileModalOpen}
        onOpenChange={setProfileModalOpen}
        profile={profile}
        onSave={handleProfileSave}
        onClear={handleProfileClear}
      />
    </section>
  );
}
