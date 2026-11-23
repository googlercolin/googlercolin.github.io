import type { Entry, Publication, Stat } from './types';

export const CONTACT_INFO = {
    name: 'Colin Hong',
    role: 'PhD Candidate, Computer Science',
    location: 'NTU Singapore',
    email: 'HONG0259@e.ntu.edu.sg',
    githubUrl: 'https://github.com/googlercolin',
};

export const HERO = {
    eyebrow: 'phd candidate · ntu singapore',
    headline: 'Building the systems that serve LLMs and agents.',
    summary:
        'I am a Computer Science PhD candidate at NTU building systems for LLM and agent serving, working with systems researchers in industry (Esha Choukse, Azure Systems Research, Microsoft) and NLP researchers in academia (Xu Guo, NLP Postdoc, NTU). My background is in LLM inference, KV-cache management, serverless systems, and cloud-native infrastructure.',
};

export const STATS: Stat[] = [
    { value: '20–73%', label: 'higher agent-serving throughput under SLO with Contexture' },
    { value: '45%', label: 'lower reasoning latency with Slim-SC' },
    { value: 'Oral', label: 'first-author main-conference paper at EMNLP 2025' },
];

export const PUBLICATIONS: Publication[] = [
    {
        title: 'Contexture: Runtime Context Eviction for High-Throughput Agent Serving',
        authors: [
            'Colin Hong', 'Bryan Shan', 'Wei Siong Pang', 'Chengzhi Lu', 'Xu Guo',
            'Nitin Shivaraman', 'Tao Luo', 'Esha Choukse', 'Kisson Lin', 'Dmitrii Ustiugov',
        ],
        venue: 'arXiv:2611.26980',
        year: 'Nov 2026',
        note: 'Under review',
        links: [{ label: 'arXiv', href: 'https://arxiv.org/abs/2611.26980' }],
    },
    {
        title: 'Slim-SC: Thought Pruning for Efficient Scaling with Self-Consistency',
        authors: ['Colin Hong', 'Xu Guo', 'Anand Chaanan Singh', 'Esha Choukse', 'Dmitrii Ustiugov'],
        venue: 'EMNLP 2025 Main',
        year: '2025',
        note: 'Oral presentation',
        links: [{ label: 'Code', href: 'https://github.com/hyscale-lab/slimsc' }],
    },
];

export const RESEARCH: Entry[] = [
    {
        period: 'Feb 2025 – Present',
        tag: 'NTU Singapore',
        current: true,
        title: 'PhD Researcher',
        org: 'HyScale Lab',
        summary: 'PhD Researcher since Aug 2025; Research Associate from Feb to Aug 2025.',
        groups: [
            {
                heading: 'Contexture: runtime context eviction for agent serving',
                bullets: [
                    'Built Contexture, a harness- and model-agnostic runtime that evicts stale context from LLM agent sessions, improving throughput under SLO by 20–73% over the best prior approach and by 23% over LMCache alone on H100.',
                    'Cut GPU energy per completed agent session by up to 11% while preserving task accuracy, with no extra model calls or retraining.',
                    'Showed that shared KV-cache capacity in GPU memory limits agent-serving throughput, and that 64% of agent context becomes stale as later tool calls supersede earlier outputs.',
                    "Collaborating with Supermem Pte Ltd on memory-hierarchy-aware context management across GPU HBM and host memory, extending Contexture's LMCache composability study.",
                ],
            },
            {
                heading: 'Slim-SC: efficient test-time scaling',
                bullets: [
                    'Spearheaded the research and development of Slim-SC, a thought-pruning algorithm that reduces the computational cost of Self-Consistency test-time scaling in LLMs.',
                    'Engineered similarity-based pruning that terminates redundant reasoning chains at the thought level, reducing inference latency by up to 45% and KV-cache usage by up to 26%.',
                    'Validated across three STEM reasoning benchmarks and two LLM architectures, matching or exceeding the accuracy of brute-force Self-Consistency.',
                    'First-author paper accepted to the EMNLP 2025 Main Conference as an Oral Presentation; awarded Best Oral Presentation at the Second Singapore–China Joint Symposium on AI & Sustainability.',
                ],
            },
        ],
    },
];

export const PROJECTS: Entry[] = [
    {
        period: 'Jan 2025 – Apr 2025',
        tag: '1st Runner-Up',
        title: 'Project AuraGuard',
        org: "SCDF-Dell Lifesavers' Innovation Challenge 2025",
        summary: 'A privacy-first, community-powered emergency response system for at-risk seniors living alone.',
        bullets: [
            'Architected and developed the AI cloud-native backend for AuraGuard.',
            'Engineered a robust API gateway using Docker and Kubernetes on the Dell Cloud Native Platform to process anonymous triggers from edge devices and dispatch real-time alerts via Telegram and Twilio.',
            "Enabled a novel 'community-first' verification workflow, reducing false alarms and empowering emergency services (SCDF) to be engaged with high certainty, contributing to the project securing 1st Runner-Up.",
        ],
    },
    {
        period: 'Aug 2024 – Jan 2025',
        tag: 'Startup',
        title: 'Co-Founder',
        org: 'Admitflow',
        summary: 'An AI-powered platform to automate university admissions.',
        bullets: [
            'Co-founded and led the end-to-end development of the platform, securing a $5,000 NTU GETGrant to validate and expand the initial concept.',
            'Engineered a multimodal AI pipeline leveraging LLMs (Gemini, Claude, GPT) and Retrieval-Augmented Generation (RAG) to extract, normalize, and summarize applicant data from diverse document formats.',
            'Achieved a 60x reduction in processing time (from 15 mins to 15 secs per application) and over 99% operational cost savings compared to the manual process.',
        ],
    },
    {
        period: 'Aug 2023 – May 2024',
        tag: 'Final Year Project',
        title: 'vHive Serverless',
        org: 'Nanyang Technological University',
        summary: 'Syscall profiling of serverless functions, towards leaner hypervisors.',
        bullets: [
            'Profiled Linux syscall usage across serverless functions written in Python, Go, and Node.js, using low-level tracing and cross-language workload characterization.',
            'Found that only 17 of 303 Linux syscalls (<6%) are required for user-code execution across profiled functions, with requirements varying significantly by function and language.',
            'Enabled future work on lean hypervisors that support only the syscalls each function needs, reducing hypervisor attack surface and improving resource efficiency.',
        ],
    },
    {
        period: 'May 2022 – Aug 2024',
        tag: 'Internships',
        title: 'Quantum Computing',
        org: 'IBM, CQT, A*STAR',
        bullets: [
            'IBM Germany R&D (2024): Developed firmware for secure networking between production quantum instruments and integrated the best-performing quantum-safe cryptography algorithms.',
            "Centre for Quantum Technologies (2023): Built an authenticated encryption web app using keys from a commercial QKD device, integrated with Post-Quantum SSH, and managed NQSN's Linux VMs, subnetting and certificate authority.",
            'A*STAR (2022): Implemented quantum error mitigation for QML classification with Qiskit, Mitiq and PyTorch; STCAI 2022 finalist; Quantum Excellence, IBM Qiskit Global Summer School 2022.',
        ],
    },
];

export const EDUCATION: Entry[] = [
    {
        period: 'Aug 2025 – Present',
        tag: 'Singapore',
        current: true,
        title: 'PhD in Computer Science',
        org: 'Nanyang Technological University',
        bullets: [
            'Research: systems for agentic AI — runtime KV-cache and context management for high-throughput, energy-efficient LLM agent serving.',
            'Supervisor: Dr. Dmitrii Ustiugov (CCDS, NTU). Co-supervisor: Dr. Luo Tao (A*STAR).',
        ],
    },
    {
        period: 'Aug 2020 – Dec 2024',
        tag: 'Singapore',
        title: 'MSc (Technology Management) with BEngSc (Computer Science)',
        org: 'Nanyang Technological University',
        bullets: [
            'Part of the flagship Renaissance Engineering Program in NTU.',
            "Honors (Highest Distinction). Bachelor's CGPA 4.76/5.00, Master's CGPA 4.88/5.00.",
            "Dean's List (Masters).",
        ],
    },
];

export const TEACHING: Entry[] = [
    {
        period: 'Jan 2026 – Present',
        tag: 'NTU',
        current: true,
        title: 'Teaching Assistant',
        org: 'College of Computing and Data Science',
        bullets: [
            'SC1006 Computer Organisation & Architecture (AY2025/26 Sem 2): taught lab content and guided students through hands-on lab exercises.',
            'SC1001 Introduction to Computational Thinking & Programming (AY2026/27 Sem 1): taught lab content and guided students through hands-on lab exercises.',
        ],
    },
];

export const LEADERSHIP: Entry[] = [
    {
        period: '2026 – Present',
        tag: 'NTU',
        current: true,
        title: 'Organizer',
        org: 'Efficient AI Reading Group',
        bullets: [
            'Run a recurring inter-group reading group on efficient AI that brings together MLSys, NLP, and embodied AI researchers; lead paper discussions and coordinate guest facilitators.',
        ],
    },
    {
        period: 'Aug 2025 – Feb 2026',
        tag: 'NTU',
        title: 'Residential Mentor',
        org: 'Hall of Residence 2',
        bullets: [
            'Provided pastoral care and mentorship to residents, fostering a supportive and inclusive living environment.',
            'Organized and led community-building events, including Coffee Brewing and Cooking workshops, to enhance resident engagement and well-being.',
        ],
    },
    {
        period: 'Sep 2024 – Present',
        tag: 'Community',
        current: true,
        title: 'Co-lead',
        org: 'BArista, Bukit Arang Church Coffee Interest Group',
        bullets: [
            'Organize coffee education events every two months, including tasting, brewing (filter and espresso) and blending workshops, and oversee quarterly wholesale coffee group buys.',
        ],
    },
];

export const SKILLS: { label: string; items: string[] }[] = [
    { label: 'Languages', items: ['Python', 'C', 'Go', 'Rust'] },
    { label: 'LLM systems', items: ['vLLM', 'LMCache', 'PyTorch', 'Hugging Face Transformers'] },
    { label: 'Infrastructure', items: ['Linux', 'Docker', 'Kubernetes', 'Git', 'CI/CD'] },
    {
        label: 'Areas',
        items: [
            'LLM inference & serving', 'KV-cache management', 'Agent serving', 'Test-time scaling',
            'Energy-efficient inference', 'Workload profiling & characterization',
        ],
    },
];

export const HOBBIES: string[] = [
    'Coffee brewing', 'Baking', 'Quantum computing', 'Singing', 'Adventure sports (bungy jumping, caving)',
];
