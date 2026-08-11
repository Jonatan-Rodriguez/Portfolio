import { useTheme } from '../../context/ThemeContext'

export function AccentSwitch() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Cambiar tema"
      className="relative inline-flex h-8 sm:h-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-accent outline-none transition-all duration-300"
      style={{
        aspectRatio: '212.4992 / 84.4688',
        boxShadow: '0 0 0 10px bg-accent',
      }}
    >
      <svg
        viewBox="0 0 212.4992 84.4688"
        overflow="visible"
        className="h-full w-full"
      >
        <path
          pathLength={360}
          fill="none"
          stroke="#fff"
          strokeWidth={16}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="origin-center"
          style={{
            strokeDasharray: '136 224',
            strokeDashoffset: isDark ? 180 : 0,
            transform: isDark ? 'scaleY(-1)' : 'scaleY(1)',
            transition: 'all 0.5s ease-out, transform 0s',
          }}
          d="M 42.2496 0 A 42.24 42.24 90 0 0 0 42.2496 A 42.24 42.24 90 0 0 42.2496 84.4688 A 42.24 42.24 90 0 0 84.4992 42.2496 A 42.24 42.24 90 0 0 42.2496 0 A 42.24 42.24 90 0 0 0 42.2496 A 42.24 42.24 90 0 0 42.2496 84.4688 L 170.2496 84.4688 A 42.24 42.24 90 0 0 212.4992 42.2496 A 42.24 42.24 90 0 0 170.2496 0 A 42.24 42.24 90 0 0 128 42.2496 A 42.24 42.24 90 0 0 170.2496 84.4688 A 42.24 42.24 90 0 0 212.4992 42.2496 A 42.24 42.24 90 0 0 170.2496 0 L 42.2496 0"
        />
      </svg>
    </button>
  )
}