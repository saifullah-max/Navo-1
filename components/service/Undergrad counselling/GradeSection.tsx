"use client";
import React, { useState } from "react";
import underline from "@/public/underline.png";
import Image from "next/image";
import './grade.css'

const GradeSection = () => {
  const grades = [
    { title: "6th-8th Graders", path: "7to8" },
    { title: "9th-11th Graders", path: "9to11" },
    { title: "12th–13th Grade", path: "12to13" },
    { title: "Transfer", path: "transfer" },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleSmoothScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMobileClick = (index: number, path: string) => {
    setActiveIndex(activeIndex === index ? null : index);
    handleSmoothScroll(path);
  };

  return (
    <div className="bg-[#ECF1F6] pt-12 pb-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-6">
          <h1 className="font-['Poppins'] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#03336d] leading-tight mb-6 tracking-tight text-center">
            CHOOSE YOUR PATH TO{" "}
            <span className="relative inline-block">
              SUCCESS
              <Image
                src={underline}
                alt="Underline"
                width={200}
                height={40}
                className="md:h-2 md:w-72 h-1 w-32"
              />
            </span>
          </h1>
          <p className="font-['Poppins'] text-3xl text-gray-800 !leading-[2.25rem] md:leading-relaxed text-center">
            Select your grade level to see tailored counseling guidance.
          </p>
        </div>

        {/* Grade Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6 md:gap-4 justify-center max-w-4xl items-center mx-auto md:mx-52 py-10">
          {grades.map((grade, index) => {
            const isActive = activeIndex === index;

            return (
              <button
                key={index}
                onClick={() => handleMobileClick(index, grade.path)}
                onMouseEnter={(e) => {
                  if (window.innerWidth > 768) {
                    (e.currentTarget as HTMLElement).style.background =
                      "linear-gradient(35deg, #03336D 0%, #0073FF 100%)";
                    e.currentTarget.classList.add("grade-btn-hover");

                    const heading = e.currentTarget.querySelector("h2") as HTMLElement;
                    if (heading) heading.style.color = "#ffffff";
                  }
                }}
                onMouseLeave={(e) => {
                  if (window.innerWidth > 768) {
                    (e.currentTarget as HTMLElement).style.background =
                      "linear-gradient(35deg,rgba(179, 210, 255, 0.35) 0%, rgba(255,255,255,1) 100%)";
                    e.currentTarget.classList.remove("grade-btn-hover");

                    const heading = e.currentTarget.querySelector("h2") as HTMLElement;
                    if (heading) heading.style.color = "#4B5563";
                  }
                }}
                className="group relative grade-btn h-36 sm:h-44 md:h-44 md:w-80 rounded-3xl p-6 sm:p-10 md:p-6 
                  transition-transform duration-300 shadow-sm flex items-center justify-center text-center w-full"
                style={{
                  background: isActive
                    ? "linear-gradient(35deg, #03336D 0%, #0073FF 100%)"
                    : "linear-gradient(35deg,rgba(179, 210, 255, 0.35) 0%, rgba(255,255,255,1) 100%)",
                }}
              >
                <h2
                  className={`text-xl sm:text-2xl md:text-2xl font-bold transition-colors duration-300 ${isActive ? "text-white" : "text-gray-700"
                    }`}
                >
                  {grade.title}
                </h2>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GradeSection;
