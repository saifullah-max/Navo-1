import Hero from "@/components/service/meet-the-founders/Hero";
import FounderSection from "@/components/service/meet-the-founders/FounderSection";

const page = () => {
    return (
        <>
            <Hero />
            <FounderSection
                name="Jose Magana"
                title="Senior Admissions Consultant"
                subtitle="Former Stanford Admissions Officer"
                imageSrc="/founders/jose-magana.jpg" // Place the image in public/founders/
                imageAlt="Jose Magana"
                paragraphs={[
                    "Jose Magana served as an admission officer at Stanford University’s Office of Undergraduate Admission.",
                    "Over the course of three years, Jose reviewed over 4,000 undergraduate applications for admission to Stanford, primarily from New York City, Los Angeles, the Bay Area, Upstate New York, and Arizona.",
                    "In addition to presenting admission recommendations to the admission committee, he participated in multiple committees as a voting member, covering applications from many U.S. states and countries around the world.",
                    "Jose received his bachelor’s degree in economics from Harvard College."
                ]}
            />
            <FounderSection
                name="Jane Doe"
                title="Director of Admissions"
                subtitle="Former Yale Admissions Officer"
                imageSrc="/founders/jane-doe.jpg" // Example placeholder
                imageAlt="Jane Doe"
                paragraphs={[
                    "Jane Doe served as an admission officer at Yale University’s Office of Undergraduate Admission.",
                    "She has extensive experience reviewing applications from across the globe and has helped shape the incoming classes at Yale for several years.",
                    "Jane holds a master’s degree in education from Columbia University."
                ]}
                reverse
            />
        </>
    )
}

export default page;