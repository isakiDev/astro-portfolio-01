import { useState } from 'react'
import { mockProjects } from '@/data/projects.mock'

export const ProjectsGrid = () => {

  const [projects, setProjects] = useState(mockProjects)

  return (
    <ul id='projects-grid'>
      {
        projects?.map(project => (
          <li>
            <header className="rounded-xl overflow-hidden">
              <img className="duration duration-500 transform hover:scale-110" src={project.image} alt={`Image of ${project.title}`} width={800} height={800} />
            </header>

            <footer className="p-2">
              <h2 className="text-lg font-medium">{project.title}</h2>
              <p>{project.description}</p>
            </footer>
          </li>
        ))
      }
    </ul>
  )
}
