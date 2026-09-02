'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, X, MessageCircle } from 'lucide-react'
import { caseClinicFlow } from '@/lib/case-clinicflow'
import { getWhatsAppUrl, type Lang } from '@/lib/i18n'

export function ClinicFlowCaseStudy({ lang = 'ar' }: { lang?: Lang }) {
  const isAr = lang === 'ar'
  const c = caseClinicFlow[lang]
  const Back = isAr ? ArrowRight : ArrowLeft
  const backHref = isAr ? '/ar#work' : '/#work'

  return (
    <article className="px-6 py-20 sm:px-10 max-w-[1280px] mx-auto">
      <div className="max-w-4xl mx-auto">
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-neutral-600)] hover:text-[var(--color-accent)] transition-colors"
        >
          <Back className="h-3.5 w-3.5" />
          {c.back}
        </Link>

        <header className="mt-10">
          <span className="text-[13px] font-bold tracking-wider text-[var(--color-accent)] uppercase">
            {c.eyebrow}
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight text-[var(--color-text)]">
            {c.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg sm:text-[19px] leading-relaxed text-[var(--color-neutral-800)]">
            {c.standfirst}
          </p>
        </header>

        {/* ── Key Metrics Grid ── */}
        <dl className="mt-12 grid grid-cols-2 border-2 border-[var(--color-divider)] sm:grid-cols-4 divide-y sm:divide-y-0 divide-x rtl:divide-x-reverse divide-[var(--color-divider)] bg-[var(--color-surface)]">
          {c.facts.map((fact) => (
            <div key={fact.label} className="p-6">
              <dt className="text-xs font-semibold text-[var(--color-neutral-600)] uppercase">
                {fact.label}
              </dt>
              <dd className="mt-2 text-lg sm:text-xl font-extrabold text-[var(--color-text)] leading-snug">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>

        {/* ── The Problem ── */}
        <Section title={c.problemTitle}>
          <div className="grid gap-px border-2 border-[var(--color-divider)] bg-[var(--color-divider)] sm:grid-cols-3">
            {c.problems.map((problem, i) => (
              <div key={problem.title} className="bg-[var(--color-bg)] p-6">
                <span className="text-xs font-mono font-bold text-[var(--color-accent)]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 text-base sm:text-lg font-bold leading-snug text-[var(--color-text)]">
                  {problem.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-neutral-800)]">
                  {problem.body}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── The Flow ── */}
        <Section title={c.flowTitle} intro={c.flowIntro}>
          <ol className="border-2 border-[var(--color-divider)] bg-[var(--color-surface)] divide-y divide-[var(--color-divider)]">
            {c.flow.map((item, i) => (
              <li
                key={item.step}
                className="flex flex-col gap-2 p-6 sm:flex-row sm:gap-6"
              >
                <div className="flex shrink-0 items-baseline gap-3 sm:w-56">
                  <span className="text-xs font-mono font-bold text-[var(--color-accent)]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-base font-bold text-[var(--color-text)]">
                    {item.step}
                  </span>
                </div>
                <p className="text-sm sm:text-[15px] leading-relaxed text-[var(--color-neutral-800)]">
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
              <figure key={shot.src} className="border-2 border-[var(--color-divider)] p-3 bg-[var(--color-surface)]">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={shot.src}
                    alt={shot.caption}
                    fill
                    sizes="(max-width: 896px) 100vw, 896px"
                    className="object-cover object-top grayscale contrast-[1.05] hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <figcaption className="mt-3 px-2 text-sm leading-relaxed text-[var(--color-neutral-700)]">
                  {shot.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>

        {/* ── Guarantees / Rules ── */}
        <Section title={c.rulesTitle} intro={c.rulesIntro}>
          <ul className="border-2 border-[var(--color-divider)] bg-[var(--color-surface)] divide-y divide-[var(--color-divider)] list-none p-0">
            {c.rules.map((rule) => (
              <li
                key={rule}
                className="flex items-start gap-4 p-5"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]" />
                <span className="text-sm sm:text-[15px] leading-relaxed text-[var(--color-text)]">{rule}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* ── Stack ── */}
        <Section title={c.stackTitle}>
          <dl className="grid grid-cols-1 gap-px border-2 border-[var(--color-divider)] bg-[var(--color-divider)] sm:grid-cols-2">
            {c.stack.map((row) => (
              <div
                key={row.label}
                className="flex items-baseline justify-between gap-4 bg-[var(--color-bg)] p-5"
              >
                <dt className="text-xs font-semibold text-[var(--color-neutral-600)] uppercase">
                  {row.label}
                </dt>
                <dd className="text-end font-mono text-xs font-bold text-[var(--color-text)]">{row.value}</dd>
              </div>
            ))}
          </dl>
        </Section>

        {/* ── Scope Boundaries ── */}
        <Section title={c.honestTitle}>
          <ul className="space-y-3 list-none p-0">
            {c.honest.map((item) => (
              <li key={item} className="flex items-start gap-3.5">
                <X className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]" />
                <span className="text-sm sm:text-[15px] leading-relaxed text-[var(--color-neutral-800)]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </Section>

        {/* ── Final Action Banner ── */}
        <div className="mt-20 border-2 border-[var(--color-divider)] p-8 sm:p-12 bg-[var(--color-surface)]">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-text)]">
            {c.ctaTitle}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--color-neutral-800)]">
            {c.ctaBody}
          </p>
          <a
            href={getWhatsAppUrl('clinicflow', lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2.5 bg-[var(--color-accent)] px-7 py-4 text-sm font-bold text-[var(--color-bg)] hover:bg-[var(--color-accent-600)] transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            <span>{c.ctaButton}</span>
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
    <section className="mt-20">
      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--color-text)]">
        {title}
      </h2>
      {intro && (
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--color-neutral-800)]">
          {intro}
        </p>
      )}
      <div className="mt-7">{children}</div>
    </section>
  )
}
