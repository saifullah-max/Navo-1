'use client'
import Footer from '@/components/footer'
import NavogateUniverse from '@/components/navogateUniverse'
import HeroSection from '@/components/service/graduate counselling/HeroSection'
import MBAandGraduate from '@/components/service/graduate counselling/MBAandGraduate'
import SuccessRate from '@/components/service/graduate counselling/SuccessRate'
import Testimonials from '@/components/service/graduate counselling/Testimonials'

const page = () => {
  return (
    <>
      <HeroSection />
      <MBAandGraduate />
      <SuccessRate />
      <Testimonials />
      <NavogateUniverse />
      {/* <WeWorkSection /> */}
      {/* <Footer /> */}
    </>
  )
}

export default page
