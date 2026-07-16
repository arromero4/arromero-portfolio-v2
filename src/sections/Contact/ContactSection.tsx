import { type FormEvent, useState } from 'react'
import type { Language } from '../../App'
import SectionFrame from '../../components/SectionFrame/SectionFrame'
import './contact.css'

type ContactSectionProps = {
  emailUrl: string
  githubUrl: string
  language: Language
  linkedinUrl: string
}

const copy = {
  es: {
    eyebrow: '03 / CONTACTO',
    title: 'Construyamos algo',
    lead: '¿Tienes un proyecto, una oportunidad o una idea que quieras conversar?',
    body:
      'Puedes conocer más de mi trabajo en GitHub, escribirme por LinkedIn o enviarme un correo directo.',
    emailButton: 'Enviar correo',
    linkedinButton: 'Contactar en LinkedIn',
    githubButton: 'Ver GitHub',
    modalTitle: 'Enviar correo',
    modalIntro:
      'Completa el formulario y se abrirá tu cliente de correo con el mensaje preparado.',
    nameLabel: 'Nombre',
    namePlaceholder: 'Tu nombre',
    emailLabel: 'Tu correo',
    emailPlaceholder: 'tu@email.com',
    messageLabel: 'Mensaje',
    messagePlaceholder: 'Cuéntame sobre tu proyecto u oportunidad...',
    submitButton: 'Preparar correo',
    cancelButton: 'Cancelar',
    closeLabel: 'Cerrar formulario de correo',
    subject: 'Contacto desde portafolio',
  },
  en: {
    eyebrow: '03 / CONTACT',
    title: 'Let\'s build something',
    lead: 'Do you have a project, an opportunity or an idea you want to discuss?',
    body:
      'You can learn more about my work on GitHub, reach me on LinkedIn or send me a direct email.',
    emailButton: 'Send email',
    linkedinButton: 'Contact on LinkedIn',
    githubButton: 'View GitHub',
    modalTitle: 'Send email',
    modalIntro:
      'Complete the form and your email client will open with the message prepared.',
    nameLabel: 'Name',
    namePlaceholder: 'Your name',
    emailLabel: 'Your email',
    emailPlaceholder: 'you@email.com',
    messageLabel: 'Message',
    messagePlaceholder: 'Tell me about your project or opportunity...',
    submitButton: 'Prepare email',
    cancelButton: 'Cancel',
    closeLabel: 'Close email form',
    subject: 'Portfolio contact',
  },
}

export default function ContactSection({
  emailUrl,
  githubUrl,
  language,
  linkedinUrl,
}: ContactSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const text = copy[language]

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()
    const recipient = emailUrl.replace(/^mailto:/, '')
    const subject = encodeURIComponent(`${text.subject} - ${name}`)
    const body = encodeURIComponent(
      language === 'es'
        ? `Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`
        : `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    )

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`
    setIsModalOpen(false)
  }

  return (
    <SectionFrame id="contact" eyebrow={text.eyebrow} title={text.title}>
      <div className="contactLayout">
        <div>
          <p className="contactLead">{text.lead}</p>
          <p>{text.body}</p>
        </div>

        <div className="contactActions">
          <button
            className="button button--primary"
            type="button"
            onClick={() => setIsModalOpen(true)}
          >
            {text.emailButton}
          </button>
          <a
            className="button button--secondary"
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {text.linkedinButton}
          </a>
          <a
            className="button button--secondary"
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {text.githubButton}
          </a>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="contactModalBackdrop"
          role="presentation"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="contactModal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="contactModal__close"
              type="button"
              aria-label={text.closeLabel}
              onClick={() => setIsModalOpen(false)}
            >
              X
            </button>

            <h3 id="contact-modal-title">{text.modalTitle}</h3>
            <p>{text.modalIntro}</p>

            <form className="contactForm" onSubmit={handleSubmit}>
              <label>
                {text.nameLabel}
                <input name="name" placeholder={text.namePlaceholder} required />
              </label>

              <label>
                {text.emailLabel}
                <input
                  name="email"
                  placeholder={text.emailPlaceholder}
                  required
                  type="email"
                />
              </label>

              <label>
                {text.messageLabel}
                <textarea
                  name="message"
                  placeholder={text.messagePlaceholder}
                  required
                  rows={5}
                />
              </label>

              <div className="contactForm__actions">
                <button className="button button--primary" type="submit">
                  {text.submitButton}
                </button>
                <button
                  className="button button--secondary"
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                >
                  {text.cancelButton}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </SectionFrame>
  )
}