export function MotionBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Circuitry grid */}
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--gold) 1px, transparent 1px), linear-gradient(to bottom, var(--gold) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 75%)",
        }}
      />
      {/* Fine circuit lines */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--neon-cyan) 1px, transparent 1px), linear-gradient(to bottom, var(--neon-cyan) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 40%, black 20%, transparent 70%)",
        }}
      />
      {/* Glow orbs */}
      <div className="animate-float-slow animate-pulse-glow absolute -left-24 top-10 h-72 w-72 rounded-full bg-gold opacity-30 blur-[110px]" />
      <div className="animate-float-slow-rev animate-pulse-glow absolute right-0 top-40 h-80 w-80 rounded-full bg-neon-magenta opacity-30 blur-[120px]" />
      <div className="animate-float-slow absolute left-1/3 -bottom-10 h-72 w-72 rounded-full bg-neon-cyan opacity-25 blur-[120px]" />
    </div>
  )
}
