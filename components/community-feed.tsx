"use client"

import { useEffect, useState } from "react"
import { Heart, MessageCircle, Repeat2, Radio } from "lucide-react"

type Post = {
  id: number
  author: string
  handle: string
  module: string
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
    module: "Creative Labs",
    content:
      "Remixed a 1980s lagos highlife loop with my AI mentor in the studio. It scored 96 on the culture engine — dropping the stems in the lab.",
    likes: 1284,
    comments: 92,
    reposts: 213,
  },
  {
    id: 2,
    author: "Devon Reyes",
    handle: "@dvn",
    module: "Cultural Stories",
    content:
      "Just finished the branching story on graffiti as resistance. The way it rewrote itself based on my choices? unreal. forever mode is different.",
    likes: 932,
    comments: 64,
    reposts: 141,
  },
  {
    id: 3,
    author: "Mina Park",
    handle: "@minabuilds",
    module: "AI Mentor",
    content:
      "my mentor noticed i was burnt out and switched the whole lesson plan to micro-wins. emotionally intelligent isn't a buzzword here.",
    likes: 2051,
    comments: 158,
    reposts: 377,
  },
  {
    id: 4,
    author: "Theo Bankole",
    handle: "@theo.vision",
    module: "Creative Labs",
    content:
      "shipped my first visual mixtape straight to the feed. 11k views in an hour. nero11 community moves FAST.",
    likes: 3402,
    comments: 290,
    reposts: 612,
  },
]

const moduleColor: Record<string, string> = {
  "Creative Labs": "text-neon-violet",
  "Cultural Stories": "text-neon-magenta",
  "AI Mentor": "text-neon-cyan",
}

function avatarGradient(id: number) {
  const sets = [
    "from-neon-cyan to-neon-violet",
    "from-neon-magenta to-neon-violet",
    "from-neon-cyan to-neon-magenta",
    "from-neon-lime to-neon-cyan",
  ]
  return sets[id % sets.length]
}

export function CommunityFeed() {
  const [posts, setPosts] = useState(seed)
  const [live, setLive] = useState(0)

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
      setLive((n) => n + Math.floor(Math.random() * 12) + 1)
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="community" className="relative mx-auto max-w-7xl px-5 py-20 md:py-28">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-neon-magenta">
            Living Community Feed
          </p>
          <h2 className="mt-3 text-balance font-display text-4xl font-bold tracking-tight md:text-5xl">
            The culture <span className="neon-gradient-text">moves in real time</span>
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Every artifact, story, and breakthrough lands here. The feed never sleeps — and
            neither does the culture engine.
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-4 py-2 backdrop-blur-md">
          <Radio className="h-4 w-4 animate-pulse-glow text-neon-lime" aria-hidden="true" />
          <span className="text-sm font-medium tabular-nums text-muted-foreground">
            {(12400 + live).toLocaleString()} learning now
          </span>
        </div>
      </div>

      <div className="mt-10 columns-1 gap-5 md:columns-2 [&>*]:mb-5">
        {posts.map((p) => (
          <article
            key={p.id}
            className="break-inside-avoid rounded-3xl border border-border/60 bg-card/40 p-6 backdrop-blur-md transition-colors hover:border-border"
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
                className={`ml-auto shrink-0 rounded-full border border-border/60 px-3 py-1 text-xs font-medium ${moduleColor[p.module]}`}
              >
                {p.module}
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
