const phrases = [
  "EMOTIONAL INTELLIGENCE",
  "CULTURAL EVOLUTION",
  "CREATIVE LABS",
  "QUANTUM MENTORSHIP",
  "FOREVER MODE",
  "STREET-SMART AI",
]

export function MarqueeBand() {
  const items = [...phrases, ...phrases]
  return (
    <div className="relative overflow-hidden border-y border-border/60 bg-card/30 py-4">
      <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap">
        {items.map((p, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="font-display text-sm font-semibold tracking-[0.2em] text-muted-foreground">
              {p}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-neon-magenta" aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  )
}
