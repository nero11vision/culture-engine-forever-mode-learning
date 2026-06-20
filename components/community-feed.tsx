"use client"

import { useEffect, useState } from "react"
import { Heart, MessageCircle, Repeat2, Radio } from "lucide-react"

type Post = {
  id: number
  author: string
  handle: string
  source: string
  content: string
  likes: number
  comments: number
  reposts: number
}

const seed: Post[] = [
  {
    id: 1,
    author: "Kaia Okonkwo",
    handle: "@kaia.codes",
    source: "Whop Drop",
    content:
      "Copped the General's Circle blueprint and flipped my first $1k freelance check in 9 days. The street-smart leadership module is unreal.",
    likes: 1284,
    comments: 92,
    reposts: 213,
  },
  {
    id: 2,
    author: "Devon Reyes",
    handle: "@dvn",
    source: "Discord Log",
    content:
      "Live mentoring in the Nero11 server tonight hit different. The General broke down the power structures in plain talk. Forever mode is different.",
    likes: 932,
    comments: 64,
    reposts: 141,
  },
  {
    id: 3,
    author: "Mina Park",
    handle: "@minabuilds",
    source: "AI Mentor",
    content:
      "My mentor noticed I was burnt out and switched the whole lesson plan to micro-wins. Emotionally intelligent isn't a buzzword here.",
    likes: 2051,
    comments: 158,
    reposts: 377,
  },
  {
    id: 4,
    author: "Theo Bankole",
    handle: "@theo.vision",
    source: "Creative Labs",
    content:
      "Shipped my first visual mixtape straight to the feed. 11k views in an hour. Nero11 community moves FAST.",
    likes: 3402,
    comments: 290,
    reposts: 612,
  },
  {
    id: 5,
    author: "Andre Settles",
    handle: "@dre.atl",
    source: "Notion Update",
    content:
      "Dropped a new generational-wealth checklist in the Command Center. Built from the streets up, no fluff, all leverage.",
    likes: 778,
    comments: 41,
    reposts: 96,
  },
  {
    id: 6,
    author: "Lela Mensah",
    handle: "@lela.m",
    source: "Community Win",
    content:
      "First in my family to start a registered business. The Street Law module walked me through every form. Respect the vision.",
    likes: 4120,
    comments: 333,
    reposts: 701,
  },
]

const sourceColor: Record<string, string> = {
  "Whop Drop": "text-gold",
  "Discord Log": "text-neon-cyan",
  "AI Mentor": "text-neon-cyan",
  "Creative Labs": "text-neon-magenta",
  "Notion Update": "text-gold",
  "Community Win": "text-neon-magenta",
}

function avatarGradient(id: number) {
  const sets = [
    "from-gold to-neon-magenta",
    "from-neon-cyan to-gold",
    "from-neon-magenta to-neon-cyan",
    "from-gold to-neon-cyan",
  ]
  return sets[id % sets.length]
}

const stats = [
  { key: "learning", label: "Learning now", base: 12400 },
  { key: "sessions", label: "Sessions completed", base: 480219 },
  { key: "mentors", label: "Mentors active", base: 318 },
]

export function CommunityFeed() {
  const [posts, setPosts] = useState(seed)
  const [tick, setTick] = useState(0)

  // Simulate an evolving, living feed: counts tick up over time.
  useEffect(() => {
    const interval = setInterval(() => {
      setPosts((prev) =>
        prev.map((p) => ({
          ...p,
          likes: p.likes + Math.floor(Math.random() * 7),
          comments: p.comments + (Math.random() > 0.7 ? 1 : 0),
          reposts: p.reposts + (Math.random() > 0.8 ? 1 : 0),
        })),
      )
      setTick((n) => n + 1)
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  const counters: Record<string, number> = {
    learning: stats[0].base + tick * 9,
    sessions: stats[1].base + tick * 23,
    mentors: stats[2].base + (tick % 5),
  }

  return (
    <section id="feed" className="relative mx-auto max-w-7xl px-5 py-24">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-neon-magenta">
            The Living Feed · v4
          </p>
          <h2 className="mt-3 text-balance font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl">
            The movement <span className="gold-gradient-text">moves in real time</span>
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Discord logs, Notion updates, Whop drops, and community wins land here. The feed never
            sleeps — and neither does the culture engine.
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-gold/30 bg-card/40 px-4 py-2 backdrop-blur-md">
          <Radio className="h-4 w-4 animate-pulse-glow text-gold" aria-hidden="true" />
          <span className="text-sm font-medium tabular-nums text-muted-foreground">Live</span>
        </div>
      </div>

      {/* Counters */}
      <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {stats.map((s) => (
          <div
            key={s.key}
            className="rounded-2xl border border-border/60 bg-card/40 p-5 backdrop-blur-md"
          >
            <dt className="text-xs uppercase tracking-wider text-muted-foreground">{s.label}</dt>
            <dd className="mt-1 gold-gradient-text font-display text-3xl font-bold tabular-nums">
              {counters[s.key].toLocaleString()}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-10 columns-1 gap-5 md:columns-2 lg:columns-3 [&>*]:mb-5">
        {posts.map((p) => (
          <article
            key={p.id}
            className="break-inside-avoid rounded-3xl border border-border/60 bg-card/40 p-6 backdrop-blur-md transition-colors hover:border-gold/40"
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${avatarGradient(
                  p.id,
                )} font-display text-sm font-bold text-background`}
                aria-hidden="true"
              >
                {p.author
                  .split(" ")
                  .map((w) => w[0])
                  .join("")}
              </div>
              <div className="min-w-0">
                <p className="truncate font-display text-sm font-semibold">{p.author}</p>
                <p className="truncate text-xs text-muted-foreground">{p.handle}</p>
              </div>
              <span
                className={`ml-auto shrink-0 rounded-full border border-border/60 px-3 py-1 text-xs font-medium ${sourceColor[p.source]}`}
              >
                {p.source}
              </span>
            </div>

            <p className="mt-4 text-pretty text-sm leading-relaxed text-foreground/90">
              {p.content}
            </p>

            <div className="mt-5 flex items-center gap-6 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 tabular-nums">
                <Heart className="h-4 w-4 text-neon-magenta" aria-hidden="true" />
                {p.likes.toLocaleString()}
              </span>
              <span className="inline-flex items-center gap-1.5 tabular-nums">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                {p.comments.toLocaleString()}
              </span>
              <span className="inline-flex items-center gap-1.5 tabular-nums">
                <Repeat2 className="h-4 w-4 text-neon-cyan" aria-hidden="true" />
                {p.reposts.toLocaleString()}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
