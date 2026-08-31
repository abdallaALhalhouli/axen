import type { Metadata } from 'next'
import { ClinicFlowPageShell } from '@/components/case-page'
import { alternatesFor } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'ClinicFlow — Clinic Receptionist on WhatsApp',
  description:
    'How AXEN built a WhatsApp receptionist for Jordanian clinics: patients book in Arabic, availability is computed live, and double bookings are blocked in the database.',
  alternates: alternatesFor('en', '/work/clinicflow'),
}

export default function ClinicFlowPage() {
  return <ClinicFlowPageShell lang="en" />
}
