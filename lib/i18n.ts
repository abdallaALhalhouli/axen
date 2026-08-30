export type Lang = 'en' | 'ar'

export const WHATSAPP_NUMBER = '962788701710'
export const CONTACT_EMAIL = 'axencomp@gmail.com'

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
        { value: '< 3s', label: 'Automated Response' },
        { value: '100%', label: 'Custom Built' },
        { value: 'Zero', label: 'Latency Workflows' },
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
      eyebrow: 'Selected Work',
      title: 'Case Studies Engineered for Impact',
      subtitle:
        'Real systems shipped for real businesses — from web platforms to autonomous chat operations.',
      filters: {
        all: 'All Works',
        web: 'Web Development',
        automation: 'AI & WhatsApp Automations',
      },
      liveDemo: 'Live Demo',
      caseStudy: 'Read Case Study',
      items: [
        {
          id: 'p1',
          category: 'web' as const,
          categoryLabel: 'Web Development',
          title: 'Enterprise SaaS Dashboard',
          description:
            'A high-performance analytics platform with real-time data cards and role-based access.',
          image: '/projects/web-platform.webp',
          tech: ['Next.js', 'Tailwind', 'TypeScript'],
          href: '#contact',
        },
        {
          id: 'p2',
          category: 'automation' as const,
          categoryLabel: 'AI & WhatsApp Automation',
          title: 'ClinicFlow — Clinic Receptionist',
          description:
            'Patients book on WhatsApp in Jordanian Arabic. Real availability, consent before any personal data, and nothing written to the calendar until they confirm.',
          image: '/projects/clinicflow-inbox.webp',
          tech: ['WhatsApp Cloud API', 'FastAPI', 'PostgreSQL', 'React'],
          href: '/work/clinicflow',
        },
        {
          id: 'p3',
          category: 'web' as const,
          categoryLabel: 'Web Development',
          title: 'Premium E-Commerce Storefront',
          description:
            'A conversion-focused online store with a sub-second load time and clean checkout.',
          image: '/projects/ecommerce-site.webp',
          tech: ['Next.js', 'Tailwind', 'Stripe'],
          href: '#contact',
        },
        {
          id: 'p4',
          category: 'automation' as const,
          categoryLabel: 'API Integration',
          title: 'CRM & Sheets Sync Engine',
          description:
            'Custom business logic connecting CRM, spreadsheets, and databases into one flow.',
          image: '/projects/api-integration.webp',
          tech: ['Python', 'REST API', 'PostgreSQL'],
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
        message: 'Project Details',
        messagePlaceholder: 'Tell us what you want to build…',
        submit: 'Request Consultation',
        success: 'Thanks! We’ll be in touch within 24 hours.',
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
        { value: '< ٣ث', label: 'زمن الرد الآلي' },
        { value: '١٠٠٪', label: 'مبني بالكامل حسب الطلب' },
        { value: 'صفر', label: 'تأخير في سير العمل' },
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
      eyebrow: 'أعمال مختارة',
      title: 'دراسات حالة مصمّمة لإحداث الأثر',
      subtitle:
        'أنظمة حقيقية تم تسليمها لشركات حقيقية — من منصات الويب إلى عمليات المحادثة الذاتية.',
      filters: {
        all: 'كل الأعمال',
        web: 'تطوير الويب',
        automation: 'الذكاء الاصطناعي وأتمتة واتساب',
      },
      liveDemo: 'عرض مباشر',
      caseStudy: 'اقرأ دراسة الحالة',
      items: [
        {
          id: 'p1',
          category: 'web' as const,
          categoryLabel: 'تطوير الويب',
          title: 'لوحة تحكم SaaS للمؤسسات',
          description:
            'منصة تحليلات عالية الأداء ببطاقات بيانات لحظية وصلاحيات حسب الدور.',
          image: '/projects/web-platform.webp',
          tech: ['Next.js', 'Tailwind', 'TypeScript'],
          href: '#contact',
        },
        {
          id: 'p2',
          category: 'automation' as const,
          categoryLabel: 'أتمتة واتساب',
          title: 'ClinicFlow — موظف استقبال العيادة',
          description:
            'المريض يحجز على واتساب بالعربية الأردنية. أوقات متاحة حقيقية، وموافقة قبل أي بيانات شخصية، ولا يُكتب موعد قبل أن يؤكّد.',
          image: '/projects/clinicflow-inbox.webp',
          tech: ['WhatsApp Cloud API', 'FastAPI', 'PostgreSQL', 'React'],
          href: '/work/clinicflow',
        },
        {
          id: 'p3',
          category: 'web' as const,
          categoryLabel: 'تطوير الويب',
          title: 'متجر إلكتروني فاخر',
          description:
            'متجر يركّز على التحويل بزمن تحميل أقل من ثانية وعملية دفع سلسة.',
          image: '/projects/ecommerce-site.webp',
          tech: ['Next.js', 'Tailwind', 'Stripe'],
          href: '#contact',
        },
        {
          id: 'p4',
          category: 'automation' as const,
          categoryLabel: 'تكامل الأنظمة',
          title: 'محرّك مزامنة CRM والجداول',
          description:
            'منطق أعمال مخصّص يربط CRM والجداول وقواعد البيانات في سير واحد.',
          image: '/projects/api-integration.webp',
          tech: ['Python', 'REST API', 'PostgreSQL'],
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
        message: 'تفاصيل المشروع',
        messagePlaceholder: 'أخبرنا بما تريد بناءه…',
        submit: 'اطلب استشارة',
        success: 'شكرًا لك! سنتواصل معك خلال ٢٤ ساعة.',
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
