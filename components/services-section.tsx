'use client'

import { Code2, MessageSquareShare, Workflow, Check } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { Reveal } from '@/components/motion'
import { SectionHeading } from '@/components/portfolio-section'

const icons = [Code2, MessageSquareShare, Workflow]

/**
 * Three equal icon-topped columns is the single most reproduced section on
 * the web. These are now full-measure rows: the service name set large on one
 * side, what it does and what you get on the other. Same content, a rhythm
 * that does not match the two card grids either side of it.
 */
export function ServicesSection() {
  const { t, lang } = useLanguage()
  const numerals = lang === 'ar' ? ['٠١', '٠٢', '٠٣'] : ['01', '02', '03']

  return (
    <section
      id="services"
      className="scroll-mt-20 border-y border-border bg-card/40 px-5 py-28 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow={t.services.eyebrow}
            title={t.services.title}
            subtitle={t.services.subtitle}
            align="split"
          />
        </Reveal>

        <div className="mt-2">
          {t.services.items.map((service, i) => {
            const Icon = icons[i]
            return (
              <Reveal key={service.title} delay={i * 90}>
                <article className="grid gap-6 border-b border-border py-10 md:grid-cols-[1fr_1.25fr] md:gap-16 lg:py-12">
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-sm font-bold text-[#EC3013] shrink-0 mt-2.5">
                      {numerals[i] || `0${i + 1}`}
                    </span>
                    <span className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-balance text-2xl font-bold leading-snug lg:text-[1.75rem]">
                      {service.title}
                    </h3>
                  </div>

                  <div>
                    <p className="text-pretty leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <ul className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-7">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-center gap-2 text-sm text-foreground/80"
                        >
                          <Check className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
