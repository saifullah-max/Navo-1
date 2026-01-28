import React from "react";
import Logo from "@/public/navoLogo.png";
import Image from "next/image";
import Book from "@/public/Navo-Book-Icon.png";
import Icon from "@/public/icon.png";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
const HeroSection = () => {
  return (
    <>
      <div
        className="relative mt-16 md:mt-20 xl:mt-24 min-h-[400px] md:min-h-[600px] flex items-center overflow-hidden bg-[#07306A]"
        // bg-[linear-gradient(to_right,#07306A_0%,#07306A_56%,#041938_56%,#041938_100%)]
      >

        {/* Background Icon - Left Side */}
        <div className="absolute -left-16 md:-left-32 md:top-1/2 top-1/3   -translate-y-1/2 opacity-10">
          <Image
            src={Icon}
            width={700}
            height={500}
            className="md:w-[700px] h-[350px] w-[350px] md:h-[700px]"
            alt="icon"
          />
        </div>

        <div className="container mx-auto px-2 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 xl:gap-8 2xl:gap-12 items-center"
          >
            {/* Left Content */}
            <div
              className="text-white space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-16 xl:space-y-24"
            >
              <div className="mt-12 md:mt-0">
                <h1 className="text-4xl lg:text-6xl mt-5 sm:mt-0 font-bold">
                  <span className="whitespace-nowrap">Undergrad Counseling</span>
                  <br />
                  Success Starts
                </h1>

                <div className="flex items-center text-3xl lg:text-4xl -mt-1.5 lg:-mt-0">
                  <span className="font-bold">With</span>
                  <Image src={Logo} width={140} height={80} alt="logoLoading" />
                </div>
              </div>
              <Link href="/connect">
                <button className="group flex text-sm items-center md:mt-12 gap-3 bg-gradient-to-r from-[#635AD9]  to-[#FF4848] hover:from-[#FF4848] hover:to-[#635AD9] text-white md:px-3 md:py-2 px-2 py-1 rounded-full font-semibold md:text-lg transition-all duration-300 shadow-md md:shadow-lg hover:shadow-xl">
                  CONNECT WITH US
                  <div className="bg-white/80  rounded-full md:p-3 p-1 group-hover:translate-x-1 transition-transform">

                    <FaArrowRight size={20} className="text-black" />
                  </div>
                </button>
              </Link>
            </div>

            {/* Right Side - Open Book Icon */}
            <div
              className="flex justify-center lg:justify-end w-full"
            >
              <div
                className="relative w-[220px] h-[260px] sm:w-[320px] sm:h-[340px] md:w-[400px] md:h-[440px] lg:w-[480px] lg:h-[520px] xl:w-[540px] xl:h-[600px] 2xl:w-[600px] 2xl:h-[680px]"
              >
                <Image
                  src={Book}
                  alt="book"
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="(max-width: 640px) 220px, (max-width: 768px) 320px, (max-width: 1024px) 400px, (max-width: 1280px) 540px, (max-width: 1536px) 600px, 680px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
