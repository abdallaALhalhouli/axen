import type { Metadata } from 'next'
import { ClinicFlowPageShell } from '@/components/case-page'
import { alternatesFor } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'ClinicFlow — موظف استقبال العيادة على واتساب',
  description:
    'كيف بنت AXEN موظف استقبال على واتساب للعيادات الأردنية: المريض يحجز بالعربية، الأوقات المتاحة تُحسب لحظياً، والحجز المزدوج ممنوع على مستوى قاعدة البيانات.',
  alternates: alternatesFor('ar', '/work/clinicflow'),
}

export default function ArabicClinicFlowPage() {
  return <ClinicFlowPageShell lang="ar" />
}
