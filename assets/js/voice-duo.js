import { showEncouragement } from "./feedback.js";
import { synth } from "./synth.js";
import { state } from "./state.js";

/* Arabic speech synthesis and duo mode. */
            /************************************************************
             * 16. Arabic Voice Synthesis (Text-To-Speech) 🗣️🦁
             ************************************************************/
            function speakArabic(text) {
                if (!('speechSynthesis' in window)) return;

                // Stop active speaking to avoid overlap
                window.speechSynthesis.cancel();

                // Clean emojis and symbols from spoken text for better synthesis pronunciation
                const cleanText = text.replace(/[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDC00-\uDFFF]/g, "");

                const utterance = new SpeechSynthesisUtterance(cleanText);
                utterance.lang = 'ar-SA';

                // Locate system Arabic voice
                const voices = window.speechSynthesis.getVoices();
                const arVoice = voices.find(v => v.lang.startsWith('ar'));
                if (arVoice) {
                    utterance.voice = arVoice;
                }

                utterance.pitch = 1.35; // Cartoony children voice pitch
                utterance.rate = 0.95;  // Slightly natural speech rate
                window.speechSynthesis.speak(utterance);
            }

            /************************************************************
             * 17. Duo Split Artist Mode (Ayham & Laith Split Canvas) 👦🤝👦
             ************************************************************/
            function toggleSplitMode() {
                synth.playPop();
                state.isSplitMode = !state.isSplitMode;
                const overlay = document.getElementById("split-screen-overlay");
                const btn = document.getElementById("btn-split-mode");

                if (state.isSplitMode) {
                    overlay.classList.remove("hidden");
                    btn.classList.remove("bg-gradient-to-r", "from-amber-400", "to-cyan-400");
                    btn.classList.add("bg-yellow-400", "ring-4", "ring-yellow-400", "scale-105");
                    showEncouragement("👦🤝👦 وضع الرسام الثنائي نشط! أيهم على اليسار وليث على اليمين!");
                    speakArabic("رائع! وضع الرسام الثنائي نشط، أيهم وليث يرسمان معاً!");
                } else {
                    overlay.classList.add("hidden");
                    btn.classList.add("bg-gradient-to-r", "from-amber-400", "to-cyan-400");
                    btn.classList.remove("bg-yellow-400", "ring-4", "ring-yellow-400", "scale-105");
                    showEncouragement("تم إلغاء وضع الرسام الثنائي! 🛑");
                }
            }

export { speakArabic, toggleSplitMode };
