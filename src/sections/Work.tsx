import { projects } from '../data/projects'
import { ProjectCard } from '../components/work/ProjectCard'

export function Work() {
  return (
    <section id="proyectos" className="w-full flex flex-col justify-center py-20 sm:py-28">
      <div className="w-[92%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] 2xl:w-[70%] max-w-7xl mx-auto">
        <p className="text-accent font-semibold text-sm tracking-wide uppercase text-center">Mi portafolio</p>
        <h2 className="font-display font-bold text-4xl sm:text-5xl mt-2 text-center">Proyectos</h2>
        <p className="text-center text-ink/70 dark:text-paper/70 max-w-xl mx-auto mt-4 text-balance">
          Proyectos con los que practiqué y afiancé el stack <span className="font-semibold">PERN</span>, desde una
          landing simple hasta un CRUD completo con autenticación y base de datos.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mt-16 sm:mt-20">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}