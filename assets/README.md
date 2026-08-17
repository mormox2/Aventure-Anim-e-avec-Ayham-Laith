# Organisation des assets

L’application est une SPA statique construite avec Vite. Les fichiers sources sont séparés par responsabilité, puis l’entrée générée est regroupée et optimisée lors du build. Le fichier Tailwind reste dans `public/` car le CDN le lit directement avant le chargement de l’application.

- `css/base.css` : reset, layout global et typographie.
- `css/animations.css` : arrière-plans, transitions et animations du canvas.
- `css/components.css` : contrôles personnalisés et styles de secours.
- `../public/tailwind-config.js` : configuration du CDN Tailwind servie telle quelle par Vite.
- `js/synth.js` : moteur Web Audio.
- `js/data.js` : données SVG, palettes et messages.
- `js/state.js` : état partagé de l’application.
- `js/lifecycle.js` : initialisation et dimensionnement.
- `js/drawing.js` : outils de dessin et historique.
- `js/stickers.js` : stickers et manipulations.
- `js/animations.js` : animations et thèmes.
- `js/audio-controls.js` : musique de fond.
- `js/utilities-gallery.js` : réinitialisation, modèles, galerie et amis.
- `js/settings.js` : paramètres et messages d’encouragement.
- `js/export-particles.js` : export PNG et particules.
- `js/voice-duo.js` : synthèse vocale et mode duo.

Le script `scripts/generate-entry.mjs` concatène les sources JavaScript dans `src/generated/app.js` et ajoute un pont global pour préserver les callbacks inline existants. Vite transforme ensuite cette entrée en bundle de production dans `dist/`.
