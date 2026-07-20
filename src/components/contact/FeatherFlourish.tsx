import { Feather } from 'lucide-react'

export function FeatherFlourish() {
  return (
    <div className="inline-flex flex-col items-center">
      <Feather size={28} className="text-ink/50 dark:text-paper/50 -rotate-12" />
      <svg width="34" height="12" viewBox="0 0 34 12" className="-mt-1 text-accent">
        <path d="M2 6c6-8 12 6 18-2s10 6 12-2" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  )
}