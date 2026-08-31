import { LanguageProvider } from '@/components/language-provider'
import { SiteNavbar } from '@/components/site-navbar'
import { HeroSection } from '@/components/hero-section'
import { TerminalSection } from '@/components/terminal-section'
import { PortfolioSection } from '@/components/portfolio-section'
import { ServicesSection } from '@/components/services-section'
import { WhySection } from '@/components/why-section'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'
import type { Lang } from '@/lib/i18n'

/** The home page. Rendered once per locale at /(en) and /ar. */
export function HomePage({ lang }: { lang: Lang }) {
  return (
    <LanguageProvider lang={lang}>
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
