'use client'

import { LayoutGrid, ArrowUpRight } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

/**
 * Floating switcher letting visitors and stakeholders effortlessly toggle
 * between the Live Classic design and the Modernist Redesign.
 */
export function DesignSwitcher() {
  const { lang } = useLanguage()
  const isAr = lang === 'ar'

  return (
    <aside
      aria-label="Design Switcher"
      className="fixed bottom-5 start-5 z-50 flex items-center gap-2 rounded-full border border-border bg-card/95 px-3 py-1.5 text-xs shadow-xl backdrop-blur-md transition-all hover:scale-[1.02]"
    >
      <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
      <span className="font-medium text-foreground/80 hidden sm:inline">
        {isAr ? 'تبديل التصميم:' : 'Switch Design:'}
      </span>
      <a
        href="/redesign"
        className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 font-semibold text-primary-foreground shadow-sm transition-all hover:bg-accent-foreground"
      >
        <LayoutGrid className="h-3 w-3" />
        {isAr ? '📐 التصميم الجديد (Redesign)' : '📐 Modernist Redesign'}
        <ArrowUpRight className="h-3 w-3" />
      </a>
    </aside>
  )
}
