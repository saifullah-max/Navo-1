"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import underline from "@/public/underline.png";

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            image:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
            video: true,
            rating: 5,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        },
        {
            id: 2,
            name: "Jane Smith",
            image:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
            video: true,
            rating: 5,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        },
        {
            id: 3,
            name: "Mike Johnson",
            image:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
            video: true,
            rating: 5,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        },
    ];

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const current = testimonials[currentIndex];
    const next = testimonials[(currentIndex + 1) % testimonials.length];

    return (
        <section className="w-full py-12 sm:py-16 flex flex-col items-center bg-white">
            {/* Heading */}
            <div className="text-center mb-6">
                <h1 className="text-2xl sm:text-4xl font-bold text-blue-900 mb-2 leading-snug uppercase">
                    Admissions success,{" "}

                    <span className="relative inline-block">
                        straight
                        {/* ✅ Absolute underline: stays under "straight", not the p tag */}
                        <span className="absolute left-1/2 -translate-x-1/2 top-full">
                            <Image
                                src={underline}
                                alt="Underline"
                                width={200}
                                height={40}
                                className="h-2 w-44 sm:h-2 md:w-72"
                            />
                        </span>
                    </span>

                    {" "}from our clients
                </h1>

                <p className="text-gray-700 text-xl mt-2">
                    If you're interested in Navo's college counseling, fill
                    out our complimentary consultation <br></br>
                    form and we'll be in touch.
                </p>
            </div>


            {/* Testimonials Section */}
            <div className="w-full h-[700px] relative overflow-hidden">
                {/* Background */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(75deg, #07306A 50%, #FFFFFF 50%)",
                    }}
                >
                    <svg
                        className="absolute inset-0 w-full h-full"
                        viewBox="0 0 1000 600"
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <clipPath id="blueSection">
                                <polygon points="0,0 600,0 0,600" />
                            </clipPath>
                        </defs>
                        {(() => {
                            const width = 600;
                            const height = 600;
                            const lines = [];

                            const lineCount = 10;
                            const baseSpacing = 35;
                            const startX = 30;

                            for (let i = 0; i < lineCount; i++) {
                                let topX, topY;

                                // ✅ Lines 1–3 unchanged
                                if (i === 0) {
                                    topX = 0;
                                    topY = 80;
                                } else if (i === 1) {
                                    topX = 0;
                                    topY = 130;
                                } else if (i === 2) {
                                    topX = 5;
                                    topY = 0;
                                }
                                // ✅ 4–10: smoother + closer to 3rd
                                else {
                                    const compression = 0.55; // tighter than before (closer lines)
                                    const reductionFactor = 0.3; // keeps slight decrease across width
                                    const dynamicSpacing =
                                        baseSpacing * compression * (1 - reductionFactor * (i / lineCount));
                                    topX = startX + (i - 3.3) * dynamicSpacing;
                                    topY = 0;
                                }

                                const bottomX = startX + i * baseSpacing;
                                const controlX = (topX + bottomX) / 2 - 25;
                                const controlY = height * 0.5;

                                const d = `M ${topX} ${topY} Q ${controlX} ${controlY} ${bottomX} ${height}`;

                                lines.push(
                                    <path
                                        key={i}
                                        d={d}
                                        stroke="#104A9C"
                                        strokeWidth="1.5"
                                        fill="none"
                                        opacity="0.7"
                                    />
                                );
                            }

                            return lines;
                        })()}


                    </svg>

                </div>

                {/* Cards */}
                <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16">
                    <div className="relative max-w-4xl w-full flex justify-center">
                        {/* Main Card */}
                        <div className="z-50 bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-w-xl w-full transform hover:scale-105 transition-transform duration-300
                h-auto sm:h-[400px] md:h-[330px] lg:h-[456px]">
                            <div className="relative bg-gray-200 rounded-xl overflow-hidden mb-4 sm:mb-6 h-72 sm:h-[200px] md:h-[220px] lg:h-[270px]">
                                <img
                                    src={current.image}
                                    alt={current.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button className="bg-white rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                                        <svg
                                            className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 ml-1"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="flex gap-1 mb-3 sm:mb-4">
                                {[...Array(current.rating)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                ))}
                            </div>

                            <p className="text-gray-700 text-sm sm:text-lg leading-relaxed">
                                "{current.text}"
                            </p>
                        </div>


                        {/* Small Preview Card (hide on sm) */}
                        <div className="hidden lg:block absolute right-[-10px] top-1/2 -translate-y-1/2 scale-75 opacity-70 
                bg-white rounded-xl shadow-xl p-4 w-64 sm:w-80 transition-all duration-300">
                            <div className="relative bg-gray-200 rounded-lg overflow-hidden mb-3 h-36 sm:h-44">
                                <img
                                    src={next.image}
                                    alt={next.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow">
                                        <svg
                                            className="w-4 h-4 text-blue-600 ml-0.5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-0.5 mb-2">
                                {[...Array(2)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-4 h-4 text-yellow-400"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-600 text-xs line-clamp-2">{next.text}</p>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <div className="absolute bottom-0 md:bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-20">
                    <button
                        onClick={prevTestimonial}
                        className="text-white w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
                    >
                        <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
                    </button>
                    <button
                        onClick={nextTestimonial}
                        className="text-white w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
                    >
                        <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
