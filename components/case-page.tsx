import { ModernistHeader, ModernistFooter } from '@/components/modernist-nav'
import { ClinicFlowCaseStudy } from '@/app/work/clinicflow/case-study'
import type { Lang } from '@/lib/i18n'

/** ClinicFlow case study, rendered once per locale with Modernist architecture. */
export function ClinicFlowPageShell({ lang }: { lang: Lang }) {
  const isAr = lang === 'ar'
  return (
    <div
      dir={isAr ? 'rtl' : 'ltr'}
      style={{
        background: 'var(--color-bg)',
        color: 'var(--color-text)',
        fontFamily: isAr ? "'IBM Plex Sans Arabic', system-ui, sans-serif" : "'Archivo', system-ui, sans-serif",
        minHeight: '100vh',
      }}
    >
      <ModernistHeader lang={lang} isSubPage={true} />
      <main>
        <ClinicFlowCaseStudy lang={lang} />
      </main>
      <ModernistFooter lang={lang} />
    </div>
  )
}
