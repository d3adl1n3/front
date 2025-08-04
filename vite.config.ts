import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    // screenGraphPlugin() — подключи, если он установлен и нужен
  ],
  publicDir: './static',
  base: '/',
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
}));
