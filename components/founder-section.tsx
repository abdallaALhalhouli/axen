'use client'

import { MessageCircle } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { Reveal } from '@/components/motion'
import { getWhatsAppUrl } from '@/lib/i18n'

/**
 * A new studio with no client list sells on the person, not the portfolio.
 * There is no photograph yet, so this reads as a signed note rather than a
 * team page — a monogram and a signature carry it instead of a face.
 */
export function FounderSection() {
  const { t, lang } = useLanguage()
  const f = t.founder

  return (
    <section id="founder" className="scroll-mt-20 border-t border-border px-5 py-24 sm:px-8">
      <Reveal className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[auto_1fr] md:gap-14">
        <div className="flex flex-col items-center gap-3 md:items-start">
          <span
            aria-hidden="true"
            className="grid h-20 w-20 place-items-center rounded-2xl bg-primary font-display text-2xl font-bold text-primary-foreground"
          >
            ع
          </span>
        </div>

        <div>
          <span className="eyebrow-rule inline-flex items-center text-sm font-medium text-primary">
            {f.eyebrow}
          </span>

          <div className="mt-5 flex flex-col gap-4">
            {f.lines.map((line) => (
              <p
                key={line}
                className="text-pretty text-lg leading-relaxed text-foreground/90"
              >
                {line}
              </p>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-xl font-bold">{f.name}</p>
              <p className="mt-0.5 text-sm text-muted-foreground">{f.role}</p>
            </div>

            <a
              href={getWhatsAppUrl('founder', lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-5 py-3 font-medium transition-colors hover:border-primary hover:text-primary"
            >
              <MessageCircle className="h-[1.15rem] w-[1.15rem]" />
              {f.cta}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
