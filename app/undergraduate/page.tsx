'use client'
import AboveFooter from "@/components/AboveFooter";
import Footer from "@/components/footer";
import NavogateUniverse from "@/components/navogateUniverse";
import GradeNineToElevenSection from "@/components/service/Undergrad counselling/GradeNineToElevenSection";
import GradeSection from "@/components/service/Undergrad counselling/GradeSection";
import GradeSevenToEigthSection from "@/components/service/Undergrad counselling/GradeSevenToEigthSection";
import GradeTwelve_Thirteen_Section from "@/components/service/Undergrad counselling/GradeTwelve_Thirteen_Section";
import HeroSection from "@/components/service/Undergrad counselling/HeroSection";
import IpsumSection from "@/components/service/Undergrad counselling/IpsumSection";
import Transfer from "@/components/service/Undergrad counselling/Transfer";
import WeWorkSection from "@/components/service/Undergrad counselling/WeWorkSection";
import React, { useRef, useState } from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiMeta } from "react-icons/si"; // Meta (Special from Simple Icons)
const page = () => {
  const [isAboveFooter, setIsAboveFooter] = useState(false);
  const ctaRef = useRef<HTMLDivElement>(null);


  return (
    <>
      <HeroSection />
      <GradeSection />
      <IpsumSection />
      <GradeSevenToEigthSection />
      <GradeNineToElevenSection />
      <GradeTwelve_Thirteen_Section />
      <Transfer />
      <NavogateUniverse />
      <WeWorkSection />

      {/* <AboveFooter isAboveFooter={isAboveFooter} ctaRef={ctaRef} /> */}
      {/* Footer Start */}
      {/* <Footer /> */}
    </>
  );
};

export default page;
