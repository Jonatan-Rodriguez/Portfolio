import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Añade el plugin de Tailwind CSS v4
  ],
  resolve: {
    alias: {
      '@': '/src', // Ajusta el alias para las rutas
    },
  },
});