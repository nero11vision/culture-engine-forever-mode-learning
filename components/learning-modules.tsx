"use client"

import { useState } from "react"
import { Bot, BookOpenText, FlaskConical, ArrowUpRight } from "lucide-react"

const modules = [
  {
    id: "mentor",
    icon: Bot,
    title: "AI Mentor",
    tag: "Adaptive",
    desc: "An emotionally intelligent guide that reads your energy, meets you where you are, and pushes you exactly as far as you can go.",
    points: ["Real-time feedback loops", "Mood-aware pacing", "24/7 quantum mentorship"],
    accent: "cyan" as const,
  },
  {
    id: "stories",
    icon: BookOpenText,
    title: "Cultural Stories",
    tag: "Living",
    desc: "Interactive narratives drawn from global street culture, art, and movements — stories that rewrite themselves as the culture moves.",
    points: ["Branching narratives", "Voices from the streets", "Updated in real time"],
    accent: "magenta" as const,
  },
  {
    id: "labs",
    icon: FlaskConical,
    title: "Creative Labs",
    tag: "Hands-on",
    desc: "Build, remix, and ship. Generative studios for music, visuals, and words where your ideas become artifacts you can share.",
    points: ["Generative studios", "Remix & collab", "Ship to the feed"],
    accent: "violet" as const,
  },
]

const accentMap = {
  cyan: "text-neon-cyan",
  magenta: "text-neon-magenta",
  violet: "text-neon-violet",
}

export function LearningModules() {
  const [active, setActive] = useState("mentor")

  return (
    <section id="modules" className="relative mx-auto max-w-7xl px-5 py-20 md:py-28">
      <div className="max-w-2xl">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-neon-cyan">
          Interactive Modules
        </p>
        <h2 className="mt-3 text-balance font-display text-4xl font-bold tracking-tight md:text-5xl">
          Three engines. One{" "}
          <span className="neon-gradient-text">infinite</span> classroom.
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
                isActive ? "border-transparent neon-border" : "border-border/60"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted">
                  <m.icon className={`h-6 w-6 ${accentMap[m.accent]}`} aria-hidden="true" />
                </div>
                <span className="rounded-full border border-border/60 px-3 py-1 text-xs font-medium text-muted-foreground">
                  {m.tag}
                </span>
              </div>

              <h3 className="mt-6 flex items-center gap-1 font-display text-2xl font-bold tracking-tight">
                {m.title}
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>

              <ul className="mt-5 space-y-2.5 border-t border-border/60 pt-5">
                {m.points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-sm">
                    <span className={`h-1.5 w-1.5 rounded-full ${
                      m.accent === "cyan" ? "bg-neon-cyan" : m.accent === "magenta" ? "bg-neon-magenta" : "bg-neon-violet"
                    }`} />
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
