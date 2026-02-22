import Image from "next/image";
import React from "react";
import clocKImage from "@/public/time-hire.png";


const IndependentVsSchoolSection = () => {
    return (
        <div className="w-full space-y-12 py-16">
            <section className="border-t-2 border-[#0E2B2B] pt-8">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:items-start">
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-extrabold uppercase tracking-tighter text-white sm:text-4xl lg:text-5xl text-center lg:text-left">
                            Independent College Counselors vs. High School Counselors
                        </h2>
                    </div>
                    <div className="lg:col-span-3 flex  lg:justify-start">
                        <Image src={clocKImage} alt="Clock-Image" width={1000} height={1000} />
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-5">
                    <div className="lg:col-span-2" />
                    <div className="lg:col-span-3 space-y-4">
                        <p className="text-lg leading-snug text-white">
                            <strong>High school counselors play an important role but their time is divided.</strong>
                        </p>
                        <p className="text-sm lg:text-base leading-snug text-white">
                            In many schools, a single counselor is responsible for hundreds of students, alongside academic scheduling, testing coordination, wellbeing support, and administrative duties. College admissions guidance is only one small part of an already full workload. Even with the best intentions, this leaves little room for deep, individualised strategy or sustained involvement in a student's application journey.
                        </p>
                    </div>
                    <div className="lg:col-span-2" />
                    <div className="lg:col-span-3 space-y-4">
                        <p className="text-lg leading-snug text-white">
                            <strong>Independent college counselors work differently.</strong>
                        </p>
                        <p className="text-sm lg:text-base leading-snug text-white">
                            Their focus is singular: college admissions. They have the time to get to know one student well, to think proactively about coursework choices, testing timelines, extracurricular development, recommendations, and essays. They help students plan early, make intentional decisions, and refine ideas over multiple drafts. Most importantly, they provide consistent, unbiased guidance ensuring every student receives the same level of attention, advocacy, and strategic support.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default IndependentVsSchoolSection;
