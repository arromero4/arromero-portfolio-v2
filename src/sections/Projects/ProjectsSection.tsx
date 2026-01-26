/**
 * ProjectsSection:
 * Contenedor de la sección PROJECTS.
 * - Usa SectionFrame para el marco + barra dorada.
 * - Renderiza cards en grid (2 columnas en desktop, 1 en mobile).
 */

import ProjectCard from "../../components/ProjectCard/ProjectCard";
import SectionFrame from "../../components/SectionFrame/SectionFrame";
import './projects.css'

export default function ProjectsSection() {
  return (
    <SectionFrame
      title="PROJECTS"
    >
      <div className="projectsGrid">
        <ProjectCard
          title="Bitácora de auditoría"
          description="Plataforma para registrar cambios, evidencias y auditorías de red."
          tech={["React", "TypeScript", "Node", "PostgreSQL"]}
          repoUrl="https://github.com/tu-usuario/bitacora"  // cambia a tu repo real
          demoUrl="https://tu-demo.com"                    // cambia a tu demo real
        />

        <ProjectCard
          title="Pomodoro Timer (Flutter)"
          description="Temporizador Pomodoro con animaciones."
          tech={["Flutter", "Dart"]}
          repoUrl="https://github.com/tu-usuario/pomodoro" // cambia a tu repo real
          demoUrl={undefined}                              // por ahora sin demo
        />
      </div>
    </SectionFrame>
  )
}