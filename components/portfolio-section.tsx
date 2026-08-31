'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight, Check, Radio } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { Reveal } from '@/components/motion'
import { cn } from '@/lib/utils'

type Filter = 'all' | 'web' | 'automation'

export function PortfolioSection() {
  const { t, localePath } = useLanguage()
  const [filter, setFilter] = useState<Filter>('all')

  const tabs: { key: Filter; label: string }[] = [
    { key: 'all', label: t.portfolio.filters.all },
    { key: 'web', label: t.portfolio.filters.web },
    { key: 'automation', label: t.portfolio.filters.automation },
  ]

  const items = t.portfolio.items.filter(
    (item) => filter === 'all' || item.category === filter,
  )

  return (
    <section id="portfolio" className="scroll-mt-20 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
        <SectionHeading
          eyebrow={t.portfolio.eyebrow}
          title={t.portfolio.title}
          subtitle={t.portfolio.subtitle}
        />
        </Reveal>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setFilter(tab.key)}
              aria-pressed={filter === tab.key}
              className={cn(
                'rounded-lg border px-4 py-2 text-sm font-medium transition-colors',
                filter === tab.key
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-transparent text-muted-foreground hover:border-foreground hover:text-foreground',
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {items.map((item) => {
            const isLive = item.kind === 'live'
            // Case-study links are real routes and need the locale prefix;
            // '#contact' and friends stay as-is.
            const href = item.href.startsWith('/')
              ? localePath(item.href)
              : item.href
            const cta = isLive
              ? t.portfolio.caseStudy
              : t.portfolio.discuss

            return (
              <article
                key={item.id}
                className={cn(
                  'lift group flex flex-col overflow-hidden rounded-2xl border bg-card',
                  isLive
                    ? 'border-foreground/40 hover:border-foreground'
                    : 'border-border hover:border-foreground/60',
                )}
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
                  <Image
                    src={item.image || '/placeholder.svg'}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute start-4 top-4 rounded-full border border-border bg-background/90 px-3 py-1 text-[11px] text-foreground backdrop-blur-md">
                    {item.categoryLabel}
                  </span>

                  {/* The one honest distinction on this page: shipped vs offered. */}
                  <span
                    className={cn(
                      'absolute end-4 top-4 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] backdrop-blur-md',
                      isLive
                        ? 'border-foreground bg-foreground text-background'
                        : 'border-border bg-background/90 text-muted-foreground',
                    )}
                  >
                    {isLive && (
                      <Radio className="h-3 w-3 animate-pulse" aria-hidden="true" />
                    )}
                    {isLive
                      ? t.portfolio.badges.live
                      : t.portfolio.badges.capability}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold">
                      {item.title}
                    </h3>
                    <a
                      href={href}
                      className="inline-flex shrink-0 items-center gap-1 text-xs font-medium text-foreground transition-colors hover:text-muted-foreground"
                    >
                      {cta}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>

                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>

                  <div className="mt-5 border-t border-border pt-4">
                    <p className="text-[11px] text-muted-foreground/70">
                      {t.portfolio.includesLabel}
                    </p>
                    <ul className="mt-3 flex flex-col gap-2">
                      {item.includes.map((line) => (
                        <li key={line} className="flex items-start gap-2.5 text-sm">
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-foreground"
                            aria-hidden="true"
                          />
                          <span className="text-muted-foreground">{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto flex flex-wrap gap-2 pt-5">
                    {item.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border bg-secondary px-2.5 py-1 text-[11px] text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="eyebrow-rule inline-flex items-center text-sm font-medium text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-balance text-3xl font-bold sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  )
}
