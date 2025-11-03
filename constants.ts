
import type { TimelineItemProps } from './types';

export const CONTACT_INFO = {
    name: "Colin HONG",
    phone: "+65 8505 3577",
    email: "HONG0259@e.ntu.edu.sg",
    githubUrl: "https://github.com/hyscale-lab/slimsc",
    websiteUrl: "https://hyscale-lab.github.io/slimsc/" // Example, can be updated
};

export const PROFESSIONAL_SUMMARY: string = "Computer Science PhD Candidate at Nanyang Technological University with a research focus on efficient LLM reasoning at the systems level. Published first-author research at EMNLP 2025 (Oral Presentation). Proven ability to lead and deliver innovative projects from inception to completion, demonstrated by co-founding Admitflow, an AI-powered admissions platform that achieved a 60x increase in processing speed. Strong background in LLM serving, quantum computing and cryptography, and high-performance systems.";

// FIX: Changed properties to match TimelineItemProps: degree -> title, institution -> subtitle, details -> description
export const EDUCATION: TimelineItemProps[] = [
    {
        title: "Doctor of Philosophy (PhD) in Computer Science",
        subtitle: "Nanyang Technological University (NTU), Singapore",
        duration: "Aug 2025 – Present",
        description: ["Research Interest: Efficient LLM reasoning, focusing on systems-level optimizations, thought pruning, and scalable inference"]
    },
    {
        title: "Master of Science (Technology Management) with a Bachelor of Engineering Science (Computer Science)",
        subtitle: "Nanyang Technological University (NTU), Singapore",
        duration: "Aug 2020 – Dec 2024",
        description: [
            "Part of the flagship Renaissance Engineering Program in NTU",
            "Honors (Highest Distinction), Bachelor's CGPA: 4.76/5.00, Master's CGPA: 4.88/5.00",
            "Dean's List (Masters)"
        ]
    }
];

// FIX: Changed properties to match TimelineItemProps: role -> title, organization -> subtitle
export const RESEARCH_EXPERIENCE: TimelineItemProps[] = [
    {
        title: "Research Associate, HyScale Lab",
        subtitle: "NTU Singapore",
        duration: "Feb 2025 - Aug 2025",
        description: [
            "Spearheaded the research and development of Slim-SC (https://github.com/hyscale-lab/slimsc), a novel thought-pruning algorithm that reduces the computational cost of Self-Consistency in LLMs, accepted at EMNLP 2025.",
            "Engineered a system using semantic similarity to proactively terminate redundant reasoning chains, achieving up to 45% lower latency and 25% less memory usage during inference.",
            "Validated the method across multiple reasoning benchmarks, demonstrating robust accuracy comparable to or exceeding brute-force scaling methods."
        ]
    },
    {
        title: "Quantum Machine Learning (QML) Intern",
        subtitle: "A*STAR, Singapore",
        duration: "May 2022 - Aug 2022",
        description: [
            "Conducted a cutting-edge QML review and selected as STCAI 2022 finalist.",
            "Implemented near-term quantum error mitigation for QML classification using Qiskit, Mitiq, and Pytorch.",
            "Actively reviewed QML-related IEEE manuscripts.",
            "Awarded the Quantum Excellence for IBM Qiskit Global Summer School 2022."
        ]
    }
];

// FIX: Changed properties to match TimelineItemProps: role -> title, organization -> subtitle
export const PROJECTS_EXPERIENCE: TimelineItemProps[] = [
    {
        title: "1st Runner-Up, SCDF-Dell Lifesavers' Innovation Challenge 2025 (Project AuraGuard)",
        subtitle: "Project Experience",
        duration: "Jan 2025 – Apr 2025",
        description: [
            "Architected and developed the AI cloud-native backend for AuraGuard, a privacy-first, community-powered emergency response system for at-risk seniors living alone.",
            "Engineered a robust API gateway using Docker and Kubernetes on the Dell Cloud Native Platform to process anonymous triggers from edge devices and dispatch real-time alerts via Telegram and Twilio.",
            "Enabled a novel 'community-first' verification workflow, reducing false alarms and empowering emergency services (SCDF) to be engaged with high certainty, contributing to the project securing 1st Runner-Up."
        ]
    },
    {
        title: "Co-Founder, Admitflow",
        subtitle: "Entrepreneurial Experience",
        duration: "Aug 2024 – Jan 2025",
        description: [
            "Co-founded and led the end-to-end development of an AI-powered platform to automate university admissions, securing a $5,000 NTU GETGrant to validate and expand the initial concept.",
            "Engineered a multimodal AI pipeline leveraging LLMs (Gemini, Claude, GPT) and Retrieval-Augmented Generation (RAG) to extract, normalize, and summarize applicant data from diverse document formats.",
            "Achieved a 60x reduction in processing time (from 15 mins to 15 secs per application) and over 99% operational cost savings compared to the manual process, significantly reducing bottlenecks."
        ]
    },
    {
        title: "vHive Serverless Final Year Project",
        subtitle: "Nanyang Technological University",
        duration: "Aug 2023 - May 2024",
        description: ["Conducted in-depth profiling of serverless functions across Python, Go, and Node.js, resulting in the development of leaner serverless hypervisors that support only essential system calls, enhancing resource utilization and performance."]
    },
    {
        title: "Quantum Firmware Developer Intern",
        subtitle: "IBM Germany Research & Development GmbH",
        duration: "Jun 2024 - Aug 2024",
        description: [
            "Designed and developed firmware for secure networking between production Quantum Instruments.",
            "Profiled and integrated most performant and secure Quantum-Safe Cryptography algorithms in Quantum Instruments."
        ]
    },
    {
        title: "Quantum Cryptography Intern",
        subtitle: "Centre for Quantum Technologies (CQT), Singapore",
        duration: "May 2023 - Oct 2023",
        description: [
            "Designed and developed authenticated encryption and decryption web app using keys from a commercial Quantum Key Distribution (QKD) device, integrating it with Post-Quantum SSH, and presented it to national test-bed partners.",
            "Managed NQSN’s Linux VMs, subnetting, certificate authority and client authentication with commercial QKD device.",
            "Mentored new hire for the development of an SSL-QKD integration project.",
            "Facilitated Quantum Bootcamp 2023 QKD Labs, demonstrating my web app as a teaching assistant.",
            "Attained Quantum-Safe Cryptography badge from IBM."
        ]
    }
];

// FIX: Changed properties to match TimelineItemProps: role -> title, organization -> subtitle
export const LEADERSHIP_ACTIVITIES: TimelineItemProps[] = [
    {
        title: "Residential Mentor, Hall of Residence 2",
        subtitle: "NTU",
        duration: "Aug 2025 – Present",
        description: [
            "Provide pastoral care and mentorship to residents, fostering a supportive and inclusive living environment.",
            "Organize and lead community-building events, including Coffee Brewing and Cooking workshops, to enhance resident engagement and well-being."
        ]
    },
    {
        title: "Co-lead, BArista – Bukit Arang Church Coffee Interest Group",
        subtitle: "Bukit Arang Church",
        duration: "Sep 2024 – Present",
        description: [
            "Actively organizing coffee educational events once every two months, including tasting, brewing (filter coffee and espresso) and coffee blending workshops for guests and church members.",
            "Overseeing quarterly coffee group buys, to purchase interesting coffees at wholesale prices."
        ]
    },
    {
        title: "Bizmag Subcommittee, Hall of Residence 11",
        subtitle: "NTU",
        duration: "Aug 2023 – May 2024",
        description: [
            "Organized and secured sponsorship from Alchemist Singapore for a live coffee brewing station, providing coffee to all residents during the Exam Welfare Pack distribution.",
            "Assisted with sourcing sponsors for Hall events and coordinated Exam Welfare Pack organizing and distribution."
        ]
    },
    {
        title: "REPetoire – REP Student-led Interest Events",
        subtitle: "NTU Renaissance Engineering Program",
        duration: "Aug 2021 – Dec 2024",
        description: [
            "Organized yearly coffee educational events, including tasting and brewing workshops for students.",
            "Successfully sourced and secured sponsorship for coffee gear and beans for participants."
        ]
    },
    {
        title: "Bible Study Leader, PrayRE",
        subtitle: "Christian Fellowship for NTU Renaissance Engineering Program",
        duration: "Aug 2020 – Dec 2024",
        description: [
            "Pioneered and organized weekly Bible studies and prayer group within REP course, connecting senior and junior batches.",
            "Engaged in 1-to-1 Bible reading partnerships with non-Christian friends, and coached Christian friends in Bible handling."
        ]
    },
    {
        title: "First runner-up (Singapore National Finals)",
        subtitle: "Shell Imagine The Future Scenarios Competition",
        duration: "Aug 2020 – Feb 2021",
        description: [
            "Modeled future scenarios for city of choice, Hong Kong, from 2020 to 2050.",
            "Oversaw design of the Scenarios Report (coffee-table book), praised by judges for aesthetics and lucidity."
        ]
    }
];

export const SKILLS = {
    "Languages": ["Golang", "Rust", "Python", "C", "Flask", "Solidity", "Swift", "HTML", "CSS", "React"],
    "AI/ML": ["vLLM", "Transformers", "RAG", "Prompt Engineering", "PyTorch", "Qiskit", "Mitiq"],
    "Technologies": ["Docker", "Quantum Cryptography", "Git", "CI/CD", "Microsoft Office", "Notion"]
};

export const HOBBIES: string[] = ["Coffee Brewing", "Baking", "Quantum Computing", "Singing", "Adventure Sport (Bungy Jumping, Caving)"];