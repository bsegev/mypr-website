import { AboutHero } from '@/components/sections/about/AboutHero'
import { AboutStory } from '@/components/sections/about/AboutStory'
import { AboutValues } from '@/components/sections/about/AboutValues'
import { AboutExperience } from '@/components/sections/about/AboutExperience'
import { AboutContact } from '@/components/sections/about/AboutContact'

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutExperience />
      <AboutContact />
    </main>
  )
} 