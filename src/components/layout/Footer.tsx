import { Heart } from 'lucide-react'
import { EmailCopy } from '../contact/EmailCopy'
import { CoffeeMug } from '../contact/CoffeeMug'

export function Footer() {
  return (
    <footer className="px-6 pb-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <p className="font-display font-bold text-2xl sm:text-3xl">
            &lt;Jona<span className="text-accent">/</span>&gt;
          </p>
          <div className="mt-6">
            <EmailCopy />
          </div>
        </div>

        <div className="relative mt-20">
          <div className="absolute -top-[115px] right-0 sm:right-6 text-ink dark:text-paper">
            <CoffeeMug />
          </div>
          <div className="h-px bg-ink/10 dark:bg-paper/10" />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 pb-2">
          <p className="flex items-center gap-1.5 text-sm text-ink/60 dark:text-paper/60">
            Hecho con <Heart size={13} className="text-accent fill-accent" /> por Jona
          </p>
          <div className="flex items-center gap-6 text-sm font-medium">
            <a href="https://github.com/Jonatan-Rodriguez" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/jonatan-rodriguez-9b1425260" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}