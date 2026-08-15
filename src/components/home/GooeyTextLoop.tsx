import { useEffect, useRef, useState } from 'react'

interface GooeyTextLoopProps {
  words: string[]
  interval?: number
  transitionDuration?: number
  minSize?: string
  maxSize?: string
  className?: string
}

export function GooeyTextLoop({
  words,
  interval = 2600,
  transitionDuration = 900,
  minSize = '2.75rem',
  maxSize = '12rem',
  className = '',
}: GooeyTextLoopProps) {
  const [index, setIndex] = useState(0)
  const blurAnimRef = useRef<SVGAnimateElement>(null)

  const longestLength = Math.max(...words.map((w) => w.length))
  const preferredCqw = 98 / (longestLength * 0.62)
  const fontSize = `clamp(${minSize}, ${preferredCqw.toFixed(2)}cqw, ${maxSize})`

  useEffect(() => {
    if (words.length < 2) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length)
    }, interval)
    return () => clearInterval(id)
  }, [words.length, interval])

  useEffect(() => {
    blurAnimRef.current?.beginElement()
  }, [index])

  const durSeconds = transitionDuration / 1000

  return (
    <>
      <svg width="0" height="0" className="absolute">
        <filter id="gooey-text">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="0">
            <animate
              ref={blurAnimRef}
              attributeName="stdDeviation"
              values="0;7;7;0"
              keyTimes="0;0.3;0.65;1"
              dur={`${durSeconds}s`}
              begin="indefinite"
              fill="freeze"
              calcMode="spline"
              keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1"
            />
          </feGaussianBlur>
          <feColorMatrix
            in="blur"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </svg>

      <div
        aria-hidden="true"
        className={`relative grid ${className}`}
        style={{ filter: 'url(#gooey-text)', fontSize }}
      >
        {words.map((word, i) => (
          <span
            key={word}
            className="[grid-area:1/1] ease-in-out"
            style={{
              opacity: i === index ? 1 : 0,
              transitionProperty: 'opacity',
              transitionDuration: `${transitionDuration}ms`,
            }}
          >
            {word}
          </span>
        ))}
      </div>
    </>
  )
}