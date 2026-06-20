"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, Pause, Check, Crown } from "lucide-react"

const tiers = [
  {
    name: "Free Forever",
    price: "$0",
    tagline: "God Mode at the core",
    perks: ["Full AI mentor access", "Street law fundamentals", "Community feed + Discord"],
    featured: false,
  },
  {
    name: "Disciple",
    price: "$22",
    tagline: "Level up with the General",
    perks: ["Everything in Free", "Weekly mentorship drops", "Creative Labs v3 toolkit", "Whop programs"],
    featured: true,
  },
  {
    name: "General's Circle",
    price: "$111",
    tagline: "Inner-circle leadership",
    perks: ["1:1 swagger coaching", "Generational wealth blueprints", "Early app super-infra access"],
    featured: false,
  },
]

export function CharacterHub() {
  const [playing, setPlaying] = useState(false)

  return (
    <section id="general" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Copy / tiers */}
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-card/40 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold">
              <Crown className="h-3.5 w-3.5" aria-hidden="true" /> The Bearded General · #BC100
            </span>
            <h2 className="mt-5 text-balance font-display text-4xl font-bold uppercase leading-tight tracking-tight sm:text-5xl">
              He speaks. He teaches. <span className="gold-gradient-text">He guides.</span>
            </h2>
            <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              BLACKCATALYST100 is the heartbeat of the engine — street-smart leadership delivered
              with swagger and emotional intelligence. Sit with the General, run your mind back, and
              build the discipline to get to the money the right way.
            </p>

            {/* Audio placeholder */}
            <div className="mt-7 flex items-center gap-4 rounded-2xl border border-border/60 bg-card/50 p-4 backdrop-blur-md gold-border">
              <button
                type="button"
                onClick={() => setPlaying((v) => !v)}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold text-primary-foreground transition-transform hover:scale-105"
                aria-label={playing ? "Pause the General" : "Play the General"}
              >
                {playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 translate-x-0.5" />}
              </button>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-foreground">
                  {playing ? "Now playing — Street Sermon No. 1" : "Tap in: a word from the General"}
                </p>
                <div className="mt-2 flex items-end gap-1" aria-hidden="true">
                  {Array.from({ length: 28 }).map((_, i) => (
                    <span
                      key={i}
                      className={`w-1 rounded-full bg-gold/70 ${playing ? "animate-pulse-glow" : ""}`}
                      style={{
                        height: `${8 + ((i * 37) % 24)}px`,
                        animationDelay: `${(i % 6) * 120}ms`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Audio preview placeholder — realistic talking-head lipsync and live voice delivery
              coming in a future drop.
            </p>

            {/* Tiers */}
            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              {tiers.map((t) => (
                <div
                  key={t.name}
                  className={`relative rounded-2xl border p-5 backdrop-blur-md transition-transform hover:-translate-y-1 ${
                    t.featured
                      ? "border-gold/60 bg-card/70 gold-border"
                      : "border-border/60 bg-card/40"
                  }`}
                >
                  {t.featured && (
                    <span className="absolute -top-2.5 left-5 rounded-full bg-gold px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                      Most Picked
                    </span>
                  )}
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{t.name}</p>
                  <p className="mt-1 font-display text-3xl font-bold text-foreground">
                    {t.price}
                    <span className="text-sm font-normal text-muted-foreground">/mo</span>
                  </p>
                  <p className="mt-1 text-xs text-gold">{t.tagline}</p>
                  <ul className="mt-3 flex flex-col gap-2">
                    {t.perks.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-neon-cyan" aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Portrait */}
          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-gold/20 via-neon-magenta/10 to-neon-cyan/20 blur-2xl" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[2rem] border border-gold/30 gold-border">
                <Image
                  src="/images/bearded-general.png"
                  alt="BLACKCATALYST100, the bearded general, in golden falcon armor"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background to-transparent p-5">
                  <p className="font-display text-lg font-bold uppercase tracking-wide text-foreground">
                    BLACKCATALYST100
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em] text-gold">Street-smart leadership</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
