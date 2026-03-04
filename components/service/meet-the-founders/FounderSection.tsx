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
        <section className="w-full py-12 px-8 md:px-12 lg:px-16 xl:px-20">
            <div
                className={`container mx-auto flex flex-col md:flex-row ${
                    reverse ? "md:flex-row-reverse" : ""
                } items-stretch gap-8 md:gap-10`}
            >

                {/* Image Column */}
                <div
                    className="flex flex-col justify-center w-full md:w-[260px]"
                    style={{ maxWidth: "340px" }}
                >
                    <div className="relative w-full h-full min-h-[260px] overflow-hidden bg-[#07306A]">
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            fill
                            className="object-cover"
                            sizes="260px"
                            priority
                        />
                    </div>
                </div>

                {/* Content Column */}
                <div className="flex flex-col justify-center flex-1 max-w-4xl">

                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-2 tracking-tighter text-[#03336d]">
                        {name}
                    </h2>

                    <div className="text-lg md:text-xl xl:text-2xl font-bold mb-1">
                        {title}
                    </div>

                    <div className="text-lg md:text-xl xl:text-2xl font-bold mb-6">
                        {subtitle}
                    </div>

                    {paragraphs.map((p, i) => (
                        <p
                            key={i}
                            className="text-[#003828] text-base lg:text-lg mb-1 leading-tight"
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