import { site } from "@/lib/content";
import Chevron from "./Chevron";

function GitHubIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function ResumeIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg width="26" height="20" viewBox="0 0 127.14 96.36" fill="currentColor" aria-hidden="true">
      <path d="M107.7 8.07A105.15 105.15 0 0 0 81.47 0a72.06 72.06 0 0 0-3.36 6.83 97.68 97.68 0 0 0-29.11 0A72.37 72.37 0 0 0 45.64 0a105.89 105.89 0 0 0-26.25 8.09C2.79 32.65-1.71 56.6.54 80.21a105.73 105.73 0 0 0 32.17 16.15 77.7 77.7 0 0 0 6.89-11.11 68.42 68.42 0 0 1-10.85-5.18c.91-.66 1.8-1.34 2.66-2a75.57 75.57 0 0 0 64.32 0c.87.71 1.76 1.39 2.66 2a68.68 68.68 0 0 1-10.87 5.19 77 77 0 0 0 6.89 11.1 105.25 105.25 0 0 0 32.19-16.14c2.64-27.38-4.51-51.11-18.9-72.15ZM42.45 65.69C36.18 65.69 31 60 31 53s5-12.74 11.43-12.74S54 46 53.89 53s-5.05 12.69-11.44 12.69Zm42.24 0C78.41 65.69 73.25 60 73.25 53s5-12.74 11.44-12.74S96.23 46 96.12 53s-5.04 12.69-11.43 12.69Z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92svh] items-center justify-center px-5 pt-12"
    >
      <div className="max-w-[900px] text-center">
        <img
          data-reveal
          src="/portrait-square.jpg"
          alt="Portrait of Jessy Garcia"
          className="mx-auto h-40 w-40 rounded-full object-cover shadow-[0_8px_30px_rgba(0,0,0,0.12)] ring-1 ring-black/10 md:h-48 md:w-48"
        />
        <h1
          data-reveal
          style={{ transitionDelay: "0.1s" }}
          className="mt-8 text-[clamp(3rem,10vw,6.5rem)] font-semibold leading-[1.03] tracking-[-0.02em]"
        >
          {site.name}.
        </h1>
        {site.availability && (
          <p
            data-reveal
            style={{ transitionDelay: "0.2s" }}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-hairline px-4 py-1.5 text-[13px] font-medium text-ink-secondary"
          >
            <span className="h-2 w-2 rounded-full bg-[#30d158]" />
            {site.availability}
          </p>
        )}
        <div
          data-reveal
          style={{ transitionDelay: "0.3s" }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
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
        <div
          data-reveal
          style={{ transitionDelay: "0.4s" }}
          className="mt-8 flex items-center justify-center gap-6"
        >
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Jessy's GitHub profile"
            className="text-ink-secondary transition-colors hover:text-ink"
          >
            <GitHubIcon />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Jessy's LinkedIn profile"
            className="text-ink-secondary transition-colors hover:text-[#0A66C2]"
          >
            <LinkedInIcon />
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label="Email Jessy"
            title="Email me"
            className="text-ink-secondary transition-colors hover:text-ink"
          >
            <MailIcon />
          </a>
          <a
            href={site.discord}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Jessy on Discord"
            className="text-ink-secondary transition-colors hover:text-[#5865F2]"
          >
            <DiscordIcon />
          </a>
          {site.resume && (
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Jessy's resume (PDF)"
              title="Resume"
              className="text-ink-secondary transition-colors hover:text-ink"
            >
              <ResumeIcon />
            </a>
          )}
        </div>
      </div>
      <a
        href="#about"
        aria-label="Scroll down to the about section"
        className="scroll-cue absolute bottom-8 left-1/2 text-ink-secondary/60 transition-colors hover:text-ink"
      >
        <svg width="14" height="9" viewBox="0 0 14 9" fill="none" aria-hidden="true">
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
