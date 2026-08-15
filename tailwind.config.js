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
        pixel: ['"Jersey 10"', 'monospace'],
        body: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        grid: 'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '28px 28px',
      },
      keyframes: {
        steam: {
          '0%': { opacity: '0', transform: 'translateY(0) scaleX(1)' },
          '30%': { opacity: '0.6' },
          '65%': { opacity: '0.35', transform: 'translateY(-16px) scaleX(1.15)' },
          '100%': { opacity: '0', transform: 'translateY(-30px) scaleX(0.9)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(4deg)' },
        },
      },
      animation: {
        steam: 'steam 2.8s ease-in-out infinite',
        wiggle: 'wiggle 3.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}