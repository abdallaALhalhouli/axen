import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Sans_Arabic, Archivo, Geist_Mono } from 'next/font/google'
import './globals.css'
import { StructuredData } from '@/components/structured-data'
import { SITE_URL } from '@/lib/i18n'

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex',
  display: 'swap',
})

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '600', '800'],
  variable: '--font-archivo',
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
      suppressHydrationWarning
      className={`${ibmPlexArabic.variable} ${archivo.variable} ${geistMono.variable}`}
    >
      <body className="antialiased selection:bg-[#ec3013]/25 selection:text-[#201e1d]">
        {/* Ensures proper lang/dir before first paint, and marks JS alive */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js');if(window.location.pathname==='/ar'||window.location.pathname.startsWith('/ar/')){document.documentElement.lang='ar';document.documentElement.dir='rtl';}else{document.documentElement.lang='en';document.documentElement.dir='ltr';}",
          }}
        />
        {/* Accessible skip to main content */}
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:start-3 focus:z-[100] focus:bg-[#ae1800] focus:text-[#f3f2f2] focus:px-4 focus:py-2.5 focus:font-bold focus:shadow-lg"
        >
          Skip to content / تخطَّ إلى المحتوى
        </a>
        <StructuredData />
        {children}
      </body>
    </html>
  )
}
