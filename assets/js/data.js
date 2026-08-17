
/* Static sticker, stamp, hero, color and message definitions. */
            /************************************************************
             * 2. Data Definitions: Sticker templates
             ************************************************************/
            const stickersData = [
                {
                    id: "eye_cute",
                    category: "eyes",
                    name: "عيون لامعة",
                    svg: `<svg viewBox="0 0 100 50" width="100" height="50">
          <ellipse cx="25" cy="25" rx="20" ry="22" fill="white" stroke="#2D3748" stroke-width="4"/>
          <ellipse cx="75" cy="25" rx="20" ry="22" fill="white" stroke="#2D3748" stroke-width="4"/>
          <circle class="blink-eye" cx="28" cy="25" r="9" fill="#111111"/>
          <circle class="blink-eye" cx="72" cy="25" r="9" fill="#111111"/>
          <circle cx="25" cy="21" r="3.5" fill="white"/>
          <circle cx="69" cy="21" r="3.5" fill="white"/>
          <circle cx="31" cy="29" r="1.5" fill="white"/>
          <circle cx="75" cy="29" r="1.5" fill="white"/>
        </svg>`,
                },
                {
                    id: "eye_love",
                    category: "eyes",
                    name: "قلوب الحب",
                    svg: `<svg viewBox="0 0 120 60" width="120" height="60">
          <path d="M 12,25 C 12,12 28,12 30,22 C 32,12 48,12 48,25 C 48,37 30,48 30,48 C 30,48 12,37 12,25 Z" fill="#FF2E93" stroke="#2D3748" stroke-width="4"/>
          <path d="M 72,25 C 72,12 88,12 90,22 C 92,12 108,12 108,25 C 108,37 90,48 90,48 C 90,48 72,37 72,25 Z" fill="#FF2E93" stroke="#2D3748" stroke-width="4"/>
        </svg>`,
                },
                {
                    id: "eye_wink",
                    category: "eyes",
                    name: "غمزة مرحة",
                    svg: `<svg viewBox="0 0 100 50" width="100" height="50">
          <path d="M 10,25 Q 25,10 40,25" fill="none" stroke="#2D3748" stroke-width="6" stroke-linecap="round"/>
          <ellipse cx="75" cy="25" rx="18" ry="20" fill="white" stroke="#2D3748" stroke-width="4"/>
          <circle cx="75" cy="25" r="8" fill="#111111"/>
          <circle cx="72" cy="21" r="3" fill="white"/>
        </svg>`,
                },
                {
                    id: "glasses_round",
                    category: "eyes",
                    name: "نظارات دائرية",
                    svg: `<svg viewBox="0 0 140 60" width="140" height="60">
          <circle cx="35" cy="30" r="24" fill="rgba(135, 206, 250, 0.4)" stroke="#2D3748" stroke-width="5"/>
          <circle cx="105" cy="30" r="24" fill="rgba(135, 206, 250, 0.4)" stroke="#2D3748" stroke-width="5"/>
          <path d="M 59,30 L 81,30" stroke="#2D3748" stroke-width="5" stroke-linecap="round"/>
          <path d="M 11,30 L 1,30" stroke="#2D3748" stroke-width="4"/>
          <path d="M 129,30 L 139,30" stroke="#2D3748" stroke-width="4"/>
        </svg>`,
                },
                {
                    id: "glasses_cool",
                    category: "eyes",
                    name: "نظارة شمسية",
                    svg: `<svg viewBox="0 0 140 50" width="140" height="50">
          <path d="M 10,12 L 60,12 L 52,45 L 20,45 Z" fill="#2D3748" stroke="#2D3748" stroke-width="3" rx="5"/>
          <path d="M 80,12 L 130,12 L 120,45 L 88,45 Z" fill="#2D3748" stroke="#2D3748" stroke-width="3" rx="5"/>
          <path d="M 60,20 L 80,20" stroke="#2D3748" stroke-width="5"/>
          <path d="M 18,18 L 28,34" stroke="white" stroke-width="3.5" stroke-linecap="round" opacity="0.6"/>
          <path d="M 88,18 L 98,34" stroke="white" stroke-width="3.5" stroke-linecap="round" opacity="0.6"/>
        </svg>`,
                },
                {
                    id: "crown",
                    category: "hats",
                    name: "تاج الملك",
                    svg: `<svg viewBox="0 0 100 70" width="100" height="70">
          <path d="M 10,60 L 90,60 L 95,20 L 70,40 L 50,10 L 30,40 L 5,20 Z" fill="#FFD700" stroke="#2D3748" stroke-width="4" stroke-linejoin="round"/>
          <circle cx="5" cy="20" r="5" fill="#FF4D6D"/>
          <circle cx="50" cy="10" r="5" fill="#00BFFF"/>
          <circle cx="95" cy="20" r="5" fill="#FF4D6D"/>
          <circle cx="30" cy="40" r="4" fill="#4CAF50"/>
          <circle cx="70" cy="40" r="4" fill="#9C27B0"/>
          <rect x="20" y="52" width="60" height="5" fill="#FF69B4" rx="2"/>
        </svg>`,
                },
                {
                    id: "hat_wizard",
                    category: "hats",
                    name: "قبعة الساحر",
                    svg: `<svg viewBox="0 0 100 100" width="100" height="100">
          <path d="M 50,5 L 15,75 L 85,75 Z" fill="#5E35B1" stroke="#2D3748" stroke-width="4"/>
          <ellipse cx="50" cy="75" rx="45" ry="12" fill="#7E57C2" stroke="#2D3748" stroke-width="4"/>
          <path d="M 45,30 L 47,35 L 52,35 L 48,38 L 50,43 L 45,40 L 40,43 L 42,38 L 38,35 L 43,35 Z" fill="#FFD700"/>
          <path d="M 55,50 L 57,53 L 62,53 L 58,56 L 60,60 L 55,58 L 50,60 L 52,56 L 48,53 L 53,53 Z" fill="#FFD700"/>
        </svg>`,
                },
                {
                    id: "hat_party",
                    category: "hats",
                    name: "قبعة حفلات",
                    svg: `<svg viewBox="0 0 100 100" width="100" height="100">
          <path d="M 50,15 L 15,85 L 85,85 Z" fill="#FF6F61" stroke="#2D3748" stroke-width="3"/>
          <path d="M 40,30 L 60,30 L 68,45 L 32,45 Z" fill="#FFD700"/>
          <path d="M 25,60 L 75,60 L 80,72 L 20,72 Z" fill="#4CAF50"/>
          <circle cx="50" cy="15" r="8" fill="#FFEC3D" stroke="#2D3748" stroke-width="2"/>
        </svg>`,
                },
                {
                    id: "hat_cowboy",
                    category: "hats",
                    name: "قبعة رعاة بقر",
                    svg: `<svg viewBox="0 0 120 70" width="120" height="70">
          <path d="M 25,45 C 25,20 95,20 95,45 Z" fill="#8B5A2B" stroke="#2D3748" stroke-width="4"/>
          <path d="M 10,50 Q 60,35 110,50 Q 120,62 110,58 Q 60,46 10,58 Q 0,62 10,50 Z" fill="#CD853F" stroke="#2D3748" stroke-width="4"/>
          <rect x="33" y="40" width="54" height="6" fill="#D32F2F" stroke="#2D3748" stroke-width="1.5"/>
        </svg>`,
                },
                {
                    id: "mouth_smile",
                    category: "faces",
                    name: "ابتسامة عريضة",
                    svg: `<svg viewBox="0 0 100 50" width="100" height="50">
          <path d="M 10,10 Q 50,55 90,10 C 90,10 70,45 50,45 C 30,45 10,10 10,10 Z" fill="#E63946" stroke="#2D3748" stroke-width="4" stroke-linejoin="round"/>
          <path d="M 30,32 Q 50,45 70,32 Q 50,22 30,32" fill="#FFB703"/>
        </svg>`,
                },
                {
                    id: "mouth_silly",
                    category: "faces",
                    name: "لسان مضحك",
                    svg: `<svg viewBox="0 0 100 50" width="100" height="50">
          <path d="M 10,15 Q 50,15 90,15" stroke="#2D3748" stroke-width="6" stroke-linecap="round" fill="none"/>
          <path d="M 35,15 Q 50,45 65,15" fill="#FF4D6D" stroke="#2D3748" stroke-width="3"/>
          <path d="M 30,15 Q 35,30 40,15 M 60,15 Q 65,30 70,15" stroke="#2D3748" stroke-width="2"/>
        </svg>`,
                },
                {
                    id: "mustache",
                    category: "faces",
                    name: "شارب مضحك",
                    svg: `<svg viewBox="0 0 100 35" width="100" height="35">
          <path d="M 50,18 C 40,5 20,5 5,18 C 18,28 38,20 50,25 C 62,20 82,28 95,18 C 80,5 60,5 50,18 Z" fill="#3E2723" stroke="#2D3748" stroke-width="3.5"/>
        </svg>`,
                },
                {
                    id: "wings_cute",
                    category: "faces",
                    name: "أجنحة الملاك",
                    svg: `<svg viewBox="0 0 160 80" width="160" height="80">
          <path d="M 75,40 C 60,10 30,10 10,30 C 0,40 10,50 25,50 C 40,50 60,60 75,40 Z" fill="#E0F7FA" stroke="#00ACC1" stroke-width="3"/>
          <path d="M 75,40 C 65,22 45,20 30,35 C 20,45 35,45 45,45 C 55,45 65,50 75,40 Z" fill="#B2EBF2" stroke="#00ACC1" stroke-width="2"/>
          <path d="M 85,40 C 100,10 130,10 150,30 C 160,40 150,50 135,50 C 120,50 100,60 85,40 Z" fill="#E0F7FA" stroke="#00ACC1" stroke-width="3"/>
          <path d="M 85,40 C 95,22 115,20 130,35 C 140,45 125,45 115,45 C 105,45 95,50 85,40 Z" fill="#B2EBF2" stroke="#00ACC1" stroke-width="2"/>
        </svg>`,
                },
                {
                    id: "star_funny",
                    category: "faces",
                    name: "نجمة ضاحكة",
                    svg: `<svg viewBox="0 0 80 80" width="80" height="80">
          <path d="M 40,5 L 50,30 L 77,30 L 55,46 L 63,72 L 40,56 L 17,72 L 25,46 L 3,30 L 30,30 Z" fill="#FFEB3B" stroke="#2D3748" stroke-width="4" stroke-linejoin="round"/>
          <circle cx="30" cy="38" r="4" fill="black"/>
          <circle cx="50" cy="38" r="4" fill="black"/>
          <path d="M 36,44 Q 40,48 44,44" stroke="black" stroke-width="2" fill="none"/>
        </svg>`,
                },
                {
                    id: "bow_cute",
                    category: "faces",
                    name: "ربطة شعر وردية",
                    svg: `<svg viewBox="0 0 100 60" width="100" height="60">
          <path d="M 50,30 C 25,10 10,15 15,30 C 10,45 25,50 50,30 Z" fill="#FF69B4" stroke="#2D3748" stroke-width="4"/>
          <path d="M 50,30 C 75,10 90,15 85,30 C 90,45 75,50 50,30 Z" fill="#FF69B4" stroke="#2D3748" stroke-width="4"/>
          <path d="M 40,35 L 25,58 L 40,52 L 48,38 Z" fill="#FF4081" stroke="#2D3748" stroke-width="3"/>
          <path d="M 60,35 L 75,58 L 60,52 L 52,38 Z" fill="#FF4081" stroke="#2D3748" stroke-width="3"/>
          <circle cx="50" cy="30" r="10" fill="#E91E63" stroke="#2D3748" stroke-width="4"/>
        </svg>`,
                },
            ];

            /************************************************************
             * Superhero Templates (cartoon coloring outlines)
             * Each template is a simple cartoon SVG that kids can color
             ************************************************************/
            /************************************************************
             * Stamp Templates (decorative shapes)
             ************************************************************/
            const stampTemplates = [
                {
                    id: "star",
                    name: "نجمة",
                    emoji: "⭐",
                    svg: `<svg viewBox="0 0 80 80" width="80" height="80">
          <path d="M 40,5 L 50,30 L 77,30 L 55,46 L 63,72 L 40,56 L 17,72 L 25,46 L 3,30 L 30,30 Z" fill="#FFD700" stroke="#2D3748" stroke-width="4" stroke-linejoin="round"/>
        </svg>`,
                },
                {
                    id: "heart",
                    name: "قلب",
                    emoji: "❤️",
                    svg: `<svg viewBox="0 0 80 80" width="80" height="80">
          <path d="M 40,72 C 40,72 8,48 8,24 C 8,10 20,4 28,4 C 36,4 40,12 40,18 C 40,12 44,4 52,4 C 60,4 72,10 72,24 C 72,48 40,72 40,72 Z" fill="#FF4D6D" stroke="#2D3748" stroke-width="4" stroke-linejoin="round"/>
        </svg>`,
                },
                {
                    id: "moon",
                    name: "قمر",
                    emoji: "🌙",
                    svg: `<svg viewBox="0 0 80 80" width="80" height="80">
          <path d="M 45,8 C 65,20 70,45 55,65 C 40,85 15,78 10,72 C 28,78 48,68 55,50 C 60,35 55,18 45,8 Z" fill="#FFE4B5" stroke="#2D3748" stroke-width="4" stroke-linejoin="round"/>
        </svg>`,
                },
                {
                    id: "flower",
                    name: "زهرة",
                    emoji: "🌸",
                    svg: `<svg viewBox="0 0 80 80" width="80" height="80">
          <circle cx="40" cy="40" r="10" fill="#FFE4E1" stroke="#2D3748" stroke-width="3"/>
          <ellipse cx="40" cy="18" rx="10" ry="16" fill="#FFB3C6" stroke="#2D3748" stroke-width="3" transform="rotate(0 40 40)"/>
          <ellipse cx="40" cy="18" rx="10" ry="16" fill="#FFB3C6" stroke="#2D3748" stroke-width="3" transform="rotate(72 40 40)"/>
          <ellipse cx="40" cy="18" rx="10" ry="16" fill="#FFB3C6" stroke="#2D3748" stroke-width="3" transform="rotate(144 40 40)"/>
          <ellipse cx="40" cy="18" rx="10" ry="16" fill="#FFB3C6" stroke="#2D3748" stroke-width="3" transform="rotate(216 40 40)"/>
          <ellipse cx="40" cy="18" rx="10" ry="16" fill="#FFB3C6" stroke="#2D3748" stroke-width="3" transform="rotate(288 40 40)"/>
        </svg>`,
                },
                {
                    id: "rainbow",
                    name: "قوس قزح",
                    emoji: "🌈",
                    svg: `<svg viewBox="0 0 100 60" width="100" height="60">
          <path d="M 10,50 A 40,40 0 0,1 90,50" fill="none" stroke="#FF4D6D" stroke-width="5" stroke-linecap="round"/>
          <path d="M 16,50 A 34,34 0 0,1 84,50" fill="none" stroke="#FF8C00" stroke-width="5" stroke-linecap="round"/>
          <path d="M 22,50 A 28,28 0 0,1 78,50" fill="none" stroke="#FFD700" stroke-width="5" stroke-linecap="round"/>
          <path d="M 28,50 A 22,22 0 0,1 72,50" fill="none" stroke="#4CAF50" stroke-width="5" stroke-linecap="round"/>
          <path d="M 34,50 A 16,16 0 0,1 66,50" fill="none" stroke="#00BFFF" stroke-width="5" stroke-linecap="round"/>
          <path d="M 40,50 A 10,10 0 0,1 60,50" fill="none" stroke="#9C27B0" stroke-width="5" stroke-linecap="round"/>
          <path d="M 10,50 Q 50,60 90,50" fill="#FFF5E1" stroke="#2D3748" stroke-width="3"/>
        </svg>`,
                },
                {
                    id: "cloud",
                    name: "غيوم",
                    emoji: "☁️",
                    svg: `<svg viewBox="0 0 100 60" width="100" height="60">
          <path d="M 20,40 A 20,20 0 0,1 30,10 A 25,25 0 0,1 70,15 A 20,20 0 0,1 80,40 A 15,15 0 0,1 95,55 A 5,5 0 0,1 90,60 L 10,60 A 10,10 0 0,1 10,40 Z" fill="#E0F7FA" stroke="#2D3748" stroke-width="3"/>
        </svg>`,
                },
            ];

            const colors = [
                { name: "أحمر", val: "#FF4D6D", textClass: "text-[#FF4D6D]", bgClass: "bg-[#FF4D6D]" },
                { name: "برتقالي", val: "#FF8C00", textClass: "text-[#FF8C00]", bgClass: "bg-[#FF8C00]" },
                { name: "أصفر", val: "#FFD700", textClass: "text-[#FFD700]", bgClass: "bg-[#FFD700]" },
                { name: "أخضر", val: "#4CAF50", textClass: "text-[#4CAF50]", bgClass: "bg-[#4CAF50]" },
                { name: "سماوي", val: "#00BFFF", textClass: "text-[#00BFFF]", bgClass: "bg-[#00BFFF]" },
                { name: "أزرق", val: "#1E90FF", textClass: "text-[#1E90FF]", bgClass: "bg-[#1E90FF]" },
                { name: "بنفسجي", val: "#9C27B0", textClass: "text-[#9C27B0]", bgClass: "bg-[#9C27B0]" },
                { name: "وردي", val: "#FF69B4", textClass: "text-[#FF69B4]", bgClass: "bg-[#FF69B4]" },
                { name: "بني", val: "#8B4513", textClass: "text-[#8B4513]", bgClass: "bg-[#8B4513]" },
                { name: "أسود", val: "#2C3E50", textClass: "text-[#2C3E50]", bgClass: "bg-[#2C3E50]" },
                {
                    name: "قوس قزح",
                    val: "rainbow",
                    textClass: "text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-green-500 to-blue-500",
                    bgClass: "bg-gradient-to-tr from-red-400 via-yellow-400 via-green-400 via-blue-400 to-purple-400",
                },
            ];

            // Arabic encouragement quotes (personalized for Aym and Laith)
            const positiveQuotes = [
                "يا لها من ألوان مذهلة! 🎨🌟",
                "أنت فنان مبدع وذكي جداً! 💖🤖",
                "واو! رسمتك تجعلني سعيداً للغاية! 🥰✨",
                "تصميم رائع جداً! هل نجعله يرقص الآن؟ 🕺",
                "عمل ممتاز يا بطل! استمر بالرسم! 💪🚀",
                "أجمل رسمة شاهدتها اليوم! 🥳🌸",
                "هذه اللوحة تستحق أن نضعها في متحف! 🖼️🎪",
                "تصميم ساحر وألوان متناسقة جداً! 🔮🌈",
                // Personalized messages for Aym and Laith
                "أحسنت يا أيهم! 👦🌟 رسمة رائعة!",
                "رائع يا ليث! 👦✨ أنت فنان صغير!",
                "أيهم و ليث، أنتما بطلا الرسم اليوم! 🏆🎨",
                "هيا أيهم و ليث، لنجعل الرسمة ترقص! 💃🕺",
                "أبدعتما يا أيهم و ليث! ✨🌈 استمرا!",
                "أيهم و ليث، ما هذه الألوان الجميلة! 🎨💖",
                "يا للجمال! أيهم و ليث فنانان صغيران مذهلان! 👨‍🎨👨‍🎨",
                "أيهم و ليث، هل تريدان إضافة ملصق مضحك؟ 🤪👑",
            ];

            // Encouragements while "Alive Mode" is active (personalized for Aym & Laith)
            const aliveMessages = [
                "مرحباً يا فنان! أنا أطفو بلطف! 🎈",
                "انظر إلي وأنا أتحرك! يا للهول! 🚀",
                "هل يمكننا الرقص معاً؟ 💃",
                "رسمتك جميلة للغاية، شكراً لك! 🥰",
                "أشعر بالدفء والحياة الآن! ✨",
                "أنت عبقري الرسم! واو! 🧠",
                "هيا نلعب ونقفز سوياً! 🦘",
                // Personalized messages for Aym and Laith
                "مرحباً أيهم و ليث! أنا أحب رسمتكما! 💖🎨",
                "واو! أيهم و ليث جعلانني أتحرك! 🤩✨",
                "شكراً لكما يا أيهم و ليث على إعطائي الحياة! 🥰🌟",
                "أيهم و ليث، هل نرقص معاً؟ 💃🕺",
                "رسمتكما سحرية يا أيهم و ليث! ✨🪄",
            ];

export { stickersData, stampTemplates, colors, positiveQuotes, aliveMessages };
