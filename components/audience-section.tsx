'use client'

import { useLanguage } from '@/components/language-provider'
import { Reveal } from '@/components/motion'

/**
 * The case study is a clinic, so a restaurant owner reading it assumes the
 * page is not for them. This says who else it is for without weakening the
 * one story we can actually prove.
 */
export function AudienceSection() {
  const { t } = useLanguage()
  const a = t.audience

  return (
    <section className="border-t border-border px-5 py-20 sm:px-8">
      <Reveal className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <h2 className="text-balance text-2xl font-bold leading-snug sm:text-3xl">
            {a.title}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {a.body}
          </p>
        </div>

        <ul className="mt-9 flex flex-wrap gap-2.5">
          {a.items.map((item) => (
            <li
              key={item}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground/80"
            >
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-7 border-t border-border pt-6 text-sm text-muted-foreground">
          {a.other}
        </p>
      </Reveal>
    </section>
  )
}
