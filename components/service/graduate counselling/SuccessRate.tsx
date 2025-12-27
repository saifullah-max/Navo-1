"use client";
import Image from "next/image";
import bgImg from "@/public/success-rate.jpg";
import underline from "@/public/underline.png";

const SuccessRate = () => {
    return (
        <section className="relative w-full h-[700px] md:h-[780px] flex items-center justify-center mb-4">

            {/* Background */}
            <Image
                src={bgImg}
                alt="Success background"
                fill
                priority
                className="object-cover brightness-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-[1400px] mx-auto">

                {/* Heading */}
                <div className="relative inline-block">
                    <h2
                        className="text-white font-poppins font-black uppercase leading-none drop-shadow-lg"
                        style={{
                            fontSize: "clamp(32px, 6vw, 52px)",
                        }}
                    >
                        98.9% Success Rate
                    </h2>

                    <div className="absolute left-1/2 -translate-x-1/2 top-[88%]">
                        <Image
                            src={underline}
                            alt="underline"
                            width={200}
                            height={8}
                            className="opacity-95"
                        />
                    </div>
                </div>

                {/* Paragraph */}
                <p className="text-white mt-8 font-poppins font-normal leading-snug text-base md:text-xl lg:text-2xl w-full max-w-[1100px] px-6 text-center">
                    With our expertise and 98.9% success rate in placing our consulting
                    clients in at least one of their target schools, we can add more value
                    to your application than you ever thought possible.
                </p>

            </div>
        </section>
    );
};

export default SuccessRate;
