'use client'

import { Gauge, PiggyBank, Layers, MapPin, Zap } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { SectionHeading } from '@/components/portfolio-section'

export function WhySection() {
  const { t } = useLanguage()
  const c = t.why.cards

  return (
    <section id="why" className="scroll-mt-20 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow={t.why.eyebrow} title={t.why.title} />

        <div className="mt-12 grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-3 md:grid-rows-2">
          {/* Speed - large */}
          <BentoCard
            className="md:col-span-2 md:row-span-1"
            icon={<Gauge className="h-6 w-6" />}
            title={c.speed.title}
            description={c.speed.description}
          />
          {/* Stat */}
          <div className="relative flex flex-col justify-center overflow-hidden border border-foreground bg-primary p-7 text-primary-foreground md:row-span-2">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
                backgroundSize: '1.5rem 1.5rem',
              }}
            />
            <Zap className="h-7 w-7" />
            <div className="mt-4 font-mono text-5xl font-bold">
              {c.stat.value}
            </div>
            <div className="mt-2 text-sm uppercase tracking-widest opacity-70">
              {c.stat.label}
            </div>
          </div>

          <BentoCard
            icon={<PiggyBank className="h-6 w-6" />}
            title={c.bloat.title}
            description={c.bloat.description}
          />
          <BentoCard
            icon={<Layers className="h-6 w-6" />}
            title={c.scalable.title}
            description={c.scalable.description}
          />

          <BentoCard
            className="md:col-span-3"
            icon={<MapPin className="h-6 w-6" />}
            title={c.local.title}
            description={c.local.description}
          />
        </div>
      </div>
    </section>
  )
}

function BentoCard({
  icon,
  title,
  description,
  className = '',
}: {
  icon: React.ReactNode
  title: string
  description: string
  className?: string
}) {
  return (
    <div
      className={`group bg-background p-7 transition-colors hover:bg-card ${className}`}
    >
      <div className="inline-flex h-11 w-11 items-center justify-center border border-border text-foreground">
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-semibold uppercase tracking-wide">
        {title}
      </h3>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  )
}
