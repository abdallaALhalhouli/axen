'use client'

import { Gauge, PiggyBank, Layers, MapPin, Info } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { Reveal } from '@/components/motion'
import { SectionHeading } from '@/components/portfolio-section'

/**
 * This was a bento grid — the mixed-span tile layout that ships with every
 * generated landing page in 2024. Replaced with a ledger: four claims as
 * hairline-divided rows, each answering the same question in the same shape.
 * The comparison reads faster and the section stops looking assembled.
 */
export function WhySection() {
  const { t } = useLanguage()
  const c = t.why.cards

  const rows = [
    { icon: Gauge, ...c.speed },
    { icon: PiggyBank, ...c.bloat },
    { icon: Layers, ...c.scalable },
    { icon: MapPin, ...c.local },
  ]

  return (
    <section id="why" className="scroll-mt-20 px-5 py-28 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow={t.why.eyebrow}
            title={t.why.title}
            align="split"
          />
        </Reveal>

        <div className="mt-2">
          {rows.map((row, i) => {
            const Icon = row.icon
            return (
              <Reveal key={row.title} delay={i * 80}>
                <article className="group grid gap-3 border-b border-border py-8 md:grid-cols-[auto_1fr_1.4fr] md:items-baseline md:gap-10">
                  <span className="text-primary md:pt-1">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-balance text-xl font-bold leading-snug">
                    {row.title}
                  </h3>
                  <p className="text-pretty leading-relaxed text-muted-foreground">
                    {row.description}
                  </p>
                </article>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={120}>
          <p className="mt-10 flex max-w-3xl items-start gap-3 text-sm leading-relaxed text-muted-foreground">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <span>{t.why.costNote}</span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
