import { about, intro } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="scroll-mt-12 px-5 pb-24 md:pb-32">
      <div className="mx-auto max-w-[980px]">
        <p
          data-reveal
          className="text-[clamp(1.375rem,3vw,2rem)] font-medium leading-snug tracking-[-0.01em]"
        >
          {intro.greeting}
        </p>
        <p
          data-reveal
          style={{ transitionDelay: "0.1s" }}
          className="mt-6 text-[clamp(1.125rem,2.2vw,1.5rem)] leading-relaxed text-ink-secondary"
        >
          {intro.interests}
        </p>
        <div className="mt-14 grid gap-5 md:grid-cols-4">
          {about.facts.map((fact, i) => (
            <div
              key={fact.label}
              data-reveal
              style={{ transitionDelay: `${i * 0.06}s` }}
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
