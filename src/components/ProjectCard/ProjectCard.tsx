import './projectCard.css'
type ProjectCardProps = {
  /**
     * Título del proyecto (ej: "Bitácora de auditoría")
     */
  title: string;
  /**
 * Descripción breve del proyecto (1-2 líneas como en el mockup)
 */
  description: string;
  /**
   * Tecnologías mostradas como chips
   */
  tech: string[];
  /**
   * Link al repositorio (si no existe, puedes pasar undefined)
   */
  repoUrl?: string;
  /**
 * Link a demo (si no existe, puedes pasar undefined)
 */
  demoUrl?: string;
}

/**
 * ProjectCard:
 * Representa una card estilo retro dentro de la sección PROJECTS.
 * Incluye:
 * - Barra superior con título
 * - Descripción
 * - Chips de tecnologías
 * - Botones: REPO y DEMO (opcionales)
 */

export default function ProjectCard({ title, description, tech, repoUrl, demoUrl }: ProjectCardProps) {
  return (
    <article className="projectCard">
      {/* Header oscuro de la card (similar a la franja del mockup) */}
      <div className="projectCard__header">
        <h3 className="projectCard__title">
          {title}
        </h3>
      </div>

      {/* Body */}
      <div className="projectCard__body">
        <p className="projectCard__description">{description}</p>

        {/* Tech chips */}
        <div className="projectCard__chips">
          {
            tech.map((t) => (
              <span key={t} className="projectChip">
                {t}
              </span>
            ))
          }
        </div>

        {/* Acciones */}

        <div className="projectCard__actions">
          {
            repoUrl ? (
              <a
                className="nes-btn is-primary projectBtn"
                href={repoUrl}
                target="_blank"
                rel="noreferrer"
              >
                REPO
              </a>
            ) : (
              <button className="nes-btn is-disabled projectBtn" type="button" disabled>REPO</button>
            )}

            {
              demoUrl ? (
                <a
                  className="nes-btn is-success projectBtn"
                  href={demoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  DEMO
                </a>
              ) : (<button className="nes-btn is-disabled projectBtn" type="button" disabled>
              DEMO
            </button>
              )}

        </div>
      </div>
    </article>
  )
}