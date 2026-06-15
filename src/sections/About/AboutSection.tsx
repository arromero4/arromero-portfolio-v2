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

export default function AboutSection() {
  return (
    <SectionFrame id="about" eyebrow="01 / PERFIL" title="Sobre mí">
      <div className="aboutGrid">
        <div>
          <p className="aboutLead">
            Combino desarrollo frontend, backend y mobile para convertir
            requerimientos en experiencias sencillas de usar.
          </p>
          <p>
            Me interesa crear productos rápidos, mantenibles y visualmente
            consistentes. Trabajo de forma iterativa: entiendo el problema,
            construyo una solución clara y valido los detalles que afectan a la
            experiencia final.
          </p>
        </div>

        <dl className="principles">
          <div>
            <dt>01</dt>
            <dd>Interfaces responsive y accesibles</dd>
          </div>
          <div>
            <dt>02</dt>
            <dd>Código modular y fácil de mantener</dd>
          </div>
          <div>
            <dt>03</dt>
            <dd>Comunicación clara sobre decisiones técnicas</dd>
          </div>
        </dl>
      </div>

      <div className="skillList" aria-label="Tecnologías y capacidades">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </SectionFrame>
  )
}
