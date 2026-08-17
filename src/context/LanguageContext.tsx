import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { es } from '../i18n/translations/es'
import { en } from '../i18n/translations/en'
import type { Translations } from '../i18n/types'

export type Lang = 'es' | 'en'

const dictionaries: Record<Lang, Translations> = { es, en }

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

function getInitialLang(): Lang {
  const stored = localStorage.getItem('lang')
  if (stored === 'es' || stored === 'en') return stored
  return navigator.language.toLowerCase().startsWith('en') ? 'en' : 'es'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang)

  useEffect(() => {
    localStorage.setItem('lang', lang)
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage debe usarse dentro de LanguageProvider')
  return ctx
}