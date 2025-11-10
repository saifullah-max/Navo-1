"use client";
import { Button } from "./ui/button";
import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const AboveFooter = () => {
  const internalRef = useRef<HTMLDivElement>(null);
  const [isAboveFooter, setIsAboveFooter] = useState(false);

  useEffect(() => {
    const sentinel = document.querySelector("#cta-stop-here");

    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAboveFooter(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.01, // tiny threshold avoids flicker
      }
    );

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={internalRef}
      className={`w-full bg-white border-t z-50 transition-all duration-300 ${isAboveFooter ? "relative" : "fixed bottom-0 left-0"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <p className="font-medium text-gray-900 text-sm sm:text-base">
            Fill out our short form for a consultation to learn about Navo services.
          </p>
          <a href="/connect">
            <Button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded w-full sm:w-auto">
              CONNECT WITH US
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboveFooter;
