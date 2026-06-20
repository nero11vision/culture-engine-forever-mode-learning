export function MotionBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--neon-violet) 1px, transparent 1px), linear-gradient(to bottom, var(--neon-violet) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 75%)",
        }}
      />
      {/* Glow orbs */}
      <div className="animate-float-slow animate-pulse-glow absolute -left-24 top-10 h-72 w-72 rounded-full bg-neon-cyan opacity-40 blur-[100px]" />
      <div className="animate-float-slow-rev animate-pulse-glow absolute right-0 top-40 h-80 w-80 rounded-full bg-neon-magenta opacity-40 blur-[110px]" />
      <div className="animate-float-slow absolute left-1/3 -bottom-10 h-72 w-72 rounded-full bg-neon-violet opacity-40 blur-[110px]" />
    </div>
  )
}
