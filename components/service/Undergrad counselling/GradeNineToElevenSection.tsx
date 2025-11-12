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

export default function GradeNineToElevenSection(): JSX.Element {
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
      heading: "Academic and Resume Building",
      title: "Academic and Resume Building",
      description: `
Grade 9 to 11 is a crucial phase where students build the academic and extracurricular foundation required for competitive global university admissions. They work toward top grades across IGCSE, O-Levels, MYP, or American high school coursework while exploring academic interests and potential majors. We encourage deeper involvement in two or three meaningful activities, alongside leadership roles in clubs, organizations, or community projects. Students begin forming an early portfolio through projects, awards, competitions, blogs, or creative work, and we guide them toward impactful summer schools, internships, Olympiads, or research opportunities. At this stage, we also introduce global writing styles—such as U.S. narrative essays and U.K. academic statements—and help students refine journaling and documentation skills, turning reflections and daily observations into future essay material.
      `,
    },
    {
      id: 2,
      badge: "Step 02",
      heading: "High School Road Map",
      title: "High School Road Map",
      subSections: [
        {
          title: "Activities & Extracurricular Planning",
          text: `
Most students struggle to find activities that stand out. Instead of leaving families to figure it out alone, we recommend specific, meaningful pursuits that allow students to build depth, leadership, and a unique personal identity. These might include competitions, research, internships, creative projects, entrepreneurial ideas, or community impact. We do not reach out to organizations on students’ behalf; instead, we teach them how to take initiative—something universities value deeply.
          `,
        },
        {
          title: "College List-Building",
          text: `
Creating a serious college list starts later than most families realize. In Grade 9, college preferences change too often to be meaningful. By Grade 10, students can begin ruling out or shortlisting broad categories—but a realistic, strategic college list typically takes shape only after the end of Grade 11, once academic performance, interests, and activities are clearer. Throughout the process, we guide students toward the right types of universities, analyze historical admissions patterns, and evaluate how their high school’s profile aligns with selective colleges, ensuring every choice is informed and data-driven.
          `,
        },
        {
          title: "Recommendation Strategy",
          text: `
Strong letters of recommendation are rarely accidental. Left on their own, teachers often write generic statements. We help students prepare the material their teachers need—stories, achievements, anecdotes, and classroom contributions—so recommenders can write detailed, personalized letters. The goal is not to script recommendations, but to give teachers the right information to represent students authentically and powerfully.
          `,
        },
        {
          title: "Essay Development & Writing Strategy",
          text: `
Students are often surprised to learn that applications involve much more than a single Personal Statement. Top universities require multiple supplemental essays, each serving a specific purpose in the student’s story. We support brainstorming, structuring, and revising every major essay—ensuring each piece fits together like a strategic narrative. The result is a cohesive application that shows personality, direction, academic potential, and character.
          `,
        },
        {
          title: "Beyond Essays",
          text: `
Applications are full of small but important details—activity lists, forms, financial aid declarations, university portals, and institutional requirements. Missing or misrepresenting information can hurt an application, even unintentionally. We help students avoid common errors, submit accurate documents, and present themselves professionally across every part of the application process.
          `,
        },
        {
          title: "Interviews",
          text: `
While interviews may not be the most decisive factor in admissions, a strong conversation can reinforce a student’s strengths and personality. We prepare students to communicate with confidence, articulate their interests, and present the unique “hook” that makes them memorable.
          `,
        },
      ],
    },
  ];

  const toggleStep = (index: number): void => {
    setExpandedStep((prev) => (prev === index ? null : index));
  };

  return (
    <div id="9to11" className="bg-gray-100 pt-12 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-1 tracking-tight uppercase">
            Grades 9th–11th
          </h1>
          <p className="font-['Poppins'] text-md text-gray-800 leading-snug mt-2 mb-6 text-center max-w-xl mx-auto">
            For families who first come to us when their children are in ninth, tenth, or eleventh grade, the path forward is as follows:
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

                  {/* Expand Content */}
                  {isExpanded && (
                    <div className="mt-4 flex flex-col md:flex-row md:items-start w-full">

                      {/* Left spacer */}
                      <div className="hidden md:block md:w-1/2"></div>

                      {/* Right Content */}
                      <div className="w-full md:w-1/2 md:pl-4 md:pr-0 md:mr-[-2rem]">

                        {/* Main Description */}
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
