import Hero from "@/components/service/meet-the-founders/Hero";
import FounderSection from "@/components/service/meet-the-founders/FounderSection";
import { FoundersBanner } from "@/components/service/meet-the-founders/FoundersBanner";
import { StoryAndMissions } from "@/components/service/meet-the-founders/StoryAndMissions";
import NavogateUniverse from "@/components/navogateUniverse";

const page = () => {
    return (
        <>
            <Hero />
            <FounderSection
                name="RIZWAN JAVED"
                title="Co-Founder"
                subtitle="Former Stanford Admissions Officer"
                imageSrc="/rizwan-founder.png"
                imageAlt="LOREM IPSUM"
                paragraphs={[
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                ]}
            />
            <FounderSection
                name="SADAF REHMAN"
                title="Co-Founder"
                // subtitle="Former Yale Admissions Officer"
                imageSrc="/sadaf-founder.png"
                imageAlt="LOREM IPSUM"
                paragraphs={[
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                ]}
                reverse
            />
            <FoundersBanner />
            <StoryAndMissions />
            <NavogateUniverse />
        </>
    )
}

export default page;