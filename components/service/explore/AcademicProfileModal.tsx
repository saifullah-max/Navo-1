"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { useState } from "react";

type AcademicProfileModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const curriculumOptions = ["A-Levels", "IB Diploma", "US High School"] as const;
const testOptions = ["SAT", "ACT", "Test-Optional"] as const;

export default function AcademicProfileModal({ open, onOpenChange }: AcademicProfileModalProps) {
  const [curriculum, setCurriculum] = useState<(typeof curriculumOptions)[number]>("A-Levels");
  const [testType, setTestType] = useState<(typeof testOptions)[number]>("SAT");
  const [grades, setGrades] = useState("A*A*A");
  const [score, setScore] = useState("");
  const [isInternational, setIsInternational] = useState(true);
  const [needsAid, setNeedsAid] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-[2px]" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[min(92vw,760px)] max-h-[90vh] -translate-x-1/2 -translate-y-1/2 overflow-y-auto overscroll-contain rounded-2xl bg-white px-6 py-6 shadow-2xl outline-none sm:px-8 sm:py-8">
          <Dialog.Close className="absolute right-4 top-4 rounded-full p-2 text-[#5a6f8f] transition hover:bg-slate-100 hover:text-[#163b55] focus:outline-none focus:ring-2 focus:ring-orange-300">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Dialog.Close>

          <div className="space-y-8">
            <div>
              <Dialog.Title className="pr-10 text-3xl font-semibold text-[#163b55] sm:text-4xl font-serif">
                Build Your Academic Profile
              </Dialog.Title>
            </div>

            <div className="">
              <p className="text-base font-semibold text-[#163b55]">Curriculum</p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {curriculumOptions.map((option) => {
                  const active = curriculum === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setCurriculum(option)}
                      className={`rounded-2xl border px-2 py-3 text-base font-medium transition ${active ? "border-orange-400 bg-orange-50 text-[#163b55]" : "border-slate-200 bg-slate-50 text-slate-500 hover:border-slate-300 hover:bg-slate-100"}`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-base font-semibold text-[#163b55]">Predicted/Final Grades (e.g. A*A*A)</p>
              <input
                value={grades}
                onChange={(event) => setGrades(event.target.value)}
                className="h-10 w-full rounded-2xl border-2 border-orange-400 bg-slate-50 px-5 text-lg text-[#163b55] outline-none placeholder:text-slate-400 focus:border-orange-500"
                placeholder="A*A*A"
              />
            </div>

            <div className="space-y-4">
              <p className="text-base font-semibold text-[#163b55]">Standardized Test</p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {testOptions.map((option) => {
                  const active = testType === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setTestType(option)}
                      className={`rounded-2xl border px-2 py-3 text-base font-medium transition ${active ? "border-orange-400 bg-orange-50 text-[#163b55]" : "border-slate-200 bg-slate-50 text-slate-500 hover:border-slate-300 hover:bg-slate-100"}`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              <input
                value={score}
                onChange={(event) => setScore(event.target.value)}
                className="h-10 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 text-lg text-[#163b55] outline-none placeholder:text-slate-400 focus:border-orange-400"
                placeholder="e.g. 1520"
              />
            </div>

            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <span className="text-base font-semibold text-[#163b55]">International Student?</span>
                <button
                  type="button"
                  aria-checked={isInternational}
                  role="switch"
                  onClick={() => setIsInternational((value) => !value)}
                  className={`relative h-9 w-16 rounded-full transition ${isInternational ? "bg-[#173a63]" : "bg-slate-200"}`}
                >
                  <span className={`absolute top-1 h-7 w-7 rounded-full bg-white shadow transition ${isInternational ? "left-8" : "left-1"}`} />
                </button>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-base font-semibold text-[#163b55]">Need Financial Aid?</span>
                <button
                  type="button"
                  aria-checked={needsAid}
                  role="switch"
                  onClick={() => setNeedsAid((value) => !value)}
                  className={`relative h-9 w-16 rounded-full transition ${needsAid ? "bg-[#173a63]" : "bg-slate-200"}`}
                >
                  <span className={`absolute top-1 h-7 w-7 rounded-full bg-white shadow transition ${needsAid ? "left-8" : "left-1"}`} />
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="h-14 w-full rounded-xl bg-orange-500 text-lg font-medium text-[#163b55] transition hover:bg-orange-400"
            >
              Apply Profile
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
