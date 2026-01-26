import SectionFrame from '../../components/SectionFrame/SectionFrame';
import './contact.css'

type ContactSectionProps = {
    /**
   * URL pública del GitHub del usuario
   */
  githubUrl: string;
   /**
   * URL pública del LinkedIn del usuario
   */
  linkedinUrl: string;
}

/**
 * ContactSection:
 * Sección final de contacto con:
 * - Texto breve
 * - Botones grandes: GitHub / LinkedIn
 * Usa SectionFrame para mantener el marco y la barra dorada del mockup.
 */

export default function ContactSection({ githubUrl, linkedinUrl }: ContactSectionProps) {
  return (
    <SectionFrame title="CONTACT">
      <p className="contactText">
        ¿Platicamos? Puedes encontrarme en Linkedin y GitHub.
      </p>
      <div className="contactActions">
        <a
        className="nes-btn is-primary contactBtn"
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
        >
          GITHUB
        </a>
        <a
          className="nes-btn is-success contactBtn"
          href={linkedinUrl}
          target="_blank"
          rel="noreferrer"
        >
          LINKEDIN
        </a>
      </div>
    </SectionFrame>
  )
}