import { motion } from 'framer-motion'
import type { EducationItem } from '../../data/education'
import { AnimatedText } from '../shared/AnimatedText'

interface EducationCardProps {
  item: EducationItem
  index: number
}

export function EducationCard({ item, index }: EducationCardProps) {
  const Icon = item.icon

  return (
    <div className="relative pl-14 sm:pl-20">
      <span className="absolute left-[15px] sm:left-[23px] top-2 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-[#fdfaf2] dark:ring-black" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
        whileHover={{ scale: 1.02, y: -6 }}
        className="
          rounded-2xl bg-[#f7ede2] dark:bg-[#111111] text-ink dark:text-white p-6 sm:p-7 
          border border-ink/5 dark:border-white/5
          shadow-sm transition-all duration-300 ease-out 
          hover:shadow-lg hover:shadow-ink/10 
          dark:hover:bg-[#181818] dark:hover:border-white/20 dark:hover:shadow-2xl dark:hover:shadow-accent/10
        "
      >
        <div className="flex items-start gap-4">
          <div className="grid place-items-center w-10 h-10 rounded-full bg-ink/5 dark:bg-white/10 shrink-0">
            <Icon size={18} className="text-accent" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-display font-bold text-xl sm:text-2xl">
                <AnimatedText text={item.title} />
              </h3>
              <span className="rounded-full bg-accent text-white text-xs font-semibold px-3 py-1 shrink-0">
                <AnimatedText text={item.period} />
              </span>
            </div>

            <p className="text-accent font-semibold mt-1">
              <AnimatedText text={item.place} />
            </p>
            <p className="text-sm text-ink/60 dark:text-white/60 mt-0.5">
              <AnimatedText text={item.type} />
            </p>

            {item.detail && (
              <p className="text-sm text-ink/80 dark:text-white/80 mt-4 max-w-2xl">
                <AnimatedText text={item.detail} />
              </p>
            )}

            {item.tags && (
              <div className="flex flex-wrap gap-2 mt-4">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-pixel text-[1em] uppercase tracking-[0.075em] rounded border border-ink/20 dark:border-white/20 px-2 py-1 text-ink/90 dark:text-white/90"
                  >
                    <AnimatedText text={tag} />
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}