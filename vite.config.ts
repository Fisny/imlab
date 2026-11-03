import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({server:{allowedHosts:["terminal.local"]},plugins:[tailwindcss()],resolve:{alias:{'@':new URL('.',import.meta.url).pathname}},build:{outDir:'dist'}});
