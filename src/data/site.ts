/**
 * Single source of truth for all site content.
 * Extracted from Hammad Ahmed Riaz's CV where possible.
 */

export const profile = {
  name: "Hammad Ahmed Riaz",
  firstName: "Hammad",
  title: "Full Stack Engineer · AI Application Developer",
  shortTitle: "Full Stack & AI Engineer",
  location: "Salzburg, Austria",
  email: "hammadahmadriaz@gmail.com",
  phone: "+43 660 483 3594",
  whatsapp: "+436604833594",
  links: {
    linkedin: "https://linkedin.com/in/hammad-ahmad-riaz",
    github: "https://github.com/hammad-ahmad-riaz",
    calendly: "https://calendly.com/hammadahmadriaz/30min",
    resume: "/Hammad-Ahmad-Riaz-CV.pdf",
  },
} as const;

export const brand = {
  tagline: "I build production-grade web & AI products that ship.",
  heroHeadline: "Engineering software that's fast, reliable, and intelligent.",
  heroSub:
    "Full Stack Engineer with 5+ years shipping production web apps across Healthcare, EdTech and Real Estate, now building frontier AI products with OpenAI, RAG and LLM architecture from Salzburg, Austria.",
  valueProp:
    "I turn ambitious ideas into products people use daily, with measurable performance, clean architecture, and AI that actually works in production.",
  mission:
    "To engineer software that's fast, reliable, and intelligent, bridging proven full-stack delivery with applied AI research.",
  availability: "Available for freelance, remote & consulting work",
  audiences: {
    client:
      "Need a reliable engineer who ships? I deliver production-grade web and AI products with measurable performance wins, on time, type-safe, and tested.",
    recruiter:
      "EU work-authorized in Austria, 5+ years full-stack, MSc in Applied AI in progress, with a track record of measurable impact: 20% lower query latency, 90%+ test coverage, 10+ apps shipped.",
    founder:
      "Looking for a technical partner who can take a product from zero to one? I've already taken an AI product to 1,000+ daily active users. I architect, build and ship the whole stack: frontend, backend, and the AI layer.",
  },
} as const;

export const bio = {
  short:
    "I'm a Full Stack Engineer based in Salzburg, Austria, with 5+ years building production systems for Healthcare, EdTech, and Real Estate companies. I'm currently pursuing an MSc in Applied Image & Signal Processing while shipping AI-powered products with OpenAI, RAG, and LLM architecture.",
  paragraphs: [
    "I started in frontend, obsessing over render performance and pixel-perfect UIs, then grew into a full-stack engineer who owns systems end to end: type-safe Nest.js services, optimized PostgreSQL and MongoDB schemas, and CI/CD pipelines that ship confidently.",
    "Over five years I've delivered 10+ production applications: a CRM used by 200+ sales reps, clinical-device interfaces, telehealth platforms, and multi-tenant EdTech systems. Along the way I cut query latency by 20%, improved deployment frequency by 35%, reached 90%+ test coverage, and mentored four junior developers.",
    "Today I'm expanding into AI engineering through an MSc at FH Salzburg, building retrieval-augmented assistants on OpenAI APIs. My current project, Shahada GPT, serves over 1,000 daily active users with source-aware answers powered by RAG and structured prompt engineering.",
  ],
  philosophy: [
    {
      title: "Ship to production",
      body: "Prototypes are easy. I optimize for the system that survives real users, real load, and real edge cases.",
    },
    {
      title: "Measure everything",
      body: "Latency, coverage, deploy frequency. If I can't measure the impact, I haven't finished the job.",
    },
    {
      title: "Type-safe by default",
      body: "TypeScript end to end. Fewer runtime surprises, faster refactors, code that documents itself.",
    },
    {
      title: "AI that works",
      body: "Grounded, source-aware LLM systems, not demos. RAG, evals, and prompt pipelines built for reliability.",
    },
  ],
} as const;

export const stats = [
  { value: 5, suffix: "+", label: "Years shipping production" },
  { value: 10, suffix: "+", label: "Production apps delivered" },
  { value: 50000, suffix: "+", label: "Daily users served across platforms" },
  { value: 90, suffix: "%", label: "Test coverage on core services" },
] as const;

export type SkillLevel = 5 | 4 | 3 | 2;

export const skillGroups = [
  {
    category: "Frontend",
    icon: "Layout",
    skills: [
      { name: "React.js", level: 5 },
      { name: "Next.js", level: 5 },
      { name: "TypeScript", level: 5 },
      { name: "Redux Toolkit", level: 5 },
      { name: "Tailwind CSS", level: 5 },
      { name: "React Native", level: 3 },
    ],
  },
  {
    category: "Backend",
    icon: "Server",
    skills: [
      { name: "Node.js", level: 5 },
      { name: "Nest.js", level: 5 },
      { name: "Express.js", level: 4 },
      { name: "Python / FastAPI", level: 3 },
      { name: "REST / GraphQL / WS", level: 4 },
    ],
  },
  {
    category: "Databases",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", level: 5 },
      { name: "MongoDB", level: 5 },
      { name: "MySQL", level: 4 },
      { name: "Prisma · Mongoose", level: 4 },
    ],
  },
  {
    category: "AI & Machine Learning",
    icon: "Brain",
    skills: [
      { name: "OpenAI APIs (GPT-4o)", level: 3 },
      { name: "Prompt Engineering", level: 3 },
      { name: "LLM App Architecture", level: 3 },
      { name: "RAG & Vector Search", level: 3 },
      { name: "Computer Vision", level: 3 },
      { name: "Machine Learning", level: 3 },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: "Cloud",
    skills: [
      { name: "AWS (EC2, S3, Lambda)", level: 4 },
      { name: "Docker", level: 3 },
      { name: "CI/CD · GitHub Actions", level: 4 },
      { name: "Git", level: 5 },
    ],
  },
  {
    category: "Methods & Tools",
    icon: "Wrench",
    skills: [
      { name: "Agile / Scrum", level: 4 },
      { name: "Jest · Testing", level: 4 },
      { name: "Stripe Integrations", level: 4 },
      { name: "Jira · Postman", level: 4 },
    ],
  },
] as const;

export const experience = [
  {
    role: "Full Stack Engineer",
    company: "Xeven Solutions",
    location: "Salzburg, Austria (Remote)",
    period: "Mar 2024 - Present",
    current: true,
    summary:
      "Building AI-powered client products and type-safe backend services while driving engineering quality.",
    highlights: [
      "Integrated OpenAI APIs (GPT-4 / GPT-4o) into client products, building chat assistants and content-generation flows with prompt-engineered, type-safe pipelines.",
      "Engineered Nest.js / TypeScript backend services and optimized PostgreSQL & MongoDB queries, reducing average DB query latency by 20%.",
      "Drove CI/CD adoption with GitHub Actions and Docker, scaled core services to 90%+ test coverage, and mentored 4 junior developers, cutting code review cycle time by 25%.",
    ],
    tech: ["OpenAI", "Nest.js", "TypeScript", "PostgreSQL", "MongoDB", "Docker", "GitHub Actions"],
  },
  {
    role: "MERN Stack Developer",
    company: "Webseowiz Tech",
    location: "Lahore, Pakistan",
    period: "Jan 2023 - Feb 2024",
    current: false,
    summary: "Delivered a full-stack CRM platform powering real-time sales operations.",
    highlights: [
      "Built a full-stack CRM (React, Node.js, MySQL) used by 200+ sales reps, delivering 15+ RESTful API endpoints powering real-time dashboards.",
      "Architected normalized MySQL schemas for contact and deal management, cutting average query response time by 30%.",
    ],
    tech: ["React", "Node.js", "MySQL", "Express", "REST"],
  },
  {
    role: "Frontend Engineer",
    company: "SarcMedIQ · ELK Tech",
    location: "Remote / Lahore",
    period: "May 2022 - Apr 2023",
    current: false,
    summary: "Engineered high-performance clinical-device interfaces.",
    highlights: [
      "Built 30+ modular React + Redux components for clinical-device UIs, improving render performance by 45% on lower-spec hardware.",
      "Delivered pixel-perfect responsive UIs across 6 breakpoints with React.js & Material-UI, and optimized MongoDB indexing to reduce collection query times by 35%.",
    ],
    tech: ["React", "Redux", "Material-UI", "MongoDB"],
  },
  {
    role: "Frontend Engineer",
    company: "Lasting Sales",
    location: "Lahore, Pakistan",
    period: "Aug 2020 - Aug 2021",
    current: false,
    summary: "Launched sales dashboards and a reusable design system.",
    highlights: [
      "Launched React / Redux / Tailwind sales dashboards, cutting user task completion time by 20%, and shipped a reusable design-system component library.",
    ],
    tech: ["React", "Redux", "Tailwind CSS"],
  },
] as const;

export const projects = [
  {
    name: "Shahada GPT",
    tag: "AI Islamic Knowledge Assistant",
    featured: true,
    status: "Live · 1,000+ DAU",
    mockup: "chat" as const,
    image: "/projects/shahada.png",
    previewUrl: "shahadagptfe.xeventechnologies.com",
    challenge:
      "Religious questions demand source-aware, trustworthy answers. Generic LLMs hallucinate and cite nothing.",
    solution:
      "A conversational assistant built on OpenAI APIs with a vector database, using retrieval-augmented generation and structured prompt engineering to ground every answer in verifiable sources.",
    features: [
      "Retrieval-augmented generation (RAG) over a curated knowledge base",
      "Source-aware answers with citations",
      "Structured prompt-engineering pipeline",
      "Scales to 1,000+ daily active users",
    ],
    results: ["1,000+ daily active users", "Source-grounded responses", "Production-stable LLM pipeline"],
    tech: ["OpenAI", "React", "Node.js", "Vector DB", "RAG", "Prompt Engineering"],
    links: {
      demo: "https://shahadagptfe.xeventechnologies.com/",
      github: "#",
    },
  },
  {
    name: "Blue Jay Telehealth",
    tag: "AI Telehealth Platform",
    featured: true,
    status: "Live · HealthTech",
    mockup: "telehealth" as const,
    image: "/projects/bluejay.png",
    previewUrl: "bluejayhealth.com.au",
    challenge:
      "Clinicians needed to run secure video consultations and measure patient range-of-motion (ROM) remotely, without compromising accuracy, billing, or compliance.",
    solution:
      "A telehealth platform with AI-assisted ROM measurement during live video calls, real-time scheduling, secure patient-provider workflows, and integrated billing.",
    features: [
      "AI-assisted ROM measurement during video calls",
      "Secure real-time video consultations",
      "Appointment scheduling & integrated billing",
      "Type-safe Next.js + Nest.js architecture",
    ],
    results: ["AI ROM measurement in-call", "Secure clinical workflows", "End-to-end booking & billing"],
    tech: ["Next.js", "Nest.js", "Computer Vision", "PostgreSQL", "TypeScript"],
    links: { demo: "https://bluejayhealth.com.au/bluejay-telehealth/", github: "#" },
  },
  {
    name: "Hope to Skills",
    tag: "AI-Powered EdTech Platform",
    featured: true,
    status: "Live · 128K+ learners",
    mockup: "lms" as const,
    image: "/projects/hopetoskills.png",
    previewUrl: "hopetoskills.com",
    challenge:
      "A fast-growing education provider (formerly Awfera) needed one platform to serve 100K+ learners across many organizations, each with isolated data, roles, and AI-assisted content.",
    solution:
      "A multi-tenant learning platform on React, Nest.js and PostgreSQL with role-based access control, AI-assisted learning paths, and content-delivery pipelines built to scale.",
    features: [
      "Multi-tenant architecture with data isolation",
      "Role-based access control",
      "AI-assisted learning & content pipelines",
      "Scales to 128K+ students",
    ],
    results: ["128K+ students learning", "Multi-org tenancy & RBAC", "Scalable AI content delivery"],
    tech: ["React", "Nest.js", "PostgreSQL", "RBAC", "AI"],
    links: { demo: "https://hopetoskills.com/", github: "#" },
  },
  {
    name: "SarcMedIQ",
    tag: "AI Medical Imaging Platform",
    featured: true,
    status: "Production · HealthTech",
    mockup: "telehealth" as const,
    image: "/projects/sarcmediq.png",
    previewUrl: "sarcmediq.com",
    challenge:
      "Radiology teams needed an AI-powered imaging interface for diagnosis automation that stayed fast and responsive across every device and screen size.",
    solution:
      "A performance-tuned front end built with a modular component system and a fully responsive layout, engineered for clarity in high-stakes clinical workflows.",
    features: [
      "AI-assisted imaging & diagnosis automation UI",
      "30+ reusable, accessible components",
      "Responsive across 6 breakpoints",
      "+45% render performance improvement",
    ],
    results: ["+45% render performance", "30+ reusable components", "6-breakpoint responsive UI"],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    links: { demo: "https://sarcmediq.com/", github: "#" },
  },
  {
    name: "Lasting Sales",
    tag: "AI Sales & Lead-Conversion CRM",
    featured: true,
    status: "Live · SaaS",
    mockup: "lms" as const,
    image: "/projects/lastingsales.png",
    previewUrl: "lastingsales.com",
    challenge:
      "Service businesses were losing revenue to slow lead response. Inquiries scattered across Instagram, WhatsApp and Facebook went cold before anyone replied.",
    solution:
      "An AI-powered CRM that captures, qualifies, and converts leads instantly, unifying multi-channel messaging into one pipeline with automated follow-up.",
    features: [
      "Unified multi-channel lead capture (IG, WhatsApp, Facebook)",
      "AI lead qualification & scoring",
      "Instant automated follow-up",
      "Real-time sales pipeline dashboard",
    ],
    results: ["Faster lead response", "Higher conversion rates", "One unified inbox & pipeline"],
    tech: ["Next.js", "React", "Node.js", "AI", "CRM"],
    links: { demo: "https://lastingsales.com/", github: "#" },
  },
] as const;

export const currentProject = {
  name: "Shahada GPT",
  tag: "AI Islamic Knowledge Assistant",
  status: "Active Development",
  blurb:
    "A source-aware conversational AI assistant serving 1,000+ daily active users, built on OpenAI APIs with retrieval-augmented generation and a structured prompt-engineering pipeline.",
  goals: [
    "Improve answer precision with evaluation harnesses",
    "Expand the curated knowledge base & embeddings",
    "Add multilingual support (English / Urdu / Arabic)",
    "Optimize vector-search latency at scale",
  ],
  architecture: [
    { layer: "Client", value: "React SPA" },
    { layer: "API", value: "Node.js services" },
    { layer: "AI", value: "OpenAI GPT-4o" },
    { layer: "Retrieval", value: "Vector DB + RAG" },
  ],
  progress: 78,
  tech: ["OpenAI", "React", "Node.js", "Vector DB", "LLM App Architecture", "RAG", "Prompt Engineering"],
} as const;

export const research = {
  status: "Active MSc Research",
  degree: "MSc Applied Image & Signal Processing",
  institution: "FH Salzburg · University of Salzburg",
  location: "Salzburg, Austria",
  enrolled: "Currently Enrolled",
  intro:
    "Alongside my engineering work, I'm pursuing an MSc in Applied Image & Signal Processing in Austria, where I apply computer vision, deep learning and signal processing to real biomedical imaging problems, not just coursework.",
  project: {
    title: "Compression-Aware AI for Biomedical Imaging",
    questionLabel: "Research question",
    question:
      "How far can microscopy images be compressed before AI-driven cell segmentation starts to lose accuracy?",
    summary:
      "I built a reproducible pipeline that compresses cell-microscopy datasets with H.265/HEVC across a range of quality levels, reconstructs them, and runs CellPose deep-learning segmentation on every variant, then measures the impact on image quality, storage efficiency and downstream segmentation performance.",
  },
  // 8 research focus areas — each maps to a lucide icon name
  interests: [
    { label: "Computer Vision", icon: "Eye" },
    { label: "Medical Imaging", icon: "Scan" },
    { label: "Image Compression", icon: "Minimize2" },
    { label: "Signal Processing", icon: "AudioWaveform" },
    { label: "Machine Learning", icon: "Brain" },
    { label: "Deep Learning", icon: "Network" },
    { label: "Cell Segmentation", icon: "Grid2x2" },
    { label: "Biomedical Image Analysis", icon: "Microscope" },
  ],
  // headline numbers from the actual experiments
  metrics: [
    { value: "68", label: "Microscopy image / mask pairs" },
    { value: "12", label: "Compression variants evaluated" },
    { value: "12.7×", label: "Smaller at ~33 dB PSNR (sweet spot)" },
    { value: "90×", label: "Maximum compression explored" },
  ],
  // visual research timeline
  timeline: [
    {
      phase: "01",
      title: "Dataset & Preprocessing",
      desc: "Standardized CellPose microscopy image/mask pairs, preserving exact cell-ID labels.",
      done: true,
    },
    {
      phase: "02",
      title: "H.265 Compression Sweep",
      desc: "Encoded image sets via FFmpeg across 4 quality levels and 3 frame-ordering strategies.",
      done: true,
    },
    {
      phase: "03",
      title: "AI Cell Segmentation",
      desc: "Ran CellPose (cyto3) deep-learning segmentation on every compressed and baseline variant.",
      done: true,
    },
    {
      phase: "04",
      title: "Quality & Storage Analysis",
      desc: "Quantified the trade-off with PSNR, bitrate and rate-distortion curves.",
      done: true,
    },
    {
      phase: "05",
      title: "Segmentation Accuracy (IoU / Dice)",
      desc: "Measuring compression's real impact on cell-detection accuracy, not just pixel fidelity.",
      done: false,
    },
  ],
  // deep-learning architectures + classifiers explored
  models: ["MobileNetV2", "VGG16", "ResNet", "KNN", "Softmax", "Transfer Learning"],
  tech: ["Python", "FFmpeg", "CellPose", "PyTorch", "NumPy", "Pillow", "Matplotlib", "Google Colab"],
} as const;

export const education = [
  {
    degree: "MSc Applied Image & Signal Processing",
    school: "FH Salzburg / University of Salzburg",
    location: "Salzburg, Austria",
    period: "Currently Enrolled",
    current: true,
    focus: ["AI", "Computer Vision", "Machine Learning", "Image Processing", "Signal Processing", "Applied Statistics"],
  },
  {
    degree: "BSc Software Engineering",
    school: "University of Gujrat",
    location: "Pakistan",
    period: "Graduated 2019",
    current: false,
    focus: ["Software Engineering", "Algorithms", "Systems Design"],
  },
] as const;

export const achievements = [
  "Delivered 10+ production applications across multiple industries",
  "Reduced database query latency by 20% through schema & index optimization",
  "Improved deployment frequency by 35% by driving CI/CD adoption",
  "Achieved 90%+ test coverage on core services using Jest",
  "Mentored 4 junior developers and cut code review cycle time by 25%",
] as const;

export const languages = [
  { name: "English", level: "Professional Working Proficiency", badge: "C1" },
  { name: "Urdu", level: "Native Speaker", badge: "Native" },
  { name: "German", level: "Elementary, progressing to A2", badge: "A1 to A2" },
] as const;

export const workAuth = {
  status: "Authorized to work in Austria",
  detail: "20 hrs/week work authorization",
  location: "Currently residing in Salzburg, Austria",
  remote: "Available for remote work across the EU & DACH region",
  points: [
    { label: "Work Authorization", value: "Austria, 20 hrs/week" },
    { label: "Based in", value: "Salzburg, Austria 🇦🇹" },
    { label: "Market", value: "Austria & DACH region" },
    { label: "Remote", value: "EU-wide & worldwide" },
  ],
} as const;

export const services = [
  {
    title: "Full Stack Development",
    icon: "Layers",
    desc: "End-to-end web apps with React, Next.js, Nest.js and TypeScript, type-safe from database to UI.",
  },
  {
    title: "Web Applications",
    icon: "Globe",
    desc: "Fast, accessible, SEO-ready web products built mobile-first with modern architecture.",
  },
  {
    title: "Mobile Applications",
    icon: "Smartphone",
    desc: "Cross-platform mobile experiences with React Native, sharing logic with your web stack.",
  },
  {
    title: "API Development",
    icon: "Webhook",
    desc: "REST, GraphQL and WebSocket APIs with clean contracts, auth, and 90%+ test coverage.",
  },
  {
    title: "SaaS Development",
    icon: "Rocket",
    desc: "Multi-tenant SaaS with RBAC, Stripe billing, and CI/CD, built to scale from day one.",
  },
  {
    title: "AI Integration & Consulting",
    icon: "Sparkles",
    desc: "OpenAI, RAG and LLM systems that ship to production: grounded, evaluated, reliable.",
  },
] as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
] as const;

/** UI / chrome strings (everything that isn't structured content above). */
export const ui = {
  nav: { hireMe: "Hire Me", toggleMenu: "Toggle menu", home: "Home" },
  hero: {
    available: "Available for work",
    headline: ["I build production-grade ", "web & AI products", " that ship."],
    roles: ["Full Stack Engineer", "AI Application Developer"],
    seeking:
      "Pursuing an MSc in Salzburg, open to working-student & part-time engineering roles (20 hrs/week).",
    hireMe: "Hire Me",
    viewProjects: "View Projects",
    resume: "Resume",
    chipYears: "Shipping production",
    chipUsers: "Daily AI users",
  },
  about: {
    kicker: "About me",
    title: ["The engineer behind the ", "products", "."],
    whyHire: "Why clients hire me",
    whyHireSub: "Proven, measurable delivery, not promises.",
  },
  skills: {
    kicker: "Capabilities",
    title: ["A full-stack toolkit, ", "AI-ready", "."],
    description:
      "From pixel-perfect frontends to type-safe backends and production LLM systems. Here's the stack I ship with.",
    levels: { 5: "Expert", 4: "Advanced", 3: "Intermediate", 2: "Learning" } as Record<number, string>,
  },
  experience: {
    kicker: "Experience",
    title: ["Five years of ", "shipping", "."],
    description:
      "A track record across Healthcare, EdTech, Real Estate and AI, with measurable impact at every stop.",
    current: "Current",
  },
  projects: {
    kicker: "Featured work",
    title: ["Case studies, not just ", "screenshots", "."],
    description:
      "Each of these shipped to production. Here's the challenge, the solution, and the result, presented as a real product.",
    challenge: "Challenge: ",
    solution: "Solution: ",
    results: "Results: ",
    visit: "Visit Live Site",
  },
  current: {
    buildingPre: "Currently building ",
    buildProgress: "Build progress",
    currentFocus: "Current focus",
    architecture: "Architecture",
  },
  research: {
    kicker: "Research & Academic Focus",
    title: ["Applied research in ", "Computer Vision & Medical Imaging", "."],
    description:
      "I don't just build products, I investigate how AI behaves on real-world data. My current MSc research applies computer vision and deep learning to biomedical imaging.",
    focusAreas: "Research focus areas",
    approach: "Research approach",
    models: "Models & methods",
    tools: "Tools & libraries",
    inProgress: "In progress",
    done: "Completed",
  },
  education: {
    kicker: "Education & languages",
    title: ["Grounded in ", "computer science & AI", "."],
    description:
      "A software engineering foundation, now sharpened with graduate research in applied AI and computer vision.",
    enrolled: "Enrolled",
    languages: "Languages",
  },
  visa: {
    kicker: "Work authorization",
    title: ["EU-authorized, ", "ready to start", "."],
    description:
      "Based in Salzburg with legal work authorization in Austria, so there's no relocation friction and no visa wait. Available on-site in the DACH region and fully remote worldwide.",
  },
  services: {
    kicker: "Services",
    title: ["How I can help you ", "build", "."],
    description:
      "From a single feature to a full product, with flexible engagements for freelance clients, startups, and teams.",
  },
  contact: {
    kicker: "Let's talk",
    title: ["Have a project in mind? ", "Let's build it."],
    description:
      "Available for freelance projects, startup collaborations, remote roles, and technical consulting. I usually reply within 24 hours.",
    channelEmail: "Email",
    channelLinkedin: "Connect with me",
    channelGithub: "See my code",
    channelWhatsapp: "Quick chat",
    labelEmail: "Email",
    labelLinkedin: "LinkedIn",
    labelGithub: "GitHub",
    labelWhatsapp: "WhatsApp",
    bookCall: "Book a 30-min intro call",
    formName: "Name",
    formEmail: "Email",
    formMessage: "Project details",
    phName: "Jane Doe",
    phEmail: "jane@company.com",
    phMessage: "Tell me about your project, timeline, and goals…",
    submit: "Send message",
    success: "Opening your email client, thanks for reaching out!",
    preferEmail: "Prefer email? Write to",
    subject: "New project inquiry from",
    fallbackName: "your site",
  },
  footer: {
    tagline:
      "Full Stack Engineer & AI Application Developer building production-grade web and AI products from Salzburg, Austria.",
    navigate: "Navigate",
    connect: "Connect",
    email: "Email",
    resume: "Resume / CV",
    rights: "All rights reserved.",
    legal: "Legal",
    imprint: "Imprint",
    privacy: "Privacy Policy",
  },
  cookie: {
    title: "Your privacy",
    message:
      "This site uses only essential local storage to remember your theme and language preference. No tracking or advertising cookies are used.",
    accept: "Accept",
    decline: "Essential only",
    learnMore: "Privacy Policy",
  },
  legal: {
    backHome: "Back to home",
    lastUpdated: "Last updated",
    imprint: {
      title: "Imprint",
      subtitle: "Information pursuant to §5 ECG and §25 MedienG (Austria)",
      responsibleHeading: "Responsible for content",
      contactHeading: "Contact",
      disclaimerHeading: "Disclaimer",
      disclaimer:
        "Despite careful content control, no liability is assumed for the accuracy, completeness or timeliness of the information provided. Links to external websites are the responsibility of their respective operators; no liability is accepted for their content.",
      copyrightHeading: "Copyright",
      copyright:
        "All content, design and source code on this website are protected by copyright. Reproduction or use without prior written consent is not permitted.",
    },
    privacy: {
      title: "Privacy Policy",
      subtitle: "How your data is handled on this website, in line with the GDPR.",
      intro:
        "Your privacy matters. This website is a personal portfolio and is built to collect as little personal data as possible. This policy explains what is processed and your rights under the EU General Data Protection Regulation (GDPR).",
      sections: [
        {
          heading: "Data controller",
          body: "The controller responsible for data processing on this website is Hammad Ahmad Riaz, Salzburg, Austria. You can reach the controller at the email address listed in the contact section below.",
        },
        {
          heading: "What data is processed",
          body: "This site does not use analytics, advertising or third-party tracking cookies. The only data stored in your browser is your theme (light/dark), language preference and cookie-consent choice, kept in local storage on your own device. No personal data is transmitted to a server when you browse.",
        },
        {
          heading: "Contact form",
          body: "The contact form does not store data on a server. Submitting it opens your own email client with the message pre-filled, so any details you send are transmitted directly via your email provider. Your message and email address are used solely to respond to your enquiry.",
        },
        {
          heading: "Hosting & server logs",
          body: "The site is served by a hosting provider that may automatically process technical access data (such as IP address, browser type and time of request) for the purpose of delivering and securing the website. This is based on the legitimate interest of operating a secure website (Art. 6(1)(f) GDPR).",
        },
        {
          heading: "Your rights",
          body: "Under the GDPR you have the right to access, rectify, erase, restrict and port your personal data, and to object to its processing. You also have the right to lodge a complaint with the Austrian Data Protection Authority (Datenschutzbehörde).",
        },
        {
          heading: "Contact",
          body: "For any privacy request, contact the controller by email at the address listed below.",
        },
      ],
    },
  },
} as const;
