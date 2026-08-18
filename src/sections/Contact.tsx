import { FeatherFlourish } from '../components/contact/FeatherFlourish'
import { ContactForm } from '../components/contact/ContactForm'
import { AnimatedText } from '../components/shared/AnimatedText'
import { useLanguage } from '../context/LanguageContext'

export function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="px-6 py-24 sm:py-32">
      <div className="max-w-xl mx-auto text-center">
        <FeatherFlourish />

        <h2 className="font-display font-bold text-4xl sm:text-6xl leading-[0.95] mt-6">
          <AnimatedText text={t.contact.headingPart1} />
          <span className="text-accent">
            <AnimatedText text={t.contact.headingHighlight} />
          </span>
          <AnimatedText text={t.contact.headingPart2} />
        </h2>

        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}