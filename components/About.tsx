import { intro } from "@/lib/content";

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
      </div>
    </section>
  );
}
