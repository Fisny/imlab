import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  base: '/imlab/',
  plugins: [tailwindcss()],
  resolve: { alias: { '@': fileURLToPath(new URL('.', import.meta.url)) } },
  build: { outDir: 'dist' }
});
