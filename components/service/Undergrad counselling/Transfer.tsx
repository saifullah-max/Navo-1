"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown, ArrowRight } from "lucide-react";
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

export default function Transfer(): JSX.Element {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const steps: Step[] = [
    {
      id: 2,
      badge: "Goal",
      heading: "University Transfer Students",
      title: "University Transfer Students",
      description:
        "Build a strong transfer case through academic excellence, coherent motivations, and strategic guidance across essays, transcripts, and recommendations.",
      listItems: [
        "Build a strong transfer case through academic performance and unique experiences.",
        "Evaluate current university transcript and reasons for transfer.",
        "Recommend ideal target universities and transfer pathways.",
        "Guide on transfer essays: academic interests, fit, and reason for change.",
        "Help with professor recommendations, transfer coursework alignment, resume and activities.",
        "Assist with credit transfer planning, document submission, and deadlines.",
      ],
      hasButton: true,
    },
  ];

  const toggleStep = (index: number) => {
    setExpandedStep((prev) => (prev === index ? null : index));
  };

  const allCollapsed = expandedStep === null;
  const expandAll = () => setExpandedStep(-1);
  const collapseAll = () => setExpandedStep(null);

  return (
    <div id="transfer" className="bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-1 tracking-tight uppercase">
            Transfer
          </h1>
          <p className="font-['Poppins'] text-md text-gray-800 leading-snug mt-2 mb-6 text-center max-w-xl mx-auto">
            For families who first come to us when their children are seeking to earn admission as transfer applicants, the path forward is as follows:          </p>
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
        <div>
          {steps.map((step, index) => {
            const isExpanded = expandedStep === index || expandedStep === -1;

            return (
              <div key={step.id} className="overflow-hidden border-t border-gray-300">
                <div className="relative">
                  {/* Toggle button */}
                  <button
                    onClick={() => toggleStep(index)}
                    className="absolute top-6 right-6 w-8 h-8 bg-gradient-to-r from-[#03336D] to-[#0073FF] hover:from-[#1a4375] hover:to-[#375170] text-white rounded-full flex items-center justify-center transition-colors z-10"
                    aria-label={isExpanded ? "Collapse section" : "Expand section"}
                  >
                    <ChevronUp
                      size={24}
                      strokeWidth={3}
                      className={`transform transition-transform duration-300 ${isExpanded ? "" : "rotate-180"}`}
                    />
                  </button>

                  <div className="p-2 pr-20">
                    {/* Badge */}
                    <span className="inline-block text-black text-xs font-bold rounded-full mb-2 uppercase">
                      {step.badge}
                    </span>

                    {/* Heading / Title */}
                    <h2 className="md:text-2xl text-md font-bold text-[#07306A] mb-0">
                      {isExpanded ? step.title.toUpperCase() : step.heading.toUpperCase()}
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
                              {step.listItems.map((item, idx) => (
                                <li key={idx} className="flex items-start text-gray-800">
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
