# 🚀 Kit de Lancement & Déploiement en Production
## ToonDraw 🎨 ارسم وحرّك مع أيهم و ليث

Bienvenue dans le guide de lancement officiel de **ToonDraw** ! Ce kit fournit tous les éléments clés pour déployer, partager, configurer et diffuser l'application auprès des familles, enfants, écoles et communautés.

---

## 🌐 1. Déploiement Officiel

### Option A : Déploiement Principal Vercel (Recommandé - URL Courte)
L'application est déployée en continu et accessible à l'adresse officielle :
👉 **[https://toondraw.vercel.app](https://toondraw.vercel.app)**

### Option B : Déploiement Miroir GitHub Pages
Chaque commit sur la branche `main` est également compilé automatiquement via le workflow [.github/workflows/pages.yml](.github/workflows/pages.yml) et disponible sur :
👉 **[https://mormox2.github.io/ToonDraw/](https://mormox2.github.io/ToonDraw/)**

### Option C : Déploiement sur un Domaine Personnalisé
Vous pouvez lier votre propre nom de domaine (ex: `toondraw.art` ou `kids-draw.org`) directement dans les paramètres de **Vercel** ou **GitHub Pages**.

---

## 📲 2. Guide d'Installation PWA (Tablette & Smartphone)

L'application est une **Progressive Web App (PWA)** complète. Elle peut être installée comme une véritable application native :

### Sur iPad / iPhone (Safari) :
1. Ouvrez le lien dans **Safari**.
2. Appuyez sur le bouton de **Partage** (icône carré avec flèche vers le haut 📤).
3. Faites défiler et touchez **« Sur l'écran d'accueil »** (Add to Home Screen ➕).
4. L'icône de l'application apparaît sur l'écran d'accueil et s'ouvre en **plein écran immersif sans barre d'adresse**.

### Sur Tablette / Smartphone Android (Google Chrome) :
1. Ouvrez le lien dans **Google Chrome**.
2. Appuyez sur le menu **(⋮)** en haut à droite.
3. Touchez **« Installer l'application »** ou **« Ajouter à l'écran d'accueil »**.
4. L'application est installée et accessible même **hors-ligne (mode avion)** grâce au Service Worker !

---

## 📢 3. Modèles de Messages de Lancement (Prêts à l'envoi)

### 🇸🇦 Version Arabe (WhatsApp, Telegram, Réseaux Sociaux)

```text
🎨✨ مفاجأة سحرية للأطفال! 🦸‍♂️🚀
يسرّنا إطلاق استوديو الرسم التفاعلي الجديد:
«ToonDraw - ارسم وحرّك مع أيهم و ليث»! 👑⚡

🌟 ماذا يقدّم ToonDraw لأطفالكم؟
🖌️ فرش رسم وألوان سحرية وبخاخ وبوتقة تلوين ذكية
✨ ملصقات كرتونية حية ترمش وتتحرك
🎭 وضع «أعطِ الحياة» لتحريك الرسومات في الفضاء
🦸‍♂️ أبطال خارقين وديناصورات للتلوين والإبداع
🤝 وضع الرسم الثنائي المشترك (أيهم وليث)
🗣️ تشجيع صوتي مبهج ومؤثرات صوتية كرتونية مرحة
🔒 100% مجاني، آمن للأطفال، بدون إعلانات وبدون جمع بيانات، ويعمل حتى بدون إنترنت!

👉 جرّبوه الآن مباشرة عبر المتصفح:
https://toondraw.vercel.app

💡 نصيحة: يمكنكم تثبيته كـ تطبيق على الآيباد أو التابلت عبر خيار "إضافة إلى الشاشة الرئيسية"!
```

---

### 🇫🇷 Version Française (WhatsApp, Newsletter, Réseaux Sociaux)

```text
🎨✨ Grande nouvelle pour les enfants et les familles ! 🦸‍♂️🚀
Découvrez le nouveau studio de dessin interactif :
« ToonDraw (ارسم وحرّك مع أيهم و ليث) » ! 👑⚡

🌟 Au programme pour les artistes en herbe :
🖌️ Pinceaux magiques, spray multicolore et remplissage intelligent
✨ Stickers animés rigolos et tampons féeriques
🎭 Mode "Don de Vie" qui met les dessins en apesanteur et les fait bouger
🦸 Cahier de coloriage avec super-héros et dinosaures
🤝 Mode Duo écran partagé pour dessiner à deux
🗣️ Synthèse vocale chaleureuse et sons cartoons amusants
🔒 100% gratuit, sécurisé, sans publicité, sans collecte de données et jouable hors-ligne (PWA) !

👉 À tester dès maintenant sur tablette, smartphone ou ordi :
https://toondraw.vercel.app

💡 Astuce : Sur iPad ou Android, cliquez sur "Ajouter à l'écran d'accueil" pour l'utiliser comme une vraie appli en plein écran !
```

---

## 🏷️ 4. Versioning & Publication de la Release Git

Pour figer la version officielle `v1.0.0` :

```bash
# 1. Vérifier que tout est propre
pnpm run check
pnpm test
pnpm run build
pnpm run bundle:check

# 2. Créer le tag de version
git add .
git commit -m "chore: release v1.0.0 production ready"
git tag -a v1.0.0 -m "Release v1.0.0 - Lancement officiel"

# 3. Pousser vers GitHub
git push origin main --tags
```

---

## 🛡️ 5. Qualité, Sécurité & Confidentialité
- **Aucune dépendance externe critique** pour le runtime principal.
- **Zéro cookie tiers** et **aucune donnée personnelle collectée** (conforme aux normes de protection de l'enfance COPPA / RGPD).
- **Audio local** généré mathématiquement par Web Audio API sans flux audio externes.
