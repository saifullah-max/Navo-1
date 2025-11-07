'use client'
import NavogateUniverse from '@/components/navogateUniverse'
import HeroSection from '@/components/service/graduate counselling/HeroSection'
import MBAandGraduate from '@/components/service/graduate counselling/MBAandGraduate'
import WeWorkSection from '@/components/service/Undergrad counselling/WeWorkSection'
import React from 'react'

const page = () => {
  return (
    <>
      <HeroSection />
      <MBAandGraduate />
      <NavogateUniverse />
      <WeWorkSection />
    </>
  )
}

export default page
