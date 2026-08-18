# Organisation des assets

L’application est une SPA statique construite avec Vite. Les fichiers sources sont séparés par responsabilité, puis Vite analyse leur graphe ES modules et produit le bundle optimisé. Le fichier Tailwind reste dans `public/` car le CDN le lit directement avant le chargement de l’application.

- `css/base.css` : reset, layout global et typographie.
- `css/animations.css` : arrière-plans, transitions et animations du canvas.
- `css/components.css` : contrôles personnalisés et styles de secours.
- `../public/tailwind-config.js` : configuration du CDN Tailwind servie telle quelle par Vite.
- `js/synth.js` : moteur Web Audio.
- `js/data.js` : palettes, stickers, tampons et messages légers.
- `js/data/heroes.js` : SVG des héros et dinosaures chargé dynamiquement par la galerie.
- `js/state.js` : état partagé exporté sous forme d’objet `state`.
Les modules utilisent désormais des imports nommés directs et ne dépendent plus d’une façade globale interdomaines.
- `js/lifecycle.js` : initialisation et dimensionnement.
- `js/drawing.js` : outils de dessin et historique.
- `js/stickers.js` : stickers et manipulations.
- `js/animations.js` : animations et thèmes.
- `js/audio-controls.js` : musique de fond.
- `js/utilities-gallery.js` : réinitialisation, modèles, galerie et amis.
- `js/settings.js` : paramètres et messages d’encouragement.
- `js/export-particles.js` : export PNG et particules.
- `js/voice-duo.js` : synthèse vocale et mode duo.
- `js/ui.js` : délégation des clics et entrées via `addEventListener`.

Le script `scripts/generate-entry.mjs` génère `src/main.js` avec des imports explicites, puis initialise `ui.js` et le gestionnaire d’accessibilité. Les attributs HTML inline et le pont `globalThis` ont été supprimés ; les interactions sont désormais câblées depuis les modules. Les SVG héros et dinosaures sont chargés par `import()` seulement lorsque la galerie est ouverte.

Les modales utilisent des rôles ARIA, des titres et descriptions associés, un focus initial, une boucle de navigation `Tab`, la fermeture `Escape` et la restauration du focus sur le bouton déclencheur. Les messages d’encouragement sont exposés comme région `aria-live`, les galeries dynamiques utilisent des boutons accessibles et les animations respectent `prefers-reduced-motion`.
