export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-base"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(245,158,11,0.12),transparent_55%)]"
        aria-hidden="true"
      />
      <div className="section-container relative z-10 grid w-full grid-cols-1 items-center gap-12 px-6 pb-16 pt-28 sm:px-8 sm:pt-32 lg:grid-cols-12">
        <div className="flex flex-col lg:col-span-7">
          <p className="mb-4 font-mono text-[13px] uppercase tracking-[0.28em] text-accent">
            Hi, I'm
          </p>
          <h1 className="font-display text-display font-bold tracking-tight text-stone-50">
            Supriyo Barua
          </h1>
          <p className="mt-6 text-lg font-medium leading-snug text-muted sm:text-xl">
            Full Stack Developer
          </p>
          <p className="mt-8 max-w-[34rem] text-lg leading-relaxed text-stone-300 sm:text-xl">
            Learning, building, growing — through web development, self-hosting,
            and automation.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-[15px] font-medium text-stone-950 transition-colors hover:bg-accent-bright"
            >
              See my work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-stone-600 px-6 py-3 text-[15px] font-medium text-stone-200 transition-colors hover:border-accent/60 hover:text-accent-bright"
            >
              Let's talk
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4 border-t border-line pt-8">
            <span className="mono-label">Reach me</span>
            <a
              href="mailto:supriyobaruab@gmail.com"
              className="text-sm font-medium text-stone-300 underline decoration-stone-600 underline-offset-4 transition-colors hover:text-accent-bright hover:decoration-accent-bright"
            >
              supriyobaruab@gmail.com
            </a>
          </div>
        </div>

        <div className="hidden justify-center lg:col-span-5 lg:flex">
          <div className="surface-card overflow-hidden rounded-xl">
            <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
              <span className="terminal-dot bg-stone-600" />
              <span className="terminal-dot bg-stone-700" />
              <span className="terminal-dot bg-accent/80" />
              <span className="mono-label ml-3">profile.jpg</span>
            </div>
            <img
              src="/images/profile.png"
              alt="Supriyo Barua"
              className="aspect-auto w-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
