import { useState } from 'react'
import { FeatherFlourish } from '../components/contact/FeatherFlourish'
import { ContactModal } from '../components/contact/ContactModal'

export function Contact() {
  const [open, setOpen] = useState(false)

  return (
    <section id="contact" className="px-6 pt-24 pb-16 sm:pt-32 sm:pb-20 text-center">
      <FeatherFlourish />

      <h2 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl leading-[0.95] mt-6">
        ¿Interesado en <span className="text-accent">trabajar juntos</span>?
      </h2>

      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group inline-flex items-center gap-2 rounded-full bg-ink text-paper dark:bg-paper dark:text-ink px-7 py-3.5 text-sm font-semibold mt-10 hover:bg-accent dark:hover:bg-accent dark:hover:text-paper transition-colors duration-300"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:bg-paper dark:group-hover:bg-paper transition-colors duration-300" />
        Contactame
      </button>

      <ContactModal open={open} onClose={() => setOpen(false)} />
    </section>
  )
}