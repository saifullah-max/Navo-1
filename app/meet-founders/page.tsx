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
                // subtitle="Former Stanford Admissions Officer"
                imageSrc="/rizwan-founder.png"
                imageAlt="LOREM IPSUM"
                boldIntroName="Rizwan Javed"
                introTextAfterName=" is the Co-Founder of Navo, bringing over 15 years of experience in college counseling and education management. He has guided hundreds of students through highly competitive undergraduate and graduate admissions processes, helping them secure placements at some of the world's leading universities. His approach combines strategic planning, deep institutional knowledge, and a strong focus on building authentic, high-impact student profiles."
                paragraphs={[]}
                knowMoreLabel="Know more about Rizwan Javed"
                qaItems={[
                    {
                        question: "What I do daily:",
                        answer:
                            "Weight training. It has fundamentally changed me as a person, hopefully for the better:)"
                    },
                    {
                        question: "What everyone should do:",
                        answer: "Resistence training  - it changes human physiology."
                    },
                    {
                        question: "Favourite podcasts:",
                        answer: "Steven Bartlett, Andrew Huberman."
                    },
                    {
                        question: "Book I read in 2026",
                        answer: "How Countries Go Broke - Ray Dalio."
                    },
                    {
                        question: "Something crazy:",
                        answer: "I tracked every calorie I ate for two years."
                    },
                    {
                        question: "What do I view as single biggest success trait:",
                        answer:
                            "Consistency. You'll find opportunities and avenues which you didn't even know existed."
                    },
                    {
                        question: "Something I'm not great at:",
                        answer: "Switching off."
                    },
                    {
                        question: "Myth I disagree with:",
                        answer: "Education is expensive"
                    },
                    {
                        question: "Why I started Navo?",
                        answer:
                            "Hopefully to be able to provide a platform for anyone looking to make clear decisions for their education, and accessible globally."
                    }
                ]}
            />
            <FounderSection
                name="SADAF REHMAN"
                title="Co-Founder"
                // subtitle="Former Yale Admissions Officer"
                imageSrc="/sadaf-founder.png"
                imageAlt="LOREM IPSUM"
                boldIntroName="Sadaf Rehman"
                introTextAfterName=" is the Co-Founder of Navo, with over 15 years in the education sector, and having studied in both the United States and the UK, she's built herself on experience that goes beyond theory, it's lived, tested, and results-driven. Sadaf has been among the early pioneers of college counselling in the region, guiding hundreds of students toward highly competitive destinations.  Her belief: what truly sets outcomes apart is not just strategy, but honesty and sincerity."
                paragraphs={[]}
                knowMoreLabel="Know more about Sadaf Rehman"
                qaItems={[
                    {
                        question: "What do I stand for, no matter what?",
                        answer:
                            "Clarity, independence, and doing things on my own terms-without getting pulled into noise or expectations."
                    },
                    {
                        question: "Why did I start this company?",
                        answer:
                            "To build something that gives me control-over my time, my decisions, and my financial independence."
                    },
                    {
                        question: "A belief I hold that most people disagree with:",
                        answer:
                            "You don't need to follow traditional paths or put in endless hours to be successful. Efficiency beats presence."
                    },
                    {
                        question: "A stereotype I refuse to accept:",
                        answer:
                            "That women, especially mothers, can't fully commit to both their work and their family."
                    },
                    {
                        question: "What do I do daily that keeps me sharp?",
                        answer:
                            "I stay focused on outcomes. I make sure things get done-and that the people around me are performing at their best."
                    },
                    {
                        question: "The single biggest trait behind my success:",
                        answer:
                            "Resilience. I don't get intimidated, and I don't back down when things get difficult."
                    },
                    {
                        question: "Something I'm still working on:",
                        answer:
                            "Slowing down. I'm always thinking ahead, always moving-and I'm learning to pause when needed."
                    },
                    {
                        question: "A myth I strongly disagree with:",
                        answer:
                            "That you can't have it all. You can-if you define it on your own terms: peace, contentment, and ambition."
                    },
                    {
                        question: "What do I want to be known for?",
                        answer:
                            "For being someone who knows exactly what she's doing-and delivers, every time."
                    },
                    {
                        question: "What I have zero tolerance for:",
                        answer: "Drama. It slows everything down."
                    },
                    {
                        question: "What keeps me grounded:",
                        answer:
                            "My family. And stepping away to travel when I need perspective."
                    }
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