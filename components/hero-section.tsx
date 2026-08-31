'use client'

import { useEffect, useState } from 'react'
import { CalendarCheck, MessageCircle, Check } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { prefersReducedMotion } from '@/components/motion'
import { WHATSAPP_NUMBER } from '@/lib/i18n'

/**
 * The hero argues; the conversation proves. AXEN's whole pitch is that
 * something answers a patient at 9pm, so the page opens by doing it rather
 * than describing it. This is the one animated moment on the site — the rest
 * stays still on purpose.
 */
export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section id="top" className="paper-wash relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-32 sm:px-8 sm:pt-36 lg:grid-cols-[1.05fr_.95fr] lg:gap-20 lg:pb-28">
        <div className="contents lg:block">
          <span className="eyebrow-rule stage stage-1 inline-flex items-center text-sm font-medium text-primary">
            {t.hero.badge}
          </span>

          <h1 className="stage stage-2 mt-5 text-balance text-4xl font-bold leading-[1.15] sm:text-5xl lg:text-[3.4rem]">
            {t.hero.headline}
          </h1>

          <p className="stage stage-3 mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {t.hero.sub}
          </p>

          <div className="stage stage-4 mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="lift inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-medium text-primary-foreground shadow-sm transition-all hover:bg-accent-foreground"
            >
              <CalendarCheck className="h-[1.15rem] w-[1.15rem]" />
              {t.hero.primary}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="lift inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 font-medium text-foreground transition-all hover:border-primary hover:text-primary"
            >
              <MessageCircle className="h-[1.15rem] w-[1.15rem]" />
              {t.hero.secondary}
            </a>
          </div>

          <dl className="stage stage-5 order-2 mt-12 flex flex-wrap gap-x-10 gap-y-6 lg:order-none">
            {t.hero.metrics.map((m) => (
              <div key={m.label}>
                <dt className="font-display text-2xl font-bold text-foreground">
                  {m.value}
                </dt>
                <dd className="mt-0.5 text-sm text-muted-foreground">{m.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <LiveConversation className="stage stage-4 order-1 lg:order-none" />
      </div>
    </section>
  )
}

/**
 * The real booking conversation, replayed at reading pace. Dark on the
 * limestone page because the actual ClinicFlow product is a dark interface —
 * this is what a patient's screen looks like, not a decorative choice.
 */
function LiveConversation({ className = '' }: { className?: string }) {
  const { t } = useLanguage()
  const lines = t.hero.chat
  const [shown, setShown] = useState(0)
  const [typing, setTyping] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion()) {
      setShown(lines.length)
      return
    }

    if (shown >= lines.length) return

    const next = lines[shown]
    // A patient taps a reply quickly; the clinic "thinks" before it answers.
    const pause = shown === 0 ? 700 : next.from === 'user' ? 900 : 1500

    let typingTimer: ReturnType<typeof setTimeout>
    const showTimer = setTimeout(() => {
      setTyping(false)
      setShown((n) => n + 1)
    }, pause)

    if (next.from === 'bot') {
      typingTimer = setTimeout(() => setTyping(true), Math.max(pause - 900, 250))
    }

    return () => {
      clearTimeout(showTimer)
      clearTimeout(typingTimer)
    }
  }, [shown, lines])

  const done = shown >= lines.length

  return (
    <div className={`relative mx-auto w-full max-w-md lg:mx-0 ${className}`}>
      <div className="overflow-hidden rounded-[1.4rem] border border-ink-line bg-ink-surface shadow-[0_1px_2px_rgba(22,33,31,.06),0_30px_60px_-32px_rgba(22,33,31,.55)]">
        <div className="flex items-center gap-3 border-b border-ink-line px-4 py-3.5">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
            <MessageCircle className="h-4 w-4" />
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-ink-on">
              {t.terminal.header}
            </p>
            <p className="flex items-center gap-1.5 text-xs text-ink-on/55">
              <span className="relative inline-flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              {t.terminal.status}
            </p>
          </div>
        </div>

        <div
          className="flex min-h-[19rem] flex-col justify-end gap-2.5 px-4 py-5"
          dir="rtl"
          aria-live="polite"
        >
          {lines.slice(0, shown).map((line, i) => (
            <p
              key={i}
              className={
                line.from === 'user'
                  ? 'bubble max-w-[85%] self-end rounded-2xl rounded-br-md bg-primary px-3.5 py-2.5 text-sm leading-relaxed text-primary-foreground'
                  : 'bubble max-w-[88%] self-start whitespace-pre-line rounded-2xl rounded-bl-md bg-ink-raise px-3.5 py-2.5 text-sm leading-relaxed text-ink-on'
              }
            >
              {line.text}
            </p>
          ))}

          {typing && (
            <span
              className="bubble flex w-fit gap-1 self-start rounded-2xl rounded-bl-md bg-ink-raise px-3.5 py-3"
              aria-hidden="true"
            >
              <i className="dot" />
              <i className="dot [animation-delay:.15s]" />
              <i className="dot [animation-delay:.3s]" />
            </span>
          )}
        </div>

        {/* The point of the whole thing: an appointment now exists. */}
        <div
          className={`flex items-center gap-2.5 border-t border-ink-line px-4 py-3 text-sm transition-opacity duration-500 ${
            done ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Check className="h-4 w-4 shrink-0 text-primary" />
          <span className="text-ink-on/70">{t.hero.chatCaption}</span>
        </div>
      </div>
    </div>
  )
}
