import type { Metadata } from 'next'
import { localizePath, type Lang } from '@/lib/i18n'

/**
 * hreflang for one canonical path. Search engines need every language of a
 * page to point at each other, plus an x-default for unmatched visitors.
 */
export function alternatesFor(lang: Lang, path: string): Metadata['alternates'] {
  return {
    canonical: localizePath(lang, path),
    languages: {
      en: localizePath('en', path),
      ar: localizePath('ar', path),
      'x-default': localizePath('en', path),
    },
  }
}
