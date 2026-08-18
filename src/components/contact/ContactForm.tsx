import { useState, type FormEvent } from 'react'
import { Send, Loader2 } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { isValidName, isValidEmail, isValidMessage, MESSAGE_MAX_LENGTH } from '../../utils/validators'
import { useLanguage } from '../../context/LanguageContext'
import { AnimatedText } from '../shared/AnimatedText'

interface ContactFormProps {
  title?: string
  subtitle?: string
  onSuccess?: () => void
  variant?: 'default' | 'modal'
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export function ContactForm({ title, subtitle, onSuccess, variant = 'default' }: ContactFormProps) {
  const { t } = useLanguage()
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [sent, setSent] = useState(false)
  const [sendError, setSendError] = useState(false)

  const isModal = variant === 'modal'

  const wrapperClasses = isModal
    ? "w-full max-h-[80vh] overflow-y-auto overflow-x-hidden px-2 pb-4"
    : "w-full mt-12 rounded-2xl bg-[#f7ede2] dark:bg-[#111111] text-ink dark:text-white p-6 sm:p-8 border border-ink/5 dark:border-white/20 shadow-lg shadow-ink/10 dark:shadow-2xl dark:shadow-accent/10"
    
  const inputClass = (hasError?: string) => {
    const base = "mt-1.5 w-full rounded-xl border bg-transparent px-4 py-3 text-sm text-ink dark:text-white placeholder:text-ink/40 dark:placeholder:text-white/40 focus:outline-none transition-colors"
    const borderColors = hasError
      ? "border-red-500/70 focus:border-red-500"
      : "border-ink/20 dark:border-white/20 focus:border-accent"

    return `${base} ${borderColors}`
  }

  const handleChange = (
    field: keyof FormErrors,
    value: string,
    validator: (v: string) => boolean
  ) => {
    if (field === 'name') setName(value)
    if (field === 'email') setEmail(value)
    if (field === 'message') setMessage(value)

    if (errors[field] && validator(value)) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (honeypot) return

    const nextErrors: FormErrors = {}
    if (!isValidName(name)) nextErrors.name = t.contactForm.nameError
    if (!isValidEmail(email)) nextErrors.email = t.contactForm.emailError
    if (!isValidMessage(message)) nextErrors.message = t.contactForm.messageError(MESSAGE_MAX_LENGTH)

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setSent(false)
      return
    }

    setIsSubmitting(true)
    setSendError(false)
    setSent(false)

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          reply_to: email,
          message: message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      setSent(true)
      setName('')
      setEmail('')
      setMessage('')
      setErrors({})
      
      if (onSuccess) {
        setTimeout(() => onSuccess(), 2000)
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error)
      setSendError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={wrapperClasses}>
      {title && <h3 className="font-display font-bold text-2xl sm:text-3xl text-center">{title}</h3>}
      {subtitle && <p className="text-sm text-ink/60 dark:text-white/60 text-center mt-2">{subtitle}</p>}

      <form onSubmit={handleSubmit} noValidate className={`flex flex-col gap-4 text-left ${title ? 'mt-7' : ''}`}>
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          className="absolute -left-[9999px] w-px h-px opacity-0"
          aria-hidden="true"
        />

        <div>
          <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wide text-ink/50 dark:text-white/50">
            <AnimatedText text={t.contactForm.nameLabel} />
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => handleChange('name', e.target.value, isValidName)}
            placeholder={t.contactForm.namePlaceholder}
            className={inputClass(errors.name)}
            disabled={isSubmitting}
          />
          {errors.name && <p className="text-xs text-red-500 mt-1.5"><AnimatedText text={errors.name} /></p>}
        </div>

        <div>
          <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-ink/50 dark:text-white/50">
            <AnimatedText text={t.contactForm.emailLabel} />
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => handleChange('email', e.target.value, isValidEmail)}
            placeholder={t.contactForm.emailPlaceholder}
            className={inputClass(errors.email)}
            disabled={isSubmitting}
          />
          {errors.email && <p className="text-xs text-red-500 mt-1.5"><AnimatedText text={errors.email} /></p>}
        </div>

        <div>
          <div className="flex items-baseline justify-between">
            <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wide text-ink/50 dark:text-white/50">
              <AnimatedText text={t.contactForm.messageLabel} />
            </label>
            <span className="text-xs text-ink/40 dark:text-white/40">
              {message.length}/{MESSAGE_MAX_LENGTH}
            </span>
          </div>
          <textarea
            id="message"
            value={message}
            onChange={(e) => handleChange('message', e.target.value, isValidMessage)}
            maxLength={MESSAGE_MAX_LENGTH}
            rows={5}
            placeholder={t.contactForm.messagePlaceholder}
            className={`${inputClass(errors.message)} resize-none`}
            disabled={isSubmitting}
          />
          {errors.message && <p className="text-xs text-red-500 mt-1.5"><AnimatedText text={errors.message} /></p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent text-paper px-6 py-3.5 text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <AnimatedText text={t.contactForm.submitSending} />
              <Loader2 size={15} className="animate-spin" />
            </>
          ) : (
            <>
              <AnimatedText text={t.contactForm.submitReady} />
              <Send size={15} />
            </>
          )}
        </button>

        {sent && (
          <p className="text-sm text-green-600 dark:text-green-400 text-center font-medium">
            <AnimatedText text={t.contactForm.successMsg} />
          </p>
        )}
        {sendError && (
          <p className="text-sm text-red-500 text-center font-medium">
            <AnimatedText text={t.contactForm.errorMsg} />
          </p>
        )}
      </form>

      {/* Separador y Redes Sociales */}
      <div className="mt-8 pt-6 border-t border-ink/10 dark:border-white/10 flex flex-col items-center gap-5">
        <p className="text-sm font-medium text-ink/60 dark:text-white/60">
          <AnimatedText text={t.contactForm.socialText} />
        </p>
        
        {/* El bloque <ul> de iconos sociales se mantiene exactamente igual, no necesita traducción */}
        <ul className="flex items-center justify-center">
          {/* GitHub */}
          {/* ... tu código de GitHub ... */}
          <li className="relative group mx-2">
            <a
              href="https://github.com/Jonatan-Rodriguez"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="relative overflow-hidden flex justify-center items-center w-11 h-11 rounded-xl text-ink/70 dark:text-white/70 bg-transparent border border-ink/20 dark:border-white/20 transition-all duration-300 hover:shadow-lg hover:text-white dark:hover:text-white hover:border-transparent dark:hover:border-transparent"
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
            <div className="absolute -top-[30px] left-1/2 -translate-x-1/2 bg-[#24262a] text-white px-3 py-1.5 rounded-md opacity-0 invisible text-xs font-medium transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:-top-[42px] pointer-events-none whitespace-nowrap z-20">
              GitHub
            </div>
          </li>

          {/* LinkedIn */}
          {/* ... tu código de LinkedIn ... */}
          <li className="relative group mx-2">
            <a
              href="https://www.linkedin.com/in/jonatan-rodriguez-9b1425260"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="relative overflow-hidden flex justify-center items-center w-11 h-11 rounded-xl text-ink/70 dark:text-white/70 bg-transparent border border-ink/20 dark:border-white/20 transition-all duration-300 hover:shadow-lg hover:text-white dark:hover:text-white hover:border-transparent dark:hover:border-transparent"
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
            <div className="absolute -top-[30px] left-1/2 -translate-x-1/2 bg-[#0274b3] text-white px-3 py-1.5 rounded-md opacity-0 invisible text-xs font-medium transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:-top-[42px] pointer-events-none whitespace-nowrap z-20">
              LinkedIn
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}