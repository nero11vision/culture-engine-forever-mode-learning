const phrases = [
  "RESPECT THE VISION",
  "ELEVATE YOUR MINDSET",
  "GET TO THE MONEY",
  "STREET-SMART LEADERSHIP",
  "QUANTUM-AI MENTORSHIP",
  "FOREVER MODE",
  "BLACKCATALYST100",
  "BUILT FOR THE COMMUNITY",
]

export function MarqueeBand() {
  const items = [...phrases, ...phrases]
  return (
    <div className="relative overflow-hidden border-y border-gold/20 bg-card/30 py-4">
      <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap">
        {items.map((p, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-gold/80">
              {p}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-neon-magenta" aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  )
}
