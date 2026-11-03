# I’M LAB — Sito vetrina

React + TypeScript + Vite + Tailwind CSS.

## Avvio locale

Installa Node.js 22 o successivo, quindi dalla cartella del progetto:

```bash
npm ci
npm run dev
```

## Build

```bash
npm run build
```

La cartella `dist` contiene il sito da pubblicare su un hosting statico.

## GitHub

Estrai lo ZIP e carica i file nel repository (non lo ZIP). Non caricare node_modules.
GitHub conserva il codice; per pubblicare il sito occorre configurare un hosting e la build.
Per GitHub Pages sotto /nome-repository/ occorre configurare anche il base path Vite e i percorsi delle immagini, attualmente assoluti dalla radice.

## File principali

- index.html: contenuti, SEO, sezioni e modali
- components/ui/minimalist-hero.tsx: hero React
- main.tsx: inizializzazione React
- style.css: stili e responsive
- public/legacy.js: apertura modali e collegamenti WhatsApp
- public/assets: immagini e loghi

I meta canonical, Open Graph, sitemap.xml e robots.txt puntano all’anteprima attuale: aggiornarli con il dominio definitivo.
I contatti aprono WhatsApp; non è presente un backend per inviare moduli.
