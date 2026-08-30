'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { dictionary, type Dict, type Lang } from '@/lib/i18n'

type LanguageContextValue = {
  lang: Lang
  dir: 'ltr' | 'rtl'
  t: Dict
  toggle: () => void
  setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')

  const dir = dictionary[lang].dir

  useEffect(() => {
    const root = document.documentElement
    root.lang = lang
    root.dir = dir
    if (lang === 'ar') {
      root.classList.add('font-arabic-active')
    } else {
      root.classList.remove('font-arabic-active')
    }
  }, [lang, dir])

  const toggle = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'))
  }, [])

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, dir, t: dictionary[lang], toggle, setLang }),
    [lang, dir, toggle],
  )

  return (
    <LanguageContext.Provider value={value}>
      <div
        key={lang}
        className={lang === 'ar' ? 'font-arabic-active animate-fade-up' : 'animate-fade-up'}
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
