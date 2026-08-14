import { useState } from 'react'
import { navItems } from '../../data/nav'
import { useScrollProgress } from '../../hooks/useScrollProgress'
import { ThemeToggle } from './ThemeToggle'
import { LangToggle } from './LangToggle'
import { NavLink } from './NavLink'
import { ConnectButton } from './ConnectButton/ConnectButton'
import { MenuButton } from './MenuButton'

export function Header() {
  const { scrolled } = useScrollProgress()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div
        className={`relative mx-auto flex items-center justify-between transition-[max-width,padding,margin] duration-500 ease-in-out ${
          scrolled ? 'max-w-full px-8 py-3' : 'max-w-7xl px-6 py-6'
        }`}
      >
        <div
          className={`absolute inset-0 -z-10 bg-paper/80 dark:bg-ink/80 backdrop-blur-md border-b border-ink/5 dark:border-paper/10 shadow-sm transition-opacity duration-500 ease-in-out ${
            scrolled ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <a href="#top" className="font-display text-2xl font-bold tracking-tight">
          <span className="text-accent">&lt;</span>Jona<span className="text-accent">&gt;</span>
        </a>

        <nav className="hidden md:flex items-center gap-1 rounded-full px-2 py-2 bg-ink/5 dark:bg-paper/10">
          {navItems.map((item) => (
            <NavLink key={item.href} item={item} />
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <LangToggle />
          <ThemeToggle />
          <ConnectButton />
        </div>

        <MenuButton open={open} onClick={() => setOpen((o) => !o)} />
      </div>

      <div
        aria-hidden={!open}
        className={`md:hidden grid transition-[grid-template-rows] duration-400 ease-in-out ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div
            className={`mt-1 mx-6 rounded-2xl border border-ink/10 dark:border-paper/10 bg-paper dark:bg-ink shadow-lg overflow-hidden transition-opacity duration-300 ease-in-out ${
              open ? 'opacity-100 delay-100' : 'opacity-0'
            }`}
          >
            <nav className="flex flex-col p-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-medium hover:bg-ink/5 dark:hover:bg-paper/10"
                >
                  {item.label} <sup className="text-[10px] text-ink/40 dark:text-paper/40">{item.index}</sup>
                </a>
              ))}
            </nav>
            <div className="flex items-center justify-between px-4 py-3 border-t border-ink/10 dark:border-paper/10">
              <div className="flex items-center gap-3">
                <LangToggle />
                <ThemeToggle />
              </div>
              <ConnectButton />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}