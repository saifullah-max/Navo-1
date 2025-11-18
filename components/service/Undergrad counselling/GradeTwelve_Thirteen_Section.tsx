"use client";

import { useState } from "react";
import { ChevronUp, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Step {
  id: number;
  badge: string;
  title: string;
  heading: string;
  description?: string;
  subSections?: {
    title: string;
    text: string;
  }[];
  hasButton?: boolean;
}

export default function GradeTwelveToThirteenSection(): JSX.Element {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const renderParagraphs = (text: string) =>
    text.split(/\n\s*\n/).map((para, i) => (
      <p
        key={i}
        className="text-gray-800 text-[15px] md:text-base !leading-[1.25rem] mb-4"
      >
        {para}
      </p>
    ));

  const steps: Step[] = [
    {
      id: 1,
      badge: "Step 01",
      heading: "Applications and Final Portfolio",
      title: "Applications and Final Portfolio",
      subSections: [
        {
          title: "Application Strategy & University List Building",
          text: `
Crafting a successful application begins with clarity and direction. We help students transform years of academic performance, extracurricular involvement, and personal growth into a focused admissions strategy. This includes creating a balanced university list — Reach, Match, and Safety — across the US, UK, Canada, Europe, and other global regions.

Each recommendation is data-driven and tailored to the student’s academic strengths, major preferences, financial considerations, and long-term goals. Whether targeting highly selective pathways such as Oxbridge, BS/MD programs, Liberal Arts Colleges, or Canadian Co-op universities, we ensure students understand exactly how to position themselves for success.
          `,
        },
        {
          title: "Essays, Personal Statements & Portfolio Development",
          text: `
We guide students through every written component of the application, helping them articulate their story with clarity, authenticity, and intellectual depth. This includes the Common App Personal Essay, UCAS Personal Statement, Canadian and European supplemental essays, program-specific questions, and short-answer formats.

Through structured brainstorming, narrative planning, and multiple editing rounds, we help students produce writing that showcases character, academic curiosity, and unique perspective.

In parallel, we refine extracurricular experiences into polished resumes, portfolios, and activity lists. We also support students in selecting recommenders and preparing structured content points that enable teachers to write powerful, personalized letters.
          `,
        },
        {
          title: "Full Application Execution, Interviews & Submission Support",
          text: `
Once the strategy and narrative are established, we guide students through the complete application execution process. This includes testing guidance only when required (SAT, ACT, IELTS, TOEFL) and helping students test strategically rather than unnecessarily.

We prepare students for all major interview formats, from Oxbridge-style academic interviews to US alumni interviews and scholarship assessments.

Throughout the process, we manage deadlines, review every document, assist with scholarship and financial aid forms, and ensure every submission is polished, cohesive, and competitive.
          `,
        },
      ],
    },

    {
      id: 2,
      badge: "Step 02",
      heading: "Post Application Submissions",
      title: "Post Application Submissions",
      subSections: [
        {
          title: "Waitlist, Deferral & Conversion Strategy",
          text: `
Our support does not stop at submission. If a student receives a waitlist or deferral decision, we build a proactive and personalized strategy to maximize admission chances.

This includes crafting compelling Letters of Continued Interest (LOCIs), identifying new academic or extracurricular updates worth communicating, and advising on the precise timing and tone of outreach.

We help students strengthen their positioning without overstepping boundaries or violating university policies. Our goal is to turn waitlists and deferrals into acceptances whenever possible — with the same level of precision and strategy we apply to the initial application.
          `,
        },
        {
          title: "Visa Guidance & Pre-Departure Support",
          text: `
Securing admission is only the first step; we ensure students are fully prepared for international study. Our guidance covers visa applications, I-20 or CAS letter issuance, and all essential pre-departure paperwork.

We provide step-by-step instructions, review documentation, and advise on timelines to ensure a smooth process. Beyond paperwork, we offer practical pre-departure support, including guidance on accommodation, course registration, travel planning, and initial integration into university life — giving students and parents confidence and peace of mind before their journey begins.
          `,
        },
      ],
    },
  ];

  const toggleStep = (index: number): void => {
    setExpandedStep((prev) => (prev === index ? null : index));
  };

  return (
    <div id="12to13" className="bg-gray-100 pt-12 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-1 tracking-tight uppercase">
            Grades 12th–13th
          </h1>
          <p className="font-['Poppins'] text-md text-gray-800 leading-snug mt-2 mb-6 text-center max-w-xl mx-auto">
            For families who first come to us when their children are seniors before the Early Action/Early Decision deadline, the path forward is as follows:
          </p>
        </div>

        {/* Steps */}
        <div className="border-b border-gray-900">
          {steps.map((step, index) => {
            const isExpanded = expandedStep === index;

            return (
              <div
                key={step.id}
                className="overflow-hidden border-t border-gray-900 cursor-pointer"
                onClick={() => toggleStep(index)}
              >
                <div className="relative py-1.5 md:pr-2">

                  {/* Toggle button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleStep(index);
                    }}
                    className="absolute top-6 right-0 w-8 h-8 bg-[#03336D] text-white rounded-full flex items-center justify-center transition-colors z-10"
                    aria-label={isExpanded ? "Collapse section" : "Expand section"}
                  >
                    <ChevronUp
                      size={24}
                      strokeWidth={3}
                      className={`transform transition-transform duration-300 ${isExpanded ? "" : "rotate-180"
                        }`}
                    />
                  </button>

                  {/* Badge */}
                  <span className="inline-block text-black text-xs font-bold rounded-full mb-2 uppercase">
                    {step.badge}
                  </span>

                  {/* Heading */}
                  <h2 className="md:text-2xl text-md font-bold text-[#07306A] mb-0">
                    {isExpanded
                      ? step.title.toUpperCase()
                      : step.heading.toUpperCase()}
                  </h2>

                  {/* Content */}
                  {isExpanded && (
                    <div className="mt-4 flex flex-col md:flex-row md:items-start w-full">

                      <div className="hidden md:block md:w-1/2"></div>

                      <div className="w-full md:w-1/2 md:pl-4 md:pr-0 md:mr-[-2rem]">

                        {step.description && renderParagraphs(step.description)}

                        {step.subSections &&
                          step.subSections.map((sub, i) => (
                            <div key={i} className="mb-6">
                              <h3 className="font-semibold text-[#07306A] text-2xl mb-2">
                                {sub.title}
                              </h3>
                              {renderParagraphs(sub.text)}
                            </div>
                          ))}

                        {step.hasButton && (
                          <Link
                            href="/connect"
                            className="bg-[#07306A] hover:bg-blue-800 text-[#D7FD34] font-bold px-4 py-2 rounded-full inline-flex items-center gap-8 transition-colors uppercase text-sm"
                          >
                            CONNECT
                            <div className="w-6 h-6 bg-[#D7FD34] rounded-full flex items-center justify-center">
                              <ArrowRight size={16} className="text-blue-900" strokeWidth={3} />
                            </div>
                          </Link>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
