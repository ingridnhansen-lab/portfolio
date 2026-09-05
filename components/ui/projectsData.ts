// components/ui/projectsData.ts
// ============================================================
// 📌 DATOS DE LOS PROYECTOS
// ============================================================

export const projectsData = {
  
  // 👇 Foto del About
  aboutImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2022%20jun%202026%2C%2020_24_33-2J198kGWZfIDkoqCfS3yxwXGKzsONL.png',
  
  // ============================================================
  // PROYECTO 1 (Experta App)
  // ============================================================
  project1: {
    id: 'experta-app',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%2013-4RCyDrsgiNnQc5mDQGCDvs13sxADYG.png',
    type: 'Featured case study',
    title: 'Experta App',
    subtitle: 'Redesign',
    description: 'From complexity to confidence: a clearer insurance experience for real people.',
    caseStudy: {
      heroImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%2013-4RCyDrsgiNnQc5mDQGCDvs13sxADYG.png',
      year: '2023',
      role: 'PRODUCT DESIGN',
      team: 'PRODUCT + ENGINEERING',
      timeline: '8 WEEKS',
      // 👇 TÍTULOS PERSONALIZADOS
      problemTitle: 'Less friction.',
      problemEm: 'More confidence.',
      decisionTitle: 'Design the',
      decisionEm: 'next step.',
      impactTitle: 'Clarity that',
      impactEm: 'moves people.',
      problem: `Experta needed to turn a complex insurance ecosystem into a clear mobile experience.
Customers struggled to find coverage details, request assistance,
and understand what happened next.`,
      decision: `We prioritized the moments that mattered most: a task-based home,
plain-language coverage, and a guided assistance flow.
Research and moderated testing shaped every iteration.`,
      impact: `The final direction gave users a more confident path from question to resolution,
while giving the team a scalable foundation for future insurance journeys.`,
      behanceLink: 'https://www.behance.net/gallery/250252187/From-Chaos-to-Clarity-Reverse-Engineering-an-App-2023',
    }
  },
  
  // ============================================================
  // PROYECTO 2 (Systems that connect)
  // ============================================================
  project2: {
    id: 'systems-connect',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1400',
    type: 'Product design',
    title: 'Systems that',
    subtitle: 'connect.',
    description: 'Turning scattered needs into a shared, usable direction.',
    caseStudy: {
      heroImage: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1400',
      year: '2024',
      role: 'PRODUCT DESIGN',
      team: 'PRODUCT + ENGINEERING',
      timeline: '6 WEEKS',
      // 👇 TÍTULOS PERSONALIZADOS
      problemTitle: 'Scattered systems.',
      problemEm: 'Unified vision.',
      decisionTitle: 'Design the',
      decisionEm: 'connective tissue.',
      impactTitle: 'Clarity that',
      impactEm: 'scales.',
      problem: `The team had multiple design systems scattered across products,
making maintenance and consistency impossible.
We needed a unified approach that would work for all products.`,
      decision: `I led a project to unify all design systems into a single, scalable library,
focusing on component reusability and clear documentation.
We created a governance model that allowed teams to contribute while maintaining quality.`,
      impact: `Unified design system now used by 4 products,
reducing design debt by 60% and speeding up product delivery by 30%.`,
      behanceLink: '#',
    }
  },
  
  // ============================================================
  // PROYECTO 3 (Closer to people)
  // ============================================================
  project3: {
    id: 'closer-to-people',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2022%20jun%202026%2C%2020_24_33-2J198kGWZfIDkoqCfS3yxwXGKzsONL.png',
    type: 'UX research',
    title: 'Closer to',
    subtitle: 'people.',
    description: 'Research-led decisions for experiences that feel clear.',
    caseStudy: {
      heroImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2022%20jun%202026%2C%2020_24_33-2J198kGWZfIDkoqCfS3yxwXGKzsONL.png',
      year: '2024',
      role: 'UX RESEARCH',
      team: 'RESEARCH + PRODUCT',
      timeline: '4 WEEKS',
      // 👇 TÍTULOS PERSONALIZADOS
      problemTitle: 'Users dropping.',
      problemEm: 'Understanding why.',
      decisionTitle: 'Research as',
      decisionEm: 'the compass.',
      impactTitle: 'Data that',
      impactEm: 'drives change.',
      problem: `Users were abandoning the onboarding flow at a 45% rate,
and we didn't know why.
We needed to understand the friction points and fix them.`,
      decision: `I conducted 20 user interviews and usability tests to identify friction points,
then redesigned the onboarding flow based on research insights.
We iterated on the design based on real user feedback.`,
      impact: `Onboarding abandonment dropped to 15%,
and user satisfaction increased by 30% within the first month.`,
      behanceLink: '#',
    }
  },
}
