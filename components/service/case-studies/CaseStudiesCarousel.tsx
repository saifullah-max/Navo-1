"use client";

import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/components/service/case-studies/caseStudies";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface CaseStudiesCarouselProps {
  currentSlug: string;
}

export default function CaseStudiesCarousel({ currentSlug }: CaseStudiesCarouselProps) {
  const studyIndex = caseStudies.findIndex(
    (c) => c.slug.toLowerCase() === currentSlug.toLowerCase()
  );
  const showCount = 3;
  // Start after the current study
  const [recStart, setRecStart] = useState((studyIndex + 1) % caseStudies.length);

  const getRecommended = () => {
    const arr = [];
    for (let i = 0; i < showCount; i++) {
      arr.push(caseStudies[(recStart + i) % caseStudies.length]);
    }
    return arr;
  };
  const handlePrev = () => {
    setRecStart((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };
  const handleNext = () => {
    setRecStart((prev) => (prev + 1) % caseStudies.length);
  };

  const recommended = getRecommended();

  return (
    <div>
      <h2 className="text-3xl font-bold mt-20 mb-6 ml-0 lg:ml-10 xl:ml-14">More Case Studies</h2>
      <div className="flex items-center justify-center gap-2">
        <button
          aria-label="Previous"
          onClick={handlePrev}
          className="p-2 rounded-full hover:bg-gray-300 transition disabled:opacity-50 mr-2 bg-[#03336d]"
          disabled={caseStudies.length <= showCount}
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommended.map((item) => (
            <Link key={item.slug} href={`/case-studies/${item.slug}`}>
              <div className="cursor-pointer overflow-hidden rounded-lg shadow-md group relative">
                <Image
                  src={item.student_image ? `/${item.student_image}` : item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm">{item.subtitle}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <button
          aria-label="Next"
          onClick={handleNext}
          className="p-2 rounded-full hover:bg-gray-300 transition disabled:opacity-50 bg-[#03336d]"
          disabled={caseStudies.length <= showCount}
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
}
