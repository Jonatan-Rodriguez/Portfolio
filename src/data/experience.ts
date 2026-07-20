import type { LucideIcon } from 'lucide-react'
import { TrendingUp, ShieldCheck, Megaphone, Package } from 'lucide-react'

export interface ExperienceItem {
  role: string
  company: string
  location: string
  modality: string
  period: string
  description: string
  tags: string[]
  icon: LucideIcon
}

export const experience: ExperienceItem[] = [
  {
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