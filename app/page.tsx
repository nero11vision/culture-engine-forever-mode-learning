import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { MarqueeBand } from "@/components/marquee-band"
import { LearningModules } from "@/components/learning-modules"
import { CommunityFeed } from "@/components/community-feed"
import { CultureTimeline } from "@/components/culture-timeline"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <SiteNav />
      <Hero />
      <MarqueeBand />
      <LearningModules />
      <CommunityFeed />
      <CultureTimeline />
      <SiteFooter />
    </main>
  )
}
