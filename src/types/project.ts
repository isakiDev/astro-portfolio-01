type Category = 'all' | 'backend' | 'frontend' | 'fullstack'

export interface Project {
  image: string
  title: string
  description: string
  skill: string[]
  urlDeploy?: string
  urlRepository?: string
  category: Category
  createdAt: string
}