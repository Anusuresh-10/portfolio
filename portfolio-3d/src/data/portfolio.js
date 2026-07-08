// ─── PROFILE ────────────────────────────────────────────────
export const profile = {
  name: "Anu Suresh",
  role: "B.E. CSE Student  •  Full-Stack  •  DSA",
  tagline: "Final-year CSE student at Sri Sairam Engineering College, Chennai — grinding DSA in Java, learning full-stack development, and shipping real-world products. Targeting a high-package SDE role.",
  cgpa: "8.49",
  college: "Sri Sairam Engineering College",
  location: "Chennai, India",
  resumeUrl: "/resume.pdf",
};

// ─── SOCIALS ────────────────────────────────────────────────
export const socials = {
  github: "https://github.com/Anusuresh-10",
  linkedin: "https://www.linkedin.com/in/anu-suresh-8166192b7/",
  email: "anusuresh2k05@gmail.com",
  hackerrank: "https://www.hackerrank.com/anusuresh2k05",
};

// ─── 3D WORLD ZONES ─────────────────────────────────────────
export const zones = [
  { id: "home",     label: "Home",        shortLabel: "Home",    position: [0, 0, 0],     color: "#4DEEEA", shape: "core"     },
  { id: "about",    label: "About Me",    shortLabel: "About",   position: [-9, 0.6, -4], color: "#9D7BFF", shape: "platform" },
  { id: "skills",   label: "Skill Tree",  shortLabel: "Skills",  position: [9, 0.4, -4],  color: "#4DEEEA", shape: "platform" },
  { id: "projects", label: "Projects",    shortLabel: "Projects",position: [6, 0.8, 7],   color: "#FFB454", shape: "platform" },
  { id: "achieve",  label: "Achievements",shortLabel: "Achieve", position: [-6, 0.5, 7],  color: "#FF6B9D", shape: "platform" },
  { id: "contact",  label: "Contact",     shortLabel: "Contact", position: [0, 0.4, 10],  color: "#5CF29A", shape: "platform" },
];

// ─── ABOUT ──────────────────────────────────────────────────
export const about = {
  bio: [
    "I'm Anu Suresh — a final-year B.E. CSE student at Sri Sairam Engineering College, driven by a dream of landing a high-package software engineering role.",
    "I'm sharpening my fundamentals through Apna College's DSA, Web Development, and Aptitude tracks, with Java as my primary language — and expanding that into full-stack development (React + Node.js).",
    "I've done 2 industry internships and I'm currently part of SSTIF building a live product for Tata Insights.",
  ],
  highlights: [
    { label: "College",   value: "Sri Sairam Engineering College" },
    { label: "Program",   value: "B.E. Computer Science Engineering" },
    { label: "Year",      value: "Final Year (4th Year)" },
    { label: "CGPA",      value: "8.49" },
    { label: "Languages", value: "Java (Primary) · JavaScript · C · SQL" },
    { label: "Learning",  value: "DSA · Web Dev · Aptitude — Apna College" },
  ],
};

// ─── INTERNSHIPS ────────────────────────────────────────────
export const internships = [
  {
    id: "vebbox",
    company: "Vebbox Software Solutions",
    role: "Data Analyst Intern",
    duration: "June – September 2024  ·  3 months",
    location: "Chennai",
    color: "#4DEEEA",
    description: "Worked on real-world data analysis at a startup, gaining hands-on experience with data pipelines, reporting, and business insights. Also hosted the company's monthly 'Ignite' events — presenting to well-wishers, coordinating speakers, and networking with industry professionals.",
    highlights: [
      "Real-world data analysis & reporting",
      "Hosted monthly 'Ignite' events for company stakeholders",
      "Exposure to startup operations and product thinking",
      "Mentored by CEO Ashok, Product Manager Varun, and Team Lead Chandru",
    ],
    // photos you took at Vebbox events — copy these into /public/internships/
    photos: [
      { src: "/internships/vebbox-event.jpg",  caption: "Hosting the Monthly Ignite event" },
      { src: "/internships/vebbox-team.jpg",   caption: "Vebbox team at the event" },
      { src: "/internships/vebbox-session.jpg",caption: "Internship session" },
    ],
  },
  {
    id: "sstif",
    company: "Sri Sairam Techno Incubator Foundation (SSTIF)",
    role: "Frontend Developer Intern",
    duration: "10 Feb – 18 Mar 2026  ·  30 days",
    location: "Sri Sairam Engineering College Campus, Chennai",
    color: "#9D7BFF",
    description: "Selected through a competitive interview process among students from across the college. Built a 'Task Management' application as part of the SSTIF Incubatee program — gaining deep exposure to frontend development, backend integration, and system design. Mentored by Ragul D (who also supported my selection as a backing vocalist for a Hip Hop Tamizha concert).",
    highlights: [
      "Built Task Management app — frontend to backend",
      "Exposure to system design and real-world execution",
      "Worked alongside classmates Nithika and Madhumitha",
      "Mentored by Ragul anna, Yazhini akka, and the SSTIF team",
    ],
    photos: [
      { src: "/internships/sstif-office.jpg",  caption: "SSTIF Office Space" },
      { src: "/internships/sstif-work.jpg",    caption: "Working at SSTIF" },
      { src: "/internships/sstif-team.jpg",    caption: "SSTIF Team" },
    ],
  },
];

// ─── SKILLS ─────────────────────────────────────────────────
export const skillTree = [
  {
    category: "Languages",
    skills: [
      { name: "Java",       level: 80 },
      { name: "C",          level: 70 },
      { name: "JavaScript", level: 62 },
      { name: "SQL",        level: 58 },
    ],
  },
  {
    category: "Web & Full-Stack",
    skills: [
      { name: "HTML & CSS",       level: 75 },
      { name: "React.js",         level: 62 },
      { name: "Node.js / Express",level: 52 },
      { name: "MongoDB",          level: 48 },
    ],
  },
  {
    category: "DSA & Problem Solving",
    skills: [
      { name: "Data Structures", level: 72 },
      { name: "Algorithms",      level: 65 },
      { name: "OOP Concepts",    level: 78 },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git & GitHub", level: 65 },
      { name: "VS Code",      level: 88 },
      { name: "Power BI",     level: 52 },
      { name: "Postman",      level: 55 },
    ],
  },
];

// ─── PROJECTS ───────────────────────────────────────────────
export const projects = [
  {
    id: "bird-survey",
    title: "Bird Survey App",
    org: "Tata Insights × SSTIF",
    featured: true,
    color: "#FFB454",
    type: "Industry Project",
    summary: "A live industry application built for Tata Insights through Sri Sairam Techno Incubator Foundation. Field surveyors use this to log bird sightings, GPS locations, and species counts — building a structured ecological dataset for research.",
    tags: ["Full-Stack", "Java", "Industry", "SSTIF", "Tata Insights"],
    image: "/projects/bird-survey.jpg", // TODO: add screenshot
    links: [],
  },
  {
    id: "task-management",
    title: "Task Management App",
    org: "SSTIF Internship Project",
    featured: false,
    color: "#9D7BFF",
    type: "Internship Project",
    summary: "Built during my 30-day SSTIF internship — a full task management application covering frontend UI, backend integration, and system design principles learned on the job.",
    tags: ["Frontend", "Backend", "System Design", "SSTIF"],
    image: "/projects/task-management.jpg", // TODO: add screenshot
    links: [],
  },
  {
    id: "project-3",
    title: "Your Next Project",
    org: "Coming Soon",
    featured: false,
    color: "#4DEEEA",
    type: "Personal Project",
    summary: "Slot for your next project — swap this out in src/data/portfolio.js whenever you're ready.",
    tags: ["Java", "React", "Node.js"],
    image: "/projects/placeholder.jpg",
    links: [],
  },
];

// ─── ACHIEVEMENTS ───────────────────────────────────────────
export const nptelCerts = [
  { course: "Cloud Computing",                  score: "79%", period: "Jan–Apr 2026", institute: "IIT Kharagpur",  grade: "Elite" },
  { course: "Introduction to Internet of Things",score: "78%", period: "Jul–Oct 2025", institute: "IIT Kharagpur",  grade: "Elite" },
  { course: "Programming in Java",              score: "61%", period: "Jul–Oct 2024", institute: "IIT Kharagpur",  grade: "Elite" },
  { course: "The Joy of Computing using Python",score: "62%", period: "Jan–Apr 2024", institute: "IIT Madras",    grade: "Elite" },
];

export const competitions = [
  { title: "ET-AI Hackathon 2026",          org: "The Economic Times",     result: "Semi-Finalist 🏆",   year: "2026", color: "#FFB454" },
  { title: "AINCAT 2026",                   org: "Naukri Campus",          result: "Participated",        year: "2026", color: "#4DEEEA" },
  { title: "Viksit Vibrant Village Quiz",   org: "MYBharat / Govt. of India", result: "Participated",    year: "2026", color: "#5CF29A" },
  { title: "SPARKLE'25 — Symphony",         org: "Dr. MGR University",     result: "Prize Winner 🥇",    year: "2025", color: "#FF6B9D" },
  { title: "SPARKLE'25 — Prompt Play",      org: "Dr. MGR University",     result: "Prize Winner 🥇",    year: "2025", color: "#FF6B9D" },
  { title: "Eureka Challenge 3.0",          org: "Varroc × Unstop",        result: "Executive Round",     year: "2025", color: "#9D7BFF" },
  { title: "Convergence'24",               org: "Sri Sairam Engineering College", result: "3rd Prize 🥉", year: "2024", color: "#FFB454" },
  { title: "SPARKLE'24",                   org: "Dr. MGR University",      result: "Participated",        year: "2024", color: "#4DEEEA" },
];

export const volunteer = [
  { title: "YRC Volunteer",                  org: "Youth Red Cross" },
  { title: "Blood Donation Camp Volunteer",  org: "Indian Red Cross Society, Sri Sairam (Nov 2024)" },
  { title: "NSS — World AIDS Day Quiz",      org: "Sairam NSS — 'Harmony in Vigilance'" },
  { title: "Personality Development Webinar",org: "Youth United Council of India (Apr 2024)" },
];

export const extracurricular = [
  { title: "Backing Vocalist — Hip Hop Tamizha Concert", desc: "Selected as a backing vocalist for a live Hip Hop Tamizha concert — a major milestone beyond academics.", emoji: "🎤" },
  { title: "Carnatic Music", desc: "Completed 5 grades of Carnatic music — a lifelong pursuit of classical Indian music.", emoji: "🎵" },
  { title: "Bharatanatyam", desc: "Classical Bharatanatyam dancer with inter-city competition experience.", emoji: "💃" },
  { title: "Event Host / MC", desc: "Hosted multiple college and industry events including Vebbox's Monthly Ignite series.", emoji: "🎙️" },
  { title: "Modeling & Acting", desc: "Pursuing modeling and acting alongside engineering — building a creative career in parallel.", emoji: "✨" },
];
