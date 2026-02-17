import React from "react";
// No image assets needed for this hero

const Hero = () => {
    return (
        <div className="relative mt-16 md:mt-20 xl:mt-24 min-h-[400px] md:min-h-[500px] flex items-center justify-center overflow-hidden bg-blue-50">
            <div className="container mx-auto px-2 sm:px-6 lg:px-8 xl:px-12 relative z-10 flex flex-col items-center text-center">
                <div className="mb-8 mt-4">
                    <span className="block text-[#07306A] text-lg md:text-xl font-bold tracking-wide mb-4">
                        Meet the Founders
                    </span>
                    <h1 className="font-black text-4xl md:text-6xl xl:text-7xl leading-tighter tracking-tighter xl:tracking-[-5px] mb-6 flex flex-col">
                        <span> Built on integrity.</span>
                        <span> Backed by experience.</span>
                    </h1>
                    <p className="text-lg md:text-2xl font-normal max-w-2xl mx-auto mt-6 leading-tight">
                        With over 15 years of experience, we were early pioneers of strategic college counseling in the region.
                        We started small, worked closely with families, and built our reputation on honest guidance not shortcuts
                        or guarantees. Today, we remain intentionally boutique, partnering with a limited number of students so
                        every strategy is thoughtful, ethical, and personal.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
