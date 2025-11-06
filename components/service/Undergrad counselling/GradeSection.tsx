"use client";
import React from "react";
import underline from "@/public/underline.png";
import Image from "next/image";

const GradeSection = () => {
  const grades = [
    { title: "6th-8th Graders", path: "7to8" },
    { title: "9th-11th Graders", path: "9to11" },
    { title: "12th–13th Grade", path: "12to13" },
    { title: "Transfer", path: "transfer" },
  ];

  const handleSmoothScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#ECF1F6] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-2xl sm:text-4xl font-bold text-blue-900 mb-4">
            CHOOSE YOUR PATH TO{" "}
            <span className="relative inline-block">
              SUCCESS
              <Image
                src={underline}
                alt="Underline"
                width={200}
                className="md:h-2 md:w-44 h-1 w-32"
                height={40}
              />
            </span>
          </h1>
          <p className="text-gray-700 text-lg mt-6">
            Select your grade level to see tailored counseling guidance.
          </p>
        </div>

        {/* Grade Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {grades.map((grade, index) => (
            <button
              key={index}
              onClick={() => handleSmoothScroll(grade.path)}
              className="group relative h-44 sm:h-52 md:h-56 rounded-3xl p-8 sm:p-10 md:p-12 transition-transform duration-300 shadow-sm hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center text-center w-full"
              style={{
                // double-layered background:
                //  - first layer is the inner fill (padding-box)
                //  - second layer is the border (border-box) and we use transparent border to let it show
                background:
                  "linear-gradient(35deg,rgba(179, 210, 255, 0.35) 0%, rgba(255, 255, 255, 1) 100%)",
                border: "1px solid transparent",
              }}
              onMouseEnter={(e) => {
                // on hover, set fill to deep blue gradient and make border white
                (e.currentTarget as HTMLElement).style.background =
                  "linear-gradient(35deg, #03336D 0%, #0073FF 100%)";
                (e.currentTarget as HTMLElement).style.border = "1px solid #FFFFFF";
              }}
              onMouseLeave={(e) => {
                // restore the layered default: light fill + gradient border
                (e.currentTarget as HTMLElement).style.background =
                  "linear-gradient(35deg,rgba(179, 210, 255, 0.35) 0%, rgba(255, 255, 255, 1) 100%)";
                (e.currentTarget as HTMLElement).style.border = "1px solid transparent";
              }}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-700 group-hover:text-white transition-colors duration-300">
                {grade.title}
              </h2>
            </button>
          ))}

        </div>
      </div>
    </div>
  );
};

export default GradeSection;
