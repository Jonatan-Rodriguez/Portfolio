import { useTheme } from '../../context/ThemeContext'
import { useThemeTransition } from '../../hooks/useThemeTransition'
import { useSound } from '../../hooks/useSound'

export function ThemeToggle() {
  const { theme } = useTheme()
  const toggleWithTransition = useThemeTransition()
  const playClick = useSound('/sounds/theme-toggle-click.wav', 0.3)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    playClick()
    toggleWithTransition(e)
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Cambiar tema"
      className="grid place-items-center w-9 h-9 rounded-full hover:bg-ink/5 dark:hover:bg-paper/10 transition-colors"
    >
      {theme === 'light' ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="4.5" />
          <path d="M12 2.5v2.5M12 19v2.5M4.6 4.6l1.8 1.8M17.6 17.6l1.8 1.8M2.5 12H5M19 12h2.5M4.6 19.4l1.8-1.8M17.6 6.4l1.8-1.8" strokeLinecap="round" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.5 14.6A8.6 8.6 0 0 1 9.4 3.5a.6.6 0 0 0-.75-.78A10 10 0 1 0 21.28 15.35a.6.6 0 0 0-.78-.75Z" />
        </svg>
      )}
    </button>
  )
}