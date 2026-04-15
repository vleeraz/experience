export interface Program {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  features: readonly string[];
  note?: string;
  price: string;
  priceNote: string;
}

export interface Retreat {
  id: string;
  title: string;
  image: string;
  features?: readonly string[];
  featured?: boolean;
  description?: string;
  extra?: string;
  price: string;
  priceNote?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  image: string;
  shortBio: string;
  fullBio: string[];
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Retreats', href: '#retreats' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Team', href: '#team' },
  { label: 'Book', href: '#booking' },
];

export const programs: Program[] = [
  {
    id: 'mid-day-reset',
    title: 'Mid-day Reset',
    subtitle: 'Breathwork & Meditation Journey',
    image: '/images/program1.jpg',
    features: [
      'Improve focus and performance',
      'Nervous system regulation',
      'Deep mental and physical relaxation',
      'Restore energy and reduce fatigue',
    ],
    note: 'This program can also take place online.',
    price: '€200 – €400',
    priceNote: 'depending on group size',
  },
  {
    id: 'energy-activation',
    title: 'Energy & Performance Activation',
    subtitle: 'Somatic Yoga & Nervous System Workshop',
    image: '/images/program2.jpg',
    features: [
      'Release built-up tension in the body and mind',
      'Learn tools to regulate the nervous system',
      'Activate sustainable energy levels',
      'Return with clarity, focus and performance',
    ],
    price: '€400 – €600',
    priceNote: 'depending on group size',
  },
  {
    id: 'quantum-field',
    title: 'A Moment of Rest in the Quantum Field',
    subtitle: 'Guided Theta Meditation',
    image: '/images/program3.jpg',
    features: [
      'Access deep theta brainwave states for a deep reset',
      'Calm the nervous system and release mental overload',
      'Expand clarity, creativity and awareness',
      'Restore energy through universal life force energy',
    ],
    price: '€400 – €600',
    priceNote: 'depending on group size',
  },
];

export const retreats: Retreat[] = [
  {
    id: 'one-day',
    title: 'One Day Staff Retreat',
    image: '/images/retreat1.jpg',
    features: [
      'Full Retreat Planning & Coordination',
      'Venue Sourcing & Setup',
      'Yoga & Guided Meditation Sessions',
      'Breathwork & Nervous System Reset',
      'Group Hypnosis or Deep Relaxation Journey',
      'Team Connection & Integration Practices',
      'Optional Catering & Refreshments',
    ],
    price: '€1,500 – €3,000',
    priceNote: 'depending on group size',
  },
  {
    id: 'multi-day',
    title: '2-3 Day All-Inclusive Staff Retreat',
    image: '/images/retreat2.jpg',
    featured: true,
    description: 'An exclusive, all-inclusive retreat experience designed to restore energy, enhance performance and support holistic wellbeing through a carefully curated blend of practices.',
    extra: 'More information available and tailored to your specific needs.',
    price: 'Custom',
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 'yllka',
    name: 'Yllka',
    image: '/images/yllka.jpg',
    shortBio:
      'Spending over a decade in corporate environments, including in executive leadership positions, gave me firsthand experience of the pressure, responsibility, and pace of high-performance settings, and how often wellbeing gets pushed aside within them.',
    fullBio: [
      'Spending over a decade in corporate environments, including in executive leadership positions, gave me firsthand experience of the pressure, responsibility, and pace of high-performance settings, and how often wellbeing gets pushed aside within them.',
      'Being born and raised in London and now based in Prishtina, I have experienced different cultures and ways of living. This contrast deepened my awareness of how much our external environment shapes our internal state, and how essential it is to intentionally create space to reconnect with ourselves.',
      'This awareness led me to explore practices that support a more balanced and sustainable way of living. As I deepened my own inner journey, I became a certified Yoga and Meditation Teacher (trained in Bali), a Somatic Trauma Release Breathwork Facilitator, and a Quantum Hypnosis practitioner trained in the method of Dolores Cannon. I also hold an MA in International Business and a BA in Marketing & Communications.',
      'My work is rooted in a holistic approach to wellbeing, integrating mind, body, and soul. I create spaces where individuals can slow down, release what they have been carrying, and return to a more grounded and connected state.',
      'Because when we shift our inner state, everything we experience begins to shift with it.',
    ],
  },
  {
    id: 'vlera',
    name: 'Vlera',
    image: '/images/vlera.jpg',
    shortBio:
      'Working across different industries has shaped a flexible and people-centred approach, allowing me to understand team dynamics, adapt to different environments, and support diverse groups effectively.',
    fullBio: [
      'Working across different industries has shaped a flexible and people-centred approach, allowing me to understand team dynamics, adapt to different environments, and support diverse groups effectively.',
      'As co-founder of Exodia Creates, a marketing agency, I\'ve seen how closely team wellbeing is linked to performance. After integrating AwakenWithYllka practices within the team, I observed a clear shift in wellbeing, reflected in stronger collaboration, focus, and results.',
      'I have organized and managed B2B roundtables for executives at companies such as Webex and Microsoft, overseeing the full experience and ensuring every detail was executed to a high standard.',
      'Alongside this, I guide wellbeing experiences that help individuals reset, become more present, and engage more effectively both individually and as part of a team.',
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      'Our team came back from the Mid Reset session visibly lighter and more focused. It was exactly what we needed between intense conference sessions — the energy in the room shifted completely.',
    author: 'Sarah Mitchell',
    role: 'Event Director, TechSummit Europe',
  },
  {
    id: 2,
    quote:
      'After the full-day retreat, we noticed a measurable improvement in team communication and morale in the weeks that followed. The breathwork and meditation were transformative — several team members said it was the best investment in their wellbeing they\'d ever experienced.',
    author: 'James Korner',
    role: 'Head of People & Culture, Nortex Solutions',
  },
  {
    id: 3,
    quote:
      'We brought the Energy & Performance Activation into our quarterly planning week and it was a game-changer. The somatic yoga helped our leadership team release tension they didn\'t even realise they were carrying. We\'ve now made it a regular part of our offsites.',
    author: 'Diana Rrahmani',
    role: 'COO, Balkan Digital Ventures',
  },
];

export const galleryImages = [
  '/images/retreat1.jpg',
  '/images/retreat2.jpg',
  '/images/program1.jpg',
  '/images/program2.jpg',
  '/images/program3.jpg',
  '/images/yllka.jpg',
  '/images/vlera.jpg',
  '/images/logo.png',
];

export const bookingPrograms = [
  { label: 'Mid-day Reset', price: '€200 – €400' },
  { label: 'Energy & Performance Activation', price: '€400 – €600' },
  { label: 'A Moment of Rest in the Quantum Field', price: '€400 – €600' },
  { label: 'One Day Staff Retreat', price: '€1,500 – €3,000' },
  { label: '2-3 Day All-Inclusive Staff Retreat', price: 'Custom' },
];
