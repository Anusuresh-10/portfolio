// =====================================================================
// PORTFOLIO CONTENT
// Everything you see in the 3D world is driven from this file.
// Fill in the "TODO" bits with your real info — no 3D / Three.js
// knowledge needed to edit this file.
// =====================================================================

export const profile = {
  name: "Your Name", // TODO: your name
  role: "B.E. CSE Student • Full-Stack & DSA",
  tagline:
    "4th year CSE @ Sri Sairam Engineering College — building products, grinding DSA, and chasing a high-package SDE role.",
  // TODO: paste a square-ish photo into /public (e.g. public/me.jpg) and set the path below
  photo: "/me.jpg",
  resumeUrl: "/resume.pdf", // TODO: drop your resume PDF in /public and keep this name, or change it
  location: "Chennai, India",
};

export const socials = {
  github: "https://github.com/your-username", // TODO
  linkedin: "https://linkedin.com/in/your-profile", // TODO
  email: "you@example.com", // TODO
  leetcode: "https://leetcode.com/your-username", // TODO (optional)
};

// Each "zone" is one floating platform/island in the 3D world.
// position: [x, y, z] — where the platform sits in the scene
// color: accent color used for the platform glow + HUD highlight
export const zones = [
  {
    id: "home",
    label: "Home",
    shortLabel: "Spawn",
    position: [0, 0, 0],
    color: "#4DEEEA",
    shape: "core",
  },
  {
    id: "about",
    label: "About Me",
    shortLabel: "About",
    position: [-9, 0.6, -4],
    color: "#9D7BFF",
    shape: "platform",
  },
  {
    id: "skills",
    label: "Skill Tree",
    shortLabel: "Skills",
    position: [9, 0.4, -4],
    color: "#4DEEEA",
    shape: "platform",
  },
  {
    id: "projects",
    label: "Project Vault",
    shortLabel: "Projects",
    position: [6, 0.8, 7],
    color: "#FFB454",
    shape: "platform",
  },
  {
    id: "contact",
    label: "Contact Beacon",
    shortLabel: "Contact",
    position: [-6, 0.5, 7],
    color: "#5CF29A",
    shape: "platform",
  },
];

export const about = {
  heading: "About Me",
  paragraphs: [
    // TODO: rewrite this in your own voice
    "I'm a final-year B.E. CSE student at Sri Sairam Engineering College, currently building toward a placement at a high-package software company.",
    "I'm sharpening my fundamentals through Apna College's DSA, Web Development, and Aptitude tracks, with Java as my primary language — and I'm extending that into full-stack development (React + Node).",
    "Outside coursework, I work on a live industry project for Tata Insights through Sri Sairam Techno Incubator Foundation (SSTIF) — building a bird survey application end-to-end.",
  ],
  highlights: [
    { label: "College", value: "Sri Sairam Engineering College" },
    { label: "Program", value: "B.E. CSE, Final Year" },
    { label: "Primary Language", value: "Java" },
    { label: "Currently Learning", value: "Full-Stack Development (DSA • Web • Aptitude — Apna College)" },
  ],
};

// Skill tree — grouped categories. Bars are 0-100 (rough self-rating, edit freely).
export const skillTree = [
  {
    category: "Languages",
    skills: [
      { name: "Java", level: 80 },
      { name: "JavaScript", level: 65 },
      { name: "SQL", level: 60 },
      { name: "C", level: 70 },
    ],
  },
  {
    category: "Web / Full-Stack",
    skills: [
      { name: "HTML & CSS", level: 75 },
      { name: "React.js", level: 60 },
      { name: "Node.js / Express", level: 50 },
      { name: "REST APIs", level: 55 },
    ],
  },
  {
    category: "Core CS / DSA",
    skills: [
      { name: "Data Structures", level: 70 },
      { name: "Algorithms", level: 65 },
      { name: "Problem Solving (LeetCode/GFG)", level: 60 },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git & GitHub", level: 65 },
      { name: "VS Code", level: 85 },
      { name: "Postman", level: 55 },
      { name: "MySQL", level: 55 },
    ],
  },
];

// Projects — the first one is treated as the "featured" project.
export const projects = [
  {
    id: "bird-survey",
    title: "Bird Survey App — Tata Insights",
    org: "Sri Sairam Techno Incubator Foundation (SSTIF)",
    featured: true,
    color: "#FFB454",
    summary:
      // TODO: tighten this up with real details once you can share them
      "An incubation project built for Tata Insights — a mobile/web application that lets field surveyors log bird sightings, locations, and counts, helping build a structured dataset for ecological survey work.",
    tags: ["Java", "Full-Stack", "Field Data Collection", "Industry Project"],
    links: [
      // TODO: add a repo / demo link if you can share one
      // { label: "GitHub", url: "https://github.com/your-username/bird-survey-app" },
    ],
  },
  {
    id: "dsa-tracker",
    title: "DSA Practice Tracker",
    org: "Personal Project",
    featured: false,
    color: "#4DEEEA",
    summary:
      // TODO: replace with your actual project once built
      "A tracker for daily DSA practice — log problems solved by topic and difficulty, visualize streaks, and stay consistent with the Apna College DSA roadmap.",
    tags: ["Java", "DSA", "Personal Tool"],
    links: [],
  },
  {
    id: "project-three",
    title: "Add Your Next Project",
    org: "Personal / College Project",
    featured: false,
    color: "#9D7BFF",
    summary:
      // TODO: this is a placeholder slot — swap in a real project (or duplicate this block for more)
      "A short, punchy description of what the project does, the problem it solves, and the stack you used.",
    tags: ["Tag 1", "Tag 2", "Tag 3"],
    links: [],
  },
];

export const contact = {
  heading: "Let's Connect",
  message:
    "I'm actively looking for SDE internships and full-time opportunities. Feel free to reach out!",
};
