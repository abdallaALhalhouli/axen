import type { MetadataRoute } from 'next'
import { SITE_URL, localizePath } from '@/lib/i18n'

// Required by `output: 'export'` — these are route handlers, and a static
// export has no server to run them per-request.
export const dynamic = 'force-static'

const PAGES = [
  { path: '/', priority: 1 },
  { path: '/work/clinicflow', priority: 0.8 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  // Every page is listed in both languages, each entry declaring the other
  // as its alternate so Google serves the right one per searcher.
  return PAGES.flatMap(({ path, priority }) =>
    (['en', 'ar'] as const).map((lang) => ({
      url: `${SITE_URL}${localizePath(lang, path)}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority,
      alternates: {
        languages: {
          en: `${SITE_URL}${localizePath('en', path)}`,
          ar: `${SITE_URL}${localizePath('ar', path)}`,
        },
      },
    })),
  )
}
