export interface EducationItem {
  title: string
  place: string
  period: string
  detail?: string
}

export const education: EducationItem[] = [
  {
    title: 'Ingeniería en Computación',
    place: 'Universidad Nacional de Tres de Febrero (UNTREF)',
    period: 'Feb 2026 — Actualidad',
    detail: 'Carrera de 5 años, con título intermedio de Técnico Universitario en Desarrollo de Software.',
  },
  {
    title: 'Full Stack Web Developer',
    place: 'Henry Bootcamp',
    period: 'Jul 2023 — Mar 2024',
    detail: '800 horas de cursado teórico-práctico.',
  },
  {
    title: 'React JS',
    place: 'CoderHouse',
    period: 'Jun 2022 — Oct 2022',
  },
  {
    title: 'TypeScript y React Native',
    place: 'Udemy',
    period: 'Jul 2026 — Actualidad',
  },
]