import Image from "next/image";
import underline from "@/public/underline.png";

export const StoryAndMissions = () => {
    return (
        <section className="w-full py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Story and Mission in Two Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

                    {/* Our Story Column */}
                    <div>
                        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tighter text-[#03336d] mb-8">
                            Our{" "}
                            <span className="relative inline-block pb-2">
                                Story
                                <Image
                                    src={underline}
                                    alt="Underline"
                                    width={250}
                                    height={30}
                                    className="absolute left-0 -bottom-2 w-full h-auto"
                                />
                            </span>
                        </h2>

                        <div className="space-y-6">
                            <p className="text-base lg:text-lg leading-tight">
                                Navo is an academic consultancy aimed to empower students to explore
                                beyond the traditional pathways toward higher education. At Navo we
                                are committed to helping students identify their inner narratives,
                                strengths and passions as we journey together toward their goals
                                with enthusiasm and zeal- the Navo way.
                            </p>
                            <p className="text-base lg:text-lg leading-tight">
                                We take pride in our rich legacy of 15 years of being at the forefront
                                of steering journeys and shaping students' success stories. Our expert
                                counselors have helped students arrive at the best suited institutions
                                across the globe with a focus on the journey, fostering lasting change
                                through personal and professional growth along the way.
                            </p>
                        </div>
                    </div>

                    {/* Our Mission Column */}
                    <div>
                        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tighter text-[#03336d] mb-8">
                            Our{" "}
                            <span className="relative inline-block pb-2">
                                Mission
                                <Image
                                    src={underline}
                                    alt="Underline"
                                    width={250}
                                    height={30}
                                    className="absolute left-0 -bottom-2 w-full h-auto"
                                />
                            </span>
                        </h2>

                        <div className="space-y-6">
                            <p className="text-base lg:text-lg leading-tight">
                                The name Navo symbolizes navigating your way with immense diligence.
                                It is about valuing the journey as much as the destination. Our mission
                                is to transform the way a student approaches their educational goals by
                                helping them steer their ship, no matter how many times they need to change
                                course, all the while staying true to who they are. At Navo, through our
                                holistic, all-encompassing approach we aim to help families navigate the
                                complex path toward the best opportunities available for them. We are all
                                about the individual- the journey is yours.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
