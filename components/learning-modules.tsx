"use client"

import { useState } from "react"
import { Bot, Scale, FlaskConical, ArrowUpRight } from "lucide-react"

const modules = [
  {
    id: "mentor",
    icon: Bot,
    title: "AI Mentor",
    tag: "Quantum",
    desc: "An emotionally intelligent guide for life, business, and culture. It reads your energy, meets you where you are, and pushes you exactly as far as you can go.",
    points: ["Real-time feedback loops", "Mood-aware pacing", "24/7 quantum mentorship"],
    accent: "cyan" as const,
  },
  {
    id: "law",
    icon: Scale,
    title: "Street Law & Systems",
    tag: "Power",
    desc: "Understand oppression, law, and the power structures around you. Decode the system so you can move through it, around it, and beyond it.",
    points: ["Know your rights", "Map the power structures", "Build leverage, not fear"],
    accent: "gold" as const,
  },
  {
    id: "labs",
    icon: FlaskConical,
    title: "Creative Labs (v3)",
    tag: "Ship It",
    desc: "Music, visuals, language, identity. Students ship, not just consume. Build artifacts you can drop to the feed and the world.",
    points: ["Generative studios", "Remix & collab", "Ship to the feed"],
    accent: "magenta" as const,
  },
]

const accentText = {
  cyan: "text-neon-cyan",
  gold: "text-gold",
  magenta: "text-neon-magenta",
}
const accentDot = {
  cyan: "bg-neon-cyan",
  gold: "bg-gold",
  magenta: "bg-neon-magenta",
}

export function LearningModules() {
  const [active, setActive] = useState("mentor")

  return (
    <section id="learn" className="relative mx-auto max-w-7xl px-5 py-24">
      <div className="max-w-2xl">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-gold">
          Interactive Learning System
        </p>
        <h2 className="mt-3 text-balance font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl">
          Three engines. One <span className="gold-gradient-text">infinite</span> classroom.
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          Tap a module to dive in. Everything you touch adapts, evolves, and remembers you.
        </p>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {modules.map((m) => {
          const isActive = active === m.id
          return (
            <button
              key={m.id}
              type="button"
              onClick={() => setActive(m.id)}
              aria-pressed={isActive}
              className={`group flex flex-col rounded-3xl border bg-card/40 p-7 text-left backdrop-blur-md transition-all duration-300 hover:-translate-y-1 ${
                isActive ? "border-transparent gold-border" : "border-border/60"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted">
                  <m.icon className={`h-6 w-6 ${accentText[m.accent]}`} aria-hidden="true" />
                </div>
                <span className="rounded-full border border-border/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {m.tag}
                </span>
              </div>

              <h3 className="mt-6 flex items-center gap-1 font-display text-2xl font-bold uppercase tracking-tight">
                {m.title}
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>

              <ul className="mt-5 space-y-2.5 border-t border-border/60 pt-5">
                {m.points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-sm">
                    <span className={`h-1.5 w-1.5 rounded-full ${accentDot[m.accent]}`} />
                    <span className="text-foreground/90">{p}</span>
                  </li>
                ))}
              </ul>
            </button>
          )
        })}
      </div>
    </section>
  )
}
