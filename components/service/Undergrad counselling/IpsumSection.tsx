import React from "react";
import Image from "next/image";
import undergradBanner from "@/public/undergrad-banner.png";

const IpsumSection = () => {
  return (
    <section
      className="
        w-full
        flex flex-col justify-center
        relative overflow-hidden
        px-4 sm:px-6 lg:px-8
        lg:min-h-screen
      "
      style={{ backgroundColor: "#e7f941" }}
    >
      {/* Text Content */}
      <div className="pl-8 pt-12 z-10 max-w-2xl">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-[#03336d] leading-tight mb-4">
          SPOTTING<br />WHAT<br />MATTERS!
        </h1>
        <p className="text-3xl md:text-4xl lg:text-5xl text-[#03336d] font-medium">
          College counselling<br />with precision!
        </p>
      </div>

      {/* Image Wrapper */}
      <div
        className="
          mt-8
          flex justify-center
          lg:absolute lg:bottom-0 lg:left-0 lg:right-0 lg:justify-end
          z-0
        "
      >
        <div
          className="flex justify-center lg:justify-end items-end -mb-5"
          style={{ backgroundColor: "#e7f941" }}
        >
          <Image
            src={undergradBanner}
            alt="undergrad banner"
            width={800}
            height={340}
            className="max-w-full max-h-[60vh] w-auto h-auto object-contain"
            style={{ backgroundColor: '#e7f941', borderRadius: '24px', display: 'block' }}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default IpsumSection;
