import { education } from '../data/education'
import { EducationRow } from '../components/education/EducationRow'

export function Education() {
  return (
    <section id="formacion" className="px-6 py-24 sm:py-32">
      <div className="max-w-4xl mx-auto">
        <p className="text-accent font-semibold text-sm tracking-wide uppercase text-center">My path</p>
        <h2 className="font-display font-bold text-4xl sm:text-5xl mt-2 text-center">Formación</h2>

        <div className="mt-16 rounded-2xl border border-ink/10 dark:border-paper/10 px-5 sm:px-8">
          {education.map((item, i) => (
            <EducationRow key={item.title} item={item} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}