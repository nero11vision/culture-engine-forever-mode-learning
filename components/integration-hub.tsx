import { MessageSquare, FileText, ShoppingBag, LayoutGrid, ArrowUpRight } from "lucide-react"

const integrations = [
  {
    name: "Discord",
    handle: "Nero11Vision Server",
    desc: "Community, live logs, and real-time mentoring with the General.",
    icon: MessageSquare,
    accent: "text-neon-cyan",
  },
  {
    name: "Notion",
    handle: "Command Center",
    desc: "Ops, blueprints, and brain files — the operating system of the movement.",
    icon: FileText,
    accent: "text-foreground",
  },
  {
    name: "Whop",
    handle: "Paid Tiers & Drops",
    desc: "Subscriptions, programs, and exclusive drops for serious students.",
    icon: ShoppingBag,
    accent: "text-gold",
  },
]

const apps = [
  "Feed", "Reels", "Stories", "Live", "DMs", "Spaces", "Clips", "Drops",
  "Rooms", "Threads", "Shorts", "Studio", "Wallet", "Market", "Events", "Vault",
  "Pods", "Quests", "Squads", "Boards", "Stream", "Lab", "Vision", "Mentor", "Engine",
]

export function IntegrationHub() {
  return (
    <section id="hub" className="relative mx-auto max-w-7xl px-5 py-24">
      <div className="max-w-2xl">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-gold">
          Integration Hub
        </p>
        <h2 className="mt-3 text-balance font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl">
          One super-infrastructure. <span className="gold-gradient-text">All connected.</span>
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          The whole ecosystem plugs into one engine — community, ops, and commerce moving as one.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {integrations.map((it) => (
          <a
            key={it.name}
            href="#"
            className="group flex flex-col rounded-3xl border border-border/60 bg-card/40 p-7 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-gold/40"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted">
                <it.icon className={`h-6 w-6 ${it.accent}`} aria-hidden="true" />
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </div>
            <h3 className="mt-6 font-display text-2xl font-bold uppercase tracking-tight">{it.name}</h3>
            <p className="text-xs uppercase tracking-wider text-gold">{it.handle}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
          </a>
        ))}
      </div>

      {/* Future app super-infra */}
      <div className="mt-6 overflow-hidden rounded-3xl border border-border/60 bg-card/40 p-7 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted">
            <LayoutGrid className="h-6 w-6 text-neon-magenta" aria-hidden="true" />
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold uppercase tracking-tight">Future App Hub</h3>
            <p className="text-xs uppercase tracking-wider text-gold">Top 25 social apps, fused into one</p>
          </div>
        </div>
        <div className="mt-7 grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-[repeat(13,minmax(0,1fr))]">
          {apps.map((a) => (
            <div
              key={a}
              className="flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border border-border/50 bg-background/40 p-2 text-center transition-colors hover:border-gold/40"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-gold/30 to-neon-magenta/20 font-display text-xs font-bold text-gold">
                {a[0]}
              </span>
              <span className="truncate text-[10px] uppercase tracking-wide text-muted-foreground">{a}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
