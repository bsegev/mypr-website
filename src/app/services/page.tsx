import { ServicesHero } from '@/components/sections/services/ServicesHero'
import { ServicesList } from '@/components/sections/services/ServicesList'
import { FeaturedService } from '@/components/sections/services/FeaturedService'
import { ProcessSection } from '@/components/sections/services/ProcessSection'
import { ServicesContact } from '@/components/sections/services/ServicesContact'

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <FeaturedService />
      <ServicesList />
      <ProcessSection />
      <ServicesContact />
    </main>
  )
} 