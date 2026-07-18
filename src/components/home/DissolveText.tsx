import { AnimatePresence, motion } from 'framer-motion'

interface DissolveTextProps {
  text: string
  activeKey: string
  className?: string
}

export function DissolveText({ text, activeKey, className }: DissolveTextProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.span key={activeKey} className={`inline-flex ${className ?? ''}`}>
        {text.split('').map((char, i) => (
          <motion.span
            key={`${activeKey}-${i}`}
            initial={{ opacity: 0, filter: 'blur(6px)', y: 6 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            exit={{ opacity: 0, filter: 'blur(6px)', y: -6 }}
            transition={{ duration: 0.35, delay: i * 0.018, ease: 'easeOut' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.span>
    </AnimatePresence>
  )
}
