import React from 'react';

const HeroSection = () => {
    return (
        <div
            className="
                relative
                w-full
                h-[calc(100vh-80px)]
                sm:h-[calc(100vh-80px)]
                md:h-[calc(100vh-96px)]
                mt-20
                md:mt-24
                flex flex-col
                items-center
                overflow-hidden
                bg-[url('/case-study-sm.png')]
                md:bg-[url('/case-study-md.png')]
                lg:bg-[url('/case-study-lg.png')]
                bg-center
                bg-cover
                bg-no-repeat
            "
        >
            {/* Text Content */}
            <div className="flex flex-col items-center text-center px-4 pt-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black italic text-[#E5FF00] leading-tight tracking-tight">
                    ZOOM IN ON YOUR FUTURE
                </h1>
                <p className="text-white text-xl sm:text-2xl md:text-3xl italic mt-2 sm:mt-4">
                    We will get you there!
                </p>
            </div>
        </div>
    );
};

export default HeroSection;
