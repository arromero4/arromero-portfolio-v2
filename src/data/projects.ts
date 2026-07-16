import type { Language } from '../App'

type LocalizedText = Record<Language, string>

export type Project = {
  title: LocalizedText
  category: LocalizedText
  description: LocalizedText
  tech: string[]
  repoUrl: string
  demoUrl?: string
}

export const projects: Project[] = [
  {
    title: {
      es: 'Portafolio Web Anterior',
      en: 'Previous Web Portfolio',
    },
    category: {
      es: 'Portfolio',
      en: 'Portfolio',
    },
    description: {
      es: 'Versión previa de mi portafolio personal, enfocada en presentar experiencia, proyectos web y desarrollo mobile.',
      en: 'Previous version of my personal portfolio, focused on presenting experience, web projects and mobile development.',
    },
    tech: ['React', 'CSS', 'Portfolio'],
    repoUrl: 'https://github.com/arromero4/arromero-portfolio',
  },
  {
    title: {
      es: 'Laundry POS',
      en: 'Laundry POS',
    },
    category: {
      es: 'Proyecto privado',
      en: 'Private project',
    },
    description: {
      es: 'Sistema POS para lavandería con flujo de órdenes, operación diaria y gestión del servicio. Mención de proyecto privado.',
      en: 'Laundry POS system with order flow, daily operations and service management. Mention of a private project.',
    },
    tech: ['React', 'TypeScript', 'POS', 'Private'],
    repoUrl: 'https://github.com/arromero4/lavanderia_pos',
  },
  {
    title: {
      es: 'Flutter Portfolio',
      en: 'Flutter Portfolio',
    },
    category: {
      es: 'Portfolio mobile',
      en: 'Mobile portfolio',
    },
    description: {
      es: 'Portafolio personal construido con Flutter para mostrar experiencia mobile y una presentación alternativa multiplataforma.',
      en: 'Personal portfolio built with Flutter to show mobile experience and an alternative cross-platform presentation.',
    },
    tech: ['Flutter', 'Dart', 'Portfolio'],
    repoUrl: 'https://github.com/arromero4/arromero_flutter_portfolio',
  },
  {
    title: {
      es: 'MIBI CRUD',
      en: 'MIBI CRUD',
    },
    category: {
      es: 'Full stack',
      en: 'Full stack',
    },
    description: {
      es: 'Prueba técnica con operaciones CRUD, frontend en React y una integración backend documentada para ejecución local.',
      en: 'Technical test with CRUD operations, a React frontend and documented backend integration for local execution.',
    },
    tech: ['React', 'Vite', 'Bootstrap', 'REST API'],
    repoUrl: 'https://github.com/arromero4/mibi-test',
  },
  {
    title: {
      es: 'Pomodoro Timer',
      en: 'Pomodoro Timer',
    },
    category: {
      es: 'Mobile',
      en: 'Mobile',
    },
    description: {
      es: 'Temporizador en Flutter con manejo de estado BLoC, animaciones, diseño responsive y organización por capas.',
      en: 'Flutter timer with BLoC state management, animations, responsive design and layered organization.',
    },
    tech: ['Flutter', 'Dart', 'BLoC', 'Clean Architecture'],
    repoUrl: 'https://github.com/arromero4/pomodoro_timer',
  },
  {
    title: {
      es: 'QR Code Component',
      en: 'QR Code Component',
    },
    category: {
      es: 'Frontend',
      en: 'Frontend',
    },
    description: {
      es: 'Implementación responsive de un reto de Frontend Mentor, enfocada en precisión visual y fundamentos de CSS.',
      en: 'Responsive implementation of a Frontend Mentor challenge, focused on visual accuracy and CSS fundamentals.',
    },
    tech: ['HTML', 'CSS', 'Responsive UI'],
    repoUrl: 'https://github.com/arromero4/qr_code',
    demoUrl: 'https://arromero4.github.io/qr_code/',
  },
]