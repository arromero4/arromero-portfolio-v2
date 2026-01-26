import './sectionFrame.css'
type SectionFrameProps = {
    /**
   * Título de la sección (ej: "ABOUT", "PROJECTS", "CONTACT")
   */
  title: string;

  /**
   * Contenido interno de la sección (texto, cards, botones, etc.)
   */
  children: React.ReactNode;
}

/**
 * SectionFrame:
 * Componente genérico para secciones con estética tipo "marco retro":
 * - Marco exterior + borde interior
 * - Barra superior dorada con el título centrado
 * - Área de contenido debajo (panel)
 *
 * Esto nos permite reusar exactamente el mismo "skin" en ABOUT/PROJECTS/CONTACT.
 */

export default function SectionFrame({ title, children }: SectionFrameProps) {
  return(
    <section className="sectionFrame">
      {/* Barra de título (dorado) */}
      <div className="sectionFrame__titleBar">
        <h2 className="sectionFrame__title">
          {title}
        </h2>
      </div>

      {/* Área de contenido (panel) */}
      <div className="sectionFrame__content">
        {children}
      </div>
    </section>
  )
}