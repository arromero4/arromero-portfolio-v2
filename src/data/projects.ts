export type Project = {
  title: string
  category: string
  description: string
  tech: string[]
  repoUrl: string
  demoUrl?: string
}

export const projects: Project[] = [
  {
    title: 'Portafolio Web Anterior',
    category: 'Portfolio',
    description:
      'Version previa de mi portafolio personal, enfocada en presentar experiencia, proyectos web y desarrollo mobile.',
    tech: ['React', 'CSS', 'Portfolio'],
    repoUrl: 'https://github.com/arromero4/arromero-portfolio',
  },
  {
    title: 'Laundry POS',
    category: 'Private project',
    description:
      'Sistema POS para lavanderia con flujo de ordenes, operacion diaria y gestion del servicio. Mencion de proyecto privado.',
    tech: ['React', 'TypeScript', 'POS', 'Private'],
    repoUrl: 'https://github.com/arromero4/lavanderia_pos',
  },
  {
    title: 'Flutter Portfolio',
    category: 'Mobile portfolio',
    description:
      'Portafolio personal construido con Flutter para mostrar experiencia mobile y una presentacion alternativa multiplataforma.',
    tech: ['Flutter', 'Dart', 'Portfolio'],
    repoUrl: 'https://github.com/arromero4/arromero_flutter_portfolio',
  },
  {
    title: 'MIBI CRUD',
    category: 'Full stack',
    description:
      'Prueba técnica con operaciones CRUD, frontend en React y una integración backend documentada para ejecución local.',
    tech: ['React', 'Vite', 'Bootstrap', 'REST API'],
    repoUrl: 'https://github.com/arromero4/mibi-test',
  },
  {
    title: 'Pomodoro Timer',
    category: 'Mobile',
    description:
      'Temporizador en Flutter con manejo de estado BLoC, animaciones, diseño responsive y organización por capas.',
    tech: ['Flutter', 'Dart', 'BLoC', 'Clean Architecture'],
    repoUrl: 'https://github.com/arromero4/pomodoro_timer',
  },
  {
    title: 'QR Code Component',
    category: 'Frontend',
    description:
      'Implementación responsive de un reto de Frontend Mentor, enfocada en precisión visual y fundamentos de CSS.',
    tech: ['HTML', 'CSS', 'Responsive UI'],
    repoUrl: 'https://github.com/arromero4/qr_code',
    demoUrl: 'https://arromero4.github.io/qr_code/',
  },
]
