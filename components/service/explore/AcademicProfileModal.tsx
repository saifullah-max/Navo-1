"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

type AcademicProfileModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  profile?: StudentProfile | null;
  onSave?: (profile: StudentProfile) => void;
  onClear?: () => void;
};

export interface StudentProfile {
  curriculum: "a-levels" | "ib" | "american";
  grades: string;
  apCount?: number;
  apScores?: string;
  testType: "sat" | "act" | "none";
  testScore: string;
  isInternational: boolean;
  needsFinancialAid: boolean;
}

const curriculumOptions = [
  { value: "a-levels", label: "A-Levels" },
  { value: "ib", label: "IB Diploma" },
  { value: "american", label: "US High School" },
] as const;

const testOptions = [
  { value: "sat", label: "SAT" },
  { value: "act", label: "ACT" },
  { value: "none", label: "Test-Optional" },
] as const;

const defaultProfile: StudentProfile = {
  curriculum: "a-levels",
  grades: "",
  apCount: undefined,
  apScores: undefined,
  testType: "sat",
  testScore: "",
  isInternational: true,
  needsFinancialAid: false,
};

export default function AcademicProfileModal({ open, onOpenChange, profile, onSave, onClear }: AcademicProfileModalProps) {
  const [form, setForm] = useState<StudentProfile>(profile ?? defaultProfile);

  useEffect(() => {
    if (open) {
      setForm(profile ?? defaultProfile);
    }
  }, [open, profile]);

  const handleOpenChange = (nextOpen: boolean) => {
    if (nextOpen) {
      setForm(profile ?? defaultProfile);
    }
    onOpenChange(nextOpen);
  };

  const handleSubmit = () => {
    onSave?.(form);
    onOpenChange(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-[2px]" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[min(92vw,760px)] max-h-[90vh] -translate-x-1/2 -translate-y-1/2 overflow-y-auto overscroll-contain rounded-2xl bg-white px-6 py-6 shadow-2xl outline-none sm:px-8 sm:py-8">
          <Dialog.Close className="absolute right-4 top-4 rounded-full p-2 text-[#5a6f8f] transition hover:bg-slate-100 hover:text-[#163b55] focus:outline-none focus:ring-2 focus:ring-blue-300">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Dialog.Close>

          <div className="space-y-8">
            <div>
              <Dialog.Title className="text-left font-['Poppins'] font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#03336d] leading-tight mb-6 tracking-tight uppercase">
                Build Your Academic Profile
              </Dialog.Title>
            </div>

            <div className="">
              <p className="text-base lg:text-lg font-semibold text-[#163b55]">Curriculum</p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {curriculumOptions.map((option) => {
                  const active = form.curriculum === option.value;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setForm((current) => ({ ...current, curriculum: option.value }))}
                      className={`rounded-2xl border px-2 py-3 text-base font-medium transition ${active ? " bg-[#03336d] text-white" : "border-slate-200 bg-slate-50 text-black hover:border-slate-300 hover:bg-slate-100"}`}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-base lg:text-lg font-semibold text-[#163b55]">
                {form.curriculum === "a-levels"
                  ? "Predicted/Final Grades (e.g. A*A*A)"
                  : form.curriculum === "ib"
                    ? "Predicted/Final Score (e.g. 42/45)"
                    : "GPA (e.g. 3.9/4.0)"}
              </p>
              <input
                value={form.grades}
                onChange={(event) => setForm((current) => ({ ...current, grades: event.target.value }))}
                className="h-10 w-full rounded-2xl border-2 border-[#03336d]/50 bg-slate-50 px-5 text-lg text-[#163b55] outline-none placeholder:text-slate-400 focus:border-[#03336d]"
                placeholder={form.curriculum === "a-levels" ? "A*A*A" : form.curriculum === "ib" ? "42/45" : "3.9/4.0"}
              />
            </div>

            {form.curriculum === "american" && (
              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="text-base font-semibold text-[#163b55]">Number of AP Courses</p>
                  <input
                    type="number"
                    min={0}
                    max={20}
                    value={form.apCount ?? ""}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        apCount: event.target.value ? Number(event.target.value) : undefined,
                      }))
                    }
                    className="h-10 w-full rounded-2xl border-2 border-[#03336d]/50 bg-slate-50 px-5 text-lg text-[#163b55] outline-none placeholder:text-slate-400 focus:border-[#03336d]"
                    placeholder="e.g. 8"
                  />
                </div>

                {form.apCount && form.apCount > 0 && (
                  <div className="space-y-1">
                    <p className="text-base font-semibold text-[#163b55]">AP Scores</p>
                    <input
                      value={form.apScores ?? ""}
                      onChange={(event) => setForm((current) => ({ ...current, apScores: event.target.value }))}
                      className="h-10 w-full rounded-2xl border-2 border-[#03336d]/50 bg-slate-50 px-5 text-lg text-[#163b55] outline-none placeholder:text-slate-400 focus:border-[#03336d]"
                      placeholder="e.g. 5, 5, 4, 4, 3"
                      maxLength={60}
                    />
                    <p className="text-sm lg:text-base text-muted-foreground">Enter your AP scores separated by commas (scale of 1–5)</p>
                  </div>
                )}
              </div>
            )}

            <div className="space-y-4">
              <p className="text-base lg:text-lg font-semibold text-[#163b55]">Standardized Test</p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {testOptions.map((option) => {
                  const active = form.testType === option.value;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setForm((current) => ({ ...current, testType: option.value }))}
                      className={`rounded-2xl border px-2 py-3 text-base font-medium transition ${active ? "bg-[#03336d] text-white" : "border-slate-200 bg-slate-50 text-black hover:border-slate-300 hover:bg-slate-100"}`}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>

              {form.testType !== "none" && (
                <input
                  value={form.testScore}
                  onChange={(event) => setForm((current) => ({ ...current, testScore: event.target.value }))}
                  className="h-10 w-full rounded-2xl border border-[#03336d]/50 bg-slate-50 px-5 text-lg text-[#163b55] outline-none placeholder:text-slate-400 focus:border-[#03336d]"
                  placeholder={form.testType === "sat" ? "e.g. 1520" : "e.g. 34"}
                />
              )}
            </div>

            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <span className="text-base font-semibold text-[#163b55]">International Student?</span>
                <button
                  type="button"
                  aria-checked={form.isInternational}
                  role="switch"
                  onClick={() => setForm((current) => ({ ...current, isInternational: !current.isInternational }))}
                  className={`relative h-9 w-16 rounded-full transition ${form.isInternational ? "bg-[#173a63]" : "bg-slate-200"}`}
                >
                  <span className={`absolute top-1 h-7 w-7 rounded-full bg-white shadow transition ${form.isInternational ? "left-8" : "left-1"}`} />
                </button>
              </div>

              {form.isInternational && (
                <div className="flex items-center justify-between gap-4">
                  <span className="text-base font-semibold text-[#163b55]">Need Financial Aid?</span>
                  <button
                    type="button"
                    aria-checked={form.needsFinancialAid}
                    role="switch"
                    onClick={() => setForm((current) => ({ ...current, needsFinancialAid: !current.needsFinancialAid }))}
                    className={`relative h-9 w-16 rounded-full transition ${form.needsFinancialAid ? "bg-[#173a63]" : "bg-slate-200"}`}
                  >
                    <span className={`absolute top-1 h-7 w-7 rounded-full bg-white shadow transition ${form.needsFinancialAid ? "left-8" : "left-1"}`} />
                  </button>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className="h-14 w-full rounded-xl bg-yellowCust text-lg font-medium text-[#163b55] transition hover:bg-yellowCust/70"
            >
              Apply Profile
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
