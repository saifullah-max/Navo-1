import React from "react";
import Image from "next/image";
import spaghettiImage from "@/public/ivy-images/spaghetti.png";


const WhatDoesConsultantDoSection = () => {
  return (
    <div className="w-full space-y-16 py-16">
      <section className="border-t-2 border-white pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-extrabold uppercase text-white tracking-tighter leading-tighter text-center lg:text-left">
              College admissions are intense
            </h2>
          </div>
          <div className="space-y-4 lg:col-span-3">
            <p className="text-base leading-tight text-white font-medium text-center">
              <span>High stakes. Big emotions. Conflicting opinions. </span><br></br>
              <span>We bring structure to chaos.</span>
            </p>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white tracking-tighter pt-4 text-center">
              AND WE HANDLE THE HEAT
            </h3>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        <div className="hidden lg:block lg:col-span-2" />
        <div className="order-1 lg:order-2 space-y-6 lg:col-span-3">
          {/* <Image src={spaghettiImage} height={1000} width={1000} alt="Spaghetti-Image" /> */}
          <p className="text-sm lg:text-base leading-snug text-white">
            Good independent college counselors bring structure, strategy, and clarity to a process that often feels overwhelming.
            From the moment a student begins working with us, we help map out a thoughtful plan, choosing rigorous coursework,
            identifying the right testing path, shaping extracurriculars with intention, strengthening relationships for recommendations,
            and building applications that tell a coherent story. Just as importantly, we remove pressure from families. No more tense
            conversations, mixed messages, or last-minute panic, everyone is working from the same playbook.
          </p>
          <p className="text-sm lg:text-base leading-snug text-white">
            You’ll hear a lot about “fit” in college admissions, and while it matters, we don’t believe it should cap ambition.
            In our experience, students tend to love the best college they earn admission to. Our role isn’t to lower expectations
            or steer students toward safer options. It’s to help them present the strongest possible version of themselves so they
            can access the most competitive opportunities available to them. We focus on outcomes, clarity, and direction while
            keeping the process calm, focused, and manageable.
          </p>
        </div>
      </section>
    </div>
  );
};

export default WhatDoesConsultantDoSection;
