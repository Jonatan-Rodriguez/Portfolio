export type NavItemId = 'home' | 'about' | 'formacion' | 'proyectos' | 'experiencia' | 'contacto'

export interface NavItem {
  id: NavItemId
  href: string
  index: string
}

export const navItems: NavItem[] = [
  { id: 'home', href: '#top', index: '01' },
  { id: 'about', href: '#about', index: '02' },
  { id: 'formacion', href: '#formacion', index: '03' },
  { id: 'proyectos', href: '#proyectos', index: '04' },
  { id: 'experiencia', href: '#experience', index: '05' },
  { id: 'contacto', href: '#contact', index: '06' },
]