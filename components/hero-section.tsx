'use client'

import { CalendarCheck, MessageCircle } from 'lucide-react'
import { AxenLockup } from '@/components/axen-logo'
import { useLanguage } from '@/components/language-provider'
import { WHATSAPP_NUMBER } from '@/lib/i18n'

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 pb-24 pt-32 sm:px-8 sm:pt-40"
    >
      {/* Blueprint grid */}
      <div
        aria-hidden="true"
        className="blueprint-grid blueprint-grid-fade pointer-events-none absolute inset-0 -z-10"
      />

      <div className="mx-auto max-w-4xl text-center">
        <div className="mx-auto mb-10 w-28 sm:w-32">
          <AxenLockup />
        </div>

        <span className="inline-flex items-center border border-border px-4 py-1.5 font-mono text-[11px] tracking-[0.2em] text-muted-foreground sm:text-xs">
          {t.hero.badge}
        </span>

        <h1 className="mt-7 text-balance text-4xl font-semibold uppercase leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
          {t.hero.headline}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {t.hero.sub}
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center gap-2 bg-primary px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-muted-foreground sm:w-auto"
          >
            <CalendarCheck className="h-4 w-4" />
            {t.hero.primary}
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 border border-border px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-foreground transition-colors hover:bg-secondary sm:w-auto"
          >
            <MessageCircle className="h-4 w-4" />
            {t.hero.secondary}
          </a>
        </div>

        <dl className="mx-auto mt-16 grid max-w-3xl grid-cols-1 divide-y divide-border border border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {t.hero.metrics.map((m) => (
            <div key={m.label} className="p-6 text-center">
              <dt className="font-mono text-3xl font-semibold text-foreground">
                {m.value}
              </dt>
              <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                {m.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
