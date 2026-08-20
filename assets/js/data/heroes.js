/* Hero, dinosaur, and fantasy creature SVG templates loaded on demand. */
export const superheroes = [
  // ============================
  // SUPERHEROES SECTION
  // ============================
  {
    id: "caped_boy",
    name: "البطل ذو العباءة",
    emoji: "🦸‍♂️",
    category: "hero",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 250" width="200" height="250">
      <!-- Cape -->
      <path d="M 50,85 C 20,130 15,190 30,230 C 50,235 68,220 75,200 L 78,105 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <path d="M 150,85 C 180,130 185,190 170,230 C 150,235 132,220 125,200 L 122,105 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <!-- Head & Ears -->
      <circle cx="62" cy="55" r="7" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="3"/>
      <circle cx="138" cy="55" r="7" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="3"/>
      <ellipse cx="100" cy="55" rx="38" ry="36" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="3.5"/>
      <!-- Hair -->
      <path d="M 62,45 C 65,22 85,14 100,14 C 118,14 138,22 140,42 C 132,32 120,30 108,34 C 95,30 82,34 72,44 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <path d="M 92,20 Q 105,10 115,22" fill="none" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Hero Mask -->
      <path d="M 65,50 C 78,42 90,44 100,50 C 110,44 122,42 135,50 C 138,62 125,68 112,65 C 100,72 88,68 65,65 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <!-- Eyes with sparkle -->
      <ellipse cx="84" cy="55" rx="6" ry="7" fill="#1a1a1a"/>
      <circle cx="82" cy="53" r="2.5" fill="#FFFFFF"/>
      <circle cx="86" cy="57" r="1.2" fill="#FFFFFF"/>
      <ellipse cx="116" cy="55" rx="6" ry="7" fill="#1a1a1a"/>
      <circle cx="114" cy="53" r="2.5" fill="#FFFFFF"/>
      <circle cx="118" cy="57" r="1.2" fill="#FFFFFF"/>
      <!-- Cheeks & Happy Smile -->
      <ellipse cx="73" cy="68" rx="5" ry="3" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="1.5"/>
      <ellipse cx="127" cy="68" rx="5" ry="3" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="1.5"/>
      <path d="M 88,72 Q 100,82 112,72" fill="none" stroke="#1a1a1a" stroke-width="3" stroke-linecap="round"/>
      <!-- Neck & Collar -->
      <path d="M 88,90 L 100,98 L 112,90" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- Body Suit -->
      <path d="M 68,90 C 65,120 66,155 68,175 L 132,175 C 134,155 135,120 132,90 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <!-- Chest Star Emblem -->
      <circle cx="100" cy="125" r="20" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
      <polygon points="100,108 105,120 118,120 108,128 112,140 100,133 88,140 92,128 82,120 95,120" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2" stroke-linejoin="round"/>
      <!-- Arms with Heroic Fists -->
      <path d="M 68,95 C 48,115 42,140 46,165 L 62,165 C 60,145 64,125 74,110 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <circle cx="54" cy="170" r="10" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="3"/>
      <path d="M 132,95 C 152,115 158,140 154,165 L 138,165 C 140,145 136,125 126,110 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <circle cx="146" cy="170" r="10" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="3"/>
      <!-- Belt with buckle -->
      <rect x="66" y="170" width="68" height="14" rx="4" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
      <circle cx="100" cy="177" r="7" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
      <!-- Legs -->
      <path d="M 72,184 L 68,230 L 95,230 L 98,184 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <path d="M 128,184 L 132,230 L 105,230 L 102,184 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <!-- Hero Boots -->
      <path d="M 62,228 C 62,218 96,218 96,228 L 98,242 C 98,246 62,246 62,242 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <path d="M 138,228 C 138,218 104,218 104,228 L 102,242 C 102,246 138,246 138,242 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    id: "super_girl",
    name: "البطلة الخارقة",
    emoji: "🦸‍♀️",
    category: "hero",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 250" width="200" height="250">
      <!-- Cape behind -->
      <path d="M 55,85 C 20,135 15,195 35,232 C 55,235 72,218 78,195 L 80,105 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <path d="M 145,85 C 180,135 185,195 165,232 C 145,235 128,218 122,195 L 120,105 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <!-- Flowing Long Ponytails -->
      <path d="M 60,50 C 40,80 35,130 45,170 C 58,165 65,135 68,90 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <path d="M 140,50 C 160,80 165,130 155,170 C 142,165 135,135 132,90 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <!-- Head -->
      <ellipse cx="100" cy="55" rx="36" ry="34" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="3.5"/>
      <!-- Tiara with Star -->
      <path d="M 66,38 C 85,28 115,28 134,38 L 128,45 C 112,38 88,38 72,45 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round"/>
      <polygon points="100,22 103,30 111,30 105,35 107,43 100,38 93,43 95,35 89,30 97,30" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2" stroke-linejoin="round"/>
      <!-- Big Cute Eyes with Lashes -->
      <path d="M 74,48 Q 84,42 92,48" fill="none" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round"/>
      <ellipse cx="84" cy="56" rx="7" ry="8" fill="#1a1a1a"/>
      <circle cx="82" cy="53" r="2.8" fill="#FFFFFF"/>
      <circle cx="86" cy="58" r="1.4" fill="#FFFFFF"/>
      <path d="M 126,48 Q 116,42 108,48" fill="none" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round"/>
      <ellipse cx="116" cy="56" rx="7" ry="8" fill="#1a1a1a"/>
      <circle cx="114" cy="53" r="2.8" fill="#FFFFFF"/>
      <circle cx="118" cy="58" r="1.4" fill="#FFFFFF"/>
      <!-- Smile & Blush -->
      <ellipse cx="72" cy="68" rx="5" ry="3" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="1.5"/>
      <ellipse cx="128" cy="68" rx="5" ry="3" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="1.5"/>
      <path d="M 88,72 Q 100,82 112,72" fill="none" stroke="#1a1a1a" stroke-width="3" stroke-linecap="round"/>
      <!-- Body Top -->
      <path d="M 70,88 C 68,115 68,145 70,165 L 130,165 C 132,145 132,115 130,88 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <!-- Heart Emblem on Chest -->
      <path d="M 100,128 C 90,112 74,118 82,132 C 88,142 100,152 100,152 C 100,152 112,142 118,132 C 126,118 110,112 100,128 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- Arms with Gauntlets -->
      <path d="M 70,92 C 52,112 48,138 52,160 L 66,160 C 64,142 66,122 76,108 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <circle cx="58" cy="165" r="9" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="2.5"/>
      <path d="M 130,92 C 148,112 152,138 148,160 L 134,160 C 136,142 134,122 124,108 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <circle cx="142" cy="165" r="9" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="2.5"/>
      <!-- Skirt -->
      <path d="M 66,162 L 52,198 C 85,205 115,205 148,198 L 134,162 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <line x1="84" y1="165" x2="78" y2="198" stroke="#1a1a1a" stroke-width="2"/>
      <line x1="100" y1="165" x2="100" y2="202" stroke="#1a1a1a" stroke-width="2"/>
      <line x1="116" y1="165" x2="122" y2="198" stroke="#1a1a1a" stroke-width="2"/>
      <!-- Legs & Boots -->
      <path d="M 74,198 L 72,230 L 92,230 L 92,198 Z" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="3"/>
      <path d="M 126,198 L 128,230 L 108,230 L 108,198 Z" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="3"/>
      <path d="M 66,226 C 66,216 98,216 98,226 L 96,242 C 96,246 66,246 66,242 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <path d="M 134,226 C 134,216 102,216 102,226 L 104,242 C 104,246 134,246 134,242 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    id: "bat_hero",
    name: "البطل الوطواط",
    emoji: "🦇",
    category: "hero",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 250" width="200" height="250">
      <!-- Bat Ears -->
      <polygon points="68,40 60,10 82,32" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <polygon points="132,40 140,10 118,32" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <!-- Head Mask -->
      <ellipse cx="100" cy="55" rx="38" ry="35" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5"/>
      <!-- Lower Face opening -->
      <path d="M 76,65 C 76,85 124,85 124,65 C 114,80 86,80 76,65 Z" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- Bat Mask Eyes -->
      <polygon points="74,50 92,44 88,58 74,56" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round"/>
      <circle cx="83" cy="52" r="3" fill="#1a1a1a"/>
      <polygon points="126,50 108,44 112,58 126,56" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round"/>
      <circle cx="117" cy="52" r="3" fill="#1a1a1a"/>
      <path d="M 88,74 Q 100,82 112,74" fill="none" stroke="#1a1a1a" stroke-width="3" stroke-linecap="round"/>
      <!-- Scalloped Wing Cape -->
      <path d="M 68,90 C 30,120 15,160 18,210 C 35,195 50,210 65,190 C 75,205 85,185 85,150 L 78,95 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <path d="M 132,90 C 170,120 185,160 182,210 C 165,195 150,210 135,190 C 125,205 115,185 115,150 L 122,95 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <!-- Body -->
      <path d="M 70,90 C 68,120 68,150 70,172 L 130,172 C 132,150 132,120 130,90 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <!-- Bat Insignia on Chest -->
      <path d="M 100,120 C 95,110 80,110 74,120 C 70,130 85,142 100,148 C 115,142 130,130 126,120 C 120,110 105,110 100,120 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- Utility Belt -->
      <rect x="66" y="168" width="68" height="15" rx="3" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
      <rect x="74" y="170" width="10" height="11" rx="2" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2"/>
      <rect x="94" y="169" width="12" height="13" rx="2" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
      <rect x="116" y="170" width="10" height="11" rx="2" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2"/>
      <!-- Arms & Gauntlets with Fins -->
      <path d="M 70,92 C 50,115 45,140 48,165 L 64,165 C 62,145 64,125 76,110 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <path d="M 44,145 L 36,140 L 45,152" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round"/>
      <circle cx="56" cy="170" r="9" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="2.5"/>
      <path d="M 130,92 C 150,115 155,140 152,165 L 136,165 C 138,145 136,125 124,110 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <path d="M 156,145 L 164,140 L 155,152" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round"/>
      <circle cx="144" cy="170" r="9" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="2.5"/>
      <!-- Legs & Boots -->
      <path d="M 72,183 L 68,230 L 94,230 L 98,183 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <path d="M 128,183 L 132,230 L 106,230 L 102,183 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <ellipse cx="80" cy="238" rx="16" ry="7" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
      <ellipse cx="120" cy="238" rx="16" ry="7" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
    </svg>`,
  },
  {
    id: "spider_hero",
    name: "البطل العنكبوت",
    emoji: "🕷️",
    category: "hero",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 250" width="200" height="250">
      <!-- Head Mask -->
      <ellipse cx="100" cy="55" rx="38" ry="36" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5"/>
      <!-- Web pattern on face -->
      <path d="M 100,19 L 100,91 M 62,55 L 138,55 M 72,30 L 128,80 M 128,30 L 72,80" stroke="#1a1a1a" stroke-width="1.8" fill="none" opacity="0.6"/>
      <path d="M 78,42 C 92,48 108,48 122,42 M 76,68 C 92,76 108,76 124,68" stroke="#1a1a1a" stroke-width="1.8" fill="none" opacity="0.6"/>
      <!-- Big Spider Eyes -->
      <path d="M 68,48 C 76,34 94,38 96,52 C 96,65 82,68 72,60 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <path d="M 132,48 C 124,34 106,38 104,52 C 104,65 118,68 128,60 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <!-- Body -->
      <path d="M 70,88 C 66,118 66,150 70,175 L 130,175 C 134,150 134,118 130,88 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <!-- Web Pattern Body -->
      <line x1="100" y1="88" x2="100" y2="175" stroke="#1a1a1a" stroke-width="1.5" opacity="0.5"/>
      <path d="M 72,110 Q 100,120 128,110 M 70,140 Q 100,150 130,140" stroke="#1a1a1a" stroke-width="1.5" fill="none" opacity="0.5"/>
      <!-- Spider Emblem -->
      <ellipse cx="100" cy="130" rx="9" ry="13" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
      <path d="M 92,124 L 75,115 M 92,130 L 72,128 M 92,136 L 74,144 M 94,140 L 78,154" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M 108,124 L 125,115 M 108,130 L 128,128 M 108,136 L 126,144 M 106,140 L 122,154" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Arms in Web-Shooting Pose -->
      <path d="M 70,92 C 45,120 32,150 42,175 L 56,170 C 50,148 58,125 76,110 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <circle cx="46" cy="180" r="9" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
      <path d="M 38,185 L 20,200 M 42,190 L 25,210" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round" opacity="0.7"/>
      <path d="M 130,92 C 155,120 168,150 158,175 L 144,170 C 150,148 142,125 124,110 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <circle cx="154" cy="180" r="9" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
      <path d="M 162,185 L 180,200 M 158,190 L 175,210" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round" opacity="0.7"/>
      <!-- Belt & Legs -->
      <line x1="70" y1="175" x2="130" y2="175" stroke="#1a1a1a" stroke-width="3"/>
      <path d="M 72,178 L 68,232 L 94,232 L 96,178 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <path d="M 128,178 L 132,232 L 106,232 L 104,178 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <ellipse cx="80" cy="238" rx="15" ry="6" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
      <ellipse cx="120" cy="238" rx="15" ry="6" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
    </svg>`,
  },
  {
    id: "iron_hero",
    name: "البطل الحديدي",
    emoji: "🤖",
    category: "hero",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 250" width="200" height="250">
      <!-- High Tech Helmet -->
      <path d="M 64,55 C 64,22 90,16 100,16 C 110,16 136,22 136,55 L 132,80 L 68,80 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <!-- Faceplate insert -->
      <path d="M 72,45 L 128,45 L 124,78 C 112,88 88,88 76,78 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <!-- Glowing Eye Slits -->
      <polygon points="78,54 94,52 94,60 78,62" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round"/>
      <polygon points="122,54 106,52 106,60 122,62" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- Mouth Grill -->
      <line x1="86" y1="74" x2="114" y2="74" stroke="#1a1a1a" stroke-width="2"/>
      <line x1="93" y1="71" x2="93" y2="77" stroke="#1a1a1a" stroke-width="1.5"/>
      <line x1="100" y1="71" x2="100" y2="77" stroke="#1a1a1a" stroke-width="1.5"/>
      <line x1="107" y1="71" x2="107" y2="77" stroke="#1a1a1a" stroke-width="1.5"/>
      <!-- Shoulder Armor -->
      <path d="M 52,90 C 52,78 68,84 72,92 L 64,110 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <path d="M 148,90 C 148,78 132,84 128,92 L 136,110 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <!-- Body Armor -->
      <path d="M 66,90 C 62,120 62,155 66,176 L 134,176 C 138,155 138,120 134,90 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <!-- Arc Reactor Core -->
      <circle cx="100" cy="126" r="19" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
      <circle cx="100" cy="126" r="11" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
      <polygon points="100,118 107,130 93,130" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2" stroke-linejoin="round"/>
      <!-- Armor Seams -->
      <line x1="72" y1="105" x2="128" y2="105" stroke="#1a1a1a" stroke-width="2"/>
      <line x1="70" y1="155" x2="130" y2="155" stroke="#1a1a1a" stroke-width="2"/>
      <!-- Armored Arms with Hand Blasters -->
      <path d="M 64,95 C 46,120 40,145 44,170 L 58,170 C 56,150 60,130 72,112 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <circle cx="50" cy="175" r="9" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
      <circle cx="50" cy="175" r="4" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2"/>
      <path d="M 136,95 C 154,120 160,145 156,170 L 142,170 C 144,150 140,130 128,112 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <circle cx="150" cy="175" r="9" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
      <circle cx="150" cy="175" r="4" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2"/>
      <!-- Armored Legs & Thruster Boots -->
      <path d="M 70,178 L 64,232 L 94,232 L 96,178 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <path d="M 130,178 L 136,232 L 106,232 L 104,178 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <rect x="74" y="200" width="16" height="10" rx="2" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2"/>
      <rect x="110" y="200" width="16" height="10" rx="2" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2"/>
      <path d="M 60,230 L 98,230 L 94,244 L 62,244 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <path d="M 140,230 L 102,230 L 106,244 L 138,244 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    id: "flash_hero",
    name: "البطل البرق",
    emoji: "⚡",
    category: "hero",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 250" width="200" height="250">
      <!-- Lightning Bolt Ear Wings -->
      <polygon points="62,40 46,30 54,48 44,56 64,50" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round"/>
      <polygon points="138,40 154,30 146,48 156,56 136,50" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- Head Mask -->
      <ellipse cx="100" cy="55" rx="38" ry="36" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5"/>
      <!-- Mask opening -->
      <path d="M 72,50 C 72,40 128,40 128,50 L 124,70 C 112,80 88,80 76,70 Z" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- Eyes & Smirk -->
      <ellipse cx="84" cy="56" rx="6" ry="6" fill="#1a1a1a"/>
      <circle cx="82" cy="54" r="2" fill="#FFFFFF"/>
      <ellipse cx="116" cy="56" rx="6" ry="6" fill="#1a1a1a"/>
      <circle cx="114" cy="54" r="2" fill="#FFFFFF"/>
      <path d="M 88,74 Q 100,84 114,74" fill="none" stroke="#1a1a1a" stroke-width="3" stroke-linecap="round"/>
      <!-- Motion Speed Trails -->
      <path d="M 22,110 L 52,115 M 16,135 L 48,138 M 24,160 L 54,158" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
      <!-- Body -->
      <path d="M 70,90 C 66,120 66,152 70,175 L 130,175 C 134,152 134,120 130,90 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <!-- Lightning Chest Badge -->
      <circle cx="100" cy="130" r="21" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
      <polygon points="105,114 91,132 101,132 95,148 111,128 101,128" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- Running Arms -->
      <path d="M 70,95 C 50,118 42,142 50,168 L 65,162 C 60,142 66,124 76,110 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <circle cx="56" cy="172" r="9" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="2.5"/>
      <path d="M 130,95 C 150,118 158,142 150,168 L 135,162 C 140,142 134,124 124,110 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <circle cx="144" cy="172" r="9" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="2.5"/>
      <!-- Zigzag Lightning Belt -->
      <path d="M 68,172 L 80,180 L 92,172 L 100,182 L 108,172 L 120,180 L 132,172" fill="none" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <!-- Sprinting Legs with Lightning Boots -->
      <path d="M 72,184 L 66,230 L 92,230 L 96,184 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <path d="M 128,184 L 134,230 L 108,230 L 104,184 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <path d="M 60,228 C 60,218 94,218 94,228 L 96,244 C 96,248 60,248 60,244 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <polygon points="56,220 48,228 56,230 50,240 64,232" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2" stroke-linejoin="round"/>
      <path d="M 140,228 C 140,218 106,218 106,228 L 104,244 C 104,248 140,248 140,244 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <polygon points="144,220 152,228 144,230 150,240 136,232" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    id: "shield_hero",
    name: "بطل الدرع",
    emoji: "🛡️",
    category: "hero",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 250" width="200" height="250">
      <!-- Helmet with Wings -->
      <polygon points="62,38 46,28 52,42 62,44" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round"/>
      <polygon points="138,38 154,28 148,42 138,44" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round"/>
      <ellipse cx="100" cy="55" rx="38" ry="36" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="3.5"/>
      <!-- Helmet Dome -->
      <path d="M 64,55 C 64,20 136,20 136,55 L 132,60 C 118,48 82,48 68,60 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <!-- Letter 'A' -->
      <path d="M 94,40 L 100,26 L 106,40 M 96,35 L 104,35" fill="none" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Eyes & Smile -->
      <ellipse cx="84" cy="58" rx="6" ry="6" fill="#1a1a1a"/>
      <circle cx="82" cy="56" r="2" fill="#FFFFFF"/>
      <ellipse cx="116" cy="58" rx="6" ry="6" fill="#1a1a1a"/>
      <circle cx="114" cy="56" r="2" fill="#FFFFFF"/>
      <path d="M 88,74 Q 100,82 112,74" fill="none" stroke="#1a1a1a" stroke-width="3" stroke-linecap="round"/>
      <!-- Body Suit with Stripes -->
      <path d="M 70,88 C 66,118 66,150 70,175 L 130,175 C 134,150 134,118 130,88 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <!-- Chest Star -->
      <circle cx="100" cy="120" r="16" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
      <polygon points="100,108 104,116 112,116 106,122 108,130 100,125 92,130 94,122 88,116 96,116" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2" stroke-linejoin="round"/>
      <!-- Stripes below star -->
      <line x1="72" y1="145" x2="128" y2="145" stroke="#1a1a1a" stroke-width="2.5"/>
      <line x1="71" y1="156" x2="129" y2="156" stroke="#1a1a1a" stroke-width="2.5"/>
      <line x1="70" y1="167" x2="130" y2="167" stroke="#1a1a1a" stroke-width="2.5"/>
      <!-- Left Hand with Great Star Shield -->
      <path d="M 70,92 C 55,115 48,135 52,155" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
      <!-- Shield Rings & Center Star -->
      <circle cx="44" cy="155" r="32" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5"/>
      <circle cx="44" cy="155" r="24" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
      <circle cx="44" cy="155" r="16" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
      <circle cx="44" cy="155" r="9" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2"/>
      <polygon points="44,148 46,153 51,153 47,156 49,161 44,158 39,161 41,156 37,153 42,153" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="1.5" stroke-linejoin="round"/>
      <!-- Right Arm -->
      <path d="M 130,92 C 150,115 156,138 152,160 L 138,160 C 140,142 136,124 124,108 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <circle cx="145" cy="166" r="9" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="2.5"/>
      <!-- Belt & Legs -->
      <rect x="66" y="172" width="68" height="12" rx="3" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
      <path d="M 72,184 L 68,230 L 94,230 L 98,184 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <path d="M 128,184 L 132,230 L 106,230 L 102,184 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <ellipse cx="80" cy="238" rx="16" ry="7" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
      <ellipse cx="120" cy="238" rx="16" ry="7" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
    </svg>`,
  },
  {
    id: "wonder_hero",
    name: "الأميرة المحاربة",
    emoji: "👸",
    category: "hero",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 250" width="200" height="250">
      <!-- Flowing Dark Hair Behind -->
      <path d="M 55,50 C 35,90 32,150 44,200 C 60,195 68,150 72,90 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <path d="M 145,50 C 165,90 168,150 156,200 C 140,195 132,150 128,90 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <!-- Head -->
      <ellipse cx="100" cy="55" rx="36" ry="34" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="3.5"/>
      <!-- Golden Tiara with Star -->
      <path d="M 64,38 L 100,20 L 136,38 L 130,46 L 100,34 L 70,46 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <polygon points="100,22 103,29 110,29 104,33 106,40 100,36 94,40 96,33 90,29 97,29" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="1.8" stroke-linejoin="round"/>
      <!-- Pretty Eyes & Smile -->
      <path d="M 74,48 Q 84,42 92,48" fill="none" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round"/>
      <ellipse cx="84" cy="56" rx="7" ry="8" fill="#1a1a1a"/>
      <circle cx="82" cy="53" r="2.8" fill="#FFFFFF"/>
      <circle cx="86" cy="58" r="1.4" fill="#FFFFFF"/>
      <path d="M 126,48 Q 116,42 108,48" fill="none" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round"/>
      <ellipse cx="116" cy="56" rx="7" ry="8" fill="#1a1a1a"/>
      <circle cx="114" cy="53" r="2.8" fill="#FFFFFF"/>
      <circle cx="118" cy="58" r="1.4" fill="#FFFFFF"/>
      <path d="M 88,72 Q 100,82 112,72" fill="none" stroke="#1a1a1a" stroke-width="3" stroke-linecap="round"/>
      <!-- Warrior Eagle Armor Top -->
      <path d="M 68,90 C 66,115 66,130 68,145 L 132,145 C 134,130 134,115 132,90 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <!-- Eagle W Wings Motif -->
      <path d="M 70,95 L 85,115 L 100,98 L 115,115 L 130,95 L 122,120 L 100,110 L 78,120 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- Star Belt -->
      <rect x="66" y="145" width="68" height="14" rx="2" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
      <polygon points="100,147 102,152 107,152 103,155 105,160 100,157 95,160 97,155 93,152 98,152" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="1.5"/>
      <!-- Silver Deflection Bracers on Arms -->
      <path d="M 68,92 C 50,112 44,135 48,155 L 62,155 C 60,138 64,122 74,108 Z" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <rect x="44" y="140" width="18" height="15" rx="3" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
      <circle cx="54" cy="162" r="8" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="2.5"/>
      <path d="M 132,92 C 150,112 156,135 152,155 L 138,155 C 140,138 136,122 126,108 Z" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <rect x="138" y="140" width="18" height="15" rx="3" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
      <circle cx="146" cy="162" r="8" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="2.5"/>
      <!-- Warrior Skirt with Pleats -->
      <path d="M 64,158 L 50,195 C 84,204 116,204 150,195 L 136,158 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <!-- Legs & Gladiator Boots -->
      <path d="M 74,195 L 72,230 L 92,230 L 92,195 Z" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="3"/>
      <path d="M 126,195 L 128,230 L 108,230 L 108,195 Z" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="3"/>
      <path d="M 66,226 C 66,216 98,216 98,226 L 96,244 C 96,248 66,248 66,244 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <path d="M 134,226 C 134,216 102,216 102,226 L 104,244 C 104,248 134,248 134,244 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    id: "ninja_hero",
    name: "بطل النينجا",
    emoji: "🥷",
    category: "hero",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 250" width="200" height="250">
      <!-- Katana on Back -->
      <line x1="35" y1="40" x2="165" y2="180" stroke="#1a1a1a" stroke-width="4" stroke-linecap="round"/>
      <rect x="28" y="32" width="16" height="16" rx="2" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5" transform="rotate(-40 36 40)"/>
      <!-- Head with Ninja Hood -->
      <ellipse cx="100" cy="55" rx="38" ry="36" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5"/>
      <!-- Headband Ribbon -->
      <path d="M 62,38 C 85,28 115,28 138,38 L 136,48 C 115,38 85,38 64,48 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- Ribbon Tails -->
      <path d="M 138,40 C 158,35 175,45 185,40 C 172,50 155,48 138,48 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- Forehead Protector Badge -->
      <rect x="85" y="32" width="30" height="14" rx="3" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
      <circle cx="100" cy="39" r="3" fill="#1a1a1a"/>
      <!-- Eye Slit Opening -->
      <path d="M 70,50 C 70,44 130,44 130,50 L 128,66 C 114,70 86,70 72,66 Z" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- Determined Sparkle Eyes -->
      <ellipse cx="84" cy="56" rx="6" ry="6" fill="#1a1a1a"/>
      <circle cx="82" cy="54" r="2" fill="#FFFFFF"/>
      <ellipse cx="116" cy="56" rx="6" ry="6" fill="#1a1a1a"/>
      <circle cx="114" cy="54" r="2" fill="#FFFFFF"/>
      <!-- Body Gi -->
      <path d="M 70,88 C 66,118 66,150 70,175 L 130,175 C 134,150 134,118 130,88 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <!-- Overlapping Kimono Neckline -->
      <path d="M 72,88 L 100,135 L 128,88" fill="none" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <!-- Shuriken Throwing Star Chest Badge -->
      <polygon points="100,120 103,127 110,130 103,133 100,140 97,133 90,130 97,127" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2" stroke-linejoin="round"/>
      <!-- Ninja Belt Sash with Knot -->
      <rect x="66" y="166" width="68" height="15" rx="3" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
      <ellipse cx="100" cy="173" rx="6" ry="5" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2"/>
      <path d="M 98,178 L 94,198 L 102,198 L 104,178" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2" stroke-linejoin="round"/>
      <!-- Martial Arts Pose Arms -->
      <path d="M 70,95 C 48,112 40,135 48,155 L 62,150 C 58,135 64,120 76,108 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <circle cx="50" cy="162" r="9" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="2.5"/>
      <path d="M 130,95 C 152,112 160,135 152,155 L 138,150 C 142,135 136,120 124,108 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <circle cx="150" cy="162" r="9" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="2.5"/>
      <!-- Ninja Legs with Bandages -->
      <path d="M 72,181 L 66,230 L 92,230 L 96,181 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <line x1="68" y1="205" x2="94" y2="205" stroke="#1a1a1a" stroke-width="2"/>
      <line x1="67" y1="218" x2="93" y2="218" stroke="#1a1a1a" stroke-width="2"/>
      <path d="M 128,181 L 134,230 L 108,230 L 104,181 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <line x1="106" y1="205" x2="132" y2="205" stroke="#1a1a1a" stroke-width="2"/>
      <line x1="107" y1="218" x2="133" y2="218" stroke="#1a1a1a" stroke-width="2"/>
      <ellipse cx="80" cy="238" rx="15" ry="7" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
      <ellipse cx="120" cy="238" rx="15" ry="7" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
    </svg>`,
  },

  // ============================
  // FANTASY & CREATURES SECTION
  // ============================
  {
    id: "wizard_hero",
    name: "الساحر العجيب",
    emoji: "🧙‍♂️",
    category: "fantasy",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 250" width="200" height="250">
      <!-- Magic Star Sparkles -->
      <polygon points="175,45 178,52 185,55 178,58 175,65 172,58 165,55 172,52" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="1.8"/>
      <polygon points="25,75 27,80 32,82 27,84 25,89 23,84 18,82 23,80" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="1.8"/>
      <!-- Tall Pointy Wizard Hat with Crescent Moon -->
      <path d="M 45,65 C 55,60 70,25 90,8 C 96,25 125,50 155,65 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <ellipse cx="100" cy="65" rx="60" ry="14" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5"/>
      <path d="M 92,25 C 84,25 82,38 94,44 C 84,40 84,30 92,25 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2" stroke-linejoin="round"/>
      <!-- Wizard Head & Fluffy Beard -->
      <ellipse cx="100" cy="78" rx="34" ry="28" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="3"/>
      <!-- Eyes & Cheerful Smile -->
      <ellipse cx="85" cy="74" rx="6" ry="6" fill="#1a1a1a"/>
      <circle cx="83" cy="72" r="2" fill="#FFFFFF"/>
      <ellipse cx="115" cy="74" rx="6" ry="6" fill="#1a1a1a"/>
      <circle cx="113" cy="72" r="2" fill="#FFFFFF"/>
      <!-- Fluffy White Beard -->
      <path d="M 68,82 C 60,110 75,145 100,150 C 125,145 140,110 132,82 C 120,95 80,95 68,82 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <!-- Wizard Star Robe -->
      <path d="M 65,120 L 40,230 C 80,240 120,240 160,230 L 135,120 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <!-- Stars on Robe -->
      <polygon points="100,165 102,172 109,172 103,176 105,183 100,179 95,183 97,176 91,172 98,172" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="1.8"/>
      <polygon points="75,195 77,200 82,200 78,203 79,208 75,205 71,208 72,203 68,200 73,200" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="1.5"/>
      <polygon points="125,195 127,200 132,200 128,203 129,208 125,205 121,208 122,203 118,200 123,200" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="1.5"/>
      <!-- Magic Wand Hand -->
      <path d="M 130,125 C 150,140 155,160 148,180 L 136,175 C 140,160 136,145 124,135 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <circle cx="150" cy="180" r="8" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="2.5"/>
      <!-- Magic Wand with Bursting Star -->
      <line x1="150" y1="180" x2="175" y2="120" stroke="#1a1a1a" stroke-width="4" stroke-linecap="round"/>
      <circle cx="176" cy="118" r="10" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
      <polygon points="176,106 179,114 187,114 181,119 183,127 176,122 169,127 171,119 165,114 173,114" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2" stroke-linejoin="round"/>
      <!-- Glowing Orb Left Hand -->
      <path d="M 70,125 C 50,140 45,160 52,180 L 64,175 C 60,160 64,145 76,135 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <circle cx="50" cy="180" r="8" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="2.5"/>
      <circle cx="42" cy="188" r="14" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
      <ellipse cx="40" cy="185" rx="6" ry="4" fill="#FFFFFF" opacity="0.6"/>
      <!-- Wizard Shoes -->
      <path d="M 70,230 C 60,230 50,240 75,244 L 92,244 C 95,238 90,230 70,230 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <path d="M 130,230 C 140,230 150,240 125,244 L 108,244 C 105,238 110,230 130,230 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    id: "happy_robot",
    name: "الروبوت الراقص",
    emoji: "🤖",
    category: "fantasy",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 250" width="200" height="250">
      <!-- Antenna with Light Bulb -->
      <line x1="100" y1="45" x2="100" y2="18" stroke="#1a1a1a" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="100" cy="12" r="9" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
      <!-- Cute Box Robot Head -->
      <rect x="62" y="42" width="76" height="58" rx="14" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5"/>
      <!-- Head Bolts/Ears -->
      <rect x="52" y="60" width="10" height="20" rx="3" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
      <rect x="138" y="60" width="10" height="20" rx="3" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
      <!-- Screen Face -->
      <rect x="70" y="50" width="60" height="42" rx="8" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
      <!-- Happy Digital Eyes (^.^) -->
      <path d="M 78,68 L 86,60 L 94,68" fill="none" stroke="#1a1a1a" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M 106,68 L 114,60 L 122,68" fill="none" stroke="#1a1a1a" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M 94,80 Q 100,86 106,80" fill="none" stroke="#1a1a1a" stroke-width="3" stroke-linecap="round"/>
      <!-- Flexible Neck -->
      <rect x="88" y="100" width="24" height="10" rx="2" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
      <!-- Body -->
      <rect x="58" y="110" width="84" height="70" rx="14" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5"/>
      <!-- Chest Meters & Buttons -->
      <circle cx="80" cy="132" r="10" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
      <line x1="80" y1="132" x2="86" y2="126" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="120" cy="132" r="10" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
      <line x1="120" y1="132" x2="116" y2="125" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Audio Visualizer Bars -->
      <rect x="74" y="152" width="8" height="18" rx="2" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2"/>
      <rect x="86" y="148" width="8" height="22" rx="2" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2"/>
      <rect x="98" y="145" width="8" height="25" rx="2" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2"/>
      <rect x="110" y="150" width="8" height="20" rx="2" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2"/>
      <rect x="122" y="155" width="8" height="15" rx="2" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2"/>
      <!-- Bouncy Accordion Arms with Claws -->
      <path d="M 58,125 C 35,130 30,155 45,175" fill="none" stroke="#1a1a1a" stroke-width="6" stroke-linecap="round"/>
      <circle cx="48" cy="178" r="8" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
      <path d="M 40,172 C 34,180 34,188 42,192 M 56,172 C 62,180 62,188 54,192" fill="none" stroke="#1a1a1a" stroke-width="3" stroke-linecap="round"/>
      <path d="M 142,125 C 165,130 170,155 155,175" fill="none" stroke="#1a1a1a" stroke-width="6" stroke-linecap="round"/>
      <circle cx="152" cy="178" r="8" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
      <path d="M 144,172 C 138,180 138,188 146,192 M 160,172 C 166,180 166,188 158,192" fill="none" stroke="#1a1a1a" stroke-width="3" stroke-linecap="round"/>
      <!-- Wheel / Bouncy Legs -->
      <rect x="75" y="180" width="16" height="30" rx="4" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
      <rect x="109" y="180" width="16" height="30" rx="4" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
      <ellipse cx="83" cy="226" rx="20" ry="12" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5"/>
      <circle cx="83" cy="226" r="5" fill="#1a1a1a"/>
      <ellipse cx="117" cy="226" rx="20" ry="12" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5"/>
      <circle cx="117" cy="226" r="5" fill="#1a1a1a"/>
    </svg>`,
  },
  {
    id: "cute_dragon",
    name: "التنين اللطيف",
    emoji: "🐉",
    category: "fantasy",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 210" width="260" height="210">
      <!-- Tail with Heart Tip -->
      <path d="M 60,140 C 25,150 10,120 18,95 C 24,75 40,78 35,95 C 30,110 45,120 70,125 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <path d="M 22,78 C 12,65 2,75 10,88 C 18,98 25,90 22,78 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- Small Dragon Wings -->
      <path d="M 120,95 C 105,50 75,45 68,60 C 80,72 82,88 95,95 C 80,95 82,110 98,112 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <path d="M 140,95 C 155,50 185,45 192,60 C 180,72 178,88 165,95 C 180,95 178,110 162,112 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <!-- Chubby Body -->
      <ellipse cx="130" cy="135" rx="55" ry="46" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5"/>
      <!-- Segmented Soft Belly -->
      <path d="M 105,120 C 115,105 145,105 155,120 C 160,145 155,170 130,175 C 105,170 100,145 105,120 Z" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round"/>
      <line x1="110" y1="132" x2="150" y2="132" stroke="#1a1a1a" stroke-width="2"/>
      <line x1="112" y1="146" x2="148" y2="146" stroke="#1a1a1a" stroke-width="2"/>
      <line x1="116" y1="160" x2="144" y2="160" stroke="#1a1a1a" stroke-width="2"/>
      <!-- Big Cute Head -->
      <circle cx="170" cy="68" r="38" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5"/>
      <!-- Dragon Horns -->
      <path d="M 152,38 C 146,18 135,18 140,32 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <path d="M 175,34 C 178,14 190,14 184,28 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <!-- Back Ridges/Spines -->
      <polygon points="100,90 94,80 106,86" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
      <polygon points="85,105 78,95 90,102" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
      <polygon points="70,120 62,112 74,118" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
      <!-- Big Sparkle Eyes -->
      <circle cx="160" cy="62" r="10" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
      <circle cx="190" cy="62" r="10" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
      <circle cx="162" cy="61" r="5.5" fill="#1a1a1a"/>
      <circle cx="160" cy="59" r="2.2" fill="#FFFFFF"/>
      <circle cx="192" cy="61" r="5.5" fill="#1a1a1a"/>
      <circle cx="190" cy="59" r="2.2" fill="#FFFFFF"/>
      <!-- Cute Snout, Nostrils & Smile with Tiny Tooth -->
      <ellipse cx="185" cy="78" rx="20" ry="14" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="2.5"/>
      <circle cx="180" cy="74" r="2" fill="#1a1a1a"/>
      <circle cx="192" cy="74" r="2" fill="#1a1a1a"/>
      <path d="M 176,82 Q 186,90 196,82" fill="none" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
      <polygon points="188,85 192,85 190,90" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="1.5"/>
      <!-- Cute Dragon Arms -->
      <path d="M 135,115 C 145,130 155,130 150,140 C 140,145 130,135 125,122 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <!-- Sturdy Feet with Claws -->
      <ellipse cx="105" cy="182" rx="18" ry="12" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5"/>
      <circle cx="94" cy="190" r="3" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2"/>
      <circle cx="104" cy="192" r="3" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2"/>
      <circle cx="114" cy="190" r="3" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2"/>
      <ellipse cx="155" cy="182" rx="18" ry="12" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5"/>
      <circle cx="144" cy="190" r="3" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2"/>
      <circle cx="154" cy="192" r="3" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2"/>
      <circle cx="164" cy="190" r="3" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2"/>
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
      <path d="M 40,135 C 15,125 5,95 20,80 C 30,90 40,110 65,122 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <!-- Body -->
      <ellipse cx="110" cy="130" rx="58" ry="46" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5"/>
      <!-- Belly -->
      <ellipse cx="115" cy="145" rx="38" ry="26" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="2.5"/>
      <!-- Strong Head & Snout -->
      <path d="M 148,82 C 165,55 210,55 235,68 C 252,78 255,100 240,110 C 220,115 195,110 180,105 C 165,115 152,108 148,82 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <!-- Lower Jaw -->
      <path d="M 160,108 C 175,125 210,125 235,112 C 220,128 185,128 160,114 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <!-- Happy Sharp Teeth -->
      <polygon points="175,106 180,114 185,106" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2"/>
      <polygon points="190,106 195,115 200,106" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2"/>
      <polygon points="205,107 210,116 215,107" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2"/>
      <polygon points="220,108 224,115 228,108" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2"/>
      <!-- Big Shiny Eye -->
      <circle cx="195" cy="78" r="11" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
      <circle cx="197" cy="77" r="5.5" fill="#1a1a1a"/>
      <circle cx="195" cy="74" r="2.2" fill="#FFFFFF"/>
      <circle cx="199" cy="79" r="1.2" fill="#FFFFFF"/>
      <!-- Brow Ridge & Nostril -->
      <path d="M 184,68 Q 196,62 208,68" fill="none" stroke="#1a1a1a" stroke-width="3" stroke-linecap="round"/>
      <circle cx="236" cy="80" r="2.5" fill="#1a1a1a"/>
      <!-- Cute Tiny Arms with Claws -->
      <path d="M 135,115 C 145,130 160,130 156,120 L 148,110 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <line x1="156" y1="126" x2="162" y2="128" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="154" y1="122" x2="160" y2="122" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Left Leg & Three-Toed Foot -->
      <path d="M 85,160 C 75,185 65,200 62,210 L 98,210 C 95,195 98,175 102,160 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <circle cx="64" cy="210" r="4" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2"/>
      <circle cx="78" cy="212" r="4" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2"/>
      <circle cx="92" cy="210" r="4" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2"/>
      <!-- Right Leg & Foot -->
      <path d="M 118,160 C 112,185 102,200 100,210 L 136,210 C 132,195 130,175 132,160 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <circle cx="102" cy="210" r="4" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2"/>
      <circle cx="116" cy="212" r="4" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2"/>
      <circle cx="130" cy="210" r="4" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2"/>
      <!-- Back Spines -->
      <polygon points="68,96 62,80 76,92" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
      <polygon points="86,88 82,72 94,84" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
      <polygon points="104,86 102,68 114,83" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
    </svg>`,
  },
  {
    id: "dino_bronto",
    name: "برونتوصور",
    emoji: "🦕",
    category: "dino",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 200" width="280" height="200">
      <!-- Graceful Long Tail -->
      <path d="M 20,105 C 5,90 10,70 20,80 C 30,90 45,100 65,105 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <!-- Body -->
      <ellipse cx="120" cy="115" rx="72" ry="44" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5"/>
      <!-- Belly -->
      <ellipse cx="120" cy="130" rx="52" ry="24" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="2.5"/>
      <!-- Spots on Back -->
      <circle cx="95" cy="95" r="7" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2"/>
      <circle cx="125" cy="88" r="9" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2"/>
      <circle cx="155" cy="96" r="6" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2"/>
      <!-- Long Graceful Neck -->
      <path d="M 175,98 C 205,65 220,38 232,28 C 242,26 248,32 245,44 C 238,58 215,82 190,105 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <!-- Sweet Head -->
      <ellipse cx="250" cy="36" rx="22" ry="17" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5"/>
      <!-- Eye -->
      <circle cx="256" cy="30" r="6" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
      <circle cx="257" cy="29" r="3" fill="#1a1a1a"/>
      <circle cx="255" cy="27" r="1.2" fill="#FFFFFF"/>
      <!-- Smile & Nostril -->
      <path d="M 252,42 Q 262,48 268,42" fill="none" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="268" cy="32" r="1.8" fill="#1a1a1a"/>
      <!-- Front Legs -->
      <path d="M 148,148 L 142,185 L 165,185 L 165,148 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <circle cx="147" cy="186" r="3" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2"/>
      <circle cx="154" cy="188" r="3" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2"/>
      <circle cx="161" cy="186" r="3" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2"/>
      <path d="M 170,148 L 166,185 L 186,185 L 182,148 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <!-- Back Legs -->
      <path d="M 72,148 L 65,185 L 88,185 L 88,148 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <circle cx="70" cy="186" r="3" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2"/>
      <circle cx="77" cy="188" r="3" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2"/>
      <circle cx="84" cy="186" r="3" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2"/>
      <path d="M 94,148 L 90,185 L 110,185 L 108,148 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    id: "dino_triceratops",
    name: "تراي سيراتوبس",
    emoji: "🦏",
    category: "dino",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 200" width="270" height="200">
      <!-- Tail -->
      <path d="M 20,118 C 8,105 10,92 24,102 L 50,112 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <!-- Body -->
      <ellipse cx="115" cy="118" rx="70" ry="42" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5"/>
      <!-- Belly -->
      <ellipse cx="115" cy="132" rx="50" ry="22" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="2.5"/>
      <!-- Studded Head Frill (Shield) -->
      <path d="M 182,72 C 198,35 235,38 254,62 C 260,82 248,104 225,108 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <!-- Frill Spikes/Pearls -->
      <circle cx="210" cy="44" r="6" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
      <circle cx="230" cy="46" r="6" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
      <circle cx="248" cy="56" r="6" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
      <circle cx="254" cy="74" r="6" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
      <circle cx="250" cy="92" r="6" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
      <!-- Head -->
      <path d="M 172,82 C 190,75 210,78 220,95 C 218,110 195,118 178,112 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <!-- Brow Horns -->
      <path d="M 194,80 C 198,52 208,52 206,82" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <path d="M 210,82 C 220,58 228,58 218,84" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <!-- Nose Horn -->
      <path d="M 176,96 C 166,82 174,80 180,94" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <!-- Parrot Beak Smile -->
      <path d="M 166,102 Q 162,110 170,110 Q 176,106 172,102 Z" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="2.5"/>
      <!-- Eye -->
      <circle cx="198" cy="92" r="7" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
      <circle cx="199" cy="91" r="3.5" fill="#1a1a1a"/>
      <circle cx="197" cy="89" r="1.5" fill="#FFFFFF"/>
      <!-- Legs -->
      <path d="M 70,150 L 62,185 L 86,185 L 86,150 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <path d="M 94,150 L 90,185 L 112,185 L 110,150 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <path d="M 135,150 L 130,185 L 154,185 L 152,150 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <path d="M 158,150 L 156,185 L 176,185 L 172,150 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    id: "dino_stego",
    name: "ستيغوصور",
    emoji: "🐊",
    category: "dino",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 200" width="280" height="200">
      <!-- Tail with 4 Spikes (Thagomizer) -->
      <path d="M 22,118 C 10,108 8,92 20,102 L 48,114 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <polygon points="12,96 4,80 18,92" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <polygon points="8,105 0,94 14,102" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <!-- Body -->
      <ellipse cx="125" cy="118" rx="80" ry="40" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5"/>
      <!-- Belly -->
      <ellipse cx="125" cy="134" rx="58" ry="20" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="2.5"/>
      <!-- Back Diamond Plates -->
      <polygon points="56,80 50,56 62,45 68,70" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <polygon points="78,76 74,48 86,36 92,64" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <polygon points="104,74 100,40 114,24 120,58" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <polygon points="130,74 128,36 142,26 146,58" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <polygon points="154,76 156,46 168,38 170,66" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <polygon points="174,80 178,58 188,52 188,76" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <!-- Cute Small Head -->
      <path d="M 200,102 C 220,90 242,95 250,105 C 248,118 230,122 205,116 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <circle cx="230" cy="103" r="6" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
      <circle cx="231" cy="102" r="3" fill="#1a1a1a"/>
      <path d="M 238,112 Q 244,116 248,112" fill="none" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round"/>
      <!-- Legs -->
      <path d="M 74,148 L 68,184 L 90,184 L 90,148 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <path d="M 100,148 L 96,184 L 118,184 L 116,148 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <path d="M 145,148 L 142,184 L 164,184 L 162,148 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <path d="M 168,148 L 166,184 L 186,184 L 182,148 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    id: "dino_ptero",
    name: "بتيرانودون الطائر",
    emoji: "🐉",
    category: "dino",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 180" width="300" height="180">
      <!-- Left Wide Wing -->
      <path d="M 150,80 L 80,48 L 38,32 L 12,42 C 22,54 10,60 18,68 C 28,75 58,65 100,72 L 140,82 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <path d="M 135,78 L 48,48 M 130,78 L 58,54 M 120,78 L 74,60" stroke="#1a1a1a" stroke-width="1.8" stroke-linecap="round" opacity="0.5"/>
      <!-- Right Wide Wing -->
      <path d="M 150,80 L 220,48 L 262,32 L 288,42 C 278,54 290,60 282,68 C 272,75 242,65 200,72 L 160,82 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <path d="M 165,78 L 252,48 M 170,78 L 242,54 M 180,78 L 226,60" stroke="#1a1a1a" stroke-width="1.8" stroke-linecap="round" opacity="0.5"/>
      <!-- Body -->
      <ellipse cx="150" cy="92" rx="32" ry="24" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5"/>
      <ellipse cx="150" cy="100" rx="20" ry="12" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="2"/>
      <!-- Head Crest & Beak -->
      <path d="M 150,60 C 160,25 182,22 170,48 L 160,58 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <path d="M 144,58 C 150,48 165,50 176,60 C 172,72 158,72 144,65 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <!-- Long Beak -->
      <polygon points="172,58 205,56 174,65" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- Eye -->
      <circle cx="158" cy="60" r="5" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
      <circle cx="159" cy="59" r="2.5" fill="#1a1a1a"/>
      <!-- Talons -->
      <path d="M 140,112 L 134,142 L 126,152 M 134,142 L 138,152 M 142,142 L 146,150" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M 160,112 L 164,142 L 156,152 M 164,142 L 168,152 M 170,142 L 174,150" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`,
  },
  {
    id: "dino_ankylo",
    name: "أنكيلوصور المدرع",
    emoji: "🪨",
    category: "dino",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 180" width="280" height="180">
      <!-- Tail with Heavy Bone Club -->
      <path d="M 20,100 L 50,98 L 65,102 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <ellipse cx="15" cy="98" rx="14" ry="12" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5"/>
      <!-- Armored Shell Dome -->
      <path d="M 60,70 C 85,46 150,46 220,68 C 235,90 225,120 140,138 C 75,135 50,112 60,70 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5"/>
      <!-- Hexagonal Armor Plates -->
      <polygon points="85,60 100,54 115,60 100,68" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2" stroke-linejoin="round"/>
      <polygon points="120,54 140,48 160,54 140,62" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2" stroke-linejoin="round"/>
      <polygon points="165,60 180,54 195,60 180,68" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2" stroke-linejoin="round"/>
      <polygon points="75,80 90,74 105,80 90,88" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2" stroke-linejoin="round"/>
      <polygon points="110,74 140,68 170,74 140,82" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2" stroke-linejoin="round"/>
      <polygon points="175,80 190,74 205,80 190,88" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2" stroke-linejoin="round"/>
      <!-- Defensive Side Spikes -->
      <polygon points="62,78 48,70 60,84" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round"/>
      <polygon points="56,96 42,92 56,102" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round"/>
      <polygon points="220,78 234,70 222,84" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round"/>
      <polygon points="224,96 238,92 224,102" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- Head -->
      <path d="M 220,88 C 240,80 255,86 258,98 C 255,112 238,118 220,110 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <circle cx="242" cy="96" r="6" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
      <circle cx="243" cy="95" r="3" fill="#1a1a1a"/>
      <path d="M 248,106 Q 254,110 258,106" fill="none" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round"/>
      <!-- Legs -->
      <path d="M 85,130 L 78,165 L 100,165 L 100,130 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <path d="M 115,132 L 110,165 L 132,165 L 128,132 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <path d="M 165,132 L 160,165 L 182,165 L 178,132 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <path d="M 195,130 L 192,165 L 212,165 L 208,130 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    id: "dino_baby",
    name: "ديناصور صغير لطيف",
    emoji: "🥚",
    category: "dino",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 220" width="200" height="220">
      <!-- Cracked Egg Shell Bottom -->
      <path d="M 45,150 C 42,190 70,212 100,212 C 130,212 158,190 155,150 L 140,162 L 125,148 L 108,165 L 92,148 L 76,164 L 60,148 Z" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <!-- Little Chubby Body -->
      <ellipse cx="100" cy="135" rx="46" ry="42" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5"/>
      <ellipse cx="100" cy="148" rx="28" ry="24" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="2"/>
      <!-- Big Cute Chibi Head -->
      <circle cx="100" cy="65" r="44" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5"/>
      <!-- Egg Shell Hat on Head -->
      <path d="M 70,40 L 82,48 L 94,36 L 108,50 L 120,38 L 130,46 C 120,20 80,20 70,40 Z" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <!-- Giant Anime Sparkle Eyes -->
      <circle cx="80" cy="62" r="15" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
      <circle cx="120" cy="62" r="15" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3"/>
      <circle cx="83" cy="60" r="8" fill="#1a1a1a"/>
      <circle cx="81" cy="56" r="3.5" fill="#FFFFFF"/>
      <circle cx="85" cy="62" r="1.8" fill="#FFFFFF"/>
      <circle cx="117" cy="60" r="8" fill="#1a1a1a"/>
      <circle cx="115" cy="56" r="3.5" fill="#FFFFFF"/>
      <circle cx="119" cy="62" r="1.8" fill="#FFFFFF"/>
      <!-- Blush Cheeks -->
      <ellipse cx="66" cy="74" rx="8" ry="5" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="1.5"/>
      <ellipse cx="134" cy="74" rx="8" ry="5" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="1.5"/>
      <!-- Big Sweet Open Smile -->
      <path d="M 86,80 Q 100,98 114,80 Z" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- Cute Tiny Claws -->
      <ellipse cx="60" cy="130" rx="10" ry="7" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
      <ellipse cx="140" cy="130" rx="10" ry="7" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
    </svg>`,
  },
  {
    id: "dino_spino",
    name: "سبينوصور",
    emoji: "🌊",
    category: "dino",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 220" width="280" height="220">
      <!-- Tail -->
      <path d="M 22,130 C 8,120 12,105 24,115 L 50,126 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <!-- Body -->
      <ellipse cx="120" cy="130" rx="72" ry="42" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5"/>
      <!-- Belly -->
      <ellipse cx="120" cy="148" rx="50" ry="20" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="2.5"/>
      <!-- Giant Dorsal Sail with Sunburst Pattern -->
      <path d="M 62,95 C 65,36 90,20 118,18 C 145,20 162,40 168,95 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <line x1="82" y1="90" x2="88" y2="32" stroke="#1a1a1a" stroke-width="2"/>
      <line x1="102" y1="88" x2="104" y2="22" stroke="#1a1a1a" stroke-width="2"/>
      <line x1="122" y1="88" x2="122" y2="24" stroke="#1a1a1a" stroke-width="2"/>
      <line x1="142" y1="88" x2="142" y2="38" stroke="#1a1a1a" stroke-width="2"/>
      <!-- Long Croc Snout Head -->
      <path d="M 182,105 C 205,92 235,88 265,94 C 270,105 264,114 245,118 C 220,120 190,118 182,112 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <!-- Interlocking Teeth -->
      <polygon points="196,112 200,118 204,112" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2"/>
      <polygon points="212,111 216,118 220,111" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2"/>
      <polygon points="228,111 232,118 236,111" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2"/>
      <polygon points="244,112 248,118 252,112" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2"/>
      <!-- Eye -->
      <circle cx="232" cy="98" r="7" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
      <circle cx="233" cy="97" r="3.5" fill="#1a1a1a"/>
      <circle cx="231" cy="95" r="1.5" fill="#FFFFFF"/>
      <!-- Arms -->
      <path d="M 165,116 C 174,136 186,140 180,130 L 172,115 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <!-- Legs & Claws -->
      <path d="M 85,162 L 78,198 L 102,198 L 98,162 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <path d="M 120,162 L 115,198 L 140,198 L 134,162 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    id: "dino_raptor",
    name: "فيلوسيرابتور",
    emoji: "🏃",
    category: "dino",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 220" width="250" height="220">
      <!-- Tail with Feather Plume -->
      <path d="M 15,85 C 5,75 10,70 20,76 L 62,92 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <polygon points="12,74 2,64 16,70" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
      <!-- Body (Athletic & Sleek) -->
      <ellipse cx="112" cy="100" rx="55" ry="32" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5"/>
      <ellipse cx="112" cy="112" rx="36" ry="16" fill="#FFF5E1" stroke="#1a1a1a" stroke-width="2"/>
      <!-- Head with Feather Crest -->
      <polygon points="168,40 178,28 174,44" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
      <path d="M 155,82 C 168,60 190,40 216,44 C 230,50 232,62 216,70 C 198,72 178,68 158,92 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <!-- Lower Jaw & Teeth -->
      <path d="M 184,66 C 205,78 226,72 228,62 C 218,74 195,72 184,68 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <polygon points="194,65 197,70 200,65" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="1.8"/>
      <polygon points="206,64 209,70 212,64" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="1.8"/>
      <!-- Determined Eye -->
      <circle cx="204" cy="52" r="7" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5"/>
      <circle cx="205" cy="51" r="3.5" fill="#1a1a1a"/>
      <circle cx="203" cy="49" r="1.5" fill="#FFFFFF"/>
      <!-- Claw Arms -->
      <path d="M 148,92 C 160,105 170,106 164,98 L 154,88 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <!-- Running Legs with Signature Sickle Toe Claw -->
      <path d="M 108,125 C 118,155 125,175 112,192 L 132,192 C 132,175 128,155 118,128 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <!-- Sickle Claw -->
      <path d="M 112,185 C 104,170 98,178 106,188" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linecap="round"/>
      <path d="M 85,125 C 72,160 58,182 56,192 L 86,192 C 82,178 80,165 92,130 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
      <path d="M 64,185 C 56,172 50,180 58,188" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linecap="round"/>
    </svg>`,
  },
];
