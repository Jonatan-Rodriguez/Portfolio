import { Heart } from 'lucide-react'
import { CoffeeMug } from '../contact/CoffeeMug'

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 pb-8">
      <div className="max-w-5xl mx-auto">
        <div className="relative mt-20">
          <div className="absolute -top-[115px] right-0 sm:right-6 text-ink dark:text-paper">
            <CoffeeMug />
          </div>
          <div className="h-px bg-ink/10 dark:bg-paper/10" />
        </div>

        {/* Contenedor principal de 3 columnas */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 pb-2">
          
          {/* Lado Izquierdo (33%): Logo y Copyright */}
          <div className="flex flex-col items-center sm:items-start gap-2 w-full sm:w-1/3">
            <p className="font-display font-bold text-2xl sm:text-3xl">
              &lt;Jona<span className="text-accent">/</span>&gt;
            </p>
            <p className="text-sm text-ink/60 dark:text-paper/60 text-center sm:text-left">
              © {currentYear} Jona. Todos los derechos reservados.
            </p>
          </div>

          {/* Centro (33%): Hecho con amor */}
          <div className="flex justify-center w-full sm:w-1/3 text-sm text-ink/60 dark:text-paper/60">
            <p className="flex items-center gap-1.5">
              Hecho con <Heart size={13} className="text-accent fill-accent" /> por Jona
            </p>
          </div>

          {/* Lado Derecho (33%): Redes Sociales Animadas */}
          <div className="flex justify-center sm:justify-end w-full sm:w-1/3">
            <ul className="flex items-center">
              {/* GitHub */}
              <li className="relative group mx-2">
                <a
                  href="https://github.com/Jonatan-Rodriguez"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="relative overflow-hidden flex justify-center items-center w-11 h-11 rounded-xl text-ink/70 dark:text-paper/70 bg-white/5 dark:bg-black/10 border border-ink/10 dark:border-paper/10 transition-all duration-300 hover:shadow-lg hover:text-white dark:hover:text-white"
                >
                  <div className="absolute bottom-0 left-0 w-full h-0 bg-[#24262a] transition-all duration-300 group-hover:h-full z-0"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="relative z-10"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                </a>
                <div className="absolute -top-[30px] left-1/2 -translate-x-1/2 bg-[#24262a] text-white px-3 py-1.5 rounded-md opacity-0 invisible text-xs font-medium transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:-top-[45px] pointer-events-none whitespace-nowrap z-20">
                  GitHub
                </div>
              </li>

              {/* LinkedIn */}
              <li className="relative group mx-2">
                <a
                  href="https://www.linkedin.com/in/jonatan-rodriguez-9b1425260"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="relative overflow-hidden flex justify-center items-center w-11 h-11 rounded-xl text-ink/70 dark:text-paper/70 bg-white/5 dark:bg-black/10 border border-ink/10 dark:border-paper/10 transition-all duration-300 hover:shadow-lg hover:text-white dark:hover:text-white"
                >
                  <div className="absolute bottom-0 left-0 w-full h-0 bg-[#0274b3] transition-all duration-300 group-hover:h-full z-0"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="relative z-10"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                </a>
                <div className="absolute -top-[30px] left-1/2 -translate-x-1/2 bg-[#0274b3] text-white px-3 py-1.5 rounded-md opacity-0 invisible text-xs font-medium transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:-top-[45px] pointer-events-none whitespace-nowrap z-20">
                  LinkedIn
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}