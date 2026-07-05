export const profile = {
  name: "Anu Suresh",
  role: "B.E. CSE Student • Full-Stack & DSA",
  tagline: "Final-year CSE student at Sri Sairam Engineering College, building toward a high-package SDE role. Sharpening DSA in Java, learning full-stack development, and shipping a real-world product for Tata Insights.",
  location: "Chennai, India",
  resumeUrl: "/resume.pdf",
};

export const socials = {
  github: "https://github.com/Anusuresh-10",
  linkedin: "https://www.linkedin.com/in/anu-suresh-8166192b7/",
  email: "anusuresh2k05@gmail.com",
  hackerrank: "https://www.hackerrank.com/anusuresh2k05",
};

export const zones = [
  { id: "home",     label: "Home",          shortLabel: "Home",     position: [0, 0, 0],      color: "#4DEEEA", shape: "core"     },
  { id: "about",    label: "About Me",      shortLabel: "About",    position: [-9, 0.6, -4],  color: "#9D7BFF", shape: "platform" },
  { id: "skills",   label: "Skill Tree",    shortLabel: "Skills",   position: [9, 0.4, -4],   color: "#4DEEEA", shape: "platform" },
  { id: "projects", label: "Project Vault", shortLabel: "Projects", position: [6, 0.8, 7],    color: "#FFB454", shape: "platform" },
  { id: "contact",  label: "Contact",       shortLabel: "Contact",  position: [-6, 0.5, 7],   color: "#5CF29A", shape: "platform" },
];

export const about = {
  paragraphs: [
    "I'm Anu Suresh — a final-year B.E. CSE student at Sri Sairam Engineering College, driven by a dream of landing a high-package software engineering role.",
    "I'm actively learning DSA, Web Development, and Aptitude through Apna College, with Java as my primary programming language. Currently expanding into full-stack development to build end-to-end products.",
    "I'm also part of the Sri Sairam Techno Incubator Foundation (SSTIF), where I contribute to a live industry project for Tata Insights — building a bird survey application that collects and structures ecological field data.",
  ],
  highlights: [
    { label: "College",      value: "Sri Sairam Engineering College" },
    { label: "Program",      value: "B.E. Computer Science Engineering" },
    { label: "Year",         value: "Final Year (4th Year)" },
    { label: "CGPA",         value: "8.49" },
    { label: "Primary Lang", value: "Java" },
    { label: "Learning",     value: "DSA • Web Dev • Aptitude (Apna College)" },
    { label: "Incubation",   value: "SSTIF — Tata Insights Project" },
  ],
};

export const skillTree = [
  {
    category: "Languages",
    skills: [
      { name: "Java",       level: 80 },
      { name: "C",          level: 70 },
      { name: "JavaScript", level: 60 },
      { name: "SQL",        level: 58 },
    ],
  },
  {
    category: "Web & Full-Stack",
    skills: [
      { name: "HTML & CSS",      level: 75 },
      { name: "React.js",        level: 60 },
      { name: "Node.js/Express", level: 50 },
      { name: "MongoDB",         level: 48 },
    ],
  },
  {
    category: "DSA & Problem Solving",
    skills: [
      { name: "Data Structures",  level: 72 },
      { name: "Algorithms",       level: 65 },
      { name: "OOP Concepts",     level: 78 },
      { name: "Competitive Prog", level: 55 },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git & GitHub", level: 65 },
      { name: "VS Code",      level: 85 },
      { name: "Postman",      level: 55 },
      { name: "Power BI",     level: 50 },
    ],
  },
];

export const projects = [
  {
    id: "bird-survey",
    title: "Bird Survey App",
    org: "Tata Insights × SSTIF",
    featured: true,
    color: "#FFB454",
    summary: "A live industry project built at Sri Sairam Techno Incubator Foundation for Tata Insights. Field surveyors use this app to log bird sightings, GPS locations, and species counts — creating a structured dataset for ecological research.",
    tags: ["Java", "Full-Stack", "Industry Project", "SSTIF"],
    links: [],
  },
  {
    id: "project-2",
    title: "Coming Soon — Project #2",
    org: "Personal Project",
    featured: false,
    color: "#9D7BFF",
    summary: "Working on this one — drop back soon.",
    tags: ["Java", "DSA"],
    links: [],
  },
  {
    id: "project-3",
    title: "Coming Soon — Project #3",
    org: "College Project",
    featured: false,
    color: "#4DEEEA",
    summary: "Another project in the pipeline — details coming soon.",
    tags: ["Full-Stack", "Web Dev"],
    links: [],
  },
];

export const contact = {
  heading: "Let's Connect",
  message: "I'm actively looking for SDE internships and full-time placements. If you're hiring or want to collaborate, reach out!",
};
