import SectionFrame from '../../components/SectionFrame/SectionFrame'
import './contact.css'

type ContactSectionProps = {
  githubUrl: string
  linkedinUrl: string
}

export default function ContactSection({
  githubUrl,
  linkedinUrl,
}: ContactSectionProps) {
  return (
    <SectionFrame id="contact" eyebrow="03 / CONTACTO" title="Construyamos algo">
      <div className="contactLayout">
        <div>
          <p className="contactLead">
            ¿Tienes un proyecto, una oportunidad o una idea que quieras
            conversar?
          </p>
          <p>
            Puedes conocer más de mi trabajo en GitHub o escribirme directamente
            por LinkedIn.
          </p>
        </div>

        <div className="contactActions">
          <a
            className="button button--primary"
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Contactar en LinkedIn
          </a>
          <a
            className="button button--secondary"
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver GitHub
          </a>
        </div>
      </div>
    </SectionFrame>
  )
}
