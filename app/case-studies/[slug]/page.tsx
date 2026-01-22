import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/components/service/case-studies/caseStudies";
import NavogateUniverse from "@/components/navogateUniverse";
import CaseStudiesCarouselWrapper from "@/components/service/case-studies/CaseStudiesCarouselWrapper";

interface CaseStudyPageProps {
    params: { slug: string };
}

export async function generateStaticParams() {
    return caseStudies.map((study) => ({ slug: study.slug }));
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
    // If params is async, you can unwrap it
    const { slug } = await params;

    if (!slug) {
        return (
            <div className="p-10 text-center text-red-600 font-bold">
                Invalid case study link.
            </div>
        );
    }

    const studyIndex = caseStudies.findIndex(
        (c) => c.slug.toLowerCase() === slug.toLowerCase()
    );

    if (studyIndex === -1) {
        return (
            <div className="p-10 text-center text-red-600 font-bold">
                Case study not found.
            </div>
        );
    }

    const study = caseStudies[studyIndex];

    // recommended carousel handled in client component

    return (
        <>
            <div className="py-16 px-4 max-w-4xl mx-auto mt-20">
                {/* Header */}
                <p className="text-lg text-center font-semibold">Case Studies</p>

                <h1 className="mt-8 text-4xl font-extrabold text-[#03336D] text-center uppercase">
                    {study.title}
                </h1>

                <p className="mt-4 text-center max-w-lg text-lg mx-auto leading-tight font-medium">
                    {study.intro}
                </p>

                {/* Featured Image */}
                <div className="mt-12 w-full">
                    <Image
                        src={study.image}
                        alt={study.title}
                        width={830}
                        height={500}
                        className="
    rounded-lg object-cover mx-auto
    w-full h-auto
    sm:max-w-[720px]
    md:max-w-[780px]
    lg:max-w-[820px]
    xl:max-w-[830px] xl:h-[460px]
    2xl:max-w-[950px] 2xl:h-[520px]
  "
                    />

                </div>

                {/* Dynamic Sections */}
                <div className="mt-14 space-y-10">
                    {study.sections.map((sec, i) => (
                        <div key={i} className="border-b-2 border-gray-900 pb-6">
                            <h3 className="text-xl font-extrabold mb-3 text-[#03336D]">
                                {sec.heading}
                            </h3>
                            <p className="text-gray-700 whitespace-pre-line leading-tight">
                                {sec.content}
                            </p>
                        </div>
                    ))}
                </div>

                {/* More Case Studies */}
                <CaseStudiesCarouselWrapper currentSlug={slug} />
            </div>

            <NavogateUniverse />
        </>
    );
}
