import { flushSync } from 'react-dom'
import { useTheme } from '../context/ThemeContext'

interface ClickPoint {
  clientX: number
  clientY: number
}

export function useThemeTransition() {
  const { toggleTheme } = useTheme()

  return (point: ClickPoint) => {
    const x = point.clientX
    const y = point.clientY
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!document.startViewTransition || reduceMotion) {
      toggleTheme()
      return
    }

    const transition = document.startViewTransition(() => {
      flushSync(() => toggleTheme())
    })

    transition.ready.then(() => {
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      )

      document.documentElement.animate(
        {
          clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`],
        },
        {
          duration: 550,
          easing: 'ease-in-out',
          pseudoElement: '::view-transition-new(root)',
        }
      )
    })
  }
}