import { AccentSwitch } from '../components/home/AccentSwitch'

export function Home() {
  return (
    <section id="top" className="min-h-screen w-full flex flex-col justify-center pt-28 sm:pt-32 pb-8">

      <div className="relative flex flex-col justify-center w-[92%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] 2xl:w-[70%] mx-auto">

        <div className="flex items-center gap-3 sm:gap-5 mb-2">
          <h1 className="font-display font-semibold text-accent text-[15vw] sm:text-7xl md:text-8xl lg:text-9xl xl:text-[11rem] 2xl:text-[12.5rem] leading-none">
            Full-Stack
          </h1>
          <AccentSwitch />
        </div>

        <h2 className="font-display font-bold text-ink dark:text-paper text-[16vw] sm:text-7xl md:text-8xl lg:text-9xl xl:text-[11rem] 2xl:text-[12rem] leading-[0.9] tracking-tight">
          DEVELOPER
        </h2>

        <p className="font-pixel mt-2 sm:mt-4 tracking-widest text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[7rem]">
          PERN
        </p>

        <div className="mt-6 sm:mt-8 flex flex-col md:flex-row md:items-end justify-between gap-10 md:gap-6 w-full">

          <p className="w-full md:max-w-[55%] lg:max-w-[60%] xl:max-w-[48%] text-base sm:text-lg md:text-xl lg:text-[1.7rem] leading-relaxed lg:leading-[1.6] text-ink/80 dark:text-paper/80">
            <span className="font-semibold text-accent dark:text-accent">Full-Stack Developer</span> &{' '}
            <span className="font-semibold text-accent dark:text-accent">Estudiante de Ingeniería en Computación</span>.
          </p>

          <div className="flex items-center justify-start md:justify-end gap-3 sm:gap-4 shrink-0">
            <div className="text-left">
              <p className="text-base sm:text-lg text-ink/60 dark:text-paper/60">Hola! Soy</p>
              <p className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-accent">
                Jonatan Rodriguez.
              </p>
            </div>
            <img
              src="/img/profile.jpg"
              alt="Jonatan Rodriguez"
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover ring-4 ring-accent/70"
            />
          </div>
        </div>
      </div>
    </section>
  )
}