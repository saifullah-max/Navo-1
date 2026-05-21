"use client";

import { useMemo, useRef, useState } from "react";
import AcademicProfileModal from "./AcademicProfileModal";
import { allColleges, College } from "../../data/College";

export default function CollegeExplorerSection() {
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
    <section className="relative overflow-hidden bg-[#e8eff7] px-4 py-16 sm:px-6 lg:px-8 xl:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">College Explorer</h3>
            <h1 className="mt-4 max-w-xl text-4xl font-semibold leading-tight text-[#163b55] sm:text-5xl lg:text-[4rem] font-serif">
              Find Colleges That Fit Your Budget & Goals
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Build your academic profile and we&apos;ll recommend 5 best-fit universities instantly. Sign up to unlock your full personalized college list with detailed insights.
            </p>

            <div className="mt-10 max-w-2xl space-y-6">
              <div className="relative">
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
                    setSuggestionsOpen(true);
                  }}
                  onFocus={() => setSuggestionsOpen(true)}
                  onBlur={() => {
                    window.setTimeout(() => setSuggestionsOpen(false), 150);
                  }}
                  placeholder="Search by university name..."
                  className="h-16 w-full rounded-xl border border-slate-200 bg-white px-14 text-base text-[#163b55] shadow-sm outline-none placeholder:text-slate-400 focus:border-orange-400"
                />

                {suggestionsOpen && filtered.length > 0 && (
                  <ul className="absolute left-0 right-0 top-[calc(100%+8px)] z-20 max-h-72 overflow-auto rounded-xl border border-slate-200 bg-white shadow-xl">
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
                        <div className="text-sm text-slate-400">{college.tuition}</div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <button
                type="button"
                onClick={() => setProfileModalOpen(true)}
                className="inline-flex items-center gap-3 rounded-lg bg-orange-500 px-6 py-4 text-base font-semibold text-[#163b55] shadow-sm transition hover:bg-orange-400"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L12 18" />
                  <path d="M5 9L12 2 19 9" />
                </svg>
                Build My Profile
              </button>
            </div>
          </div>

          <aside className="space-y-4">
            {selected.length === 0 ? (
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex justify-center text-orange-500">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <path d="M12 2l2 4 4 .5-3 2 1 4-3-2-3 2 1-4-3-2L10 6z" />
                  </svg>
                </div>
                <h4 className="mt-4 text-center text-2xl font-semibold text-[#163b55] font-serif">Build Your Profile First</h4>
                <p className="mt-3 text-center text-slate-500">
                  Click &quot;Build My Profile&quot; on the left to enter your grades and test scores. We&apos;ll instantly recommend 5 universities tailored to you.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {selected.map((college) => (
                  <div key={college.name} className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div>
                      <div className="text-lg font-semibold text-[#163b55] font-serif">{college.name}</div>
                      <div className="mt-1 text-sm text-slate-500">
                        <span>📍 {college.location}</span>
                        <span className="ml-4 font-medium text-slate-700">{college.tuition}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <svg className="h-5 w-5 text-orange-400" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 .587l3.668 7.568L24 9.423l-6 5.848L19.336 24 12 20.201 4.664 24 6 15.271 0 9.423l8.332-1.268z" />
                        </svg>
                        <span className="text-sm font-medium text-slate-700">{Number(college.rating).toFixed(1)}</span>
                      </div>

                      <span className={`rounded-full px-3 py-1 text-sm font-medium ${college.fit === "Reach" ? "bg-red-100 text-red-600" : college.fit === "Target" ? "bg-orange-100 text-orange-600" : "bg-green-100 text-green-600"}`}>
                        {college.fit}
                      </span>

                      <button
                        type="button"
                        onClick={() => removeCollege(college.name)}
                        className="text-xl leading-none text-slate-400 transition hover:text-slate-600"
                        aria-label={`Remove ${college.name}`}
                      >
                        ×
                      </button>
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
