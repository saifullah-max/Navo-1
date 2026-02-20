import Image from "next/image";
import underline from "@/public/underline.png";

// No image assets needed for this hero

const Hero = () => {
    return (
        <div className="relative mt-16 md:mt-20 xl:mt-24 min-h-[400px] md:min-h-[500px] flex items-center justify-center overflow-hidden bg-blue-50">
            <div className="container mx-auto px-2 sm:px-6 lg:px-8 xl:px-12 relative z-10 flex flex-col items-center text-center">
                <div className="mb-8">
                    <span className="text-sm lg:text-base xl:text-lg font-bold text-center">
                        Meet the Founders
                    </span>
                    <h1 className="flex flex-col text-2xl lg:text-3xl xl:text-4xl mt-5 sm:mt-0 font-extrabold overflow-visible pt-4 text-center tracking-tighter uppercase text-[#03336d]">
                        <span>Built on integrity.</span>

                        <span>
                            Backed by{" "}
                            <span className="relative inline-block pb-2">
                                experience.
                                <Image
                                    src={underline}
                                    alt="Underline"
                                    width={250}
                                    height={30}
                                    className="absolute left-0 -bottom-2 w-full h-auto"
                                />
                            </span>
                        </span>
                    </h1>

                    <p className="text-base lg:text-lg font-normal max-w-2xl mx-auto mt-6 leading-tight">
                        With over 15 years of experience, we were early pioneers of strategic college counseling in the region.
                        We started small, worked closely with families, and built our reputation on honest guidance not shortcuts
                        or guarantees. Today, we remain intentionally boutique, partnering with a limited number of students so
                        every strategy is thoughtful, ethical, and personal.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
