import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

interface SoundContextValue {
  muted: boolean
  toggleMuted: () => void
}

const SoundContext = createContext<SoundContextValue | undefined>(undefined)

function getInitialMuted(): boolean {
  return localStorage.getItem('sound-muted') === 'true'
}

export function SoundProvider({ children }: { children: ReactNode }) {
  const [muted, setMuted] = useState<boolean>(getInitialMuted)

  useEffect(() => {
    localStorage.setItem('sound-muted', String(muted))
  }, [muted])

  const toggleMuted = () => setMuted((m) => !m)

  return <SoundContext.Provider value={{ muted, toggleMuted }}>{children}</SoundContext.Provider>
}

export function useSoundSettings() {
  const ctx = useContext(SoundContext)
  if (!ctx) throw new Error('useSoundSettings debe usarse dentro de SoundProvider')
  return ctx
}