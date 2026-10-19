import type { LucideIcon } from 'lucide-react'
import { GraduationCap, Code2, BookOpen, Laptop2, Code, Layout } from 'lucide-react'
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
    period: 'Sep 2022 - Nov 2022',
    detail: 'Desarrollo de interfaces de usuario interactivas, manejo de estado global y consumo de APIs.',
    tags: ['React'],
    icon: BookOpen,
  },
  {
    id: 'coderhouse-js',
    title: 'JavaScript',
    place: 'CoderHouse',
    type: 'Curso',
    period: 'Jun 2022 - Ago 2022',
    detail: 'Profundización en el lenguaje JavaScript. Manipulación del DOM, programación asincrónica, uso de promesas, consumo de APIs y lógica de programación compleja.',
    tags: ['JavaScript'],
    icon: Code,
  },
  {
    id: 'coderhouse-web',
    title: 'Desarrollo Web',
    place: 'CoderHouse',
    type: 'Curso',
    period: 'Abr 2022 - Jun 2022',
    detail: 'Fundamentos del desarrollo web. Maquetado de sitios estáticos y responsive empleando HTML y CSS, junto con una introducción a la interactividad mediante JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    icon: Layout, 
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
    period: 'Sep 2022 - Nov 2022',
    detail: 'Development of interactive user interfaces, global state management, and API consumption.',
    tags: ['React'],
    icon: BookOpen,
  },
  {
    id: 'coderhouse-js',
    title: 'JavaScript',
    place: 'CoderHouse',
    type: 'Course',
    period: 'Jun 2022 - Ago 2022',
    detail: 'Advanced JavaScript concepts. DOM manipulation, asynchronous programming, promises, API consumption, and complex programming logic.',
    tags: ['JavaScript'],
    icon: Code,
  },
  {
    id: 'coderhouse-web',
    title: 'Web Development',
    place: 'CoderHouse',
    type: 'Course',
    period: 'Abr 2022 - Jun 2022',
    detail: 'Fundamentals of web development. Building static and responsive websites using HTML and CSS, along with an introduction to interactivity through JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    icon: Layout,
  },
]

export const educationByLang: Record<Lang, EducationItem[]> = {
  es: educationEs,
  en: educationEn,
}