"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import underline from "@/public/underline.png";

type TestimonialVideo = {
    id: number;
    title: string;
    video: string;
};

const testimonials: TestimonialVideo[] = [
    {
        id: 1,
        title: "Graduate testimonial 1",
        video: "https://ne8t2xetsvpqvg1n.public.blob.vercel-storage.com/grad-testimonial-1.mp4",
    },
    {
        id: 2,
        title: "Graduate testimonial 2",
        video: "https://ne8t2xetsvpqvg1n.public.blob.vercel-storage.com/grad-testimonial-2.mp4",
    },
    {
        id: 3,
        title: "Graduate testimonial 3",
        video: "https://ne8t2xetsvpqvg1n.public.blob.vercel-storage.com/grad-testimonial-3.mp4",
    },
    {
        id: 4,
        title: "Graduate testimonial 4",
        video: "https://ne8t2xetsvpqvg1n.public.blob.vercel-storage.com/grad-testimonial-4.mp4",
    },
];

function seekToFirstFrame(videoElement: HTMLVideoElement) {
    try {
        videoElement.pause();
        videoElement.currentTime = 0;
    } catch {
        // Ignore browsers that have not finished loading metadata yet.
    }
}

function PreviewCard({
    item,
    videoSrc,
    compact = false,
    onPlay,
}: {
    item: TestimonialVideo;
    videoSrc?: string;
    compact?: boolean;
    onPlay: (item: TestimonialVideo) => void;
}) {
    return (
        <div
            className={
                compact
                    ? "relative bg-gray-200 rounded-lg overflow-hidden h-36 sm:h-44"
                    : "relative bg-gray-200 rounded-xl overflow-hidden h-80 sm:h-[260px] md:h-[290px] lg:h-[350px]"
            }
        >
            <video
                src={videoSrc ?? item.video}
                className="w-full h-full object-cover"
                preload="auto"
                muted
                playsInline
                onLoadedMetadata={(event) => seekToFirstFrame(event.currentTarget)}
                onLoadedData={(event) => seekToFirstFrame(event.currentTarget)}
                onCanPlay={(event) => seekToFirstFrame(event.currentTarget)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/10" />
            <div className="absolute inset-0 flex items-center justify-center">
                <button
                    type="button"
                    onClick={() => onPlay(item)}
                    className={
                        compact
                            ? "bg-white rounded-full w-10 h-10 flex items-center justify-center shadow hover:scale-110 transition-transform"
                            : "bg-white rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                    }
                    aria-label={`Play ${item.title}`}
                >
                    <svg
                        className={compact ? "w-4 h-4 text-blue-600 ml-0.5" : "w-5 h-5 sm:w-6 sm:h-6 text-blue-600 ml-1"}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeVideo, setActiveVideo] = useState<TestimonialVideo | null>(null);
    const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [transitionIndex, setTransitionIndex] = useState<number | null>(null);
    const [dragOffset, setDragOffset] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [videoSources, setVideoSources] = useState<Record<number, string>>({});
    const pointerStartX = useRef(0);
    const pointerStartY = useRef(0);
    const activePointerId = useRef<number | null>(null);
    const animationTimerRef = useRef<number | null>(null);

    useEffect(() => {
        if (!activeVideo) {
            return;
        }

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, [activeVideo]);

    useEffect(() => {
        if (!activeVideo) return;

        const handleKey = (event: KeyboardEvent) => {
            const currentIdx = testimonials.findIndex((t) => t.id === activeVideo.id);

            if (event.key === "Escape") {
                setActiveVideo(null);
            } else if (event.key === "ArrowRight") {
                const nextIdx = (currentIdx + 1) % testimonials.length;
                setActiveVideo(testimonials[nextIdx]);
            } else if (event.key === "ArrowLeft") {
                const prevIdx = (currentIdx - 1 + testimonials.length) % testimonials.length;
                setActiveVideo(testimonials[prevIdx]);
            }
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [activeVideo]);

    useEffect(() => {
        return () => {
            if (animationTimerRef.current !== null) {
                window.clearTimeout(animationTimerRef.current);
            }
            Object.values(videoSources).forEach((source) => {
                URL.revokeObjectURL(source);
            });
        };
    }, [videoSources]);

    useEffect(() => {
        let isCancelled = false;
        const objectUrls: string[] = [];

        const fetchVideos = async () => {
            const entries = await Promise.all(
                testimonials.map(async (item) => {
                    try {
                        const response = await fetch(item.video, { cache: "force-cache" });
                        const blob = await response.blob();
                        const objectUrl = URL.createObjectURL(blob);
                        objectUrls.push(objectUrl);
                        return [item.id, objectUrl] as const;
                    } catch {
                        return [item.id, item.video] as const;
                    }
                })
            );

            if (isCancelled) {
                objectUrls.forEach((source) => URL.revokeObjectURL(source));
                return;
            }

            setVideoSources(Object.fromEntries(entries));
        };

        fetchVideos();

        return () => {
            isCancelled = true;
            objectUrls.forEach((source) => URL.revokeObjectURL(source));
        };
    }, []);

    const goToTestimonial = (nextIndex: number, direction: "left" | "right") => {
        if (isAnimating || nextIndex === currentIndex) {
            return;
        }

        setSlideDirection(direction);
        setTransitionIndex(nextIndex);
        setIsAnimating(true);
        setCurrentIndex(nextIndex);
        setDragOffset(0);

        if (animationTimerRef.current !== null) {
            window.clearTimeout(animationTimerRef.current);
        }

        animationTimerRef.current = window.setTimeout(() => {
            setIsAnimating(false);
            setTransitionIndex(null);
            setSlideDirection(null);
        }, 320);
    };

    const nextTestimonial = () => {
        goToTestimonial((currentIndex + 1) % testimonials.length, "left");
    };

    const prevTestimonial = () => {
        goToTestimonial((currentIndex - 1 + testimonials.length) % testimonials.length, "right");
    };

    const goToNextVideo = () => {
        if (!activeVideo) {
            return;
        }

        const currentIdx = testimonials.findIndex((item) => item.id === activeVideo.id);
        const nextIdx = (currentIdx + 1) % testimonials.length;
        setActiveVideo(testimonials[nextIdx]);
    };

    const goToPrevVideo = () => {
        if (!activeVideo) {
            return;
        }

        const currentIdx = testimonials.findIndex((item) => item.id === activeVideo.id);
        const prevIdx = (currentIdx - 1 + testimonials.length) % testimonials.length;
        setActiveVideo(testimonials[prevIdx]);
    };

    const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
        if (event.pointerType === "mouse" && event.button !== 0) {
            return;
        }

        activePointerId.current = event.pointerId;
        pointerStartX.current = event.clientX;
        pointerStartY.current = event.clientY;
        event.currentTarget.setPointerCapture(event.pointerId);
    };

    const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
        if (activePointerId.current !== event.pointerId) {
            return;
        }

        const deltaX = event.clientX - pointerStartX.current;
        const deltaY = event.clientY - pointerStartY.current;

        if (Math.abs(deltaX) < Math.abs(deltaY)) {
            return;
        }

        setIsDragging(true);
        setDragOffset(deltaX);
    };

    const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
        if (activePointerId.current !== event.pointerId) {
            return;
        }

        activePointerId.current = null;
        const deltaX = event.clientX - pointerStartX.current;
        const deltaY = event.clientY - pointerStartY.current;
        const threshold = 60;

        if (Math.abs(deltaX) >= threshold && Math.abs(deltaX) > Math.abs(deltaY)) {
            if (deltaX < 0) {
                nextTestimonial();
            } else {
                prevTestimonial();
            }
        }

        setIsDragging(false);
        setDragOffset(0);
    };

    const handlePointerCancel = (event: React.PointerEvent<HTMLDivElement>) => {
        if (activePointerId.current === event.pointerId) {
            activePointerId.current = null;
            setIsDragging(false);
            setDragOffset(0);
        }
    };

    const current = testimonials[currentIndex];
    const next = testimonials[(currentIndex + 1) % testimonials.length];
    const transitionCard = transitionIndex !== null ? testimonials[transitionIndex] : null;

    const cardOffset = isDragging ? dragOffset : 0;
    const cardRotation = isDragging ? dragOffset * 0.03 : 0;
    const cardDirection = slideDirection === "left" ? 1 : slideDirection === "right" ? -1 : 0;
    const cardEnterTransform = isAnimating && slideDirection ? `translateX(${cardDirection * 42}px) scale(0.98)` : "translateX(0) scale(1)";

    const currentVideoSrc = videoSources[current.id] ?? current.video;
    const nextVideoSrc = videoSources[next.id] ?? next.video;
    const activeVideoSrc = activeVideo ? videoSources[activeVideo.id] ?? activeVideo.video : null;

    return (
        <section className="w-full pt-8 pb-12 flex flex-col items-center bg-white">
            <div className="text-center mb-6">
                <div className="relative inline-block">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-1 tracking-tight uppercase">
                        Client
                        <span className="relative">
                            {" "}Success
                            <span className="block absolute left-1/2 -translate-x-1/2 top-[88%]">
                                <Image
                                    src={underline}
                                    alt="underline"
                                    width={400}
                                    height={10}
                                    className="opacity-95 w-[140%] md:w-[160%] max-w-none"
                                    priority
                                />
                            </span>
                        </span>
                        <span>{" "}Stories</span>
                    </h1>
                </div>
            </div>

            <div className="w-full h-[700px] relative overflow-hidden">
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
                            const height = 600;
                            const lines = [];

                            const lineCount = 10;
                            const baseSpacing = 35;
                            const startX = 30;

                            for (let i = 0; i < lineCount; i++) {
                                let topX: number;
                                let topY: number;

                                if (i === 0) {
                                    topX = 0;
                                    topY = 80;
                                } else if (i === 1) {
                                    topX = 0;
                                    topY = 130;
                                } else if (i === 2) {
                                    topX = 5;
                                    topY = 0;
                                } else {
                                    const compression = 0.55;
                                    const reductionFactor = 0.3;
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

                <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16">
                    <div className="relative max-w-4xl w-full flex justify-center" style={{
                        perspective: "1400px",
                    }}
                    >
                        <div
                            className="z-40 bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-w-xl w-full h-auto sm:h-[340px] md:h-[330px] lg:h-[456px] transition-all duration-300 ease-out"
                            onPointerDown={handlePointerDown}
                            onPointerMove={handlePointerMove}
                            onPointerUp={handlePointerUp}
                            onPointerCancel={handlePointerCancel}
                            style={{
                                transform: `${cardEnterTransform} translateX(${cardOffset}px) rotateZ(${cardRotation}deg)`,
                                cursor: activePointerId.current !== null ? "grabbing" : "grab",
                                touchAction: "pan-y",
                            }}
                        >
                            <PreviewCard item={current} videoSrc={currentVideoSrc} onPlay={setActiveVideo} />
                        </div>

                        {!isAnimating && (
                            <div className="hidden lg:block absolute right-[-10px] top-1/2 -translate-y-1/2 scale-75 opacity-70 bg-white rounded-xl shadow-xl p-4 w-64 sm:w-80 transition-all duration-[820ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
                                <PreviewCard item={next} videoSrc={nextVideoSrc} compact onPlay={setActiveVideo} />
                                <p className="text-blue-900 text-sm font-medium mt-3">{next.title}</p>
                            </div>
                        )}
                    </div>
                </div>

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

                {activeVideo && (
                    <div
                        className="fixed inset-0 z-40 flex items-center justify-center bg-black/75 p-4"
                        onClick={() => setActiveVideo(null)}
                    >
                        <div
                            className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl"
                            onClick={(event) => event.stopPropagation()}
                            onPointerDown={handlePointerDown}
                            onPointerUp={handlePointerUp}
                            onPointerCancel={handlePointerCancel}
                            style={{ touchAction: "pan-y" }}
                        >
                            <button
                                type="button"
                                onClick={() => setActiveVideo(null)}
                                className="absolute right-3 top-3 z-20 rounded-full bg-black/60 px-3 py-2 text-sm font-medium text-white backdrop-blur hover:bg-black/80"
                                aria-label="Close video"
                            >
                                Close
                            </button>

                            <video
                                key={activeVideo.id}
                                src={activeVideoSrc ?? activeVideo.video}
                                controls
                                autoPlay
                                playsInline
                                className="h-auto w-full max-h-[80vh] bg-black"
                            />
                        </div>
                    </div>
                )}
            </div>
            {/* Simple transitions used (no keyframes) to match home "How We Work" animation style */}
        </section>
    );
};

export default Testimonials;
