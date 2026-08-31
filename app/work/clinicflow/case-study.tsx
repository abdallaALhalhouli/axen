'use client'

import Image from 'next/image'
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, X } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { caseClinicFlow } from '@/lib/case-clinicflow'
import { WHATSAPP_NUMBER } from '@/lib/i18n'

/**
 * The rules and scope lists are the reason this page exists, so they get the
 * strongest treatment on the page — a checked list and a crossed list, both
 * plain. Everything else is the site's existing vocabulary: hairline borders,
 * mono eyebrows, no fills.
 */
export function ClinicFlowCaseStudy() {
  const { lang, dir, localePath } = useLanguage()
  const c = caseClinicFlow[lang]
  // The back arrow has to point the way the reader reads.
  const Back = dir === 'rtl' ? ArrowRight : ArrowLeft

  return (
    <article className="px-5 pb-24 pt-28 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <a
          href={`${localePath('/')}#portfolio`}
          className="inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          <Back className="h-3.5 w-3.5" />
          {c.back}
        </a>

        <header className="mt-10">
          <span className="text-xs text-muted-foreground">
            {c.eyebrow}
          </span>
          <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {c.title}
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {c.standfirst}
          </p>
        </header>

        <dl className="mt-12 grid grid-cols-2 border border-border sm:grid-cols-4">
          {c.facts.map((fact) => (
            <div
              key={fact.label}
              className="border-b border-e border-border p-5 last:border-e-0 sm:border-b-0"
            >
              <dt className="text-[11px] text-muted-foreground">
                {fact.label}
              </dt>
              <dd className="mt-2 text-sm font-medium leading-snug">{fact.value}</dd>
            </div>
          ))}
        </dl>

        {/* ── The problem ── */}
        <Section title={c.problemTitle}>
          <div className="grid gap-px border border-border bg-border sm:grid-cols-3">
            {c.problems.map((problem, i) => (
              <div key={problem.title} className="bg-background p-6">
                <span className="text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 text-base font-semibold leading-snug">
                  {problem.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {problem.body}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── The flow ── */}
        <Section title={c.flowTitle} intro={c.flowIntro}>
          <ol className="border border-border">
            {c.flow.map((item, i) => (
              <li
                key={item.step}
                className="flex flex-col gap-1 border-b border-border p-5 last:border-b-0 sm:flex-row sm:gap-6"
              >
                <div className="flex shrink-0 items-baseline gap-3 sm:w-52">
                  <span className="text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm font-semibold">
                    {item.step}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </Section>

        {/* ── Screenshots ── */}
        <Section title={c.shotsTitle}>
          <div className="space-y-10">
            {c.shots.map((shot) => (
              <figure key={shot.src}>
                <div className="relative aspect-[8/5] overflow-hidden rounded-xl border border-border bg-card">
                  <Image
                    src={shot.src}
                    alt={shot.caption}
                    fill
                    sizes="(max-width: 896px) 100vw, 896px"
                    className="object-cover object-top"
                  />
                </div>
                <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {shot.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>

        {/* ── Guarantees ── */}
        <Section title={c.rulesTitle} intro={c.rulesIntro}>
          <ul className="border border-border">
            {c.rules.map((rule) => (
              <li
                key={rule}
                className="flex items-start gap-4 border-b border-border p-5 last:border-b-0"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                <span className="text-sm leading-relaxed">{rule}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* ── Stack ── */}
        <Section title={c.stackTitle}>
          <dl className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2">
            {c.stack.map((row) => (
              <div
                key={row.label}
                className="flex items-baseline justify-between gap-4 bg-background p-5"
              >
                <dt className="text-[11px] text-muted-foreground">
                  {row.label}
                </dt>
                <dd className="text-end font-mono text-sm">{row.value}</dd>
              </div>
            ))}
          </dl>
        </Section>

        {/* ── Scope ── */}
        <Section title={c.honestTitle}>
          <ul className="space-y-3">
            {c.honest.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                <span className="text-sm leading-relaxed text-muted-foreground">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </Section>

        {/* ── CTA ── */}
        <div className="mt-24 border border-border p-8 sm:p-12">
          <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            {c.ctaTitle}
          </h2>
          <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            {c.ctaBody}
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-primary px-6 py-3.5 text-xs font-semibold text-primary-foreground transition-colors hover:bg-muted-foreground"
          >
            {c.ctaButton}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  )
}

function Section({
  title,
  intro,
  children,
}: {
  title: string
  intro?: string
  children: React.ReactNode
}) {
  return (
    <section className="mt-24">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          {intro}
        </p>
      )}
      <div className="mt-8">{children}</div>
    </section>
  )
}
