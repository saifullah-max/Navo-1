import React from "react";
import Image from "next/image";

export const StoryAndMissions = () => {
    return (
        <section className="w-full py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-2 tracking-tighter text-[#03336d]">
                    Our Story
                </h2>

                {/* Main Two Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

                    {/* Column 1 */}
                    <div
                        className="text-[#003828] text-lg md:text-lg mb-1 leading-tight"
                    >
                        Navo is an academic consultancy aimed to empower students to explore beyond the traditional pathways toward higher education. At Navo we are committed to helping students identify their inner narratives, strengths and passions as we journey together toward their goals with enthusiasm and zeal — the Navo way.
                    </div>

                    {/* Column 2 */}
                    <div
                        className="text-[#003828] text-lg md:text-lg mb-1 leading-tight flex flex-col gap-4"
                    >
                        <p>
                            We take pride in our rich legacy of 15 years of being at the forefront of steering journeys and shaping students' success stories. Our expert counselors have helped students arrive at the best suited institutions across the globe with a focus on the journey, fostering lasting change.
                        </p>
                        {/* Nested 2-column layout */}
                        <div className="grid grid-cols-3 gap-6 items-end">
                            <div className="col-span-2 bg-[#03336d] h-48 rounded-lg" />
                            <div className="col-span-1" />
                        </div>
                    </div>

                </div>
            </div>
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-2 tracking-tighter text-[#03336d]">
                    Our Mission
                </h2>

                {/* Main Two Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

                    {/* Column 1 */}
                    <div
                        className="text-[#003828] text-lg md:text-lg mb-1 leading-tight"
                    >
                        Navo is an academic consultancy aimed to empower students to explore beyond the traditional pathways toward higher education. At Navo we are committed to helping students identify their inner narratives, strengths and passions as we journey together toward their goals with enthusiasm and zeal — the Navo way.
                    </div>

                    {/* Column 2 */}
                    <div
                        className="text-[#003828] text-lg md:text-lg mb-1 leading-tight flex flex-col gap-4"
                    >
                        <p>
                            We take pride in our rich legacy of 15 years of being at the forefront of steering journeys and shaping students' success stories. Our expert counselors have helped students arrive at the best suited institutions across the globe with a focus on the journey, fostering lasting change.
                        </p>
                        {/* Nested 2-column layout */}
                        <div className="grid grid-cols-3 gap-6 items-end">
                            <div className="col-span-2 bg-[#03336d] h-48 rounded-lg" />
                            <div className="col-span-1" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
