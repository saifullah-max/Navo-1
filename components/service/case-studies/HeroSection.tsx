import React from "react";
import Image from "next/image";

const HeroSection = () => {
    return (
        <div className="">
            {/* ================= MOBILE ( < sm ) ================= */}
            <div className="sm:hidden text-center pt-20 bg-gradient-to-r from-[#2271bb] to-[#206fb9]">
                <h1 className="text-4xl font-black italic text-[#E5FF00] leading-tight tracking-tight mt-12">
                    ZOOM IN ON YOUR FUTURE
                </h1>

                <p className="text-white text-xl italic mt-4">
                    We will get you there!
                </p>

                <div className="w-full">
                    <Image
                        src="/case-study-mobile.png"
                        alt="Case Study Hero"
                        width={1000}
                        height={600}
                        className="w-full h-auto object-contain"
                        priority
                    />
                </div>
            </div>

            {/* ================= TABLET ( sm → lg ) ================= */}
            <div className="hidden sm:block lg:hidden text-center pt-28 bg-gradient-to-r from-[#2271bb] to-[#206fb9]">
                <h1 className="text-5xl md:text-6xl font-black italic text-[#E5FF00] leading-tight tracking-tight">
                    ZOOM IN ON YOUR FUTURE
                </h1>

                <p className="text-white text-2xl italic mt-4">
                    We will get you there!
                </p>

                <div className="w-full mt-6">
                    <Image
                        src="/case-study-mobile.png"
                        alt="Case Study Hero"
                        width={1400}
                        height={800}
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>

            {/* ================= DESKTOP ( lg+ ) ================= */}
            <div className="hidden lg:block text-center bg-gradient-to-r from-[#2271bb] to-[#206fb9]">
                <h1 className="text-6xl xl:text-7xl font-black italic text-[#E5FF00] leading-tight tracking-tight mt-24 pt-12">
                    ZOOM IN ON YOUR FUTURE
                </h1>

                <p className="text-white text-3xl italic mt-4">
                    We will get you there!
                </p>

                <div className="w-full">
                    <Image
                        src="/case-study-mobile.png"
                        alt="Case Study Hero"
                        width={1800}
                        height={1000}
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
