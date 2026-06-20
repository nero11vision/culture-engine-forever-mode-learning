const eras = [
  {
    year: "0 → 1",
    title: "The Spark",
    desc: "Nero11Vision is born — a single AI mentor that learns the rhythm of one student and refuses to forget.",
  },
  {
    year: "v2",
    title: "Cultural Memory",
    desc: "Stories from the streets are encoded into the engine. The curriculum starts to breathe and adapt to the culture in real time.",
  },
  {
    year: "v3",
    title: "Creative Labs",
    desc: "Generative studios open. Students stop consuming and start shipping — music, visuals, language, identity.",
  },
  {
    year: "v4",
    title: "The Living Feed",
    desc: "Every artifact connects. A self-evolving community feed turns individual learning into collective momentum.",
  },
  {
    year: "∞",
    title: "Forever Mode",
    desc: "Quantum mentorship at planetary scale. The engine never stops learning — and neither do you.",
  },
]

export function CultureTimeline() {
  return (
    <section id="timeline" className="relative mx-auto max-w-7xl px-5 py-20 md:py-28">
      <div className="max-w-2xl">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-neon-violet">
          Cultural Evolution
        </p>
        <h2 className="mt-3 text-balance font-display text-4xl font-bold tracking-tight md:text-5xl">
          From a single spark to{" "}
          <span className="neon-gradient-text">forever mode</span>
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          The culture engine has been evolving since day one. Here&apos;s the journey so far —
          and it never ends.
        </p>
      </div>

      <ol className="relative mt-14 space-y-10 border-l border-border/60 pl-8 md:pl-10">
        {eras.map((e, i) => (
          <li key={e.title} className="relative">
            <span
              className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center md:-left-[49px]"
              aria-hidden="true"
            >
              <span className="absolute h-5 w-5 animate-pulse-glow rounded-full bg-neon-cyan/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-neon-cyan to-neon-magenta" />
            </span>
            <div className="rounded-3xl border border-border/60 bg-card/40 p-6 backdrop-blur-md transition-transform hover:-translate-y-1 md:p-7">
              <span className="font-display text-sm font-bold tracking-widest text-neon-cyan">
                {e.year}
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold tracking-tight">{e.title}</h3>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                {e.desc}
              </p>
            </div>
            {i === eras.length - 1 && (
              <span className="sr-only">End of current timeline</span>
            )}
          </li>
        ))}
      </ol>
    </section>
  )
}
