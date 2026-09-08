import { about } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="scroll-mt-12 px-5 pb-24 md:pb-32">
      <div className="mx-auto max-w-[980px]">
        <h2
          data-reveal
          className="text-[clamp(2rem,5vw,3rem)] font-semibold tracking-[-0.015em]"
        >
          About. <span className="text-ink-secondary">A little context.</span>
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-4">
          <div data-reveal className="md:col-span-2 md:row-span-2">
            <div className="flex h-full flex-col rounded-[20px] bg-surface p-8">
              <p className="text-[13px] font-medium text-ink-secondary">
                About me
              </p>
              <p className="mt-4 text-[19px] leading-relaxed md:text-[21px]">
                {about.bio}
              </p>
            </div>
          </div>
          {about.facts.map((fact, i) => (
            <div
              key={fact.label}
              data-reveal
              style={{ transitionDelay: `${(i + 1) * 0.06}s` }}
              className={fact.size === "wide" ? "md:col-span-2" : ""}
            >
              <div
                className={`h-full rounded-[20px] p-6 transition-transform duration-300 hover:-translate-y-0.5 ${
                  fact.gradient ? "bento-gradient" : "bg-surface"
                }`}
              >
                <p
                  className={`text-[13px] font-medium ${
                    fact.gradient ? "text-white/80" : "text-ink-secondary"
                  }`}
                >
                  {fact.label}
                </p>
                <p
                  className={`mt-2 text-xl font-semibold tracking-tight ${
                    fact.gradient ? "text-white" : ""
                  }`}
                >
                  {fact.value}
                </p>
                {fact.sub && (
                  <p
                    className={`mt-1 text-[15px] ${
                      fact.gradient ? "text-white/80" : "text-ink-secondary"
                    }`}
                  >
                    {fact.sub}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
