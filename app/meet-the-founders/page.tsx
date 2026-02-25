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
                name="LOREM IPSUM"
                title="Senior Admissions Consultant"
                subtitle="Former Stanford Admissions Officer"
                imageSrc="/founders/jose-magana.jpg"
                imageAlt="LOREM IPSUM"
                paragraphs={[
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                ]}
            />
            <FounderSection
                name="LOREM IPSUM"
                title="Director of Admissions"
                subtitle="Former Yale Admissions Officer"
                imageSrc="/founders/jane-doe.jpg"
                imageAlt="LOREM IPSUM"
                paragraphs={[
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
                    "Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.",
                    "Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa."
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