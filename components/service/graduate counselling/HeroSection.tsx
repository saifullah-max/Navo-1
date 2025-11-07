import React from "react";
import Logo from "@/public/navoLogo.png";
import Image from "next/image";
import Bird from "@/public/Navo-Bird-Icon.png";
import Icon from "@/public/icon.png";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

// Logos array with custom sizes and optional vertical padding
import Logo1 from "@/public/hero/BERKELY.png";
import Logo2 from "@/public/hero/Georgetown-University-Logo.png";
import Logo3 from "@/public/hero/LSE.png";
import Logo4 from "@/public/hero/Michigan_.png";
import Logo5 from "@/public/hero/OXFORD.png";
import Logo6 from "@/public/hero/UCLA.png";
import Logo7 from "@/public/hero/cornell.png";
import Logo8 from "@/public/hero/penn.png";
import Logo9 from "@/public/hero/social-logo.png";

const logosWithSizes = [
  { src: Logo1, width: 50, height: 40, pt: 2, pb: 2 },
  { src: Logo2, width: 48, height: 42, pt: 1, pb: 3 },
  { src: Logo3, width: 45, height: 40, pt: 2, pb: 2 },
  { src: Logo4, width: 46, height: 41, pt: 1, pb: 2 },
  { src: Logo5, width: 50, height: 40, pt: 2, pb: 2 },
  { src: Logo6, width: 47, height: 42, pt: 1, pb: 3 },
  { src: Logo7, width: 45, height: 40, pt: 2, pb: 2 },
  { src: Logo8, width: 68, height: 91, pt: 0, pb: 0 }, // largest, centered
  { src: Logo9, width: 45, height: 40, pt: 2, pb: 2 },
];

const HeroSection = () => {
  return (
    <div className="relative pb-24 md:pb-0 bg-gradient-to-r md:mt-24 mt-20 bg-[#041938] md:min-h-[600px] flex flex-col items-center overflow-hidden">

      {/* Background Icon */}
      <div className="absolute -left-16 md:-left-32 md:top-1/2 top-1/3 -translate-y-1/2 opacity-10">
        <Image
          src={Icon}
          width={700}
          height={500}
          className="md:w-[700px] h-[350px] w-[350px] md:h-[700px]"
          alt="icon"
        />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 lg:pl-16 relative z-10">
        <div className="md:flex justify-between items-center md:gap-5">
          <div className="text-white space-y-8">
            <div>
              <h1 className="text-4xl lg:text-6xl mt-5 sm:mt-0 font-bold">
                Graduate Counseling
                <br />
                Success Starts
              </h1>
              <div className="flex items-center text-3xl lg:text-4xl">
                <span className="font-bold">With</span>
                <Image src={Logo} width={140} height={80} alt="logoLoading" />
              </div>
            </div>
            <Link href="/connect">
              <button className="group flex text-sm items-center md:mt-12 gap-3 bg-gradient-to-r from-[#635AD9] to-[#FF4848] hover:from-[#FF4848] hover:to-[#635AD9] text-white md:px-3 md:py-2 px-2 py-1 rounded-full font-semibold md:text-lg transition-all duration-300 shadow-md md:shadow-lg hover:shadow-xl">
                CONNECT WITH US
                <div className="bg-white/80 rounded-full md:p-3 p-1 group-hover:translate-x-1 transition-transform">
                  <FaArrowRight size={20} className="text-black" />
                </div>
              </button>
            </Link>
          </div>

          <div className="flex justify-center md:max-w-[810px] lg:justify-end -mt-20 md:mt-0">
            <Image src={Bird} alt="bird" height={800} width={800} className="md:w-full h-auto w-auto" />
          </div>

        </div>
      </div>

      {/* Logos Ticker */}
      <div className="w-full absolute bottom-4 left-0 overflow-hidden">
        <div className="flex animate-marquee gap-24 whitespace-nowrap">
          {[...logosWithSizes, ...logosWithSizes].map((logo, idx) => (
            <div key={idx} className="inline-flex items-center justify-center" style={{ paddingTop: logo.pt, paddingBottom: logo.pb }}>
              <Image
                src={logo.src}
                width={logo.width}
                height={logo.height}
                alt={`logo-${idx}`}
                className="object-contain"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>

      {/* CSS for marquee */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          min-width: max-content;
          animation: marquee 20s linear infinite;
        }

        /* Smooth on Safari */
        @supports (-webkit-overflow-scrolling: touch) {
          .animate-marquee {
            animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
