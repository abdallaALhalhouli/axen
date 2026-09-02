import { ModernistPage } from '@/components/modernist-page'
import type { Lang } from '@/lib/i18n'

/** The home page. Rendered once per locale at /(en) and /ar. */
export function HomePage({ lang }: { lang: Lang }) {
  return <ModernistPage lang={lang} />
}

