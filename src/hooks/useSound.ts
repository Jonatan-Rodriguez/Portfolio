import { useCallback, useEffect, useRef } from 'react'

export function useSound(src: string, volume = 0.2) {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = new Audio(src)
    audio.preload = 'auto'
    audio.volume = volume
    audio.load()
    audioRef.current = audio
  }, [src, volume])

  return useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.currentTime = 0
    audio.play().catch(() => {})
  }, [])
}