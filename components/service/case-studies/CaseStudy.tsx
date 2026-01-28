"use client";

import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/components/service/case-studies/caseStudies";
import underline from "@/public/underline.png";


export default function CaseStudies() {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="text-center mb-12">
                <h1 className="font-['Poppins'] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#03336d] leading-tight mb-6 tracking-tight text-center uppercase">
                    WE FOLLOW OUR
                    <span className="relative inline-block ml-2">
                        OWN BEAT
                        <Image
                            src={underline}
                            alt="Underline"
                            width={200}
                            height={40}
                            className="md:h-2 md:w-72 h-1 w-40 absolute left-0 mt-1"
                        />
                    </span>
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {caseStudies.map((item) => (
                    <Link key={item.slug} href={`/case-studies/${item.slug}`}>
                        <div className="relative group cursor-pointer overflow-hidden">
                            <div className="w-full h-[499px] overflow-hidden">
                                <Image
                                    src={item.student_image ? `/${item.student_image}` : item.image}
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
                                        "linear-gradient(0deg, rgba(3, 51, 109, 0.7) 0%, rgba(3, 51, 109, 0) 100%)",
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
