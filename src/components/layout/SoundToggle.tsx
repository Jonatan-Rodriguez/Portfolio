import { useSoundSettings } from '../../context/SoundContext'

export function SoundToggle() {
  const { muted, toggleMuted } = useSoundSettings()

  return (
    <button
      type="button"
      onClick={toggleMuted}
      aria-label={muted ? 'Activar sonido' : 'Silenciar sonido'}
      className="grid place-items-center w-9 h-9 rounded-full hover:bg-ink/5 dark:hover:bg-paper/10 transition-colors"
    >
      {muted ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 9v6h4l5 4V5L8 9H4Z" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M16 9l5 6M21 9l-5 6" strokeLinecap="round" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 9v6h4l5 4V5L8 9H4Z" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M16.5 8.5a5 5 0 0 1 0 7" strokeLinecap="round" />
          <path d="M19 6a8.5 8.5 0 0 1 0 12" strokeLinecap="round" />
        </svg>
      )}
    </button>
  )
}