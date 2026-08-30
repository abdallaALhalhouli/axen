import type { Lang } from '@/lib/i18n'

/**
 * Content for the ClinicFlow case study.
 *
 * Kept out of lib/i18n.ts because that file carries the shared site copy and
 * is already large; a case study is self-contained and reads better next to
 * the page that renders it. Same bilingual shape, so it plugs into the
 * existing LanguageProvider.
 *
 * Every figure here is read from the delivered system, not estimated.
 */

export type CaseContent = {
  back: string
  eyebrow: string
  title: string
  standfirst: string
  facts: { label: string; value: string }[]

  problemTitle: string
  problems: { title: string; body: string }[]

  flowTitle: string
  flowIntro: string
  flow: { step: string; body: string }[]

  shotsTitle: string
  shots: { src: string; caption: string }[]

  rulesTitle: string
  rulesIntro: string
  rules: string[]

  stackTitle: string
  stack: { label: string; value: string }[]

  honestTitle: string
  honest: string[]

  ctaTitle: string
  ctaBody: string
  ctaButton: string
}

export const caseClinicFlow: Record<Lang, CaseContent> = {
  en: {
    back: 'Back to work',
    eyebrow: 'Case Study · AI & WhatsApp Automation',
    title: 'A clinic receptionist that never sleeps',
    standfirst:
      'Patients book appointments through a WhatsApp conversation in Jordanian Arabic. The clinic gets a private dashboard where every booking, conversation and patient file lives in one place.',
    facts: [
      { label: 'Sector', value: 'Dental & medical clinics' },
      { label: 'Market', value: 'Jordan' },
      { label: 'Status', value: 'Deployed' },
      { label: 'Interface', value: 'Arabic, right-to-left' },
    ],

    problemTitle: 'The problem',
    problems: [
      {
        title: 'Bookings live in three places at once',
        body: 'Phone calls, WhatsApp messages on a receptionist’s personal handset, and a paper diary. Nothing reconciles, and nobody can see the day at a glance.',
      },
      {
        title: 'The same five questions, all day',
        body: 'Opening hours, location, prices, which doctor, is there a slot on Tuesday. A receptionist answers them dozens of times a day instead of handling the people in front of her.',
      },
      {
        title: 'Two patients, one slot',
        body: 'The failure that costs a clinic its reputation. It happens whenever two people are booked from two different places at the same time.',
      },
    ],

    flowTitle: 'How a patient books',
    flowIntro:
      'Eight steps, almost all of them a single tap. The order is deliberate: consent comes before any personal detail, and confirmation comes last.',
    flow: [
      {
        step: 'Consent',
        body: 'What will be stored, who can see it, and the right to refuse. Declining stops everything and saves nothing. Asked once per patient.',
      },
      { step: 'Service', body: 'From the clinic’s real service list, with duration and price.' },
      { step: 'Doctor', body: 'Only the doctors who actually provide that service appear.' },
      { step: 'Day', body: 'Working days only.' },
      {
        step: 'Time',
        body: 'Slots computed live from the service duration and the doctor’s existing appointments — never a fixed list.',
      },
      { step: 'Name', body: 'With a guard that rejects text mangled by a broken encoding.' },
      {
        step: 'Contact number',
        body: 'The number the patient types is the one stored — not the WhatsApp account they message from. Arabic or Latin digits, local or international format.',
      },
      {
        step: 'Review & confirm',
        body: 'A full summary. No appointment exists until they confirm, and availability is checked one last time immediately before saving.',
      },
    ],

    shotsTitle: 'The staff side',
    shots: [
      {
        src: '/projects/clinicflow-dashboard.webp',
        caption:
          'Today at a glance: appointments, attendance, no-shows and the attendance rate, each with its seven-day trend, above a timeline of the clinic day.',
      },
      {
        src: '/projects/clinicflow-inbox.webp',
        caption:
          'The WhatsApp inbox. This is a real booking conversation — consent, the summary, and the confirmation the patient received.',
      },
      {
        src: '/projects/clinicflow-appointments.webp',
        caption:
          'Every appointment, searchable and filterable, with rescheduling, cancellation and manual booking.',
      },
    ],

    rulesTitle: 'What the system refuses to do',
    rulesIntro:
      'These are enforced in the database, not in the interface — so they hold whoever is asking: the bot, the dashboard, or the API directly.',
    rules: [
      'Two appointments cannot overlap for the same doctor.',
      'No appointment is created before the patient explicitly confirms.',
      'Availability is re-checked immediately before saving, so a slot taken while the patient was typing sends them back to choose again instead of failing.',
      'A doctor cannot be booked for a service they do not provide.',
      'A duplicate WhatsApp delivery cannot create the same appointment twice.',
      'When a staff member takes over a conversation, the bot goes silent until a person hands it back.',
      'The assistant answers questions but never writes to the database, never diagnoses, and never invents a price or a free slot.',
    ],

    stackTitle: 'Under the hood',
    stack: [
      { label: 'Backend', value: 'Python · FastAPI · SQLModel' },
      { label: 'Database', value: 'PostgreSQL · 18 tables' },
      { label: 'Dashboard', value: 'React · Vite · Tailwind' },
      { label: 'Messaging', value: 'WhatsApp Cloud API' },
      { label: 'API surface', value: '47 documented endpoints' },
      { label: 'Automated tests', value: '255, all passing' },
    ],

    honestTitle: 'Deliberately out of scope',
    honest: [
      'No payments, no electronic medical records, no insurance processing.',
      'Built for one clinic per deployment — data is isolated by having its own database, not by a filter in a query.',
      'The consent notice follows data-protection principles but has not been reviewed by a lawyer.',
    ],

    ctaTitle: 'Want this for your clinic?',
    ctaBody:
      'We set it up with your number, your doctors, your services and your working hours. You get a private dashboard and a WhatsApp line that answers at 2am.',
    ctaButton: 'Book a free consultation',
  },

  ar: {
    back: 'رجوع للأعمال',
    eyebrow: 'دراسة حالة · الذكاء الاصطناعي وأتمتة واتساب',
    title: 'موظف استقبال لا ينام',
    standfirst:
      'المريض يحجز موعده بمحادثة واتساب بالعربية الأردنية. والعيادة تحصل على لوحة خاصة فيها كل موعد ومحادثة وملف مريض بمكان واحد.',
    facts: [
      { label: 'القطاع', value: 'عيادات الأسنان والطب' },
      { label: 'السوق', value: 'الأردن' },
      { label: 'الحالة', value: 'منشور ويعمل' },
      { label: 'الواجهة', value: 'عربية من اليمين لليسار' },
    ],

    problemTitle: 'المشكلة',
    problems: [
      {
        title: 'المواعيد في ثلاثة أماكن معاً',
        body: 'مكالمات هاتفية، ورسائل واتساب على جوال الموظفة الشخصي، ودفتر ورقي. لا شيء يتطابق، ولا أحد يرى اليوم كاملاً بنظرة واحدة.',
      },
      {
        title: 'نفس الأسئلة الخمسة طوال اليوم',
        body: 'الدوام، الموقع، الأسعار، أي طبيب، في وقت يوم الثلاثاء؟ الموظفة تجيب عليها عشرات المرات يومياً بدل ما تخدم المراجع الواقف قدامها.',
      },
      {
        title: 'مريضان في نفس الوقت',
        body: 'الخطأ الذي يكلّف العيادة سمعتها. يحدث كلما حُجز شخصان من مكانين مختلفين في نفس اللحظة.',
      },
    ],

    flowTitle: 'كيف يحجز المريض',
    flowIntro:
      'ثماني خطوات، معظمها ضغطة واحدة. والترتيب مقصود: الموافقة قبل أي معلومة شخصية، والتأكيد في النهاية.',
    flow: [
      {
        step: 'الموافقة',
        body: 'ما الذي سيُحفظ، ومن يطّلع عليه، وحق الرفض. الرفض يوقف كل شيء ولا يحفظ شيئاً. تُطلب مرة واحدة لكل مريض.',
      },
      { step: 'الخدمة', body: 'من قائمة خدمات العيادة الفعلية مع المدة والسعر.' },
      { step: 'الطبيب', body: 'تظهر فقط أسماء الأطباء الذين يقدّمون هذه الخدمة.' },
      { step: 'اليوم', body: 'أيام الدوام فقط.' },
      {
        step: 'الوقت',
        body: 'الأوقات محسوبة لحظياً من مدة الخدمة ومواعيد الطبيب المحجوزة — لا من قائمة ثابتة.',
      },
      { step: 'الاسم', body: 'مع فحص يرفض النص المشوّه الذي يصل أحياناً بترميز خاطئ.' },
      {
        step: 'رقم التواصل',
        body: 'الرقم الذي يكتبه المريض هو ما يُحفظ — لا رقم واتساب الذي يراسل منه. يُقبل بالأرقام العربية أو الإنجليزية، محلياً أو دولياً.',
      },
      {
        step: 'المراجعة والتأكيد',
        body: 'ملخص كامل. لا يوجد موعد قبل أن يؤكّد، ويُعاد فحص التوفّر مرة أخيرة قبل الحفظ مباشرة.',
      },
    ],

    shotsTitle: 'جهة الموظفين',
    shots: [
      {
        src: '/projects/clinicflow-dashboard.webp',
        caption:
          'اليوم بنظرة: المواعيد والحضور والغياب ونسبة الحضور، كل رقم مع منحنى سبعة أيام، فوق خط زمني ليوم العيادة.',
      },
      {
        src: '/projects/clinicflow-inbox.webp',
        caption:
          'صندوق وارد واتساب. هذه محادثة حجز حقيقية — الموافقة، والملخص، والتأكيد الذي وصل المريض.',
      },
      {
        src: '/projects/clinicflow-appointments.webp',
        caption:
          'كل المواعيد، بحث وفلاتر، مع إعادة الجدولة والإلغاء والحجز اليدوي.',
      },
    ],

    rulesTitle: 'ما يرفض النظام أن يفعله',
    rulesIntro:
      'هذه الحمايات مفروضة في قاعدة البيانات لا في الواجهة — فتصمد أمام أي طلب: من البوت، أو اللوحة، أو الـAPI مباشرة.',
    rules: [
      'لا يمكن أن يتداخل موعدان لنفس الطبيب.',
      'لا يُنشأ موعد قبل أن يؤكّد المريض صراحةً.',
      'يُعاد فحص التوفّر قبل الحفظ مباشرة، فإذا حُجز الوقت أثناء كتابة المريض لاسمه يُعاد لاختيار وقت آخر بدل أن يفشل الحجز.',
      'لا يمكن حجز طبيب لخدمة لا يقدّمها.',
      'تكرار إشعار واتساب لا يُنشئ الموعد مرتين.',
      'حين يتولّى موظف محادثة، يصمت البوت حتى يعيدها إنسان.',
      'المساعد يجيب عن الأسئلة، لكنه لا يكتب في قاعدة البيانات، ولا يشخّص، ولا يخترع سعراً أو وقتاً متاحاً.',
    ],

    stackTitle: 'تحت الغطاء',
    stack: [
      { label: 'الخادم', value: 'Python · FastAPI · SQLModel' },
      { label: 'قاعدة البيانات', value: 'PostgreSQL · ١٨ جدولاً' },
      { label: 'اللوحة', value: 'React · Vite · Tailwind' },
      { label: 'المراسلة', value: 'WhatsApp Cloud API' },
      { label: 'الواجهات البرمجية', value: '٤٧ مساراً موثّقاً' },
      { label: 'الاختبارات الآلية', value: '٢٥٥ اختباراً، كلها ناجحة' },
    ],

    honestTitle: 'خارج النطاق عمداً',
    honest: [
      'لا مدفوعات، ولا ملف طبي إلكتروني، ولا معالجة تأمين.',
      'مبني لعيادة واحدة لكل نشر — البيانات معزولة بقاعدة بيانات مستقلة، لا بفلتر في استعلام.',
      'نص الموافقة مبني على مبادئ حماية البيانات لكنه لم يراجَع من محامٍ بعد.',
    ],

    ctaTitle: 'بدك إياه لعيادتك؟',
    ctaBody:
      'منجهّزه برقمك وأطبائك وخدماتك وساعات دوامك. بتحصل على لوحة خاصة وخط واتساب بيرد الساعة ٢ بالليل.',
    ctaButton: 'احجز استشارة مجانية',
  },
}
