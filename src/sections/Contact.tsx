import { FeatherFlourish } from '../components/contact/FeatherFlourish'
import { ContactForm } from '../components/contact/ContactForm'

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24 sm:py-32">
      <div className="max-w-xl mx-auto text-center">
        <FeatherFlourish />

        <h2 className="font-display font-bold text-4xl sm:text-6xl leading-[0.95] mt-6">
          ¿Interesado en <span className="text-accent">trabajar juntos</span>?
        </h2>

        <div className="">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}