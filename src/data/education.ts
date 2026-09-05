import type { LucideIcon } from 'lucide-react'
import { GraduationCap, Code2, BookOpen, Laptop2, Database } from 'lucide-react'
import type { Lang } from '../context/LanguageContext'

export interface EducationItem {
  id: string
  title: string
  place: string
  type: string
  period: string
  detail?: string
  tags?: string[]
  icon: LucideIcon
}

const educationEs: EducationItem[] = [
  {
    id: 'untref',
    title: 'Ingeniería en Computación',
    place: 'Universidad Nacional de Tres de Febrero (UNTREF)',
    type: 'Carrera universitaria',
    period: 'Feb 2026 — Actualidad',
    detail:'Formación enfocada en el diseño, desarrollo y mantenimiento de sistemas y redes, incluyendo el título intermedio de Técnico Universitario en Desarrollo de Software.',
    tags: ['Algoritmos', 'Estructuras de Datos', 'Ingeniería de Software'],
    icon: GraduationCap,
  },
  {
    id: 'uba-datos',
    title: 'Diplomatura en Programación y Análisis de Datos',
    place: 'UBA EXACTAS / Gobierno de la Provincia de Bs. As.',
    type: 'Diplomatura',
    period: 'Ago 2026 — Actualidad',
    detail:'Análisis de datos con Python (Pandas, Seaborn) y APIs. Resolución de problemas mediante estadística descriptiva, limpieza y visualización de información.',
    tags: ['Python', 'Pandas', 'Análisis de Datos', 'Estadística'],
    icon: Database,
  },
  {
    id: 'udemy-ts',
    title: 'TypeScript',
    place: 'Udemy',
    type: 'Curso',
    period: 'Jul 2026 — Actualidad',
    detail: 'Especialización en tipado estático avanzado, interfaces y configuración de proyectos escalables.',
    tags: ['TypeScript'],
    icon: Laptop2,
  },
  {
    id: 'henry',
    title: 'Full Stack Web Developer',
    place: 'Henry Bootcamp',
    type: 'Bootcamp',
    period: 'Jul 2023 — Mar 2024',
    detail: '800 horas de cursado teórico-práctico enfocado en el ecosistema JavaScript, dominando el stack PERN (PostgreSQL, Express, React, Node.js).',
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    icon: Code2,
  },
  {
    id: 'coderhouse',
    title: 'React JS',
    place: 'CoderHouse',
    type: 'Curso',
    period: 'Jun 2022 - Oct 2022',
    detail: 'Desarrollo de interfaces de usuario interactivas, manejo de estado global y consumo de APIs.',
    tags: ['React'],
    icon: BookOpen,
  },
]

const educationEn: EducationItem[] = [
  {
    id: 'untref',
    title: 'Computer Engineering',
    place: 'National University of Tres de Febrero (UNTREF)',
    type: 'University Degree',
    period: 'Feb 2026 — Present',
    detail: 'Education focused on the design, development, and maintenance of systems and networks, including an intermediate degree as a University Technician in Software Development.',
    tags: ['Algorithms', 'Data Structures', 'Software Engineering'],
    icon: GraduationCap,
  },
  {
    id: 'uba-datos',
    title: 'Diploma in Programming and Data Analysis',
    place: 'UBA EXACTAS / Gov. of Buenos Aires Province',
    type: 'Diploma',
    period: 'Aug 2026 — Present',
    detail: 'Data analysis with Python (Pandas, Seaborn) and APIs. Problem-solving through descriptive statistics, data cleaning, and information visualization.',
    tags: ['Python', 'Pandas', 'Data Analysis', 'Statistics'],
    icon: Database,
  },
  {
    id: 'udemy-ts',
    title: 'TypeScript',
    place: 'Udemy',
    type: 'Course',
    period: 'Jul 2026 — Present',
    detail: 'Specialization in advanced static typing, interfaces, and scalable project configuration.',
    tags: ['TypeScript'],
    icon: Laptop2,
  },
  {
    id: 'henry',
    title: 'Full Stack Web Developer',
    place: 'Henry Bootcamp',
    type: 'Bootcamp',
    period: 'Jul 2023 — Mar 2024',
    detail: '800 hours of theoretical-practical coursework focused on the JavaScript ecosystem, mastering the PERN stack (PostgreSQL, Express, React, Node.js).',
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    icon: Code2,
  },
  {
    id: 'coderhouse',
    title: 'React JS',
    place: 'CoderHouse',
    type: 'Course',
    period: 'Jun 2022 - Oct 2022',
    detail: 'Development of interactive user interfaces, global state management, and API consumption.',
    tags: ['React'],
    icon: BookOpen,
  },
]

export const educationByLang: Record<Lang, EducationItem[]> = {
  es: educationEs,
  en: educationEn,
}