import React from "react";

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

                <div className="w-full flex-1 flex items-center justify-center">
                    <div className="block sm:hidden w-full">
                        <picture>
                            <source media="(max-width: 639px)" srcSet="/case-study-mobile.png" />
                            <source media="(max-width: 1023px)" srcSet="/case-study-laptop.png" />
                            <source media="(max-width: 1535px)" srcSet="/case-study-large.png" />
                            <img
                                src="/case-study-mobile.png"
                                alt="Case Study Hero Mobile"
                                className="w-full h-auto object-contain"
                                loading="eager"
                                fetchPriority="high"
                                decoding="async"
                            />
                        </picture>
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
                    <picture>
                        <source media="(max-width: 639px)" srcSet="/case-study-mobile.png" />
                        <source media="(max-width: 1023px)" srcSet="/case-study-laptop.png" />
                        <source media="(max-width: 1535px)" srcSet="/case-study-large.png" />
                        <img
                            src="/case-study-laptop.png"
                            alt="Case Study Hero"
                            className="w-full h-auto object-contain"
                            loading="eager"
                            fetchPriority="high"
                            decoding="async"
                        />
                    </picture>
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
                    <picture>
                        <source media="(max-width: 639px)" srcSet="/case-study-mobile.png" />
                        <source media="(max-width: 1023px)" srcSet="/case-study-laptop.png" />
                        <source media="(max-width: 1535px)" srcSet="/case-study-large.png" />
                        <img
                            src="/case-study-large.png"
                            alt="Case Study Hero 2XL"
                            className="w-full h-auto object-contain"
                            loading="eager"
                            fetchPriority="high"
                            decoding="async"
                        />
                    </picture>
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
                    <picture>
                        <source media="(max-width: 639px)" srcSet="/case-study-mobile.png" />
                        <source media="(max-width: 1023px)" srcSet="/case-study-laptop.png" />
                        <source media="(max-width: 1535px)" srcSet="/case-study-large.png" />
                        <img
                            src="/case-study-laptop.png"
                            alt="Case Study Hero 2XL"
                            width={2200}
                            height={1200}
                            className="w-full h-auto object-contain"
                            loading="eager"
                            fetchPriority="high"
                            decoding="async"
                        />
                    </picture>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;