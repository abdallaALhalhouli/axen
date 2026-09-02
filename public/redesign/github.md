repo: abdallaALhalhouli/MY-W
branch: main

## Last sync

date: 2026-09-02T16:12:00Z

### Updated in this project

- Added a redesigned AXEN one-pager on the Modernist system, English (`AXEN Web.dc.html`) and Arabic RTL (`AXEN Web (AR).dc.html`)
- Accent color, WhatsApp number and contact email are tweakable props on both pages
- Recreated the live AXEN one-pager as a Design Component (navbar, hero, portfolio filters, services, why-bento, contact, footer)
- Imported the real logo, project screenshots and site icon from `public/`
- Copy taken verbatim from the English dictionary in `lib/i18n.ts`
- Lucide icon geometry lifted from `lucide-icons/lucide` (the repo's icon set)

## Screen map

| Project screen | Repo files |
| --- | --- |
| AXEN Web.dc.html / AXEN Web (AR).dc.html | lib/i18n.ts (copy source), components/axen-logo.tsx, components/portfolio-section.tsx, components/services-section.tsx, public/ screenshots |
| AXEN Site (current).dc.html | app/globals.css, app/layout.tsx, app/page.tsx, components/site-navbar.tsx, components/hero-section.tsx, components/axen-logo.tsx, components/portfolio-section.tsx, components/services-section.tsx, components/why-section.tsx, components/contact-section.tsx, components/site-footer.tsx, components/language-provider.tsx, lib/i18n.ts |

## Notes

- `components/terminal-section.tsx` exists in the repo but is not mounted in `app/page.tsx` — not recreated.
- Recreation is the desktop breakpoint (≥1280px); Tailwind `sm:`/`md:` variants resolved to their desktop values.
- `public/logo.png` is dark-on-white and rendered with `filter: invert(1)`, as in `axen-logo.tsx`.
