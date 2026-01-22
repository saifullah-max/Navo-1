"use client";
import dynamic from "next/dynamic";
const CaseStudiesCarousel = dynamic(() => import("./CaseStudiesCarousel"), { ssr: false });

export default function CaseStudiesCarouselWrapper({ currentSlug }: { currentSlug: string }) {
  return <CaseStudiesCarousel currentSlug={currentSlug} />;
}