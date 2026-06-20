const eras = [
  {
    year: "01",
    title: "The Spark",
    desc: "It starts with a vision and a refusal to quit. The engine meets you exactly where you are — no judgment, all elevation.",
  },
  {
    year: "02",
    title: "Street Survival",
    desc: "Learn the systems, know your rights, and build leverage. Turn raw instinct into street-smart strategy.",
  },
  {
    year: "03",
    title: "Leadership",
    desc: "Step into the General's mindset. Lead your block, your family, your team — with emotional intelligence and swagger.",
  },
  {
    year: "04",
    title: "Generational Wealth",
    desc: "Build assets, ownership, and systems that outlive you. Get to the money the right way and bring the community with you.",
  },
  {
    year: "∞",
    title: "Forever Mode",
    desc: "The engine never stops learning — and neither do you. Quantum mentorship at planetary scale, forever evolving.",
  },
]

export function CultureTimeline() {
  return (
    <section id="forever" className="relative mx-auto max-w-7xl px-5 py-24">
      <div className="max-w-2xl">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-gold">
          Forever Mode · ∞
        </p>
        <h2 className="mt-3 text-balance font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl">
          From the spark to <span className="gold-gradient-text">forever mode</span>
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          The engine never stops learning — and neither do you. This is the journey every member
          walks, from survival to generational wealth and beyond.
        </p>
      </div>

      <ol className="relative mt-14 space-y-10 border-l border-gold/30 pl-8 md:pl-10">
        {eras.map((e, i) => (
          <li key={e.title} className="relative">
            <span
              className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center md:-left-[49px]"
              aria-hidden="true"
            >
              <span className="absolute h-5 w-5 animate-pulse-glow rounded-full bg-gold/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-gold to-neon-magenta" />
            </span>
            <div className="rounded-3xl border border-border/60 bg-card/40 p-6 backdrop-blur-md transition-transform hover:-translate-y-1 md:p-7">
              <span className="font-display text-sm font-bold uppercase tracking-widest text-gold">
                {e.year}
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold uppercase tracking-tight">{e.title}</h3>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                {e.desc}
              </p>
            </div>
            {i === eras.length - 1 && <span className="sr-only">End of current timeline</span>}
          </li>
        ))}
      </ol>
    </section>
  )
}
