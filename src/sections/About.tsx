import { Hand, Handshake, Globe, Download } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { skills } from '../data/skills'
import { education } from '../data/education'
import { SkillBadge } from '../components/about/SkillBadge'

export function About() {
  return (
    <section id="about" className="px-6 py-24 sm:py-32">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-20">
          <div>
            <p className="text-accent font-semibold text-sm tracking-wide uppercase">Who I am</p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl mt-2">About</h2>
          </div>

          <a
            href="../assets/cv-jonatan-rodriguez.pdf"
            download
            className="flex items-center gap-2 rounded-full bg-accent text-paper px-6 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <Download size={16} strokeWidth={2.5} />
            Descargar CV
          </a>
        </div>

        <p className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-snug text-center">
          Hola, <span className="text-accent">soy</span>{' '}
          <img
            src="/img/profile.jpg"
            alt="Jonatan Rodriguez"
            className="inline-block w-11 h-11 sm:w-14 sm:h-14 rounded-full object-cover align-middle -translate-y-1"
          />{' '}
          <span className="text-accent">Jonatan</span>{' '}
          <Hand size={34} strokeWidth={2} className="inline align-middle text-ink dark:text-paper -translate-y-1" />
          , full-stack developer desde{' '}
          <span className="inline-flex items-center rounded-full border border-ink/15 dark:border-paper/20 px-3 py-0.5 text-2xl sm:text-3xl align-middle">
            2022
          </span>{' '}
          combinando ventas{' '}
          <Handshake size={34} strokeWidth={2} className="inline align-middle text-ink dark:text-paper -translate-y-1" />{' '}
          y desarrollo web con foco en <span className="text-accent">React</span>,{' '}
          <span className="text-accent">Node.js</span> y <span className="text-accent">PostgreSQL</span>{' '}
          <Globe size={34} strokeWidth={2} className="inline align-middle text-ink dark:text-paper -translate-y-1" />.
        </p>

        <div className="mt-24">
          <p className="text-center font-semibold text-sm mb-8">Expertise in Tools</p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {skills.map((skill) => (
              <SkillBadge key={skill.name} skill={skill} />
            ))}
            
            <a
              href="https://github.com/Jonatan-Rodriguez"
              target="_blank"
              rel="noreferrer"
              className="group relative flex flex-col items-center"
            >
              <div className="absolute -top-11 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-ink dark:bg-paper text-paper dark:text-ink text-xs font-medium px-2.5 py-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none">
                GitHub
              </div>
              <div className="grid place-items-center w-16 h-16 rounded-full border border-ink/10 dark:border-paper/15 bg-paper dark:bg-ink shadow-sm transition-transform duration-200 group-hover:scale-110">
                <FaGithub size={24} className="text-ink dark:text-paper" />
              </div>
            </a>
          </div>
        </div>

        <div className="mt-28 max-w-2xl mx-auto">
          <p className="text-accent font-semibold text-sm tracking-wide uppercase text-center mb-10">Formación</p>
          <div className="flex flex-col gap-8">
            {education.map((item) => (
              <div
                key={item.title}
                className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 border-b border-ink/10 dark:border-paper/10 pb-6"
              >
                <div>
                  <p className="font-display font-bold text-lg">{item.title}</p>
                  <p className="text-sm text-ink/70 dark:text-paper/70">{item.place}</p>
                  {item.detail && <p className="text-sm text-ink/50 dark:text-paper/50 mt-1">{item.detail}</p>}
                </div>
                <p className="text-sm font-medium text-ink/60 dark:text-paper/60 shrink-0">{item.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}