import { Target, Flame } from "lucide-react"

export function MissionOath() {
  return (
    <section id="mission" className="relative mx-auto max-w-7xl px-5 py-24">
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        {/* Mission */}
        <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-card/50 p-8 backdrop-blur-md gold-border sm:p-12">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center opacity-[0.07]"
            style={{ backgroundImage: "url(/images/paisley-gold.png)" }}
          />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold">
              <Target className="h-3.5 w-3.5" aria-hidden="true" /> The Mission
            </span>
            <p className="mt-6 text-balance font-display text-2xl font-medium leading-snug text-foreground sm:text-3xl">
              To build a quantum-AI cultural learning universe that is{" "}
              <span className="gold-gradient-text">emotionally intelligent</span>, radically
              creative, and forever evolving — so anyone, anywhere can keep becoming their{" "}
              <span className="gold-gradient-text">highest self.</span>
            </p>
          </div>
        </div>

        {/* Street Oath */}
        <div className="relative flex flex-col justify-center overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-card/60 to-background p-8 backdrop-blur-md sm:p-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-neon-magenta/30 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-neon-magenta">
            <Flame className="h-3.5 w-3.5" aria-hidden="true" /> The Street Oath
          </span>
          <ul className="mt-7 flex flex-col gap-5">
            {["Respect the vision", "Elevate your mindset", "Get to the money"].map((line, i) => (
              <li key={line} className="flex items-baseline gap-4">
                <span className="font-display text-2xl font-bold tabular-nums text-gold/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl">
                  {line}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
