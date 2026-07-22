export interface Project {
  title: string
  year: string
  color: string
  tech: string[]
  image: string
  demoUrl: string
  repoUrl: string
}
//colores pastel: #e3e1d5, #ff5f5f, #7ec4cf, #b7a2cd, #e8dff5, #ffdcb5
export const projects: Project[] = [
  {
    title: 'CRUD Rick and Morty',
    year: '2024',
    color: '#e3e1d5',
    tech: ['React', 'Redux', 'Node.js', 'Express', 'PostgreSQL', 'Sequelize'],
    image: 'https://jonatan-rodriguez.netlify.app/assets/img/rick-and-morty.png',
    demoUrl: 'https://rick-and-morty-front-8fqy.onrender.com',
    repoUrl: 'https://github.com/Jonatan-Rodriguez/rick_and_morty',
  },
  {
    title: 'Sitio Web Personal',
    year: '2025',
    color: '#ffdcb5',
    tech: ['HTML', 'CSS', 'Sass', 'JavaScript'],
    image: 'https://jonatan-rodriguez.netlify.app/assets/img/portafolio.png',
    demoUrl: 'https://jonatanrodriguez.com.ar',
    repoUrl: 'https://github.com/Jonatan-Rodriguez/Portafolio',
  },
  {
    title: 'Landing Cafetería',
    year: '2022',
    color: '#e8dff5',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: 'https://jonatan-rodriguez.netlify.app/assets/img/Latte%20Art.png',
    demoUrl: 'https://latte-arte.netlify.app',
    repoUrl: 'https://github.com/Jonatan-Rodriguez/cafeteria-landing-page',
  },
]