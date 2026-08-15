interface MenuButtonProps {
  open: boolean
  onClick: () => void
}

export function MenuButton({ open, onClick }: MenuButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={open}
      aria-label="Abrir menú"
      className="nav:hidden grid place-items-center w-10 h-10 rounded-full border border-ink/15 dark:border-paper/20"
    >
      <span className="relative w-4 h-4">
        <span
          className={`absolute left-0 h-[2px] w-full rounded-full bg-ink dark:bg-paper transition-all duration-300 ease-in-out ${
            open ? 'top-[7px] rotate-45' : 'top-0 rotate-0'
          }`}
        />
        <span
          className={`absolute left-0 top-[7px] h-[2px] w-full rounded-full bg-ink dark:bg-paper transition-all duration-300 ease-in-out ${
            open ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
          }`}
        />
        <span
          className={`absolute left-0 h-[2px] w-full rounded-full bg-ink dark:bg-paper transition-all duration-300 ease-in-out ${
            open ? 'top-[7px] -rotate-45' : 'top-[14px] rotate-0'
          }`}
        />
      </span>
    </button>
  )
}