import { motion } from 'framer-motion'
import type { ExperienceItem } from '../../data/experience'

interface ExperienceCardProps {
  item: ExperienceItem
  index: number
}

export function ExperienceCard({ item, index }: ExperienceCardProps) {
  const Icon = item.icon

  return (
    <div className="relative pl-14 sm:pl-20">
      <span className="absolute left-[15px] sm:left-[23px] top-2 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-paper dark:ring-ink" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
        className="rounded-2xl bg-ink text-paper dark:bg-paper dark:text-ink p-6 sm:p-7"
      >
        <div className="flex items-start gap-4">
          <div className="grid place-items-center w-10 h-10 rounded-full bg-paper/10 dark:bg-ink/10 shrink-0">
            <Icon size={18} className="text-accent" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-display font-bold text-xl sm:text-2xl">{item.role}</h3>
              <span className="rounded-full bg-accent text-paper text-xs font-semibold px-3 py-1 shrink-0">
                {item.period}
              </span>
            </div>

            <p className="text-accent font-semibold mt-1">
              {item.company} <span className="text-paper/50 dark:text-ink/50 font-normal">· {item.location}</span>
            </p>
            <p className="text-sm text-paper/60 dark:text-ink/60 mt-0.5">{item.modality}</p>

            <p className="text-sm text-paper/80 dark:text-ink/80 mt-4 max-w-2xl">{item.description}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-pixel text-[10px] uppercase tracking-wide rounded border border-paper/20 dark:border-ink/15 px-2 py-1 text-paper/90 dark:text-ink/90"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}