"use client";

import { useMemo, useRef, useState } from "react";
import AcademicProfileModal from "./AcademicProfileModal";
import { allColleges, College } from "../../data/College";
import { DollarSign, MapPin, Plus, Star } from "lucide-react";

export default function CollegeExplorerSectionClean() {
  const [query, setQuery] = useState("");
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);
  const [selected, setSelected] = useState<College[]>([]);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allColleges;
    return allColleges.filter((college) => college.name.toLowerCase().includes(q));
  }, [query]);

  function handleSelect(college: College) {
    setSelected((previous) => {
      if (previous.some((item) => item.name === college.name)) return previous;
      return [...previous, college];
    });
    setQuery("");
    setSuggestionsOpen(false);
    inputRef.current?.blur();
  }

  function removeCollege(name: string) {
    setSelected((previous) => previous.filter((item) => item.name !== name));
  }

  return (
    <section className="relative overflow-visible bg-[#e8eff7] px-4 py-24 sm:px-6 lg:px-8 xl:py-28">
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative z-20">
            <h3 className="text-sm md:text-base lg:text-lg xl:text-xl uppercase tracking-normal font-bold text-blue-900 mb-4">College Explorer</h3>
            <h1 className="text-4xl lg:text-6xl mt-5 sm:mt-0 font-bold">
              Find Colleges That Fit Your Budget & Goals
            </h1>
            <p className="mt-8 font-poppins font-normal leading-snug text-base md:text-xl lg:text-2xl">
              Build your academic profile and we&apos;ll recommend 5 best-fit universities instantly.
            </p>

            <div className="mt-10 max-w-2xl space-y-6">
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
                  onBlur={() => {
                    window.setTimeout(() => setSuggestionsOpen(false), 150);
                  }}
                  placeholder="Search by university name..."
                  className="h-16 w-full rounded-xl border border-slate-200 bg-white px-14 text-base text-[#163b55] shadow-sm outline-none placeholder:text-slate-400 focus:border-orange-400"
                />

                {suggestionsOpen && filtered.length > 0 && (
                  <ul className="absolute left-0 right-0 top-[calc(100%+8px)] z-[2000] max-h-72 overflow-auto rounded-xl border border-slate-200 bg-white shadow-2xl">
                    {filtered.map((college) => (
                      <li
                        key={college.name}
                        onMouseDown={() => handleSelect(college)}
                        className="flex cursor-pointer items-center justify-between gap-4 px-4 py-3 transition hover:bg-slate-50"
                      >
                        <div>
                          <div className="font-medium text-[#163b55]">{college.name}</div>
                          <div className="text-sm text-slate-500">{college.location}</div>
                        </div>
                        <Plus className="h-5 w-5 shrink-0 text-blue-900" />
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <button
                type="button"
                onClick={() => setProfileModalOpen(true)}
                className="bg-yellowCust rounded-lg px-10 py-3"
              >
                Build My Profile
              </button>
            </div>
          </div>

          <aside className="space-y-4">
            {selected.length === 0 ? (
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <h4 className="mt-4 text-center text-2xl font-semibold text-[#163b55] font-serif">Build Your Profile First</h4>
                <p className="mt-3 text-center text-slate-500">Click "Build My Profile" on the left to enter your grades and test scores.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {selected.map((college) => (
                  <div key={college.name} className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div>
                      <div className="text-lg font-semibold text-[#163b55] font-serif">{college.name}</div>
                      <div className="mt-1 flex items-center text-sm text-slate-500">
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {college.location}
                        </span>

                        <span className="ml-4 inline-flex items-center gap-1 font-medium text-slate-700">
                          <DollarSign className="h-4 w-4" />
                          {college.tuition}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1 text-sm font-medium text-slate-700">
                          <Star
                            className="h-6 w-6 relative "
                            color="#1e3a81"
                            fill="#1e3a81"
                          />
                          {Number(college.rating).toFixed(1)}
                        </span>
                      </div>
                      <span className={`rounded-full px-3 py-1 text-sm font-medium ${college.fit === "Reach" ? "bg-red-100 text-red-600" : college.fit === "Target" ? "bg-orange-100 text-orange-600" : "bg-green-100 text-green-600"}`}>
                        {college.fit}
                      </span>
                      <button type="button" onClick={() => removeCollege(college.name)} className="text-xl leading-none text-slate-400 transition hover:text-slate-600">×</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </aside>
        </div>
      </div>

      <AcademicProfileModal open={profileModalOpen} onOpenChange={setProfileModalOpen} />
    </section>
  );
}