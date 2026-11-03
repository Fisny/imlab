import React from 'react';
import {createRoot} from 'react-dom/client';
import {MinimalistHero} from '@/components/ui/minimalist-hero';
import './style.css';
const root=document.querySelector('#hero-root');
if(root){createRoot(root).render(<React.StrictMode><MinimalistHero logoText="I’M LAB" navLinks={[{label:'La formazione',href:'#percorsi'},{label:'Il metodo',href:'#metodo'},{label:'Domande frequenti',href:'#domande'}]} mainText="La bellezza comincia dalle basi. Costruisci le tue, con un percorso di formazione unghie che cresce insieme a te." readMoreLink="#percorsi" imageSrc="/assets/irene-nail-hero.jpg" imageAlt="Ricostruzione unghie e french nail art I’M LAB" overlayText={{part1:'Il tuo talento.',part2:'professione.'}} socialLinks={[]} locationText="Formazione in presenza, a Genova."/></React.StrictMode>);}
