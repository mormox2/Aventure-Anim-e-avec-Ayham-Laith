# Organisation des assets

"
    "L’application reste une SPA statique sans étape de build. Les fichiers ont été séparés par responsabilité tout en conservant l’ordre de chargement des scripts classiques, afin de préserver les callbacks inline déjà présents dans `index.html`.

"
    "- `css/base.css` : reset, layout global et typographie.
"
    "- `css/animations.css` : arrière-plans, transitions et animations du canvas.
"
    "- `css/components.css` : contrôles personnalisés et styles de secours.
"
    "- `js/tailwind-config.js` : configuration du CDN Tailwind.
"
    "- `js/synth.js` : moteur Web Audio.
"
    "- `js/data.js` : données SVG, palettes et messages.
"
    "- `js/state.js` : état partagé de l’application.
"
    "- `js/lifecycle.js` : initialisation et dimensionnement.
"
    "- `js/drawing.js` : outils de dessin et historique.
"
    "- `js/stickers.js` : stickers et manipulations.
"
    "- `js/animations.js` : animations et thèmes.
"
    "- `js/audio-controls.js` : musique de fond.
"
    "- `js/utilities-gallery.js` : réinitialisation, modèles, galerie et amis.
"
    "- `js/settings.js` : paramètres et messages d’encouragement.
"
    "- `js/export-particles.js` : export PNG et particules.
"
    "- `js/voice-duo.js` : synthèse vocale et mode duo.
