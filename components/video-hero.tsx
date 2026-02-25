"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeOff } from "lucide-react";
import Image from "next/image";

interface VideoHeroProps {
  onVideoLoaded?: () => void;
}

export function VideoHero({ onVideoLoaded }: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      video.play().catch(() => {});
      setShowVideo(true);
      onVideoLoaded?.();
    };

    video.addEventListener("canplay", handleCanPlay, { once: true });
    return () => video.removeEventListener("canplay", handleCanPlay);
  }, [onVideoLoaded]);

  return (
    <div className="relative h-[30rem] sm:h-[30rem] md:h-[30rem] lg:h-[40rem]">
      {/* First Frame Image - Shows immediately */}
      <div 
        className="absolute inset-0 z-10"
        style={{ opacity: showVideo ? 0 : 1, transition: "opacity 0.3s ease" }}
      >
        <Image
          src="/NavoVideo-frame1.jpg"
          alt="Hero"
          fill
          priority
          className="object-cover"
          quality={90}
        />
      </div>

      {/* Main Video - Fades in when ready */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-10"
        style={{ opacity: showVideo ? 1 : 0, transition: "opacity 0.3s ease" }}
      >
        <source 
          src="https://aou84dm7dwdg2r06.public.blob.vercel-storage.com/NavoVideo.mp4" 
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Sound Toggle Button */}
      <div className="absolute bottom-4 right-4 z-20">
        <button
          onClick={() => {
            setIsMuted(!isMuted);
            if (videoRef.current) {
              videoRef.current.muted = !isMuted;
            }
          }}
          className={`relative inline-flex h-[40px] w-[85px] items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
            isMuted ? "bg-[#03336d]" : "bg-transparent"
          }`}
        >
          <Volume2 className="absolute left-1 w-[20px] text-white ml-1" />
          <VolumeOff className="absolute right-1 w-[20px] text-white mr-1" />
          <span
            className={`inline-block h-8 w-8 transform rounded-full bg-white transition-transform duration-200 ${
              isMuted ? "translate-x-12" : "translate-x-1"
            }`}
          ></span>
        </button>
      </div>
    </div>
  );
}
