import Link from 'next/link'
import { AxenLogo } from '@/components/axen-logo'
import { WHATSAPP_NUMBER } from '@/lib/i18n'

export const metadata = {
  title: 'Page Not Found',
}

/**
 * Bilingual by default — this page is outside the LanguageProvider, and a
 * visitor who hit a dead link should not also have to find the toggle.
 */
export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center px-5 py-24 text-center">
      <AxenLogo className="h-12 w-12" />

      <p className="mt-10 font-mono text-sm tracking-[0.35em] text-muted-foreground">
        [ 404 ]
      </p>

      <h1 className="mt-4 text-3xl font-semibold uppercase tracking-wide sm:text-4xl">
        This page doesn’t exist
      </h1>
      <p className="mt-3 text-muted-foreground" dir="rtl" lang="ar">
        هذه الصفحة غير موجودة
      </p>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center justify-center bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-muted-foreground"
        >
          Back to Home
        </Link>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center border border-border px-6 py-3 text-xs font-semibold uppercase tracking-widest transition-colors hover:border-foreground"
        >
          Talk to Us
        </a>
      </div>
    </main>
  )
}
