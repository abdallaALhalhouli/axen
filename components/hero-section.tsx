'use client'

import { CalendarCheck, MessageCircle } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { WHATSAPP_NUMBER } from '@/lib/i18n'

/**
 * The most convincing thing AXEN owns is a real Arabic booking conversation,
 * so it sits in the hero rather than three sections down. The headline argues;
 * the transcript proves.
 */
export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section id="top" className="paper-wash relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-32 sm:px-8 sm:pt-36 lg:grid-cols-[1.05fr_.95fr] lg:gap-20 lg:pb-28">
        <div>
          <span className="eyebrow-rule inline-flex items-center text-sm font-medium text-primary">
            {t.hero.badge}
          </span>

          <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.15] sm:text-5xl lg:text-[3.4rem]">
            {t.hero.headline}
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {t.hero.sub}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-medium text-primary-foreground shadow-sm transition-colors hover:bg-accent-foreground"
            >
              <CalendarCheck className="h-[1.15rem] w-[1.15rem]" />
              {t.hero.primary}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <MessageCircle className="h-[1.15rem] w-[1.15rem]" />
              {t.hero.secondary}
            </a>
          </div>

          <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-6">
            {t.hero.metrics.map((m) => (
              <div key={m.label}>
                <dt className="font-display text-2xl font-bold text-foreground">
                  {m.value}
                </dt>
                <dd className="mt-0.5 text-sm text-muted-foreground">
                  {m.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <HeroTranscript />
      </div>
    </section>
  )
}

/**
 * A still of the booking conversation. The animated version further down the
 * page does the storytelling; this one only has to say "this is real".
 */
function HeroTranscript() {
  const { t } = useLanguage()

  return (
    <div className="relative mx-auto w-full max-w-md lg:mx-0">
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_1px_2px_rgba(22,33,31,.05),0_24px_50px_-28px_rgba(22,33,31,.35)]">
        <div className="flex items-center gap-3 border-b border-border bg-secondary px-4 py-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
            <MessageCircle className="h-4 w-4" />
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium">{t.terminal.header}</p>
            <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
              {t.terminal.status}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2.5 px-4 py-5" dir="rtl">
          {t.hero.chat.map((line, i) => (
            <p
              key={i}
              className={
                line.from === 'user'
                  ? 'max-w-[85%] self-end rounded-2xl rounded-br-sm bg-primary px-3.5 py-2.5 text-sm leading-relaxed text-primary-foreground'
                  : 'max-w-[88%] self-start whitespace-pre-line rounded-2xl rounded-bl-sm bg-secondary px-3.5 py-2.5 text-sm leading-relaxed text-foreground'
              }
            >
              {line.text}
            </p>
          ))}
        </div>
      </div>

      <p className="mt-3 text-center text-sm text-muted-foreground lg:text-start">
        {t.hero.chatCaption}
      </p>
    </div>
  )
}
