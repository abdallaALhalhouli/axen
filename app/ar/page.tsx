import type { Metadata } from 'next'
import { HomePage } from '@/components/site-page'
import { alternatesFor } from '@/lib/seo'

const TITLE = 'AXEN — منصات ويب وأتمتة ذكية'
const DESCRIPTION =
  'AXEN تبني منصات ويب مخصّصة وأنظمة واتساب تعمل ٢٤/٧ للشركات في الأردن. مواقع سريعة، وبوتات تحجز وترد بالعربية الأردنية.'

export const metadata: Metadata = {
  // Absolute: the root template would otherwise append a second '— AXEN'.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: alternatesFor('ar', '/'),
  openGraph: {
    type: 'website',
    siteName: 'AXEN',
    title: TITLE,
    description: DESCRIPTION,
    url: '/ar',
    locale: 'ar_JO',
    alternateLocale: ['en_US'],
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'AXEN' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/og.png'],
  },
}

export default function ArabicPage() {
  return <HomePage lang="ar" />
}
