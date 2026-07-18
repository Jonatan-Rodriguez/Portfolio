import type { NavItem } from '../../data/nav'

interface NavLinkProps {
  item: NavItem
  onClick?: () => void
}

export function NavLink({ item, onClick }: NavLinkProps) {
  return (
    <a href={item.href} onClick={onClick} className="group px-4 py-2 rounded-full text-sm font-medium">
      <span className="relative inline-flex overflow-hidden h-[1.4em] align-middle">
        <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
          {item.label}
        </span>
        <span className="block absolute left-0 top-0 translate-y-full text-accent transition-transform duration-300 ease-out group-hover:translate-y-0">
          {item.label}
        </span>
      </span>
      <sup className="ml-0.5 text-[10px] text-ink/40 dark:text-paper/40 group-hover:text-accent/60 transition-colors">
        {item.index}
      </sup>
    </a>
  )
}