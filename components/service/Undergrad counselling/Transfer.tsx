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

export default function Transfer(): JSX.Element {
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
      badge: "Goal",
      heading: "Our personalized approach to transfers",
      title: "Our personalized approach to transfers",
      subSections: [
        {
          title: "Through the Process",
          text: `
Navo provides comprehensive support for students aiming to transfer to top-tier universities. We ensure students are on track academically—both in their remaining high school coursework and in their first year of college—while strategically pursuing meaningful extracurricular activities. Our team offers ongoing mentorship, answering questions and providing guidance as needed. Scheduled check-ins keep students on track, and we respond promptly to urgent requests to maintain progress and momentum.
          `,
        },
        {
          title: "Guidance with Extracurricular Pursuits",
          text: `
We help students identify and engage in extracurricular activities that create a distinctive, memorable profile. These are carefully selected to align with each student’s interests and demonstrate leadership, depth, and impact. While we provide clear guidance and strategy, all engagement comes from the student—Navo operates strictly behind the scenes to ensure authenticity and personal initiative, which is highly valued by admissions committees.
          `,
        },
        {
          title: "Transfer College List Building",
          text: `
At Navo, building a transfer college list is a highly strategic process, tailored to each student’s academic record, extracurricular profile, and future goals. We evaluate course compatibility, past performance, and program strengths to identify the institutions where a student is most likely to thrive and succeed. Our team provides a data-driven analysis of transfer acceptance patterns, selectivity, and program alignment, ensuring students target the right mix of ambitious and realistic options. From Ivys to top elite universities with limited transfer spots to programs that match a student’s unique strengths, we guide every decision to maximize opportunity while maintaining a focused and achievable list.
          `,
        },
        {
          title: "Recommendation Letter Support",
          text: `
Strong letters of recommendation can significantly strengthen a transfer application. Navo works with students to prepare specific anecdotes, accomplishments, and contributions that professors and high school counselors can use to write powerful, individualized letters. Students are not involved in the final content, but this guidance ensures recommenders can authentically highlight the student’s strengths, leadership, and impact.
          `,
        },
        {
          title: "Transfer Essay Strategy and Support",
          text: `
Transfer applications require multiple essays beyond the standard Personal Statement, many of which are institution specific. Navo helps students brainstorm, structure, and refine each essay to create a cohesive narrative. Every essay is treated as a critical component of the application, showcasing the student’s academic focus, personal growth, and readiness to thrive in the new environment.
          `,
        },
      ],
    },
  ];

  const toggleStep = (index: number): void => {
    setExpandedStep((prev) => (prev === index ? null : index));
  };

  return (
    <div id="transfer" className="bg-gray-100 pt-12 px-4 pb-12">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-1 tracking-tight uppercase">
            Transfer
          </h1>
          <p className="font-['Poppins'] text-md text-gray-800 leading-snug mt-2 mb-6 text-center max-w-xl mx-auto">
            For families who first come to us when their children are seeking to earn admission as transfer applicants, the path forward is as follows:
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

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="mt-4 flex flex-col md:flex-row md:items-start w-full">

                      {/* Left Spacer */}
                      <div className="hidden md:block md:w-1/2"></div>

                      {/* Right Content */}
                      <div className="w-full md:w-1/2 md:pl-4 md:pr-0 md:mr-[-2rem]">
                        {/* Description (if any) */}
                        {step.description && renderParagraphs(step.description)}

                        {/* Sub Sections */}
                        {step.subSections &&
                          step.subSections.map((sub, i) => (
                            <div key={i} className="mb-6">
                              <h3 className="font-semibold text-[#07306A] text-2xl mb-2">
                                {sub.title}
                              </h3>
                              {renderParagraphs(sub.text)}
                            </div>
                          ))}

                        {/* Connect Button (if needed later) */}
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
