import type { Project } from "@/types/project";

export const mockProjects: Project[] = [
  // {
  //   image: "",
  //   title: "Fashion Like",
  //   description: "Red social enfocada en la industria de la moda.",
  //   skills: [
  //     "NestJS",
  //     "TypeScript",
  //     "JWT",
  //     "React",
  //     "Zustand",
  //     "Tailwind CSS",
  //     "PostgreSQL",
  //     "Docker",
  //     "Cloudinary",
  //   ],
  //   urlDeploy: "https://isakidev-fashion-like.netlify.app",
  //   urlRepository: "https://github.com/isakiDev/nest-fashion-like",
  //   createdAt: "2024-03-22T03:00:00.000Z",
  // },
  {
    image:
      "https://res.cloudinary.com/dzn3nempv/image/upload/v1705917516/portfolio/xojyy8odx2mnyc8uleeh.png",
    title: "Calendar",
    description: "Gestionador de notas con redux y autenticación de usuarios.",
    skill: [
      "Node.js",
      "TypeScript",
      "JWT",
      "React",
      "Redux",
      "Tailwind CSS",
      "MongoDB",
      "Docker",
    ],
    urlDeploy: "https://react-calendar.isakidev.com/auth/login",
    urlRepository: "https://github.com/isakiDev/node-calendar-ts",
    createdAt: "2024-01-01T03:00:00.000Z",
    category: 'fullstack'
  },
  {
    image:
      "https://res.cloudinary.com/dzn3nempv/image/upload/v1701660260/portfolio/gnexvarptbkebssqc3k7.png",
    title: "Todo List",
    description: "Gestionador de tareas.",
    skill: ["React", "TypeScript", "Tailwind CSS"],
    urlDeploy: "https://react-todots.isakidev.com",
    urlRepository: "https://github.com/isakiDev/react-todo-ts",
    category: 'frontend',
    createdAt: "2023-12-01T03:00:00.000Z",
  },
  {
    image:
      "https://res.cloudinary.com/dzn3nempv/image/upload/v1701655988/portfolio/ckkxmvb2ym42sdggzqvp.png",
    title: "Buscador de películas",
    description: "Integración de API movies y debounce.",
    skill: ["React", "JavaScript", "CSS"],
    urlDeploy: "https://react-search-movies.isakidev.com",
    createdAt: "2023-08-01T04:00:00.000Z",
    category: 'frontend'
  },
  {
    image:
      "https://res.cloudinary.com/dzn3nempv/image/upload/v1701658835/portfolio/pfehvtifg6g0jirnfzdl.png",
    title: "Gifs App",
    description: "Buscador de gifs conectado con API de Giphy.",
    skill: ["React", "JavaScript", "CSS"],
    urlDeploy: "https://react-gifapp.isakidev.com",
    urlRepository: "https://github.com/isakiDev/react-gifsApp",
    category: 'frontend',
    createdAt: "2023-08-01T04:00:00.000Z",
  },
];