export default function Statement() {
  return (
    <section className="bg-black px-5 py-28 text-center md:py-40">
      <div className="mx-auto max-w-[900px]">
        <h2
          data-reveal
          className="text-[clamp(2.5rem,7vw,4.75rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-white"
        >
          Simple. Clean. <span className="text-gradient">Just works.</span>
        </h2>
        <p
          data-reveal
          style={{ transitionDelay: "0.1s" }}
          className="mx-auto mt-6 max-w-[520px] text-lg leading-relaxed text-white/60"
        >
          The bar for everything on this page — and everything after it.
        </p>
      </div>
    </section>
  );
}
