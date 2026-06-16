// ─────────────────────────────────────────────────────────────
// Edit only this file to update the whole site.
// Content sourced from https://yoonjulee.framer.website/
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Yoonju',
  fullName: 'Yoonju Lee',
  role: 'a UX/UI designer',
  emoji: '👋',
  intro:
    'A passionate designer, crafting thoughtful digital experiences rooted in empathy and clarity.',
  email: 'lovingjoo@gmail.com',
  location: 'Vancouver, Canada',
  available: true,
}

// Top navigation
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Works', href: '#works' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

// Social links
export const socials = [
  { label: 'Email', href: 'mailto:lovingjoo@gmail.com', short: '✉' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yoon-ju-lee/',
    short: 'in',
  },
]

// Selected works — each item renders as one large card.
export const works = [
  {
    title: 'Loopin',
    category: 'Mobile App · Health & Wellness',
    description:
      'A mobile app that helps parents of neurodivergent children stay emotionally connected, reduce daily stress, and build healthy routines through mood check-ins, calming tools, and playful bonding activities.',
    tools: ['Figma', 'Illustrator', 'After Effects'],
    timeline: '13 weeks',
    link: 'https://yoonjulee.framer.website/work1',
    tint: 'pink',
  },
  {
    title: 'Receiptly',
    category: 'Web & Mobile · Financial Tracking',
    description:
      'An AI-powered platform that automatically captures and categorizes receipts, generates investor-ready reports, and integrates quickly with the tools small businesses already use.',
    tools: ['Figma', 'Illustrator', 'Jira'],
    timeline: '13 weeks',
    link: 'https://yoonjulee.framer.website/work2',
    tint: 'blue',
  },
  {
    title: 'Upzy',
    category: 'Web & Mobile · Sustainable Lifestyle',
    description:
      'A location-based web app that connects users with local artisans to upcycle, tailor, or donate clothes — making wardrobe updates easy, creative, and sustainable while supporting local talent.',
    tools: ['Figma', 'Illustrator', 'Miro'],
    timeline: '13 weeks',
    link: 'https://yoonjulee.framer.website/work3',
    tint: 'purple',
  },
  {
    title: 'The Visit Magazine',
    category: 'Editorial · Print Design',
    description:
      'A magazine designed in InDesign that showcases the stunning natural beauty of Tofino and Canada’s landscapes through travel guidance, scenic imagery, and outdoor exploration.',
    tools: ['InDesign', 'Photoshop', 'Illustrator'],
    timeline: '6 weeks',
    link: 'https://yoonjulee.framer.website/work4',
    tint: 'green',
  },
]

// About section
export const about = {
  heading: 'Hey! That’s me.',
  body: [
    'Hello! I’m Yoonju Lee, a UI/UX designer with a diploma in Web and Mobile App Design and Development from Langara College, where I built strong skills in wireframing, prototyping, and visual design.',
    'Before design, I studied psychology and social welfare and spent five years working as a professional negotiator. That background shapes how I create intuitive, people-first experiences.',
    'I’m drawn to minimal and modern design — clean, intentional, and user-focused. My love for travel and camping constantly inspires me, helping me see the world from new perspectives.',
  ],
}

// Tools & skills
export const capabilities = [
  'Figma',
  'Photoshop',
  'Illustrator',
  'InDesign',
  'After Effects',
  'Premiere Pro',
  'HTML & CSS',
  'Wireframing',
  'Prototyping',
  'User Research',
]

// A few things that inspire me off the clock
export const interests = [
  'Dale Chihuly glass sculptures',
  'Sunset photography at Long Beach, Pacific Rim',
  'Camping at Garibaldi Lake',
  'Travel & photography, inspired by Jeju Island',
]

// Numbers worth showing (use an empty array [] to hide)
export const stats = []

// Contact section
export const contact = {
  heading: 'Let’s build something\nmeaningful together.',
  sub: 'Something caught your eye? I’d love to connect.',
  cta: 'Send me a message',
}
