import React from "react";
import Swiper from "@/components/swiper-section";
import Image from "next/image";
import underline from "@/public/underline.png";

const NavoApproachSection = () => {
  return (
    <div className="w-full space-y-6">
      <section className="border-t-2 border-[#0E2B2B] pt-8">
        {/* <h2 className="text-2xl lg:text-3xl xl:text-4xl font-extrabold uppercase text-[#03336d] tracking-tighter text-center lg:text-left">
          The Approach of NAVO
        </h2> */}
        <h1 className="text-2xl lg:text-3xl xl:text-4xl mt-5 sm:mt-0 font-extrabold overflow-visible pt-4 tracking-tighter uppercase text-[#03336d]">
          The{" "}
          <span className="relative inline-block pb-1">
            Approach
            <Image
              src={underline}
              alt="Underline"
              width={250}
              height={40}
              className="absolute left-0 right-0 mx-auto -bottom-2 w-full h-auto"
            />
          </span>
          {" "} of NAVO
        </h1>
        <div>
          <Swiper hideHeadings={true} />
        </div>
      </section>
    </div>
  );
};

export default NavoApproachSection;
