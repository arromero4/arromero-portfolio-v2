import ProjectCard from '../../components/ProjectCard/ProjectCard'
import SectionFrame from '../../components/SectionFrame/SectionFrame'
import { projects } from '../../data/projects'
import './projects.css'

export default function ProjectsSection() {
  return (
    <SectionFrame
      id="projects"
      eyebrow="02 / TRABAJO"
      title="Proyectos seleccionados"
    >
      <p className="projectsIntro">
        Una selección de proyectos públicos que muestra trabajo web, full stack
        y mobile.
      </p>

      <div className="projectsGrid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            index={index + 1}
            {...project}
          />
        ))}
      </div>
    </SectionFrame>
  )
}
