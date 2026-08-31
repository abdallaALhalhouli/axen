import { LanguageProvider } from '@/components/language-provider'
import { SiteNavbar } from '@/components/site-navbar'
import { SiteFooter } from '@/components/site-footer'
import { ClinicFlowCaseStudy } from '@/app/work/clinicflow/case-study'
import type { Lang } from '@/lib/i18n'

/** ClinicFlow case study, rendered once per locale. */
export function ClinicFlowPageShell({ lang }: { lang: Lang }) {
  return (
    <LanguageProvider lang={lang}>
      <SiteNavbar />
      <main>
        <ClinicFlowCaseStudy />
      </main>
      <SiteFooter />
    </LanguageProvider>
  )
}
