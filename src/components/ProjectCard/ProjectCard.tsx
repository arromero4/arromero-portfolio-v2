import type { Project } from '../../data/projects'
import './projectCard.css'

type ProjectCardProps = Project & {
  index: number
}

export default function ProjectCard({
  index,
  title,
  category,
  description,
  tech,
  repoUrl,
  demoUrl,
}: ProjectCardProps) {
  return (
    <article className="projectCard">
      <div className="projectCard__meta">
        <span>{String(index).padStart(2, '0')}</span>
        <span>{category}</span>
      </div>

      <div className="projectCard__body">
        <h3>{title}</h3>
        <p>{description}</p>

        <ul className="projectCard__tech" aria-label={`Tecnologías de ${title}`}>
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
          aria-label={`Ver código de ${title} en GitHub`}
        >
          Código <span aria-hidden="true">↗</span>
        </a>

        {demoUrl && (
          <a
            className="textLink"
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Abrir demo de ${title}`}
          >
            Demo <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </article>
  )
}
