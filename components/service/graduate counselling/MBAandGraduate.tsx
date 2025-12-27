"use client";

import { useState } from "react";
import { ChevronUp, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import underline from "@/public/underline.png";
interface Step {
  id: number;
  badge: string;
  title: string;
  heading: string;
  subSections: {
    title: string;
    text: string;
  }[];
  hasButton?: boolean;
}

export default function MBAGraduateSection(): JSX.Element {
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
      heading: "Comprehensive Graduate Strategy",
      title: "Comprehensive Graduate Strategy",
      subSections: [
        {
          title: "Comprehensive Profile Evaluation & Strategy Development",
          text: `At Navo, we begin by understanding you — your academic background, professional journey, ambitions, and long-term goals. Our consultants build a tailored admissions strategy that sharpens your direction and helps articulate a compelling personal narrative.

We assist you in developing a balanced and strategic school list, evaluating your academic performance, test scores, professional impact, scholarship aspirations, and geographic preferences. This ensures that every program on your list aligns with both your strengths and your future vision.`,
        },
        {
          title: "Resume Transformation",
          text: `Your professional resume becomes a powerful admissions tool under our guidance.

Using our curated MBA-resume templates, we work with you to highlight quantifiable achievements, leadership impact, and career progression in a structure that resonates with top global business schools.

Our team ensures the resume is concise, results-driven, and aligned with what admissions committees value — clarity, impact, and potential.`,
        },
        {
          title: "Essay & Personal Statement Development",
          text: `Your story is your strongest asset. At Navo, you work directly with experts to brainstorm, refine, and elevate essays that stand out. Using school-specific insights and years of admissions experience, we help shape narratives that reflect authenticity, maturity, and professional clarity.

You may submit drafts as many times as needed — our team provides detailed, prompt feedback so that every essay meets the highest standard of polish before submission.`,
        },
        {
          title: "Video Essay & Recorded Assessment Preparation",
          text: `With more MBA and graduate programs incorporating video essays, Navo ensures you are fully prepared. We provide practice tools, guidance on delivery and structure, and personalized feedback on mock recordings. Whether it's Kellogg-style timed responses, Yale’s behavioral prompts, or INSEAD/LBS formats, we help you build confidence, presence, and clarity on camera.`,
        },
        {
          title: "Recommendation Strategy & Recommender Guidance",
          text: `Strong recommendations require strategy. Navo assists in identifying the right recommenders, crafting a timeline for outreach, and guiding you on the materials they may need to write a supportive and aligned letter. We help ensure your recommendations reinforce and not repeat your overall application narrative.`,
        },
        {
          title: "Interview Preparation",
          text: `Navo offers comprehensive interview coaching, including mock interviews with seasoned interview specialists. You receive detailed feedback focusing on communication style, structure, clarity of thought, and school-specific expectations.`,
        },
        {
          title: "Waitlist Strategy & Post-Submission Support",
          text: `Our commitment continues well beyond the “submit” button.

Whether you receive an admit, waitlist decision, or multiple offers, Navo supports you with:
• Waitlist update strategy and communication
• Guidance on improving your candidacy while waiting
• Advice on choosing between offers

We help you make informed decisions and navigate all outcomes with clarity.`,
        },
      ],
    },
    {
      id: 2,
      badge: "Step 02",
      heading: "Review Service",
      title: "Review Service",
      subSections: [
        {
          title: "The Quick Review",
          text: `Navo’s Quick Turnaround Review Service is designed for graduate and MBA applicants who don’t need full counselling but want expert, high-impact feedback delivered fast. Applicants submit their drafted materials—resume, essays, short answers, or overall application direction—and our team quickly diagnoses strengths, weaknesses, and opportunities to elevate the application.

We provide sharp, targeted recommendations to strengthen clarity, storytelling, structure, and alignment with program expectations. This includes refining your resume to meet graduate and MBA standards, tightening your narrative, ensuring your goals are well-articulated, and highlighting areas where your profile can resonate more strongly with admissions committees. Our reviewers focus on what matters most: coherence, impact, and authenticity.

The service also includes rapid feedback rounds on essays and personal statements, guidance on recommendation letter strategy, and a final pre-submission check for accuracy and polish. Built for independent applicants seeking expert validation—not long-term counselling—this package delivers speed, precision, and meaningful upgrades exactly when you need them most.`,
        },
      ],
    },
  ];

  const toggleStep = (index: number): void => {
    setExpandedStep((prev) => (prev === index ? null : index));
  };

  return (
    <div id="mba-graduate" className="bg-gray-100 pt-8 px-4 pb-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-1 tracking-tight uppercase"> MBA AND GRADUATE{" "}
            <span className="relative inline-block"> COUNSELING
              <Image src={underline} alt="Underline" width={200} height={40} className="md:h-2 md:w-72 h-1 w-32 absolute left-1/2 -translate-x-1/2 top-full" />
            </span>
            {" "} FOR TOP GLOBAL PROGRAMS
          </h1>
          <p className="font-['Poppins'] text-md text-gray-800 leading-snug mt-4 mb-6 text-center max-w-xl mx-auto">
            For families who first connect with us when their children are in grade 7 or 8, the path forward is as follows:
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
                      className={`transform transition-transform duration-300 ${isExpanded ? "" : "rotate-180"}`}
                    />
                  </button>

                  {/* Badge */}
                  <span className="inline-block text-black text-xs font-bold rounded-full mb-2 uppercase">
                    {step.badge}
                  </span>

                  {/* Heading */}
                  <h2 className="md:text-2xl text-md font-bold text-[#07306A] mb-0">
                    {isExpanded ? step.title.toUpperCase() : step.heading.toUpperCase()}
                  </h2>

                  {/* Expand Content */}
                  {isExpanded && (
                    <div className="mt-4 flex flex-col md:flex-row md:items-start w-full">
                      {/* Left spacer */}
                      <div className="hidden md:block md:w-1/2"></div>

                      {/* Right Content */}
                      <div className="w-full md:w-1/2 md:pl-4 md:pr-0 md:mr-[-2rem]">
                        {step.subSections.map((sub, i) => (
                          <div key={i} className="mb-6">
                            <h3 className="font-semibold text-[#07306A] text-2xl mb-2">{sub.title}</h3>
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
