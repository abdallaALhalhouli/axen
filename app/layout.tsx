import type { Metadata, Viewport } from 'next'
import { Noto_Kufi_Arabic, Tajawal, Geist_Mono } from 'next/font/google'
import './globals.css'
import { StructuredData } from '@/components/structured-data'
import { SITE_URL } from '@/lib/i18n'

const kufi = Noto_Kufi_Arabic({
  subsets: ['arabic', 'latin'],
  weight: ['600', '700'],
  variable: '--font-kufi',
  display: 'swap',
})

const tajawal = Tajawal({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '700'],
  variable: '--font-tajawal',
  display: 'swap',
})

// Only the WhatsApp transcript uses it, so it never blocks first paint.
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono-geist',
  display: 'swap',
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
  colorScheme: 'light',
  themeColor: '#efede7',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${kufi.variable} ${tajawal.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans">
        {/* Marks JS as alive before paint, so scroll reveals may hide their
            content. Without JS the .reveal rule stays visible. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <StructuredData />
        {children}
      </body>
    </html>
  )
}
