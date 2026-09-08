// Everything user-visible on the site lives in this file.

export const site = {
  name: "Jessy Garcia",
  role: "Data science student at UC Riverside",
  tagline: "I like building things that feel simple, look clean, and just work.",
  // Small pill above the hero greeting. Set to "" to hide it.
  availability: "Open to internships",
  email: "jgarc826@ucr.edu",
  github: "https://github.com/jgarc826",
  linkedin: "https://www.linkedin.com/in/jessygarcia2/",
};

export type AboutFact = {
  label: string;
  value: string;
  sub?: string;
  size?: "wide"; // wide facts span two columns on desktop
  gradient?: boolean; // one card gets the colorful treatment
};

export const about = {
  bio: "I'm Jessy — a data science student at UC Riverside who likes building things that actually ship: an AI assistant that helps students keep up with classes, machine learning on heart rhythms, research linking EV adoption to asthma outcomes, and open-source work on a WebAssembly runtime. Wherever I'm working, the goal is the same — take something messy and make it feel obvious.",
  facts: [
    {
      label: "School",
      value: "UC Riverside",
      sub: "B.S. Data Science · 3.7 GPA",
      size: "wide",
    },
    {
      label: "Toolbox",
      value: "Python · C++ · SQL · React",
      sub: "PyTorch, Pandas, Next.js, Docker, GCP",
      size: "wide",
    },
    { label: "Based in", value: "Riverside, CA", sub: "Go Highlanders" },
    { label: "Open source", value: "wasm-bpf", sub: "2 PRs merged upstream" },
    {
      label: "Next up",
      value: "jessygarcia.tech",
      sub: "Coming soon",
      size: "wide",
      gradient: true,
    },
  ] satisfies AboutFact[],
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  wide?: boolean; // wide cards span two columns on desktop
  cover?: "blue" | "violet" | "sunrise" | "mint"; // gradient cover art
};

export const projects: Project[] = [
  {
    title: "PHIL — AI Gmail assistant",
    description:
      "A Chrome extension that lives in Gmail's side panel, summarizing messages and triaging the inbox with AI. Gmail and Gemini APIs with local caching, deduplication, and message-state handling so nothing gets processed twice.",
    tags: ["JavaScript", "Chrome Extensions", "Gemini API"],
    link: "https://github.com/Dekamayaro/PHIL",
    wide: true,
    cover: "blue",
  },
  {
    title: "wasm-bpf contributions",
    description:
      "Open-source work on a WebAssembly eBPF runtime — closed a sandbox-escape vector in the Rust and C++ runtimes and redesigned the C++ runtime's WASI preopen flow, with 2 PRs merged upstream after maintainer review.",
    tags: ["Rust", "C++", "eBPF"],
    link: "https://github.com/eunomia-bpf/wasm-bpf",
    cover: "violet",
  },
  {
    title: "Battlestar RPG",
    description:
      "A 3.4k-line C++ RPG engine built with a five-person team — 23 classes, a max-heap combat scheduler for speed-based turns, and 10+ GoogleTest suites keeping it honest.",
    tags: ["C++", "GoogleTest", "CMake"],
    cover: "sunrise",
  },
  {
    title: "TAG club website",
    description:
      "A club website built with ACM at UCR — explore traditional board games like Go and Mahjong, with authentic tea on the side.",
    tags: ["JavaScript", "ACM at UCR"],
    link: "https://github.com/acm-ucr/tag-website",
    cover: "blue",
  },
  {
    title: "This website",
    description:
      "Designed and built from scratch to be fast, minimal, and unmistakably clean. Static-rendered Next.js with a hand-rolled design system inspired by apple.com.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/jgarc826/jgarc826.github.io",
    cover: "mint",
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
    title: "Data Science Summer Fellow",
    org: "University of California, Riverside",
    period: "Jun 2026 — Present",
    description:
      "Building a multi-agent LLM assistant for UCR students on a six-person fellowship team — 14 tools over the live Canvas API, Google Calendar sync, a 132-test offline suite, and the team's CI pipeline built from scratch.",
  },
  {
    title: "Associate Engineer",
    org: "EcoCar EV Laboratory · Center for Research and Technology",
    period: "Mar 2025 — Present",
    description:
      "Model-in-the-loop testing of drive systems on the team's Cadillac LYRIQ challenge vehicle, plus Python automation that orchestrates the lab's overnight testing pipelines.",
  },
  {
    title: "Data Scientist Intern",
    org: "USC · Keck School of Medicine",
    period: "Jun — Aug 2025",
    description:
      "Modeled the link between electric-vehicle adoption and asthma ER visits across a decade of California ZIP-code data — SES-adjusted models showed 3–9% fewer visits. Presented at the USC SIBS symposium.",
  },
  {
    title: "Data Scientist Intern",
    org: "Lawrence Livermore National Laboratory",
    period: "Jul — Aug 2024",
    description:
      "Built preprocessing and training pipelines for 16,000+ ECG samples and benchmarked XGBoost, LightGBM, Random Forest, and CNN models — over 98% accuracy on ECG classification.",
  },
  {
    title: "B.S. Data Science",
    org: "University of California, Riverside",
    period: "Expected Dec 2027",
    description:
      "3.7 GPA — Chancellor's List 2023 and 2024, Dean's List 7×. Coursework in data structures and algorithms, machine learning, AI, computer vision, and database management.",
  },
];
