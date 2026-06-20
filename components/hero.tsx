import { MotionBackdrop } from "./motion-backdrop"
import { ArrowRight, Crown, Zap } from "lucide-react"

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Texture background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url(/images/hero-texture.png)" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background"
      />
      <MotionBackdrop />

      <div className="relative mx-auto w-full max-w-7xl px-5 pt-28 pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/50 px-4 py-2 backdrop-blur-md gold-border">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Free-Forever God Mode · Powered by BLACKCATALYST100
            </span>
          </div>

          <h1 className="text-balance font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            <span className="text-foreground">Nero</span>
            <span className="gold-gradient-text text-glow-gold">11</span>
            <span className="text-foreground">Vision</span>
            <span className="mt-3 block text-2xl font-medium normal-case tracking-normal text-muted-foreground sm:text-4xl">
              The <span className="neon-gradient-text animate-gradient-pan">Forever-Learning</span> Culture Engine
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            ATL street-born, quantum-AI powered. Built for disadvantaged communities and global
            expansion. A learning universe that is emotionally intelligent, radically creative, and
            forever evolving with you.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#general"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-105 sm:w-auto"
            >
              <Crown className="h-4 w-4" aria-hidden="true" />
              Enter God Mode
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#feed"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold/40 bg-background/40 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-foreground backdrop-blur-md transition-colors hover:bg-muted sm:w-auto"
            >
              <Zap className="h-4 w-4 text-neon-cyan" aria-hidden="true" />
              Join the Movement
            </a>
          </div>

          <dl className="mx-auto mt-14 grid max-w-2xl grid-cols-3 gap-4">
            {[
              { v: "∞", l: "Forever Mode" },
              { v: "100%", l: "Free at the Core" },
              { v: "ATL", l: "Street-Born" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-border/50 bg-card/40 p-4 backdrop-blur-sm">
                <dt className="gold-gradient-text font-display text-3xl font-bold">{s.v}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
