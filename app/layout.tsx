import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Geist_Mono, IBM_Plex_Sans_Arabic } from 'next/font/google'
import './globals.css'

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
  weight: ['400', '500', '600', '700'],
  variable: '--font-arabic',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AXEN — Elite Web Platforms & AI Automation',
  description:
    'AXEN engineers custom web platforms and autonomous WhatsApp & customer workflows for growing businesses. Engineered in Jordan.',
  generator: 'v0.app',
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
        {children}
      </body>
    </html>
  )
}
