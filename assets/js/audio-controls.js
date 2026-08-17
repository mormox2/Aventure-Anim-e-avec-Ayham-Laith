import { state } from "./state.js";
import * as services from "./services.js";

/* Background music control. */
            /************************************************************
             * 11. Background Music Controller
             ************************************************************/
            function toggleMusic() {
                const musicIcon = document.getElementById("music-icon");
                const musicText = document.getElementById("music-text");

                services.synth.toggleMusic((isPlaying) => {
                    if (isPlaying) {
                        musicIcon.textContent = "🎵";
                        musicText.textContent = "موسيقى نشطة";
                        document.getElementById("btn-music").classList.remove("bg-purple-400");
                        document.getElementById("btn-music").classList.add("bg-green-400");
                    } else {
                        musicIcon.textContent = "🔇";
                        musicText.textContent = "موسيقى هادئة";
                        document.getElementById("btn-music").classList.remove("bg-green-400");
                        document.getElementById("btn-music").classList.add("bg-purple-400");
                    }
                });
            }

export { toggleMusic };
