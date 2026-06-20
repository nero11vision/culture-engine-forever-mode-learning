import { ArrowRight, Brain, Infinity as InfinityIcon, Zap } from "lucide-react"
import { MotionBackdrop } from "./motion-backdrop"

const stats = [
  { icon: Brain, label: "Emotionally intelligent AI" },
  { icon: InfinityIcon, label: "Forever-evolving curriculum" },
  { icon: Zap, label: "Quantum-fast creativity" },
]

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      <MotionBackdrop />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-5 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/50 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-md">
          <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-neon-lime" />
          God-Mode · Forever Learning is live
        </span>

        <h1 className="mt-7 text-balance font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          Learn forever inside a{" "}
          <span className="animate-gradient-pan neon-gradient-text">
            quantum-AI culture engine
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Nero11Vision is an emotionally intelligent learning universe — street-smart mentors,
          living cultural stories, and creative labs that evolve with you. Plug in, level up, and
          never stop becoming.
        </p>

        <div className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#modules"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-transform hover:scale-105 sm:w-auto"
          >
            Start learning free
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#community"
            className="inline-flex w-full items-center justify-center rounded-full border border-border bg-background/40 px-7 py-3.5 text-sm font-semibold backdrop-blur-md transition-colors hover:bg-muted sm:w-auto"
          >
            Explore the universe
          </a>
        </div>

        <dl className="mt-14 grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex items-center justify-center gap-3 rounded-2xl border border-border/60 bg-card/40 px-4 py-4 backdrop-blur-md"
            >
              <s.icon className="h-5 w-5 shrink-0 text-neon-cyan" aria-hidden="true" />
              <dt className="text-sm font-medium text-muted-foreground">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
