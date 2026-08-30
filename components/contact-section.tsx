'use client'

import { useState } from 'react'
import { MessageCircle, Mail, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { SectionHeading } from '@/components/portfolio-section'
import { WHATSAPP_NUMBER, CONTACT_EMAIL } from '@/lib/i18n'

export function ContactSection() {
  const { t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-border px-5 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-5">
          {/* Channels */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 border border-border bg-card p-6 transition-colors hover:border-foreground"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-border text-foreground">
                <MessageCircle className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 font-semibold uppercase tracking-wide">
                  {t.contact.whatsapp.title}
                  <ArrowUpRight className="h-4 w-4" />
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t.contact.whatsapp.description}
                </p>
                <span className="mt-2 inline-block text-sm font-medium text-foreground underline underline-offset-4">
                  {t.contact.whatsapp.action}
                </span>
              </div>
            </a>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group flex items-start gap-4 border border-border bg-card p-6 transition-colors hover:border-foreground"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-border text-foreground">
                <Mail className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 font-semibold uppercase tracking-wide">
                  {t.contact.email.title}
                  <ArrowUpRight className="h-4 w-4" />
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t.contact.email.description}
                </p>
                <span className="mt-2 inline-block break-all text-sm font-medium text-foreground underline underline-offset-4">
                  {CONTACT_EMAIL}
                </span>
              </div>
            </a>
          </div>

          {/* Form */}
          <div className="corner-frame border border-border bg-card p-6 sm:p-8 lg:col-span-3">
            <h3 className="text-lg font-semibold uppercase tracking-wide">
              {t.contact.form.title}
            </h3>

            {submitted ? (
              <div className="mt-8 flex flex-col items-center justify-center gap-3 border border-border bg-secondary p-10 text-center">
                <CheckCircle2 className="h-10 w-10 text-foreground" />
                <p className="font-medium">{t.contact.form.success}</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-4">
                <Field label={t.contact.form.name}>
                  <input
                    type="text"
                    required
                    placeholder={t.contact.form.namePlaceholder}
                    className="w-full border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-foreground"
                  />
                </Field>
                <Field label={t.contact.form.email}>
                  <input
                    type="email"
                    required
                    placeholder={t.contact.form.emailPlaceholder}
                    className="w-full border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-foreground"
                  />
                </Field>
                <Field label={t.contact.form.message}>
                  <textarea
                    required
                    rows={4}
                    placeholder={t.contact.form.messagePlaceholder}
                    className="w-full resize-none border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-foreground"
                  />
                </Field>
                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-2 bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-muted-foreground"
                >
                  {t.contact.form.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-foreground/90">{label}</span>
      {children}
    </label>
  )
}
