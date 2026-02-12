import React from "react";
import Image from "next/image";
import HeroImage from "@/public/ivy-images/hero.png";

const HeroSection = () => {
  return (
    <div className="relative mt-16 md:mt-20 xl:mt-24 overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 bg-blue-50 min-h-[400px] md:min-h-[600px] flex items-center">
          <div className="container mx-auto px-2 sm:px-6 lg:px-8 xl:px-12">
            <div className="text-[#0E2B2B] sm:space-y-4 md:space-y-6 lg:space-y-8 xl:space-y-10">
              <div className="mt-12 md:mt-0">
              <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-center pt-2">Why Hire</h3>
                <h1 className="text-4xl lg:text-5xl mt-5 sm:mt-0 font-extrabold overflow-visible pt-4 text-center tracking-tighter">
                  Why You Should Hire a College Counselor
                </h1>
              </div>
              <div className="text-base lg:text-base leading-tight max-w-xl space-y-4 pb-8 pt-8 lg:pt-0">
                <p className="leading-tight">
                  Parents hire coaches to train their children in music or athletics, not just to practice, but to improve with purpose and direction.
                </p>
                <p className="leading-tight">
                  College admissions work the same way.
                </p>
                <p className="leading-tight">
                  <strong>Meet Jack.</strong>
                </p>
                <p className="leading-tight">
                  Jack is capable, motivated, and deeply involved. He's a team leader. A volunteer. A high-achieving student who says yes to every opportunity. On paper, he looks impressive. In reality, he looks like thousands of other applicants.
                </p>
                <p className="leading-tight">
                  Jack didn't fail because he lacked effort. He failed because he approached college admissions without a coach.
                </p>
                <p className="leading-tight">
                  Today's most selective universities aren't admitting the most accomplished students. They're admitting the most intentional ones. This is where a college counselor makes the difference.
                </p>
                <p className="leading-tight">
                  A counselor helps students move from participation to purpose.
                </p>
                <p className="leading-tight">
                  At Navo, we don't add polish for the sake of appearances. We provide structure, strategy, and clarity.
                </p>
                <p className="leading-tight">
                  Because when everyone is impressive, guidance is what sets a student apart.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 bg-[#07306A] min-h-[400px] md:min-h-[600px] flex items-center">
          <div className="container mx-auto px-2 sm:px-6 lg:px-8 xl:px-12">
            <div className="flex justify-center lg:justify-end w-full">
              <div className="relative w-full h-[400px] p-8 sm:h-[380px] md:h-[440px] lg:w-[520px] lg:h-[380px] lg:p-0 xl:w-[600px] xl:h-[440px] 2xl:w-[680px] 2xl:h-[500px]">
                <Image
                  src={HeroImage}
                  alt="Why hire a college counselor"
                  fill
                  sizes="(max-width: 640px) 260px, (max-width: 768px) 360px, (max-width: 1024px) 460px, (max-width: 1280px) 600px, (max-width: 1536px) 680px, 500px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-50 h-20" />
    </div>
  );
};

export default HeroSection;
