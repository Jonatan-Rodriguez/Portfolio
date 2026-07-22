import { education } from '../data/education'
import { EducationCard } from '../components/education/EducationCard'

export function Education() {
  return (
    <section id="formacion" className="w-full flex flex-col justify-center py-20 sm:py-28">
      <div className="w-[92%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] 2xl:w-[70%] max-w-4xl mx-auto">

        <p className="text-accent font-semibold text-sm tracking-wide uppercase text-center">Mi camino</p>
        <h2 className="font-display font-bold text-4xl sm:text-5xl mt-2 text-center">Formación</h2>
        
        <div className="relative mt-16 sm:mt-20">
          <div className="absolute left-[20px] sm:left-[28px] top-2 bottom-2 w-px bg-ink/10 dark:bg-paper/10" />
            <div className="flex flex-col gap-6">
              {education.map((item, i) => (
                <EducationCard key={item.title} item={item} index={i} />
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}