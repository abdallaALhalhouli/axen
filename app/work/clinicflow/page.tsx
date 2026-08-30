import type { Metadata } from 'next'
import { LanguageProvider } from '@/components/language-provider'
import { SiteNavbar } from '@/components/site-navbar'
import { SiteFooter } from '@/components/site-footer'
import { ClinicFlowCaseStudy } from './case-study'

export const metadata: Metadata = {
  title: 'ClinicFlow — Clinic Receptionist on WhatsApp | AXEN',
  description:
    'How AXEN built a WhatsApp receptionist for Jordanian clinics: patients book in Arabic, availability is computed live, and double bookings are blocked in the database.',
}

export default function ClinicFlowPage() {
  return (
    <LanguageProvider>
      <SiteNavbar />
      <main>
        <ClinicFlowCaseStudy />
      </main>
      <SiteFooter />
    </LanguageProvider>
  )
}
