'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Smartphone, Tablet, Monitor, RefreshCw, Palette } from 'lucide-react'
import { AxenLogo } from '@/components/axen-logo'

type ViewMode = 'ar' | 'en' | 'current' | 'plan'
type DeviceMode = 'desktop' | 'tablet' | 'mobile'

export default function RedesignPreviewPage() {
  const [view, setView] = useState<ViewMode>('ar')
  const [device, setDevice] = useState<DeviceMode>('desktop')
  const [key, setKey] = useState(0)

  const views: { id: ViewMode; label: string; src: string }[] = [
    { id: 'ar', label: '📐 التصميم الجديد (عربي)', src: '/redesign/ar.html' },
    { id: 'en', label: '🌐 Modernist Redesign (EN)', src: '/redesign/en.html' },
    { id: 'current', label: '🎨 التصميم المعتمد (Live)', src: '/ar' },
    { id: 'plan', label: '📋 خطة الألوان والـ UI', src: '/redesign/plan.html' },
  ]

  const currentView = views.find((v) => v.id === view) || views[0]

  const widthClasses = {
    desktop: 'w-full h-full',
    tablet: 'w-[768px] h-[90vh] shadow-2xl rounded-xl border border-border overflow-hidden my-auto',
    mobile: 'w-[390px] h-[844px] shadow-2xl rounded-2xl border-4 border-foreground/20 overflow-hidden my-auto',
  }

  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden bg-[#121615] text-[#eef1ee]">
      {/* Top Navigation & Switcher Header */}
      <header className="flex h-16 shrink-0 items-center justify-between border-b border-white/10 bg-[#16211f] px-4 sm:px-6">
        <div className="flex items-center gap-4">
          <Link
            href="/ar"
            className="flex items-center gap-2 text-xs font-semibold text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">العودة للموقع الأساسي</span>
          </Link>
          <div className="h-4 w-px bg-white/20" />
          <div className="flex items-center gap-2">
            <AxenLogo className="h-5 w-5 text-[#25D366]" />
            <span className="font-bold tracking-wider text-sm hidden md:inline">AXEN DESIGN COMPARISON</span>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center gap-1 rounded-lg bg-black/30 p-1 border border-white/10">
          {views.map((v) => (
            <button
              key={v.id}
              type="button"
              onClick={() => setView(v.id)}
              className={`rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
                view === v.id
                  ? 'bg-[#0e6e63] text-white shadow-sm'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>

        {/* Device & Controls */}
        <div className="flex items-center gap-2">
          <div className="hidden lg:flex items-center gap-1 bg-black/30 p-1 rounded-lg border border-white/10">
            <button
              type="button"
              onClick={() => setDevice('desktop')}
              className={`p-1.5 rounded ${device === 'desktop' ? 'bg-white/10 text-white' : 'text-white/40'}`}
              title="Desktop"
            >
              <Monitor className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              onClick={() => setDevice('tablet')}
              className={`p-1.5 rounded ${device === 'tablet' ? 'bg-white/10 text-white' : 'text-white/40'}`}
              title="Tablet"
            >
              <Tablet className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              onClick={() => setDevice('mobile')}
              className={`p-1.5 rounded ${device === 'mobile' ? 'bg-white/10 text-white' : 'text-white/40'}`}
              title="Mobile"
            >
              <Smartphone className="h-3.5 w-3.5" />
            </button>
          </div>

          <button
            type="button"
            onClick={() => setKey((k) => k + 1)}
            className="p-1.5 rounded-lg border border-white/10 bg-white/5 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            title="Reload Frame"
          >
            <RefreshCw className="h-3.5 w-3.5" />
          </button>

          <a
            href={currentView.src}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            title="Open in Full Tab"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">نافذة كاملة</span>
          </a>
        </div>
      </header>

      {/* Frame Container */}
      <main className="relative flex flex-1 items-center justify-center overflow-auto bg-[#0a0d0c] p-0 sm:p-2">
        <div className={`transition-all duration-300 ${widthClasses[device]}`}>
          <iframe
            key={`${currentView.src}-${key}`}
            src={currentView.src}
            title={currentView.label}
            className="h-full w-full border-0 bg-white"
          />
        </div>
      </main>
    </div>
  )
}
