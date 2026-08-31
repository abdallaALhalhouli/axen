'use client'

import { MessageCircle, Mail } from 'lucide-react'
import { AxenLogo } from '@/components/axen-logo'
import { InstagramIcon, LinkedinIcon } from '@/components/brand-icons'
import { useLanguage } from '@/components/language-provider'
import {
  WHATSAPP_NUMBER,
  CONTACT_EMAIL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
} from '@/lib/i18n'

export function SiteFooter() {
  const { t } = useLanguage()

  const links = [
    { href: '/#services', label: t.nav.services },
    { href: '/#portfolio', label: t.nav.portfolio },
    { href: '/#why', label: t.nav.why },
    { href: '/#contact', label: t.nav.contact },
  ]

  // Profiles with no URL configured yet are dropped rather than rendered as
  // dead '#' links.
  const socials = [
    { href: `https://wa.me/${WHATSAPP_NUMBER}`, label: 'WhatsApp', Icon: MessageCircle },
    { href: `mailto:${CONTACT_EMAIL}`, label: 'Email', Icon: Mail },
    { href: INSTAGRAM_URL, label: 'Instagram', Icon: InstagramIcon },
    { href: LINKEDIN_URL, label: 'LinkedIn', Icon: LinkedinIcon },
  ].filter((s) => s.href)

  return (
    <footer className="border-t border-border px-5 py-14 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2.5">
              <AxenLogo className="h-8 w-8 text-foreground" />
              <span className="text-lg font-semibold tracking-[0.35em]">
                AXEN
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/70">
              {t.footer.linksTitle}
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/70">
              {t.footer.socialTitle}
            </h4>
            <div className="mt-4 flex gap-3">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/50 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AXEN. {t.footer.rights}
          </p>
          <p className="text-sm font-medium text-foreground/80">
            {t.footer.madeIn}
          </p>
        </div>
      </div>
    </footer>
  )
}
