# 🎨 ToonDraw ✨ (ارسم وحرّك مع أيهم و ليث)
### **ToonDraw : استوديو الرسوم المتحركة التفاعلي للأطفال - ارسم، حرّك واصنع ألحاناً سحرية مع أيهم وليث!**
### **ToonDraw : Studio de dessin cartoon interactif pour enfants - dessinez, animez et créez des mélodies magiques avec Ayham & Laith !**

---

<p align="center">
  <img src="https://img.shields.io/badge/Deployed%20with-Vercel-black?style=for-the-badge&logo=vercel" alt="Vercel" />
  <img src="https://img.shields.io/github/license/mormox2/ToonDraw?style=for-the-badge&color=ff69b4&labelColor=2d3748" alt="License" />
  <img src="https://img.shields.io/github/stars/mormox2/ToonDraw?style=for-the-badge&color=ffd700&labelColor=2d3748" alt="GitHub Stars" />
  <img src="https://img.shields.io/badge/HTML5-Canvas-orange?style=for-the-badge&logo=html5&labelColor=2d3748" alt="HTML5 Canvas" />
  <img src="https://img.shields.io/badge/Tailwind-CSS-38BDF8?style=for-the-badge&logo=tailwind-css&labelColor=2d3748" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Web_Audio-API-blueviolet?style=for-the-badge&logo=web-audio-api&labelColor=2d3748" alt="Web Audio API" />
</p>

---

## 📌 Sommaire / الفهرس

* [🚀 Démo Live & Déploiement / التجربة الحية والتشغيل](#-démo-live--déploiement--التجربة-الحية-والتشغيل)
* [📦 Kit de Lancement & Production / دليل الإطلاق والنشر](LAUNCH_KIT.md)
* [🌟 Présentation de l'Univers / نبذة عن عالم التطبيق](#-présentation-de-lunivers--نبذة-عن-عالم-التطبيق)
* [✨ Fonctionnalités Magiques / الميزات السحرية الرائعة](#-fonctionnalités-magiques--الميزات-السحرية-الرائعة)
* [🛠️ Secrets Techniques / الأسرار التقنية المتقدمة](#️-secrets-techniques--الأسرار-التقنية-المتقدمة)
* [📂 Structure du Projet / هيكلة المشروع](#-structure-du-projet--هيكلة-المشروع)
* [💖 Dédicace Spéciale / إهداء خاص وأصيل](#-dédicace-spéciale--إهداء-خاص-وأصيل)
* [📄 Licence / الترخيص القانوني](#-licence--الترخيص-القانوني)

---

## 🚀 Démo Live & Déploiement / التجربة الحية والتشغيل

Le projet est une **Single Page Application (SPA)** écrite en HTML, CSS et JavaScript, avec Vite comme serveur de développement et bundler de production.

> [!TIP]
> **Jouer tout de suite en ligne :**
> - 🌐 **Lien officiel ultra-rapide (Vercel) :** [https://toondraw.vercel.app](https://toondraw.vercel.app)
> - 📦 **Miroir (GitHub Pages) :** [https://mormox2.github.io/ToonDraw/](https://mormox2.github.io/ToonDraw/)
>
> <p align="center">
>   <a href="https://toondraw.vercel.app">
>     <img src="public/qr-code.svg" width="200" alt="ToonDraw Official QR Code" />
>   </a>
>   <br/>
>   <sub><b>📱 Scannez avec votre téléphone ou tablette pour jouer instantanément ! / امسح الرمز للعب فوراً</b></sub>
> </p>

### Développement local

```bash
pnpm install
pnpm dev
```

Pour produire une version optimisée :

```bash
pnpm run build
pnpm preview
```

---

## 🌟 Présentation de l'Univers / نبذة عن عالم التطبيق

**Aventure Animée avec Ayham & Laith** est un studio de création magique dédié à l'amusement des enfants. Conçu dans un style esthétique **Neo-Brutalist Cartoon** (couleurs vibrantes, bordures noires épaisses et ombres plates marquées), il plonge les enfants dans un univers sécurisé, interactif et haut en couleur. 

Ici, le dessin n'est plus statique : les enfants dessinent à l'aide d'outils magiques, ajoutent des autocollants qui clignent des yeux, et voient leurs créations s'animer sur un simple clic ! De plus, le jeu intègre des retours sonores joyeux et une synthèse vocale chaleureuse qui parle en arabe pour encourager les enfants à chaque étape.

**استوديو الرسوم المتحركة التفاعلي لأيهم وليث** هو مساحة إبداعية مخصصة لرسم الابتسامة على وجوه الأطفال. يتميز التطبيق بتصميم كرتوني عصري جذاب وجريء وألوان حيوية تأخذ الأطفال إلى عالم مليء بالخيال والمغامرات التفاعلية. 

هنا، الرسم ليس مجرد خطوط جامدة! بل يمكن للأطفال الرسم بأدوات سحرية فريدة، إضافة ملصقات تفاعلية تتحرك، ومشاهدة رسوماتهم تنبض بالحياة وتتحرك بمجرد نقرة زر! بالإضافة إلى ذلك، يتميز التطبيق بتأثيرات صوتية تفاعلية ونظام نطق باللغة العربية يشجع الأطفال ويفرح معهم بكل خطوة.

---

## ✨ Fonctionnalités Magiques / الميزات السحرية الرائعة

| Fonctionnalité / الميزة | Description en Français | الوصف بالعربية |
| :--- | :--- | :--- |
| **🖌️ Pinceaux Magiques** | Pinceau classique, Bombe de peinture (Spray) et Pot de remplissage intelligent. | فرشاة رسم ذكية، بخاخ ألوان ممتع، ودهان تعبئة ذكي للمساحات المغلقة. |
| **🪞 Miroir Magique** | Dessin symétrique en temps réel pour créer de jolis masques ou visages. | مرآة سحرية ترسم بشكل متماثل على النصفين لتسهيل رسم الأشكال الجميلة. |
| **🚀 Animations Instantanées** | 7 mouvements : Arpenter/Danser, Sauter, Tourner, Secouer, Grandir, Rétrécir, Rebondir. | 7 حركات سحرية: الرقص، القفز، الدوران، الاهتزاز، التكبير، التصغير، والارتداد. |
| **🪄 Don de Vie (Floating Mode)** | Met le dessin en apesanteur avec une animation de flottement réaliste et des répliques audio. | وضع "أعطِ الحياة": يجعل الرسمة تطفو كالبالون وتتحدث بفقاعات كلامية مضحكة. |
| **🎭 Stickers & Tampons** | Yeux animés 👀, chapeaux 🎩, moustaches, couronnes, étoiles et cœurs à glisser/déposer. | ملصقات تفاعلية تتحرك وطوابع سحرية (نجوم، قلوب) قابلة للسحب، الدوران، والتكبير. |
| **🤝 Mode Duo (Split-Screen)** | Divise l'ardoise en deux pour dessiner ensemble : côté Ayham 👑 et côté Laith ⚡. | وضع ثنائي مشترك: يقسم اللوحة لقسمين متساويين ليرسم أيهم وليث معاً في نفس الوقت. |
| **🦸 Cahier de Coloriage** | Modèles de Super-Héros et Dinosaures à tracer et colorier avec transparence ajustable. | دفتر تلوين ذكي: اختر بطلاً خارقاً أو ديناصوراً، اضبط الشفافية، وابدأ التلوين! |
| **👥 Liste d'Amis** | Ajoutez les prénoms des copains pour faire apparaître leurs badges interactifs. | لوحة الأصدقاء: أضف أسماء أصدقائك لتظهر شاراتهم الخاصة بجانب أيهم وليث! |
| **☀️ Cycle Jour/Nuit** | Mode Jour (arc-en-ciel, nuages animés) et Mode Nuit (lune dorée, étoiles scintillantes). | أجواء متغيرة: وضع النهار المشرق بالغيوم الطائرة، ووضع الليل الهادئ بالنجوم والقمر. |

---

## 🛠️ Secrets Techniques / الأسرار التقنية المتقدمة

Derrière cette app extrêmement fluide et réactive se cache une ingénierie soignée utilisant les API natives du navigateur :

1. **Double Canvas HTML5 (نظام اللوحة الثنائي)** :
   * Le **Canvas de Dessin** capture les tracés, gère les algorithmes de remplissage par diffusion (Flood Fill) et maintient une pile d'historique pour le système d'annulation (Undo/Redo).
   * Le **Canvas de Particules** superpose en arrière-plan un effet de traînée magique (étoiles brillantes et bulles translucides) qui suit le doigt ou la souris de l'enfant.
2. **Synthétiseur Audio Web Audio API (مؤلف الأصوات الرقمي)** :
   * Pas besoin de télécharger de lourds fichiers audio MP3 ! Le jeu intègre son propre synthétiseur mathématique qui génère à la volée des effets sonores amusants (*Boing, Pop, Tada, Clic*) à base d'ondes sinusoïdales et de filtres passe-bas pour un rendu très "cartoon".
3. **Synthèse Vocale Multilingue (النطق الصوتي بالذكاء الاصطناعي)** :
   * Utilisation de l'API `speechSynthesis` pour lire les phrases d'encouragement en arabe (`ar-SA`).
   * Modification dynamique du timbre vocal (`pitch = 1.35`) pour donner à la voix une intonation de personnage de dessin animé enfantin et amical.
4. **Design Néobrutaliste avec Tailwind CSS (التصميم العصري الأنيق)** :
   * Mise en page 100% adaptative (responsive) sur tablettes, smartphones et ordinateurs.
   * Utilisation des classes personnalisées de Tailwind pour simuler le rendu néo-brutaliste (ombres rigides `shadow-cartoon` et bordures accentuées).

---

## 📂 Structure du Projet / هيكلة المشروع

Le projet reste une **Single Page Application statique**, mais son code est maintenant organisé par responsabilité afin de faciliter la maintenance et les évolutions :

```bash
├── index.html                    # Structure de l'interface
├── src/
│   └── main.js                   # Entrée ES modules générée pour Vite
├── tailwind.config.js             # Thème Tailwind compilé localement
├── postcss.config.js              # Chaîne PostCSS/Tailwind/Autoprefixer
├── assets/
│   ├── css/
│   │   ├── tailwind.css          # Directives Tailwind compilées par Vite
│   │   ├── base.css              # Réinitialisation, layout global et typographie
│   │   ├── animations.css         # Animations et arrière-plans
│   │   └── components.css         # Contrôles personnalisés et styles partagés
│   ├── js/
│   │   ├── synth.js               # Moteur audio Web Audio API
│   │   ├── data.js                # Palettes, stickers, tampons et messages légers
│   │   │   └── data/heroes.js     # SVG héros et dinosaures chargé à la demande
│   │   ├── state.js               # État partagé de l'application
│   │   ├── ui.js                  # Écouteurs addEventListener et délégation UI
│   │   ├── lifecycle.js           # Initialisation, dimensionnement et événements canvas
│   │   ├── drawing.js             # Façade de compatibilité de l’API canvas
│   │   ├── canvas-tools.js        # Palette, dessin, spray, remplissage et miroir
│   │   ├── canvas-modals.js       # Stamps et modale des tampons
│   │   ├── canvas-backgrounds.js  # Fonds et effacement de la toile
│   │   ├── history.js             # Snapshots canvas/stickers et undo/redo
│   │   ├── canvas-controls.js     # Outils mobiles et export PNG
│   │   ├── stickers.js            # Stickers et manipulations
│   │   ├── animations.js          # Animations et thèmes
│   │   ├── audio-controls.js      # Musique de fond
│   │   ├── utilities-gallery.js   # Façade des fonctionnalités de galerie
│   │   ├── hero-gallery.js        # Galerie héros et lazy loading
│   │   ├── drawing-gallery.js     # Dessins sauvegardés
│   │   ├── friends.js             # Amis, badges et célébrations
│   │   ├── reset-app.js           # Réinitialisation complète
│   │   ├── storage.js             # Stockage local versionné
│   │   ├── pointer-scheduler.js   # Coalescence des pointermove par frame
│   │   ├── settings.js            # Paramètres et interactions UI
│   │   ├── export-particles.js    # Export PNG et particules
│   │   └── voice-duo.js            # Synthèse vocale et mode duo
│   └── README.md                  # Carte des responsabilités des assets
├── tests/                         # Tests Vitest/jsdom
├── README.md                      # Présentation complète et documentation du projet
├── LICENSE                        # Licence d'utilisation MIT
├── scripts/
│   ├── check-modules.mjs          # Contrôle syntaxique et présence des modules
│   └── check-bundle-size.mjs      # Budgets de taille des assets de production
├── .github/workflows/
│   └── ci.yml                     # Vérification continue
```

Les icônes, stickers et personnages restent intégrés sous forme de vecteurs **SVG natifs** dans les modules de données et le markup nécessaire. `scripts/generate-entry.mjs` génère `src/main.js` avec des imports ES explicites ; Vite analyse ensuite le graphe des modules et produit le bundle optimisé dans `dist/`. Le module `ui.js` câble les interactions avec `addEventListener`, sans attributs HTML inline ni pont `globalThis`.

Le script `scripts/check-bundle-size.mjs` vérifie automatiquement les budgets du JavaScript initial, du chunk héros différé et de la feuille CSS afin qu’une régression de taille échoue explicitement pendant la CI.

---
---

## 💖 Dédicace Spéciale / إهداء خاص وأصيل

> [!NOTE]
> Ce projet est un cadeau interactif dédié à deux formidables petits artistes : **Ayham** (أيهم 👑), le roi de l'aventure, et **Laith** (ليث ⚡), le chevalier de l'éclair. Que ce studio de dessin vous apporte des heures infinies de rire, de création et de magie !

> [!NOTE]
> هذا العمل إهداء نابع من القلب للبطلين الصغيرين: **أيهم** (أيهم 👑) ملك المغامرة والمرح، و **ليث** (ليث ⚡) فارس البرق السريع. نتمنى لكما قضاء أسعد الأوقات المليئة بالضحك والألوان والإبداع غير المحدود!

---

## 📄 Licence / الترخيص القانوني

Ce projet est distribué sous licence libre **MIT**. Vous pouvez librement le copier, le modifier et le partager ! Consultez le fichier [LICENSE](LICENSE) pour plus d'informations.

---
*Fait avec ❤️ pour égayer le monde des enfants par le Dr Mossaab.*
*صنع بكل حب لإسعاد أطفالنا بواسطة د. مصعب.*
