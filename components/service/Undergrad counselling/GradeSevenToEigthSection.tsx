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
      heading: "Foundation & Discovery",
      title: "Foundation & Discovery",
      description: "",
      listItems: [
        "Encourage exploration of interests through hobbies, books, beginner-level online courses, and competitions.",
        "Develop strong reading, writing, and critical thinking habits.",
        "Introduce global opportunities (STEM camps, writing workshops, MUN, coding, arts).",
        "Start basic community engagement or small independent projects.",
        "Encourage journaling or documenting experiences to build future portfolios.",
        "Help students develop skills to map and document daily observations and reflections — forming a foundation of content for high school essays, personal statements, and future university applications.",
        "Introduce global university storytelling styles: light exposure to how students eventually write about themselves — U.S. narrative-style essays, U.K. academic-focused statements, and reflective writing formats.",
      ],
      hasButton: true,
    },
    {
      id: 2,
      badge: "Step 02",
      heading: "High School Selection Guidance",
      title: "High School Selection Guidance",
      description: "",
      listItems: [
        "Choose schools with strong academics (IBDP, A-Levels, AP).",
        "Look for extracurricular depth (debate, robotics, STEM labs, sports, arts).",
        "Prioritize schools with counsellor support and international exposure.",
      ],
      hasButton: true
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

  const expandAll = (): void => setExpandedStep(-1);
  const collapseAll = (): void => setExpandedStep(null);

  return (
    <div id="7to8" className="bg-gray-100 pt-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-1 tracking-tight uppercase">
            Grades 6th-8th
          </h1>
          <p className="font-['Poppins'] text-md text-gray-800 leading-snug mt-2 mb-6 text-center max-w-xl mx-auto">
            For families who first come to us when their children are in sixth, seventh, or eighth grade, the path forward is as follows:
          </p>
        </div>

        {/* Collapse / Expand All */}
        <div className="flex justify-end">
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
        <div className="">
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
                    className="absolute top-6 right-6 w-8 h-8 bg-gradient-to-r from-[#03336D] to-[#0073FF] hover:from-[#1a4375] hover:to-[#375170] text-white rounded-full flex items-center justify-center transition-colors z-10"
                    aria-label={
                      isExpanded ? "Collapse section" : "Expand section"
                    }
                  >
                    <ChevronUp
                      size={24}
                      strokeWidth={3}
                      className={`transform transition-transform duration-300 ${isExpanded ? "" : "rotate-180"
                        }`}
                    />
                  </button>

                  <div className="py-2 px-2 md:pr-20">
                    {/* Badge */}
                    <span className="inline-block text-black text-xs font-bold rounded-full mb-2 uppercase">
                      {step.badge}
                    </span>

                    {/* Heading / Title Logic */}
                    <h2 className="md:text-2xl text-md font-bold text-[#07306A] mb-0">
                      {isExpanded
                        ? step.title.toUpperCase()
                        : step.heading.toUpperCase()}
                    </h2>

                    {/* Expandable Content */}
                    {isExpanded && (
                      <div className="mt-4 flex flex-col md:flex-row md:items-start md:gap-10 w-full">
                        {/* Left spacer to align heading */}
                        <div className="hidden md:block md:w-1/2"></div>

                        {/* Right side content */}
                        <div className="w-full md:w-1/2 md:pl-2">
                          <p className="text-gray-800 text-[15px] md:text-base leading-relaxed mb-3">
                            {step.description}
                          </p>

                          {step.listItems && (
                            <ul className="space-y-2 mb-5">
                              {step.listItems.map((item, itemIndex) => (
                                <li
                                  key={itemIndex}
                                  className="flex items-start text-gray-800"
                                >
                                  <span className="text-gray-800 mr-3 mt-1 flex-shrink-0">•</span>
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
