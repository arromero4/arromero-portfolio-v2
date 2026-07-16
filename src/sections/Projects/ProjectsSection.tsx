import type { Language } from '../../App'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import SectionFrame from '../../components/SectionFrame/SectionFrame'
import { projects } from '../../data/projects'
import './projects.css'

const copy = {
  es: {
    eyebrow: '02 / TRABAJO',
    title: 'Proyectos seleccionados',
    intro:
      'Una selección de proyectos públicos que muestra trabajo web, full stack y mobile.',
  },
  en: {
    eyebrow: '02 / WORK',
    title: 'Selected projects',
    intro:
      'A selection of public projects that shows web, full-stack and mobile work.',
  },
}

type ProjectsSectionProps = {
  language: Language
}

export default function ProjectsSection({ language }: ProjectsSectionProps) {
  const text = copy[language]

  return (
    <SectionFrame id="projects" eyebrow={text.eyebrow} title={text.title}>
      <p className="projectsIntro">{text.intro}</p>

      <div className="projectsGrid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title.es}
            category={project.category[language]}
            demoUrl={project.demoUrl}
            description={project.description[language]}
            index={index + 1}
            language={language}
            repoUrl={project.repoUrl}
            tech={project.tech}
            title={project.title[language]}
          />
        ))}
      </div>
    </SectionFrame>
  )
}