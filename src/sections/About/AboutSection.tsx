import type { Language } from '../../App'
import SectionFrame from '../../components/SectionFrame/SectionFrame'
import './about.css'

const skills = [
  'React',
  'TypeScript',
  'Node.js',
  'Flutter',
  'Java',
  'PostgreSQL',
  'Git',
  'Responsive UI',
]

const copy = {
  es: {
    eyebrow: '01 / PERFIL',
    title: 'Sobre mí',
    lead:
      'Combino desarrollo frontend, backend y mobile para convertir requerimientos en experiencias sencillas de usar.',
    body:
      'Me interesa crear productos rápidos, mantenibles y visualmente consistentes. Trabajo de forma iterativa: entiendo el problema, construyo una solución clara y valido los detalles que afectan a la experiencia final.',
    principles: [
      'Interfaces responsive y accesibles',
      'Código modular y fácil de mantener',
      'Comunicación clara sobre decisiones técnicas',
    ],
    skillsLabel: 'Tecnologías y capacidades',
  },
  en: {
    eyebrow: '01 / PROFILE',
    title: 'About me',
    lead:
      'I combine frontend, backend and mobile development to turn requirements into easy-to-use experiences.',
    body:
      'I care about building fast, maintainable and visually consistent products. I work iteratively: I understand the problem, build a clear solution and validate the details that shape the final experience.',
    principles: [
      'Responsive and accessible interfaces',
      'Modular code that is easy to maintain',
      'Clear communication about technical decisions',
    ],
    skillsLabel: 'Technologies and capabilities',
  },
}

type AboutSectionProps = {
  language: Language
}

export default function AboutSection({ language }: AboutSectionProps) {
  const text = copy[language]

  return (
    <SectionFrame id="about" eyebrow={text.eyebrow} title={text.title}>
      <div className="aboutGrid">
        <div>
          <p className="aboutLead">{text.lead}</p>
          <p>{text.body}</p>
        </div>

        <dl className="principles">
          {text.principles.map((principle, index) => (
            <div key={principle}>
              <dt>{String(index + 1).padStart(2, '0')}</dt>
              <dd>{principle}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="skillList" aria-label={text.skillsLabel}>
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </SectionFrame>
  )
}