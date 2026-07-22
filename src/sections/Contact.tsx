import { useState } from 'react'
import { FeatherFlourish } from '../components/contact/FeatherFlourish'
import { ContactModal } from '../components/contact/ContactModal'

export function Contact() {
  const [open, setOpen] = useState(false)

  return (
    <section id="contact" className="w-full flex flex-col justify-center py-20 sm:py-28">
      
      <div className="w-[92%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] 2xl:w-[70%] max-w-4xl mx-auto flex flex-col items-center text-center">
        
        <FeatherFlourish />

        <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] sm:leading-[0.95] mt-6 sm:mt-8 text-balance">
          ¿Interesado en <span className="text-accent">trabajar juntos</span>?
        </h2>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group inline-flex items-center gap-2 rounded-full bg-ink text-paper dark:bg-paper dark:text-ink px-7 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold mt-10 sm:mt-12 hover:bg-accent dark:hover:bg-accent dark:hover:text-paper transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent group-hover:bg-paper dark:group-hover:bg-paper transition-colors duration-300" />
          Contactame
        </button>

        <ContactModal open={open} onClose={() => setOpen(false)} />
        
      </div>
    </section>
  )
}