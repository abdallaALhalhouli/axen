import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/i18n'

// Required by `output: 'export'` — these are route handlers, and a static
// export has no server to run them per-request.
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
