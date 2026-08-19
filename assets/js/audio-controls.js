import { synth } from "./synth.js";

/* Background music control. */
            /************************************************************
             * 11. Background Music Controller
             ************************************************************/
            function toggleMusic() {
                const musicIcon = document.getElementById("music-icon");
                const musicText = document.getElementById("music-text");

                synth.toggleMusic((isPlaying) => {
                    const btn = document.getElementById("btn-music");
                    if (isPlaying) {
                        if (musicIcon) musicIcon.textContent = "🎵";
                        if (musicText) musicText.textContent = "موسيقى نشطة";
                        if (btn) {
                            btn.classList.remove("bg-purple-300", "bg-purple-400");
                            btn.classList.add("bg-green-400");
                        }
                    } else {
                        if (musicIcon) musicIcon.textContent = "🔇";
                        if (musicText) musicText.textContent = "موسيقى هادئة";
                        if (btn) {
                            btn.classList.remove("bg-green-400");
                            btn.classList.add("bg-purple-300");
                        }
                    }
                });
            }

export { toggleMusic };
