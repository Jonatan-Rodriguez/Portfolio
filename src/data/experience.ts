import type { LucideIcon } from 'lucide-react'
import { TrendingUp, ShieldCheck, Code, Laptop } from 'lucide-react'
import type { Lang } from '../context/LanguageContext'

export interface ExperienceItem {
  id: string 
  role: string
  company: string
  location: string
  modality: string
  period: string
  description: string
  tags: string[]
  icon: LucideIcon
}

const experienceEs: ExperienceItem[] = [
  {
    id: 'desarrollador Web Freelance',
    role: 'Profesional Independiente',
    company: 'Desarrollador Web Freelance',
    location: 'Argentina',
    modality: 'Medio tiempo · Remoto',
    period: 'Abr 2026 — actualidad',
    description: 'Desarrollo y mantenimiento de aplicaciones web a medida. Especializado en diseño responsive, resolución de bugs y refactorización de código.',
    tags: ['Diseño Responsive', 'Resolución de Bugs', 'Refactorización'],
    icon: Laptop,
  },
  {
    id: 'desarrollador Front-End',
    role: 'Desarrollador Front-End',
    company: 'DevTech Solutions',
    location: 'Argentina',
    modality: 'Tiempo completo · Remoto',
    period: 'Oct 2025 — May 2026',
    description: 'Participación en el ciclo completo de desarrollo bajo metodologías ágiles (Scrum). Creación de componentes reutilizables, optimización de rendimiento y control de versiones con Git/GitHub.',
    tags: ['Scrum', 'Git/GitHub', 'Optimización'],
    icon: Code,
  },
  {
    id: 'innova',
    role: 'Ejecutivo de Ventas',
    company: 'Innova',
    location: 'Argentina',
    modality: 'Tiempo completo · Remoto',
    period: 'Ago 2025 — Oct 2025',
    description:'Responsable de la gestión comercial y cierre de ventas por canales digitales. Gestioné flujos de chat automatizados, asesoré sobre planes y coberturas, y seguí el ciclo completo de ventas.',
    tags: ['WhatsApp Business', 'ManyChat', 'Ventas'],
    icon: TrendingUp,
  },
  {
    id: 'thames',
    role: 'Asesor de Seguro',
    company: 'Estudio Jurídico Thames',
    location: 'Argentina',
    modality: 'Tiempo completo · Remoto',
    period: 'Jul 2024 — Ago 2025',
    description:'Gestión y asesoramiento en seguros con soporte directo a clientes. Desarrollé y mantuve la página web y aplicaciones internas del estudio, y optimicé procesos mediante automatización.',
    tags: ['Desarrollo Web', 'Automatización', 'Atención al cliente'],
    icon: ShieldCheck,
  },
]

const experienceEn: ExperienceItem[] = [
  {
    id: 'desarrollador Web Freelance',
    role: 'Independent Professional',
    company: 'Freelance Web Developer',
    location: 'Argentina',
    modality: 'Part-time · Remote',
    period: 'Apr 2026 — present',
    description: 'Development and maintenance of custom web applications. Specialized in responsive design, bug fixing, and code refactoring.',
    tags: ['Responsive Design', 'Bug Fixing', 'Refactoring'],
    icon: Laptop,
  },
  {
    id: 'desarrollador Front-End',
    role: 'Front-End Developer',
    company: 'DevTech Solutions',
    location: 'Argentina',
    modality: 'Full-time · Remote',
    period: 'Oct 2025 — May 2026',
    description: 'Participation in the full development cycle under agile methodologies (Scrum). Creation of reusable components, performance optimization, and version control with Git/GitHub.',
    tags: ['Scrum', 'Git/GitHub', 'Optimization'],
    icon: Code,
  },
  {
    id: 'innova',
    role: 'Sales Executive',
    company: 'Innova',
    location: 'Argentina',
    modality: 'Full-time · Remote',
    period: 'Aug 2025 — Oct 2025',
    description:'Responsible for commercial management and closing sales through digital channels. Managed automated chat flows, advised on plans and coverages, and tracked the full sales cycle.',
    tags: ['WhatsApp Business', 'ManyChat', 'Sales'],
    icon: TrendingUp,
  },
  {
    id: 'thames',
    role: 'Insurance Advisor',
    company: 'Estudio Jurídico Thames',
    location: 'Argentina',
    modality: 'Full-time · Remote',
    period: 'Jul 2024 — Aug 2025',
    description:'Insurance management and advisory with direct customer support. Developed and maintained the firm\'s website and internal applications, and optimized processes through automation.',
    tags: ['Web Development', 'Automation', 'Customer Support'],
    icon: ShieldCheck,
  },
]

export const experienceByLang: Record<Lang, ExperienceItem[]> = {
  es: experienceEs,
  en: experienceEn,
}