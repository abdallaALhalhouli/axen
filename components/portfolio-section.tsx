'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { cn } from '@/lib/utils'

type Filter = 'all' | 'web' | 'automation'

export function PortfolioSection() {
  const { t } = useLanguage()
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
        <SectionHeading
          eyebrow={t.portfolio.eyebrow}
          title={t.portfolio.title}
          subtitle={t.portfolio.subtitle}
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setFilter(tab.key)}
              className={cn(
                'border px-4 py-2 text-xs font-medium uppercase tracking-widest transition-colors',
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
          {items.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden border border-border bg-card transition-colors hover:border-foreground"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-border grayscale transition-[filter] duration-500 group-hover:grayscale-0">
                <Image
                  src={item.image || '/placeholder.svg'}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute start-4 top-4 border border-border bg-background/90 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-foreground backdrop-blur-md">
                  {item.categoryLabel}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <a
                    href={item.href}
                    className="inline-flex shrink-0 items-center gap-1 text-xs font-medium uppercase tracking-widest text-foreground transition-colors hover:text-muted-foreground"
                  >
                    {item.href.startsWith('/')
                      ? t.portfolio.caseStudy
                      : t.portfolio.liveDemo}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tech.map((tech) => (
                    <span
                      key={tech}
                      className="border border-border bg-secondary px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
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
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-balance text-3xl font-semibold uppercase tracking-tight sm:text-4xl">
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
