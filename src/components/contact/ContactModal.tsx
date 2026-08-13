import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import { X } from 'lucide-react'
import { ContactForm } from './ContactForm'

interface ContactModalProps {
  open: boolean
  onClose: () => void
}

export function ContactModal({ open, onClose }: ContactModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

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
            className="relative w-full max-w-md rounded-3xl bg-[#f7ede2] dark:bg-[#111111] text-ink dark:text-white p-6 sm:p-8 border border-ink/5 dark:border-white/20 shadow-2xl shadow-ink/10 dark:shadow-accent/10"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar"
              className="absolute top-5 right-5 grid place-items-center w-8 h-8 rounded-full text-ink/50 hover:text-ink hover:bg-ink/10 dark:text-white/50 dark:hover:text-white dark:hover:bg-white/10 transition-colors z-10"
            >
              <X size={18} />
            </button>

            <ContactForm
              title="¿Hablamos?"
              subtitle="Contame en qué estás pensando y te respondo a la brevedad."
              onSuccess={onClose}
              variant="modal"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}