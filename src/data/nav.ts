export interface NavItem {
  label: string
  href: string
  index: string
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#top', index: '01' },
  { label: 'About', href: '#about', index: '02' },
  { label: 'Formación', href: '#formacion', index: '03' },
  { label: 'Proyectos', href: '#proyectos', index: '04' },
  { label: 'Experience', href: '#experience', index: '05' },
]