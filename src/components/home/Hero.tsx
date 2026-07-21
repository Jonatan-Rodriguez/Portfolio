import { useState } from 'react'
import { ProfileReveal } from './ProfileReveal'
import { DissolveText } from './DissolveText'
import { AccentSwitch } from './AccentSwitch'

export function Hero() {
  const [isAlterEgo, setIsAlterEgo] = useState(false)

  return (
    <section id="top" className="pt-32 pb-8 sm:pb-6 px-6 min-h-screen">
      <div className="relative max-w-7xl mx-auto flex flex-col justify-center items-baseline h-full">
        <div className="flex items-center gap-5 sm:gap-5 mb-2 ">
          <h1 className="font-display font-semibold text-accent text-[18vw] sm:text-8xl md:text-9xl lg:text-[10.5rem] leading-none">
            Full-Stack
          </h1>
          <AccentSwitch />
        </div>

        <h2 className="font-display font-bold text-ink dark:text-paper text-[18vw] sm:text-8xl md:text-9xl lg:text-[10.5rem] leading-[0.9] tracking-tight">
          DEVELOPER
        </h2>

        <p className="font-pixel text-4xl sm:text-5xl md:text-6xl mt-4 tracking-widest">PERN</p>

        <p className="mt-8 max-w-lg text-base sm:text-lg text-ink/80 dark:text-paper/80">
          <span className="font-semibold text-accent dark:text-accent">Full-Stack Developer</span> &{' '}
          <span className="font-semibold text-accent dark:text-accent">Estudiante de Ingeniería en Computación</span>.
        </p>

        <div className="static sm:absolute sm:bottom-0 sm:right-0 mt-10 sm:mt-0 flex items-center justify-center sm:justify-end gap-4">
          <div className="text-left">
            <p className="text-lg text-ink/60 dark:text-paper/60">Hola! Soy</p>
            <p className="font-display font-bold text-2xl sm:text-3xl text-accent">
              <DissolveText
                text={isAlterEgo ? 'Batman.' : 'Jonatan Rodriguez.'}
                activeKey={isAlterEgo ? 'alter' : 'base'}
              />
            </p>
          </div>
          <ProfileReveal
            baseSrc="/img/profile.jpg"
            altSrc="/img/alter-ego.webp"
            baseAlt="Jonatan Rodriguez"
            altAlt="Alter ego"
            onHoverChange={setIsAlterEgo}
          />
        </div>
      </div>
    </section>
  )
}