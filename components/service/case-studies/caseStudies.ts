export interface CaseStudySection {
    heading: string;
    content: string;
}

export interface CaseStudy {
    slug: string;
    title: string;
    subtitle: string;
    image: string;
    intro: string;
    sections: CaseStudySection[];
}

export const caseStudies: CaseStudy[] = [
    // 1 — RIA
    {
        slug: "ria",
        title: "Ria’s Case",
        subtitle: "READ FULL CASE STUDY",
        image: "/ria-case.jpg",
        intro:
            "She intended to apply to Northeastern and wanted to be a physician. With her love for art, she gained admission to Harvard.",

        sections: [
            {
                heading: "SITUATION",
                content: `Ria approached us in 11th grade with excellent grades and strong test scores. 
She initially focused on BS/MD programs but lacked a compelling narrative. 
Her activities, while impressive, were typical for high-achieving STEM-oriented students. 
She needed a standout angle to differentiate her from thousands of similar applicants. 
Her goal was a top-tier university—preferably in the Ivy League.`,
            },
            {
                heading: "GOAL SCHOOLS",
                content: `Ria set her sights on HYPSM-level institutions with selective BS/MD options. 
She expressed strong interest in Harvard, Princeton, Yale, and Brown. 
She also considered applying to Stanford and Columbia. 
Her long-term ambition was to pursue medicine but through a unique academic lens. 
We helped refine her goals based on strengths and long-term positioning.`,
            },
            {
                heading: "CHALLENGES",
                content: `Ria's initial profile looked similar to countless other pre-med Indian American applicants. 
Her background and activities aligned too closely with common stereotypes. 
Admissions committees often encounter identical profiles year after year. 
We needed to help her break away from that predictable narrative. 
A fresh, distinct story was necessary to avoid being overlooked.`,
            },
            {
                heading: "HOW WE GUIDED HER",
                content: `We first restructured her extracurricular direction toward her interest in art history. 
She researched lost artworks and worked with an art attorney. 
She participated in efforts to track stolen paintings from the Gardner Museum. 
She also wrote a detailed biography of a well-known art dealer. 
These projects highlighted her originality and intellectual curiosity.`,
            },
            {
                heading: "APPLICATION STRATEGY",
                content: `We advised Ria not to apply to BS/MD programs, as they would reduce her Ivy chances. 
We helped her build essays showcasing her interdisciplinary passion for medicine and art. 
Her supplements emphasized storytelling, cultural impact, and independent research. 
We positioned her as someone who blends medical ambition with art history expertise. 
This combination made her one of the most unique applicants in the pool.`,
            },
            {
                heading: "COLLEGE RESULTS",
                content: `Ria was admitted to Harvard in the Early Action round. 
She ultimately majored in art history while completing her pre-med requirements. 
Her unusual academic combination strengthened her future medical school applications. 
She became deeply involved in contemporary art studies alongside sciences. 
Her success story demonstrates the power of a well-constructed narrative.`,
            },
        ],
    },

    // 2 — JAKE
    {
        slug: "jake",
        title: "Jake’s Case",
        subtitle: "READ FULL CASE STUDY",
        image: "/jake-case.jpeg",
        intro:
            "Jake struggled to articulate a clear academic direction despite being a bright student with scattered interests.",

        sections: [
            {
                heading: "SITUATION",
                content: `Jake was a multi-talented student with high test scores but unfocused activities. 
He participated in robotics, debate, and volunteer work, but nothing tied together cohesively. 
He lacked a thematic direction that admissions officers could easily understand. 
His essays risked sounding generic due to the broad range of interests. 
We needed to help him carve out a defined academic identity.`,
            },
            {
                heading: "ACADEMIC INTERESTS",
                content: `Jake enjoyed both engineering and public policy. 
We helped him find interdisciplinary areas that linked the two fields. 
He developed an interest in ethical AI, which merged his passions naturally. 
He began reading research papers and attending online seminars on the topic. 
This new path helped reshape his academic narrative.`,
            },
            {
                heading: "CHALLENGES",
                content: `Jake’s original activities did not reflect depth in any specific area. 
Admissions committees might misinterpret his profile as lacking focus. 
His early essays also read more like lists of accomplishments. 
We needed to emphasize commitment, depth, and intellectual maturity. 
He also struggled to communicate personal motivation effectively.`,
            },
            {
                heading: "STRATEGIC CHANGES",
                content: `We aligned his extracurriculars with AI ethics: debate topics, research initiatives, and community workshops. 
He created a small program teaching teens about responsible AI usage. 
He collaborated with a professor on a long-form research project. 
His digital portfolio showcased essays and small case studies. 
These steps built a strong and coherent academic identity.`,
            },
            {
                heading: "ESSAY REFINEMENT",
                content: `Jake’s essays shifted from generic to deeply reflective. 
He discussed the intersection of human behavior, technology, and fairness. 
Stories from debate competitions became meaningful anecdotes. 
He connected personal experiences to larger societal issues. 
The final application was authentic, intellectual, and purpose-driven.`,
            },
            {
                heading: "RESULTS",
                content: `Jake received offers from Northwestern, UC Berkeley, and Carnegie Mellon. 
His interdisciplinary approach appealed strongly to engineering-policy programs. 
He secured multiple merit scholarships due to academic coherence. 
His acceptance letters praised his unique combination of interests. 
He ultimately chose Northwestern for its flexibility and research opportunities.`,
            },
        ],
    },

    // 3 — MICHELLE
    {
        slug: "michelle",
        title: "Michelle’s Case",
        subtitle: "READ FULL CASE STUDY",
        image: "/michelle-case.webp",
        intro:
            "Michelle had strong leadership experience but needed help turning her work into a compelling and unique application narrative.",

        sections: [
            {
                heading: "BACKGROUND",
                content: `Michelle served as president of her school’s service club. 
She volunteered extensively but struggled to show personal impact. 
Her application risked sounding like many other community-service-focused profiles. 
We wanted to highlight the organizational depth behind her leadership. 
Her goal was a university where social entrepreneurship thrives.`,
            },
            {
                heading: "IDENTIFYING A FOCUS",
                content: `We shifted her narrative toward sustainable community systems. 
She led a recycling initiative that reduced school waste significantly. 
Her team created awareness campaigns with actual measurable outcomes. 
Michelle documented processes, data, and environmental results. 
This turned her volunteer work into a structured, impactful story.`,
            },
            {
                heading: "CHALLENGES",
                content: `Morgan faced competition from students with stronger STEM portfolios. 
Her initial essays lacked quantifiable results from her volunteer work. 
She tended to understate her leadership roles. 
We encouraged her to provide detailed examples and metrics. 
Her profile needed more strategic academic alignment.`,
            },
            {
                heading: "PROJECT DEVELOPMENT",
                content: `We helped her launch a school-wide sustainability audit. 
Students collected data on waste, energy use, and recycling rates. 
She prepared a report and presented it to the school board. 
This project showcased initiative and analytical thinking. 
It also gave her a standout experience to highlight in applications.`,
            },
            {
                heading: "ESSAY APPROACH",
                content: `Her writing emphasized grassroots leadership and community influence. 
She connected environmental issues to personal childhood experiences. 
Her supplements showed self-awareness and long-term vision. 
Michelle’s authentic voice came through in every draft. 
Admissions officers responded well to her clarity and maturity.`,
            },
            {
                heading: "RESULTS",
                content: `Michelle earned admission to Cornell and UC San Diego. 
She was also offered early acceptance at Boston University. 
Her sustainable-leadership narrative distinguished her from peers. 
She ultimately selected Cornell for its environmental programs. 
Her story demonstrates the power of measurable student impact.`,
            },
        ],
    },

    // 4 — PRIYANKA
    {
        slug: "priyanka",
        title: "Priyanka’s Case",
        subtitle: "READ FULL CASE STUDY",
        image: "/priyanka-case.jpg",
        intro:
            "Priyanka excelled academically but needed a differentiated hook to stand out among competitive STEM applicants.",

        sections: [
            {
                heading: "SITUATION",
                content: `Priyanka was a top STEM student with perfect grades in math and physics. 
Her extracurriculars included robotics and coding competitions. 
However, her profile mirrored many high-achieving South Asian applicants. 
We aimed to help her stand out in a heavily saturated talent pool. 
She hoped to apply to engineering programs at elite universities.`,
            },
            {
                heading: "ACADEMIC POSITIONING",
                content: `We guided her toward an interest in human-centered engineering. 
She started exploring the psychology behind product design. 
This shift opened doors to interdisciplinary research opportunities. 
She developed a distinct narrative combining engineering and empathy. 
Her repositioning made her more memorable and original.`,
            },
            {
                heading: "CHALLENGES",
                content: `Her technical projects were excellent but lacked storytelling depth. 
Most of her activities fell under the standard engineering template. 
Admissions officers could easily mistake her for dozens of similar applicants. 
We needed stronger connections between her life story and academic goals. 
Her essays also needed more personal reflection.`,
            },
            {
                heading: "NEW PROJECTS",
                content: `We helped Priyanka design a tactile device for visually impaired students. 
She worked with nonprofits to test prototypes in real settings. 
She documented user feedback and iterated on her designs. 
These hands-on experiences strengthened her application significantly. 
Her engineering portfolio now had emotional and societal depth.`,
            },
            {
                heading: "ESSAY DIRECTION",
                content: `Her essays explored how technology can enhance human dignity. 
She shared stories of helping a relative with visual challenges. 
Her writing balanced empathy with technical precision. 
Admissions teams appreciated the clarity of her long-term purpose. 
This personal connection became central to her narrative.`,
            },
            {
                heading: "RESULTS",
                content: `Priyanka earned admission to Georgia Tech and Rice University. 
She also secured early acceptance at Purdue with a scholarship. 
Her human-centered engineering angle resonated strongly across applications. 
She selected Rice for its small engineering cohorts. 
Her journey highlighted the value of combining STEM with compassion.`,
            },
        ],
    },

    // 5 — SAM
    {
        slug: "sam",
        title: "Sam’s Case",
        subtitle: "READ FULL CASE STUDY",
        image: "/sam-case.jpg",
        intro:
            "Sam aimed for top computer science programs but lacked standout achievements despite strong academics.",

        sections: [
            {
                heading: "INITIAL PROFILE",
                content: `Sam maintained excellent grades and had moderate coding experience. 
He knew several programming languages but had no major projects. 
His extracurricular involvement was shallow and scattered. 
We needed to help him build demonstrable technical impact. 
His target schools included MIT, CMU, and Stanford.`,
            },
            {
                heading: "BUILDING A TECH ANGLE",
                content: `We focused Sam’s interests on cybersecurity and digital safety. 
He researched vulnerabilities in local school networks. 
He later built an educational website teaching teens about online protection. 
These early efforts became powerful application differentiators. 
His story evolved into one of student-driven digital advocacy.`,
            },
            {
                heading: "CHALLENGES",
                content: `His early drafts lacked emotional depth and personal motivation. 
He struggled to explain why computer science mattered to him deeply. 
His résumé alone was not enough for elite university committees. 
We encouraged him to connect personal experiences to his technical pursuits. 
His narrative eventually shifted to protecting his younger siblings online.`,
            },
            {
                heading: "PROJECT EXECUTION",
                content: `Sam built a small cybersecurity tool that scanned for phishing patterns. 
He presented it at youth STEM conferences and won recognition. 
He mentored middle school students on safe digital habits. 
He collaborated with teachers to design an online safety workshop. 
These initiatives showcased initiative, leadership, and technical skill.`,
            },
            {
                heading: "ESSAY STRATEGY",
                content: `His essays highlighted the responsibility of safeguarding digital spaces. 
He framed cybersecurity as a community-oriented mission. 
He showed humility, technical curiosity, and protective instincts. 
His writing felt authentic and deeply connected to his life. 
This perspective strengthened his entire application.`,
            },
            {
                heading: "RESULTS",
                content: `Sam was admitted to the University of Washington and UIUC. 
He received strong positive feedback for his cybersecurity work. 
CMU placed him on the waitlist with encouraging notes. 
He secured scholarships at multiple state schools. 
He chose UW for its research-rich CS environment.`,
            },
        ],
    },

    // 6 — MATT
    {
        slug: "matt",
        title: "Matt’s Case",
        subtitle: "READ FULL CASE STUDY",
        image: "/matt-case.jpeg",
        intro:
            "Matt excelled in sports but needed to show academic depth to appeal to top universities beyond athletic recruiting.",

        sections: [
            {
                heading: "BACKGROUND",
                content: `Matt was a talented varsity athlete with regional recognition. 
His training schedule limited his time for academic side projects. 
However, he maintained strong grades and enjoyed psychology. 
We helped him explore the cognitive science behind sports performance. 
This combination became central to his new academic identity.`,
            },
            {
                heading: "CHALLENGES",
                content: `His application leaned too heavily on athletics. 
Admissions committees might undervalue him academically. 
He lacked a research-driven or intellectual angle to complement sports. 
His essays initially focused too much on competition. 
We needed to broaden his narrative significantly.`,
            },
            {
                heading: "ACADEMIC POSITIONING",
                content: `We encouraged him to study psychology and sports cognition. 
He shadowed a sports therapist over the summer. 
Matt began journaling performance insights and behavioral patterns. 
He developed an interest in decision-making under pressure. 
This helped reshape his academic ambitions.`,
            },
            {
                heading: "PROJECT INITIATIVES",
                content: `He created a performance-anxiety workshop for younger athletes. 
Matt gathered data and interviewed sports psychologists. 
He designed a program integrating mindfulness and physical training. 
This initiative demonstrated leadership beyond the field. 
It also provided compelling essay material.`,
            },
            {
                heading: "ESSAY DEVELOPMENT",
                content: `Matt’s writing now highlighted resilience, introspection, and awareness. 
He discussed personal setbacks and emotional growth through sports. 
He connected teamwork to neurological research insights. 
His voice became humble, thoughtful, and academically grounded. 
Admissions teams appreciated the maturity in his story.`,
            },
            {
                heading: "RESULTS",
                content: `Matt was admitted to UCLA and the University of Michigan. 
He received praise for balancing athletics with academic intention. 
His cognitive-science angle differentiated him from other athletes. 
He chose Michigan for its interdisciplinary research opportunities. 
His case shows how athletes can shine academically as well.`,
            },
        ],
    },

    // 7 — CAROLINE
    {
        slug: "caroline",
        title: "Caroline’s Case",
        subtitle: "READ FULL CASE STUDY",
        image: "/caroline-case.jpeg",
        intro:
            "Caroline was passionate about writing but needed help demonstrating professional-level impact to stand out as an applicant.",

        sections: [
            {
                heading: "INITIAL POSITION",
                content: `Caroline wrote poetry and fiction but had limited publication experience. 
She participated in school literary clubs and competitions. 
Her portfolio was strong but not widely recognized. 
We wanted her to build external credibility and professional reach. 
Her dream schools included Yale, Brown, and Princeton.`,
            },
            {
                heading: "IDENTIFYING OPPORTUNITIES",
                content: `We encouraged her to submit to national writing contests. 
She started engaging with online literary communities. 
Caroline developed a polished portfolio of poems and short stories. 
She became an editor for a teen-run digital publication. 
These steps created a more robust artistic profile.`,
            },
            {
                heading: "CHALLENGES",
                content: `Her early essays lacked clear narrative focus. 
She struggled to articulate why writing mattered to her personally. 
Her work was strong but disconnected from her life story. 
We helped her find emotional and thematic consistency. 
Her identity as a writer needed deeper exploration.`,
            },
            {
                heading: "NEW PROJECTS",
                content: `Caroline founded a youth literary mentorship circle. 
She led workshops for middle school students. 
She organized small community readings for young writers. 
Her leadership demonstrated initiative beyond personal creativity. 
This transformed her from writer to literary advocate.`,
            },
            {
                heading: "ESSAY DIRECTION",
                content: `Her essays emphasized vulnerability, imagination, and emotional impact. 
She connected storytelling to her childhood experiences. 
Her supplemental essays highlighted leadership in literary spaces. 
Admissions committees valued her authenticity and reflective tone. 
Her application became polished and uniquely expressive.`,
            },
            {
                heading: "RESULTS",
                content: `Caroline was admitted to Brown University. 
She received strong feedback for her writing samples. 
Her advocacy work made her stand out from typical creative applicants. 
She also earned merit scholarships from several liberal arts colleges. 
Her journey showcases the value of artistic leadership.`,
            },
        ],
    },

    // 8 — VIKRAM
    {
        slug: "vikram",
        title: "Vikram’s Case",
        subtitle: "READ FULL CASE STUDY",
        image: "/vikram-case.jpeg",
        intro:
            "Vikram excelled in math competitions but needed help translating his achievements into a compelling real-world narrative.",

        sections: [
            {
                heading: "BACKGROUND",
                content: `Vikram ranked highly in regional math Olympiads. 
He loved abstract problem-solving but lacked applied experience. 
His résumé was strong but narrowly focused on competitions. 
We aimed to expand his impact beyond exam-based success. 
He targeted MIT, Caltech, and Princeton.`,
            },
            {
                heading: "CHALLENGE",
                content: `Competition results alone often fail to distinguish applicants. 
We needed Vikram to show broader intellectual influence. 
His essays risked sounding like technical summaries. 
His application lacked personal storytelling. 
He needed depth, context, and human connection.`,
            },
            {
                heading: "NEW DIRECTIONS",
                content: `We encouraged him to explore data science applications. 
He collaborated with a local NGO analyzing educational data. 
Vikram helped visualize resource disparities across districts. 
His work connected math to social impact and policymaking. 
This broadened his academic perspective significantly.`,
            },
            {
                heading: "PROJECT EXECUTION",
                content: `He built an algorithm predicting dropout risks based on multiple factors. 
Teachers praised his model for its accuracy and usability. 
He presented his findings at a regional education summit. 
His project demonstrated real-world application of math skills. 
It became a centerpiece of his STEM narrative.`,
            },
            {
                heading: "ESSAY STRATEGY",
                content: `His essays highlighted curiosity, empathy, and analytical talent. 
He shared personal anecdotes tied to educational equity. 
He explained how abstract math became a tool for impact. 
His writing now felt purposeful and grounded. 
Admissions officers appreciated his broader contributions.`,
            },
            {
                heading: "RESULTS",
                content: `Vikram earned admission to Caltech and Georgia Tech. 
His data science project was mentioned positively in reviewer comments. 
He demonstrated both raw mathematical ability and real-world initiative. 
He selected Caltech for its research environment. 
His case shows how to elevate competition-based profiles.`,
            },
        ],
    },

    // 9 — ANDREW
    {
        slug: "andrew",
        title: "Andrew’s Case",
        subtitle: "READ FULL CASE STUDY",
        image: "/andrew-case.jpg",
        intro:
            "Andrew was an aspiring entrepreneur who struggled to connect his business projects to meaningful personal storytelling.",

        sections: [
            {
                heading: "INITIAL PROFILE",
                content: `Andrew launched several small online businesses in high school. 
Most were profitable but lacked long-term vision. 
His activities were impressive yet appeared scattered. 
We needed to create cohesion and demonstrate sustained purpose. 
His dream schools included Wharton and Stanford.`,
            },
            {
                heading: "CHALLENGES",
                content: `His entrepreneurial work risked appearing shallow or solely profit-driven. 
He struggled to express personal motivation behind his ventures. 
His essays lacked emotional connectivity. 
He needed stronger ties between life experiences and entrepreneurship. 
We focused on developing consistency and depth.`,
            },
            {
                heading: "DEVELOPING A FOCUS",
                content: `We positioned Andrew as a sustainability-focused entrepreneur. 
He started designing eco-friendly packaging solutions for small shops. 
He collaborated with local vendors and reduced plastic waste significantly. 
This mission-driven approach elevated his narrative. 
It also aligned well with his business interests.`,
            },
            {
                heading: "PROJECT EXPANSION",
                content: `Andrew conducted market research and user interviews. 
He developed a small manufacturing workflow for sustainable materials. 
His project gained attention in local environmental groups. 
He documented business metrics and user impact. 
These details strengthened the professional credibility of his work.`,
            },
            {
                heading: "ESSAY STRATEGY",
                content: `His writing focused on purpose, responsibility, and environmental advocacy. 
He connected childhood memories to his passion for sustainability. 
He positioned business as a tool for positive societal change. 
His supplemental essays became more emotionally compelling. 
His application conveyed both maturity and vision.`,
            },
            {
                heading: "RESULTS",
                content: `Andrew was admitted to the Wharton School at UPenn. 
He also received offers from NYU Stern and USC Marshall. 
His sustainability angle made him stand out from traditional entrepreneurs. 
He gained recognition for community-based environmental efforts. 
Andrew chose Wharton for its interdisciplinary opportunities.`,
            },
        ],
    },
];
