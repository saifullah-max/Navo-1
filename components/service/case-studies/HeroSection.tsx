import React from 'react';

const HeroSection = () => {
    return (
        <div
            className="
                relative
                pb-24
                md:pb-0
                bg-[#041938]
                mt-20
                md:mt-24
                min-h-[700px]
                sm:min-h-[750px]
                md:min-h-[800px]
                flex flex-col
                items-center
                overflow-hidden
                bg-[url('/case-study-sm.png')]
                lg:bg-[url('/case-study-md.png')]
                2xl:bg-[url('/case-study-lg.png')]
                bg-center
                bg-cover
            "
        >
            {/* <div className='bg-[#]' /> */}
        </div>
    );
};

export default HeroSection;
