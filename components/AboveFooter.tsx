"use client"
import { Button } from './ui/button';
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from "lucide-react";

type AboveFooterProps = {
  ctaRef: React.RefObject<HTMLDivElement>;
  isAboveFooter?: boolean;
};

const AboveFooter: React.FC<AboveFooterProps> = ({ ctaRef, isAboveFooter }) => {
  const internalRef = useRef<HTMLDivElement>(null);

  // Keep ctaRef in sync with internalRef
  useEffect(() => {
    if (ctaRef && internalRef.current) {
      (ctaRef as React.MutableRefObject<HTMLDivElement | null>).current = internalRef.current;
    }
  }, [ctaRef]);

  return (
    <div
      ref={internalRef}
      className={`w-full bg-white border-t z-50 transition-transform duration-500 ease-in-out ${isAboveFooter
          ? "relative translate-y-0"   // smooth slide to relative
          : "fixed bottom-0 left-0 translate-y-0"
        }`}
      style={{
        // optional tiny margin above footer for softness
        marginBottom: isAboveFooter ? '1rem' : 0,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <p className="font-medium text-gray-900 text-sm sm:text-base">
            Fill out our short form for a consultation to learn about Navo services.
          </p>
          <a href="/connect">
            <Button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded transition-colors w-full sm:w-auto">
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
