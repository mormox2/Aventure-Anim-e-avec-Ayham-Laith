/**
 * ToonDraw Internationalization (i18n) Module
 * Supports: Arabic (ar), French (fr), English (en)
 */

import { synth } from "./synth.js";
import { state } from "./state.js";

const translations = {
  ar: {
    // Header & Global
    "app.title": "ارسم وحرّك!",
    "app.subtitle": "استوديو الرسوم المتحركة للأطفال",
    "hero.ayham": "أيهم",
    "hero.laith": "ليث",
    "hero.ayham.title": "اضغط لتحية أيهم! ⚡",
    "hero.laith.title": "اضغط لتحية ليث! 🦁",
    "app.draw_badge": "رسم",
    "btn.music": "موسيقى",
    "btn.theme.day": "النهار",
    "btn.theme.night": "الليل",
    "btn.fullscreen": "شاشة",
    "btn.kids_lock": "قفل الأطفال",
    "btn.kids_lock_title": "وضع قفل الأطفال وملاء الشاشة 🔒",
    "btn.heroes": "رسومات",
    "btn.friends": "أصدقاء",
    "btn.gallery": "معرض",
    "btn.duo": "ثنائي",
    "btn.qr": "QR كود",
    "btn.help": "كيف",
    "btn.lang": "العربية",

    // Kids Lock
    "kids_lock.activated_toast": "🔒 تم تفعيل وضع قفل الأطفال وملاء الشاشة!",
    "kids_lock.hold_to_unlock": "اضغط 3ث للإلغاء 🔒",
    "kids_lock.unlocked_toast": "🔓 تم إلغاء القفل بنجاح!",
    "kids_lock.challenge_title": "🔒 سؤال التحقق للوالدين",
    "kids_lock.challenge_desc": "اختر الإجابة الصحيحة لإلغاء القفل والخروج:",
    "kids_lock.challenge_btn_math": "🧮 سؤال الأذكياء",
    "kids_lock.wrong_answer": "إجابة غير صحيحة، حاول مجدداً! 🤔",

    // Left Toolbar - Drawing Tools
    "tools.title": "أدوات الرسم 🖌️",
    "tools.choose_color": "اختر لونك السحري:",
    "tools.custom_color": "🎨 لون مخصص:",
    "tools.custom_color_hint": "اضغط لاختيار أي لون تريده!",
    "tools.brush_size": "حجم الفرشاة:",
    "tools.eraser": "الممحاة",
    "tools.spray": "بخاخ",
    "tools.paint_bucket": "دهان سحري",
    "tools.magic_mirror": "مرآة سحرية",
    "tools.brush_mode.calligraphy": "خط عربي",
    "tools.brush_mode.star": "نجوم",
    "tools.brush_mode.shape": "أشكال",
    "tools.choose_shape": "اختر الشكل:",
    "shape.circle": "دائرة",
    "shape.rect": "مستطيل",
    "shape.line": "خط مستقيم",
    "shape.heart": "قلب",
    "tools.stamps": "طوابع سحرية",
    "tools.opacity": "شفافية",
    "tools.bg_color": "🎨 خلفية اللوحة:",

    // Backgrounds
    "bg.white": "أبيض",
    "bg.sky": "سماء زرقاء",
    "bg.grass": "عشب أخضر",
    "bg.sunset": "غروب شمس",
    "bg.night": "ليلي",

    // Animations Bar
    "anim.dance": "ارقص",
    "anim.jump": "اقفز",
    "anim.spin": "دُر",
    "anim.shake": "اهتز",
    "anim.grow": "كبّر",
    "anim.shrink": "صغّر",
    "anim.bounce": "ارتد",
    "anim.give_life": "أعطِ الحياة",
    "speed.slow": "بطيء",
    "speed.normal": "عادي",
    "speed.fast": "سريع",

    // Right Sidebar - Stickers
    "stickers.title": "✨ ملصقات",
    "stickers.tab.all": "الكل",
    "stickers.tab.eyes": "عيون",
    "stickers.tab.hats": "قبعات",
    "stickers.tab.other": "أخرى",
    "stickers.tab.faces": "وجوه",

    // Bottom Actions
    "action.undo": "تراجع",
    "action.redo": "إعادة",
    "action.clear": "مسح الكل",
    "action.save": "حفظ",
    "action.share": "مشاركة",
    "action.download": "تحميل",
    "action.reset": "ابدأ من جديد",

    // Split mode
    "split.ayham": "👑 قسم أيهم",
    "split.laith": "⚡ قسم ليث",

    // Animals & Feedback
    "animal.bunny": "أهلاً أيهم و ليث! 🐰✨",
    "animal.cat": "مياو! رسمة أيهم و ليث مذهلة! 🐱💖",
    "sidebar.tip": "👦 أيهم و ليث 👦 جرّبوا أبطال خارقون! 🎨",

    // Clear / Reset Modal
    "modal.clear.title": "مسح اللوحة بالكامل؟",
    "modal.clear.description": "هل أنت متأكد من مسح كل ما رسمته والبدء من جديد؟ 🌟 سيتم حفظ نسخة تلقائياً في المعرض ويمكنك التراجع في أي وقت!",
    "modal.clear.btn_confirm": "نعم، امسح وابدأ من جديد!",
    "modal.clear.btn_cancel": "لا، احتفظ برسمتي!",
    "modal.reset.confirm": "هل تريد مسح اللوحة والملصقات وإعادة ضبط كل شيء؟ 🥳",
    "modal.reset.success": "تم تصفير لوحتك السحرية بنجاح! جاهز للإبداع؟ 🚀",
    "duo.active_toast": "👦🤝👦 وضع الرسام الثنائي نشط! أيهم على اليسار وليث على اليمين!",
    "duo.active_voice": "رائع! وضع الرسام الثنائي نشط، أيهم وليث يرسمان معاً!",
    "duo.deactivated_toast": "تم إلغاء وضع الرسام الثنائي! 🛑",
    "feedback.fullscreen": "⛶ تم تفعيل وضع ملء الشاشة!",
    "modal.qr.link_copied": "📋 تم نسخ الرابط بنجاح! شاركه مع أحبائك 🚀",
    "sticker.delete": "حذف الملصق",
    "sticker.rotate": "تدوير الملصق",
    "sticker.resize": "تكبير أو تصغير الملصق",

    // Stamps Modal
    "modal.stamps.title": "الطوابع السحرية ⭐✨",
    "modal.stamps.subtitle": "اضغط على شكل، ثم انقر على اللوحة لوضعه!",

    // Gallery Modal
    "modal.gallery.title": "🖼️ معرض رسوماتي",
    "modal.gallery.subtitle": "اضغط على رسمة لإعادة تحميلها، أو احذفها!",
    "modal.gallery.empty": "لا توجد رسومات محفوظة بعد! 🎨 ارسم شيئاً رائعاً واحفظه!",

    // Friends Modal
    "modal.friends.title": "👥 أصدقاء أيهم وليث 👥",
    "modal.friends.subtitle": "أضف أسماء أصدقائك لظهورهم بجانبكما! 🎉",
    "modal.friends.placeholder": "اكتب اسم الصديق...",
    "modal.friends.btn_add": "أضف",
    "modal.friends.empty": "لا يوجد أصدقاء بعد 🤔\nأضف صديقاً جديداً!",
    "modal.friends.btn_delete_all": "🗑️ حذف الكل",
    "modal.friends.btn_sample": "🎲 إضافة أصدقاء تجريبيين",

    // Heroes Modal
    "modal.heroes.title": "اختر رسمة ولوّنها! 🎨✨",
    "modal.heroes.subtitle": "اختر بطلاً، ديناصوراً أو كائناً سحرياً وابدأ بتلوينه بألوانك المفضلة! 🌈",
    "modal.heroes.tab.all": "الكل",
    "modal.heroes.tab.hero": "أبطال",
    "modal.heroes.tab.dino": "ديناصورات",
    "modal.heroes.tab.fantasy": "سحر وخيال",
    "modal.heroes.tip": "💡 نصيحة: بعد اختيار الرسمة، استخدم الألوان لتلوينها وأضف الملصقات لتجعلها مضحكة! 🎨",

    // Help Modal
    "modal.help.title": "كيف ألعب وأرسم؟ 🎨✨",
    "modal.help.step1": "ارسم بيدك أو بالفأرة داخل اللوحة. استخدم الألوان السحرية والفرشاة كما تحب!",
    "modal.help.step2": "اضغط على 'رسومات' لاختيار بطل جاهز للتلوين، ثم لوّنه وأضف لمستك الخاصة!",
    "modal.help.step3": "أضف ملصقات مضحكة مثل العيون والنظارات والقبعات. يمكنك جرها وتكبيرها وتدويرها بسهولة!",
    "modal.help.step4": "اضغط على أزرار التحريك لجعل رسمتك ترقص، تقفز، تدور، أو تهتز فوراً!",
    "modal.help.step5": "اضغط على 'أعطِ الحياة للرسمة' لتبدأ بالطفو، وتتحدث إليك بفقاعات الكلام المرحة!",
    "modal.help.step6": "اضغط على زر '🔒 قفل الأطفال' لقفل الخروج وملء الشاشة. على أجهزة iPad استخدم 'Accès Guidé' وعلى أجهزة Android استخدم 'Épinglage d'application' لمنع الطفل تماماً من مغادرة اللعبة!",
    "modal.help.btn_start": "هيا بنا نبدأ الرسم! 🚀",

    // QR Modal
    "modal.qr.title": "العب على التابلت أو الهاتف! 📲",
    "modal.qr.subtitle": "امسح الرمز بكاميرا جهازك للبدء بالرسم فوراً وبشكل مجاني 🎨✨",
    "modal.qr.btn_copy": "📋 نسخ رابط التطبيق للمشاركة",
    "modal.qr.btn_download": "📥 تحميل رمز QR للطباعة والمشاركة",

    // Language Modal
    "modal.lang.title": "🌐 اختر لغتك / Langue / Language",
    "modal.lang.subtitle": "اختر لغتك المفضلة للرسم واللعب والتشجيع الصوتي!",

    // Mobile Drawer
    "mobile.tab.tools": "🎨 الأدوات",
    "mobile.tab.stickers": "✨ الملصقات",
    "mobile.tab.backgrounds": "🖼️ خلفيات ومزيد",
    "mobile.palette.title": "🎨 اختر اللون:",
    "mobile.palette.custom": "مخصص:",
    "mobile.opacity.template": "شفافية النموذج:",
    "mobile.bg.title": "🌄 لون خلفية اللوحة:",
    "mobile.bg.white": "أبيض",
    "mobile.bg.sky": "سماء",
    "mobile.bg.garden": "حديقة",
    "mobile.bg.sunset": "غروب",
    "mobile.bg.night": "ليل",
    "mobile.btn.open_stamps": "فتح قائمة الطوابع والأشكال السحرية",
    "mobile.btn.show_qr": "عرض QR Code لمشاركة التطبيق",

    // Social Share Modal
    "modal.share.title": "شارك رسمتك الجميلة! 🚀✨",
    "modal.share.subtitle": "انشر إبداعك على وسائل التواصل الاجتماعي أو أرسله لعائلتك وأصدقائك! 🎉",
    "share.preview_title": "🎨 بطاقة الرسمة",
    "share.whatsapp": "واتساب",
    "share.twitter": "X / تويتر",
    "share.facebook": "فيسبوك",
    "share.telegram": "تيليجرام",
    "share.pinterest": "بينتيريست",
    "share.native": "مشاركة عبر التطبيقات 📲",
    "share.copy_link": "نسخ الرابط",
    "share.copied": "تم نسخ الرابط بنجاح! 📋✨",
    "share.copied_short": "تم النسخ!",
    "share.download_social": "تحميل للنشر على إنستغرام وتيك توك 📸",
    "share.download_toast": "📸 تم تحميل الرسمة بجودة عالية! مثالية للستوري والواتساب!",
    "share.message_text": "انظروا إلى هذه الرسمة الرائعة التي صنعتها على ToonDraw! ارسموا وحرّكوا معنا مجاناً 🎨✨",

    // Toast and voice
    "welcome.toast": "أهلاً بك في استوديو الرسم والتحريك للأطفال! 🎨✨ هيا نرسم معاً!",
    "welcome.voice": "أهلاً بك! أنا جاهز للرسم والتحريك معك، هيا بنا!",
  },

  fr: {
    // Header & Global
    "app.title": "ToonDraw !",
    "app.subtitle": "Studio de dessin animé pour enfants",
    "hero.ayham": "Ayham",
    "hero.laith": "Laith",
    "hero.ayham.title": "Cliquez pour saluer Ayham ! ⚡",
    "hero.laith.title": "Cliquez pour saluer Laith ! 🦁",
    "app.draw_badge": "Dessin",
    "btn.music": "Musique",
    "btn.theme.day": "Jour",
    "btn.theme.night": "Nuit",
    "btn.fullscreen": "Plein écran",
    "btn.kids_lock": "Verrouillage",
    "btn.kids_lock_title": "Mode Verrouillage Enfant & Plein Écran 🔒",
    "btn.heroes": "Dessins",
    "btn.friends": "Amis",
    "btn.gallery": "Galerie",
    "btn.duo": "Duo",
    "btn.qr": "QR Code",
    "btn.help": "Aide",
    "btn.lang": "Français",

    // Kids Lock
    "kids_lock.activated_toast": "🔒 Mode Verrouillage Enfant activé !",
    "kids_lock.hold_to_unlock": "Maintenez 3s 🔒",
    "kids_lock.unlocked_toast": "🔓 Déverrouillage réussi !",
    "kids_lock.challenge_title": "🔒 Défi Parental de Sécurité",
    "kids_lock.challenge_desc": "Choisissez la bonne réponse pour déverrouiller et quitter :",
    "kids_lock.challenge_btn_math": "🧮 Défi calcul",
    "kids_lock.wrong_answer": "Mauvaise réponse, réessayez ! 🤔",

    // Left Toolbar - Drawing Tools
    "tools.title": "Outils de dessin 🖌️",
    "tools.choose_color": "Choisissez votre couleur magique :",
    "tools.custom_color": "🎨 Couleur personnalisée :",
    "tools.custom_color_hint": "Touchez pour choisir votre couleur !",
    "tools.brush_size": "Taille du pinceau :",
    "tools.eraser": "Gomme",
    "tools.spray": "Spray",
    "tools.paint_bucket": "Peinture magique",
    "tools.magic_mirror": "Miroir magique",
    "tools.brush_mode.calligraphy": "Plume",
    "tools.brush_mode.star": "Étoiles",
    "tools.brush_mode.shape": "Formes",
    "tools.choose_shape": "Choisir une forme :",
    "shape.circle": "Cercle",
    "shape.rect": "Rectangle",
    "shape.line": "Ligne",
    "shape.heart": "Cœur",
    "tools.stamps": "Tampons magiques",
    "tools.opacity": "Transparence",
    "tools.bg_color": "🎨 Couleur du fond :",

    // Backgrounds
    "bg.white": "Blanc",
    "bg.sky": "Ciel bleu",
    "bg.grass": "Herbe verte",
    "bg.sunset": "Coucher de soleil",
    "bg.night": "Nuit étoilée",

    // Animations Bar
    "anim.dance": "Danser",
    "anim.jump": "Sauter",
    "anim.spin": "Tourner",
    "anim.shake": "Secouer",
    "anim.grow": "Agrandir",
    "anim.shrink": "Rétrécir",
    "anim.bounce": "Rebondir",
    "anim.give_life": "Donner vie",
    "speed.slow": "Lent",
    "speed.normal": "Normal",
    "speed.fast": "Rapide",

    // Right Sidebar - Stickers
    "stickers.title": "✨ Stickers",
    "stickers.tab.all": "Tous",
    "stickers.tab.eyes": "Yeux",
    "stickers.tab.hats": "Chapeaux",
    "stickers.tab.other": "Autres",
    "stickers.tab.faces": "Visages",

    // Bottom Actions
    "action.undo": "Annuler",
    "action.redo": "Rétablir",
    "action.clear": "Tout effacer",
    "action.save": "Sauvegarder",
    "action.share": "Partager",
    "action.download": "Télécharger",
    "action.reset": "Recommencer",

    // Split mode
    "split.ayham": "👑 Côté Ayham",
    "split.laith": "⚡ Côté Laith",

    // Animals & Feedback
    "animal.bunny": "Salut Ayham & Laith ! 🐰✨",
    "animal.cat": "Miaou ! Superbe dessin ! 🐱💖",
    "sidebar.tip": "👦 Ayham & Laith 👦 Essayez les coloriages ! 🎨",

    // Clear / Reset Modal
    "modal.clear.title": "Effacer toute la toile ?",
    "modal.clear.description": "Êtes-vous sûr de vouloir tout effacer et recommencer à zéro ? 🌟 Une sauvegarde automatique sera conservée dans la galerie !",
    "modal.clear.btn_confirm": "Oui, nouvelle toile !",
    "modal.clear.btn_cancel": "Non, garder mon dessin !",
    "modal.reset.confirm": "Voulez-vous effacer la toile, les stickers et tout réinitialiser ? 🥳",
    "modal.reset.success": "Votre toile magique a été réinitialisée ! Prêt pour un nouveau chef-d'œuvre ? 🚀",
    "duo.active_toast": "👦🤝👦 Mode Duo activé ! Ayham à gauche et Laith à droite !",
    "duo.active_voice": "Super ! Le mode duo est activé, dessinons ensemble !",
    "duo.deactivated_toast": "Mode Duo désactivé ! 🛑",
    "feedback.fullscreen": "⛶ Mode plein écran activé !",
    "modal.qr.link_copied": "📋 Lien copié avec succès ! Partagez-le avec vos proches 🚀",
    "sticker.delete": "Supprimer le sticker",
    "sticker.rotate": "Faire pivoter le sticker",
    "sticker.resize": "Agrandir ou rétrécir le sticker",

    // Stamps Modal
    "modal.stamps.title": "Tampons Magiques ⭐✨",
    "modal.stamps.subtitle": "Cliquez sur une forme, puis touchez la toile pour la tamponner !",

    // Gallery Modal
    "modal.gallery.title": "🖼️ Galerie de mes dessins",
    "modal.gallery.subtitle": "Cliquez sur un dessin pour le charger ou le supprimer !",
    "modal.gallery.empty": "Aucun dessin sauvegardé pour l'instant ! 🎨 Créez votre premier chef-d'œuvre !",

    // Friends Modal
    "modal.friends.title": "👥 Les amis d'Ayham & Laith 👥",
    "modal.friends.subtitle": "Ajoutez les prénoms de vos amis pour afficher leurs badges ! 🎉",
    "modal.friends.placeholder": "Nom de l'ami...",
    "modal.friends.btn_add": "Ajouter",
    "modal.friends.empty": "Pas encore d'amis 🤔\nAjoutez un nouvel ami !",
    "modal.friends.btn_delete_all": "🗑️ Tout supprimer",
    "modal.friends.btn_sample": "🎲 Ajouter des exemples",

    // Heroes Modal
    "modal.heroes.title": "Choisissez un coloriage ! 🎨✨",
    "modal.heroes.subtitle": "Choisissez un héros, un dinosaure ou une créature magique et coloriez-le ! 🌈",
    "modal.heroes.tab.all": "Tous",
    "modal.heroes.tab.hero": "Héros",
    "modal.heroes.tab.dino": "Dinosaures",
    "modal.heroes.tab.fantasy": "Magie & Contes",
    "modal.heroes.tip": "💡 Astuce : après avoir choisi un dessin, utilisez les couleurs pour le colorier et ajoutez des stickers rigolos ! 🎨",

    // Help Modal
    "modal.help.title": "Comment jouer et dessiner ? 🎨✨",
    "modal.help.step1": "Dessinez avec le doigt ou la souris sur la toile. Utilisez toutes les couleurs magiques !",
    "modal.help.step2": "Cliquez sur 'Dessins' pour choisir un modèle prêt à colorier et apportez votre touche !",
    "modal.help.step3": "Ajoutez des stickers rigolos comme des yeux, lunettes et chapeaux. Déplacez-les facilement !",
    "modal.help.step4": "Appuyez sur les boutons d'animation pour faire danser, sauter ou tourner votre dessin !",
    "modal.help.step5": "Cliquez sur 'Donner vie' pour voir votre personnage flotter et vous parler avec humour !",
    "modal.help.step6": "Activez le bouton '🔒 Verrouillage' pour le plein écran sécurisé. Sur iPad, activez 'Accès Guidé' (Triple-clic) et sur Android 'Épinglage d'application' pour empêcher totalement l'enfant de sortir !",
    "modal.help.btn_start": "C'est parti, dessinons ! 🚀",

    // QR Modal
    "modal.qr.title": "Jouez sur Tablette ou Mobile ! 📲",
    "modal.qr.subtitle": "Scannez le QR code avec votre appareil pour jouer immédiatement et gratuitement ! 🎨✨",
    "modal.qr.btn_copy": "📋 Copier le lien du jeu",
    "modal.qr.btn_download": "📥 Télécharger le QR code",

    // Language Modal
    "modal.lang.title": "🌐 Choisissez votre langue",
    "modal.lang.subtitle": "Sélectionnez votre langue préférée pour le jeu et les voix !",

    // Social Share Modal
    "modal.share.title": "Partagez votre dessin ! 🚀✨",
    "modal.share.subtitle": "Publiez votre création sur vos réseaux sociaux ou envoyez-la à vos proches ! 🎉",
    "share.preview_title": "🎨 Carte du dessin",
    "share.whatsapp": "WhatsApp",
    "share.twitter": "X (Twitter)",
    "share.facebook": "Facebook",
    "share.telegram": "Telegram",
    "share.pinterest": "Pinterest",
    "share.native": "Partager via les applications 📲",
    "share.copy_link": "Copier le lien",
    "share.copied": "Lien copié dans le presse-papier ! 📋✨",
    "share.copied_short": "Copié !",
    "share.download_social": "Télécharger pour Instagram & TikTok 📸",
    "share.download_toast": "📸 Image téléchargée en haute qualité ! Parfaite pour vos stories et statuts !",
    "share.message_text": "Regardez ce magnifique dessin créé sur ToonDraw ! Venez dessiner et animer gratuitement 🎨✨",

    // Mobile Drawer
    "mobile.tab.tools": "🎨 Outils",
    "mobile.tab.stickers": "✨ Stickers",
    "mobile.tab.backgrounds": "🖼️ Fonds & Plus",
    "mobile.palette.title": "🎨 Choisir la couleur :",
    "mobile.palette.custom": "Perso :",
    "mobile.opacity.template": "Transparence modèle :",
    "mobile.bg.title": "🌄 Couleur de fond :",
    "mobile.bg.white": "Blanc",
    "mobile.bg.sky": "Ciel",
    "mobile.bg.garden": "Jardin",
    "mobile.bg.sunset": "Coucher",
    "mobile.bg.night": "Nuit",
    "mobile.btn.open_stamps": "Ouvrir les tampons et formes magiques",
    "mobile.btn.show_qr": "Afficher le QR Code de partage",

    // Toast and voice
    "welcome.toast": "Bienvenue sur ToonDraw ! 🎨✨ Amusez-vous bien !",
    "welcome.voice": "Bienvenue sur ToonDraw ! C'est parti pour le dessin !",
  },

  en: {
    // Header & Global
    "app.title": "ToonDraw!",
    "app.subtitle": "Interactive Cartoon Studio for Kids",
    "hero.ayham": "Ayham",
    "hero.laith": "Laith",
    "hero.ayham.title": "Click to cheer Ayham! ⚡",
    "hero.laith.title": "Click to cheer Laith! 🦁",
    "app.draw_badge": "Draw",
    "btn.music": "Music",
    "btn.theme.day": "Day",
    "btn.theme.night": "Night",
    "btn.fullscreen": "Fullscreen",
    "btn.kids_lock": "Kids Lock",
    "btn.kids_lock_title": "Kids Lock & Safe Fullscreen 🔒",
    "btn.heroes": "Drawings",
    "btn.friends": "Friends",
    "btn.gallery": "Gallery",
    "btn.duo": "Duo",
    "btn.qr": "QR Code",
    "btn.help": "Help",
    "btn.lang": "English",

    // Kids Lock
    "kids_lock.activated_toast": "🔒 Kids Lock Mode activated!",
    "kids_lock.hold_to_unlock": "Hold 3s to unlock 🔒",
    "kids_lock.unlocked_toast": "🔓 Kids Lock deactivated!",
    "kids_lock.challenge_title": "🔒 Parental Security Challenge",
    "kids_lock.challenge_desc": "Select the correct answer to unlock and exit:",
    "kids_lock.challenge_btn_math": "🧮 Math challenge",
    "kids_lock.wrong_answer": "Incorrect answer, try again! 🤔",

    // Left Toolbar - Drawing Tools
    "tools.title": "Drawing Tools 🖌️",
    "tools.choose_color": "Pick your magic color:",
    "tools.custom_color": "🎨 Custom color:",
    "tools.custom_color_hint": "Tap to pick any color you like!",
    "tools.brush_size": "Brush Size:",
    "tools.eraser": "Eraser",
    "tools.spray": "Spray",
    "tools.paint_bucket": "Magic Fill",
    "tools.magic_mirror": "Magic Mirror",
    "tools.brush_mode.calligraphy": "Pen",
    "tools.brush_mode.star": "Stars",
    "tools.brush_mode.shape": "Shapes",
    "tools.choose_shape": "Choose a shape:",
    "shape.circle": "Circle",
    "shape.rect": "Rectangle",
    "shape.line": "Line",
    "shape.heart": "Heart",
    "tools.stamps": "Magic Stamps",
    "tools.opacity": "Opacity",
    "tools.bg_color": "🎨 Canvas background:",

    // Backgrounds
    "bg.white": "White",
    "bg.sky": "Blue Sky",
    "bg.grass": "Green Grass",
    "bg.sunset": "Sunset",
    "bg.night": "Starry Night",

    // Animations Bar
    "anim.dance": "Dance",
    "anim.jump": "Jump",
    "anim.spin": "Spin",
    "anim.shake": "Shake",
    "anim.grow": "Grow",
    "anim.shrink": "Shrink",
    "anim.bounce": "Bounce",
    "anim.give_life": "Give Life",
    "speed.slow": "Slow",
    "speed.normal": "Normal",
    "speed.fast": "Fast",

    // Right Sidebar - Stickers
    "stickers.title": "✨ Stickers",
    "stickers.tab.all": "All",
    "stickers.tab.eyes": "Eyes",
    "stickers.tab.hats": "Hats",
    "stickers.tab.other": "Other",
    "stickers.tab.faces": "Faces",

    // Bottom Actions
    "action.undo": "Undo",
    "action.redo": "Redo",
    "action.clear": "Clear All",
    "action.save": "Save",
    "action.share": "Share",
    "action.download": "Download",
    "action.reset": "Start Over",

    // Split mode
    "split.ayham": "👑 Ayham's side",
    "split.laith": "⚡ Laith's side",

    // Animals & Feedback
    "animal.bunny": "Hello Ayham & Laith! 🐰✨",
    "animal.cat": "Meow! Awesome drawing! 🐱💖",
    "sidebar.tip": "👦 Ayham & Laith 👦 Try the coloring book! 🎨",

    // Clear / Reset Modal
    "modal.clear.title": "Clear the whole canvas?",
    "modal.clear.description": "Are you sure you want to clear your drawing and start fresh? 🌟 A copy will automatically be saved to your gallery!",
    "modal.clear.btn_confirm": "Yes, clear and restart!",
    "modal.clear.btn_cancel": "No, keep my drawing!",
    "modal.reset.confirm": "Do you want to clear the canvas, stickers and restart everything? 🥳",
    "modal.reset.success": "Your magic canvas has been reset! Ready to create? 🚀",
    "duo.active_toast": "👦🤝👦 Duo Painter Mode active! Ayham on left and Laith on right!",
    "duo.active_voice": "Awesome! Duo painter mode is active, let's draw together!",
    "duo.deactivated_toast": "Duo Painter Mode deactivated! 🛑",
    "feedback.fullscreen": "⛶ Fullscreen mode activated!",
    "modal.qr.link_copied": "📋 App link copied successfully! Share it with your loved ones 🚀",
    "sticker.delete": "Delete sticker",
    "sticker.rotate": "Rotate sticker",
    "sticker.resize": "Resize sticker",

    // Stamps Modal
    "modal.stamps.title": "Magic Stamps ⭐✨",
    "modal.stamps.subtitle": "Click any shape, then tap on the canvas to place it!",

    // Gallery Modal
    "modal.gallery.title": "🖼️ My Drawings Gallery",
    "modal.gallery.subtitle": "Click a drawing to reload it, or delete it!",
    "modal.gallery.empty": "No saved drawings yet! 🎨 Create and save your first masterpiece!",

    // Friends Modal
    "modal.friends.title": "👥 Ayham & Laith's Friends 👥",
    "modal.friends.subtitle": "Add your friends' names to display their creator badges! 🎉",
    "modal.friends.placeholder": "Friend's name...",
    "modal.friends.btn_add": "Add",
    "modal.friends.empty": "No friends added yet 🤔\nAdd a new friend!",
    "modal.friends.btn_delete_all": "🗑️ Delete All",
    "modal.friends.btn_sample": "🎲 Add Sample Friends",

    // Heroes Modal
    "modal.heroes.title": "Pick a drawing & color it! 🎨✨",
    "modal.heroes.subtitle": "Choose a superhero, dinosaur, or magical creature and color it with rainbow colors! 🌈",
    "modal.heroes.tab.all": "All",
    "modal.heroes.tab.hero": "Heroes",
    "modal.heroes.tab.dino": "Dinosaurs",
    "modal.heroes.tab.fantasy": "Magic & Tales",
    "modal.heroes.tip": "💡 Tip: After picking a template, use colors to paint it and add funny stickers! 🎨",

    // Help Modal
    "modal.help.title": "How to Play & Draw? 🎨✨",
    "modal.help.step1": "Draw with your finger or mouse inside the canvas. Use any magical rainbow colors!",
    "modal.help.step2": "Click 'Drawings' to choose a hero or dinosaur coloring template ready to paint!",
    "modal.help.step3": "Add funny stickers like eyes, sunglasses, and hats. Easily move, scale, and rotate them!",
    "modal.help.step4": "Click animation buttons to make your drawing dance, jump, spin, or shake instantly!",
    "modal.help.step5": "Click 'Give Life' to watch your character float and speak funny speech bubbles!",
    "modal.help.step6": "Tap '🔒 Kids Lock' for safe fullscreen. On iPad use 'Guided Access' (Triple-click) and on Android use 'App Pinning' to keep kids securely in the app!",
    "modal.help.btn_start": "Let's Start Drawing! 🚀",

    // QR Modal
    "modal.qr.title": "Play on Tablet or Smartphone! 📲",
    "modal.qr.subtitle": "Scan the QR code with your camera to start drawing instantly for free! 🎨✨",
    "modal.qr.btn_copy": "📋 Copy App Link",
    "modal.qr.btn_download": "📥 Download QR Code",

    // Language Modal
    "modal.lang.title": "🌐 Choose Your Language",
    "modal.lang.subtitle": "Pick your favorite language for the UI and voice cheers!",

    // Social Share Modal
    "modal.share.title": "Share Your Masterpiece! 🚀✨",
    "modal.share.subtitle": "Share your artwork on social media or send it directly to friends and family! 🎉",
    "share.preview_title": "🎨 Artwork Card",
    "share.whatsapp": "WhatsApp",
    "share.twitter": "X (Twitter)",
    "share.facebook": "Facebook",
    "share.telegram": "Telegram",
    "share.pinterest": "Pinterest",
    "share.native": "Share via Apps 📲",
    "share.copy_link": "Copy Link",
    "share.copied": "Link copied to clipboard! 📋✨",
    "share.copied_short": "Copied!",
    "share.download_social": "Download for Instagram & TikTok 📸",
    "share.download_toast": "📸 High quality image downloaded! Perfect for stories and status!",
    "share.message_text": "Check out this awesome cartoon drawing I created on ToonDraw! Come draw and animate with us for free 🎨✨",

    // Mobile Drawer
    "mobile.tab.tools": "🎨 Tools",
    "mobile.tab.stickers": "✨ Stickers",
    "mobile.tab.backgrounds": "🖼️ Backgrounds & More",
    "mobile.palette.title": "🎨 Pick Color:",
    "mobile.palette.custom": "Custom:",
    "mobile.opacity.template": "Template Opacity:",
    "mobile.bg.title": "🌄 Canvas Background:",
    "mobile.bg.white": "White",
    "mobile.bg.sky": "Sky",
    "mobile.bg.garden": "Garden",
    "mobile.bg.sunset": "Sunset",
    "mobile.bg.night": "Night",
    "mobile.btn.open_stamps": "Open Magic Stamps & Shapes",
    "mobile.btn.show_qr": "Show QR Code to Share",

    // Toast and voice
    "welcome.toast": "Welcome to ToonDraw! 🎨✨ Let's make some art!",
    "welcome.voice": "Welcome to ToonDraw! Let's draw together!",
  }
};

let currentLang = "ar";

function detectBrowserLanguage() {
  if (typeof navigator === "undefined") return "ar";

  const candidates = [];
  if (Array.isArray(navigator.languages) && navigator.languages.length > 0) {
    candidates.push(...navigator.languages);
  }
  if (navigator.language) {
    candidates.push(navigator.language);
  }
  if (navigator.userLanguage) {
    candidates.push(navigator.userLanguage);
  }

  for (const candidate of candidates) {
    if (typeof candidate !== "string") continue;
    const clean = candidate.trim().toLowerCase();
    if (clean.startsWith("ar")) return "ar";
    if (clean.startsWith("fr")) return "fr";
    if (clean.startsWith("en")) return "en";
  }

  return "en";
}

function getInitialLanguage() {
  // 1. URL search param priority (e.g. ?lang=fr or ?lang=en)
  if (typeof window !== "undefined" && window.location && window.location.search) {
    try {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get("lang");
      if (urlLang && ["ar", "fr", "en"].includes(urlLang.toLowerCase())) {
        return urlLang.toLowerCase();
      }
    } catch (e) {}
  }

  // 2. Saved user preference in localStorage
  if (typeof localStorage !== "undefined") {
    try {
      const saved = localStorage.getItem("toondraw_lang");
      if (saved && ["ar", "fr", "en"].includes(saved)) {
        return saved;
      }
    } catch (e) {}
  }

  // 3. Browser language auto-detection
  return detectBrowserLanguage();
}

function t(key, fallback = "") {
  const langDict = translations[currentLang] || translations.ar;
  return langDict[key] || translations.ar[key] || fallback || key;
}

function getCurrentLanguage() {
  return currentLang;
}

function updateDOM(lang = currentLang) {
  if (typeof document === "undefined") return;

  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === "ar" ? "rtl" : "ltr");

  // Update all elements with data-i18n
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const translation = t(key);
    if (translation) {
      el.textContent = translation;
    }
  });

  // Update all elements with data-i18n-title
  const titleElements = document.querySelectorAll("[data-i18n-title]");
  titleElements.forEach((el) => {
    const key = el.getAttribute("data-i18n-title");
    const translation = t(key);
    if (translation) {
      el.setAttribute("title", translation);
    }
  });

  // Update all elements with data-i18n-placeholder
  const placeholderElements = document.querySelectorAll("[data-i18n-placeholder]");
  placeholderElements.forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    const translation = t(key);
    if (translation) {
      el.setAttribute("placeholder", translation);
    }
  });

  // Update current lang label in the header
  const langLabel = document.getElementById("lang-current-label");
  if (langLabel) {
    if (lang === "ar") langLabel.textContent = "العربية";
    else if (lang === "fr") langLabel.textContent = "Français";
    else langLabel.textContent = "English";
  }

  // Update active highlight in lang modal
  ["ar", "fr", "en"].forEach((l) => {
    const btn = document.getElementById(`lang-choice-${l}`);
    if (btn) {
      if (l === lang) {
        btn.classList.add("ring-4", "ring-yellow-400", "scale-105", "shadow-cartoon");
        btn.classList.remove("opacity-80");
      } else {
        btn.classList.remove("ring-4", "ring-yellow-400", "scale-105", "shadow-cartoon");
        btn.classList.add("opacity-80");
      }
    }
  });
}

function setLanguage(lang) {
  if (!["ar", "fr", "en"].includes(lang)) lang = "ar";
  currentLang = lang;
  state.language = lang;

  if (typeof localStorage !== "undefined") {
    localStorage.setItem("toondraw_lang", lang);
  }

  updateDOM(lang);
  return currentLang;
}

function initializeI18n() {
  const initial = getInitialLanguage();
  setLanguage(initial);
  return initial;
}

export {
  translations,
  currentLang,
  detectBrowserLanguage,
  getInitialLanguage,
  getCurrentLanguage,
  setLanguage,
  updateDOM,
  initializeI18n,
  t
};

