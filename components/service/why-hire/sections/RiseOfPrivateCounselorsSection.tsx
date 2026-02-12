import React from "react";

const RiseOfPrivateCounselorsSection = () => {
    return (
        <div className="w-full space-y-12 py-16">
            <section className="border-t-2 border-[#0E2B2B] pt-8">
                <div className="grid grid-cols-1 gap-8 md:gap-16 lg:gap-20 xl:gap-28 lg:grid-cols-5 lg:items-start">
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-extrabold uppercase tracking-tighter text-[#0E2B2B] sm:text-4xl lg:text-5xl">
                            THE RISE OF PRIVATE COLLEGE COUNSELORS
                        </h2>
                    </div>
                    <div className="space-y-6 text-base leading-tight text-[#0E2B2B] lg:col-span-3">
                        <p>
                            Enter private college counselors. A national study conducted back in
                            2013 concluded that 26% of those considered high-achieving high school
                            students used private college counselors. In our book, the finding was
                            an underestimation since many high school students do not wish to
                            acknowledge they had help navigating the elite college admissions
                            process.
                        </p>
                        <p>
                            As we like to joke at Ivy Coach, we always get the siblings, we usually
                            get the cousins, and we rarely get the friends. Parents, in our
                            experience, like to claim their children got into their dream colleges
                            all on their own, and that is perfectly fine by us.
                        </p>
                        <p>
                            But, even if 26% of high-achieving students acknowledged working with
                            private college counselors back in 2013, imagine what percentage of
                            high-achieving students work with them today. While the Varsity Blues
                            scandal shined a spotlight on an independent college counselor who
                            stooped to unethical and unlawful means to manipulate the college
                            admissions process, it also left in its wake an increased awareness of
                            the proliferation of students being guided by independent college
                            counselors.
                        </p>
                    </div>
                </div>
            </section>

            <section className="grid grid-cols-1 gap-8 md:gap-16 lg:gap-20 xl:gap-28 lg:grid-cols-5">
                <div className="col-span-2" />
                <div className="col-span-3 grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <div className="flex flex-col justify-between gap-8">
                        <div className="border-t-2 border-[#0E2B2B] py-8">
                            <p className="text-6xl font-extrabold text-[#0E2B2B]">22%</p>
                            <p className="mt-3 text-base leading-snug text-[#0E2B2B]">
                                Freshmen at private, four-year colleges who cited using a college
                                consultant to help them in the admissions process (Source: Harvard GSE
                                Study)
                            </p>
                        </div>
                        <div className="border-t-2 border-[#0E2B2B] py-8">
                            <p className="text-6xl font-extrabold text-[#0E2B2B]">26%</p>
                            <p className="mt-3 text-base leading-snug text-[#0E2B2B]">
                                High-achieving seniors who cited that they used a college consultant to
                                help them in the admissions process (Source: Lipman Hearne Study)
                            </p>
                        </div>
                    </div>
                    <div className="border-t-2 border-[#0E2B2B] py-8">
                        <p className="text-6xl font-extrabold text-[#0E2B2B]">???</p>
                        <p className="mt-3 text-base leading-snug text-[#0E2B2B]">
                            Students who would not acknowledge using a college consultant because of
                            embarrassment, shyness, or the desire to let everyone think they got in
                            with no help at all.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RiseOfPrivateCounselorsSection;
