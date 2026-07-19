import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { EducationItem } from '../../data/education'

export function EducationRow({ item, defaultOpen = false }: { item: EducationItem; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  const Icon = item.icon

  return (
    <div className="border-b border-ink/10 dark:border-paper/10 last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-start gap-4 py-5 text-left"
      >
        <div className="grid place-items-center w-9 h-9 rounded-full bg-ink/5 dark:bg-paper/10 shrink-0 mt-0.5">
          <Icon size={16} />
        </div>

        <div className="flex-1 min-w-0">
          <p className="font-display font-bold text-lg text-accent dark:text-accent">{item.title}</p>
          <p className="text-sm text-ink/60 dark:text-paper/60">{item.place}</p>
          <p className="text-xs text-ink/50 dark:text-paper/50 mt-1">
            {item.type} · {item.period}
          </p>
        </div>

        <ChevronDown
          size={18}
          className={`mt-1 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="pl-[52px] pb-6 pr-2">
            {item.detail && <p className="text-sm text-ink/70 dark:text-paper/70 max-w-2xl">{item.detail}</p>}
            {item.tags && (
              <div className="flex flex-wrap gap-2 mt-3">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-pixel text-[11px] rounded border border-ink/15 dark:border-paper/20 px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}