import { experienceByLang } from '../data/experience'
import { ExperienceCard } from '../components/experience/ExperienceCard'
import { AnimatedText } from '../components/shared/AnimatedText'
import { useLanguage } from '../context/LanguageContext'

export function Experience() {
  const { t, lang } = useLanguage()
  const experience = experienceByLang[lang]

  return (
    <section id="experience" className="w-full flex flex-col justify-center py-20 sm:py-28">
      <div className="w-[92%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] 2xl:w-[70%] max-w-4xl mx-auto">
        <p className="text-accent font-semibold text-sm tracking-wide uppercase text-center">
          <AnimatedText text={t.experience.eyebrow} />
        </p>
        <h2 className="font-display font-bold text-4xl sm:text-5xl mt-2 text-center">
          <AnimatedText text={t.experience.title} />
        </h2>
        <div className="relative mt-16 sm:mt-20">
          <div className="absolute left-[20px] sm:left-[28px] top-2 bottom-2 w-px bg-ink/10 dark:bg-paper/10" />

          <div className="flex flex-col gap-6">
            {experience.map((item, i) => (
              <ExperienceCard key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}