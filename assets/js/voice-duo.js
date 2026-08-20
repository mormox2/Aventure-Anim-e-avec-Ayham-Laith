import { showEncouragement } from "./feedback.js";
import { synth } from "./synth.js";
import { state } from "./state.js";
import { getCurrentLanguage, t } from "./i18n.js";

/* Multilingual speech synthesis and duo mode. */
let cachedVoices = {};

function getVoiceForLang(langCode) {
    if (!('speechSynthesis' in window)) return null;
    if (cachedVoices[langCode]) return cachedVoices[langCode];
    const voices = window.speechSynthesis.getVoices();
    const voice = voices.find(v => v.lang.startsWith(langCode) || v.lang.includes(`${langCode}-`)) || null;
    if (voice) cachedVoices[langCode] = voice;
    return voice;
}

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = () => {
        cachedVoices = {};
    };
}

function speakText(text, lang = null) {
    if (!('speechSynthesis' in window)) return;

    const targetLang = lang || getCurrentLanguage() || 'ar';

    // Stop active speaking to avoid overlap
    window.speechSynthesis.cancel();

    // Clean emojis and symbols from spoken text for better synthesis pronunciation
    const cleanText = text.replace(/[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDC00-\uDFFF]/g, "").trim();
    if (!cleanText) return;

    const utterance = new SpeechSynthesisUtterance(cleanText);
    
    if (targetLang === 'fr') {
        utterance.lang = 'fr-FR';
        const frVoice = getVoiceForLang('fr');
        if (frVoice) utterance.voice = frVoice;
    } else if (targetLang === 'en') {
        utterance.lang = 'en-US';
        const enVoice = getVoiceForLang('en');
        if (enVoice) utterance.voice = enVoice;
    } else {
        utterance.lang = 'ar-SA';
        const arVoice = getVoiceForLang('ar');
        if (arVoice) utterance.voice = arVoice;
    }

    utterance.pitch = 1.35; // Cartoony children voice pitch
    utterance.rate = 0.95;  // Slightly natural speech rate
    window.speechSynthesis.speak(utterance);
}

function speakArabic(text) {
    speakText(text, 'ar');
}

/************************************************************
 * 17. Duo Split Artist Mode (Ayham & Laith Split Canvas) 👦🤝👦
 ************************************************************/
function toggleSplitMode() {
    synth.playPop();
    state.isSplitMode = !state.isSplitMode;
    const overlay = document.getElementById("split-screen-overlay");
    const btn = document.getElementById("btn-split-mode");
    const lang = getCurrentLanguage();

    if (state.isSplitMode) {
        overlay.classList.remove("hidden");
        btn.classList.remove("bg-gradient-to-r", "from-amber-400", "to-cyan-400");
        btn.classList.add("bg-yellow-400", "ring-4", "ring-yellow-400", "scale-105");

        if (lang === 'fr') {
            showEncouragement("👦🤝👦 Mode Duo actif ! Dessinez ensemble à deux !");
            speakText("Génial ! Le mode duo est actif, dessinons ensemble !", 'fr');
        } else if (lang === 'en') {
            showEncouragement("👦🤝👦 Duo mode active! Draw together side by side!");
            speakText("Awesome! Duo mode is active, let's draw together!", 'en');
        } else {
            showEncouragement("👦🤝👦 وضع الرسام الثنائي نشط! أيهم على اليسار وليث على اليمين!");
            speakText("رائع! وضع الرسام الثنائي نشط، أيهم وليث يرسمان معاً!", 'ar');
        }
    } else {
        overlay.classList.add("hidden");
        btn.classList.add("bg-gradient-to-r", "from-amber-400", "to-cyan-400");
        btn.classList.remove("bg-yellow-400", "ring-4", "ring-yellow-400", "scale-105");

        if (lang === 'fr') {
            showEncouragement("Mode Duo désactivé ! 🛑");
        } else if (lang === 'en') {
            showEncouragement("Duo mode turned off! 🛑");
        } else {
            showEncouragement("تم إلغاء وضع الرسام الثنائي! 🛑");
        }
    }
}

export { speakText, speakArabic, toggleSplitMode };

