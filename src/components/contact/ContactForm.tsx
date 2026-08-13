import { useState, type FormEvent } from 'react'
import { Send, Loader2 } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { isValidName, isValidEmail, isValidMessage, MESSAGE_MAX_LENGTH } from '../../utils/validators'

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
    ? "w-full"
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
    if (!isValidName(name)) nextErrors.name = 'Ingresá un nombre válido (solo letras, 2 a 60 caracteres).'
    if (!isValidEmail(email)) nextErrors.email = 'Ingresá un email válido.'
    if (!isValidMessage(message)) nextErrors.message = `El mensaje debe tener entre 10 y ${MESSAGE_MAX_LENGTH} caracteres.`

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
          <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wide text-ink/50 dark:text-white/50">Nombre</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => handleChange('name', e.target.value, isValidName)}
            placeholder="¿Cómo te llamás?"
            className={inputClass(errors.name)}
            disabled={isSubmitting}
          />
          {errors.name && <p className="text-xs text-red-500 mt-1.5">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-ink/50 dark:text-white/50">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => handleChange('email', e.target.value, isValidEmail)}
            placeholder="tu@email.com"
            className={inputClass(errors.email)}
            disabled={isSubmitting}
          />
          {errors.email && <p className="text-xs text-red-500 mt-1.5">{errors.email}</p>}
        </div>

        <div>
          <div className="flex items-baseline justify-between">
            <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wide text-ink/50 dark:text-white/50">Mensaje</label>
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
            placeholder="¿En qué estás pensando?"
            className={`${inputClass(errors.message)} resize-none`}
            disabled={isSubmitting}
          />
          {errors.message && <p className="text-xs text-red-500 mt-1.5">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent text-paper px-6 py-3.5 text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              Enviando...
              <Loader2 size={15} className="animate-spin" />
            </>
          ) : (
            <>
              Enviar mensaje
              <Send size={15} />
            </>
          )}
        </button>

        {sent && <p className="text-sm text-green-600 dark:text-green-400 text-center font-medium">¡Mensaje enviado con éxito! Te responderé pronto.</p>}
        {sendError && <p className="text-sm text-red-500 text-center font-medium">Hubo un problema al enviar. Por favor, intentá de nuevo.</p>}
      </form>
    </div>
  )
}