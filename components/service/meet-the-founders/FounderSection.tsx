import React from "react";
import Image from "next/image";

interface FounderSectionProps {
    name: string;
    title: string;
    subtitle: string;
    paragraphs: string[];
    imageSrc: string;
    imageAlt: string;
    reverse?: boolean;
}

const FounderSection: React.FC<FounderSectionProps> = ({
    name,
    title,
    subtitle,
    paragraphs,
    imageSrc,
    imageAlt,
    reverse = false,
}) => {
    return (
        <section className="w-full py-10 sm:py-12 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            <div
                className={`container mx-auto flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""
                    } items-stretch gap-6 sm:gap-8 md:gap-10`}
            >

                {/* Image Column */}
                <div
                    className="flex flex-col justify-center items-center md:items-start w-full md:w-[260px]"
                    style={{ maxWidth: "340px" }}
                >
                    <div className="relative w-[220px] sm:w-[240px] md:w-full h-[220px] sm:h-[240px] md:h-full md:min-h-[260px] overflow-hidden bg-[#07306A]">
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 220px, (max-width: 768px) 240px, 260px"
                            priority
                        />
                    </div>
                </div>

                {/* Content Column */}
                <div className="flex flex-col justify-center flex-1 max-w-4xl w-full text-left">

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-2 tracking-tighter text-[#03336d]">
                        {name}
                    </h2>

                    <div className="text-base sm:text-lg md:text-xl xl:text-2xl font-bold mb-1">
                        {title}
                    </div>

                    <div className="text-base sm:text-lg md:text-xl xl:text-2xl font-bold mb-5 sm:mb-6">
                        {subtitle}
                    </div>

                    {paragraphs.map((p, i) => (
                        <p
                            key={i}
                            className="text-[#003828] text-sm sm:text-base lg:text-lg mb-2 leading-relaxed"
                        >
                            {p}
                        </p>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default FounderSection;