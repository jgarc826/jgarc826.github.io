import { site } from "@/lib/content";
import Chevron from "./Chevron";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92svh] items-center justify-center px-5 pt-12"
    >
      <div className="max-w-[900px] text-center">
        {site.availability && (
          <p
            data-reveal
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-hairline px-4 py-1.5 text-[13px] font-medium text-ink-secondary"
          >
            <span className="h-2 w-2 rounded-full bg-[#30d158]" />
            {site.availability}
          </p>
        )}
        <p
          data-reveal
          style={{ transitionDelay: "0.05s" }}
          className="text-lg font-medium text-ink-secondary md:text-xl"
        >
          Hi, I&apos;m
        </p>
        <h1
          data-reveal
          style={{ transitionDelay: "0.1s" }}
          className="mt-2 text-[clamp(3.25rem,11vw,7rem)] font-semibold leading-[1.03] tracking-[-0.02em]"
        >
          {site.name}.
        </h1>
        <p
          data-reveal
          style={{ transitionDelay: "0.2s" }}
          className="mx-auto mt-6 max-w-[620px] text-[clamp(1.125rem,2.5vw,1.5rem)] leading-relaxed text-ink-secondary"
        >
          {site.role}. {site.tagline}
        </p>
        <div
          data-reveal
          style={{ transitionDelay: "0.3s" }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-accent px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-accent-hover"
          >
            See my work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1 px-2 py-3 text-[15px] font-medium text-accent hover:underline"
          >
            Get in touch <Chevron />
          </a>
        </div>
      </div>
      <a
        href="#about"
        aria-label="Scroll down to the about section"
        className="scroll-cue absolute bottom-8 left-1/2 text-ink-secondary/60 transition-colors hover:text-ink"
      >
        <svg
          width="14"
          height="9"
          viewBox="0 0 14 9"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M1.5 1.5l5.5 5.5 5.5-5.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </section>
  );
}
