"use client"

import { useState } from "react"
import { Menu, X, Crown } from "lucide-react"

const links = [
  { label: "The General", href: "#general" },
  { label: "Evolution", href: "#evolution" },
  { label: "Learn", href: "#learn" },
  { label: "Feed", href: "#feed" },
  { label: "Forever", href: "#forever" },
  { label: "Sound", href: "#sound" },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a
          href="#top"
          className="flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-4 py-2 backdrop-blur-md gold-border"
        >
          <Crown className="h-4 w-4 text-gold" aria-hidden="true" />
          <span className="font-display text-sm font-bold uppercase tracking-widest">
            NERO<span className="gold-gradient-text">11</span>VISION
          </span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-border/60 bg-background/60 px-2 py-1.5 backdrop-blur-md lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm uppercase tracking-wide text-muted-foreground transition-colors hover:bg-muted hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#general"
          className="hidden rounded-full bg-gold px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-105 lg:inline-block"
        >
          Enter God Mode
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border border-border/60 bg-background/60 p-2.5 backdrop-blur-md lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="mx-5 rounded-2xl border border-border/60 bg-background/90 p-3 backdrop-blur-xl lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm uppercase tracking-wide text-muted-foreground transition-colors hover:bg-muted hover:text-gold"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#general"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-xl bg-gold px-4 py-3 text-center text-sm font-bold uppercase tracking-wide text-primary-foreground"
          >
            Enter God Mode
          </a>
        </div>
      )}
    </header>
  )
}
