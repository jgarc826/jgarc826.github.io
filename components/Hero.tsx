import { site } from "@/lib/content";
import Chevron from "./Chevron";

export default function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-[92svh] items-center justify-center px-5 pt-12"
    >
      <div className="max-w-[900px] text-center">
        <p
          data-reveal
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
    </section>
  );
}
