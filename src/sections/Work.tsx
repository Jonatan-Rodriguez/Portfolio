import { projectsByLang } from '../data/projects'
import { ProjectCard } from '../components/work/ProjectCard'
import { AnimatedText } from '../components/shared/AnimatedText'
import { useLanguage } from '../context/LanguageContext'
import { useSectionTracking } from '../hooks/useSectionTracking'

export function Work() {
  const { t, lang } = useLanguage()
  const projects = projectsByLang[lang]
  const sectionRef = useSectionTracking('Proyectos')

  return (
    <section ref={sectionRef} id="proyectos" className="w-full flex flex-col justify-center py-20 sm:py-28">
      <div className="w-[92%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] 2xl:w-[70%] max-w-7xl mx-auto">

        <p className="text-accent font-semibold text-sm tracking-wide uppercase text-center">
          <AnimatedText text={t.work.eyebrow} />
        </p>

        <h2 className="font-display font-bold text-4xl sm:text-5xl mt-2 text-center">
          <AnimatedText text={t.work.title} />
        </h2>

        <p className="text-center text-ink/70 dark:text-paper/70 max-w-xl mx-auto mt-4 text-balance">
          <AnimatedText text={t.work.desc1} />
          <span className="font-semibold"><AnimatedText text={t.work.highlight} /></span>
          <AnimatedText text={t.work.desc2} />
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mt-16 sm:mt-20">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}