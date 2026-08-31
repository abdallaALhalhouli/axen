'use client'

import { Check } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { SectionHeading } from '@/components/portfolio-section'
import { Reveal } from '@/components/motion'
import { cn } from '@/lib/utils'

/**
 * Competitors here make you book a call to hear a number, which is the point
 * at which most owners quietly give up. Publishing the starting points is
 * the differentiator; the "from" framing keeps room for scope.
 */
export function PricingSection() {
  const { t } = useLanguage()
  const p = t.pricing

  return (
    <section id="pricing" className="scroll-mt-20 border-t border-border px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
        <SectionHeading
          eyebrow={p.eyebrow}
          title={p.title}
          subtitle={p.subtitle}
        />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {p.plans.map((plan) => {
            const featured = 'featured' in plan && plan.featured

            return (
              <div
                key={plan.name}
                className={cn(
                  'lift flex flex-col rounded-2xl border p-7',
                  featured
                    ? 'border-primary bg-card shadow-[0_1px_2px_rgba(22,33,31,.05),0_20px_44px_-26px_rgba(14,110,99,.5)]'
                    : 'border-border bg-card hover:border-primary/50',
                )}
              >
                <h3 className="text-lg font-bold">{plan.name}</h3>

                <p
                  className={cn(
                    'mt-3 font-display text-2xl font-bold',
                    featured ? 'text-primary' : 'text-foreground',
                  )}
                >
                  {plan.from}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {plan.body}
                </p>

                <ul className="mt-6 flex flex-col gap-2.5 border-t border-border pt-5">
                  {plan.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={cn(
                    'mt-auto inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium transition-colors',
                    featured
                      ? 'bg-primary text-primary-foreground hover:bg-accent-foreground'
                      : 'border border-border hover:border-primary hover:text-primary',
                    'mt-7',
                  )}
                >
                  {t.nav.cta}
                </a>
              </div>
            )
          })}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
          {p.note}
        </p>
      </div>
    </section>
  )
}
