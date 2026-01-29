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

                {/* Responsive images for different breakpoints */}
                <div className="w-full flex-1 flex items-center justify-center">
                    {/* Mobile */}
                    <div className="block sm:hidden w-full">
                        <Image
                            src="/case-study-mobile.png"
                            alt="Case Study Hero Mobile"
                            width={1000}
                            height={600}
                            className="w-full h-auto object-contain"
                            priority
                            sizes="100vw"
                            quality={10}
                            placeholder="blur"
                            blurDataURL="/case-study-mobile.png"
                            loading="eager"
                            decoding="async"
                        />
                    </div>

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
                        src="/case-study-laptop.png"
                        alt="Case Study Hero"
                        width={1400}
                        height={800}
                        priority
                        className="w-full h-auto object-contain"
                        sizes="(max-width: 1024px) 100vw, 1400px"
                        quality={10}
                        placeholder="blur"
                        blurDataURL="/case-study-laptop.png"
                        loading="eager"
                        decoding="async"
                    />
                </div>
            </div>

            {/* ================= DESKTOP ( lg+ ) ================= */}
            <div className="hidden lg:block 2xl:hidden text-center bg-gradient-to-r from-[#2271bb] to-[#206fb9]">
                <h1 className="text-6xl xl:text-5xl font-black italic text-[#E5FF00] leading-tight tracking-tight mt-24 pt-4">
                    ZOOM IN ON YOUR FUTURE
                </h1>

                <p className="text-white text-3xl italic mt-2">
                    We will get you there!
                </p>

                <div className="w-full mt-2">
                    <Image
                        src="/case-study-large.png"
                        alt="Case Study Hero"
                        width={1800}
                        height={1000}
                        priority
                        className="w-full h-auto object-contain"
                        sizes="(max-width: 1536px) 100vw, 1800px"
                        quality={10}
                        placeholder="blur"
                        blurDataURL="/case-study-large.png"
                        loading="eager"
                        decoding="async"
                    />
                </div>
            </div>

            {/* ================= 2XL ( 2xl+ ) ================= */}
            <div className="hidden 2xl:block text-center bg-gradient-to-r from-[#2271bb] to-[#206fb9]">
                <h1 className="text-7xl font-black italic text-[#E5FF00] leading-tight tracking-tight mt-24 pt-4">
                    ZOOM IN ON YOUR FUTURE
                </h1>

                <p className="text-white text-3xl italic mt-2">
                    We will get you there!
                </p>

                <div className="w-full">
                    <Image
                        src="/case-study-laptop.png"
                        alt="Case Study Hero 2XL"
                        width={2200}
                        height={1200}
                        priority
                        className="w-full h-auto object-contain"
                        sizes="(min-width: 1536px) 100vw, 2200px"
                        quality={10}
                        placeholder="blur"
                        blurDataURL="/case-study-laptop.png"
                        loading="eager"
                        decoding="async"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
