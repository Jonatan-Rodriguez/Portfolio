export function PaperBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-paper dark:bg-ink transition-colors duration-300">
      <div
        className="absolute inset-0 bg-grid bg-grid"
        style={{ backgroundPosition: '-1px -1px' }}
      />
      <div
        className="absolute inset-0 opacity-[0.045] dark:opacity-[0.07] mix-blend-multiply dark:mix-blend-screen"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  )
}
