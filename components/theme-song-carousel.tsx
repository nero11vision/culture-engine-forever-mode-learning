"use client"

import { useState } from "react"
import { Play, Pause, SkipForward, SkipBack, Shuffle, Repeat } from "lucide-react"

const tracks = [
  { n: 1, title: "Forever Mode", len: "3:11" },
  { n: 2, title: "Street Sermon", len: "2:48" },
  { n: 3, title: "Crowned Falcon", len: "3:34" },
  { n: 4, title: "ATL Quantum", len: "2:59" },
  { n: 5, title: "God Mode On", len: "3:22" },
  { n: 6, title: "Generational", len: "4:01" },
  { n: 7, title: "Paisley Gold", len: "2:37" },
  { n: 8, title: "Chess Not Checkers", len: "3:18" },
  { n: 9, title: "Respect The Vision", len: "2:55" },
  { n: 10, title: "Money Stacks", len: "3:07" },
  { n: 11, title: "Eleven (∞)", len: "4:11" },
]

export function ThemeSongCarousel() {
  const [active, setActive] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [shuffle, setShuffle] = useState(false)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setActive((i) => (shuffle ? Math.floor(Math.random() * tracks.length) : (i + 1) % tracks.length))
    if (autoplay) setPlaying(true)
  }
  const prev = () => {
    setActive((i) => (i - 1 + tracks.length) % tracks.length)
    if (autoplay) setPlaying(true)
  }

  const current = tracks[active]

  return (
    <section id="sound" className="relative mx-auto max-w-7xl px-5 py-24">
      <div className="max-w-2xl">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-neon-cyan">
          Sound of the Movement
        </p>
        <h2 className="mt-3 text-balance font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl">
          11 theme songs. <span className="gold-gradient-text">One frequency.</span>
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          The official soundtrack of Forever Mode. Shuffle it, run it back, and let the frequency
          move with you. Audio streams drop in a future release.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        {/* Now playing */}
        <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-card/50 p-7 backdrop-blur-md gold-border">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url(/images/paisley-gold.png)" }}
          />
          <div className="relative">
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-gold/30 px-3 py-1 text-xs uppercase tracking-wider text-gold">
                Track {current.n} / 11
              </span>
              <span className="text-xs tabular-nums text-muted-foreground">{current.len}</span>
            </div>

            <div className="mt-8 flex items-end gap-1" aria-hidden="true">
              {Array.from({ length: 40 }).map((_, i) => (
                <span
                  key={i}
                  className={`w-1.5 flex-1 rounded-full bg-gradient-to-t from-gold/40 to-gold ${playing ? "animate-pulse-glow" : "opacity-40"}`}
                  style={{ height: `${10 + ((i * 53) % 56)}px`, animationDelay: `${(i % 8) * 90}ms` }}
                />
              ))}
            </div>

            <h3 className="mt-8 font-display text-3xl font-bold uppercase tracking-tight text-foreground">
              {current.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">Nero11Vision · BLACKCATALYST100</p>

            {/* Controls */}
            <div className="mt-7 flex items-center gap-3">
              <button
                type="button"
                onClick={() => setShuffle((v) => !v)}
                aria-pressed={shuffle}
                aria-label="Toggle shuffle"
                className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
                  shuffle ? "border-gold/60 bg-gold/15 text-gold" : "border-border/60 text-muted-foreground hover:text-foreground"
                }`}
              >
                <Shuffle className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={prev}
                aria-label="Previous track"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 text-foreground transition-colors hover:bg-muted"
              >
                <SkipBack className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setPlaying((v) => !v)}
                aria-label={playing ? "Pause" : "Play"}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-primary-foreground transition-transform hover:scale-105"
              >
                {playing ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 translate-x-0.5" />}
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next track"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 text-foreground transition-colors hover:bg-muted"
              >
                <SkipForward className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setAutoplay((v) => !v)}
                aria-pressed={autoplay}
                aria-label="Toggle autoplay"
                className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
                  autoplay ? "border-neon-cyan/60 bg-neon-cyan/15 text-neon-cyan" : "border-border/60 text-muted-foreground hover:text-foreground"
                }`}
              >
                <Repeat className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Track list */}
        <div className="rounded-3xl border border-border/60 bg-card/40 p-3 backdrop-blur-md">
          <ul className="flex flex-col">
            {tracks.map((t, i) => {
              const isActive = i === active
              return (
                <li key={t.n}>
                  <button
                    type="button"
                    onClick={() => {
                      setActive(i)
                      if (autoplay) setPlaying(true)
                    }}
                    className={`flex w-full items-center gap-4 rounded-2xl px-4 py-3 text-left transition-colors ${
                      isActive ? "bg-gold/10" : "hover:bg-muted"
                    }`}
                  >
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-display text-xs font-bold tabular-nums ${
                        isActive ? "bg-gold text-primary-foreground" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {t.n}
                    </span>
                    <span className={`min-w-0 flex-1 truncate text-sm font-semibold ${isActive ? "text-gold" : "text-foreground"}`}>
                      {t.title}
                    </span>
                    {isActive && playing && (
                      <span className="flex items-end gap-0.5" aria-hidden="true">
                        {[0, 1, 2].map((b) => (
                          <span
                            key={b}
                            className="w-0.5 animate-pulse-glow rounded-full bg-gold"
                            style={{ height: `${8 + b * 4}px`, animationDelay: `${b * 150}ms` }}
                          />
                        ))}
                      </span>
                    )}
                    <span className="shrink-0 text-xs tabular-nums text-muted-foreground">{t.len}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
