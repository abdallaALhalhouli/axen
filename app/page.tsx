import type { Metadata } from 'next'
import { HomePage } from '@/components/site-page'
import { alternatesFor } from '@/lib/seo'

export const metadata: Metadata = {
  alternates: alternatesFor('en', '/'),
}

export default function Page() {
  return <HomePage lang="en" />
}
