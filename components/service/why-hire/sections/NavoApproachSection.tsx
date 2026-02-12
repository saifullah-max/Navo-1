import React from "react";
import Swiper from "@/components/swiper-section";

const NavoApproachSection = () => {
  return (
    <div className="w-full space-y-6">
      <section className="border-t-2 border-[#0E2B2B] pt-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-[#0E2B2B] tracking-tighter text-center lg:text-left">
          The Approach of NAVO
        </h2>
        <div>
          <Swiper hideHeadings={true} />
        </div>
      </section>
    </div>
  );
};

export default NavoApproachSection;
