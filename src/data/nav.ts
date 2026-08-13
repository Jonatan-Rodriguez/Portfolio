export interface NavItem {
  label: string
  href: string
  index: string
}

export const navItems: NavItem[] = [
  { label: 'Inicio', href: '#top', index: '01' },
  { label: 'Sobre Mi', href: '#about', index: '02' },
  { label: 'Formación', href: '#formacion', index: '03' },
  { label: 'Proyectos', href: '#proyectos', index: '04' },
  { label: 'Experiencia', href: '#experience', index: '05' },
  { label: 'Contacto', href: '#contact', index: '06' },
]