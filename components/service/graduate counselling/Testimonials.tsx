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
            <div className="relative inline-block mb-12 sm:mb-16 text-center px-4">
                <h2 className="font-bold uppercase leading-tight text-[#07306A] text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    Admissions success, straight from our clients
                </h2>

                {/* Underline */}
                <div className="absolute left-1/2 -translate-x-1/2 top-[88%]">
                    <Image
                        src={underline}
                        alt="underline"
                        width={160}
                        height={6}
                        className="opacity-95 ml-4 sm:ml-0"
                    />
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] relative overflow-hidden">
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
                    >
                        <defs>
                            <clipPath id="blueSection">
                                <polygon points="0,0 600,0 0,600" />
                            </clipPath>
                        </defs>
                        <g clipPath="url(#blueSection)">
                            {Array.from({ length: 10 }).map((_, i) => {
                                const x = i * 42;
                                let startY;
                                if (i === 0) startY = 600;
                                else if (i === 1) startY = 0;
                                else startY = (10 - i) * 6;
                                const endY = 600;
                                const controlX = x - 60;
                                const controlY = 300;
                                return (
                                    <path
                                        key={i}
                                        d={`M ${x} ${startY} Q ${controlX} ${controlY} ${x} ${endY}`}
                                        stroke="#104A9C"
                                        strokeWidth="1.5"
                                        fill="none"
                                        opacity="0.32"
                                    />
                                );
                            })}
                        </g>
                    </svg>
                </div>

                {/* Cards */}
                <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16">
                    <div className="relative max-w-4xl w-full flex justify-center">
                        {/* Main Card */}
                        <div className="z-50 bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-w-xl w-full transform hover:scale-105 transition-transform duration-300">
                            <div className="relative bg-gray-200 rounded-xl overflow-hidden mb-4 sm:mb-6 h-48 sm:h-64">
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
