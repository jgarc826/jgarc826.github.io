import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-12 px-5 py-24 md:py-32">
      <div className="mx-auto max-w-[980px]">
        <h2
          data-reveal
          className="text-[clamp(2rem,5vw,3rem)] font-semibold tracking-[-0.015em]"
        >
          Experience.{" "}
          <span className="text-ink-secondary">Where I&apos;ve been.</span>
        </h2>
        <div className="mt-8 border-t border-hairline">
          {experience.map((item, i) => (
            <div
              key={`${item.title}-${item.org}`}
              data-reveal
              style={{ transitionDelay: `${i * 0.08}s` }}
              className="flex flex-col gap-2 border-b border-hairline py-8 md:flex-row md:items-baseline md:justify-between md:gap-8"
            >
              <div className="md:max-w-[620px]">
                <h3 className="text-xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-1 text-[15px] font-medium text-ink-secondary">
                  {item.org}
                </p>
                <p className="mt-2 leading-relaxed text-ink-secondary">
                  {item.description}
                </p>
              </div>
              <p className="shrink-0 text-[15px] text-ink-secondary md:text-right">
                {item.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
