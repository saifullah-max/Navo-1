export interface CaseStudySection {
    heading: string;
    content: string;
}

export interface CaseStudy {
    slug: string;
    title: string;
    subtitle: string;
    student_image?: string;
    image: string;
    intro: string;
    sections: CaseStudySection[];
}

export const caseStudies: CaseStudy[] = [
    // 1 — FAIZ IQBAL
    {
        slug: "Faiz",
        title: "Faiz Iqbal",
        subtitle: "READ FULL CASE STUDY",
        student_image: 'faiz.jpeg',
        image: "/UCLA.jpg",
        intro:
            "Faiz entered the admissions journey as a high-achieving, intellectually curious student who had not yet aligned his interests into a clear sense of purpose. His story is one of clarity, alignment, and ambition grounded in self-understanding.",

        sections: [
            {
                heading: "Where He Started",
                content:
                    "Faiz attended one of the most rigorous schools in Pakistan, earning strong grades in advanced coursework and demonstrating intellectual depth well beyond his years. He was reflective, articulate, and deeply curious about literature, economics, and social inequity. However, these interests existed in parallel rather than in alignment. Pragmatic by nature, Faiz initially leaned toward safer, more predictable university options, prioritizing financial security over ambition.",
            },
            {
                heading: "The Challenge",
                content:
                    "Faiz did not lack ability or work ethic. His challenge was clarity. His achievements were impressive but fragmented, and his extracurricular profile did not yet reflect the depth of his thinking. Without a coherent narrative, his application risked appearing unfocused, thoughtful but underdirected. More importantly, Faiz himself had not yet fully recognized how ambitious he could be.",
            },
            {
                heading: "Navo’s Approach",
                content:
                    "Navo began by listening. Rather than reshaping Faiz, the focus was on uncovering the patterns already present in his thinking. Through close mentorship, Faiz identified his intellectual throughline: questioning dominant narratives, interrogating systems of power, and exploring the human consequences behind policy and data. Literature became his lens, economics his tool for justice, and leadership an ethical practice rather than a title.",
            },
            {
                heading: "Building Direction and Momentum",
                content:
                    "With clarity came momentum. Faiz elevated his academic performance further, achieving an outstanding SAT score and stepping into leadership as Head Boy of a student body of over three thousand students. He introduced teacher sensitivity training, led large-scale charitable initiatives, and modeled empathetic leadership. Beyond school, he engaged in policy research with a leading think tank, analyzing healthcare budgets, water distribution failures, and flood-induced migration, focusing on long-term human impact.",
            },
            {
                heading: "Rethinking Ambition",
                content:
                    "As Faiz’s sense of purpose solidified, his willingness to aim higher followed. Together, we reframed elite education not as inaccessible, but as aligned with his intellectual identity. His applications shifted from performance to authenticity, emphasizing interdisciplinary thinking, moral inquiry, and coherence rather than optics.",
            },
            {
                heading: "Outcomes",
                content:
                    "Faiz earned admission to UCLA, UC Berkeley, the University of Michigan, and Wesleyan University, with his full financial need met. He chose UCLA, where he continues to thrive academically and intellectually, while remaining an active part of the Navo community.",
            },
            {
                heading: "Why This Matters",
                content:
                    "Faiz’s journey is not about reinvention, but alignment. By uncovering the narrative that already existed and giving him the confidence to pursue it fully, Faiz moved toward direction rather than mere achievement. His story reflects Navo’s belief that ambition grounded in self-understanding leads to enduring success.",
            },
        ],
    },

    // 2 — MEEKAIL ABBAS
    {
        slug: "Meekail-Abbas",
        title: "Meekail Abbas",
        subtitle: "READ FULL CASE STUDY",
        student_image: 'meekail-abbas.jpg',
        image: "/UC-Berkeley.jpg",
        intro:
            "Meekail entered the process driven by discipline, athletic rigor, and an unwavering belief in effort. His journey became one of transforming momentum into meaning and ambition into systems-level impact.",

        sections: [
            {
                heading: "Where He Started",
                content:
                    "Meekail balanced rigorous academics with competitive football across Karachi, earning top grades, a strong SAT score, and pursuing advanced coursework in economics and mathematics. He was active in leadership, tutoring, entrepreneurship, and community service. He was not lacking drive or ambition; he was already moving, often on instinct alone.",
            },
            {
                heading: "The Challenge",
                content:
                    "From the outside, Meekail’s profile appeared complete. Yet the risk lay in that completeness. His pursuits existed in parallel rather than as parts of a unified intellectual direction. Elite universities seek not only effort, but reflection and coherence. Meekail needed to translate action into insight and articulate the system he was trying to change.",
            },
            {
                heading: "Navo’s Approach",
                content:
                    "Navo focused on channeling Meekail’s drive rather than igniting it. Through sustained mentorship and reflection, he examined the deeper connections between education, inequality, athletics, and leadership. Education became infrastructure, not charity. Athletics became cognition and strategy under pressure. Social impact became scalable systems rather than short-term intervention.",
            },
            {
                heading: "Building Direction and Momentum",
                content:
                    "With clarity, Meekail’s work evolved. He expanded peer tutoring into structured empowerment initiatives, providing financial literacy and education to underserved families. He founded BLOX, a scalable educational initiative delivering structured courses to over 150 underprivileged students, and co-founded Kaamkaaj, a professional networking platform designed to connect underserved workers with skill-aligned employment opportunities.",
            },
            {
                heading: "Academic Direction and Intellectual Depth",
                content:
                    "Meekail’s writing centered on education, inequality, and long-term social stability. Drawing on lived experience across diverse regions of Pakistan, he examined how access to education shapes economic mobility and social cohesion. His essays connected theory with firsthand engagement, demonstrating analytical rigor alongside empathy.",
            },
            {
                heading: "Outcomes",
                content:
                    "Meekail earned admission to leading institutions including UC Berkeley, UCLA, the University of Michigan, USC, Boston College, Wesleyan University, and University College London. He ultimately chose UC Berkeley, where he continues to pursue systems-driven approaches to education and social impact.",
            },
            {
                heading: "Why This Matters",
                content:
                    "Meekail’s story reflects the transition from effort to intention. By helping him understand how to use what he already had, his ambition evolved into purpose. This is the essence of Navo’s work: transforming drive into direction and action into insight.",
            },
        ],
    },

    // 3 — LAMIAH AHMAD
    {
        slug: "Lamiah-Ahmad",
        title: "Lamiah Ahmad",
        subtitle: "READ FULL CASE STUDY",
        student_image: "lamiah-ahmed.jpeg",
        image: "/University-of-Michigan.jpeg",
        intro:
            "Lamiah entered Navo as an intellectually serious student with a strong academic foundation and a keen interest in economics, climate policy, and human-centered systems. Her journey became one of translating abstract curiosity into applied research, leadership, and a coherent academic narrative.",

        sections: [
            {
                heading: "Where She Started",
                content:
                    "When Lamiah came to Navo, she had a distinctive writing voice, strong academics, and genuine interest in economics, climate policy, and human-centered systems. Her thinking was abstract, analytical, and imaginative. She asked sophisticated questions about how markets shape lived experience and how policy can be designed with care. However, her extracurricular profile was nearly empty, offering little evidence of her interests beyond the classroom. Her SAT score was below the level typically expected at selective American universities, so she had depth but not yet the structure or proof points required by admissions officers.",
            },
            {
                heading: "The Challenge",
                content:
                    "Lamiah began the process without an ambitious college list, uncertain about her competitiveness and hesitant to aim high. Her goals were exploratory rather than targeted. Navo identified the University of Michigan as an ideal fit for her interdisciplinary interests, and decided to pursue Early Decision. Her challenge was translation: she had research instincts and a clear ethical orientation toward climate justice, but no applied work or strong testing profile to demonstrate her potential. The task was to make her intellectual seriousness visible in a credible and efficient way.",
            },
            {
                heading: "Navo’s Approach",
                content:
                    "The focus was on precision and alignment. Instead of a broad range of activities, Lamiah anchored her application around one central question: how economic systems can reduce vulnerability and create resilience in the context of climate and development. Parallel priorities were set: academic credibility, which included raising her SAT past 1500, and building substantive, aligned extracurricular work. This approach ensured both rigor and coherence.",
            },
            {
                heading: "Building Direction and Momentum",
                content:
                    "Lamiah’s most significant work emerged through independent research. She developed a paper titled “The Economic Promise of Climate Finance: Insights from Asia,” analyzing whether climate finance alleviates debt and inequality or merely redistributes risk. She also conducted applied environmental analysis at Clifton Urban Forest in Karachi, measuring temperature differentials across shaded and unshaded urban spaces. These efforts linked economics, climate research, behavioral insight, and social design into a coherent academic identity.",
            },
            {
                heading: "Admissions Results",
                content:
                    "Following Navo’s guidance, Lamiah applied Early Decision to the University of Michigan. Her application demonstrated academic rigor, intellectual clarity, and initiative, supported by a testing profile aligned with her ambitions. She earned admission, transforming from a student with minimal extracurricular evidence into one with credible research, applied fieldwork, and leadership grounded in substance.",
            },
            {
                heading: "Why This Matters",
                content:
                    "Lamiah’s journey reflects a core Navo principle: students do not need reinvention to succeed. With structure, belief, and strategy, who they already are can be made visible. Her case illustrates the power of translating intellectual curiosity into applied inquiry, demonstrating impact, and pursuing aligned ambition.",
            },
        ],
    },

    {
        slug: "Lorem3",
        title: "Lorem's Case",
        subtitle: "READ FULL CASE STUDY",
        image: "/dummy.png",
        intro:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non erat ac ligula suscipit fermentum.",

        sections: [
            {
                heading: "LOREM",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.`,

            },
            {
                heading: "LOREM",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.`,

            },
            {
                heading: "LOREM",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.`,

            },
            {
                heading: "LOREM",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.`,

            },
            {
                heading: "LOREM",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.`,

            },
            {
                heading: "LOREM",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.`,

            },
        ],
    },

    // 4 — ARIA
    {
        slug: "Lorem4",
        title: "Lorem’s Case",
        subtitle: "READ FULL CASE STUDY",
        image: "/dummy.png",
        intro:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed justo eu erat fermentum dictum.",

        sections: [
            {
                heading: "LOREM",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.`,

            },
            {
                heading: "LOREM",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.`,

            },
            {
                heading: "LOREM",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.`,

            },
            {
                heading: "LOREM",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.`,

            },
            {
                heading: "LOREM",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.`,

            },
            {
                heading: "LOREM",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.`,

            },
        ],
    },

    // 5 — DYLAN
    {
        slug: "Lorem5",
        title: "Lorem's Case",
        subtitle: "READ FULL CASE STUDY",
        image: "/dummy.png",
        intro:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac felis at enim tincidunt malesuada.",

        sections: [
            {
                heading: "LOREM",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.`,

            },
            {
                heading: "LOREM",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.`,

            },
            {
                heading: "LOREM",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.`,

            },
            {
                heading: "LOREM",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.`,

            },
            {
                heading: "LOREM",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.`,

            },
            {
                heading: "LOREM",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.`,

            },
        ],
    },

    // 6 — JORDAN
    {
        slug: "Lorem6",
        title: "Lorem’s Case",
        subtitle: "READ FULL CASE STUDY",
        image: "/dummy.png",
        intro:
            "Jordan excelled in athletics but needed to demonstrate academic depth and intellectual direction.",

        sections: [
            {
                heading: "LOREM",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.`,

            },
            {
                heading: "LOREM",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.`,

            },
            {
                heading: "LOREM",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.`,

            },
            {
                heading: "LOREM",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.`,

            },
            {
                heading: "LOREM",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.`,

            },
            {
                heading: "LOREM",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.`,

            },
        ],
    },
    // 6 — JORDAN
    {
        slug: "Lorem7",
        title: "Lorem’s Case",
        subtitle: "READ FULL CASE STUDY",
        image: "/dummy.png",
        intro:
            "Jordan excelled in athletics but needed to demonstrate academic depth and intellectual direction.",

        sections: [
            {
                heading: "LOREM",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.`,

            },
            {
                heading: "LOREM",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.`,

            },
            {
                heading: "LOREM",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.`,

            },
            {
                heading: "LOREM",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.`,

            },
            {
                heading: "LOREM",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.`,

            },
            {
                heading: "LOREM",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.`,

            },
        ],
    },
    // 6 — JORDAN
    {
        slug: "Lorem8",
        title: "Lorem’s Case",
        subtitle: "READ FULL CASE STUDY",
        image: "/dummy.png",
        intro:
            "Jordan excelled in athletics but needed to demonstrate academic depth and intellectual direction.",

        sections: [
            {
                heading: "LOREM",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.`,

            },
            {
                heading: "LOREM",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.`,

            },
            {
                heading: "LOREM",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.`,

            },
            {
                heading: "LOREM",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.`,

            },
            {
                heading: "LOREM",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.`,

            },
            {
                heading: "LOREM",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.`,

            },
        ],
    },


    //     // 7 — EMMA
    //     {
    //         slug: "Lorem7",
    //         title: "Lorem’s Case",
    //         subtitle: "READ FULL CASE STUDY",
    //         image: "/dummy.png",
    //         intro:
    //             "Emma was passionate about writing but needed help building external recognition to elevate her profile.",

    //         sections: [
    //             {
    //                 heading: "LOREM",
    //                 content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    // Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    // Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. 
    // Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. 
    // Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.`,
    //             },
    //             {
    //                 heading: "LOREM",
    //                 content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    // Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    // Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. 
    // Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. 
    // Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.`,
    //             },
    //             {
    //                 heading: "LOREM",
    //                 content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    // Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    // Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. 
    // Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. 
    // Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.`,
    //             },
    //             {
    //                 heading: "LOREM",
    //                 content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    // Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    // Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. 
    // Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. 
    // Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.`,
    //             },
    //             {
    //                 heading: "LOREM",
    //                 content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    // Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    // Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. 
    // Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. 
    // Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.`,
    //             },
    //             {
    //                 heading: "LOREM",
    //                 content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    // Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    // Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. 
    // Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. 
    // Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.`,
    //             },
    //         ],
    //     },

    //     // 8 — ZAYN
    //     {
    //         slug: "Lorem8",
    //         title: "Lorem’s Case",
    //         subtitle: "READ FULL CASE STUDY",
    //         image: "/dummy.png",
    //         intro:
    //             "Zayn excelled in competitions but needed help transforming his achievements into a broader real-world narrative.",

    //         sections: [
    //             {
    //                 heading: "LOREM",
    //                 content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    // Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    // Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. 
    // Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. 
    // Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.`,
    //             },
    //             {
    //                 heading: "LOREM",
    //                 content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    // Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    // Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. 
    // Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. 
    // Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.`,
    //             },
    //             {
    //                 heading: "LOREM",
    //                 content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    // Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    // Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. 
    // Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. 
    // Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.`,
    //             },
    //             {
    //                 heading: "LOREM",
    //                 content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    // Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    // Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. 
    // Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. 
    // Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.`,
    //             },
    //             {
    //                 heading: "LOREM",
    //                 content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    // Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    // Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. 
    // Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. 
    // Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.`,
    //             },
    //             {
    //                 heading: "LOREM",
    //                 content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    // Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    // Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. 
    // Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. 
    // Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.`,
    //             },
    //         ],
    //     },

    //     // 9 — LUCAS
    //     {
    //         slug: "Lorem9",
    //         title: "Lorem’s Case",
    //         subtitle: "READ FULL CASE STUDY",
    //         image: "/dummy.png",
    //         intro:
    //             "Lucas was an aspiring entrepreneur who needed help creating a cohesive narrative around his projects.",

    //         sections: [
    //             {
    //                 heading: "LOREM",
    //                 content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    // Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    // Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. 
    // Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. 
    // Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.`,
    //             },
    //             {
    //                 heading: "LOREM",
    //                 content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    // Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    // Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. 
    // Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. 
    // Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.`,
    //             },
    //             {
    //                 heading: "LOREM",
    //                 content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    // Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    // Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. 
    // Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. 
    // Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.`,
    //             },
    //             {
    //                 heading: "LOREM",
    //                 content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    // Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    // Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. 
    // Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. 
    // Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.`,
    //             },
    //             {
    //                 heading: "LOREM",
    //                 content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    // Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    // Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. 
    // Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. 
    // Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.`,
    //             },
    //             {
    //                 heading: "LOREM",
    //                 content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    // Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    // Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. 
    // Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. 
    // Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.`,
    //             },
    //         ],
    //     },

];
