import { experience } from '../data/experience'
import { ExperienceCard } from '../components/experience/ExperienceCard'

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24 sm:py-32">
      <div className="max-w-3xl mx-auto">
        <p className="text-accent font-semibold text-sm tracking-wide uppercase text-center">My journey</p>
        <h2 className="font-display font-bold text-4xl sm:text-5xl mt-2 text-center">Experience</h2>

        <div className="relative mt-20">
          <div className="absolute left-[20px] sm:left-[28px] top-2 bottom-2 w-px bg-ink/10 dark:bg-paper/10" />

          <div className="flex flex-col gap-6">
            {experience.map((item, i) => (
              <ExperienceCard key={item.role} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}