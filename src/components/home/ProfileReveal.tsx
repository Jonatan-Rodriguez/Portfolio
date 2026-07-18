import { useRef, useState, type MouseEvent } from 'react'

interface ProfileRevealProps {
  baseSrc: string
  altSrc: string
  baseAlt: string
  altAlt: string
  onHoverChange: (hovering: boolean) => void
}

const REVEAL_RADIUS = 46

export function ProfileReveal({ baseSrc, altSrc, baseAlt, altAlt, onHoverChange }: ProfileRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleEnter = () => {
    setHovering(true)
    onHoverChange(true)
  }

  const handleLeave = () => {
    setHovering(false)
    onHoverChange(false)
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full cursor-none ring-4 ring-accent/70"
    >
      <img src={baseSrc} alt={baseAlt} className="absolute inset-0 w-full h-full object-cover rounded-full" />
      <img
        src={altSrc}
        alt={altAlt}
        className="absolute inset-0 w-full h-full object-cover rounded-full transition-[clip-path] duration-150 ease-out"
        style={{
          clipPath: `circle(${hovering ? REVEAL_RADIUS : 0}px at ${pos.x}px ${pos.y}px)`,
        }}
      />
      <div
        className="pointer-events-none absolute w-9 h-9 rounded-full transition-opacity duration-150"
        style={{
          left: pos.x,
          top: pos.y,
          transform: 'translate(-50%, -50%)',
          opacity: hovering ? 1 : 0,
        }}
      />
    </div>
  )
}
