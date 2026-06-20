import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { MarqueeBand } from "@/components/marquee-band"
import { CharacterHub } from "@/components/character-hub"
import { FalconEvolution } from "@/components/falcon-evolution"
import { LearningModules } from "@/components/learning-modules"
import { CommunityFeed } from "@/components/community-feed"
import { CultureTimeline } from "@/components/culture-timeline"
import { ThemeSongCarousel } from "@/components/theme-song-carousel"
import { IntegrationHub } from "@/components/integration-hub"
import { MissionOath } from "@/components/mission-oath"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <SiteNav />
      <Hero />
      <MarqueeBand />
      <CharacterHub />
      <FalconEvolution />
      <LearningModules />
      <CommunityFeed />
      <CultureTimeline />
      <ThemeSongCarousel />
      <IntegrationHub />
      <MissionOath />
      <SiteFooter />
    </main>
  )
}
