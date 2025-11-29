import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/components/service/case studies/caseStudies";
import NavogateUniverse from "@/components/navogateUniverse";

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
    const { slug } = await params; // <-- THIS is required

    const studyIndex = caseStudies.findIndex((c) => c.slug === slug);
    const study = caseStudies[studyIndex];

    if (!study) return <div className="p-10">Case study not found.</div>;

    const recommended = [
        caseStudies[(studyIndex + 1) % caseStudies.length],
        caseStudies[(studyIndex + 2) % caseStudies.length],
        caseStudies[(studyIndex + 3) % caseStudies.length],
    ];

    return (
        <>
            <div className="py-16 px-4 max-w-4xl mx-auto mt-20">
                <p className="text-lg text-center font-semibold">Case Studies</p>

                <h1 className="mt-8 text-4xl font-extrabold text-[#03336D] text-center uppercase">
                    {study.title}
                </h1>

                <p className="mt-4 text-center max-w-sm text-lg mx-auto leading-tight">
                    {study.intro}
                </p>

                {/* Featured Image */}
                <div className="mt-12 w-full">
                    <Image
                        src={study.image}
                        alt={study.title}
                        width={1200}
                        height={550}
                        className="rounded-lg w-full h-auto object-cover"
                    />
                </div>

                {/* Dynamic Sections */}
                <div className="mt-14 space-y-10">
                    {study.sections.map((sec, i) => (
                        <div key={i} className="border-b-2 border-gray-900 pb-6">
                            <h3 className="text-xl font-extrabold mb-3 text-[#03336D]">{sec.heading}</h3>
                            <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                                {sec.content}
                            </p>
                        </div>
                    ))}
                </div>

                <h2 className="text-3xl font-bold mt-20 mb-6">More Case Studies</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {recommended.map((item) => (
                        <Link key={item.slug} href={`/case-studies/${item.slug}`}>
                            <div className="cursor-pointer overflow-hidden rounded-lg shadow-md group relative">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={400}
                                    height={300}
                                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                                <div className="absolute bottom-4 left-4 text-white">
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                    <p className="text-sm">{item.subtitle}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <NavogateUniverse />
        </>
    );
}
