'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { AxenLogo } from '@/components/axen-logo'
import { useLanguage } from '@/components/language-provider'
import { cn } from '@/lib/utils'

export function SiteNavbar() {
  const { t, lang, otherLang, otherHref, localePath } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const home = localePath('/')
  const links = [
    { href: `${home}#services`, label: t.nav.services },
    { href: `${home}#portfolio`, label: t.nav.portfolio },
    { href: `${home}#why`, label: t.nav.why },
    { href: `${home}#contact`, label: t.nav.contact },
  ]

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-background/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link href={home} className="flex items-center gap-2.5">
          <AxenLogo className="h-7 w-7 text-foreground" />
          <span className="text-lg font-semibold tracking-[0.14em]">AXEN</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
              <span className="absolute -bottom-1.5 start-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={otherHref}
            hrefLang={otherLang}
            className="inline-flex items-center gap-1.5 border border-border px-3 py-2 text-xs font-medium text-foreground transition-colors hover:bg-secondary"
            aria-label={otherLang === 'ar' ? 'التبديل إلى العربية' : 'Switch to English'}
          >
            <span className={lang === 'en' ? 'text-foreground' : 'text-muted-foreground'}>EN</span>
            <span className="text-border">/</span>
            <span className={lang === 'ar' ? 'text-foreground' : 'text-muted-foreground'}>AR</span>
          </Link>

          <a
            href={`${home}#contact`}
            className="hidden items-center gap-1.5 bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground transition-colors hover:bg-muted-foreground sm:inline-flex"
          >
            {t.nav.cta}
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="inline-flex items-center justify-center border border-border p-2 text-foreground md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`${home}#contact`}
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center bg-primary px-4 py-3 text-xs font-semibold text-primary-foreground"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
