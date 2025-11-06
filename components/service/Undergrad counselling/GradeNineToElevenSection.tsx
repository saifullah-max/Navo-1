"use client";

import { useState } from "react";
import { ChevronUp, ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

interface Step {
  id: number;
  badge: string;
  title: string;
  heading: string;
  description: string;
  hasButton?: boolean;
  listItems?: string[];
}

export default function GradeSevenToEigthSection(): JSX.Element {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const steps: Step[] = [
    {
      id: 1,
      badge: "Step 01",
      heading: "Profile & Academic Building",
      title: "Profile & Academic Building",
      description: "",
      listItems: [
        "Focus on top academic grades (IGCSE/O-Levels/9th–10th coursework).",
        "Explore academic interests and possible university majors.",
        "Deepen involvement in 2–3 meaningful extracurriculars.",
        "Begin taking leadership roles in clubs or community projects.",
        "Build an early portfolio (projects, awards, blogs, competitions).",
        "Plan summer schools, internships, Olympiads, or research opportunities.",
        "Writing Style Preparation for Global Universities: Introduce differences between U.S. storytelling essays, U.K. subject-focused personal statements, and structured formats used in Canada, Europe, and Asia.",
        "Help students refine journaling and documentation to convert observations and reflections into structured content — useful for future essays and applications.",
      ],
      hasButton: true,
    },
    {
      id: 2,
      badge: "Step 02",
      heading: "Navo Counselling Support",
      title: "Navo Counselling Support",
      description: "",
      listItems: [
        "Map academic and extracurricular paths to top university expectations.",
        "Guide subject selection (IB, A-Level, AP) based on future degrees.",
        "Provide feedback on projects, competitions, and research outreach.",
      ],
    },
  ];

  const toggleStep = (index: number): void => {
    if (expandedStep === index) {
      setExpandedStep(null);
    } else {
      setExpandedStep(index);
    }
  };

  const allCollapsed = expandedStep === null;

  const expandAll = (): void => setExpandedStep(-1); // expand all
  const collapseAll = (): void => setExpandedStep(null); // collapse all

  return (
    <div id="9to11" className="bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl uppercase font-bold text-blue-900 mb-4 tracking-tight">
            9th-11th Graders
          </h1>
        </div>

        {/* Collapse / Expand All */}
        <div className="flex justify-end mb-6">
          {allCollapsed ? (
            <button
              onClick={expandAll}
              className="flex items-center gap-2 text-blue-900 font-bold text-sm hover:text-blue-700 transition-colors uppercase"
            >
              EXPAND ALL
              <div>
                <ChevronUp size={20} strokeWidth={3} />
                <ChevronDown size={20} strokeWidth={3} />
              </div>
            </button>
          ) : (
            <button
              onClick={collapseAll}
              className="flex items-center gap-2 text-blue-900 font-bold text-sm hover:text-blue-700 transition-colors uppercase"
            >
              COLLAPSE ALL
              <div>
                <ChevronDown size={20} strokeWidth={3} />
                <ChevronUp size={20} strokeWidth={3} />
              </div>
            </button>
          )}
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step, index) => {
            const isExpanded = expandedStep === index || expandedStep === -1; // -1 = expand all

            return (
              <div
                key={step.id}
                className="overflow-hidden border-t border-gray-300"
              >
                <div className="relative">
                  {/* Toggle button */}
                  <button
                    onClick={() => toggleStep(index)}
                    className="absolute top-6 right-6 w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 text-white rounded-full flex items-center justify-center transition-colors z-10"
                    aria-label={
                      isExpanded ? "Collapse section" : "Expand section"
                    }
                  >
                    <ChevronUp
                      size={24}
                      strokeWidth={3}
                      className={`transform transition-transform duration-300 ${
                        isExpanded ? "" : "rotate-180"
                      }`}
                    />
                  </button>

                  <div className="p-6 pr-20">
                    {/* Badge */}
                    <span className="inline-block bg-gradient-to-r from-[#635AD9] to-[#FF4848] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase">
                      {step.badge}
                    </span>

                    {/* Heading / Title Logic */}
                    <h2 className="md:text-2xl text-md font-bold text-[#07306A] mb-3">
                      {isExpanded ? step.title : step.heading}
                    </h2>

                    {/* Expandable Content */}
                    {isExpanded && (
                      <div className="mt-4">
                        <p className="text-gray-800 leading-relaxed mb-4">
                          {step.description}
                        </p>

                        {step.listItems && (
                          <ul className="space-y-3 mb-6">
                            {step.listItems.map((item, itemIndex) => (
                              <li
                                key={itemIndex}
                                className="flex items-start text-gray-800"
                              >
                                <span className="text-gray-800 mr-3 mt-1.5 flex-shrink-0">
                                  •
                                </span>
                                <span className="leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {step.hasButton && (
                          <Link
                            href="/connect"
                            className="bg-[#07306A] hover:bg-blue-800 text-[#D7FD34] font-bold px-4 py-2 rounded-full inline-flex items-center gap-8 transition-colors uppercase text-sm"
                          >
                            CONNECT
                            <div className="w-6 h-6 bg-[#D7FD34] rounded-full flex items-center justify-center">
                              <ArrowRight
                                size={16}
                                className="text-blue-900"
                                strokeWidth={3}
                              />
                            </div>
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
