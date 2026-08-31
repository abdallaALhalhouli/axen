'use client'

import { Code2, MessageSquareShare, Workflow, Check } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { SectionHeading } from '@/components/portfolio-section'

const icons = [Code2, MessageSquareShare, Workflow]

export function ServicesSection() {
  const { t } = useLanguage()

  return (
    <section
      id="services"
      className="scroll-mt-20 border-y border-border px-5 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          subtitle={t.services.subtitle}
        />

        <div className="mt-12 grid grid-cols-1 border border-border md:grid-cols-3">
          {t.services.items.map((service, i) => {
            const Icon = icons[i]
            const num = String(i + 1).padStart(2, '0')
            return (
              <div
                key={service.title}
                className="group relative flex flex-col border-b border-border p-7 transition-colors last:border-b-0 hover:bg-card md:border-b-0 md:border-e md:last:border-e-0"
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-12 w-12 items-center justify-center border border-border text-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {num}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-6 flex flex-col gap-3 border-t border-border pt-6">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2.5 text-sm text-foreground/90"
                    >
                      <Check className="h-4 w-4 shrink-0 text-foreground" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
