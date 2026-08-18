import type { LucideIcon } from 'lucide-react'
import { TrendingUp, ShieldCheck, Megaphone, Package } from 'lucide-react'
import type { Lang } from '../context/LanguageContext'

export interface ExperienceItem {
  id: string // <- Agregamos ID para usar como key segura
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
    id: 'innova',
    role: 'Ejecutivo de Ventas',
    company: 'Innova',
    location: 'Argentina',
    modality: 'Tiempo completo · Remoto',
    period: 'Ago 2025 — Oct 2025',
    description:
      'Responsable de la gestión comercial y cierre de ventas por canales digitales. Gestioné flujos de chat automatizados, asesoré sobre planes y coberturas, y seguí el ciclo completo de ventas.',
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
    description:
      'Gestión y asesoramiento en seguros con soporte directo a clientes. Desarrollé y mantuve la página web y aplicaciones internas del estudio, y optimicé procesos mediante automatización.',
    tags: ['Desarrollo Web', 'Automatización', 'Atención al cliente'],
    icon: ShieldCheck,
  },
  {
    id: 'telecentro',
    role: 'Promotor',
    company: 'Telecentro',
    location: 'Argentina',
    modality: 'Tiempo completo · Presencial',
    period: 'Abr 2021 — Jul 2021',
    description:
      'Difusión de servicios de telecomunicaciones y distribución de material promocional, con información y orientación a clientes en el seguimiento de zonas asignadas.',
    tags: ['Ventas', 'Atención al cliente'],
    icon: Megaphone,
  },
  {
    id: 'montecarlos',
    role: 'Encargado de Depósito',
    company: 'Mueblería Montecarlos Hogar',
    location: 'Argentina',
    modality: 'Tiempo completo · Presencial',
    period: 'Ene 2021 — Abr 2021',
    description: 'Gestión del almacén: armado y entrega de muebles, control y organización de stock.',
    tags: ['Logística', 'Organización'],
    icon: Package,
  },
]

const experienceEn: ExperienceItem[] = [
  {
    id: 'innova',
    role: 'Sales Executive',
    company: 'Innova',
    location: 'Argentina',
    modality: 'Full-time · Remote',
    period: 'Aug 2025 — Oct 2025',
    description:
      'Responsible for commercial management and closing sales through digital channels. Managed automated chat flows, advised on plans and coverages, and tracked the full sales cycle.',
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
    description:
      'Insurance management and advisory with direct customer support. Developed and maintained the firm\'s website and internal applications, and optimized processes through automation.',
    tags: ['Web Development', 'Automation', 'Customer Support'],
    icon: ShieldCheck,
  },
  {
    id: 'telecentro',
    role: 'Promoter',
    company: 'Telecentro',
    location: 'Argentina',
    modality: 'Full-time · On-site',
    period: 'Apr 2021 — Jul 2021',
    description:
      'Promotion of telecommunications services and distribution of promotional material, providing information and guidance to clients in assigned tracking areas.',
    tags: ['Sales', 'Customer Support'],
    icon: Megaphone,
  },
  {
    id: 'montecarlos',
    role: 'Warehouse Manager',
    company: 'Mueblería Montecarlos Hogar',
    location: 'Argentina',
    modality: 'Full-time · On-site',
    period: 'Jan 2021 — Apr 2021',
    description: 'Warehouse management: furniture assembly and delivery, inventory control and organization.',
    tags: ['Logistics', 'Organization'],
    icon: Package,
  },
]

export const experienceByLang: Record<Lang, ExperienceItem[]> = {
  es: experienceEs,
  en: experienceEn,
}