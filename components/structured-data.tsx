import {
  SITE_URL,
  CONTACT_EMAIL,
  WHATSAPP_NUMBER,
  INSTAGRAM_URL,
  LINKEDIN_URL,
} from '@/lib/i18n'

/**
 * Schema.org markup so search engines can render AXEN as a business —
 * name, location, phone and services — rather than an untyped page.
 * Only facts we can actually stand behind go in here.
 */
export function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#organization`,
    name: 'AXEN',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/og.png`,
    description:
      'AXEN engineers custom web platforms and autonomous WhatsApp workflows for businesses in Jordan.',
    email: CONTACT_EMAIL,
    telephone: `+${WHATSAPP_NUMBER}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Amman',
      addressCountry: 'JO',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Jordan',
    },
    knowsLanguage: ['ar', 'en'],
    sameAs: [INSTAGRAM_URL, LINKEDIN_URL].filter(Boolean),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services',
      itemListElement: [
        'Custom Web Platforms & Landing Pages',
        'WhatsApp & Instagram Automated Workflows',
        'Custom Business Logic & API Integrations',
      ].map((name) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name },
      })),
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
