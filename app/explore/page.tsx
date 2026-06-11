'use client'

import ActivityPortfolioSection from "@/components/service/explore/ActivityPortfolioSection"
import EssayFeedbackSection from "@/components/service/explore/EssayFeedbackSection"
import CollegeExplorerSection from "../../components/service/explore/CollegeExplorerSectionClean"
import NavogateUniverse from "@/components/navogateUniverse"


const page = () => {
    return (
        <>
            <CollegeExplorerSection />
            <ActivityPortfolioSection />
            <EssayFeedbackSection />
            <NavogateUniverse />

        </>
    )
}

export default page
