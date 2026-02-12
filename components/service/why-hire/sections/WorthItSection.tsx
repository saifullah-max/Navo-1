import React from "react";

const WorthItSection = () => {
    const highlights = [
        "Mapping out the most rigorous and appropriate coursework available and planning ahead",
        "Plan out a testing strategy for the SAT or ACT and AP exams.",
        "Identifying and developing activities that reflect depth, direction, and individuality",
        "Brainstorming, revising, and refining essays tailored to each university",
        "Helping students support strong letters of recommendation with concrete examples",
        "Preparing students for interviews with confidence and clarity",
        "Guiding families through every stage of the admissions process",
        "Reducing stress by replacing uncertainty with a plan",
    ];

    return (
        <div className="w-full space-y-12 py-16">
            <section className="border-t-2 border-white pt-8">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:items-start">
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl lg:text-5xl text-center lg:text-left">
                            Is Hiring a College Counselor Worth It?
                        </h2>
                    </div>
                    <div className="lg:col-span-3">
                        <p className="text-base leading-tight text-white">
                            Not always. We’ve seen many students work with counselors and still end up with applications that feel generic,
                            scattered, or unclear despite strong grades and long activity lists. The issue isn’t hiring a counselor. It’s
                            working with one who prioritises checklists over strategy.
                        </p>
                        <br></br>
                        <p className="text-base leading-tight text-white">
                            Good independent college counselors do the opposite. At Navo, that means:
                        </p>
                        <div className="mt-10 space-y-8">
                            {highlights.map((item) => (
                                <div key={item} className="border-t border-[#9FB19F] pt-6">
                                    <p className="text-2xl font-semibold text-white lg:text-2xl !leading-tight">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WorthItSection;
