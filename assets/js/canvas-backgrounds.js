import { showEncouragement, triggerConfetti } from "./feedback.js";
import { toggleGiveLife } from "./animations.js";
import { saveState, clearHistory } from "./history.js";
import { synth } from "./synth.js";
import { state } from "./state.js";

            function selectCanvasBg(bgId) {
                if (bgId === state.currentBg) return;

                state.currentBg = bgId;
                synth.playPop();

                // Update button highlights
                document.querySelectorAll(".bg-selector-btn").forEach((btn) => {
                    btn.classList.remove("ring-4", "ring-yellow-400");
                });
                const activeBtn = document.querySelector(`.bg-selector-btn[data-bg="${bgId}"]`);
                if (activeBtn) {
                    activeBtn.classList.add("ring-4", "ring-yellow-400");
                }

                // Redraw background, then snapshot the completed canvas state.
                drawCanvasBackground().then(saveState);

                showEncouragement(`🎨 تم تغيير خلفية اللوحة!`);
            }

            function drawCanvasBackground() {
                const rect = state.canvas.getBoundingClientRect();
                const layoutW = state.canvas.offsetWidth || rect.width || 700;
                const layoutH = state.canvas.offsetHeight || rect.height || 480;

                // Save current drawing content
                const tempDataUrl = state.canvas.toDataURL();

                // Draw background first, then restore drawing on top
                const dpr = window.devicePixelRatio || 1;
                state.ctx.save();
                state.ctx.setTransform(1, 0, 0, 1, 0, 0);

                // Clear with the selected background
                switch (state.currentBg) {
                    case "white":
                        state.ctx.fillStyle = "#FFFFFF";
                        break;
                    case "sky":
                        state.ctx.fillStyle = "#BAE6FD";
                        break;
                    case "grass":
                        state.ctx.fillStyle = "#A7F3D0";
                        break;
                    case "sunset":
                        const grad = state.ctx.createLinearGradient(0, 0, 0, layoutH * dpr);
                        grad.addColorStop(0, "#FED7AA");
                        grad.addColorStop(0.5, "#FDA4AF");
                        grad.addColorStop(1, "#C4B5FD");
                        state.ctx.fillStyle = grad;
                        break;
                    case "dark":
                        state.ctx.fillStyle = "#334155";
                        break;
                    default:
                        state.ctx.fillStyle = "#FFFFFF";
                }
                state.ctx.fillRect(0, 0, state.canvas.width, state.canvas.height);
                state.ctx.restore();

                // Redraw the saved image onto the new background before resolving.
                return new Promise((resolve) => {
                    const savedImg = new Image();
                    savedImg.onload = () => {
                        state.ctx.drawImage(savedImg, 0, 0, layoutW, layoutH);
                        resolve();
                    };
                    savedImg.onerror = resolve;
                    savedImg.src = tempDataUrl;
                });
            }

            function clearCanvas() {
                synth.playBoing();
                if (confirm("هل أنت متأكد أنك تريد مسح اللوحة بالكامل والبدء من جديد؟ 🧹")) {
                    // Use save/restore to clear the entire canvas regardless of transformation
                    state.ctx.save();
                    state.ctx.setTransform(1, 0, 0, 1, 0, 0);
                    state.ctx.clearRect(0, 0, state.canvas.width, state.canvas.height);
                    state.ctx.restore();

                    // Remove all stickers
                    const stickersContainer = document.getElementById("stickers-layer");
                    stickersContainer.replaceChildren();
                    state.activeSticker = null;

                    // Turn off Alive mode if active
                    if (state.isAlive) {
                        toggleGiveLife();
                    }
                    saveState();

                    triggerConfetti();
                    showEncouragement("بداية جديدة مرحة! 🌟🎨");
                }
            }

            // #11: saveState stores the canvas and sticker layer as one snapshot.

export { selectCanvasBg, drawCanvasBackground, clearCanvas };
