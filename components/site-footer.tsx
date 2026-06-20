import { Sparkles, Instagram, Youtube, Twitter, Github, ArrowRight } from "lucide-react"

const socials = [
  { label: "Instagram", icon: Instagram, href: "https://instagram.com/nero11vision" },
  { label: "YouTube", icon: Youtube, href: "https://youtube.com/@nero11vision" },
  { label: "X / Twitter", icon: Twitter, href: "https://x.com/nero11vision" },
  { label: "GitHub", icon: Github, href: "https://github.com/nero11vision" },
]

const columns = [
  {
    title: "Universe",
    links: ["AI Mentor", "Cultural Stories", "Creative Labs", "Living Feed"],
  },
  {
    title: "Community",
    links: ["The Feed", "Creators", "Collabs", "Forever Mode"],
  },
  {
    title: "Company",
    links: ["Mission", "Manifesto", "Careers", "Contact"],
  },
]

export function SiteFooter() {
  return (
    <footer id="mission" className="relative mt-10 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-5 py-16 md:py-20">
        {/* Mission CTA */}
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/40 p-8 backdrop-blur-md neon-border md:p-12">
          <div className="absolute -right-16 -top-16 h-56 w-56 animate-pulse-glow rounded-full bg-neon-magenta opacity-20 blur-[90px]" />
          <div className="relative max-w-3xl">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-neon-cyan">
              <Sparkles className="h-4 w-4" aria-hidden="true" /> Our Mission
            </span>
            <p className="mt-5 text-balance font-display text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
              To build a quantum-AI cultural learning universe that is emotionally intelligent,
              radically creative, and{" "}
              <span className="neon-gradient-text">forever evolving</span> — so anyone, anywhere
              can keep becoming their highest self.
            </p>
            <a
              href="#top"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-transform hover:scale-105"
            >
              Join the movement
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-neon-cyan" aria-hidden="true" />
              <span className="font-display text-base font-bold tracking-tight">
                NERO<span className="neon-gradient-text">11</span>VISION
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A forever-learning culture engine. Emotionally intelligent. Street-smart. Built to
              evolve with you.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background/40 text-muted-foreground transition-colors hover:border-transparent hover:bg-muted hover:text-neon-cyan"
                >
                  <s.icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="font-display text-sm font-semibold tracking-wide">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
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
          <p>© {new Date().getFullYear()} Nero11Vision. Forever Mode engaged.</p>
          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-neon-lime" />
            The culture engine is always learning.
          </p>
        </div>
      </div>
    </footer>
  )
}
