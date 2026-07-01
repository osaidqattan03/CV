import {
  ClevertechLogo,
  ConsultlyLogo,
  IbtikarLogo,
  ISC2Logo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TCRLogo,
  CodeguruLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import Timeline from "@/app/components/Timeline/Timeline";
import { title } from "process";

export const RESUME_DATA = {
  name: "OSAID QATTAN",
  initials: "OQ",
  location: "Dubai, UAE",
  about: "Full-Stack Software Engineer • Python & TypeScript • PostgreSQL • Applied AI (RAG & Voice) • Meta / WhatsApp Integrations",
  summary: (
    <>
      Full-stack software engineer who builds production business applications end-to-end across Python and TypeScript on PostgreSQL. At Codeguru I sole-authored two applied-AI microservices — a retrieval-augmented (RAG) chatbot and a real-time voice agent — and I am the primary engineer on our multi-tenant CRM Meta integration layer (WhatsApp Business Cloud API, Messenger, Instagram, Lead Ads and native ad creation). Strong in REST and webhook integrations with third-party platforms, relational schema design, and multi-tenant SaaS architecture, backed by a security-conscious mindset from my cybersecurity background.    </>
  ),
  avatarUrl: "https://gitlab.com/uploads/-/system/user/avatar/22931844/avatar.png?width=192",
  personalWebsiteUrl: "https://github.com/Osaid03",
  contact: {
    email: "osaid.qattan@hotmail.com",
    tel: "+971 56 155 0845",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Osaid03",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/osaid-qattan/",
        icon: LinkedInIcon,
      },
    ],
  },

  work: [
{
  company: "Codeguru",
  location: "Dubai - Remote",
  link: "https://codeguru.ae/",
  badges: ["Python", "TypeScript", "PostgreSQL", "React", "FastAPI", "Meta Graph API"],
  title: "Full Stack Software Engineer",
  logo: CodeguruLogo,
  start: "Sep 2025",
  end: "Present",
  description: (
    <>
      <ul className="list-inside list-disc">
        <li>Sole-authored a production RAG chatbot microservice in Python/FastAPI that answers clinic patients over REST and WebSocket — hybrid retrieval over PostgreSQL + pgvector (semantic + full-text + BM25), grounded LLM synthesis, and human handoff — multi-tenant and bilingual English/Arabic.</li>
        <li>Designed and built a real-time voice-AI gateway (async Python/FastAPI) letting patients book, reschedule, and cancel appointments by phone (Twilio) or browser, streaming to a realtime LLM (Google Gemini Live / OpenAI Realtime) with tool-calling that performs live CRM actions.</li>
        <li>Primary engineer on the CRM Meta integration hub (TypeScript/Node), built directly on the Meta Graph API: WhatsApp Business Cloud API team inbox, Facebook Messenger and Instagram inboxes, and Meta Lead Ads that auto-create CRM leads inside database transactions.</li>
        <li>Building native Meta ad creation (&quot;Ad Studio&quot;) on the Marketing API — a resumable, idempotent campaign → ad-set → creative → ad pipeline with PostgreSQL mirror tables — alongside WhatsApp template campaigns and reminders.</li>
        <li>Own Meta App and Business Manager configuration: WhatsApp Embedded Signup and Facebook Login OAuth flows, automatic Page/WABA webhook subscriptions with tenant backfill, HMAC webhook-signature verification, and a code-level Meta App permissions audit.</li>
        <li>Top contributor to the multi-tenant (database-per-tenant) SaaS CRM on Node.js/Express + Prisma/PostgreSQL and React — authored 30+ relational migrations, a 3-level UTM marketing-attribution engine, a visual automation flow builder, and the endpoints that ingest the AI voice-agent and chatbot outputs.</li>
      </ul>
    </>
  ),
},


{
  company: "Ibtikar",
  location: "Germany - Remote",
  link: "https://www.ibtikar.sa/",
  badges: ["Java Spring Boot", "Flutter", "React", "SQL", "Agile", "Jira"],
  title: "Full Stack Software Developer",
  logo: IbtikarLogo,
  start: "Feb 2024",
  end: "Present",
  description: (
    <>
      <ul className="list-inside list-disc">
        <li>Developed scalable applications with a backend in Java Spring Boot and frontends in Flutter and React, collaborating in Agile sprints with regular code reviews and best practices in version control.</li>
        <li>Contributed to a cross-platform Classifieds App with secure authentication, listings, and user management features.</li>
        <li>Applied secure-coding practices and data protection across the stack while delivering features in Agile sprints.</li>
        <li>Collaborated with cross-functional teams to optimize performance, implement CI/CD pipelines, and streamline deployment workflows.</li>
      </ul>
    </>
  ),
},


    {
      company: "TCR",
      location: "Dubai - Remote",
      link: "https://www.tcr-group.com/",
      badges: ["React", "JavaScript", "Node.js", "SQL"],
      title: "Full Stack Developer Intern",
      logo: TCRLogo,
      start: "June 2023",
      end: "July 2023",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>Developed and maintained scalable web applications using React for frontend and Node.js for backend services.</li>
            <li>Collaborated with cross-functional teams to enhance code quality through peer reviews and adherence to best practices.</li>
            <li>Participated in Agile development workflows, contributing to sprint planning and daily stand-ups.</li>
            <li>Implemented RESTful APIs and integrated SQL databases for efficient data management and retrieval.</li>
          </ul>
        </>
      ),
    },
  ],
  
  certification: [
    {
      title: "Certificate in Full Stack Web Development",
      badges: ["Development", "Full Stack"],
      issuer: "TR Innovation",
      date: "2023",
      description: "Full Stack Web Development certification covering modern web technologies and frameworks.",
      image: "/images/fullstack-certificate.jpg",
      logo: TCRLogo,
    },
    {
      title: "Certificate in Cybersecurity (CC)",
      badges: ["Certification", "Cybersecurity"],
      issuer: "ISC2",
      date: "2024 - 2027",
      description: "Certification in Cybersecurity (CC) from ISC2, demonstrating foundational knowledge in cybersecurity principles and practices.",
      image: "/images/isc2-certificate.jpg",
      logo: ISC2Logo,
    },
  ],
  
  skills: [
    { name: "CSS", logo: "https://www.svgrepo.com/show/452185/css-3.svg" },
    { name: "Debian", logo: "https://www.svgrepo.com/show/349333/debian.svg" },
    { name: "Docker", logo: "https://www.svgrepo.com/show/452192/docker.svg" },
    { name: "Gitlab", logo: "https://www.svgrepo.com/show/448226/gitlab.svg" },
    { name: "HTML", logo: "https://www.svgrepo.com/show/452228/html-5.svg" },
    { name: "Java", logo: "https://www.svgrepo.com/show/452234/java.svg" },
    { name: "JavaScript", logo: "https://www.svgrepo.com/show/349419/javascript.svg" },
    { name: "Jira", logo: "https://www.svgrepo.com/show/353935/jira.svg" },
    { name: "Linux", logo: "https://www.svgrepo.com/show/448236/linux.svg" },
    { name: "Node.js", logo: "https://www.svgrepo.com/show/452075/node-js.svg" },
    { name: "PostgreSQL", logo: "https://www.svgrepo.com/show/303301/postgresql-logo.svg" },
    { name: "Python", logo: "https://www.svgrepo.com/show/452091/python.svg" },
    { name: "React/Next.js", logo: "https://www.svgrepo.com/show/452092/react.svg" },
    { name: "SQL", logo: "https://www.svgrepo.com/show/374093/sql.svg" },
    { name: "Tailwind CSS", logo: "https://www.svgrepo.com/show/374118/tailwind.svg" },
    { name: "TensorFlow", logo: "https://www.svgrepo.com/show/354440/tensorflow.svg" },
    { name: "Typescript", logo: "https://www.svgrepo.com/show/439022/typescript.svg" },
    { name: "Flutter", logo: "https://www.svgrepo.com/show/373604/flutter.svg" },
    { name: "Mongodb", logo: "https://www.svgrepo.com/show/331488/mongodb.svg" },
    { name: "FastAPI", logo: "https://www.svgrepo.com/show/330413/fastapi.svg" },
    { name: "Redis", logo: "https://www.svgrepo.com/show/303460/redis-logo.svg" },
    { name: "Prisma", logo: "https://www.svgrepo.com/show/354210/prisma.svg" },

  ],
  projects: [
    {
      title: "AI Clinic Chatbot — RAG Microservice",
      category: "Applied AI · Backend",
      techStack: ["Python", "FastAPI", "PostgreSQL", "pgvector", "OpenAI", "Redis", "WebSockets", "React"],
      description:
        "Production retrieval-augmented chatbot answering clinic patients over REST and WebSocket. Runs query classification, hybrid retrieval (pgvector semantic + PostgreSQL full-text + BM25 re-ranking), confidence-threshold source selection, grounded LLM synthesis, and human handoff. Multi-tenant on per-tenant PostgreSQL, bilingual English/Arabic, and integrated with WhatsApp, Instagram, and Messenger webhooks.",
      logo: CodeguruLogo,
      link: {
        label: "Project Details",
        href: "https://github.com/Osaid03",
      },
    },
    {
      title: "Real-time Voice AI Gateway",
      category: "Applied AI · Realtime",
      techStack: ["Python", "FastAPI", "asyncio", "WebSockets", "Google Gemini Live", "OpenAI Realtime", "Twilio", "AWS S3"],
      description:
        "Async Python service bridging phone (Twilio Media Streams) and browser callers to a streaming realtime LLM so patients can book, reschedule, and cancel appointments by voice. Pluggable provider abstraction (Gemini Live / OpenAI Realtime), LLM tool-calling that executes real CRM actions over REST, an anti-hallucination safety layer, bilingual EN/AR, Redis sessions, S3 call recording, and per-call token-cost accounting.",
      logo: CodeguruLogo,
      link: {
        label: "Project Details",
        href: "https://github.com/Osaid03",
      },
    },
    {
      title: "Doctorna CRM — Meta Integration Hub",
      category: "Full-Stack · Integrations",
      techStack: ["TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "Meta Graph API", "OAuth 2.0", "BullMQ"],
      description:
        "Multi-tenant (database-per-tenant) SaaS CRM for healthcare clinics. Primary engineer of the Meta integration hub built directly on the Graph API: WhatsApp Business Cloud API inbox, Messenger and Instagram inboxes, Lead Ads capture, template campaigns, native ad creation (Ad Studio, in progress), OAuth onboarding, and webhook subscription management with signature verification. Also delivered a full-stack 3-level UTM attribution engine and a visual automation flow builder.",
      logo: CodeguruLogo,
      link: {
        label: "Project Details",
        href: "https://github.com/Osaid03",
      },
    },
    {
      title: "WagenHub",
      category: "Full-Stack · Web",
      techStack: ["React", "Next.js", "Node.js", "PostgreSQL"],
      description:
        "A car-selling platform with a modern frontend and robust backend architecture for smooth user experience and data management.",
      logo: ConsultlyLogo,
      link: {
        label: "WagenHub Repository",
        href: "https://github.com/Osaid03",

      },
    },
    {
      title: "Classifieds Mobile & Web Application",
      category: "Mobile · Full-Stack",
      techStack: ["Flutter (Dart)", "Java Spring Boot", "RESTful API", "Git", "Authentication"],
      description:
        "Cross-platform classifieds app built with Flutter and Java Spring Boot — secure authentication, listings, and user management over a REST API, developed in Agile sprints with regular code reviews.",
      logo: MonitoLogo,
      link: {
        label: "Project Repository",
        href: "https://github.com/Osaid03",
      },
    },
    {
      title: "Adaptive Intelligence for Honeypot Deception",
      category: "Machine Learning",
      techStack: ["Python", "TensorFlow", "Cowrie Honeypot", "Machine Learning"],
      description:
        "Graduation project applying AI-driven behavioral analysis and real-time adaptability to improve the effectiveness of honeypots — combining Python, TensorFlow, and machine learning.",
      logo: MonitoLogo,
      link: {
        label: "Project Details",
        href: "https://github.com/Osaid03",
      },
    },
  ],
  slider: [
    {
      id: "certificate1",
      imageUrl: "images/certificate1.png",
      redirectUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7228788689617747968/",
      title: "Certificate in CyberSecurity"
    },
    {
      id: "certificate2",
      imageUrl: "images/certificate2.png",
      redirectUrl: "https://certificate.givemycertificate.com/c/683243ad-2685-4f9a-b8cb-bd9a7b13b5b5",
      title: "Certificate in Full Stack Web Development"
    },

  ],

} as const;

