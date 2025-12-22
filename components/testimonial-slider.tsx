"use client";

import { useState, memo } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";


interface Testimonial {
  quote: string;
  name: string;
  role: string;
  institutionLogo: string;
  image: string;
}
export const testimonials: Testimonial[] = [
  {
    quote:
      "Working with Navo was the best possible investment to secure my future. Their honesty and genuineness make them the best option to plan your future",
    name: "Faiz Iqbal",
    role: "",
    institutionLogo: "/unies.png",
    image: "/faiz.jpeg",
  },
  {
    quote:
      "Their expert guidance and unwavering support have been instrumental in navigating the complexities of university applications. I wholeheartedly recommend their services.",
    name: "Muhammad Raahim Sodha",
    role: "",
    institutionLogo: "/ImperialUnilogo.png",
    image: "/Rahim.jpeg",
  },
  {
    quote: "Best counsellors. Transformative journey. Dream College.",
    name: "Zaaria Butt",
    role: "",
    institutionLogo: "/Zaariya_Uni.png",
    image: "/zaria.jpeg",
  },
];




function TestimonialSliderComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const goToTestimonial = (index: number) => setCurrentIndex(index);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Stars */}
      <div className="flex justify-center mb-6 sm:mb-8">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="w-5 h-5 sm:w-6 sm:h-6 text-black fill-current"
          />
        ))}
      </div>

      {/* Testimonial Section */}
      <div className="relative">
        {/* Quote + Arrows Wrapper */}
        <div className="relative sm:mx-16">
          {/* LEFT Arrow */}
          <Button
            onClick={handlePrevious}
            className="hidden sm:flex absolute left-0 inset-y-0 my-auto rounded-xl bg-blue-900 hover:bg-blue-800 h-12 w-12 items-center justify-center p-0 z-10 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </Button>

          {/* RIGHT Arrow */}
          <Button
            onClick={handleNext}
            className="hidden sm:flex absolute right-0 inset-y-0 my-auto rounded-xl bg-blue-900 hover:bg-blue-800 h-12 w-12 items-center justify-center p-0 z-10 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </Button>

          {/* Quote */}
          <blockquote className="font-poppins font-medium text-lg sm:text-xl text-gray-800 md:leading-relaxed text-center px-16 mb-8 sm:mb-6">
            "{currentTestimonial.quote}"
          </blockquote>
        </div>

        {/* Profile */}
        <div className="flex flex-row items-center justify-center gap-4 mb-6 sm:mb-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                width={48}
                height={48}
                className="object-cover w-full h-full"
                priority={currentIndex === 0}
              />
            </div>

            <div className="text-center sm:text-left">
              <div className="font-poppins font-semibold text-gray-900">
                {currentTestimonial.name}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center">
            <Image
              src="/divider.svg"
              alt="Divider"
              width={2}
              height={75}
            />
          </div>

          {/* Institution Logo */}
          <div className="flex items-center">
            <Image
              src={currentTestimonial.institutionLogo}
              alt="University logo"
              width={125}
              height={70}
              className="object-cover"
            />
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-2 h-2 rounded-full transition-colors ${currentIndex === index ? "bg-blue-900" : "bg-gray-300"
                }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="flex justify-center mt-6 space-x-4 sm:hidden">
          <Button
            onClick={handlePrevious}
            className="rounded-lg bg-blue-900 hover:bg-blue-800 h-10 w-10 flex items-center justify-center p-0"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4 text-white" />
          </Button>

          <Button
            onClick={handleNext}
            className="rounded-lg bg-blue-900 hover:bg-blue-800 h-10 w-10 flex items-center justify-center p-0"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4 text-white" />
          </Button>
        </div>
      </div>
    </div>
  );


}

export const TestimonialSlider = memo(TestimonialSliderComponent);
