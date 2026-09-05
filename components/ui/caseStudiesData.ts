// components/ui/caseStudiesData.ts
// 👇 ACÁ SE EDITA TODO EL CONTENIDO DE LOS CASOS DE ESTUDIO.
// Para agregar un caso nuevo: copiá uno de los objetos de abajo, cambiá el "id"
// (tiene que coincidir con el "id" del proyecto en projectsData.ts) y completá los campos.
// Para agregar una sección: agregá un objeto más al array "sections". No hay límite.

export interface CaseStudySection {
  eyebrow: string       // ej: "01 / THE PROBLEM"
  heading: string       // primera línea del título de la sección
  headingEm?: string    // segunda línea (en cursiva), opcional
  body?: string         // párrafo de texto, opcional
  bullets?: string[]    // lista de puntos, opcional (podés usar body, bullets, o los dos)
  image?: { src: string; alt: string } // imagen que aparece después de esta sección, opcional
  highlight?: boolean   // true = se estiliza como la sección de impacto/resultados
}

export interface CaseStudyData {
  id: string             // debe coincidir con el id del proyecto en projectsData.ts
  category: string       // ej: "UX/UI CASE STUDY", "PRODUCT DESIGN", "UX RESEARCH"
  year: string
  title: string
  titleEm: string
  lede: string           // frase resumen debajo del título
  heroImage: string
  heroImageAlt: string
  role: string
  team: string
  timeline: string
  sections: CaseStudySection[]
  behanceLink?: string
}

export const caseStudies: CaseStudyData[] = [
  {
    id: 'project1',
    category: 'UX/UI CASE STUDY',
    year: '2023',
    title: 'Experta App',
    titleEm: 'Redesign.',
    lede: 'From complexity to confidence: a senior-friendly UX redesign for insurance.',
    heroImage: 'URL_IMAGEN_HERO', // 👈 REEMPLAZAR
    heroImageAlt: 'Experta App redesign',
    role: 'PRODUCT DESIGN',
    team: 'PRODUCT + ENGINEERING',
    timeline: '8 WEEKS',
    sections: [
      {
        eyebrow: '01 / THE PROBLEM',
        heading: 'Zero visibility.',
        headingEm: 'High friction.',
        bullets: [
          'A broken app with zero visibility.',
          'Constrained team (1 developer, no documentation).',
          'Critical login failures and zero offline document access.',
          'Confusing internal structure forcing users to call support.',
        ],
      },
      {
        eyebrow: '02 / THE DECISION',
        heading: 'Quick wins.',
        headingEm: 'Task-based UX.',
        bullets: [
          'A phased roadmap of "Quick Wins" alongside a new architecture.',
          'Usability testing revealed 60% of users set up the app for elderly parents.',
          'Pivoted to a simplified, task-based hierarchy accessible for all ages.',
          'Prioritized offline persistence and unified navigation.',
        ],
        image: { src: 'URL_IMAGEN_SECUNDARIA', alt: 'Design process' }, // 👈 REEMPLAZAR
      },
      {
        eyebrow: '03 / THE IMPACT',
        heading: 'Validated.',
        headingEm: 'Measurable.',
        bullets: [
          'Document downloads jumped from 60% to 100% success.',
          'Agent contact increased from 40% to 80%.',
          'Password resets improved from 20% to 80%.',
        ],
        highlight: true,
      },
    ],
    behanceLink: 'https://www.behance.net/...', // 👈 REEMPLAZAR
  },
  {
    id: 'project2',
    category: 'PRODUCT DESIGN',
    year: '2024',
    title: 'Systems that',
    titleEm: 'connect.',
    lede: 'Turning scattered needs into a shared, usable direction.',
    heroImage: 'URL_IMAGEN_HERO', // 👈 REEMPLAZAR
    heroImageAlt: 'Systems design',
    role: 'PRODUCT DESIGN',
    team: 'PRODUCT + ENGINEERING',
    timeline: '6 WEEKS',
    sections: [
      {
        eyebrow: '01 / THE PROBLEM',
        heading: 'Scattered systems.',
        headingEm: 'Unified vision.',
        bullets: [
          'The team had multiple design systems scattered across products.',
          'Maintenance and consistency were impossible.',
          'We needed a unified approach that would work for all products.',
        ],
      },
      {
        eyebrow: '02 / THE DECISION',
        heading: 'Design the',
        headingEm: 'connective tissue.',
        bullets: [
          'Led project to unify all design systems into a single, scalable library.',
          'Focused on component reusability and clear documentation.',
          'Created a governance model allowing teams to contribute.',
        ],
        image: { src: 'URL_IMAGEN_SECUNDARIA', alt: 'Design system' }, // 👈 REEMPLAZAR
      },
      {
        eyebrow: '03 / THE IMPACT',
        heading: 'Clarity that',
        headingEm: 'scales.',
        bullets: [
          'Unified design system now used by 4 products.',
          'Reduced design debt by 60%.',
          'Sped up product delivery by 30%.',
        ],
        highlight: true,
      },
    ],
  },
  {
    id: 'project3',
    category: 'UX RESEARCH',
    year: '2024',
    title: 'Closer to',
    titleEm: 'people.',
    lede: 'Research-led decisions for experiences that feel clear.',
    heroImage: 'URL_IMAGEN_HERO', // 👈 REEMPLAZAR
    heroImageAlt: 'UX Research',
    role: 'UX RESEARCH',
    team: 'RESEARCH + PRODUCT',
    timeline: '4 WEEKS',
    sections: [
      {
        eyebrow: '01 / THE PROBLEM',
        heading: 'Users dropping.',
        headingEm: 'Understanding why.',
        bullets: [
          "Users were abandoning the onboarding flow at a 45% rate.",
          "We didn't know why.",
          'We needed to understand the friction points and fix them.',
        ],
      },
      {
        eyebrow: '02 / THE DECISION',
        heading: 'Research as',
        headingEm: 'the compass.',
        bullets: [
          'Conducted 20 user interviews and usability tests.',
          'Redesigned onboarding based on research insights.',
          'Iterated based on real user feedback.',
        ],
        image: { src: 'URL_IMAGEN_SECUNDARIA', alt: 'Research process' }, // 👈 REEMPLAZAR
      },
      {
        eyebrow: '03 / THE IMPACT',
        heading: 'Data that',
        headingEm: 'drives change.',
        bullets: [
          'Onboarding abandonment dropped to 15%.',
          'User satisfaction increased by 30%.',
        ],
        highlight: true,
      },
    ],
  },
]
