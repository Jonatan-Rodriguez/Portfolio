import { useSound } from '../../hooks/useSound'
import { useLanguage, type Lang } from '../../context/LanguageContext'

const LANGS: Lang[] = ['es', 'en']

export function LangToggle() {
  const { lang, setLang } = useLanguage()
  const playClick = useSound('/sounds/lang-toggle-click.wav', 0.3)

  const handleSelect = (l: Lang) => {
    if (l !== lang) playClick()
    setLang(l)
  }

  return (
    <div className="flex items-center rounded-full border border-ink/15 dark:border-paper/20 p-1 text-xs font-display font-semibold">
      {LANGS.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => handleSelect(l)}
          className={`px-2.5 py-1 rounded-full transition-colors ${
            lang === l ? 'bg-ink text-paper dark:bg-paper dark:text-ink' : 'text-ink/40 dark:text-paper/40'
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  )
}