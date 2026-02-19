"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import WhyYouShouldHireSection from "@/components/service/why-hire/sections/WhyYouShouldHireSection";
import WhatDoesConsultantDoSection from "@/components/service/why-hire/sections/WhatDoesConsultantDoSection";
import IndependentVsSchoolSection from "./sections/IndependentVsSchoolSection";
import RiseOfPrivateCounselorsSection from "./sections/RiseOfPrivateCounselorsSection";
import WorthItSection from "./sections/WorthItSection";
import NavoApproachSection from "./sections/NavoApproachSection";

type SectionItem = {
    id: string;
    title: string;
    content?: React.ReactNode;
};

// Throttle helper to prevent excessive function calls
const throttle = (func: Function, delay: number) => {
    let lastCall = 0;
    return function (...args: any[]) {
        const now = Date.now();
        if (now - lastCall >= delay) {
            lastCall = now;
            func(...args);
        }
    };
};

const WhyHireContent = () => {
    const [activeId, setActiveId] = useState("why-you-should-hire");
    const [isStopped, setIsStopped] = useState(false);

    const sections = useMemo<SectionItem[]>(
        () => [
            {
                id: "why-you-should-hire",
                title: "Why You Should Hire a College Counselor",
                content: <WhyYouShouldHireSection />,
            },
            {
                id: "what-does-a-consultant-do",
                title: "What Does a College Admissions Consultant Do?",
                content: <WhatDoesConsultantDoSection />,
            },
            {
                id: "independent-vs-school",
                title: "Independent College Counselors vs. High School Counselors",
                content: <IndependentVsSchoolSection />,
            },
            // {
            //     id: "rise-of-private-counselors",
            //     title: "The Rise of Private College Counselors",
            //     content: <RiseOfPrivateCounselorsSection />,
            // },
            {
                id: "worth-it",
                title: "Is Hiring a College Counselor Worth It?",
                content: <WorthItSection />,
            },
            {
                id: "ivy-coach-approach",
                title: "The Approach of NAVO",
                content: <NavoApproachSection />,
            },
        ],
        []
    );

    useEffect(() => {
        const targets = sections
            .map((section) => document.getElementById(section.id))
            .filter((node): node is HTMLElement => Boolean(node));

        if (targets.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                // Find all intersecting sections and determine which should be active
                const intersectingSections = entries
                    .filter(entry => entry.isIntersecting)
                    .map(entry => ({
                        id: entry.target.id,
                        top: entry.boundingClientRect.top,
                        bottom: entry.boundingClientRect.bottom,
                    }));

                if (intersectingSections.length === 0) return;

                // Find the section that is currently in the "active zone" (just below the header)
                // Active zone is roughly 120px from top to 40% of viewport
                const activeZoneTop = 120;
                const activeZoneBottom = window.innerHeight * 0.4;

                // Find the section whose content is most present in the active zone
                let activeSection = null;
                let maxPresence = 0;

                intersectingSections.forEach(section => {
                    // Calculate how much of the section is in the active zone
                    const overlapTop = Math.max(section.top, activeZoneTop);
                    const overlapBottom = Math.min(section.bottom, activeZoneBottom);
                    const presence = Math.max(0, overlapBottom - overlapTop);

                    if (presence > maxPresence) {
                        maxPresence = presence;
                        activeSection = section.id;
                    }
                });

                if (activeSection) {
                    setActiveId(activeSection);
                }
            },
            {
                root: null,
                threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
                rootMargin: "0px 0px 0px 0px",
            }
        );

        targets.forEach((target) => observer.observe(target));

        return () => observer.disconnect();
    }, [sections]);

    useEffect(() => {
        const sentinel = document.getElementById("ivy-coach-approach");
        if (!sentinel) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                // When top of Navo section reaches 40% of viewport → stop sticky
                setIsStopped(entry.boundingClientRect.top <= window.innerHeight * 0.4);
            },
            {
                root: null,
                threshold: 0,
            }
        );

        observer.observe(sentinel);
        return () => observer.disconnect();
    }, []);


    const handleJump = (id: string) => {
        const target = document.getElementById(id);
        if (!target) return;

        target.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <section className="w-full relative">
            {/* Mobile/Tablet Top Navigation */}
            <div className="lg:hidden w-full bg-white border-b border-[#0E2B2B]">
                <nav className="flex overflow-x-auto px-4 py-3">
                    <ul className="flex gap-2 whitespace-nowrap">
                        {sections.map((section) => {
                            const isActive = section.id === activeId;
                            return (
                                <li key={section.id}>
                                    <button
                                        type="button"
                                        onClick={() => handleJump(section.id)}
                                        className={`text-xs px-3 py-2 rounded transition-colors ${isActive
                                                ? "font-semibold text-[#0E2B2B] bg-blue-100"
                                                : "font-medium text-[#7B8B87]"
                                            }`}
                                    >
                                        {section.title}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>

            {/* Desktop & Mobile Content Layout */}
            <div className="flex gap-[8%] lg:px-8 lg:mt-0 mt-0">
                {/* Sticky sidebar - Desktop only */}
                <aside
                    className={`hidden lg:block w-[15%] ${isStopped ? "static self-start" : "sticky top-28 self-start"
                        }`}
                >
                    <nav className="border-t-2 border-[#0E2B2B] pt-6">
                        <ul className="space-y-2">
                            {sections.map((section) => {
                                const isActive = section.id === activeId;

                                return (
                                    <li key={section.id}>
                                        <button
                                            type="button"
                                            onClick={() => handleJump(section.id)}
                                            className={`text-left leading-tight text-xs transition-colors ${isActive
                                                ? "font-semibold text-[#0E2B2B]"
                                                : "font-medium text-[#7B8B87]"
                                                }`}
                                        >
                                            {section.title}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </aside>

                {/* Full width content - 70% on desktop, 100% on mobile */}
                <div className="w-full lg:w-[77%] overflow-hidden lg:overflow-visible">
                    {sections.map((section) => (
                        <section
                            key={section.id}
                            id={section.id}
                            className="scroll-mt-28 relative px-4 lg:px-0"
                        >
                            {section.id === "why-you-should-hire" && (
                                <div className="absolute inset-0 bg-blue-50 -left-[50vw] -right-[50vw] lg:-left-[200vw] lg:-right-[200vw] w-[200vw] lg:w-[400vw] -z-10" />
                            )}
                            {section.id === "what-does-a-consultant-do" && (
                                <div className="absolute inset-0 bg-[#07306A] -left-[50vw] -right-[50vw] lg:-left-[200vw] lg:-right-[200vw] w-[200vw] lg:w-[400vw] -z-10" />
                            )}
                            {section.id === "independent-vs-school" && (
                                <div className="absolute inset-0 
  bg-gradient-to-br from-[#B3D2FF] to-[#336DBF] 
  -left-[50vw] -right-[50vw] lg:-left-[200vw] lg:-right-[200vw] 
  w-[200vw] lg:w-[400vw] -z-10"
                                />
                            )}
                            {section.id === "worth-it" && (
                                <div className="absolute inset-0 bg-[#07306A] -left-[50vw] -right-[50vw] lg:-left-[200vw] lg:-right-[200vw] w-[200vw] lg:w-[400vw] -z-10" />
                            )}
                            {section.id === "ivy-coach-approach" && (
                                <div className="absolute inset-0 bg-blue-50 -left-[50vw] -right-[50vw] lg:-left-[200vw] lg:-right-[200vw] w-[200vw] lg:w-[400vw] -z-10" />
                            )}
                            {section.id === "rise-of-private-counselors" && (
                                <div className="absolute inset-0 bg-[#C8D4B4] -left-[50vw] -right-[50vw] lg:-left-[200vw] lg:-right-[200vw] w-[200vw] lg:w-[400vw] -z-10" />
                            )}
                            {section.content ?? <div className="min-h-[260px]" />}
                        </section>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyHireContent;
