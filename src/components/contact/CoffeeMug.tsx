export function CoffeeMug({ className = 'w-20 sm:w-28' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 130" className={className}>
      <path
        d="M40 34c-2-7 4-11 1-19"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        className="animate-steam text-ink/40 dark:text-paper/40"
        style={{ animationDelay: '0s' }}
      />
      <path
        d="M50 34c-2-8 4-12 1-20"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        className="animate-steam text-ink/40 dark:text-paper/40"
        style={{ animationDelay: '0.9s' }}
      />
      <path
        d="M60 34c-2-7 4-11 1-19"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        className="animate-steam text-ink/40 dark:text-paper/40"
        style={{ animationDelay: '1.8s' }}
      />

      <g className="animate-wiggle text-ink dark:text-paper" style={{ transformOrigin: '50px 118px' }}>
        <path d="M22 44h48l-4 44c-.6 7-6.3 12-13.3 12H39.3C32.3 100 26.6 95 26 88L22 44Z" fill="currentColor" />
        <path
          d="M68 52h6a9 9 0 0 1 0 18h-7"
          stroke="currentColor"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="38" cy="66" r="3" className="fill-paper dark:fill-ink" />
        <circle cx="54" cy="66" r="3" className="fill-paper dark:fill-ink" />
        <path
          d="M36 76c3 4 15 4 18 0"
          className="stroke-paper dark:stroke-ink"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
      </g>
    </svg>
  )
}