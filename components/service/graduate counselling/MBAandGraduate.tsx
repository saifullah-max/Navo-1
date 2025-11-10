import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import underline from "@/public/underline.png"; // Make sure you have this
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

type Step = {
  id: number;
  badge: string;
  heading: string;
  title: string;
  description: string;
  listItems?: string[];
  hasButton?: boolean;
};

export default function MBAandGraduate(): JSX.Element {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const steps: Step[] = [
    {
      id: 1,
      badge: "Step 01",
      heading: "NAVO Academic Roadmap",
      title: "NAVO Academic Roadmap",
      description:
        "We provide a 2-3 year academic roadmap to ensure students are building the right foundations before entering high school.",
      // hasButton: true,
    },
    {
      id: 2,
      badge: "Step 02",
      heading: "Strategy Session",
      title: "Strategy Session",
      description:
        "In a one-hour session with our counselor, we guide families to:",
      listItems: [
        "Identify core strengths and learning gaps",
        "Offer feedback on school subject selection",
        "Suggest hobbies and extracurriculars that align with future career opportunities",
        "Build early time-management and study skill habits",
      ],
    },
    {
      id: 3,
      badge: "Step 03",
      heading: "NAVO Academic Roadmap",
      title: "NAVO Academic Roadmap",
      description:
        "We provide a 2-3 year academic roadmap to ensure students are building the right foundations before entering high school.",
    },
  ];

  const toggleStep = (index: number): void => {
    setExpandedStep(expandedStep === index ? null : index);
  };

  const allCollapsed = expandedStep === null;
  const expandAll = (): void => setExpandedStep(-1);
  const collapseAll = (): void => setExpandedStep(null);

  return (
    <div id="7to8" className="bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-1 tracking-tight uppercase">
            MBA AND GRADUATE
          </h1>
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-2 tracking-tight uppercase">
            COUNSELING FOR TOP GLOBAL PROGRAMS
          </h1>
          <p className="font-['Poppins'] text-md text-gray-800 leading-snug mt-2 mb-6 text-center max-w-xl mx-auto">
            For families who first connect with us when their children are in
            grade 7 or 8, the path forward is as follows:
          </p>
        </div>

        {/* Collapse / Expand All */}
        <div className="flex justify-end mb-4">
          {allCollapsed ? (
            <button
              onClick={expandAll}
              className="flex items-center gap-2 text-blue-900 font-bold text-sm hover:text-blue-700 transition-colors uppercase underline pb-3"
            >
              EXPAND ALL
              {/* <div>
                <ChevronUp size={20} strokeWidth={3} />
                <ChevronDown size={20} strokeWidth={3} />
              </div> */}
            </button>
          ) : (
            <button
              onClick={collapseAll}
              className="flex items-center gap-2 text-blue-900 font-bold text-sm hover:text-blue-700 transition-colors uppercase underline pb-3"
            >
              COLLAPSE ALL
              {/* <div>
                <ChevronDown size={20} strokeWidth={3} />
                <ChevronUp size={20} strokeWidth={3} />
              </div> */}
            </button>
          )}
        </div>

        {/* Steps */}
        <div className="border-b border-gray-900">
          {steps.map((step, index) => {
            const isExpanded = expandedStep === index || expandedStep === -1; // -1 = expand all

            return (
              <div
                key={step.id}
                className="overflow-hidden border-t border-gray-900"
              >
                <div className="relative">
                  {/* Toggle button */}
                  <button
                    onClick={() => toggleStep(index)}
                    className="absolute top-6 right-0 w-8 h-8 bg-gradient-to-r bg-[#03336D] text-white rounded-full flex items-center justify-center transition-colors z-10"
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

                  <div className="py-2 px-1 pr-2 md:pr-20">
                    {/* Badge */}
                    <span className="inline-block text-black text-xs font-bold rounded-full mb-2 uppercase">
                      {step.badge}
                    </span>

                    {/* Heading / Title */}
                    <h2 className="md:text-2xl text-md font-bold text-[#07306A] mb-0">
                      {isExpanded
                        ? step.title.toUpperCase()
                        : step.heading.toUpperCase()}
                    </h2>

                    {/* Expandable Content */}
                    {isExpanded && (
                      <div className="mt-4 flex flex-col md:flex-row md:items-start md:gap-10">
                        {/* Left spacer */}
                        <div className="hidden md:block md:w-1/2"></div>

                        {/* Right content */}
                        <div className="w-full md:w-1/2">
                          <p className="text-gray-800 text-[15px] md:text-base leading-relaxed mb-3">
                            {step.description}
                          </p>

                          {step.listItems && (
                            <ul className="space-y-2 mb-5">
                              {step.listItems.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start text-gray-800">
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
                                <ArrowRight size={16} className="text-blue-900" strokeWidth={3} />
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
