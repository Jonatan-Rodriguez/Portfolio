import type { LucideIcon } from 'lucide-react'
import { GraduationCap, Code2, BookOpen, Laptop2 } from 'lucide-react'

export interface EducationItem {
  title: string
  place: string
  type: string
  period: string
  detail?: string
  tags?: string[]
  icon: LucideIcon
}

export const education: EducationItem[] = [
  {
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
    title: 'TypeScript',
    place: 'Udemy',
    type: 'Curso',
    period: 'Jul 2026 — Actualidad',
    tags: ['TypeScript'],
    icon: Laptop2,
  },
  {
    title: 'React Native',
    place: 'Udemy',
    type: 'Curso',
    period: 'Jul 2026 — Actualidad',
    tags: ['React Native'],
    icon: Laptop2,
  },
  {
    title: 'Full Stack Web Developer',
    place: 'Henry Bootcamp',
    type: 'Bootcamp',
    period: 'Jul 2023 — Mar 2024',
    detail: '800 horas de cursado teórico-práctico enfocado en el ecosistema JavaScript.',
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    icon: Code2,
  },
  {
    title: 'React JS',
    place: 'CoderHouse',
    type: 'Curso',
    period: 'Jun 2022 - Oct 2022',
    tags: ['React'],
    icon: BookOpen,
  },
]