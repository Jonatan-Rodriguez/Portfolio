import { useScrollProgress } from '../../hooks/useScrollProgress'

export function ScrollProgress() {
  const { progress } = useScrollProgress()

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[60] bg-transparent">
      <div
        className="h-full bg-accent transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
