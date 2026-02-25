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

    let hasShown = false;

    const showVideoAndNotify = () => {
      if (hasShown) return;
      hasShown = true;
      setShowVideo(true);
      onVideoLoaded?.();
    };

    const handleCanPlay = () => {
      video.play().catch(() => {});
      showVideoAndNotify();
    };

    const handlePlaying = () => {
      showVideoAndNotify();
    };

    // Multiple event listeners for reliability on production
    video.addEventListener("canplay", handleCanPlay, { once: true });
    video.addEventListener("playing", handlePlaying, { once: true });
    video.addEventListener("loadeddata", handleCanPlay, { once: true });

    // Fallback: force show video after 5 seconds even if events don't fire
    const fallbackTimer = setTimeout(() => {
      if (!hasShown) {
        console.log("Fallback: forcing video display");
        video.play().catch(() => {});
        showVideoAndNotify();
      }
    }, 5000);

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("playing", handlePlaying);
      video.removeEventListener("loadeddata", handleCanPlay);
      clearTimeout(fallbackTimer);
    };
  }, [onVideoLoaded]);

  return (
    <div className="relative h-[30rem] sm:h-[30rem] md:h-[30rem] lg:h-[40rem]">
      {/* First Frame Image - Shows immediately */}
      <div 
        className="absolute inset-0 z-[5]"
        style={{ 
          opacity: showVideo ? 0 : 1, 
          transition: "opacity 0.5s ease",
          pointerEvents: showVideo ? "none" : "auto"
        }}
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
        className="absolute inset-0 w-full h-full object-cover z-[10]"
      >
        <source 
          src="https://aou84dm7dwdg2r06.public.blob.vercel-storage.com/NavoVideo.mp4" 
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Sound Toggle Button */}
      <div className="absolute bottom-4 right-4 z-[30]">
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
