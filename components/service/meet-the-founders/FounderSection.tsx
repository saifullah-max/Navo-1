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
        <section className="w-full py-12 px-4">
            <div
                className={`container mx-auto flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-start gap-8 md:gap-16 min-h-[400px]`}
            >
                <div className="flex-shrink-0 flex justify-center items-start md:items-center w-full md:w-auto" style={{minWidth: 0, maxWidth: '340px'}}>
                    <div className="w-[260px] h-[260px] relative rounded-none overflow-hidden bg-[#07306A] flex items-center justify-center">
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            fill
                            style={{ objectFit: "cover" }}
                            className="object-cover"
                            sizes="260px"
                            priority
                        />
                    </div>
                </div>
                <div className="flex-1 flex flex-col justify-center items-start max-w-4xl min-h-full">
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-2 tracking-tighter text-[#03336d]">{name}</h2>
                    <div className="text-lg md:text-xl xl:text-2xl font-bold mb-1">{title}</div>
                    <div className="text-lg md:text-xl xl:text-2xl font-bold mb-6">{subtitle}</div>
                    {paragraphs.map((p, i) => (
                        <p key={i} className="text-[#003828] text-base lg:text-lg mb-1 leading-tight">{p}</p>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FounderSection;
