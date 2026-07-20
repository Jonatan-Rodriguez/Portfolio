import { useEffect, useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, Send } from 'lucide-react'

interface ContactModalProps {
  open: boolean
  onClose: () => void
}

export function ContactModal({ open, onClose }: ContactModalProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Contacto desde el portfolio — ${name}`)
    const body = encodeURIComponent(`${message}\n\nResponder a: ${email}`)
    window.location.href = `mailto:jonatarodriguez1998@gmail.com?subject=${subject}&body=${body}`
    onClose()
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/50 dark:bg-ink/70 backdrop-blur-sm p-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="relative w-full max-w-md rounded-3xl bg-paper dark:bg-ink p-8 shadow-2xl"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar"
              className="absolute top-5 right-5 grid place-items-center w-8 h-8 rounded-full hover:bg-ink/5 dark:hover:bg-paper/10 transition-colors"
            >
              <X size={18} />
            </button>

            <h3 className="font-display font-bold text-2xl sm:text-3xl text-center">¿Hablamos?</h3>
            <p className="text-sm text-ink/60 dark:text-paper/60 text-center mt-2">
              Contame en qué estás pensando y te respondo a la brevedad.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 flex flex-col gap-3">
              <div className="flex gap-3">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tu nombre"
                  className="flex-1 min-w-0 rounded-xl border border-ink/15 dark:border-paper/20 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu email"
                  className="flex-1 min-w-0 rounded-xl border border-ink/15 dark:border-paper/20 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="¿En qué estás pensando?"
                rows={4}
                className="rounded-xl border border-ink/15 dark:border-paper/20 bg-transparent px-4 py-3 text-sm resize-none focus:outline-none focus:border-accent transition-colors"
              />

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-ink text-paper dark:bg-paper dark:text-ink px-6 py-3 text-sm font-semibold hover:bg-accent dark:hover:bg-accent dark:hover:text-paper transition-colors duration-300"
              >
                Enviar mensaje
                <Send size={15} />
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}