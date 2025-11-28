"use client";

import Image from "next/image";
import Link from "next/link";

export default function CaseStudies() {
    const cases = [
        {
            title: "Ria’s Case",
            subtitle: "READ FULL CASE STUDY",
            image: "/ria-case.jpg",
            link: "/case-studies/jake",
        },
        {
            title: "Jake’s Case",
            subtitle: "READ FULL CASE STUDY",
            image: "/jake-case.jpeg",
            link: "/case-studies/sarah",
        },
        {
            title: "Michelle’s Case",
            subtitle: "READ FULL CASE STUDY",
            image: "/michelle-case.webp",
            link: "/case-studies/ali",
        },
    ];

    return (
        <section className="py-16 px-4 bg-white">
            {/* Heading */}
            <div className="text-center mb-12">
                <h1 className="font-['Poppins'] font-bold text-3xl sm:text-xl md:text-3xl lg:text-5xl text-[#03336D] leading-tight tracking-tight">
                    OUR SUCCESS STORIES
                </h1>

                <p className="font-['Poppins'] text-md text-gray-800 leading-snug mt-4 mb-6 text-center max-w-xl mx-auto">
                    From a student who created a simple salivary test to detect early risk of oral cancer to an art historian
                    tracking down stolen masterpieces to an engineer bolstering the bulletproof vests of America’s soldiers
                    with nanotechnology, our students showcase their singular hook.
                </p>
            </div>


            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {cases.map((item, index) => (
                    <Link href={item.link} key={index}>
                        <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg">

                            {/* Image */}
                            <div className="w-full h-[499px] overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={393}
                                    height={499}
                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Dark green/black overlay */}
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{
                                    background: "linear-gradient(0deg, #002e21 0%, rgba(0,46,33,0) 100%)",
                                }}
                            />

                            {/* Text */}
                            <div className="absolute bottom-6 left-6 text-white">
                                <h3 className="text-2xl font-bold drop-shadow-md">{item.title}</h3>
                                <p className="text-sm font-medium drop-shadow-md">
                                    {item.subtitle}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
