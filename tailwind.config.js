/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#fffcf3',
        ink: '#000000',
        accent: '#ff4d00',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        pixel: ['"Silkscreen"', 'monospace'],
        body: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        grid: 'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '28px 28px',
      },
    },
  },
  plugins: [],
}
