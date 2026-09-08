// All of the site's words live here.
// Edit this one file to make the site yours — no need to touch the components.

export const site = {
  name: "Jessy Garcia",
  role: "Data science student at UC Riverside",
  // The line under your name on the hero.
  tagline: "I like building things that feel simple, look clean, and just work.",
  email: "jgarc826@ucr.edu",
  // Update these with your real profiles.
  github: "https://github.com/jgarc826",
  linkedin: "https://www.linkedin.com/in/jessygarcia2/",
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  wide?: boolean; // wide cards span two columns on desktop
};

export const projects: Project[] = [
  {
    title: "This website",
    description:
      "Designed and built from scratch to be fast, minimal, and unmistakably clean. Static-rendered Next.js with a hand-rolled design system inspired by apple.com.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/jgarc826/jgarc826.github.io",
    wide: true,
  },
  {
    title: "RoseHack project",
    description:
      "A weekend hackathon build at UC Riverside. (Placeholder — describe what your team made here.)",
    tags: ["Hackathon"],
  },
  {
    title: "Your next project",
    description:
      "A class project, a side project, a script that saved you an hour — anything you've built belongs here. (Placeholder.)",
    tags: ["Coming soon"],
  },
];

export type ExperienceItem = {
  title: string;
  org: string;
  period: string;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    title: "B.S. Data Science",
    org: "University of California, Riverside",
    period: "2022 — Present",
    description:
      "Coursework in programming fundamentals, data structures, and problem solving. (Placeholder — fix the dates and add clubs, awards, or jobs.)",
  },
  {
    title: "Hackathon participant",
    org: "RoseHack · UC Riverside",
    period: "2026",
    description:
      "Built and shipped a project with a team over one weekend. (Placeholder — update with your real details.)",
  },
];
