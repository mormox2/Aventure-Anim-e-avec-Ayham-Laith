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

            const superheroes = [
                {
                    id: "caped_boy",
                    name: "البطل ذو العباءة",
                    emoji: "🦸‍♂️",
                    category: "hero",
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 250" width="200" height="250">
          <!-- Cape -->
          <path d="M 60,80 Q 30,140 40,220 L 70,210 L 80,150 Q 70,110 80,90 Z" fill="#FFE4E1" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <path d="M 140,80 Q 170,140 160,220 L 130,210 L 120,150 Q 130,110 120,90 Z" fill="#FFE4E1" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Head -->
          <circle cx="100" cy="55" r="35" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="3"/>
          <!-- Mask -->
          <path d="M 70,52 Q 100,40 130,52 L 128,65 Q 100,72 72,65 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <circle cx="85" cy="58" r="4" fill="#1a1a1a"/>
          <circle cx="115" cy="58" r="4" fill="#1a1a1a"/>
          <!-- Smile -->
          <path d="M 88,75 Q 100,82 112,75" fill="none" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
          <!-- Hair -->
          <path d="M 68,40 Q 75,25 100,22 Q 125,25 132,40 Q 125,30 100,30 Q 75,30 68,40 Z" fill="#3E2723" stroke="#1a1a1a" stroke-width="2.5"/>
          <!-- Body / Suit -->
          <path d="M 70,85 L 70,180 L 130,180 L 130,85 Q 115,95 100,95 Q 85,95 70,85 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Chest Star Emblem -->
          <path d="M 100,110 L 108,128 L 127,128 L 112,140 L 118,158 L 100,148 L 82,158 L 88,140 L 73,128 L 92,128 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Arms -->
          <path d="M 70,90 L 50,150 L 60,170 L 75,115 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <path d="M 130,90 L 150,150 L 140,170 L 125,115 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Belt -->
          <rect x="65" y="170" width="70" height="14" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
          <circle cx="100" cy="177" r="5" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
          <!-- Legs -->
          <path d="M 70,184 L 65,240 L 90,240 L 95,184 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <path d="M 130,184 L 135,240 L 110,240 L 105,184 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Boots -->
          <ellipse cx="78" cy="240" rx="16" ry="6" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
          <ellipse cx="122" cy="240" rx="16" ry="6" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
        </svg>`,
                },
                {
                    id: "super_girl",
                    name: "البطلة الخارقة",
                    emoji: "🦸‍♀️",
                    category: "hero",
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 250" width="200" height="250">
          <!-- Cape behind -->
          <path d="M 55,80 Q 25,150 35,225 L 75,215 L 85,150 Q 75,110 80,90 Z" fill="#FFE4E1" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <path d="M 145,80 Q 175,150 165,225 L 125,215 L 115,150 Q 125,110 120,90 Z" fill="#FFE4E1" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Long Hair -->
          <path d="M 60,55 Q 50,120 65,160 L 80,155 Q 75,110 80,70 Z" fill="#FFE4B5" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <path d="M 140,55 Q 150,120 135,160 L 120,155 Q 125,110 120,70 Z" fill="#FFE4B5" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Tiara / Crown -->
          <path d="M 72,32 L 100,18 L 128,32 L 122,40 L 100,32 L 78,40 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <polygon points="100,18 95,28 105,28" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2"/>
          <!-- Head -->
          <circle cx="100" cy="55" r="33" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="3"/>
          <!-- Eyes with lashes -->
          <path d="M 80,50 Q 88,46 92,52" fill="none" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
          <path d="M 108,52 Q 112,46 120,50" fill="none" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
          <circle cx="86" cy="58" r="4" fill="#1a1a1a"/>
          <circle cx="114" cy="58" r="4" fill="#1a1a1a"/>
          <!-- Smile -->
          <path d="M 88,73 Q 100,80 112,73" fill="none" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
          <!-- Body -->
          <path d="M 72,88 L 70,175 L 130,175 L 128,88 Q 115,96 100,96 Q 85,96 72,88 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Heart Chest Emblem -->
          <path d="M 100,135 C 88,120 70,128 78,140 C 82,148 100,160 100,160 C 100,160 118,148 122,140 C 130,128 112,120 100,135 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Arms -->
          <path d="M 72,92 L 52,155 L 64,172 L 78,115 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <path d="M 128,92 L 148,155 L 136,172 L 122,115 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Skirt -->
          <path d="M 65,170 L 55,200 L 145,200 L 135,170 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Legs -->
          <path d="M 75,200 L 72,238 L 90,238 L 90,200 Z" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <path d="M 125,200 L 128,238 L 110,238 L 110,200 Z" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Boots -->
          <path d="M 65,235 L 95,235 L 92,245 L 68,245 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <path d="M 135,235 L 105,235 L 108,245 L 132,245 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
        </svg>`,
                },
                {
                    id: "bat_hero",
                    name: "البطل الوطواط",
                    emoji: "🦇",
                    category: "hero",
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 250" width="200" height="250">
          <!-- Bat ears -->
          <path d="M 72,30 L 78,10 L 88,35 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <path d="M 128,30 L 122,10 L 112,35 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Head with mask -->
          <circle cx="100" cy="55" r="35" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
          <!-- Lower face (chin uncovered) -->
          <path d="M 75,68 Q 100,95 125,68 Q 125,85 100,90 Q 75,85 75,68 Z" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Eye holes -->
          <ellipse cx="85" cy="55" rx="8" ry="6" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
          <ellipse cx="115" cy="55" rx="8" ry="6" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
          <circle cx="85" cy="55" r="3" fill="#1a1a1a"/>
          <circle cx="115" cy="55" r="3" fill="#1a1a1a"/>
          <!-- Determined mouth -->
          <path d="M 90,78 L 110,78" stroke="#1a1a1a" stroke-width="3" stroke-linecap="round"/>
          <!-- Cape (wings) -->
          <path d="M 70,95 L 25,140 L 35,160 L 50,150 L 55,170 L 70,160 L 75,180 L 70,100 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <path d="M 130,95 L 175,140 L 165,160 L 150,150 L 145,170 L 130,160 L 125,180 L 130,100 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Body -->
          <path d="M 72,90 L 72,180 L 128,180 L 128,90 Q 115,98 100,98 Q 85,98 72,90 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Bat chest emblem -->
          <path d="M 100,125 L 80,118 L 75,135 L 85,140 L 75,150 L 100,145 L 125,150 L 115,140 L 125,135 L 120,118 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Belt -->
          <rect x="68" y="168" width="64" height="14" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
          <circle cx="78" cy="175" r="3" fill="#1a1a1a"/>
          <circle cx="100" cy="175" r="3" fill="#1a1a1a"/>
          <circle cx="122" cy="175" r="3" fill="#1a1a1a"/>
          <!-- Legs -->
          <path d="M 75,182 L 70,238 L 92,238 L 95,182 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <path d="M 125,182 L 130,238 L 108,238 L 105,182 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Boots -->
          <ellipse cx="81" cy="240" rx="16" ry="6" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
          <ellipse cx="119" cy="240" rx="16" ry="6" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
        </svg>`,
                },
                {
                    id: "spider_hero",
                    name: "البطل العنكبوت",
                    emoji: "🕷️",
                    category: "hero",
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 250" width="200" height="250">
          <!-- Head (full mask) -->
          <ellipse cx="100" cy="55" rx="34" ry="36" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
          <!-- Big spider eyes -->
          <path d="M 70,50 Q 78,38 92,42 Q 95,55 88,62 Q 75,62 70,55 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <path d="M 130,50 Q 122,38 108,42 Q 105,55 112,62 Q 125,62 130,55 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Web pattern on face -->
          <path d="M 100,25 L 100,90 M 70,55 L 130,55 M 78,32 L 122,78 M 122,32 L 78,78" stroke="#1a1a1a" stroke-width="1.5" fill="none" opacity="0.7"/>
          <path d="M 80,40 Q 100,50 120,40 M 75,70 Q 100,82 125,70" stroke="#1a1a1a" stroke-width="1.5" fill="none" opacity="0.7"/>
          <!-- Body -->
          <path d="M 72,88 L 72,180 L 128,180 L 128,88 Q 115,95 100,95 Q 85,95 72,88 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Spider emblem on chest -->
          <ellipse cx="100" cy="130" rx="10" ry="14" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
          <line x1="90" y1="125" x2="75" y2="118" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="90" y1="130" x2="72" y2="130" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="90" y1="135" x2="75" y2="142" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="92" y1="140" x2="80" y2="150" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="110" y1="125" x2="125" y2="118" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="110" y1="130" x2="128" y2="130" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="110" y1="135" x2="125" y2="142" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="108" y1="140" x2="120" y2="150" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
          <!-- Web lines body -->
          <path d="M 75,100 L 125,100 M 75,115 L 125,115 M 75,160 L 125,160 M 75,175 L 125,175" stroke="#1a1a1a" stroke-width="1" fill="none" opacity="0.5"/>
          <!-- Arms (in web-shooting pose) -->
          <path d="M 72,92 L 45,130 L 35,160 L 50,165 L 60,135 L 78,115 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <path d="M 128,92 L 155,130 L 165,160 L 150,165 L 140,135 L 122,115 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Legs -->
          <path d="M 75,180 L 72,238 L 92,238 L 95,180 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <path d="M 125,180 L 128,238 L 108,238 L 105,180 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Boots -->
          <ellipse cx="83" cy="240" rx="14" ry="5" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
          <ellipse cx="117" cy="240" rx="14" ry="5" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
        </svg>`,
                },
                {
                    id: "iron_hero",
                    name: "البطل الحديدي",
                    emoji: "🤖",
                    category: "hero",
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 250" width="200" height="250">
          <!-- Helmet -->
          <path d="M 65,55 Q 65,20 100,18 Q 135,20 135,55 L 132,75 L 68,75 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Face plate -->
          <path d="M 70,55 L 130,55 L 128,82 Q 100,92 72,82 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Eye slits -->
          <path d="M 78,60 L 92,58 L 92,66 L 78,68 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round"/>
          <path d="M 122,60 L 108,58 L 108,66 L 122,68 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round"/>
          <!-- Mouth grill -->
          <line x1="85" y1="78" x2="115" y2="78" stroke="#1a1a1a" stroke-width="2"/>
          <line x1="90" y1="74" x2="90" y2="82" stroke="#1a1a1a" stroke-width="1.5"/>
          <line x1="100" y1="74" x2="100" y2="82" stroke="#1a1a1a" stroke-width="1.5"/>
          <line x1="110" y1="74" x2="110" y2="82" stroke="#1a1a1a" stroke-width="1.5"/>
          <!-- Body (armor) -->
          <path d="M 65,88 L 60,180 L 140,180 L 135,88 Q 115,98 100,98 Q 85,98 65,88 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Chest arc reactor (circle) -->
          <circle cx="100" cy="125" r="18" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
          <circle cx="100" cy="125" r="10" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
          <polygon points="100,118 103,122 107,122 104,126 105,130 100,127 95,130 96,126 93,122 97,122" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="1.5"/>
          <!-- Armor plates -->
          <line x1="75" y1="105" x2="125" y2="105" stroke="#1a1a1a" stroke-width="2"/>
          <line x1="70" y1="155" x2="130" y2="155" stroke="#1a1a1a" stroke-width="2"/>
          <line x1="100" y1="155" x2="100" y2="180" stroke="#1a1a1a" stroke-width="2"/>
          <!-- Arms (armored) -->
          <path d="M 65,92 L 45,145 L 38,175 L 55,180 L 65,150 L 72,115 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <path d="M 135,92 L 155,145 L 162,175 L 145,180 L 135,150 L 128,115 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Hand repulsors -->
          <circle cx="46" cy="178" r="6" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
          <circle cx="154" cy="178" r="6" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
          <!-- Legs -->
          <path d="M 70,180 L 65,238 L 92,238 L 95,180 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <path d="M 130,180 L 135,238 L 108,238 L 105,180 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <line x1="78" y1="210" x2="90" y2="210" stroke="#1a1a1a" stroke-width="2"/>
          <line x1="110" y1="210" x2="122" y2="210" stroke="#1a1a1a" stroke-width="2"/>
          <!-- Boots -->
          <path d="M 60,238 L 96,238 L 92,246 L 64,246 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <path d="M 140,238 L 104,238 L 108,246 L 136,246 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
        </svg>`,
                },
                {
                    id: "flash_hero",
                    name: "البطل البرق",
                    emoji: "⚡",
                    category: "hero",
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 250" width="200" height="250">
          <!-- Head with mask -->
          <circle cx="100" cy="55" r="35" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
          <!-- Lightning bolts on ears -->
          <path d="M 65,42 L 55,50 L 62,52 L 55,62 L 70,52 L 63,50 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round"/>
          <path d="M 135,42 L 145,50 L 138,52 L 145,62 L 130,52 L 137,50 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round"/>
          <!-- Mask (covers eyes area) -->
          <path d="M 68,40 Q 100,30 132,40 L 130,68 Q 100,76 70,68 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Eyes -->
          <ellipse cx="86" cy="55" rx="6" ry="5" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2"/>
          <ellipse cx="114" cy="55" rx="6" ry="5" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2"/>
          <circle cx="86" cy="55" r="2.5" fill="#1a1a1a"/>
          <circle cx="114" cy="55" r="2.5" fill="#1a1a1a"/>
          <!-- Confident grin -->
          <path d="M 86,78 Q 100,86 114,78" fill="none" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
          <!-- Body -->
          <path d="M 72,88 L 72,180 L 128,180 L 128,88 Q 115,95 100,95 Q 85,95 72,88 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Big lightning bolt on chest -->
          <circle cx="100" cy="130" r="20" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
          <path d="M 104,115 L 92,132 L 100,132 L 96,148 L 110,128 L 102,128 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round"/>
          <!-- Speed lines (motion) -->
          <path d="M 30,120 L 60,125" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
          <path d="M 25,140 L 55,143" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
          <path d="M 30,160 L 60,158" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
          <!-- Arms (running pose) -->
          <path d="M 72,92 L 50,140 L 60,168 L 70,155 L 78,118 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <path d="M 128,92 L 150,140 L 140,168 L 130,155 L 122,118 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Belt -->
          <rect x="68" y="170" width="64" height="12" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
          <!-- Legs -->
          <path d="M 75,182 L 70,238 L 92,238 L 95,182 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <path d="M 125,182 L 130,238 L 108,238 L 105,182 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Boots with lightning -->
          <path d="M 65,238 L 95,238 L 92,248 L 68,248 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <path d="M 135,238 L 105,238 L 108,248 L 132,248 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
        </svg>`,
                },
                {
                    id: "shield_hero",
                    name: "بطل الدرع",
                    emoji: "🛡️",
                    category: "hero",
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 250" width="200" height="250">
          <!-- Head with helmet -->
          <circle cx="100" cy="55" r="35" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
          <!-- Helmet outline -->
          <path d="M 65,55 Q 65,20 100,20 Q 135,20 135,55 L 130,55 Q 130,28 100,28 Q 70,28 70,55 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Helmet wings -->
          <path d="M 65,38 L 50,30 L 55,42 L 65,42 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round"/>
          <path d="M 135,38 L 150,30 L 145,42 L 135,42 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round"/>
          <!-- Letter A on forehead -->
          <path d="M 92,42 L 100,30 L 108,42 M 95,38 L 105,38" fill="none" stroke="#1a1a1a" stroke-width="2"/>
          <!-- Eyes -->
          <circle cx="88" cy="58" r="3.5" fill="#1a1a1a"/>
          <circle cx="112" cy="58" r="3.5" fill="#1a1a1a"/>
          <!-- Smile -->
          <path d="M 88,75 Q 100,82 112,75" fill="none" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
          <!-- Body -->
          <path d="M 72,88 L 72,180 L 128,180 L 128,88 Q 115,95 100,95 Q 85,95 72,88 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Star on chest -->
          <circle cx="100" cy="125" r="15" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
          <polygon points="100,114 103,122 112,122 105,128 108,137 100,131 92,137 95,128 88,122 97,122" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2"/>
          <!-- Horizontal stripes (suit) -->
          <line x1="73" y1="148" x2="127" y2="148" stroke="#1a1a1a" stroke-width="2.5"/>
          <line x1="73" y1="158" x2="127" y2="158" stroke="#1a1a1a" stroke-width="2.5"/>
          <line x1="73" y1="168" x2="127" y2="168" stroke="#1a1a1a" stroke-width="2.5"/>
          <!-- Right arm holding shield -->
          <path d="M 72,92 L 45,140 L 55,170 L 70,160 L 78,118 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Shield (big circular) -->
          <circle cx="40" cy="160" r="28" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
          <circle cx="40" cy="160" r="20" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
          <circle cx="40" cy="160" r="12" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
          <polygon points="40,154 42,158 47,158 43,161 45,166 40,163 35,166 37,161 33,158 38,158" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="1.5"/>
          <!-- Left arm -->
          <path d="M 128,92 L 150,150 L 140,172 L 125,160 L 122,118 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Belt -->
          <rect x="68" y="172" width="64" height="12" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
          <!-- Legs -->
          <path d="M 75,184 L 70,238 L 92,238 L 95,184 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <path d="M 125,184 L 130,238 L 108,238 L 105,184 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Boots -->
          <ellipse cx="81" cy="240" rx="16" ry="6" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
          <ellipse cx="119" cy="240" rx="16" ry="6" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
        </svg>`,
                },
                {
                    id: "wonder_hero",
                    name: "الأميرة المحاربة",
                    emoji: "👸",
                    category: "hero",
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 250" width="200" height="250">
          <!-- Long flowing hair -->
          <path d="M 58,55 Q 45,130 50,200 L 75,195 Q 75,130 78,80 Z" fill="#FFE4B5" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <path d="M 142,55 Q 155,130 150,200 L 125,195 Q 125,130 122,80 Z" fill="#FFE4B5" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Tiara with star -->
          <path d="M 70,30 L 130,30 L 125,38 L 75,38 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <polygon points="100,20 104,30 114,30 106,36 109,46 100,40 91,46 94,36 86,30 96,30" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
          <!-- Head -->
          <circle cx="100" cy="55" r="32" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="3"/>
          <!-- Eyelashes -->
          <path d="M 78,52 Q 86,46 92,52" fill="none" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
          <path d="M 108,52 Q 114,46 122,52" fill="none" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
          <circle cx="85" cy="58" r="3.5" fill="#1a1a1a"/>
          <circle cx="115" cy="58" r="3.5" fill="#1a1a1a"/>
          <!-- Lips -->
          <path d="M 92,76 Q 100,82 108,76 Q 100,80 92,76 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round"/>
          <!-- Body (warrior bustier) -->
          <path d="M 70,90 Q 70,110 75,115 L 125,115 Q 130,110 130,90 Q 115,98 100,98 Q 85,98 70,90 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Belt with star -->
          <path d="M 65,115 L 135,115 L 132,128 L 68,128 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <polygon points="100,118 103,124 108,124 104,127 105,132 100,129 95,132 96,127 92,124 97,124" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="1.5"/>
          <!-- Stomach -->
          <path d="M 78,128 L 78,150 L 122,150 L 122,128 Z" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="3"/>
          <!-- Lower skirt -->
          <path d="M 70,150 L 55,200 L 145,200 L 130,150 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <line x1="85" y1="155" x2="80" y2="200" stroke="#1a1a1a" stroke-width="1.5"/>
          <line x1="100" y1="155" x2="100" y2="200" stroke="#1a1a1a" stroke-width="1.5"/>
          <line x1="115" y1="155" x2="120" y2="200" stroke="#1a1a1a" stroke-width="1.5"/>
          <!-- Arms with bracelets -->
          <path d="M 70,95 L 48,145 L 42,170 L 58,172 L 65,150 L 76,118 Z" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <path d="M 130,95 L 152,145 L 158,170 L 142,172 L 135,150 L 124,118 Z" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Wrist bracers -->
          <rect x="40" y="165" width="20" height="10" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5" rx="2"/>
          <rect x="140" y="165" width="20" height="10" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5" rx="2"/>
          <!-- Legs -->
          <path d="M 75,200 L 72,235 L 90,235 L 92,200 Z" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <path d="M 125,200 L 128,235 L 110,235 L 108,200 Z" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Boots (knee high) -->
          <path d="M 68,235 L 92,235 L 90,248 L 70,248 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <path d="M 132,235 L 108,235 L 110,248 L 130,248 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
        </svg>`,
                },
                // ============================
                // DINOSAURS SECTION
                // ============================
                {
                    id: "dino_trex",
                    name: "تيرانوصور ريكس",
                    emoji: "🦖",
                    category: "dino",
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 220" width="260" height="220">
          <!-- Tail -->
          <path d="M 30,130 Q 10,120 5,100 Q 2,85 15,90 Q 25,95 35,110 L 55,125 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Body -->
          <ellipse cx="100" cy="130" rx="55" ry="45" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
          <!-- Belly -->
          <ellipse cx="105" cy="145" rx="35" ry="25" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="2"/>
          <!-- Head -->
          <path d="M 145,85 Q 170,65 210,70 Q 240,75 245,95 Q 248,110 235,115 Q 220,118 200,115 L 180,108 Q 165,115 150,110 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Jaw -->
          <path d="M 155,110 Q 170,125 200,120 Q 230,118 240,112 L 235,115 Q 220,130 195,128 Q 170,126 155,115 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Teeth -->
          <path d="M 165,110 L 170,118 L 175,110 M 180,108 L 185,116 L 190,108 M 195,108 L 200,117 L 205,108 M 210,110 L 215,118 L 220,110" fill="none" stroke="#1a1a1a" stroke-width="2" stroke-linejoin="round"/>
          <!-- Eye -->
          <circle cx="195" cy="85" r="10" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
          <circle cx="197" cy="84" r="5" fill="#1a1a1a"/>
          <circle cx="195" cy="82" r="2" fill="white"/>
          <!-- Eyebrow ridge -->
          <path d="M 185,75 Q 195,68 207,74" fill="none" stroke="#1a1a1a" stroke-width="3" stroke-linecap="round"/>
          <!-- Nostrils -->
          <circle cx="235" cy="85" r="2.5" fill="#1a1a1a"/>
          <!-- Small arms -->
          <path d="M 130,110 L 145,130 L 155,125 L 148,120 L 152,115 L 140,108 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Left leg -->
          <path d="M 80,165 L 72,195 L 60,210 L 95,210 L 90,195 L 95,165 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Right leg -->
          <path d="M 110,165 L 105,195 L 95,210 L 130,210 L 125,195 L 120,165 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Toes -->
          <path d="M 60,210 L 55,215 M 73,210 L 73,216 M 85,210 L 88,216" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
          <path d="M 95,210 L 92,216 M 110,210 L 110,216 M 125,210 L 128,216" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
          <!-- Back spines -->
          <path d="M 60,95 L 55,78 L 68,90 M 75,87 L 72,68 L 85,83 M 90,85 L 90,65 L 100,82 M 105,85 L 108,68 L 115,83" fill="none" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round"/>
        </svg>`,
                },
                {
                    id: "dino_bronto",
                    name: "برونتوصور",
                    emoji: "🦕",
                    category: "dino",
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 200" width="280" height="200">
          <!-- Tail -->
          <path d="M 15,100 Q 5,85 10,70 Q 15,80 25,85 L 50,95 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Body -->
          <ellipse cx="115" cy="110" rx="70" ry="42" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
          <!-- Belly -->
          <ellipse cx="115" cy="125" rx="50" ry="22" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="2"/>
          <!-- Long neck -->
          <path d="M 170,95 Q 195,65 210,45 Q 220,35 230,30 L 240,28 Q 248,30 245,40 Q 240,50 235,55 L 220,65 Q 200,80 185,100 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Head -->
          <ellipse cx="248" cy="35" rx="20" ry="16" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
          <!-- Eye -->
          <circle cx="255" cy="30" r="5" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
          <circle cx="256" cy="29" r="2.5" fill="#1a1a1a"/>
          <circle cx="255" cy="28" r="1" fill="white"/>
          <!-- Smile -->
          <path d="M 252,42 Q 260,46 265,42" fill="none" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round"/>
          <!-- Nostril -->
          <circle cx="266" cy="33" r="1.5" fill="#1a1a1a"/>
          <!-- Left front leg -->
          <path d="M 145,145 L 140,175 L 135,190 L 155,190 L 155,175 L 158,145 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Right front leg -->
          <path d="M 162,145 L 160,175 L 158,190 L 178,190 L 175,175 L 172,145 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Left back leg -->
          <path d="M 68,145 L 62,175 L 55,190 L 78,190 L 78,175 L 80,145 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Right back leg -->
          <path d="M 88,145 L 85,175 L 82,190 L 102,190 L 100,175 L 98,145 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Toes (front) -->
          <path d="M 138,190 L 140,196 M 145,190 L 145,197 M 152,190 L 154,196" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round"/>
          <path d="M 160,190 L 162,196 M 168,190 L 168,197 M 175,190 L 177,196" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round"/>
          <!-- Toes (back) -->
          <path d="M 58,190 L 60,196 M 66,190 L 66,197 M 74,190 L 76,196" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round"/>
          <path d="M 84,190 L 86,196 M 92,190 L 92,197 M 98,190 L 100,196" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round"/>
        </svg>`,
                },
                {
                    id: "dino_triceratops",
                    name: "تراي سيراتوبس",
                    emoji: "🦏",
                    category: "dino",
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 200" width="270" height="200">
          <!-- Tail -->
          <path d="M 15,115 Q 5,105 8,90 Q 12,100 22,105 L 45,112 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Body -->
          <ellipse cx="110" cy="115" rx="68" ry="40" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
          <!-- Belly -->
          <ellipse cx="110" cy="130" rx="48" ry="20" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="2"/>
          <!-- Frill (shield behind head) -->
          <path d="M 180,70 Q 200,35 230,40 Q 250,45 255,65 Q 258,85 245,98 L 220,105 Q 200,105 185,100 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Frill spikes -->
          <circle cx="210" cy="42" r="5" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
          <circle cx="230" cy="45" r="5" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
          <circle cx="248" cy="55" r="5" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
          <circle cx="253" cy="72" r="5" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
          <circle cx="250" cy="88" r="5" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
          <!-- Head -->
          <path d="M 170,80 Q 185,75 205,78 Q 215,82 218,95 Q 215,108 205,112 Q 190,115 175,110 Q 165,105 165,92 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Horns -->
          <path d="M 190,78 L 195,55 L 200,80" fill="none" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>
          <path d="M 205,80 L 215,60 L 212,82" fill="none" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>
          <!-- Nose horn -->
          <path d="M 175,95 L 168,85 L 178,92" fill="none" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>
          <!-- Beak mouth -->
          <path d="M 168,100 Q 165,105 170,108 Q 175,105 170,100 Z" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="2.5"/>
          <!-- Eye -->
          <circle cx="195" cy="92" r="6" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
          <circle cx="196" cy="91" r="3" fill="#1a1a1a"/>
          <circle cx="195" cy="90" r="1" fill="white"/>
          <!-- Legs -->
          <path d="M 65,148 L 58,175 L 50,190 L 78,190 L 75,175 L 78,148 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <path d="M 88,148 L 85,175 L 80,190 L 108,190 L 105,175 L 100,148 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <path d="M 128,148 L 125,175 L 120,190 L 148,190 L 145,175 L 140,148 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <path d="M 150,148 L 148,175 L 145,190 L 170,190 L 168,175 L 162,148 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
        </svg>`,
                },
                {
                    id: "dino_stego",
                    name: "ستيغوصور",
                    emoji: "🐊",
                    category: "dino",
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 200" width="280" height="200">
          <!-- Tail with spikes -->
          <path d="M 20,115 Q 8,105 5,90 Q 10,100 20,105 L 45,112 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <path d="M 12,95 L 5,80 L 18,92" fill="none" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>
          <path d="M 8,102 L 0,92 L 14,100" fill="none" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>
          <!-- Body -->
          <ellipse cx="120" cy="115" rx="78" ry="38" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
          <!-- Belly -->
          <ellipse cx="120" cy="132" rx="55" ry="18" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="2"/>
          <!-- Back plates (diamond shapes) -->
          <path d="M 55,80 L 50,60 L 60,50 L 65,70 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <path d="M 75,78 L 72,52 L 82,40 L 88,65 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <path d="M 100,76 L 98,45 L 110,30 L 115,60 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <path d="M 125,76 L 125,42 L 137,32 L 140,60 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <path d="M 148,78 L 150,50 L 160,42 L 162,68 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <path d="M 168,82 L 172,62 L 180,58 L 180,78 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Head -->
          <path d="M 195,100 Q 215,90 235,95 Q 245,100 245,110 Q 242,118 230,120 Q 215,118 200,115 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Eye -->
          <circle cx="225" cy="102" r="5" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
          <circle cx="226" cy="101" r="2.5" fill="#1a1a1a"/>
          <!-- Smile -->
          <path d="M 235,112 Q 240,115 244,112" fill="none" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round"/>
          <!-- Legs -->
          <path d="M 70,146 L 65,172 L 58,188 L 82,188 L 80,172 L 82,146 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <path d="M 95,146 L 92,172 L 88,188 L 112,188 L 108,172 L 105,146 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <path d="M 140,146 L 138,172 L 135,188 L 158,188 L 155,172 L 152,146 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <path d="M 162,146 L 160,172 L 158,188 L 178,188 L 176,172 L 174,146 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
        </svg>`,
                },
                {
                    id: "dino_ptero",
                    name: "بتيرانودون الطائر",
                    emoji: "🐉",
                    category: "dino",
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 180" width="300" height="180">
          <!-- Left wing -->
          <path d="M 150,80 L 80,50 L 40,35 L 15,45 L 25,55 L 10,60 L 20,68 L 5,72 L 30,75 L 60,65 L 100,72 L 140,80 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Wing membrane lines -->
          <path d="M 135,78 L 50,50 M 130,78 L 60,55 M 120,78 L 75,60" stroke="#1a1a1a" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
          <!-- Right wing -->
          <path d="M 150,80 L 220,50 L 260,35 L 285,45 L 275,55 L 290,60 L 280,68 L 295,72 L 270,75 L 240,65 L 200,72 L 160,80 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Wing membrane lines -->
          <path d="M 165,78 L 250,50 M 170,78 L 240,55 M 180,78 L 225,60" stroke="#1a1a1a" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
          <!-- Body -->
          <ellipse cx="150" cy="90" rx="30" ry="22" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
          <!-- Belly -->
          <ellipse cx="150" cy="98" rx="18" ry="10" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="2"/>
          <!-- Head crest -->
          <path d="M 150,60 Q 160,28 180,25 Q 175,35 170,48 L 160,58 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Head -->
          <path d="M 145,58 Q 150,50 162,52 Q 172,55 175,62 Q 172,70 162,72 Q 150,72 145,65 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Beak -->
          <path d="M 170,60 L 195,58 L 172,65 Z" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Eye -->
          <circle cx="158" cy="60" r="4.5" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
          <circle cx="159" cy="59" r="2.2" fill="#1a1a1a"/>
          <!-- Feet -->
          <path d="M 140,110 L 135,140 L 128,150 L 132,150 L 135,145 L 138,150 L 142,150 L 140,140 L 145,110 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round"/>
          <path d="M 155,110 L 158,140 L 152,150 L 156,150 L 158,145 L 162,150 L 166,150 L 162,140 L 160,110 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round"/>
        </svg>`,
                },
                {
                    id: "dino_ankylo",
                    name: "أنكيلوصور المدرع",
                    emoji: "🪨",
                    category: "dino",
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 180" width="280" height="180">
          <!-- Tail with club -->
          <path d="M 18,100 L 40,98 L 55,102 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <ellipse cx="12" cy="98" rx="12" ry="10" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
          <!-- Body (armored shell) -->
          <path d="M 55,70 Q 80,50 140,48 Q 200,50 220,70 Q 230,90 220,115 Q 200,135 140,138 Q 80,135 55,115 Q 45,90 55,70 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
          <!-- Armor plates pattern on shell -->
          <path d="M 85,60 L 100,55 L 115,60 L 100,68 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2" stroke-linejoin="round"/>
          <path d="M 120,55 L 140,50 L 160,55 L 140,62 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2" stroke-linejoin="round"/>
          <path d="M 165,60 L 180,55 L 195,60 L 180,68 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2" stroke-linejoin="round"/>
          <path d="M 75,80 L 90,75 L 105,80 L 90,88 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2" stroke-linejoin="round"/>
          <path d="M 110,75 L 140,70 L 170,75 L 140,82 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2" stroke-linejoin="round"/>
          <path d="M 175,80 L 190,75 L 205,80 L 190,88 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2" stroke-linejoin="round"/>
          <!-- Side spikes -->
          <path d="M 60,78 L 48,72 L 58,82" stroke="#1a1a1a" stroke-width="3" fill="none" stroke-linejoin="round"/>
          <path d="M 55,95 L 42,92 L 55,100" stroke="#1a1a1a" stroke-width="3" fill="none" stroke-linejoin="round"/>
          <path d="M 58,112 L 45,115 L 58,118" stroke="#1a1a1a" stroke-width="3" fill="none" stroke-linejoin="round"/>
          <path d="M 218,78 L 230,72 L 220,82" stroke="#1a1a1a" stroke-width="3" fill="none" stroke-linejoin="round"/>
          <path d="M 222,95 L 235,92 L 222,100" stroke="#1a1a1a" stroke-width="3" fill="none" stroke-linejoin="round"/>
          <!-- Head -->
          <path d="M 218,88 Q 238,82 250,88 Q 258,95 255,105 Q 250,112 238,115 Q 225,115 220,108 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Eye -->
          <circle cx="240" cy="95" r="5" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
          <circle cx="241" cy="94" r="2.5" fill="#1a1a1a"/>
          <!-- Smile -->
          <path d="M 248,105 Q 252,108 255,105" fill="none" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round"/>
          <!-- Legs -->
          <path d="M 82,130 L 78,155 L 72,168 L 95,168 L 92,155 L 95,130 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <path d="M 110,132 L 108,155 L 105,168 L 125,168 L 122,155 L 120,132 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <path d="M 160,132 L 158,155 L 155,168 L 175,168 L 172,155 L 170,132 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <path d="M 192,130 L 190,155 L 188,168 L 208,168 L 205,155 L 202,130 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
        </svg>`,
                },
                {
                    id: "dino_baby",
                    name: "ديناصور صغير لطيف",
                    emoji: "🥚",
                    category: "dino",
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 220" width="200" height="220">
          <!-- Egg shell pieces at feet -->
          <path d="M 55,190 Q 40,180 42,160 Q 45,175 55,180 Z" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round"/>
          <path d="M 145,190 Q 160,180 158,160 Q 155,175 145,180 Z" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round"/>
          <path d="M 70,195 Q 60,200 62,210 Q 75,208 72,198 Z" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round"/>
          <path d="M 130,195 Q 140,200 138,210 Q 125,208 128,198 Z" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round"/>
          <!-- Body (chubby) -->
          <ellipse cx="100" cy="140" rx="50" ry="52" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
          <!-- Belly -->
          <ellipse cx="100" cy="155" rx="32" ry="30" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="2"/>
          <!-- Head (big cute head) -->
          <circle cx="100" cy="65" r="42" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
          <!-- Big cute eyes -->
          <circle cx="82" cy="60" r="14" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
          <circle cx="118" cy="60" r="14" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
          <circle cx="85" cy="58" r="7" fill="#1a1a1a"/>
          <circle cx="115" cy="58" r="7" fill="#1a1a1a"/>
          <circle cx="83" cy="55" r="3" fill="white"/>
          <circle cx="113" cy="55" r="3" fill="white"/>
          <!-- Blush cheeks -->
          <ellipse cx="68" cy="72" rx="8" ry="5" fill="#FFCDD2" opacity="0.6"/>
          <ellipse cx="132" cy="72" rx="8" ry="5" fill="#FFCDD2" opacity="0.6"/>
          <!-- Big smile -->
          <path d="M 85,80 Q 100,95 115,80" fill="none" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
          <!-- Small horns/bumps on head -->
          <circle cx="80" cy="30" r="6" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
          <circle cx="100" cy="24" r="7" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
          <circle cx="120" cy="30" r="6" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
          <!-- Small arms -->
          <path d="M 55,120 L 42,130 L 45,140 L 55,135 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <path d="M 145,120 L 158,130 L 155,140 L 145,135 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Small feet -->
          <ellipse cx="78" cy="192" rx="16" ry="8" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
          <ellipse cx="122" cy="192" rx="16" ry="8" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
          <!-- Tail -->
          <path d="M 100,188 Q 115,200 130,195 Q 140,192 145,185" fill="none" stroke="#1a1a1a" stroke-width="3" stroke-linecap="round"/>
        </svg>`,
                },
                {
                    id: "dino_spino",
                    name: "سبينوصور",
                    emoji: "🌊",
                    category: "dino",
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 220" width="280" height="220">
          <!-- Tail -->
          <path d="M 20,130 Q 8,122 5,110 Q 10,118 20,120 L 48,128 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Body -->
          <ellipse cx="115" cy="130" rx="70" ry="40" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
          <!-- Belly -->
          <ellipse cx="115" cy="148" rx="48" ry="18" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="2"/>
          <!-- Sail (big back fin) -->
          <path d="M 60,92 Q 65,40 85,25 Q 100,18 115,20 Q 130,22 145,35 Q 160,50 165,92 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Sail lines -->
          <path d="M 80,88 L 85,35 M 100,88 L 100,25 M 120,88 L 118,28 M 140,88 L 142,45 M 70,88 L 72,50" stroke="#1a1a1a" stroke-width="1.5" opacity="0.5"/>
          <!-- Long snout / head -->
          <path d="M 180,105 Q 200,95 230,90 Q 250,88 262,95 Q 268,105 265,112 Q 260,118 245,120 Q 225,120 205,118 Q 185,118 180,112 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Crest on head -->
          <path d="M 215,90 Q 218,78 225,75 Q 228,82 225,90" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round"/>
          <!-- Jaw -->
          <path d="M 185,112 Q 210,125 245,122 Q 260,120 265,115 L 260,118 Q 240,128 210,126 Q 188,122 185,115 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Teeth -->
          <path d="M 195,112 L 198,118 L 201,112 M 208,110 L 211,117 L 214,110 M 222,110 L 225,117 L 228,110 M 238,112 L 241,118 L 244,112" fill="none" stroke="#1a1a1a" stroke-width="2" stroke-linejoin="round"/>
          <!-- Eye -->
          <circle cx="230" cy="98" r="6" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
          <circle cx="231" cy="97" r="3" fill="#1a1a1a"/>
          <circle cx="230" cy="96" r="1.2" fill="white"/>
          <!-- Arms -->
          <path d="M 160,115 L 170,140 L 180,145 L 175,135 L 178,128 L 168,115 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Legs -->
          <path d="M 80,162 L 75,190 L 65,205 L 95,205 L 90,190 L 92,162 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <path d="M 115,162 L 112,190 L 105,205 L 135,205 L 130,190 L 128,162 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Toes -->
          <path d="M 68,205 L 66,212 M 78,205 L 78,212 M 90,205 L 92,212" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
          <path d="M 108,205 L 106,212 M 118,205 L 118,212 M 130,205 L 132,212" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
        </svg>`,
                },
                {
                    id: "dino_raptor",
                    name: "فيلوسيرابتور",
                    emoji: "🏃",
                    category: "dino",
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 220" width="250" height="220">
          <!-- Tail (long and rigid) -->
          <path d="M 15,85 Q 5,80 3,72 Q 8,78 18,80 L 38,85 Q 25,88 15,85 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <path d="M 38,85 L 60,92 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
          <!-- Body (sleek) -->
          <ellipse cx="110" cy="100" rx="52" ry="30" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
          <!-- Belly -->
          <ellipse cx="110" cy="112" rx="35" ry="15" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="2"/>
          <!-- Neck -->
          <path d="M 152,82 Q 165,68 175,58 L 180,55 Q 175,72 168,85 L 158,92 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Head -->
          <path d="M 170,48 Q 185,38 210,42 Q 225,48 228,58 Q 225,68 210,72 Q 195,72 180,68 Q 168,62 170,52 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Jaw -->
          <path d="M 182,65 Q 200,78 220,72 Q 228,68 230,62 L 226,65 Q 218,75 200,74 Q 185,72 182,68 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Sharp teeth -->
          <path d="M 190,65 L 193,70 L 196,65 M 202,64 L 205,70 L 208,64 M 214,65 L 217,70 L 220,65" fill="none" stroke="#1a1a1a" stroke-width="2" stroke-linejoin="round"/>
          <!-- Eye -->
          <circle cx="200" cy="52" r="6" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
          <circle cx="201" cy="51" r="3" fill="#1a1a1a"/>
          <circle cx="200" cy="50" r="1.2" fill="white"/>
          <!-- Angry eyebrow -->
          <path d="M 194,45 L 208,42" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
          <!-- Arms with claws -->
          <path d="M 145,90 L 155,105 L 162,108 L 158,100 L 165,102 L 160,95 L 152,88 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Left leg (running pose, forward) -->
          <path d="M 105,125 L 115,155 L 120,175 L 110,185 L 105,175 L 100,195 L 130,195 L 125,180 L 128,165 L 118,130 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Right leg (running pose, back) -->
          <path d="M 85,125 L 72,160 L 60,185 L 55,195 L 85,195 L 82,185 L 78,170 L 88,155 L 95,130 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
          <!-- Big toe claw (signature raptor claw) -->
          <path d="M 108,185 L 102,175 L 98,180" fill="none" stroke="#1a1a1a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M 62,185 L 56,178 L 52,182" fill="none" stroke="#1a1a1a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <!-- Speed lines -->
          <path d="M 20,95 L 45,98 M 15,108 L 42,108 M 20,120 L 48,118" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
        </svg>`,
                },
            ];

            // Kid Colors palette
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

