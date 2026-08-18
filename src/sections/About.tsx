import { Hand, Handshake, Globe } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { skills } from '../data/skills'
import { SkillBadge } from '../components/about/SkillBadge'
import { AnimatedText } from '../components/shared/AnimatedText'
import { useLanguage } from '../context/LanguageContext'
import cvFile from '../assets/pdf/cv-jonatan-rodriguez.pdf'

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="min-h-screen w-full flex flex-col justify-center py-16">

      <div className="w-[92%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] 2xl:w-[70%] mx-auto flex flex-col justify-center items-center">

        <div className="flex flex-wrap items-end justify-center gap-6 mb-12 sm:mb-20">
          <div className="flex flex-col items-center gap-2">
            <p className="text-accent font-semibold text-sm tracking-wide uppercase">
              <AnimatedText text={t.about.eyebrow} />
            </p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl mt-2">
              <AnimatedText text={t.about.title} />
            </h2>
          </div>
        </div>

        <p className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug lg:leading-tight text-center max-w-5xl mx-auto text-balance">
          <AnimatedText text={t.about.bioGreeting} />{' '}
          <span className="text-accent">
            <AnimatedText text={t.about.bioAmVerb} />
          </span>{' '}
          <img
            src="/img/profile.jpg"
            alt="Jonatan Rodriguez"
            className="inline-block w-11 h-11 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full object-cover align-middle -translate-y-1 sm:-translate-y-2"
          />{' '}
          <span className="text-accent">Jonatan</span>{' '}
          <Hand size={40} strokeWidth={2} className="inline align-middle text-ink dark:text-paper -translate-y-1 sm:-translate-y-2" />
          <AnimatedText text={t.about.bioSince} className="inline" />{' '}
          <span className="inline-flex items-center rounded-full border border-ink/15 dark:border-paper/20 px-3 py-0.5 sm:px-4 sm:py-1 text-2xl sm:text-3xl lg:text-4xl align-middle -translate-y-0.5">
            2022
          </span>{' '}
          <AnimatedText text={t.about.bioCombining} className="inline" />{' '}
          <Handshake size={40} strokeWidth={2} className="inline align-middle text-ink dark:text-paper -translate-y-1 sm:-translate-y-2" />{' '}
          <AnimatedText text={t.about.bioFocus} className="inline" /> <span className="text-accent">React</span>,{' '}
          <span className="text-accent">Node.js</span> <AnimatedText text={t.about.and} className="inline" />{' '}
          <span className="text-accent">PostgreSQL</span>{' '}
          <Globe size={40} strokeWidth={2} className="inline align-middle text-ink dark:text-paper -translate-y-1 sm:-translate-y-2" />.
        </p>

        <div className="mt-16 sm:mt-20 text-center max-w-60">
          <a
            href={cvFile}
            download="CV_Jonatan_Rodriguez.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block overflow-hidden rounded-[50px] border-2 border-accent px-[40px] pb-[13px] pt-[14px] font-sans font-semibold text-white transition-colors duration-300 hover:text-black dark:hover:text-white"
          >
            <div className="absolute -bottom-[5px] -left-[5px] -right-[5px] z-0 h-[111%] bg-accent transition-all duration-300 ease-in-out group-hover:h-[11%]" />
            <span className="relative z-10">
              <AnimatedText text={t.about.downloadCv} />
            </span>
          </a>
        </div>

        <div className="mt-20 sm:mt-24 w-full">
          <p className="text-center font-semibold text-xl mb-8">
            <AnimatedText text={t.about.toolsTitle} />
          </p>
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

      </div>
    </section>
  )
}