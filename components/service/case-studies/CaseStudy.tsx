"use client";

import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/components/service/case-studies/caseStudies";

export default function CaseStudies() {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="text-center mb-12">
                <h1 className="font-['Poppins'] font-bold text-3xl lg:text-5xl text-[#03336D]">
                    NAVO's STUDENTS ARE WEIRD
                </h1>

                <p className="font-['Poppins'] text-md text-gray-900 max-w-4xl mx-auto mt-4 leading-tight">
                    From a student who created a simple salivary test to detect early risk of oral cancer to an
                    art historian tracking down stolen masterpieces to an engineer bolstering the bulletproof
                    vests of America’s soldiers with nanotechnology, our students showcase their singular hook.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {caseStudies.map((item) => (
                    <Link key={item.slug} href={`/case-studies/${item.slug}`}>
                        <div className="relative group cursor-pointer overflow-hidden">
                            <div className="w-full h-[499px] overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={393}
                                    height={499}
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            <div
                                className="absolute inset-0"
                                style={{
                                    background:
                                        "linear-gradient(0deg, #002e21 0%, rgba(0,46,33,0) 100%)",
                                }}
                            />

                            <div className="absolute bottom-6 left-6 text-white">
                                <h3 className="text-3xl font-bold mb-4 hover:text-[#d2daa7]">
                                    {item.title}
                                </h3>
                                <p className="text-sm font-bold hover:text-black">{item.subtitle}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
