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
