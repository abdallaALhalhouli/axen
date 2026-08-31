import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Geist_Mono, IBM_Plex_Sans_Arabic } from 'next/font/google'
import './globals.css'
import { StructuredData } from '@/components/structured-data'
import { SITE_URL } from '@/lib/i18n'

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-grotesk',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono-geist',
  display: 'swap',
})

const arabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600'],
  variable: '--font-arabic',
  display: 'swap',
  // Only fetched once a visitor switches to Arabic.
  preload: false,
})

const TITLE = 'AXEN — Elite Web Platforms & AI Automation'
const DESCRIPTION =
  'AXEN engineers custom web platforms and autonomous WhatsApp & customer workflows for growing businesses. Engineered in Jordan.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s — AXEN',
  },
  description: DESCRIPTION,
  applicationName: 'AXEN',
  keywords: [
    'AXEN',
    'web development Jordan',
    'WhatsApp automation',
    'AI chatbot',
    'Next.js agency',
    'أتمتة واتساب',
    'تصميم مواقع الأردن',
  ],
  alternates: {
    canonical: '/',
    languages: {
      en: '/',
      ar: '/ar',
      'x-default': '/',
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'AXEN',
    title: TITLE,
    description: DESCRIPTION,
    url: '/',
    locale: 'en_US',
    alternateLocale: ['ar_JO'],
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'AXEN — Web Platforms & AI Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'fmRHgi4YZFaZ8c71LC83ojS7QOdUNyrTjBSgKbHSzAs',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${grotesk.variable} ${geistMono.variable} ${arabic.variable} bg-background`}
    >
      <body className="font-sans">
        <StructuredData />
        {children}
      </body>
    </html>
  )
}
