import { site } from "@/lib/content";
import Chevron from "./Chevron";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-12 bg-surface px-5 pb-20 pt-24 md:pt-32">
      <div className="mx-auto max-w-[700px] text-center">
        <h2
          data-reveal
          className="text-[clamp(2rem,5vw,3rem)] font-semibold tracking-[-0.015em]"
        >
          Let&apos;s <span className="text-gradient">get in touch</span>.
        </h2>
        <p
          data-reveal
          style={{ transitionDelay: "0.08s" }}
          className="mt-4 text-lg leading-relaxed text-ink-secondary"
        >
          Whether it&apos;s a project, a hackathon team, or just to say hi — my
          inbox is open.
        </p>
        <div
          data-reveal
          style={{ transitionDelay: "0.16s" }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={`mailto:${site.email}`}
            className="rounded-full bg-accent px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Email me
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-2 py-3 text-[15px] font-medium text-accent hover:underline"
          >
            GitHub <Chevron />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-2 py-3 text-[15px] font-medium text-accent hover:underline"
          >
            LinkedIn <Chevron />
          </a>
        </div>
      </div>
    </section>
  );
}
