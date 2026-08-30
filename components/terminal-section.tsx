'use client'

import { useEffect, useRef, useState } from 'react'
import { RotateCw, Terminal } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { SectionHeading } from '@/components/portfolio-section'
import { cn } from '@/lib/utils'

export function TerminalSection() {
  const { t } = useLanguage()
  const lines = t.terminal.lines
  const [visible, setVisible] = useState(0)
  const [running, setRunning] = useState(true)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (visible >= lines.length) {
      setRunning(false)
      return
    }
    setRunning(true)
    const delay = visible === 0 ? 600 : 1400
    const id = setTimeout(() => setVisible((v) => v + 1), delay)
    return () => clearTimeout(id)
  }, [visible, lines.length])

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth',
    })
  }, [visible])

  const replay = () => {
    setVisible(0)
    setRunning(true)
  }

  return (
    <section className="scroll-mt-20 border-t border-border px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={t.terminal.tag}
          title={t.terminal.title}
          subtitle={t.terminal.subtitle}
        />

        <div className="corner-frame mx-auto mt-12 max-w-2xl border border-border bg-card">
          {/* Terminal header */}
          <div className="flex items-center justify-between border-b border-border bg-secondary/50 px-4 py-3">
            <div className="flex items-center gap-2.5">
              <Terminal className="h-4 w-4 text-muted-foreground" />
              <span className="font-mono text-xs tracking-wider text-foreground">
                {t.terminal.header}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-foreground" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {t.terminal.status}
              </span>
            </div>
          </div>

          {/* Chat feed */}
          <div
            ref={scrollRef}
            className="flex h-[360px] flex-col gap-3 overflow-y-auto p-4 sm:p-5"
          >
            {lines.slice(0, visible).map((line, i) => (
              <TerminalLine key={i} from={line.from} text={line.text} />
            ))}

            {running && (
              <div className="flex gap-1 px-1 py-1" aria-hidden="true">
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground" />
              </div>
            )}
          </div>

          {/* Metrics footer */}
          <div className="grid grid-cols-3 divide-x divide-border border-t border-border">
            {t.terminal.metrics.map((m) => (
              <div key={m.label} className="px-3 py-3 text-center">
                <div className="font-mono text-sm font-semibold text-foreground">
                  {m.value}
                </div>
                <div className="mt-0.5 font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={replay}
            disabled={running}
            className="inline-flex items-center gap-2 border border-border px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-foreground transition-colors hover:bg-secondary disabled:opacity-40"
          >
            <RotateCw className={cn('h-4 w-4', running && 'animate-spin')} />
            {running ? t.terminal.running : t.terminal.replay}
          </button>
        </div>
      </div>
    </section>
  )
}

function TerminalLine({
  from,
  text,
}: {
  from: 'user' | 'bot' | 'system'
  text: string
}) {
  if (from === 'system') {
    return (
      <div className="animate-fade-up border border-border bg-secondary/40 px-3 py-2 font-mono text-[11px] leading-relaxed text-muted-foreground">
        <span className="text-foreground">$</span> {text}
      </div>
    )
  }

  const isUser = from === 'user'
  return (
    <div
      className={cn(
        'flex',
        isUser ? 'justify-end' : 'justify-start',
      )}
    >
      <div
        className={cn(
          // The receptionist's replies are genuinely multi-line — a service
          // list, an appointment summary — so the bubble has to keep the
          // line breaks instead of collapsing them into one run-on line.
          'animate-fade-up max-w-[85%] whitespace-pre-line px-3.5 py-2.5 text-sm leading-relaxed',
          isUser
            ? 'bg-primary text-primary-foreground'
            : 'border border-border bg-secondary text-foreground',
        )}
      >
        {text}
      </div>
    </div>
  )
}
