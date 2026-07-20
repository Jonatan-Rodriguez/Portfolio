import { projects } from '../data/projects'
import { ProjectCard } from '../components/work/ProjectCard'

export function Work() {
  return (
    <section id="proyectos" className="px-6 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto">
        <p className="text-accent font-semibold text-sm tracking-wide uppercase text-center">Mi portafolio</p>
        <h2 className="font-display font-bold text-4xl sm:text-5xl mt-2 text-center">Proyectos</h2>
        <p className="text-center text-ink/70 dark:text-paper/70 max-w-xl mx-auto mt-4">
          Proyectos con los que practiqué y afiancé el stack <span className="font-semibold">PERN</span>, desde una
          landing simple hasta un CRUD completo con autenticación y base de datos.
        </p>

        <div className="grid sm:grid-cols-3 gap-x-8 gap-y-16 mt-20">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}