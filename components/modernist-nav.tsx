'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { MessageCircle, Menu, X } from 'lucide-react'
import { WHATSAPP_NUMBER, CONTACT_EMAIL, getWhatsAppUrl } from '@/lib/i18n'

export function ModernistHeader({
  lang,
  isSubPage = false,
}: {
  lang: 'ar' | 'en'
  isSubPage?: boolean
}) {
  const isAr = lang === 'ar'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const homePrefix = isSubPage ? (isAr ? '/ar' : '/') : ''

  const whatsappHref = getWhatsAppUrl('hero', lang)

  const navLinks = [
    { href: `${homePrefix}#services`, label: isAr ? 'الخدمات' : 'Services', num: isAr ? '٠١' : '01' },
    { href: `${homePrefix}#work`, label: isAr ? 'أعمالنا' : 'Work', num: isAr ? '٠٢' : '02' },
    { href: `${homePrefix}#pricing`, label: isAr ? 'الأسعار' : 'Pricing', num: isAr ? '٠٣' : '03' },
    { href: `${homePrefix}#process`, label: isAr ? 'كيف نعمل' : 'Process', num: isAr ? '٠٤' : '04' },
    { href: `${homePrefix}#faq`, label: isAr ? 'أسئلة' : 'FAQ', num: isAr ? '٠٥' : '05' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-bg)] border-b-2 border-[var(--color-divider)]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10 h-[72px] sm:h-[76px] flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link href={isAr ? '/ar' : '/'} className="flex items-center gap-3 shrink-0 py-2">
          <svg viewBox="0 0 100 100" fill="none" className="h-6 w-6 text-[var(--color-text)]" aria-hidden="true">
            <path d="M50 6 L96 92 L79 92 L50 33 L21 92 L4 92 Z" fill="currentColor" />
            <path d="M50 41 L73 92 L60 92 L50 63 L40 92 L27 92 Z" fill="currentColor" />
          </svg>
          <span className="font-extrabold text-[19px] tracking-[0.34em]">AXEN</span>
        </Link>

        {/* Desktop Navigation: visible at lg (>= 1024px) to prevent tablet collision */}
        <nav className="hidden lg:flex items-center gap-7 text-[15px] font-medium">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-[var(--color-accent-700)] transition-colors py-2">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Language Switch with 44px touch target */}
          <Link
            href={isAr ? '/' : '/ar'}
            className="min-h-[44px] inline-flex items-center border border-[var(--color-divider)] px-3 py-2 text-xs sm:text-[13px] font-semibold tracking-wider hover:bg-[var(--color-surface)] transition-colors"
          >
            {isAr ? 'English' : 'العربية'}
          </Link>

          {/* Desktop WhatsApp CTA with whitespace-nowrap and brand green */}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex min-h-[44px] items-center gap-2 bg-[var(--color-whatsapp)] text-white px-5 py-2.5 text-xs sm:text-[15px] font-semibold whitespace-nowrap hover:bg-[var(--color-whatsapp-dark)] transition-colors shadow-sm"
          >
            <MessageCircle className="h-4 w-4 shrink-0" />
            <span>{isAr ? 'راسلنا على واتساب' : 'WhatsApp us'}</span>
          </a>

          {/* Mobile Menu Hamburger Button with 44x44px touch target & full ARIA */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden min-h-[44px] min-w-[44px] inline-flex items-center justify-center border border-[var(--color-divider)] p-2.5 text-[var(--color-text)] hover:bg-[var(--color-surface)] transition-colors"
            aria-label={
              mobileMenuOpen
                ? isAr
                  ? 'إغلاق القائمة'
                  : 'Close navigation menu'
                : isAr
                ? 'فتح القائمة'
                : 'Open navigation menu'
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Architectural Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="lg:hidden border-t-2 border-[var(--color-divider)] bg-[var(--color-bg)] px-6 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col divide-y divide-[var(--color-divider)]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-4 flex items-center justify-between text-base font-semibold text-[var(--color-text)] hover:text-[var(--color-accent-700)] transition-colors"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[var(--color-neutral-700)] font-mono">{link.num}</span>
              </a>
            ))}
          </nav>

          <div className="mt-6 pt-5 border-t border-[var(--color-divider)] flex flex-col gap-3">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full min-h-[48px] flex items-center justify-center gap-2.5 bg-[var(--color-whatsapp)] text-white py-3.5 text-sm font-bold hover:bg-[var(--color-whatsapp-dark)] transition-colors shadow-sm"
            >
              <MessageCircle className="h-4 w-4" />
              <span>{isAr ? 'راسلنا على واتساب' : 'Message us on WhatsApp'}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export function ModernistFooter({ lang }: { lang: 'ar' | 'en' }) {
  const isAr = lang === 'ar'
  const whatsappHref = getWhatsAppUrl('footer', lang)
  const whatsappDisplay = `+${WHATSAPP_NUMBER}`

  return (
    <footer className="border-t-2 border-[var(--color-divider)] bg-[var(--color-bg)]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[5fr_3fr_4fr] gap-10">
        <div>
          <Link href={isAr ? '/ar' : '/'} className="flex items-center gap-3">
            <svg viewBox="0 0 100 100" fill="none" className="h-6 w-6 text-[var(--color-text)]" aria-hidden="true">
              <path d="M50 6 L96 92 L79 92 L50 33 L21 92 L4 92 Z" fill="currentColor" />
              <path d="M50 41 L73 92 L60 92 L50 63 L40 92 L27 92 Z" fill="currentColor" />
            </svg>
            <span className="font-extrabold text-[17px] tracking-[0.34em]">AXEN</span>
          </Link>
          <p className="mt-4 max-w-[32ch] text-[15px] leading-[1.85] text-[var(--color-neutral-700)]">
            {isAr
              ? 'مواقع ومتاجر إلكترونية وأتمتة واتساب، تُبنى على الطلب في عمّان.'
              : 'Websites, online stores, and WhatsApp automation engineered to order in Amman.'}
          </p>
        </div>

        <div>
          <div className="text-[13px] font-bold text-[var(--color-neutral-700)]">{isAr ? 'الصفحات' : 'Navigation'}</div>
          <div className="mt-3.5 flex flex-col gap-2.5 text-[15px]">
            <a href={isAr ? '/ar#services' : '/#services'} className="hover:text-[var(--color-accent-700)] transition-colors">{isAr ? 'الخدمات' : 'Services'}</a>
            <a href={isAr ? '/ar#work' : '/#work'} className="hover:text-[var(--color-accent-700)] transition-colors">{isAr ? 'أعمالنا' : 'Work'}</a>
            <a href={isAr ? '/ar#pricing' : '/#pricing'} className="hover:text-[var(--color-accent-700)] transition-colors">{isAr ? 'الأسعار' : 'Pricing'}</a>
            <a href={isAr ? '/ar#process' : '/#process'} className="hover:text-[var(--color-accent-700)] transition-colors">{isAr ? 'كيف نعمل' : 'Process'}</a>
            <a href={isAr ? '/ar#about' : '/#about'} className="hover:text-[var(--color-accent-700)] transition-colors">{isAr ? 'من نحن' : 'About'}</a>
          </div>
        </div>

        <div>
          <div className="text-[13px] font-bold text-[var(--color-neutral-700)]">{isAr ? 'للتواصل' : 'Channels'}</div>
          <div className="mt-3.5 flex flex-col gap-2.5 text-[15px]">
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent-700)] transition-colors flex items-center gap-1.5">
              <span>{isAr ? 'واتساب — ' : 'WhatsApp — '}</span>
              <span dir="ltr" className="inline-block">{whatsappDisplay}</span>
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} dir="ltr" className="hover:text-[var(--color-accent-700)] transition-colors text-start">
              {CONTACT_EMAIL}
            </a>
            <Link href={isAr ? '/' : '/ar'} className="text-[var(--color-accent-700)] font-semibold hover:underline">
              {isAr ? 'English version' : 'النسخة العربية'}
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 pb-10">
        <div className="border-t border-[var(--color-divider)] pt-5 flex flex-col sm:flex-row justify-between gap-4 text-sm text-[var(--color-neutral-700)]">
          <span>{isAr ? '© ٢٠٢٦ AXEN — عبدالله الحلحولي' : '© 2026 AXEN — Abdalla Alhalhouli'}</span>
          <span>{isAr ? 'عمّان، الأردن' : 'Amman, Jordan'}</span>
        </div>
      </div>
    </footer>
  )
}
