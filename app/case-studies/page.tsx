import NavogateUniverse from '@/components/navogateUniverse';
import CaseStudies from '@/components/service/case-studies/CaseStudy';
import HeroSection from '@/components/service/case-studies/HeroSection';
import React from 'react';

const Page = () => {
    return (
        <>
            <HeroSection />
            <CaseStudies />
            <NavogateUniverse />
        </>
    );
}

export default Page;
