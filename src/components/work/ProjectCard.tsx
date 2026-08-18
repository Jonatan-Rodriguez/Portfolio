import { motion } from 'framer-motion'
import type { Project } from '../../data/projects'
import { AnimatedText } from '../shared/AnimatedText' // Ajusta el path
import { useLanguage } from '../../context/LanguageContext'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { t } = useLanguage()

  return (
    <div className={index === 1 ? 'sm:mt-16' : ''}>
      <div className="flex flex-col items-center">
        <span className="w-2.5 h-2.5 rounded-full bg-ink/25 dark:bg-paper/25" />
        <span className="w-px h-10 bg-ink/15 dark:bg-paper/15" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.3, delay: index * 0.08, ease: 'easeOut' }}
        whileHover={{ y: -16 }}
        style={{ backgroundColor: project.color }}
        className="rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-2xl transition-shadow duration-300 dark:hover:shadow-2xl dark:hover:shadow-accent/10"
      >
        <div className="flex items-center justify-between">
          <span className="w-6 h-px bg-ink/50" />
          <span className="text-xs font-semibold bg-paper/70 rounded-full px-3 py-1 text-ink">
            <AnimatedText text={project.year} />
          </span>
        </div>

        <h3 className="font-display font-extrabold text-3xl sm:text-4xl leading-[0.95] text-ink mt-6">
          <AnimatedText text={project.title} />
        </h3>

        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="font-pixel text-[13px] uppercase tracking-wide bg-ink/10 text-ink rounded px-2 py-1"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 rounded-2xl overflow-hidden bg-paper/50 aspect-[4/3]">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" loading="lazy" />
        </div>

        <div className="flex gap-3 mt-6">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 text-center rounded-full bg-paper text-ink text-sm font-bold px-4 py-2.5 hover:opacity-80 transition-opacity"
          >
            <AnimatedText text={t.work.demoBtn} />
          </a>
          
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 text-center rounded-full bg-ink text-paper text-sm font-bold px-4 py-2.5 hover:opacity-80 transition-opacity"
          >
            <AnimatedText text={t.work.repoBtn} />
          </a>
        </div>
      </motion.div>
    </div>
  )
}