import { useState } from 'react'
import { Mail } from 'lucide-react'

const EMAIL = 'jonatarodriguez1998@gmail.com'

export function EmailCopy() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  return (
    <button type="button" onClick={handleCopy} className="group relative inline-flex items-center gap-2">
      <span
        className={`absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-ink dark:bg-paper text-paper dark:text-ink text-xs font-medium px-2.5 py-1 transition-opacity duration-200 pointer-events-none ${
          copied ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}
      >
        {copied ? '¡Copiado!' : 'Click to copy'}
      </span>
      <Mail size={16} className="text-ink/60 dark:text-paper/60" />
      <span className="font-semibold text-sm sm:text-base">{EMAIL}</span>
    </button>
  )
}