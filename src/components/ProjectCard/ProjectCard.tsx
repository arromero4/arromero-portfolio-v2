import type { Language } from '../../App'
import './projectCard.css'

type ProjectCardProps = {
  category: string
  demoUrl?: string
  description: string
  index: number
  language: Language
  repoUrl: string
  tech: string[]
  title: string
}

export default function ProjectCard({
  index,
  title,
  category,
  description,
  tech,
  repoUrl,
  demoUrl,
  language,
}: ProjectCardProps) {
  const codeLabel = language === 'es' ? 'Código' : 'Code'
  const demoLabel = language === 'es' ? 'Demo' : 'Demo'

  return (
    <article className="projectCard">
      <div className="projectCard__meta">
        <span>{String(index).padStart(2, '0')}</span>
        <span>{category}</span>
      </div>

      <div className="projectCard__body">
        <h3>{title}</h3>
        <p>{description}</p>

        <ul
          className="projectCard__tech"
          aria-label={
            language === 'es'
              ? `Tecnologías de ${title}`
              : `Technologies used in ${title}`
          }
        >
          {tech.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>

      <div className="projectCard__actions">
        <a
          className="textLink"
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={
            language === 'es'
              ? `Ver código de ${title} en GitHub`
              : `View ${title} source code on GitHub`
          }
        >
          {codeLabel} <span aria-hidden="true">↗</span>
        </a>

        {demoUrl && (
          <a
            className="textLink"
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={
              language === 'es' ? `Abrir demo de ${title}` : `Open ${title} demo`
            }
          >
            {demoLabel} <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </article>
  )
}