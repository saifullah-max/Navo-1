'use client'
import Footer from '@/components/footer'
import NavogateUniverse from '@/components/navogateUniverse'
import HeroSection from '@/components/service/graduate counselling/HeroSection'
import MBAandGraduate from '@/components/service/graduate counselling/MBAandGraduate'
import SuccessRate from '@/components/service/graduate counselling/SuccessRate'
import Testimonials from '@/components/service/graduate counselling/Testimonials'
import WeWorkSection from '@/components/service/Undergrad counselling/WeWorkSection'
import React from 'react'

const page = () => {
  return (
    <>
      <HeroSection />
      <MBAandGraduate />
      <SuccessRate />
      <Testimonials />
      <NavogateUniverse />
      <WeWorkSection />
      <Footer />
    </>
  )
}

export default page
