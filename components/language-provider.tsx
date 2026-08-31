'use client'

import { createContext, useContext, useEffect, useMemo } from 'react'
import { usePathname } from 'next/navigation'
import {
  dictionary,
  localizePath,
  canonicalPath,
  type Dict,
  type Lang,
} from '@/lib/i18n'

type LanguageContextValue = {
  lang: Lang
  dir: 'ltr' | 'rtl'
  t: Dict
  /** Prefix an app path for the active locale: '/work/x' -> '/ar/work/x'. */
  localePath: (path: string) => string
  /** The same page in the other language — a real URL, not a state toggle. */
  otherLang: Lang
  otherHref: string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

/**
 * Language comes from the route, not component state: /ar/... is Arabic and
 * everything else is English. That gives each language a crawlable URL and
 * makes the choice survive a refresh or a shared link.
 */
export function LanguageProvider({
  lang,
  children,
}: {
  lang: Lang
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const dir = dictionary[lang].dir
  const otherLang: Lang = lang === 'en' ? 'ar' : 'en'

  useEffect(() => {
    const root = document.documentElement
    root.lang = lang
    root.dir = dir
    root.classList.toggle('font-arabic-active', lang === 'ar')
  }, [lang, dir])

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      dir,
      t: dictionary[lang],
      localePath: (path: string) => localizePath(lang, path),
      otherLang,
      otherHref: localizePath(otherLang, canonicalPath(pathname || '/')),
    }),
    [lang, dir, otherLang, pathname],
  )

  return (
    <LanguageContext.Provider value={value}>
      {/* lang/dir here so the served markup is correct for this subtree even
          before the effect above touches <html>. */}
      <div
        lang={lang}
        dir={dir}
        className={lang === 'ar' ? 'font-arabic-active' : undefined}
      >
        {children}
      </div>
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return ctx
}
