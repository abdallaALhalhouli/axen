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
      pricing: 'Prices',
      contact: 'Contact',
      cta: 'Book Free Consultation',
      langLabel: 'عربي',
    },
    hero: {
      badge: 'For clinics and shops in Jordan',
      headline: 'Someone answers your WhatsApp all day — and books the appointments.',
      sub: 'It is 9pm and someone is asking what a cleaning costs. If nobody answers, tomorrow they book somewhere else. We make sure you answer them while you sleep — in Arabic, at your prices, with the appointment actually in the book.',
      primary: 'Book Free Consultation',
      secondary: 'Message us on WhatsApp',
      metrics: [
        { value: '24/7', label: 'Answers while you sleep' },
        { value: 'AR + EN', label: 'Speaks both languages' },
        { value: 'JD 0', label: 'Fees per employee' },
      ],
      chat: [
        { from: 'user' as const, text: 'بدي أحجز موعد' },
        {
          from: 'bot' as const,
          text: 'أهلاً فيك 🙏 هاي خدماتنا:\n1) فحص وتنظيف — 25 دينار\n2) حشوة أسنان — 35 دينار',
        },
        { from: 'user' as const, text: '1' },
        {
          from: 'bot' as const,
          text: 'تم حجز موعدك ✅\nالطبيب: د. وائل أبو نواس\nالاثنين · 09:00',
        },
      ],
      chatCaption: 'An actual booking, start to finish, in Jordanian Arabic.',
    },
    terminal: {
      tag: 'محادثة حجز حقيقية',
      title: 'Watch an appointment get booked',
      subtitle:
        'This is not a promo video. These are the exact messages your patient sees. It asks permission before storing anything about them, offers only the times your doctor is genuinely free, and books nothing until they say yes.',
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
        web: 'Websites',
        automation: 'WhatsApp replies',
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
          categoryLabel: 'WhatsApp replies',
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
          title: 'A website that is yours',
          description:
            'A fast website built from scratch for you. The one you are reading is one of them — same work, same standard.',
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
            'No platform commission on top of your payment processor',
          ],
          href: '#contact',
        },
        {
          id: 'p4',
          kind: 'capability' as const,
          category: 'automation' as const,
          categoryLabel: 'Connecting programs',
          title: 'Your programs, connected',
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
      title: 'Three things. Take one, or all three.',
      subtitle: 'Each one works on its own. They work better together.',
      items: [
        {
          title: 'A website that is yours',
          description:
            'Fast enough to open in under a second, right on a phone, and findable on Google when someone searches for what you do.',
          points: [
            'Opens in under a second',
            'Looks right on a phone',
            'Shows up on Google',
          ],
        },
        {
          title: 'Automatic replies on WhatsApp & Instagram',
          description:
            'Answers your customers, gives them prices and opening hours, and books their appointment or takes their order — all day, in Arabic.',
          points: [
            'Books appointments and takes orders',
            'Replies at 2am',
            'Answers in Jordanian Arabic',
          ],
        },
        {
          title: 'Your programs, connected',
          description:
            'If you use several programs and keep typing the same thing into each one, we join them up so the work happens once.',
          points: [
            'No typing the same thing twice',
            'Sheets that fill themselves',
            'Every program talks to the others',
          ],
        },
      ],
    },
    why: {
      eyebrow: 'Why AXEN',
      title: 'Built for you, not from a template',
      cards: {
        speed: {
          title: 'Running in weeks, not months',
          description:
            'We build in short stretches, so you see the thing working on your own phone within weeks.',
        },
        bloat: {
          title: 'No monthly fee to us',
          description:
            'Your system needs hosting, a database and WhatsApp — you pay those companies directly, at their own price. We take no monthly fee and nothing per employee, and the program ends up belonging to you.',
        },
        scalable: {
          title: 'It grows with you',
          description:
            'Open a second branch or add three more staff and the program stretches to fit, instead of starting over.',
        },
        local: {
          title: 'We know this market',
          description:
            'Your customers write in Jordanian Arabic, and the system understands them. We also know how people here actually decide to buy.',
        },
        stat: { value: '24/7', label: 'Working without a break' },
      },
      costNote:
        'The monthly running cost is paid to the companies that host it — the website, the database, and WhatsApp messages. It goes up with how many bookings and messages you get, not with how many people you employ. Every clinic is a different size, so we work the number out with you before you sign anything.',
    },
    founder: {
      eyebrow: 'Who you would be working with',
      name: 'Abdallah Alhalhouli',
      role: 'Founder — AXEN, Amman',
      lines: [
        'I am Abdallah Alhalhouli, and I built ClinicFlow myself, line by line.',
        'AXEN is new, and that means one thing for you: you deal with me directly — not a salesperson, and not a support queue that answers next week.',
        'I started with clinics because the problem there is easy to measure. Every appointment that slips has a price, and every question your staff answers for the fortieth time costs someone an afternoon.',
      ],
      cta: 'Message me directly',
    },
    pricing: {
      eyebrow: 'What it costs',
      title: 'Prices, before you have to ask',
      subtitle:
        'You know the feeling: you ask what something costs and they say “book a call”. Not here. The numbers are written down, so you can read them in your own time and decide on your own.',
      note: 'A first build covers setup, your content and training your staff. Monthly running costs go to the hosting and WhatsApp providers directly — see the note above.',
      plans: [
        {
          name: 'A website',
          from: 'From JD 250',
          body: 'A fast site that works on a phone and shows up on Google. Yours to keep.',
          points: ['Up to 5 pages', 'Arabic and English', 'Live in 2–3 weeks'],
        },
        {
          name: 'WhatsApp that answers',
          from: 'From JD 450',
          body: 'Replies to your customers, quotes your prices and hours, and books the appointment.',
          points: [
            'Books, reschedules and cancels',
            'Your services and your staff',
            'Live in 3–4 weeks',
          ],
          featured: true,
        },
        {
          name: 'Both together',
          from: 'From JD 600',
          body: 'The site brings them in, WhatsApp books them. One project, one price.',
          points: ['Everything above', 'One dashboard', 'Live in 4–6 weeks'],
        },
      ],
    },
    contact: {
      eyebrow: 'Let’s talk',
      title: 'Tell me about your clinic',
      subtitle:
        'I don’t need a technical brief or a big pitch from you. Tell me what eats your day, and I’ll tell you whether I can fix it — and if I can’t, I’ll tell you that too.',
      whatsapp: {
        title: 'WhatsApp',
        description: 'Quickest way. You get me, not a rep.',
        action: 'Open the chat',
      },
      email: {
        title: 'Email',
        description: 'If you’d rather write it out in your own time.',
        action: 'Send an email',
      },
      form: {
        title: 'Schedule a Consultation',
        name: 'Full Name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'you@company.com',
        optional: 'optional',
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
      tagline: 'Websites and WhatsApp systems that answer your customers when you can’t. Made in Amman.',
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
      pricing: 'الأسعار',
      contact: 'تواصل',
      cta: 'احجز استشارة مجانية',
      langLabel: 'EN',
    },
    hero: {
      badge: 'للعيادات والمحلات في الأردن',
      headline: 'موظف بيرد على واتساب طول اليوم، وبيحجز المواعيد لحاله.',
      sub: 'الساعة ٩ بالليل، حدا بيسأل عن سعر التنظيف. إذا ما إجاه رد، بكرا بيحجز عند غيرك. منخليك تردّ عليه وإنت نايم — بالعربي، بسعرك إنت، وبموعد محجوز فعلاً.',
      primary: 'احجز استشارة مجانية',
      secondary: 'راسلنا على واتساب',
      metrics: [
        { value: '٢٤/٧', label: 'بيرد حتى وإنت نايم' },
        { value: 'عربي + إنجليزي', label: 'بيحكي اللغتين' },
        { value: '٠ دينار', label: 'رسوم على كل موظف' },
      ],
      chat: [
        { from: 'user' as const, text: 'بدي أحجز موعد' },
        {
          from: 'bot' as const,
          text: 'أهلاً فيك 🙏 هاي خدماتنا:\n1) فحص وتنظيف — 25 دينار\n2) حشوة أسنان — 35 دينار',
        },
        { from: 'user' as const, text: '1' },
        {
          from: 'bot' as const,
          text: 'تم حجز موعدك ✅\nالطبيب: د. وائل أبو نواس\nالاثنين · 09:00',
        },
      ],
      chatCaption: 'حجز حقيقي من أوله لآخره، بالعربي الأردني.',
    },
    terminal: {
      tag: 'محادثة حجز حقيقية',
      title: 'شوف الموعد بينحجز قدامك',
      subtitle:
        'مش فيديو دعائي. هاي بالضبط الرسائل اللي بيشوفها مريضك. بيستأذن قبل ما يسجّل أي معلومة عنه، وبيعطي بس الأوقات اللي دكتورك فاضي فيها فعلاً، وما بيحجز إشي قبل ما المريض يقول موافق.',
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
        web: 'مواقع',
        automation: 'رد تلقائي على واتساب',
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
          categoryLabel: 'رد تلقائي على واتساب',
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
          title: 'موقع خاص فيك',
          description:
            'موقع سريع مبني من الصفر إلك. الموقع اللي بتقرأ فيه هلأ واحد منهم — نفس الشغل ونفس المستوى.',
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
            'بدون عمولة منصة فوق رسوم بوابة الدفع',
          ],
          href: '#contact',
        },
        {
          id: 'p4',
          kind: 'capability' as const,
          category: 'automation' as const,
          categoryLabel: 'ربط برامج',
          title: 'ربط برامجك مع بعض',
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
      title: 'ثلاث خدمات. خذ وحدة، أو الثلاثة.',
      subtitle: 'كل وحدة بتشتغل لحالها، وبتشتغل أحسن مع بعض.',
      items: [
        {
          title: 'موقع خاص فيك',
          description:
            'بيفتح بأقل من ثانية، وبيبيّن مضبوط على الموبايل، وبيطلع بجوجل لما حدا يدوّر على خدمتك.',
          points: [
            'بيفتح بأقل من ثانية',
            'مضبوط على الموبايل',
            'بيطلع بنتائج جوجل',
          ],
        },
        {
          title: 'رد تلقائي على واتساب وانستقرام',
          description:
            'بيرد على أسئلة زبائنك، بيعطيهم الأسعار وأوقات الدوام، وبيسجّل موعدهم أو طلبهم — طول اليوم، بالعربي.',
          points: [
            'بيسجّل المواعيد والطلبات',
            'بيرد الساعة ٢ بالليل',
            'بيجاوب بالعربي الأردني',
          ],
        },
        {
          title: 'ربط برامجك مع بعض',
          description:
            'إذا عندك أكثر من برنامج وبتعيد إدخال نفس المعلومة بكل واحد، منربطهم مع بعض عشان يصير الشغل مرة وحدة.',
          points: [
            'بلا إعادة إدخال',
            'الجداول بتتعبّى لحالها',
            'كل برامجك بتحكي مع بعض',
          ],
        },
      ],
    },
    why: {
      eyebrow: 'لماذا AXEN',
      title: 'مبني إلك إنت، مش قالب جاهز على ٢٠٠ عيادة',
      cards: {
        speed: {
          title: 'شغّال خلال أسابيع، مش شهور',
          description:
            'منشتغل على دفعات قصيرة، فبتشوف النظام شغّال على تلفونك خلال أسابيع.',
        },
        bloat: {
          title: 'ما في رسوم شهرية إلنا',
          description:
            'نظامك بدّه استضافة وقاعدة بيانات وواتساب — هاي بتدفعها للشركات المزوّدة مباشرة، بسعرها هي. إحنا ما بناخد رسوم شهرية ولا رسوم على كل موظف، والبرنامج بالآخر بيصير ملكك.',
        },
        scalable: {
          title: 'بيكبر معك',
          description:
            'لما تفتح فرع تاني أو تزيد أطباء، البرنامج بيتوسّع معك بدل ما تبدأ من الصفر.',
        },
        local: {
          title: 'بنفهم السوق هون',
          description:
            'زبائنك بيكتبوا بالعربي الأردني، والنظام بيفهمهم. وبنعرف كيف بيقرر الناس هون يشتروا.',
        },
        stat: { value: '٢٤/٧', label: 'شغّال بدون توقف' },
      },
      costNote:
        'الكلفة الشهرية بتدفعها للشركات اللي بتشغّل النظام — الموقع، وقاعدة البيانات، ورسائل واتساب. وبتزيد حسب عدد الحجوزات والرسائل اللي بتوصلك، مش حسب عدد موظفينك. وكل عيادة حجمها مختلف، فمنحسب الرقم معك قبل ما توقّع أي إشي.',
    },
    founder: {
      eyebrow: 'مع مين رح تشتغل',
      name: 'عبدالله الحلحولي',
      role: 'مؤسس AXEN — عمّان',
      lines: [
        'أنا عبدالله الحلحولي، وأنا اللي بنيت ClinicFlow من أول سطر لآخره.',
        'AXEN شركة جديدة، وهاد بيعني إشي واحد إلك: بتحكي معي أنا مباشرة — مش مع موظف مبيعات، ولا مع فريق دعم بيرد بعد أسبوع.',
        'بديت بالعيادات لأن المشكلة فيها واضحة وبتنقاس. كل موعد بيضيع إله سعر، وكل سؤال بترد عليه الموظفة للمرة الأربعين بياخد من يومها ساعة.',
      ],
      cta: 'راسلني أنا مباشرة',
    },
    pricing: {
      eyebrow: 'الأسعار',
      title: 'الأسعار مكتوبة، قبل ما تضطر تسأل',
      subtitle:
        'بتعرف هالإحساس: بتسأل عن سعر، وبيقلّك «احجز مكالمة». إحنا مش هيك. هاي أرقامنا مكتوبة، تقرأها وإنت مرتاح وتقرر لحالك.',
      note: 'سعر البناء بيشمل التجهيز، وإدخال محتواك، وتدريب موظفينك. أما الكلفة الشهرية فبتدفعها للاستضافة وواتساب مباشرة — مذكورة فوق.',
      plans: [
        {
          name: 'موقع',
          from: 'من ٢٥٠ دينار',
          body: 'موقع سريع بيشتغل على الموبايل وبيطلع بجوجل. وبيصير ملكك.',
          points: ['لحد ٥ صفحات', 'عربي وإنجليزي', 'جاهز خلال ٢–٣ أسابيع'],
        },
        {
          name: 'واتساب بيرد',
          from: 'من ٤٥٠ دينار',
          body: 'بيرد على زبائنك، بيعطيهم أسعارك وأوقاتك، وبيحجزلهم الموعد.',
          points: [
            'بيحجز ويأجّل ويلغي',
            'بخدماتك إنت وأطباءك إنت',
            'جاهز خلال ٣–٤ أسابيع',
          ],
          featured: true,
        },
        {
          name: 'الاثنين مع بعض',
          from: 'من ٦٠٠ دينار',
          body: 'الموقع بيجيبهم، وواتساب بيحجزلهم. مشروع واحد، وسعر واحد.',
          points: ['كل اللي فوق', 'لوحة تحكم وحدة', 'جاهز خلال ٤–٦ أسابيع'],
        },
      ],
    },
    contact: {
      eyebrow: 'خلينا نحكي',
      title: 'احكيلي عن عيادتك',
      subtitle: 'ما بدي منك مواصفات تقنية ولا كلام كبير. احكيلي شو بيضيّع وقتك كل يوم، وأنا بقلّك إذا بقدر أحلّه — وإذا ما بقدر، بقلّك كمان.',
      whatsapp: {
        title: 'واتساب',
        description: 'أسرع طريقة. بترد عليك أنا شخصياً، مش موظف.',
        action: 'افتح المحادثة',
      },
      email: {
        title: 'إيميل',
        description: 'إذا بتفضّل تكتب على راحتك.',
        action: 'ابعت إيميل',
      },
      form: {
        title: 'احجز استشارة',
        name: 'الاسم الكامل',
        namePlaceholder: 'اسمك',
        email: 'البريد الإلكتروني',
        emailPlaceholder: 'you@company.com',
        optional: 'اختياري',
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
      tagline: 'منبني مواقع وأنظمة واتساب بترد على زبائنك لما ما بتقدر ترد إنت. من عمّان.',
      rights: 'جميع الحقوق محفوظة.',
      madeIn: 'صُمّم في الأردن 🇯🇴',
      linksTitle: 'تصفّح',
      socialTitle: 'القنوات',
    },
  },
}

export type Dict = (typeof dictionary)['en']
