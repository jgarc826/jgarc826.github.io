import { projects } from "@/lib/content";
import Chevron from "./Chevron";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-12 bg-surface px-5 py-24 md:py-32">
      <div className="mx-auto max-w-[980px]">
        <h2
          data-reveal
          className="text-[clamp(2rem,5vw,3rem)] font-semibold tracking-[-0.015em]"
        >
          Projects. <span className="text-ink-secondary">Things I&apos;ve built.</span>
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <div
              key={project.title}
              data-reveal
              style={{ transitionDelay: `${i * 0.08}s` }}
              className={project.wide ? "md:col-span-2" : ""}
            >
              <article className="flex h-full flex-col rounded-[20px] bg-white p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-ink-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-2 max-w-[560px] leading-relaxed text-ink-secondary">
                  {project.description}
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    className="mt-5 inline-flex items-center gap-1 text-[15px] font-medium text-accent hover:underline"
                  >
                    Learn more <Chevron />
                  </a>
                )}
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
