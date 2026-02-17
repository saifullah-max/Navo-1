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
                className={`container mx-auto grid grid-cols-1 md:grid-cols-2 items-stretch gap-8 md:gap-16 min-h-[400px]`}
            >
                <div className={`${reverse ? 'md:order-2' : 'md:order-1'} flex items-stretch`}>
                    <div className="w-full aspect-square relative rounded-none overflow-hidden bg-[#07306A] flex items-center justify-center min-h-full">
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            fill
                            style={{ objectFit: "cover" }}
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                    </div>
                </div>
                <div className={`${reverse ? 'md:order-1' : 'md:order-2'} flex flex-col justify-center items-start max-w-2xl min-h-full`}>
                    <h2 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tighter">{name}</h2>
                    <div className="text-xl md:text-2xl font-bold mb-2">{title}</div>
                    <div className="text-xl md:text-2xl font-bold mb-6">{subtitle}</div>
                    {paragraphs.map((p, i) => (
                        <p key={i} className="text-[#003828] text-lg md:text-xl mb-6 leading-tight">{p}</p>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FounderSection;
