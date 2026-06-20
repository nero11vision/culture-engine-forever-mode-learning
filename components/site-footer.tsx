import { Crown, Instagram, Youtube, Twitter, Github, MessageSquare, ShoppingBag } from "lucide-react"

const socials = [
  { label: "Instagram", icon: Instagram, href: "https://instagram.com/nero11vision" },
  { label: "YouTube", icon: Youtube, href: "https://youtube.com/@nero11vision" },
  { label: "X / Twitter", icon: Twitter, href: "https://x.com/nero11vision" },
  { label: "GitHub", icon: Github, href: "https://github.com/nero11vision" },
  { label: "Discord", icon: MessageSquare, href: "https://discord.gg/nero11vision" },
  { label: "Whop", icon: ShoppingBag, href: "https://whop.com/nero11vision" },
]

const columns = [
  {
    title: "Learn",
    links: ["AI Mentor", "Street Law & Systems", "Creative Labs", "Forever Mode"],
  },
  {
    title: "Movement",
    links: ["The Living Feed", "Discord", "Whop Drops", "Command Center"],
  },
  {
    title: "Vision",
    links: ["Mission", "Street Oath", "BLACKCATALYST100", "Contact"],
  },
]

export function SiteFooter() {
  return (
    <footer className="relative mt-10 border-t border-gold/20">
      <div className="mx-auto max-w-7xl px-5 py-16 md:py-20">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <Crown className="h-5 w-5 text-gold" aria-hidden="true" />
              <span className="font-display text-base font-bold uppercase tracking-widest">
                NERO<span className="gold-gradient-text">11</span>VISION
              </span>
            </div>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-gold/70">
              x BLACKCATALYST100
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A forever-learning culture engine. Emotionally intelligent. Street-smart. Built to
              evolve with you.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background/40 text-muted-foreground transition-colors hover:border-gold/40 hover:bg-muted hover:text-gold"
                >
                  <s.icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-gold"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Nero11Vision · BLACKCATALYST100. Forever Mode engaged.</p>
          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-gold" />
            The culture engine is always learning.
          </p>
        </div>
      </div>
    </footer>
  )
}
