import { useState } from 'react'
import { navItems } from '../../data/nav'
import { useScrollProgress } from '../../hooks/useScrollProgress'
import { ThemeToggle } from './ThemeToggle'
import { LangToggle } from './LangToggle'
import { NavLink } from './NavLink'

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
          
          <a
            href="mailto:jonatarodriguez1998@gmail.com"
            className="flex items-center gap-1.5 rounded-full bg-ink text-paper dark:bg-paper dark:text-ink px-5 py-2.5 text-sm font-semibold hover:opacity-85 transition-opacity"
          >
            Connect
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden grid place-items-center w-10 h-10 rounded-full border border-ink/15 dark:border-paper/20"
          aria-label="Abrir menú"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-1 mx-6 rounded-2xl border border-ink/10 dark:border-paper/10 bg-paper dark:bg-ink shadow-lg overflow-hidden">
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
            
            <a
              href="mailto:jonatarodriguez1998@gmail.com"
              className="rounded-full bg-ink text-paper dark:bg-paper dark:text-ink px-4 py-2 text-sm font-semibold"
            >
              Connect
            </a>
          </div>
        </div>
      )}
    </header>
  )
}