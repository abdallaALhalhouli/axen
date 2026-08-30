import { LanguageProvider } from '@/components/language-provider'
import { SiteNavbar } from '@/components/site-navbar'
import { HeroSection } from '@/components/hero-section'
import { TerminalSection } from '@/components/terminal-section'
import { PortfolioSection } from '@/components/portfolio-section'
import { ServicesSection } from '@/components/services-section'
import { WhySection } from '@/components/why-section'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <LanguageProvider>
      <SiteNavbar />
      <main>
        <HeroSection />
        <TerminalSection />
        <PortfolioSection />
        <ServicesSection />
        <WhySection />
        <ContactSection />
      </main>
      <SiteFooter />
    </LanguageProvider>
  )
}
