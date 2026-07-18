import { useTheme } from '../../context/ThemeContext'

export function AccentSwitch() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Cambiar tema"
      className="relative w-14 h-8 sm:w-16 sm:h-9 rounded-full bg-accent shrink-0 transition-colors"
    >
      <span
        className={`absolute top-1 left-1 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-paper shadow-md transition-transform duration-300 ${
          isDark ? 'translate-x-6 sm:translate-x-7' : 'translate-x-0'
        }`}
      />
    </button>
  )
}
