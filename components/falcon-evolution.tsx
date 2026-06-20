"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function FalconEvolution() {
  const ref = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const onScroll = () => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      // 0 when section top hits bottom of viewport, 1 when section bottom passes top
      const total = rect.height + vh
      const seen = vh - rect.top
      const p = Math.min(1, Math.max(0, seen / total))
      setProgress(reduce ? 1 : p)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  // Map progress to a focused morph window (0.2 - 0.8)
  const morph = Math.min(1, Math.max(0, (progress - 0.2) / 0.6))

  return (
    <section id="evolution" ref={ref} className="relative overflow-hidden py-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-gold/30 bg-card/40 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold">
            The Evolution Moment
          </span>
          <h2 className="mt-5 text-balance font-display text-4xl font-bold uppercase leading-tight tracking-tight sm:text-5xl">
            When you level up, the general becomes the{" "}
            <span className="neon-gradient-text">falcon</span>
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Vision, precision, and dominance. Scroll to witness the transformation — the same crown,
            the same circuitry, evolved into its highest form.
          </p>
        </div>

        <div className="relative mx-auto aspect-square max-w-xl">
          <div
            className="absolute -inset-6 rounded-full blur-3xl transition-opacity"
            style={{
              background:
                "radial-gradient(circle, color-mix(in oklch, var(--gold) 40%, transparent), transparent 70%)",
              opacity: 0.3 + morph * 0.4,
            }}
            aria-hidden="true"
          />
          {/* General */}
          <div
            className="absolute inset-0 overflow-hidden rounded-[2.5rem] border border-gold/30"
            style={{
              opacity: 1 - morph,
              transform: `scale(${1 - morph * 0.06})`,
              filter: `saturate(${1 - morph * 0.3})`,
            }}
          >
            <Image
              src="/images/bearded-general.png"
              alt="The bearded general before evolution"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 36rem"
            />
          </div>
          {/* Falcon */}
          <div
            className="absolute inset-0 overflow-hidden rounded-[2.5rem] border border-neon-cyan/40"
            style={{
              opacity: morph,
              transform: `scale(${0.94 + morph * 0.06})`,
            }}
          >
            <Image
              src="/images/crowned-falcon.png"
              alt="The crowned falcon, evolved form of the general"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 36rem"
            />
          </div>

          {/* Progress label */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-border/60 bg-background/80 px-5 py-2 backdrop-blur-md gold-border">
            <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-foreground">
              {morph < 0.5 ? "The General" : "The Crowned Falcon"}
            </span>
          </div>
        </div>

        {/* Morph track */}
        <div className="mx-auto mt-12 h-1.5 max-w-md overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-gradient-to-r from-gold via-neon-magenta to-neon-cyan transition-[width]"
            style={{ width: `${morph * 100}%` }}
          />
        </div>
      </div>
    </section>
  )
}
