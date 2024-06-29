import { useState } from 'preact/hooks'
import { mockProjects } from '@/data/projects.mock'

export const ProjectGrid = () => {

  const [projects, setProjects] = useState(mockProjects)

  return (
    <ul id='projects-grid'>
      {
        projects?.map(project => (
          <li>
            <header class="rounded-xl overflow-hidden">
              <img class="duration duration-500 transform hover:scale-110" src={project.image} alt={`Image of ${project.title}`} width={800} height={800} />
            </header>

            <footer class="p-2">
              <h2 class="text-lg font-medium">{project.title}</h2>
              <p>{project.description}</p>
            </footer>
          </li>
        ))
      }
    </ul>
  )
}
