import type { Lang } from '../context/LanguageContext'

export interface Project {
  id: string
  title: string
  year: string
  color: string
  tech: string[]
  image: string
  demoUrl: string
  repoUrl: string
}

// Colores pastel: #e3e1d5, #ff5f5f, #7ec4cf, #b7a2cd, #e8dff5, #ffdcb5

const projectsEs: Project[] = [
  {
    id: 'portfolio',
    title: 'Sitio Web Personal',
    year: '2025',
    color: '#ffdcb5',
    tech: ['React', 'TypeScript', 'Tailwind'],
    image: '/img/portafolio.png',
    demoUrl: 'https://jonatan-rodriguez.netlify.app/',
    repoUrl: 'https://github.com/Jonatan-Rodriguez/Portfolio.git',
  },
  {
    id: 'rick-morty',
    title: 'CRUD Rick and Morty',
    year: '2024',
    color: '#e3e1d5',
    tech: ['React', 'Redux', 'Node.js', 'Express', 'PostgreSQL', 'Sequelize'],
    image: '/img/rick-and-morty.png',
    demoUrl: 'https://rick-and-morty-front-8fqy.onrender.com',
    repoUrl: 'https://github.com/Jonatan-Rodriguez/rick_and_morty',
  },
  {
    id: 'landing-cafe',
    title: 'Landing Cafetería',
    year: '2022',
    color: '#e8dff5',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/img/latte-art.png',
    demoUrl: 'https://latte-arte.netlify.app',
    repoUrl: 'https://github.com/Jonatan-Rodriguez/cafeteria-landing-page',
  },
]

const projectsEn: Project[] = [
  {
    id: 'portfolio',
    title: 'Personal Website',
    year: '2025',
    color: '#ffdcb5',
    tech: ['React', 'TypeScript', 'Tailwind'],
    image: '/img/portafolio.png',
    demoUrl: 'https://jonatan-rodriguez.netlify.app/',
    repoUrl: 'https://github.com/Jonatan-Rodriguez/Portfolio.git',
  },
  {
    id: 'rick-morty',
    title: 'Rick and Morty CRUD',
    year: '2024',
    color: '#e3e1d5',
    tech: ['React', 'Redux', 'Node.js', 'Express', 'PostgreSQL', 'Sequelize'],
    image: '/img/rick-and-morty.png',
    demoUrl: 'https://rick-and-morty-front-8fqy.onrender.com',
    repoUrl: 'https://github.com/Jonatan-Rodriguez/rick_and_morty',
  },
  {
    id: 'landing-cafe',
    title: 'Coffee Shop Landing',
    year: '2022',
    color: '#e8dff5',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/img/latte-art.png',
    demoUrl: 'https://latte-arte.netlify.app',
    repoUrl: 'https://github.com/Jonatan-Rodriguez/cafeteria-landing-page',
  },
]

export const projectsByLang: Record<Lang, Project[]> = {
  es: projectsEs,
  en: projectsEn,
}