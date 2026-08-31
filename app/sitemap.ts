import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/i18n'

// Required by `output: 'export'` — these are route handlers, and a static
// export has no server to run them per-request.
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/work/clinicflow`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
