import { useState } from 'react'

type Lang = 'ES' | 'EN' | 'JA'

const LANGS: Lang[] = ['ES', 'EN', 'JA']

export function LangToggle() {
  const [lang, setLang] = useState<Lang>('ES')

  return (
    <div className="flex items-center rounded-full border border-ink/15 dark:border-paper/20 p-1 text-xs font-display font-semibold">
      {LANGS.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          className={`px-2.5 py-1 rounded-full transition-colors ${
            lang === l ? 'bg-ink text-paper dark:bg-paper dark:text-ink' : 'text-ink/40 dark:text-paper/40'
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  )
}