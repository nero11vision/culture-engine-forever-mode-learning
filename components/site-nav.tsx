"use client"

import { useState } from "react"
import { Menu, X, Sparkles } from "lucide-react"

const links = [
  { label: "Modules", href: "#modules" },
  { label: "Community", href: "#community" },
  { label: "Timeline", href: "#timeline" },
  { label: "Mission", href: "#mission" },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a
          href="#top"
          className="flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-4 py-2 backdrop-blur-md neon-border"
        >
          <Sparkles className="h-4 w-4 text-neon-cyan" aria-hidden="true" />
          <span className="font-display text-sm font-bold tracking-tight">
            NERO<span className="neon-gradient-text">11</span>VISION
          </span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-border/60 bg-background/60 px-2 py-1.5 backdrop-blur-md md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#modules"
          className="hidden rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-transform hover:scale-105 md:inline-block"
        >
          Enter God-Mode
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border border-border/60 bg-background/60 p-2.5 backdrop-blur-md md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="mx-5 rounded-2xl border border-border/60 bg-background/90 p-3 backdrop-blur-xl md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#modules"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-xl bg-foreground px-4 py-3 text-center text-sm font-semibold text-background"
          >
            Enter God-Mode
          </a>
        </div>
      )}
    </header>
  )
}
