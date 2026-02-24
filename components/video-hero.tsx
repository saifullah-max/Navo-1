"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeOff } from "lucide-react";

interface VideoHeroProps {
  onVideoLoaded?: () => void;
}

export function VideoHero({ onVideoLoaded }: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    // Trigger preload immediately
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, []);

  const handleVideoReady = () => {
    console.log("Video can play through");
    onVideoLoaded?.();
  };

  return (
    <div className="relative h-[30rem] sm:h-[30rem] md:h-[30rem] lg:h-[40rem]">
      {/* Main Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        preload="auto"
        poster="/hero-poster.svg"
        className="absolute inset-0 w-full h-full object-cover z-10"
        style={{ backgroundColor: "transparent" }}
        onCanPlayThrough={handleVideoReady}
        onLoadedMetadata={() => {
          console.log("Video metadata loaded");
        }}
      >
        <source src="/NavoVideo.mp4" type="video/mp4" />
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
