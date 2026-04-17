"use client";

import React, { useState } from "react";
import Image from "next/image";

interface FounderQAItem {
    question: string;
    answer: string;
}

interface FounderSectionProps {
    name: string;
    title: string;
    subtitle?: string;
    paragraphs: string[];
    boldIntroName?: string;
    introTextAfterName?: string;
    knowMoreLabel?: string;
    qaItems?: FounderQAItem[];
    imageSrc: string;
    imageAlt: string;
    reverse?: boolean;
}

const FounderSection: React.FC<FounderSectionProps> = ({
    name,
    title,
    subtitle,
    paragraphs,
    boldIntroName,
    introTextAfterName,
    knowMoreLabel,
    qaItems = [],
    imageSrc,
    imageAlt,
    reverse = false,
}) => {
    const [isKnowMoreOpen, setIsKnowMoreOpen] = useState(false);
    const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(null);

    const handleKnowMoreToggle = () => {
        setIsKnowMoreOpen((prev) => {
            const next = !prev;
            if (!next) {
                setOpenQuestionIndex(null);
            }
            return next;
        });
    };

    const handleQuestionToggle = (index: number) => {
        setOpenQuestionIndex((prev) => (prev === index ? null : index));
    };

    return (
        <section className="w-full py-10 sm:py-12 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            <div
                className={`container mx-auto flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""
                    } items-start gap-6 sm:gap-8 md:gap-10`}
            >

                {/* Image Column */}
                <div
                    className="flex flex-col justify-center items-center md:items-start w-full md:w-[260px]"
                    style={{ maxWidth: "340px" }}
                >
                    <div className="relative w-[220px] sm:w-[240px] md:w-full h-[220px] sm:h-[240px] md:h-[320px] overflow-hidden bg-[#07306A]">
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 220px, (max-width: 768px) 240px, 260px"
                            priority
                        />
                    </div>
                </div>

                {/* Content Column */}
                <div className="flex flex-col justify-center flex-1 max-w-4xl w-full text-left">

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-2 tracking-tighter text-[#03336d]">
                        {name}
                    </h2>

                    <div className="text-base sm:text-lg md:text-xl xl:text-2xl font-bold mb-1">
                        {title}
                    </div>

                    {subtitle && (

                        <div className="text-base sm:text-lg md:text-xl xl:text-2xl font-bold mb-5 sm:mb-6">
                            {subtitle}
                        </div>
                    )}

                    {boldIntroName && introTextAfterName && (
                        <p className="text-[#003828] text-sm sm:text-base lg:text-lg mb-3 leading-relaxed">
                            <strong>{boldIntroName}</strong>
                            {introTextAfterName}
                        </p>
                    )}

                    {paragraphs.map((p, i) => (
                        <p
                            key={i}
                            className="text-[#003828] text-sm sm:text-base lg:text-lg mb-2 leading-relaxed"
                        >
                            {p}
                        </p>
                    ))}

                    {qaItems.length > 0 && (
                        <div className="mt-4 sm:mt-5">
                            <button
                                type="button"
                                onClick={handleKnowMoreToggle}
                                className="text-[#03336d] font-semibold text-sm sm:text-base underline underline-offset-4"
                            >
                                {knowMoreLabel || `Know more about ${name}`}
                            </button>

                            {isKnowMoreOpen && (
                                <div className="mt-4 border-t border-gray-200 pt-2">
                                    {qaItems.map((item, index) => {
                                        const isOpen = openQuestionIndex === index;

                                        return (
                                            <div key={index} className="border-b border-gray-200">
                                                <button
                                                    type="button"
                                                    onClick={() => handleQuestionToggle(index)}
                                                    className="w-full py-3 text-left flex items-center justify-between gap-3"
                                                >
                                                    <span className="text-[#03336d] font-semibold text-sm sm:text-base">
                                                        {item.question}
                                                    </span>

                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        className={`w-5 h-5 text-[#03336d] transition-transform ${isOpen ? "rotate-180" : "rotate-0"
                                                            }`}
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            d="M6 9L12 15L18 9"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </button>

                                                {isOpen && (
                                                    <p className="pb-4 text-[#003828] text-sm sm:text-base leading-relaxed">
                                                        {item.answer}
                                                    </p>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    )}

                </div>

            </div>
        </section>
    );
};

export default FounderSection;