export type Lang = 'en' | 'ar'

export const WHATSAPP_NUMBER = '962788701710'
export const CONTACT_EMAIL = 'axencomp@gmail.com'

/** Public site origin — used for canonical URLs and social preview images. */
export const SITE_URL = 'https://axen-1cl.pages.dev'

/** Social profiles. Leave a value empty ('') to hide that icon in the footer. */
export const INSTAGRAM_URL = 'https://www.instagram.com/axen_comp/'
export const LINKEDIN_URL = ''

export const LOCALES = ['en', 'ar'] as const

/** Path prefix for a locale. English is served at the root. */
export function localeBase(lang: Lang) {
  return lang === 'ar' ? '/ar' : ''
}

/** Turn a canonical (English) path into its localised equivalent. */
export function localizePath(lang: Lang, path: string) {
  const clean = path === '/' ? '' : path
  return `${localeBase(lang)}${clean}` || '/'
}

/** Strip any locale prefix, giving the canonical path. */
export function canonicalPath(path: string) {
  const stripped = path.replace(/^\/ar(?=\/|$)/, '')
  return stripped || '/'
}

export const dictionary = {
  en: {
    dir: 'ltr' as 'ltr' | 'rtl',
    nav: {
      services: 'Services',
      portfolio: 'Portfolio',
      why: 'Why AXEN',
      contact: 'Contact',
      cta: 'Book Free Consultation',
      langLabel: 'عربي',
    },
    hero: {
      badge: '[ SYSTEM ARCHITECTURE & AI OPERATIONS ]',
      headline: 'Autonomous Operations & Precision Web Platforms.',
      sub: 'We engineer ultra-fast web platforms and eliminate manual bottlenecks through 24/7 intelligent WhatsApp workflows.',
      primary: 'Book Free Consultation',
      secondary: 'Test WhatsApp Demo',
      metrics: [
        { value: '24/7', label: 'Always Answering' },
        { value: 'AR + EN', label: 'Native Both Ways' },
        { value: 'JD 0', label: 'Per-Seat Fees' },
      ],
    },
    terminal: {
      tag: '[ REAL BOOKING CONVERSATION ]',
      title: 'Watch an Appointment Book Itself',
      subtitle:
        'Every reply below is the exact text our clinic receptionist sends. Consent first, real availability, and nothing written to the calendar until the patient confirms.',
      header: 'ClinicFlow · Clinic Receptionist',
      status: 'ONLINE',
      replay: 'Replay Conversation',
      running: 'Running…',
      metrics: [
        { label: 'HUMAN INPUT', value: '0' },
        { label: 'DOUBLE BOOKING', value: 'BLOCKED' },
        { label: 'AVAILABILITY', value: '24/7' },
      ],
      lines: [
        { from: 'user' as const, text: 'بدي أحجز موعد' },
        {
          from: 'bot' as const,
          text: 'قبل ما نبلّش الحجز، بنحتاج موافقتك 🙏 العيادة رح تحفظ اسمك ورقم تلفونك وتفاصيل موعدك، وبتستعملهم فقط لإدارة الموعد. من حقك ترفض بأي وقت.\n\n1) موافق/ة، كمّل الحجز\n2) مش موافق/ة',
        },
        { from: 'user' as const, text: '1' },
        {
          from: 'bot' as const,
          text: 'هاي خدماتنا وأسعارنا:\n1) فحص وتنظيف — 45 دقيقة — 25 دينار\n2) حشوة أسنان — 60 دقيقة — 35 دينار\n3) استشارة تقويم — 30 دقيقة — 15 دينار',
        },
        { from: 'user' as const, text: '1' },
        {
          from: 'system' as const,
          text: 'doctor → day → time · slots computed from the clinic calendar, not a fixed list',
        },
        {
          from: 'bot' as const,
          text: 'راجع/ي تفاصيل الموعد قبل التأكيد:\nالخدمة: فحص وتنظيف\nالطبيب: د. وائل أبو نواس\nاليوم: الاثنين 31/8/2026\nالوقت: 09:00\nالاسم: سامي عبد الله الحوراني\nرقم التواصل: 0791234567\n\n1) تأكيد الحجز\n2) إلغاء والبدء من جديد',
        },
        { from: 'user' as const, text: '1' },
        {
          from: 'bot' as const,
          text: 'تم حجز موعدك بنجاح ✅\nالخدمة: فحص وتنظيف\nالطبيب: د. وائل أبو نواس\nالوقت: 2026-08-31 09:00\n\nشكراً لثقتك فينا، بنستناك ❤️',
        },
        {
          from: 'system' as const,
          text: 'DB WRITE → appointments[#1] status=confirmed · visible to staff instantly',
        },
      ],
    },
    portfolio: {
      eyebrow: 'What We Build',
      title: 'One System Live. Three Ready to Build.',
      subtitle:
        'AXEN is new, so here is the honest picture: one system running in production, and three we build on commission. No borrowed logos.',
      filters: {
        all: 'Everything',
        web: 'Web Development',
        automation: 'AI & WhatsApp Automations',
      },
      liveDemo: 'See It Running',
      caseStudy: 'Read Case Study',
      discuss: 'Discuss a Build',
      badges: {
        live: 'Live in Production',
        capability: 'Built on Commission',
      },
      includesLabel: 'What you get',
      items: [
        {
          id: 'p2',
          kind: 'live' as const,
          category: 'automation' as const,
          categoryLabel: 'WhatsApp Automation',
          title: 'ClinicFlow — Clinic Receptionist',
          description:
            'Patients book on WhatsApp in Jordanian Arabic. Real availability, consent before any personal data, and nothing written to the calendar until they confirm.',
          image: '/projects/clinicflow-inbox.webp',
          tech: ['WhatsApp Cloud API', 'FastAPI', 'PostgreSQL', 'React'],
          includes: [
            'Books, reschedules and cancels without staff',
            'Double bookings blocked at the database level',
            'Consent captured before any personal data',
          ],
          href: '/work/clinicflow',
        },
        {
          id: 'p1',
          kind: 'capability' as const,
          category: 'web' as const,
          categoryLabel: 'Web Development',
          title: 'Custom Web Platforms',
          description:
            'Next.js platforms engineered for speed and conversion. The site you are reading is one of them — same stack, same standards.',
          image: '/projects/web-platform.webp',
          tech: ['Next.js', 'TypeScript', 'Tailwind'],
          includes: [
            'Sub-second loads on Jordanian mobile networks',
            'Arabic-first RTL, not a bolted-on translation',
            'You own the repository outright',
          ],
          href: '#contact',
        },
        {
          id: 'p3',
          kind: 'capability' as const,
          category: 'web' as const,
          categoryLabel: 'Web Development',
          title: 'E-Commerce Storefronts',
          description:
            'Conversion-focused stores with a checkout that does not lose people halfway through.',
          image: '/projects/ecommerce-site.webp',
          tech: ['Next.js', 'Stripe', 'Tailwind'],
          includes: [
            'Checkout tuned for local payment habits',
            'Inventory and orders in one dashboard',
            'No per-transaction platform tax',
          ],
          href: '#contact',
        },
        {
          id: 'p4',
          kind: 'capability' as const,
          category: 'automation' as const,
          categoryLabel: 'API Integration',
          title: 'Business Logic & Integrations',
          description:
            'The plumbing between the tools you already pay for — CRM, spreadsheets, databases — so nobody retypes anything.',
          image: '/projects/api-integration.webp',
          tech: ['Python', 'REST API', 'PostgreSQL'],
          includes: [
            'CRM and database kept in sync',
            'Spreadsheet work done automatically',
            'Third-party APIs joined into one flow',
          ],
          href: '#contact',
        },
      ],
    },
    services: {
      eyebrow: 'What We Do',
      title: 'Modular Systems, Built to Scale',
      subtitle:
        'Pick a single system or combine them into one autonomous operation.',
      items: [
        {
          title: 'Custom Web Platforms & Landing Pages',
          description:
            'Fast, responsive, enterprise-grade architecture engineered for conversion and scale.',
          points: [
            'Sub-second load times',
            'Fully responsive design',
            'SEO-ready architecture',
          ],
        },
        {
          title: 'WhatsApp & Instagram Automated Workflows',
          description:
            'Instant ordering, a 24/7 smart assistant, and automated lead qualification.',
          points: [
            'Instant order processing',
            '24/7 smart assistant',
            'Automated lead capture',
          ],
        },
        {
          title: 'Custom Business Logic & API Integrations',
          description:
            'Connect your CRM, spreadsheets, and databases into a single automated pipeline.',
          points: [
            'CRM & database sync',
            'Spreadsheet automation',
            'Third-party API glue',
          ],
        },
      ],
    },
    why: {
      eyebrow: 'Why AXEN',
      title: 'Engineering Over Templates',
      cards: {
        speed: {
          title: 'Fast Delivery Cycles',
          description:
            'Rapid sprints get your system live in weeks, not quarters — without cutting corners.',
        },
        bloat: {
          title: 'Zero Recurring Software Bloat',
          description:
            'You own the code. No endless per-seat subscriptions eating your margins.',
        },
        scalable: {
          title: 'Scalable Codebases',
          description:
            'Clean, documented architecture that grows with your business instead of blocking it.',
        },
        local: {
          title: 'Local Market Expertise',
          description:
            'Deep understanding of the regional market, Arabic-first UX, and local buyer behavior.',
        },
        stat: { value: '24/7', label: 'Autonomous operations' },
      },
    },
    contact: {
      eyebrow: 'Get Started',
      title: 'Let’s Build Your System',
      subtitle:
        'Reach us on your channel of choice or book a quick consultation.',
      whatsapp: {
        title: 'WhatsApp Instant Chat',
        description: 'Fastest response. Talk to us right now.',
        action: 'Open WhatsApp',
      },
      email: {
        title: 'Email Inquiry',
        description: 'Send us the details of your project.',
        action: 'Send Email',
      },
      form: {
        title: 'Schedule a Consultation',
        name: 'Full Name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'you@company.com',
        phone: 'WhatsApp Number',
        phonePlaceholder: '07 9999 9999',
        message: 'Project Details',
        messagePlaceholder: 'Tell us what you want to build…',
        submit: 'Send via WhatsApp',
        intro: 'New consultation request from the AXEN website',
        success: 'WhatsApp is opening with your message ready to send.',
        fallback: 'Didn’t open? Tap here.',
      },
    },
    footer: {
      tagline: 'Elite web platforms & AI automation for growing businesses.',
      rights: 'All rights reserved.',
      madeIn: 'Engineered in Jordan 🇯🇴',
      linksTitle: 'Navigate',
      socialTitle: 'Channels',
    },
  },

  ar: {
    dir: 'rtl' as 'ltr' | 'rtl',
    nav: {
      services: 'الخدمات',
      portfolio: 'أعمالنا',
      why: 'لماذا AXEN',
      contact: 'تواصل',
      cta: 'احجز استشارة مجانية',
      langLabel: 'EN',
    },
    hero: {
      badge: '[ بنية الأنظمة وعمليات الذكاء الاصطناعي ]',
      headline: 'بنية تحتية للويب والأتمتة الذكية للشركات.',
      sub: 'نصمّم منصات ويب فائقة السرعة ونزيل العقبات اليدوية عبر سير عمل ذكي على واتساب يعمل ٢٤/٧.',
      primary: 'احجز استشارة مجانية',
      secondary: 'جرّب واتساب مباشرة',
      metrics: [
        { value: '٢٤/٧', label: 'رد متواصل' },
        { value: 'عربي + إنجليزي', label: 'بطلاقة باللغتين' },
        { value: '٠ دينار', label: 'رسوم شهرية لكل مستخدم' },
      ],
    },
    terminal: {
      tag: '[ محادثة حجز حقيقية ]',
      title: 'شاهد الموعد يحجز نفسه',
      subtitle:
        'كل رد بالأسفل هو النص الحرفي اللي بيبعته موظف الاستقبال. الموافقة أولاً، أوقات متاحة حقيقية، ولا شيء يُكتب في التقويم قبل أن يؤكّد المريض.',
      header: 'ClinicFlow · موظف استقبال العيادة',
      status: 'متصل',
      replay: 'إعادة المحادثة',
      running: 'جارٍ التشغيل…',
      metrics: [
        { label: 'تدخّل بشري', value: '0' },
        { label: 'حجز مزدوج', value: 'ممنوع' },
        { label: 'جاهزية', value: '24/7' },
      ],
      lines: [
        { from: 'user' as const, text: 'بدي أحجز موعد' },
        {
          from: 'bot' as const,
          text: 'قبل ما نبلّش الحجز، بنحتاج موافقتك 🙏 العيادة رح تحفظ اسمك ورقم تلفونك وتفاصيل موعدك، وبتستعملهم فقط لإدارة الموعد. من حقك ترفض بأي وقت.\n\n1) موافق/ة، كمّل الحجز\n2) مش موافق/ة',
        },
        { from: 'user' as const, text: '1' },
        {
          from: 'bot' as const,
          text: 'هاي خدماتنا وأسعارنا:\n1) فحص وتنظيف — 45 دقيقة — 25 دينار\n2) حشوة أسنان — 60 دقيقة — 35 دينار\n3) استشارة تقويم — 30 دقيقة — 15 دينار',
        },
        { from: 'user' as const, text: '1' },
        {
          from: 'system' as const,
          text: 'الطبيب ← اليوم ← الوقت · الأوقات محسوبة من تقويم العيادة، لا من قائمة ثابتة',
        },
        {
          from: 'bot' as const,
          text: 'راجع/ي تفاصيل الموعد قبل التأكيد:\nالخدمة: فحص وتنظيف\nالطبيب: د. وائل أبو نواس\nاليوم: الاثنين 31/8/2026\nالوقت: 09:00\nالاسم: سامي عبد الله الحوراني\nرقم التواصل: 0791234567\n\n1) تأكيد الحجز\n2) إلغاء والبدء من جديد',
        },
        { from: 'user' as const, text: '1' },
        {
          from: 'bot' as const,
          text: 'تم حجز موعدك بنجاح ✅\nالخدمة: فحص وتنظيف\nالطبيب: د. وائل أبو نواس\nالوقت: 2026-08-31 09:00\n\nشكراً لثقتك فينا، بنستناك ❤️',
        },
        {
          from: 'system' as const,
          text: 'DB WRITE → appointments[#1] status=confirmed · تظهر للموظفة فوراً',
        },
      ],
    },
    portfolio: {
      eyebrow: 'ما نبنيه',
      title: 'نظام واحد يعمل. وثلاثة جاهزة للتنفيذ.',
      subtitle:
        'AXEN شركة جديدة، وهاي الصورة بصراحة: نظام واحد شغّال فعلياً، وثلاثة نبنيهم عند الطلب. بدون شعارات مستعارة.',
      filters: {
        all: 'الكل',
        web: 'تطوير الويب',
        automation: 'الذكاء الاصطناعي وأتمتة واتساب',
      },
      liveDemo: 'شوفه شغّال',
      caseStudy: 'اقرأ دراسة الحالة',
      discuss: 'ناقش المشروع',
      badges: {
        live: 'يعمل فعلياً',
        capability: 'يُبنى عند الطلب',
      },
      includesLabel: 'شو بتوخذ',
      items: [
        {
          id: 'p2',
          kind: 'live' as const,
          category: 'automation' as const,
          categoryLabel: 'أتمتة واتساب',
          title: 'ClinicFlow — موظف استقبال العيادة',
          description:
            'المريض يحجز على واتساب بالعربية الأردنية. أوقات متاحة حقيقية، وموافقة قبل أي بيانات شخصية، ولا يُكتب موعد قبل أن يؤكّد.',
          image: '/projects/clinicflow-inbox.webp',
          tech: ['WhatsApp Cloud API', 'FastAPI', 'PostgreSQL', 'React'],
          includes: [
            'يحجز ويؤجّل ويلغي بدون موظف',
            'الحجز المزدوج ممنوع على مستوى قاعدة البيانات',
            'موافقة المريض قبل أي بيانات شخصية',
          ],
          href: '/work/clinicflow',
        },
        {
          id: 'p1',
          kind: 'capability' as const,
          category: 'web' as const,
          categoryLabel: 'تطوير الويب',
          title: 'منصات ويب مخصّصة',
          description:
            'منصات Next.js مبنية للسرعة والتحويل. الموقع اللي بتقرأ فيه هلأ واحد منهم — نفس الأدوات ونفس المعايير.',
          image: '/projects/web-platform.webp',
          tech: ['Next.js', 'TypeScript', 'Tailwind'],
          includes: [
            'تحميل أقل من ثانية على شبكات الموبايل الأردنية',
            'عربي أولاً باتجاه RTL حقيقي، مش ترجمة ملصوقة',
            'الكود ملكك بالكامل',
          ],
          href: '#contact',
        },
        {
          id: 'p3',
          kind: 'capability' as const,
          category: 'web' as const,
          categoryLabel: 'تطوير الويب',
          title: 'متاجر إلكترونية',
          description:
            'متاجر تركّز على التحويل، بعملية دفع ما بتضيّع الزبون بنص الطريق.',
          image: '/projects/ecommerce-site.webp',
          tech: ['Next.js', 'Stripe', 'Tailwind'],
          includes: [
            'دفع مضبوط على عادات السوق المحلي',
            'المخزون والطلبات بلوحة واحدة',
            'بدون عمولة منصة على كل عملية',
          ],
          href: '#contact',
        },
        {
          id: 'p4',
          kind: 'capability' as const,
          category: 'automation' as const,
          categoryLabel: 'تكامل الأنظمة',
          title: 'منطق أعمال وربط أنظمة',
          description:
            'الربط بين الأدوات اللي أصلاً بتدفع عليها — CRM وجداول وقواعد بيانات — حتى ما حدا يعيد الإدخال.',
          image: '/projects/api-integration.webp',
          tech: ['Python', 'REST API', 'PostgreSQL'],
          includes: [
            'CRM وقاعدة البيانات متزامنين',
            'شغل الجداول بيصير أوتوماتيكي',
            'APIs خارجية مجموعة بسير واحد',
          ],
          href: '#contact',
        },
      ],
    },
    services: {
      eyebrow: 'ماذا نقدّم',
      title: 'أنظمة معيارية مصمّمة للتوسّع',
      subtitle: 'اختر نظامًا واحدًا أو ادمجها في عملية تشغيل ذاتية واحدة.',
      items: [
        {
          title: 'منصات ويب ولوحات هبوط مخصّصة',
          description:
            'بنية سريعة ومتجاوبة بمستوى المؤسسات، مصمّمة للتحويل والتوسّع.',
          points: [
            'زمن تحميل أقل من ثانية',
            'تصميم متجاوب بالكامل',
            'بنية جاهزة لمحركات البحث',
          ],
        },
        {
          title: 'أتمتة واتساب وإنستغرام',
          description:
            'طلبات فورية، ومساعد ذكي يعمل ٢٤/٧، وتأهيل تلقائي للعملاء.',
          points: [
            'معالجة الطلبات فورًا',
            'مساعد ذكي على مدار الساعة',
            'التقاط تلقائي للعملاء',
          ],
        },
        {
          title: 'منطق أعمال وتكامل واجهات API',
          description:
            'اربط CRM والجداول وقواعد البيانات في خط أتمتة واحد.',
          points: [
            'مزامنة CRM وقواعد البيانات',
            'أتمتة الجداول',
            'ربط واجهات الطرف الثالث',
          ],
        },
      ],
    },
    why: {
      eyebrow: 'لماذا AXEN',
      title: 'هندسة حقيقية بدل القوالب الجاهزة',
      cards: {
        speed: {
          title: 'دورات تسليم سريعة',
          description:
            'مراحل عمل سريعة تُطلق نظامك خلال أسابيع، لا أرباع سنوات، دون تنازلات.',
        },
        bloat: {
          title: 'بلا اشتراكات برمجية متراكمة',
          description:
            'الكود ملكك. لا اشتراكات شهرية لا تنتهي تلتهم أرباحك.',
        },
        scalable: {
          title: 'قواعد كود قابلة للتوسّع',
          description:
            'بنية نظيفة وموثّقة تنمو مع عملك بدل أن تعيقه.',
        },
        local: {
          title: 'خبرة بالسوق المحلي',
          description:
            'فهم عميق للسوق الإقليمي، وتجربة استخدام عربية أولًا، وسلوك المشتري المحلي.',
        },
        stat: { value: '٢٤/٧', label: 'عمليات ذاتية' },
      },
    },
    contact: {
      eyebrow: 'ابدأ الآن',
      title: 'لنبنِ نظامك',
      subtitle: 'تواصل معنا عبر القناة التي تفضّلها أو احجز استشارة سريعة.',
      whatsapp: {
        title: 'محادثة واتساب فورية',
        description: 'أسرع رد. تحدّث معنا الآن.',
        action: 'افتح واتساب',
      },
      email: {
        title: 'استفسار بالبريد',
        description: 'أرسل لنا تفاصيل مشروعك.',
        action: 'أرسل بريدًا',
      },
      form: {
        title: 'احجز استشارة',
        name: 'الاسم الكامل',
        namePlaceholder: 'اسمك',
        email: 'البريد الإلكتروني',
        emailPlaceholder: 'you@company.com',
        phone: 'رقم الواتساب',
        phonePlaceholder: '07 9999 9999',
        message: 'تفاصيل المشروع',
        messagePlaceholder: 'أخبرنا بما تريد بناءه…',
        submit: 'أرسل عبر واتساب',
        intro: 'طلب استشارة جديد من موقع AXEN',
        success: 'فتحنا واتساب ورسالتك جاهزة للإرسال.',
        fallback: 'ما انفتح؟ اضغط هنا.',
      },
    },
    footer: {
      tagline: 'منصات ويب متطورة وأتمتة ذكية للشركات الطموحة.',
      rights: 'جميع الحقوق محفوظة.',
      madeIn: 'صُمّم في الأردن 🇯🇴',
      linksTitle: 'تصفّح',
      socialTitle: 'القنوات',
    },
  },
}

export type Dict = (typeof dictionary)['en']
