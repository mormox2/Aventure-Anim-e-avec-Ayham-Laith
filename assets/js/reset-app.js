import { stopAllAnimations, toggleTheme } from "./animations.js";
import { toggleMusic } from "./audio-controls.js";
import { showEncouragement, triggerConfetti } from "./feedback.js";
import { clearHistory, saveState } from "./history.js";
import { renderColors } from "./canvas-tools.js";
import { synth } from "./synth.js";
import { state } from "./state.js";
import { t } from "./i18n.js";

            function resetApp() {
                synth.playTada();
                if (confirm(t("modal.reset.confirm", "Voulez-vous effacer la toile, les stickers et tout réinitialiser ? 🥳"))) {
                    state.ctx.save();
                    state.ctx.setTransform(1, 0, 0, 1, 0, 0);
                    state.ctx.clearRect(0, 0, state.canvas.width, state.canvas.height);
                    state.ctx.restore();
                    document.getElementById("stickers-layer").replaceChildren();

                    // Reset defaults
                    state.activeColor = "#FF4D6D";
                    state.isRainbowBrush = false;
                    state.isEraser = false;
                    state.brushSize = 12;
                    document.getElementById("brush-size").value = 12;
                    document.getElementById("brush-size-val").textContent = 12;
                    // Reset brush preview size & color
                    const preview = document.getElementById("brush-preview");
                    preview.style.width = "12px";
                    preview.style.height = "12px";
                    preview.style.background = "#FF4D6D";
                    // Reset eraser button
                    document.getElementById("btn-eraser").classList.remove("bg-yellow-400", "scale-105");
                    document.getElementById("btn-eraser").classList.add("bg-pink-300");

                    // Reset all animations and live states cleanly using stopAllAnimations
                    stopAllAnimations();

                    // Reset theme & music
                    if (state.currentTheme === "night") {
                        toggleTheme();
                    }
                    if (synth.isPlayingMusic) {
                        toggleMusic();
                    }

                    clearHistory();
                    state.stickerIdCounter = 0;
                    saveState();

                    renderColors();
                    triggerConfetti();
                    showEncouragement(t("modal.reset.success", "Votre toile magique a été réinitialisée ! Prêt pour un nouveau chef-d'œuvre ? 🚀"));
                }
            }


export { resetApp };
