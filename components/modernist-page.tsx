'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  MessageCircle,
  ArrowUpRight,
  Check,
  RotateCw,
  Code2,
  Workflow,
  MessageSquareShare,
  Mail,
  CheckCircle2,
} from 'lucide-react'
import { WHATSAPP_NUMBER, CONTACT_EMAIL, getWhatsAppUrl } from '@/lib/i18n'
import { ModernistHeader, ModernistFooter } from '@/components/modernist-nav'

export function ModernistPage({ lang }: { lang: 'ar' | 'en' }) {
  const isAr = lang === 'ar'
  const dir = isAr ? 'rtl' : 'ltr'

  // Terminal Simulator State
  const terminalScript = isAr
    ? [
        { from: 'user', label: 'العميل · واتساب', text: 'مرحبا، بدي اطلب 2 شاورما دجاج و كولا', dir: 'rtl' },
        { from: 'bot', label: 'وكيل AXEN', text: 'تم استلام الطلب: ٢× شاورما دجاج + ١× كولا. المجموع ٦.٥٠ دينار. تأكيد التوصيل إلى عبدون؟ (نعم/لا)', dir: 'rtl' },
        { from: 'user', label: 'العميل · واتساب', text: 'نعم اكيد', dir: 'rtl' },
        { from: 'bot', label: 'وكيل AXEN', text: 'تم التأكيد. الطلب #A-2481 قيد التوصيل. الوقت المتوقع ٢٥ دقيقة. جارٍ المزامنة…', dir: 'rtl' },
        { from: 'system', label: 'النظام', text: 'DB WRITE → orders[A-2481] status=confirmed · synced in 240ms', dir: 'ltr' },
      ]
    : [
        { from: 'user', label: 'Customer · WhatsApp', text: 'Hi, I would like to order 2 chicken shawarma and a Coke', dir: 'ltr' },
        { from: 'bot', label: 'AXEN Agent', text: 'Order received: 2× chicken shawarma + 1× Coke. Total JD 6.50. Confirm delivery to Abdoun? (yes/no)', dir: 'ltr' },
        { from: 'user', label: 'Customer · WhatsApp', text: 'Yes confirm', dir: 'ltr' },
        { from: 'bot', label: 'AXEN Agent', text: 'Confirmed. Order #A-2481 is in delivery. ETA 25 minutes. Syncing…', dir: 'ltr' },
        { from: 'system', label: 'System', text: 'DB WRITE → orders[A-2481] status=confirmed · synced in 240ms', dir: 'ltr' },
      ]

  const [shown, setShown] = useState(0)
  const [running, setRunning] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const terminalRef = useRef<HTMLElement>(null)

  // Trigger terminal simulation when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true)
          setRunning(true)
        }
      },
      { threshold: 0.25 }
    )
    if (terminalRef.current) {
      observer.observe(terminalRef.current)
    }
    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!running) return
    if (shown >= terminalScript.length) {
      setRunning(false)
      return
    }
    const timer = setTimeout(() => {
      setShown((s) => s + 1)
    }, 1100)
    return () => clearTimeout(timer)
  }, [running, shown, terminalScript.length])

  const replay = () => {
    setShown(0)
    setRunning(true)
  }

  // Contact Form State
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', biz: '', msg: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = isAr
      ? `طلب استشارة من موقع AXEN:\nالاسم: ${formData.name}\nالمشروع: ${formData.biz}\nالتفاصيل: ${formData.msg}`
      : `Consultation request from AXEN website:\nName: ${formData.name}\nBusiness: ${formData.biz}\nDetails: ${formData.msg}`
    const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
    window.open(link, '_blank')
    setSubmitted(true)
  }

  const whatsappHref = getWhatsAppUrl('hero', lang)
  const whatsappDisplay = `+${WHATSAPP_NUMBER}`

  return (
    <div
      dir={dir}
      style={{
        background: 'var(--color-bg)',
        color: 'var(--color-text)',
        fontFamily: isAr ? 'var(--font-arabic)' : 'var(--font-heading)',
        minHeight: '100vh',
      }}
    >
      {/* ── HEADER ── */}
      <ModernistHeader lang={lang} />

      {/* ── HERO ── */}
      <section id="top" className="scroll-mt-20 border-b-2 border-[var(--color-divider)]">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-[7fr_5fr]">
          <div className="py-16 sm:py-24 lg:py-28 pe-0 lg:pe-14">
            <div className="text-[13px] font-bold tracking-widest uppercase text-[var(--color-accent-700)]">
              {isAr ? 'عمّان، الأردن — برمجيات تُبنى على الطلب' : 'Amman, Jordan — software built to order'}
            </div>
            <h1 className="mt-6 font-extrabold text-4xl sm:text-5xl lg:text-[58px] leading-[1.12] tracking-tight max-w-[18ch]">
              {isAr ? 'نبني النظام الذي يشتغل عليه عملك.' : 'We build the software your business runs on.'}
            </h1>
            <p className="mt-7 max-w-[50ch] text-lg sm:text-[19px] leading-[1.8] text-[var(--color-neutral-800)]">
              {isAr
                ? 'مواقع، متاجر إلكترونية، وأتمتة واتساب — مكتوبة من الصفر لعمل واحد في كل مرة. تتكلم مباشرة مع المهندس الذي يكتب الكود، من أول مكالمة حتى التسليم.'
                : 'Websites, online stores, and WhatsApp automation — written from scratch for one business at a time. You talk to the engineer who writes the code, from the first call to handover.'}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center gap-2.5 bg-[var(--color-whatsapp)] text-white px-6 py-3.5 text-[16px] font-semibold hover:bg-[var(--color-whatsapp-dark)] transition-colors shadow-sm"
              >
                <MessageCircle className="h-4 w-4" />
                <span>{isAr ? 'راسلنا على واتساب' : 'Message us on WhatsApp'}</span>
              </a>
              <a
                href="#terminal"
                className="inline-flex min-h-[48px] items-center border border-[var(--color-divider)] px-6 py-3.5 text-[16px] font-medium text-[var(--color-text)] hover:bg-[var(--color-surface)] transition-colors"
              >
                {isAr ? 'شاهد طلبًا يُغلق نفسه' : 'See a real order close itself'}
              </a>
            </div>
          </div>

          <div className="hidden lg:grid border-s-2 border-[var(--color-divider)] bg-[var(--color-surface)] place-items-center p-14">
            <Image
              src="/axen-lockup.webp"
              alt="AXEN"
              width={340}
              height={340}
              className="w-full max-w-[300px] mix-blend-multiply object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── METRICS BAR (4 Columns Aligned) ── */}
      <section className="border-b-2 border-[var(--color-divider)]">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 divide-x rtl:divide-x-reverse divide-[var(--color-divider)]">
          <div className="p-6 sm:p-7">
            <div className="font-extrabold text-2xl sm:text-[28px]">{isAr ? '٢–٤ أسابيع' : '2–4 weeks'}</div>
            <div className="mt-2 text-sm text-[var(--color-neutral-700)]">
              {isAr ? 'من الفكرة إلى الإطلاق' : 'From brief to live'}
            </div>
          </div>
          <div className="p-6 sm:p-7">
            <div className="font-extrabold text-2xl sm:text-[28px]">{isAr ? 'مهندس واحد' : 'One engineer'}</div>
            <div className="mt-2 text-sm text-[var(--color-neutral-700)]">
              {isAr ? 'عبدالله — من التخطيط للتسليم' : 'Abdalla — planning to delivery'}
            </div>
          </div>
          <div className="p-6 sm:p-7 border-t lg:border-t-0 border-[var(--color-divider)]">
            <div className="font-extrabold text-2xl sm:text-[28px]">ClinicFlow</div>
            <div className="mt-2 text-sm text-[var(--color-neutral-700)]">
              {isAr ? 'نظامنا الخاص، يعمل اليوم' : 'Our own system, running today'}
            </div>
          </div>
          <div className="p-6 sm:p-7 border-t lg:border-t-0 border-[var(--color-divider)]">
            <div className="font-extrabold text-2xl sm:text-[28px]">{isAr ? 'الكود ملكك' : 'You own it'}</div>
            <div className="mt-2 text-sm text-[var(--color-neutral-700)]">
              {isAr ? 'يُسلَّم لك بالكامل' : 'Source code handed over'}
            </div>
          </div>
        </div>
      </section>

      {/* ── 01 TERMINAL (Live Workflow Simulation) ── */}
      <section id="terminal" ref={terminalRef} className="scroll-mt-20 bg-[#201e1d] text-[#f3f2f2] border-b-2 border-[var(--color-divider)]">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 py-20 grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-14">
          <div>
            <div className="text-[13px] font-bold tracking-wider uppercase text-[#ec3013]">
              {isAr ? '٠١ — سير عمل حقيقي' : '01 — Live workflow'}
            </div>
            <h2 className="mt-5 font-bold text-3xl sm:text-4xl lg:text-[40px] leading-[1.25] text-[#f3f2f2]">
              {isAr ? 'طلب حقيقي، يُغلق بدونك.' : 'A real order, closed without you.'}
            </h2>
            <p className="mt-5 text-base sm:text-[17px] leading-[1.9] text-[#bab6b6]">
              {isAr
                ? 'العميل يكتب بالعربي. النظام يفهم، يحسب السعر، يؤكّد العنوان، ويكتب الطلب في قاعدة البيانات. بلا قوائم خيارات، بلا «اضغط ١»، وبلا موظف يردّ عند منتصف الليل.'
                : 'A customer writes in Arabic. The system reads it, prices it, confirms the address, and writes the order to the database. No menu trees, no “press 1”, no staff typing replies at midnight.'}
            </p>
            <ul className="mt-6 p-0 list-none">
              <li className="border-t border-[#444141] py-3.5 text-[15px] flex justify-between gap-4">
                <span className="text-[#bab6b6]">
                  {isAr ? 'يفهم العربية والعامية والعربيزي' : 'Reads Arabic, dialect and Arabizi'}
                </span>
                <span className="text-[#f3f2f2] font-semibold">{isAr ? 'نعم' : 'Yes'}</span>
              </li>
              <li className="border-t border-[#444141] py-3.5 text-[15px] flex justify-between gap-4">
                <span className="text-[#bab6b6]">
                  {isAr ? 'يكتب في قاعدة بياناتك أو جدولك' : 'Writes to your database or sheet'}
                </span>
                <span className="text-[#f3f2f2] font-semibold">{isAr ? 'نعم' : 'Yes'}</span>
              </li>
              <li className="border-t border-b border-[#444141] py-3.5 text-[15px] flex justify-between gap-4">
                <span className="text-[#bab6b6]">
                  {isAr ? 'يحوّل المحادثة لك عند الطلب' : 'Hands over to a human on request'}
                </span>
                <span className="text-[#f3f2f2] font-semibold">{isAr ? 'نعم' : 'Yes'}</span>
              </li>
            </ul>
            <button
              type="button"
              onClick={replay}
              className="mt-7 inline-flex items-center gap-2 bg-[#ec3013] text-[#f3f2f2] px-5 py-3.5 text-[15px] font-semibold hover:bg-[#dd2b0f] transition-colors"
            >
              <RotateCw className="h-4 w-4" />
              <span>{running ? (isAr ? 'جارٍ التشغيل…' : 'Running…') : (isAr ? 'أعد المحاكاة' : 'Replay simulation')}</span>
            </button>
          </div>

          <div className="border border-[#444141] bg-[#1a1817] flex flex-col min-h-[460px]">
            <div className="flex items-center gap-3 p-4 border-b border-[#444141]">
              <span className="w-2 h-2 rounded-full bg-[#ec3013] animate-pulse" />
              <span className="text-[13px] font-medium text-[#f3f2f2]">
                {isAr ? 'AXEN · وكيل آلي' : 'AXEN · automated agent'}
              </span>
              <span className="ms-auto text-xs text-[#9b9797]">WhatsApp Cloud API</span>
            </div>

            <div className="flex-1 p-5 flex flex-col gap-3.5 overflow-y-auto">
              {terminalScript.slice(0, shown).map((line, i) => {
                const isUser = line.from === 'user'
                const isSystem = line.from === 'system'
                return (
                  <div key={i} className={`flex ${isUser ? 'justify-start' : isSystem ? 'justify-start' : 'justify-end'}`}>
                    <div
                      className={`max-w-[85%] sm:max-w-[78%] p-3 text-[15px] leading-relaxed border ${
                        isUser
                          ? 'border-[#444141] bg-transparent text-[#eae7e7]'
                          : isSystem
                          ? 'border-[#ec3013] bg-transparent text-[#ff9783] font-mono text-xs'
                          : 'border-transparent bg-[#f3f2f2] text-[#201e1d] font-medium'
                      }`}
                      style={{ direction: line.dir as any }}
                    >
                      <div className="text-[11px] opacity-60 mb-1">{line.label}</div>
                      {line.text}
                    </div>
                  </div>
                )
              })}

              <div className="flex items-center gap-2 text-[13px] text-[#9b9797] mt-2">
                <span className="inline-block w-2 h-4 bg-[#ec3013] animate-pulse" />
                <span>
                  {shown >= terminalScript.length
                    ? isAr
                      ? 'أُغلق الطلب · بلا تدخّل بشري'
                      : 'Order closed · Zero human input'
                    : isAr
                    ? 'الوكيل يستمع…'
                    : 'Agent listening…'}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 border-t border-[#444141] text-center divide-x rtl:divide-x-reverse divide-[#444141]">
              <div className="p-3.5">
                <div className="font-extrabold text-lg text-[#f3f2f2]">1.4s</div>
                <div className="text-xs text-[#9b9797]">{isAr ? 'متوسط الرد' : 'Avg response'}</div>
              </div>
              <div className="p-3.5">
                <div className="font-extrabold text-lg text-[#f3f2f2]">OK</div>
                <div className="text-xs text-[#9b9797]">{isAr ? 'مزامنة القاعدة' : 'DB sync'}</div>
              </div>
              <div className="p-3.5">
                <div className="font-extrabold text-lg text-[#f3f2f2]">{isAr ? '٠' : '0'}</div>
                <div className="text-xs text-[#9b9797]">{isAr ? 'تدخّل بشري' : 'Human input'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02 SERVICES ── */}
      <section id="services" className="scroll-mt-20 border-b-2 border-[var(--color-divider)]">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 pt-20">
          <div className="text-[13px] font-bold tracking-wider uppercase text-[var(--color-accent-700)]">
            {isAr ? '٠٢ — الخدمات' : '02 — Services'}
          </div>
          <h2 className="mt-5 font-bold text-3xl sm:text-4xl lg:text-[40px] leading-[1.25] max-w-[24ch]">
            {isAr ? 'ثلاث خدمات. خُذ واحدة أو الثلاث.' : 'Three services. Commission one or all three.'}
          </h2>
          <p className="mt-4 mb-10 max-w-[56ch] text-[17px] leading-[1.85] text-[var(--color-neutral-800)]">
            {isAr
              ? 'كل عمل يُسعَّر بعد مكالمة قصيرة، فتعرف النطاق والسعر قبل أن يبدأ أي شيء.'
              : 'Every project is quoted after a short call, so you know the scope and price before anything starts.'}
          </p>
        </div>

        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 pb-20 grid grid-cols-1 md:grid-cols-3 border-t-2 border-[var(--color-divider)] divide-y md:divide-y-0 md:divide-x rtl:md:divide-x-reverse divide-[var(--color-divider)]">
          {/* Service 1 */}
          <div className="py-8 md:pe-8">
            <div className="flex items-baseline justify-between gap-4">
              <Code2 className="h-6 w-6 text-[var(--color-text)]" />
              <span className="font-bold text-sm text-[var(--color-neutral-700)]">{isAr ? '٠١' : '01'}</span>
            </div>
            <h3 className="mt-5 font-bold text-[23px] leading-[1.35]">
              {isAr ? 'مواقع ومتاجر إلكترونية' : 'Websites & Online Stores'}
            </h3>
            <p className="mt-3 text-[15px] leading-[1.9] text-[var(--color-neutral-800)]">
              {isAr
                ? 'موقع يفتح بسرعة، يُقرأ جيدًا بالعربي والإنجليزي، ويبيع. مبني صفحة صفحة، لا مسحوب من قالب.'
                : 'Fast sites that load in under a second, read perfectly in Arabic and English, and sell. Built page by page, not exported from templates.'}
            </p>
            <ul className="mt-5 pt-5 list-none border-t border-[var(--color-divider)] flex flex-col gap-3 text-[15px] p-0">
              <li className="flex gap-2.5 items-start">
                <Check className="h-4 w-4 text-[var(--color-accent-700)] mt-1 shrink-0" />
                <span>{isAr ? 'صفحات المنتجات والسلة والدفع' : 'Product catalog, cart, and checkout'}</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <Check className="h-4 w-4 text-[var(--color-accent-700)] mt-1 shrink-0" />
                <span>{isAr ? 'عربي وإنجليزي، الاثنان بنفس الجودة' : 'Bilingual RTL & LTR first-class'}</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <Check className="h-4 w-4 text-[var(--color-accent-700)] mt-1 shrink-0" />
                <span>{isAr ? 'تستلم الكود والمستودع بالكامل' : 'Full source code & repository handover'}</span>
              </li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="py-8 md:px-8">
            <div className="flex items-baseline justify-between gap-4">
              <MessageSquareShare className="h-6 w-6 text-[var(--color-text)]" />
              <span className="font-bold text-sm text-[var(--color-neutral-700)]">{isAr ? '٠٢' : '02'}</span>
            </div>
            <h3 className="mt-5 font-bold text-[23px] leading-[1.35]">
              {isAr ? 'ردود واتساب وإنستغرام' : 'WhatsApp & Instagram Automation'}
            </h3>
            <p className="mt-3 text-[15px] leading-[1.9] text-[var(--color-neutral-800)]">
              {isAr
                ? 'طلبات ومواعيد وأسئلة تُجاب في ثوانٍ، بلهجة العميل نفسها. ويحوّل المحادثة لك في أي لحظة تحتاج إنسانًا.'
                : 'Orders, appointments, and inquiries answered in seconds, in the customer’s dialect. Smooth handoff to a human whenever needed.'}
            </p>
            <ul className="mt-5 pt-5 list-none border-t border-[var(--color-divider)] flex flex-col gap-3 text-[15px] p-0">
              <li className="flex gap-2.5 items-start">
                <Check className="h-4 w-4 text-[var(--color-accent-700)] mt-1 shrink-0" />
                <span>{isAr ? 'يأخذ الطلب أو الموعد من أوله لآخره' : 'Handles complete orders and bookings'}</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <Check className="h-4 w-4 text-[var(--color-accent-700)] mt-1 shrink-0" />
                <span>{isAr ? 'يرسل التذكيرات والمتابعات تلقائيًا' : 'Automated follow-ups & reminders'}</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <Check className="h-4 w-4 text-[var(--color-accent-700)] mt-1 shrink-0" />
                <span>{isAr ? 'واجهة واتساب الرسمية (Cloud API)' : 'Official Meta WhatsApp Cloud API'}</span>
              </li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="py-8 md:ps-8">
            <div className="flex items-baseline justify-between gap-4">
              <Workflow className="h-6 w-6 text-[var(--color-text)]" />
              <span className="font-bold text-sm text-[var(--color-neutral-700)]">{isAr ? '٠٣' : '03'}</span>
            </div>
            <h3 className="mt-5 font-bold text-[23px] leading-[1.35]">
              {isAr ? 'أنظمة تربط أدواتك' : 'Systems Connecting Your Tools'}
            </h3>
            <p className="mt-3 text-[15px] leading-[1.9] text-[var(--color-neutral-800)]">
              {isAr
                ? 'المواعيد والمخزون والفواتير والجداول في مكان واحد بدل أربعة. إن كان له واجهة برمجية، يمكن ربطه.'
                : 'Appointments, inventory, invoicing, and sheets in one place instead of four. If it has an API, it connects.'}
            </p>
            <ul className="mt-5 pt-5 list-none border-t border-[var(--color-divider)] flex flex-col gap-3 text-[15px] p-0">
              <li className="flex gap-2.5 items-start">
                <Check className="h-4 w-4 text-[var(--color-accent-700)] mt-1 shrink-0" />
                <span>{isAr ? 'لوحات يقرأها موظفوك بلا تدريب' : 'Intuitive dashboards with zero staff training'}</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <Check className="h-4 w-4 text-[var(--color-accent-700)] mt-1 shrink-0" />
                <span>{isAr ? 'مزامنة الجداول وقواعد البيانات' : 'Two-way database & Google Sheets sync'}</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <Check className="h-4 w-4 text-[var(--color-accent-700)] mt-1 shrink-0" />
                <span>{isAr ? 'صلاحيات، فكل شخص يرى ما يخصّه' : 'Granular role-based access control'}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── 03 SELECTED WORK ── */}
      <section id="work" className="scroll-mt-20 border-b-2 border-[var(--color-divider)]">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 py-20">
          <div className="text-[13px] font-bold tracking-wider uppercase text-[var(--color-accent-700)]">
            {isAr ? '٠٣ — أعمالنا' : '03 — Selected Work'}
          </div>
          <h2 className="mt-5 font-bold text-3xl sm:text-4xl lg:text-[40px] leading-[1.25]">
            {isAr ? 'ما بنيناه حتى الآن.' : 'What we have built so far.'}
          </h2>
          <p className="mt-4 mb-10 max-w-[56ch] text-[17px] leading-[1.85] text-[var(--color-neutral-800)]">
            {isAr
              ? 'ClinicFlow نظامنا الخاص، يعمل ويُستخدم اليوم. والباقي أنظمة من نفس البنية — اسألنا على واتساب ونشرح لك أيًّا منها.'
              : 'ClinicFlow is our proprietary system, live and in production today. The others are built on the same architecture.'}
          </p>

          {/* Featured Hero Project: ClinicFlow with REAL screenshot */}
          <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] border-2 border-[var(--color-divider)]">
            <figure className="m-0 aspect-[16/10] overflow-hidden bg-[var(--color-surface)]">
              <Image
                src="/projects/clinicflow-dashboard.webp"
                alt="ClinicFlow Dashboard"
                width={800}
                height={500}
                className="w-full h-full object-cover grayscale-[0.35] sm:grayscale hover:grayscale-0 transition-all duration-500"
              />
            </figure>
            <div className="p-8 sm:p-9 border-t lg:border-t-0 lg:border-s-2 border-[var(--color-divider)] flex flex-col bg-[var(--color-surface)]">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="border border-[var(--color-accent-700)] text-[var(--color-accent-700)] text-xs px-2.5 py-1 font-semibold">
                  {isAr ? 'نظامنا الخاص' : 'Proprietary Platform'}
                </span>
                <span className="bg-[#f8f4f4] text-[var(--color-text)] text-xs px-2.5 py-1 font-semibold">
                  {isAr ? 'يعمل اليوم' : 'Live in Production'}
                </span>
              </div>
              <h3 className="mt-5 font-bold text-2xl sm:text-[30px]">ClinicFlow</h3>
              <p className="mt-3.5 text-[15px] leading-[1.9] text-[var(--color-neutral-800)]">
                {isAr
                  ? 'إدارة مواعيد العيادات وأتمتة واتساب — مكتوب من الصفر ويعمل كخدمة جاهزة. المريض يحجز ويستلم التذكير على واتساب، والعيادة ترى تقويمًا واحدًا.'
                  : 'Clinic appointment management and WhatsApp automation — written from scratch and running as a ready service. Patients book and receive reminders on WhatsApp; the clinic sees one unified calendar.'}
              </p>
              <div className="mt-auto pt-6 flex flex-wrap gap-2">
                <span className="bg-[#f8f4f4] text-xs px-2.5 py-1">{isAr ? 'المواعيد' : 'Bookings'}</span>
                <span className="bg-[#f8f4f4] text-xs px-2.5 py-1">{isAr ? 'تذكيرات واتساب' : 'WhatsApp Reminders'}</span>
                <span className="bg-[#f8f4f4] text-xs px-2.5 py-1">{isAr ? 'صلاحيات الموظفين' : 'Staff Roles'}</span>
                <span className="bg-[#f8f4f4] text-xs px-2.5 py-1">{isAr ? 'عربي أولًا' : 'Arabic First'}</span>
              </div>
              <div className="mt-6 pt-5 border-t border-[var(--color-divider)]">
                <Link
                  href={isAr ? '/ar/work/clinicflow' : '/work/clinicflow'}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--color-accent-700)] hover:underline"
                >
                  <span>{isAr ? 'اقرأ دراسة الحالة الكاملة' : 'Read Full Case Study'}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* 3 Grid Project Cards */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="border-2 border-[var(--color-divider)] flex flex-col bg-[var(--color-surface)]">
              <figure className="m-0 aspect-[16/10] overflow-hidden border-b-2 border-[var(--color-divider)] bg-[var(--color-surface)]">
                <Image
                  src="/projects/whatsapp-automation.webp"
                  alt="WhatsApp Automation"
                  width={400}
                  height={250}
                  className="w-full h-full object-cover grayscale-[0.35] sm:grayscale hover:grayscale-0 transition-all duration-500"
                />
              </figure>
              <div className="p-6 flex flex-col flex-1">
                <h4 className="m-0 font-bold text-[19px] leading-[1.4]">
                  {isAr ? 'مساعد الطلبات على واتساب' : 'WhatsApp Order Assistant'}
                </h4>
                <p className="mt-2.5 text-sm leading-[1.85] text-[var(--color-neutral-800)]">
                  {isAr
                    ? 'يأخذ الطلب، يحسب السعر، يؤكّد العنوان، ويكتبه في قاعدة البيانات.'
                    : 'Takes the order, calculates the total, validates delivery location, and writes to database.'}
                </p>
                <div className="mt-auto pt-4 flex flex-wrap gap-1.5">
                  <span className="bg-[#f8f4f4] text-[11px] px-2 py-0.5">WhatsApp API</span>
                  <span className="bg-[#f8f4f4] text-[11px] px-2 py-0.5">Python</span>
                </div>
              </div>
            </article>

            <article className="border-2 border-[var(--color-divider)] flex flex-col bg-[var(--color-surface)]">
              <figure className="m-0 aspect-[16/10] overflow-hidden border-b-2 border-[var(--color-divider)] bg-[var(--color-surface)]">
                <Image
                  src="/projects/ecommerce-site.webp"
                  alt="E-Commerce"
                  width={400}
                  height={250}
                  className="w-full h-full object-cover grayscale-[0.35] sm:grayscale hover:grayscale-0 transition-all duration-500"
                />
              </figure>
              <div className="p-6 flex flex-col flex-1">
                <h4 className="m-0 font-bold text-[19px] leading-[1.4]">
                  {isAr ? 'متجر إلكتروني' : 'E-Commerce Storefront'}
                </h4>
                <p className="mt-2.5 text-sm leading-[1.85] text-[var(--color-neutral-800)]">
                  {isAr
                    ? 'صفحات منتجات وسلة ودفع، بزمن تحميل أقل من ثانية وبلا إضافات متراكمة.'
                    : 'Product pages, cart, and checkout with sub-second loads and zero plugin bloat.'}
                </p>
                <div className="mt-auto pt-4 flex flex-wrap gap-1.5">
                  <span className="bg-[#f8f4f4] text-[11px] px-2 py-0.5">Next.js</span>
                  <span className="bg-[#f8f4f4] text-[11px] px-2 py-0.5">Stripe</span>
                </div>
              </div>
            </article>

            <article className="border-2 border-[var(--color-divider)] flex flex-col bg-[var(--color-surface)]">
              <figure className="m-0 aspect-[16/10] overflow-hidden border-b-2 border-[var(--color-divider)] bg-[var(--color-surface)]">
                <Image
                  src="/projects/api-integration.webp"
                  alt="API Integration"
                  width={400}
                  height={250}
                  className="w-full h-full object-cover grayscale-[0.35] sm:grayscale hover:grayscale-0 transition-all duration-500"
                />
              </figure>
              <div className="p-6 flex flex-col flex-1">
                <h4 className="m-0 font-bold text-[19px] leading-[1.4]">
                  {isAr ? 'ربط الجداول وأنظمة العملاء' : 'Sheets & CRM Integrations'}
                </h4>
                <p className="mt-2.5 text-sm leading-[1.85] text-[var(--color-neutral-800)]">
                  {isAr
                    ? 'سير واحد يربط الجداول ونظام العملاء وقاعدة البيانات، فلا يُعيد أحد الكتابة.'
                    : 'A single pipeline linking spreadsheets, CRM, and databases so nobody retypes anything.'}
                </p>
                <div className="mt-auto pt-4 flex flex-wrap gap-1.5">
                  <span className="bg-[#f8f4f4] text-[11px] px-2 py-0.5">REST API</span>
                  <span className="bg-[#f8f4f4] text-[11px] px-2 py-0.5">PostgreSQL</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── 04 PRICING ── */}
      <section id="pricing" className="scroll-mt-20 border-b-2 border-[var(--color-divider)]">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 pt-20">
          <div className="text-[13px] font-bold tracking-wider uppercase text-[var(--color-accent-700)]">
            {isAr ? '٠٤ — الأسعار' : '04 — Pricing'}
          </div>
          <h2 className="mt-5 font-bold text-3xl sm:text-4xl lg:text-[40px] leading-[1.25] max-w-[24ch]">
            {isAr ? 'ثلاث طرق للدفع. اختر ما يناسبك.' : 'Three commercial models. Choose what fits.'}
          </h2>
          <p className="mt-4 mb-10 max-w-[56ch] text-[17px] leading-[1.85] text-[var(--color-neutral-800)]">
            {isAr
              ? 'الرقم النهائي يعتمد على النطاق، وتستلمه مكتوبًا بعد مكالمة ١٥ دقيقة — قبل أن يبدأ العمل.'
              : 'The final number depends on scope, delivered in writing after a 15-minute call — before any work begins.'}
          </p>
        </div>

        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 pb-20 grid grid-cols-1 md:grid-cols-3 border-t-2 border-[var(--color-divider)] divide-y md:divide-y-0 md:divide-x rtl:md:divide-x-reverse divide-[var(--color-divider)]">
          {/* Plan 1 */}
          <div className="py-8 md:pe-8 flex flex-col">
            <div className="text-[13px] font-semibold text-[var(--color-neutral-700)]">
              {isAr ? 'جاهز للاستخدام' : 'Ready to deploy'}
            </div>
            <h3 className="mt-3.5 font-bold text-[26px]">ClinicFlow</h3>
            <div className="mt-3 font-bold text-[20px]">{isAr ? 'اشتراك شهري' : 'Monthly subscription'}</div>
            <p className="mt-3 text-[15px] leading-[1.9] text-[var(--color-neutral-800)]">
              {isAr
                ? 'للعيادات التي تريد النظام الجاهز. يُشغَّل خلال أيام، لا أسابيع.'
                : 'For clinics needing the turn-key receptionist. Deployed in days, not weeks.'}
            </p>
            <ul className="mt-5 pt-5 border-t border-[var(--color-divider)] list-none flex flex-col gap-3 text-[15px] p-0">
              <li>{isAr ? 'المواعيد وملفات المرضى' : 'Appointments & patient records'}</li>
              <li>{isAr ? 'الحجز والتذكير على واتساب' : 'WhatsApp booking & automated reminders'}</li>
              <li>{isAr ? 'الاستضافة والتحديثات والدعم' : 'Managed hosting, updates, and support'}</li>
            </ul>
            <a
              href={getWhatsAppUrl('clinicflow', lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 block text-center border border-[var(--color-divider)] p-3.5 text-[15px] font-semibold text-[var(--color-text)] hover:bg-[var(--color-surface)] transition-colors"
            >
              {isAr ? 'اسأل عن ClinicFlow' : 'Inquire about ClinicFlow'}
            </a>
          </div>

          {/* Plan 2: Featured */}
          <div className="py-8 md:px-8 bg-[var(--color-surface)] flex flex-col">
            <div className="text-[13px] font-semibold text-[var(--color-accent-700)]">
              {isAr ? 'الأكثر طلبًا' : 'Most Popular'}
            </div>
            <h3 className="mt-3.5 font-bold text-[26px]">{isAr ? 'بناء مخصّص' : 'Custom Build'}</h3>
            <div className="mt-3 font-bold text-[20px]">{isAr ? 'سعر لمرة واحدة' : 'Fixed one-time fee'}</div>
            <p className="mt-3 text-[15px] leading-[1.9] text-[var(--color-neutral-800)]">
              {isAr
                ? 'نحدّد النطاق، نبني، ونسلّمك الكود. بلا رسوم شهرية، وبلا رخصة لكل مستخدم.'
                : 'We define the scope, build, and hand over the code. Zero monthly license fees, zero user tax.'}
            </p>
            <ul className="mt-5 pt-5 border-t border-[var(--color-divider)] list-none flex flex-col gap-3 text-[15px] p-0">
              <li>{isAr ? 'نطاق وسعر مكتوبان وثابتان' : 'Fixed written scope and price'}</li>
              <li>{isAr ? 'يعمل خلال ٢–٤ أسابيع' : 'Live in 2–4 weeks'}</li>
              <li>{isAr ? 'الكود والمستودع وجلسة شرح' : 'Full code, repository, and handover session'}</li>
            </ul>
            <a
              href={getWhatsAppUrl('custom_build', lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 block text-center bg-[var(--color-accent)] text-[var(--color-bg)] p-3.5 text-[15px] font-semibold hover:bg-[var(--color-accent-600)] transition-colors"
            >
              {isAr ? 'اطلب عرض سعر مكتوب' : 'Request a written quote'}
            </a>
          </div>

          {/* Plan 3 */}
          <div className="py-8 md:ps-8 flex flex-col">
            <div className="text-[13px] font-semibold text-[var(--color-neutral-700)]">
              {isAr ? 'بلا متابعة منك' : 'Hands-off'}
            </div>
            <h3 className="mt-3.5 font-bold text-[26px]">{isAr ? 'خدمة مُدارة' : 'Managed Service'}</h3>
            <div className="mt-3 font-bold text-[20px]">{isAr ? 'بناء + شهري' : 'Build + monthly SLA'}</div>
            <p className="mt-3 text-[15px] leading-[1.9] text-[var(--color-neutral-800)]">
              {isAr
                ? 'نبنيه ونشغّله — استضافة ومراقبة وتعديلات مقابل مبلغ شهري ثابت.'
                : 'We build and run it — hosting, 24/7 uptime monitoring, and small monthly edits for a fixed retainer.'}
            </p>
            <ul className="mt-5 pt-5 border-t border-[var(--color-divider)] list-none flex flex-col gap-3 text-[15px] p-0">
              <li>{isAr ? 'استضافة ومراقبة مستمرة' : 'Managed infrastructure & monitoring'}</li>
              <li>{isAr ? 'تعديلات صغيرة كل شهر' : 'Included monthly tweaks & improvements'}</li>
              <li>{isAr ? 'توقف متى شئت وتأخذ الكود' : 'Cancel anytime and keep all source code'}</li>
            </ul>
            <a
              href={getWhatsAppUrl('managed', lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 block text-center border border-[var(--color-divider)] p-3.5 text-[15px] font-semibold text-[var(--color-text)] hover:bg-[var(--color-surface)] transition-colors"
            >
              {isAr ? 'لنتكلم بالتفاصيل' : 'Discuss details'}
            </a>
          </div>
        </div>
      </section>

      {/* ── 05 PROCESS ── */}
      <section id="process" className="scroll-mt-20 border-b-2 border-[var(--color-divider)]">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 py-20 grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-14">
          <div>
            <div className="text-[13px] font-bold tracking-wider uppercase text-[var(--color-accent-700)]">
              {isAr ? '٠٥ — كيف نعمل' : '05 — The Process'}
            </div>
            <h2 className="mt-5 font-bold text-3xl sm:text-4xl lg:text-[40px] leading-[1.25]">
              {isAr
                ? 'خمس خطوات، أربعة أسابيع، شخص واحد تتصل به.'
                : 'Five steps, four weeks, one engineer on call.'}
            </h2>
            <p className="mt-5 text-[17px] leading-[1.9] text-[var(--color-neutral-800)]">
              {isAr
                ? 'لا يحوّلك أحد إلى «مدير حساب». من يخطّط هو من يكتب الكود.'
                : 'Nobody hands you over to an “account manager”. The person who architects it is the one writing the code.'}
            </p>
          </div>

          <div>
            <div className="grid grid-cols-[60px_1fr] sm:grid-cols-[76px_1fr] border-t-2 border-[var(--color-divider)] py-5">
              <div className="font-bold text-base text-[var(--color-accent-700)]">{isAr ? '٠١' : '01'}</div>
              <div>
                <h4 className="m-0 font-bold text-[19px]">{isAr ? 'مكالمة — ١٥ دقيقة' : '15-Minute Call'}</h4>
                <p className="mt-2 text-[15px] leading-[1.9] text-[var(--color-neutral-800)]">
                  {isAr
                    ? 'على واتساب أو هاتفيًا. ماذا يعمل مشروعك، ما البطيء فيه، وما تريد التخلّص منه.'
                    : 'Via WhatsApp or voice call. What your business does, where the friction is, and what manual tasks to eliminate.'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-[60px_1fr] sm:grid-cols-[76px_1fr] border-t border-[var(--color-divider)] py-5">
              <div className="font-bold text-base text-[var(--color-accent-700)]">{isAr ? '٠٢' : '02'}</div>
              <div>
                <h4 className="m-0 font-bold text-[19px]">{isAr ? 'نطاق وسعر مكتوبان' : 'Written Scope & Price'}</h4>
                <p className="mt-2 text-[15px] leading-[1.9] text-[var(--color-neutral-800)]">
                  {isAr
                    ? 'صفحة واحدة: ما سيُبنى، بكم، ومتى يُسلَّم. لا يبدأ شيء قبل موافقتك.'
                    : 'A concise one-pager: exact deliverables, fixed cost, and deadline. Nothing starts without written agreement.'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-[60px_1fr] sm:grid-cols-[76px_1fr] border-t border-[var(--color-divider)] py-5">
              <div className="font-bold text-base text-[var(--color-accent-700)]">{isAr ? '٠٣' : '03'}</div>
              <div>
                <h4 className="m-0 font-bold text-[19px]">{isAr ? 'البناء — ٢ إلى ٤ أسابيع' : 'Build — 2 to 4 Weeks'}</h4>
                <p className="mt-2 text-[15px] leading-[1.9] text-[var(--color-neutral-800)]">
                  {isAr
                    ? 'ترى رابطًا يعمل كل أسبوع وتطلب التعديل وهو ما زال سهلًا ورخيصًا.'
                    : 'You get a live staging link every week, allowing feedback and refinement while changes are fast and low-cost.'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-[60px_1fr] sm:grid-cols-[76px_1fr] border-t border-[var(--color-divider)] py-5">
              <div className="font-bold text-base text-[var(--color-accent-700)]">{isAr ? '٠٤' : '04'}</div>
              <div>
                <h4 className="m-0 font-bold text-[19px]">{isAr ? 'التسليم' : 'Handover & Deployment'}</h4>
                <p className="mt-2 text-[15px] leading-[1.9] text-[var(--color-neutral-800)]">
                  {isAr
                    ? 'يعمل على نطاقك وحساباتك. الكود والمستودع وجلسة شرح لفريقك.'
                    : 'Deployed on your own domain and cloud accounts. Source repository and a live walkthrough for your team.'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-[60px_1fr] sm:grid-cols-[76px_1fr] border-t border-b-2 border-[var(--color-divider)] py-5">
              <div className="font-bold text-base text-[var(--color-accent-700)]">{isAr ? '٠٥' : '05'}</div>
              <div>
                <h4 className="m-0 font-bold text-[19px]">{isAr ? 'الدعم — إن أردته فقط' : 'Support — Only if Desired'}</h4>
                <p className="mt-2 text-[15px] leading-[1.9] text-[var(--color-neutral-800)]">
                  {isAr
                    ? 'صيانة وتعديلات شهرية، أو لا شيء. النظام لك في الحالتين.'
                    : 'Optional monthly maintenance and adjustments, or complete autonomy. The system belongs to you either way.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 06 WHY AXEN ── */}
      <section id="why" className="scroll-mt-20 border-b-2 border-[var(--color-divider)]">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 py-20">
          <div className="text-[13px] font-bold tracking-wider uppercase text-[var(--color-accent-700)]">
            {isAr ? '٠٦ — لماذا AXEN' : '06 — The AXEN Standard'}
          </div>
          <h2 className="mt-5 mb-10 font-bold text-3xl sm:text-4xl lg:text-[40px] leading-[1.25] max-w-[26ch]">
            {isAr ? 'مبني لك، لا مُصدَّر من قالب.' : 'Engineered for you, never exported from a template.'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 border-t-2 border-[var(--color-divider)] divide-y divide-[var(--color-divider)]">
            <div className="py-7 pe-0 md:pe-10 border-b border-[var(--color-divider)]">
              <h4 className="m-0 font-bold text-[20px]">{isAr ? 'الكود ملكك بالكامل' : '100% IP Ownership'}</h4>
              <p className="mt-2.5 text-[15px] leading-[1.9] text-[var(--color-neutral-800)]">
                {isAr
                  ? 'المستودع وقاعدة البيانات والحسابات باسمك. لا شيء مربوط بنا، فلا شيء يحتجزك.'
                  : 'The repository, database, and accounts are registered in your name. Zero vendor lock-in.'}
              </p>
            </div>
            <div className="py-7 ps-0 md:ps-10 border-b md:border-s border-[var(--color-divider)]">
              <h4 className="m-0 font-bold text-[20px]">{isAr ? 'بلا اشتراك لكل مستخدم' : 'Zero Seat Tax'}</h4>
              <p className="mt-2.5 text-[15px] leading-[1.9] text-[var(--color-neutral-800)]">
                {isAr
                  ? 'بناء واحد، سعر واحد. لا تدفع من جديد كلما وظّفت شخصًا.'
                  : 'One build, one fixed fee. Never pay extra licensing fees every time you hire an employee.'}
              </p>
            </div>
            <div className="py-7 pe-0 md:pe-10">
              <h4 className="m-0 font-bold text-[20px]">{isAr ? 'العربية ليست إضافة أخيرة' : 'Native Arabic First'}</h4>
              <p className="mt-2.5 text-[15px] leading-[1.9] text-[var(--color-neutral-800)]">
                {isAr
                  ? 'تصميم من اليمين لليسار، خط عربي حقيقي، وأتمتة تفهم كيف يكتب الناس فعلًا.'
                  : 'Engineered right-to-left from line zero. Real Arabic typography and automated agents that speak local dialects.'}
              </p>
            </div>
            <div className="py-7 ps-0 md:ps-10 md:border-s border-[var(--color-divider)]">
              <h4 className="m-0 font-bold text-[20px]">{isAr ? 'قابل للإضافة والتوسع' : 'Architected to Scale'}</h4>
              <p className="mt-2.5 text-[15px] leading-[1.9] text-[var(--color-neutral-800)]">
                {isAr
                  ? 'كود نظيف وموثّق. الميزة القادمة عمل يوم، لا إعادة بناء.'
                  : 'Clean, modular, documented architecture. Your next feature takes a day, not a ground-up rewrite.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 07 ABOUT / FOUNDER ── */}
      <section id="about" className="scroll-mt-20 border-b-2 border-[var(--color-divider)]">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 py-20 grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-14 items-start">
          <div className="m-0 border-2 border-[var(--color-divider)] aspect-[4/5] bg-[var(--color-surface)] flex flex-col items-center justify-center p-8 text-center">
            <span className="grid h-28 w-28 place-items-center rounded-2xl bg-[var(--color-accent)] text-[#f3f2f2] font-extrabold text-5xl shadow-md">
              {isAr ? 'ع' : 'A'}
            </span>
            <div className="mt-6 font-bold text-xl">{isAr ? 'عبدالله الحلحولي' : 'Abdalla Alhalhouli'}</div>
            <div className="mt-1 text-sm text-[var(--color-neutral-700)]">
              {isAr ? 'مؤسس AXEN · عمّان، الأردن' : 'Founder, AXEN · Amman, Jordan'}
            </div>
          </div>

          <div>
            <div className="text-[13px] font-bold tracking-wider uppercase text-[var(--color-accent-700)]">
              {isAr ? '٠٧ — من ستتعامل معه' : '07 — The Founder'}
            </div>
            <h2 className="mt-5 font-bold text-3xl sm:text-4xl lg:text-[40px] leading-[1.25]">
              {isAr ? 'عبدالله الحلحولي' : 'Abdalla Alhalhouli'}
            </h2>
            <div className="mt-2.5 text-base sm:text-[17px] text-[var(--color-neutral-700)]">
              {isAr ? 'مهندس برمجيات · مؤسس AXEN · عمّان، الأردن' : 'Software Engineer · Founder, AXEN · Amman, Jordan'}
            </div>
            <p className="mt-6 max-w-[54ch] text-base sm:text-[18px] leading-[1.9]">
              {isAr
                ? 'AXEN مهندس واحد، وهذا مقصود. تشرح المشكلة للشخص الذي سيكتب الكود، وهو نفسه من يجيبك بعد أن يصبح النظام في الخدمة.'
                : 'AXEN is led by a single dedicated engineer by design. You explain the challenge directly to the person architecting the code, who remains your direct contact once live.'}
            </p>
            <p className="mt-3.5 max-w-[54ch] text-base sm:text-[18px] leading-[1.9] text-[var(--color-neutral-800)]">
              {isAr
                ? 'ClinicFlow — نظام مواعيد وواتساب للعيادات — بُني هنا من الصفر ويعمل كخدمة اليوم، وبنفس البنية تُبنى بقية الأعمال.'
                : 'ClinicFlow — our clinic receptionist and calendar engine — was built here from line zero and serves clinics live today. All custom systems share this proven foundation.'}
            </p>
            <div className="mt-8 grid grid-cols-3 border-t-2 border-[var(--color-divider)] divide-x rtl:divide-x-reverse divide-[var(--color-divider)]">
              <div className="py-5 pe-5">
                <div className="font-bold text-base">{isAr ? 'عمّان' : 'Amman'}</div>
                <div className="mt-1.5 text-xs text-[var(--color-neutral-700)]">
                  {isAr ? 'المقر ومكان العمل' : 'Headquarters & Base'}
                </div>
              </div>
              <div className="py-5 px-5">
                <div className="font-bold text-base">{isAr ? 'تواصل مباشر' : 'Direct Access'}</div>
                <div className="mt-1.5 text-xs text-[var(--color-neutral-700)]">
                  {isAr ? 'بلا وسطاء' : 'Zero middle-men'}
                </div>
              </div>
              <div className="py-5 ps-5">
                <div className="font-bold text-base">{isAr ? 'عربي / إنجليزي' : 'AR + EN'}</div>
                <div className="mt-1.5 text-xs text-[var(--color-neutral-700)]">
                  {isAr ? 'العمل باللغتين' : 'Fluent bilingual'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 08 FAQ ── */}
      <section id="faq" className="scroll-mt-20 border-b-2 border-[var(--color-divider)]">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 py-20">
          <div className="text-[13px] font-bold tracking-wider uppercase text-[var(--color-accent-700)]">
            {isAr ? '٠٨ — أسئلة' : '08 — FAQ'}
          </div>
          <h2 className="mt-5 mb-10 font-bold text-3xl sm:text-4xl lg:text-[40px] leading-[1.25]">
            {isAr ? 'ما يسأله الناس أولًا.' : 'Questions clients ask first.'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 border-t-2 border-[var(--color-divider)] divide-y divide-[var(--color-divider)]">
            <div className="py-6">
              <h4 className="m-0 font-bold text-lg">{isAr ? 'كم التكلفة؟' : 'What is the investment?'}</h4>
              <p className="mt-2.5 text-[15px] leading-[1.9] text-[var(--color-neutral-800)]">
                {isAr
                  ? 'تعتمد على النطاق، فتستلم سعرًا مكتوبًا بعد مكالمة ١٥ دقيقة. ولا يتغيّر هذا السعر إلا إن غيّرت أنت النطاق.'
                  : 'Based strictly on scope. You receive a fixed written quotation after a 15-minute call that never shifts unless scope changes.'}
              </p>
            </div>
            <div className="py-6">
              <h4 className="m-0 font-bold text-lg">{isAr ? 'كم يستغرق حتى يعمل؟' : 'What is the delivery timeline?'}</h4>
              <p className="mt-2.5 text-[15px] leading-[1.9] text-[var(--color-neutral-800)]">
                {isAr
                  ? 'من أسبوعين إلى أربعة لمعظم الأعمال. أما ClinicFlow فيُشغَّل خلال أيام لأنه موجود أصلًا.'
                  : '2 to 4 weeks for custom platforms. ClinicFlow deploys in 2–3 business days as it runs live today.'}
              </p>
            </div>
            <div className="py-6">
              <h4 className="m-0 font-bold text-lg">{isAr ? 'هل هذا «بوت» بقوائم خيارات؟' : 'Is this a button-based menu bot?'}</h4>
              <p className="mt-2.5 text-[15px] leading-[1.9] text-[var(--color-neutral-800)]">
                {isAr
                  ? 'لا. بلا شجرة خيارات. يقرأ ما كتبه العميل فعلًا — فصحى أو عامية أو عربيزي — ويجيب، أو يحوّل المحادثة لك.'
                  : 'No. No clunky numeric trees. It comprehends natural conversational Arabic, Jordanian dialect, or Arabizi seamlessly.'}
              </p>
            </div>
            <div className="py-6">
              <h4 className="m-0 font-bold text-lg">{isAr ? 'لمن تكون ملكية العمل؟' : 'Who owns the intellectual property?'}</h4>
              <p className="mt-2.5 text-[15px] leading-[1.9] text-[var(--color-neutral-800)]">
                {isAr
                  ? 'لك — الكود والمستودع والنطاق وحسابات الاستضافة باسمك، وتُسلَّم في النهاية.'
                  : 'You do. The source code, GitHub repository, domain, and cloud credentials are all registered directly in your name.'}
              </p>
            </div>
            <div className="py-6">
              <h4 className="m-0 font-bold text-lg">{isAr ? 'هل يمكن العمل على ما لديّ حاليًا؟' : 'Can you integrate with my existing tools?'}</h4>
              <p className="mt-2.5 text-[15px] leading-[1.9] text-[var(--color-neutral-800)]">
                {isAr
                  ? 'عادةً نعم. موقع قائم أو جداول أو نظام كاشير أو نظام عملاء — إن كان له واجهة برمجية أو تصدير، يمكن ربطه.'
                  : 'Yes. Existing websites, POS terminals, Google Sheets, or CRMs — if it has an API or export, we connect it.'}
              </p>
            </div>
            <div className="py-6">
              <h4 className="m-0 font-bold text-lg">{isAr ? 'وإن تعطل شيء بعد التسليم؟' : 'What happens if something breaks post-launch?'}</h4>
              <p className="mt-2.5 text-[15px] leading-[1.9] text-[var(--color-neutral-800)]">
                {isAr
                  ? 'راسلنا على واتساب. الدعم الشهري اختياري، ولا نطلب اشتراكًا مقابل أن نجيبك.'
                  : 'Reach out directly on WhatsApp. Ongoing retainers are optional; we answer our clients without requiring support subscriptions.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 09 CONTACT ── */}
      <section id="contact" className="scroll-mt-20 border-b-2 border-[var(--color-divider)]">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 py-20 grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-14">
          <div>
            <div className="text-[13px] font-bold tracking-wider uppercase text-[var(--color-accent-700)]">
              {isAr ? '٠٩ — تواصل' : '09 — Contact'}
            </div>
            <h2 className="mt-5 font-bold text-3xl sm:text-4xl lg:text-[40px] leading-[1.25]">
              {isAr ? 'أرسل رسالة. سيردّ عليك شخص.' : 'Send a message. A real engineer replies.'}
            </h2>
            <p className="mt-5 text-[17px] leading-[1.9] text-[var(--color-neutral-800)]">
              {isAr
                ? 'واتساب أسرع، ومن هناك يبدأ معظم العمل. اكتب ماذا يعمل مشروعك وما الذي يبطئه.'
                : 'WhatsApp is the fastest channel. Share what your business does and where the operational bottlenecks are.'}
            </p>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 flex items-center gap-4 border-2 border-[var(--color-text)] p-5 text-[var(--color-text)] hover:bg-[var(--color-text)] hover:text-[var(--color-bg)] transition-colors group"
            >
              <MessageCircle className="h-6 w-6 shrink-0" />
              <div>
                <span className="block font-bold text-lg">{isAr ? 'واتساب' : 'WhatsApp'}</span>
                <span className="block mt-0.5 text-sm opacity-75" dir="ltr">{whatsappDisplay}</span>
              </div>
              <ArrowUpRight className="h-5 w-5 ms-auto shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-3 flex items-center gap-4 border border-[var(--color-divider)] p-5 text-[var(--color-text)] hover:border-[var(--color-text)] transition-colors"
            >
              <Mail className="h-6 w-6 shrink-0" />
              <div>
                <span className="block font-bold text-lg">{isAr ? 'البريد الإلكتروني' : 'Direct Email'}</span>
                <span className="block mt-0.5 text-sm opacity-75" dir="ltr">{CONTACT_EMAIL}</span>
              </div>
            </a>
          </div>

          <div className="border-2 border-[var(--color-divider)] p-8 sm:p-9 bg-[var(--color-surface)]">
            <h3 className="m-0 font-bold text-2xl">{isAr ? 'أو اكتب هنا' : 'Or write to us directly'}</h3>
            <p className="mt-2.5 text-[15px] text-[var(--color-neutral-700)]">
              {isAr ? 'ثلاث خانات، ورد سريع خلال ساعات العمل.' : 'Three fields, fast response during business hours.'}
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm font-semibold text-[var(--color-text)]">
                    {isAr ? 'الاسم' : 'Your Name'}
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={isAr ? 'اسمك الكريم' : 'Full Name'}
                    className="w-full min-h-[44px] px-3.5 py-2 text-sm bg-[var(--color-bg)] border border-[var(--color-divider)] text-[var(--color-text)] focus:border-[var(--color-accent-700)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-700)]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="biz" className="text-sm font-semibold text-[var(--color-text)]">
                    {isAr ? 'المشروع والمدينة' : 'Business & City'}
                  </label>
                  <input
                    id="biz"
                    type="text"
                    required
                    value={formData.biz}
                    onChange={(e) => setFormData({ ...formData, biz: e.target.value })}
                    placeholder={isAr ? 'مثال: عيادة أسنان، عمّان' : 'e.g. Dental clinic, Amman'}
                    className="w-full min-h-[44px] px-3.5 py-2 text-sm bg-[var(--color-bg)] border border-[var(--color-divider)] text-[var(--color-text)] focus:border-[var(--color-accent-700)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-700)]"
                  />
                </div>

                <div className="sm:col-span-2 flex flex-col gap-1.5">
                  <label htmlFor="msg" className="text-sm font-semibold text-[var(--color-text)]">
                    {isAr ? 'ما الذي تحتاجه؟' : 'Project Details'}
                  </label>
                  <textarea
                    id="msg"
                    required
                    rows={4}
                    value={formData.msg}
                    onChange={(e) => setFormData({ ...formData, msg: e.target.value })}
                    placeholder={isAr ? 'ما البطيء الآن، وما تريده أن يصير…' : 'Tell us what you want to engineer…'}
                    className="w-full px-3.5 py-2 text-sm bg-[var(--color-bg)] border border-[var(--color-divider)] text-[var(--color-text)] focus:border-[var(--color-accent-700)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-700)] resize-y"
                  />
                </div>

                <div className="sm:col-span-2 flex flex-wrap items-center gap-4 pt-2">
                  <button
                    type="submit"
                    className="min-h-[48px] bg-[var(--color-whatsapp)] text-white px-6 py-3.5 text-[15px] font-semibold hover:bg-[var(--color-whatsapp-dark)] transition-colors shadow-sm"
                  >
                    {isAr ? 'أرسل الطلب عبر واتساب' : 'Submit via WhatsApp'}
                  </button>
                  <span className="text-xs text-[var(--color-neutral-700)]">
                    {isAr ? 'بلا قوائم بريدية، وبلا إزعاج.' : 'Zero marketing spam. Pure direct engineering.'}
                  </span>
                </div>
              </form>
            ) : (
              <div className="mt-7 border-2 border-[var(--color-accent-700)] p-7 flex flex-col sm:flex-row gap-5 items-start bg-[var(--color-bg)]">
                <CheckCircle2 className="h-6 w-6 text-[var(--color-accent-700)] shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="font-bold text-lg">{isAr ? 'فتحنا لك واتساب والرسالة جاهزة — اضغط إرسال.' : 'WhatsApp is opened with your message ready — click Send.'}</div>
                  <p className="mt-2 text-sm leading-[1.8] text-[var(--color-neutral-800)]">
                    {isAr ? 'إن لم تُفتح المحادثة تلقائيًا بسبب حظر النوافذ، اضغط الزر أدناه:' : 'If WhatsApp did not launch automatically, click the button below:'}
                  </p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(isAr ? `طلب استشارة من موقع AXEN:\nالاسم: ${formData.name}\nالمشروع: ${formData.biz}\nالتفاصيل: ${formData.msg}` : `Consultation request from AXEN website:\nName: ${formData.name}\nBusiness: ${formData.biz}\nDetails: ${formData.msg}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex min-h-[44px] items-center gap-2 bg-[var(--color-whatsapp)] text-white px-5 py-2.5 text-sm font-semibold hover:bg-[var(--color-whatsapp-dark)] transition-colors shadow-sm"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>{isAr ? 'اضغط هنا لفتح واتساب الآن' : 'Open WhatsApp Now'}</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── POSTER BANNER (Signal Red) ── */}
      <section className="bg-[var(--color-accent)] text-[var(--color-bg)]">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 py-16 sm:py-20 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
          <div>
            <div className="text-[13px] font-bold opacity-90 uppercase tracking-widest text-[#f8f4f4]">
              {isAr ? 'عمّان، الأردن' : 'Amman, Jordan'}
            </div>
            <h2 className="mt-4 font-bold text-3xl sm:text-5xl lg:text-[52px] leading-[1.15] max-w-[20ch]">
              {isAr ? 'توقّف عن كتابة نفس الرد أربعين مرة في اليوم.' : 'Stop typing the exact same reply forty times a day.'}
            </h2>
          </div>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex min-h-[56px] items-center gap-3 bg-[var(--color-bg)] text-[var(--color-text)] px-7 py-4 text-[17px] font-bold hover:bg-[var(--color-text)] hover:text-[var(--color-bg)] transition-colors shadow-lg"
          >
            <MessageCircle className="h-5 w-5" />
            <span>{isAr ? 'راسلنا على واتساب' : 'Message us on WhatsApp'}</span>
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <ModernistFooter lang={lang} />
    </div>
  )
}
