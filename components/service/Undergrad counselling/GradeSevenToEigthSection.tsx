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

export default function GradeSevenToEigthSection(): JSX.Element {
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
      heading: "Foundation & Discovery",
      title: "Foundation & Discovery",
      description: `
In middle school years our focus is to build curiosity, confidence, and early direction. Students are encouraged to explore interests through hobbies, books, beginner-level online courses, and age-appropriate competitions. We help them develop strong reading, writing, and critical thinking habits that support long-term academic success. Exposure to global learning opportunities—such as STEM camps, writing workshops, debating, coding, arts, podcasts or language programs—broadens perspective and builds confidence.

At this stage, students also begin small community initiatives or independent projects that teach responsibility and social awareness. We introduce simple journaling and documentation techniques to help them record daily observations and reflect on experiences. Over time, these notes become valuable raw material for high-school essays, personal statements, and future university storytelling. While this is not a test-preparation phase, we gently introduce the idea of different university writing styles—such as the narrative-driven U.S. approach and the academic-focused U.K. format—at a very light and age-appropriate level. The purpose is not to prepare for applications, but to build awareness and confidence for the future.
      `,
    },

    {
      id: 2,
      badge: "Step 02",
      heading: "High School Road Map",
      title: "High School Road Map",
      subSections: [
        {
          title: "High School Selection Guidance",
          text: `
Choosing the right high school environment can significantly influence university opportunities later. We guide families in selecting schools with strong academics—whether IBDP, A-Levels, AP, Canadian, or American curriculum—ensuring that the academic pathway aligns with the student’s long-term goals. Beyond grades, we encourage families to look for schools that offer extracurricular depth, such as robotics, debate, STEM labs, sports, performing arts, or community service opportunities. Schools that provide counsellor support, international exposure, and opportunities for leadership often allow students to grow in ways that top universities appreciate.
          `,
        },
        {
          title: "Testing Plan",
          text: `
Even though many top universities are test-optional, strong standardized test scores continue to offer a competitive advantage. We map out a four-year testing plan so students know exactly when to consider the SAT, ACT, AP and Oxbridge tests. The plan is strategic, not rushed—ensuring that testing supports academic and application goals rather than creating unnecessary stress.
          `,
        },
        {
          title: "College Admissions Guidance Throughout High School",
          text: `
Our role extends far beyond a single application year. Throughout high school, we help students stay on track with their academic and activity goals. We ensure they are enrolled in the right courses, taking relevant tests, and pursuing extracurriculars that are meaningful—not random checkboxes. We help students demonstrate genuine interest in universities and maintain professional communication and timelines. Check-ins are scheduled regularly, and families can request additional meetings as needed; we aim to respond promptly to questions or concerns as applications evolve.
          `,
        },
        {
          title: "Activities & Extracurricular Planning",
          text: `
Most students struggle to find activities that stand out. Instead of leaving families to figure it out alone, we recommend specific, meaningful pursuits that allow students to build depth, leadership, and a unique personal identity. These might include competitions, research, internships, creative projects, entrepreneurial ideas, or community impact. We do not reach out to organizations on students’ behalf; instead, we teach them how to take initiative—something universities value deeply.
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
    <div id="7to8" className="bg-gray-100 pt-12 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-1 tracking-tight uppercase">
            Grades 6th–8th
          </h1>
          <p className="font-['Poppins'] text-md text-gray-800 leading-snug mt-2 mb-6 text-center max-w-xl mx-auto">
            For families who first come to us when their children are in sixth, seventh, or eighth grade, the path forward is as follows:
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
                      className={`transform transition-transform duration-300 ${
                        isExpanded ? "" : "rotate-180"
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
