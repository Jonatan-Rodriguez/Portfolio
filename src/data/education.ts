import type { LucideIcon } from 'lucide-react'
import { GraduationCap, Code2, BookOpen, Laptop2 } from 'lucide-react'
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
    detail:
      'Formación de 5 años orientada al diseño, desarrollo y mantenimiento de sistemas informáticos, con título intermedio de Técnico Universitario en Desarrollo de Software.',
    tags: ['Algoritmos', 'Estructuras de Datos', 'Ingeniería de Software'],
    icon: GraduationCap,
  },
  {
    id: 'udemy-ts',
    title: 'TypeScript',
    place: 'Udemy',
    type: 'Curso',
    period: 'Jul 2026 — Actualidad',
    tags: ['TypeScript'],
    icon: Laptop2,
  },
  {
    id: 'udemy-rn',
    title: 'React Native',
    place: 'Udemy',
    type: 'Curso',
    period: 'Jul 2026 — Actualidad',
    tags: ['React Native'],
    icon: Laptop2,
  },
  {
    id: 'henry',
    title: 'Full Stack Web Developer',
    place: 'Henry Bootcamp',
    type: 'Bootcamp',
    period: 'Jul 2023 — Mar 2024',
    detail: '800 horas de cursado teórico-práctico enfocado en el ecosistema JavaScript.',
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    icon: Code2,
  },
  {
    id: 'coderhouse',
    title: 'React JS',
    place: 'CoderHouse',
    type: 'Curso',
    period: 'Jun 2022 - Oct 2022',
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
    detail:
      '5-year program focused on the design, development, and maintenance of computer systems, including an intermediate degree as a University Technician in Software Development.',
    tags: ['Algorithms', 'Data Structures', 'Software Engineering'],
    icon: GraduationCap,
  },
  {
    id: 'udemy-ts',
    title: 'TypeScript',
    place: 'Udemy',
    type: 'Course',
    period: 'Jul 2026 — Present',
    tags: ['TypeScript'],
    icon: Laptop2,
  },
  {
    id: 'udemy-rn',
    title: 'React Native',
    place: 'Udemy',
    type: 'Course',
    period: 'Jul 2026 — Present',
    tags: ['React Native'],
    icon: Laptop2,
  },
  {
    id: 'henry',
    title: 'Full Stack Web Developer',
    place: 'Henry Bootcamp',
    type: 'Bootcamp',
    period: 'Jul 2023 — Mar 2024',
    detail: '800 hours of theoretical and practical coursework focused on the JavaScript ecosystem.',
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    icon: Code2,
  },
  {
    id: 'coderhouse',
    title: 'React JS',
    place: 'CoderHouse',
    type: 'Course',
    period: 'Jun 2022 - Oct 2022',
    tags: ['React'],
    icon: BookOpen,
  },
]

export const educationByLang: Record<Lang, EducationItem[]> = {
  es: educationEs,
  en: educationEn,
}