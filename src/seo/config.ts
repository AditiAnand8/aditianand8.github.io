export const SITE_URL = 'https://aditianand8.github.io'
export const SITE_NAME = 'Aditi Anand'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`

export type PageSeo = {
  title: string
  description: string
  keywords: string
}

export const defaultSeo: PageSeo = {
  title: 'Aditi Anand | Staff Software Engineer at Rivian',
  description:
    'Staff Software Engineer at Rivian leading real-time factory replenishment systems with Kafka, NATS, and AWS. Formerly technical lead at University of Michigan. MBA candidate at Michigan Ross.',
  keywords:
    'Aditi Anand, Staff Software Engineer, Rivian, Python, Flask, Kafka, NATS, AWS, Vue.js, distributed systems, Ann Arbor, Michigan Ross MBA'
}

export const pageSeo: Record<string, PageSeo> = {
  home: {
    ...defaultSeo
  },
  about: {
    title: 'About | Aditi Anand — Staff Software Engineer',
    description:
      'About Aditi Anand: Staff Software Engineer at Rivian with 12+ years building production systems, education from University of Wyoming and Michigan Ross MBA, skills across Python, cloud, and event-driven architecture.',
    keywords:
      'Aditi Anand about, Staff Software Engineer Rivian, Michigan Ross MBA, Python, Kafka, NATS, AWS, skills, certifications'
  },
  experience: {
    title: 'Experience | Aditi Anand — Rivian, University of Michigan',
    description:
      'Work experience for Aditi Anand: Staff Software Engineer at Rivian leading replenishment platforms, Senior Engineer roles, University of Michigan technical leadership, and consulting engagements.',
    keywords:
      'Aditi Anand experience, Rivian Staff Software Engineer, University of Michigan, supply chain software, NATS, Kafka, SAP'
  },
  projects: {
    title: 'Projects | Aditi Anand — Problem Roulette, Atlas & more',
    description:
      'Selected projects by Aditi Anand including Problem Roulette, Atlas, Michigan Online, Replay, and research in VR and optimization — full-stack product and research work.',
    keywords:
      'Aditi Anand projects, Problem Roulette, Atlas UMich, Vue.js, Django, ed-tech, portfolio'
  },
  contact: {
    title: 'Contact | Aditi Anand',
    description:
      'Contact Aditi Anand for engineering leadership conversations, collaborations, and opportunities. Reach out via email, LinkedIn, or GitHub.',
    keywords:
      'contact Aditi Anand, Staff Software Engineer Rivian, LinkedIn, GitHub, email'
  }
}

export function absoluteUrl(path = '/') {
  if (!path || path === '/') return `${SITE_URL}/`
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}
