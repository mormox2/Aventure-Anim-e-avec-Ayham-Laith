import { stampTemplates } from "./data.js";
import { showEncouragement } from "./feedback.js";
import { toggleModal } from "./modal-service.js";
import { saveState } from "./history.js";
import { synth } from "./synth.js";
import { state } from "./state.js";

let stampsGalleryRendered = false;

            function toggleStampsModal(show) {
                if (!stampsGalleryRendered) {
                    renderStampsGallery();
                    stampsGalleryRendered = true;
                }
                toggleModal("stamps-modal", "stamps-modal-content", show);
            }

            function renderStampsGallery() {
                const container = document.getElementById("stamps-gallery");
                container.replaceChildren();

                stampTemplates.forEach((stamp) => {
                    const btn = document.createElement("button");
                    btn.type = "button";
                    btn.className =
                        "bg-white border-3 border-slate-800 rounded-2xl p-1.5 hover:border-pink-500 cursor-pointer transition-all hover:scale-105 active:scale-95 shadow-cartoon-sm";
                    btn.innerHTML = stamp.svg;
                    btn.addEventListener("click", () => selectStamp(stamp.id));
                    container.appendChild(btn);
                });
            }

            function selectStamp(stampId) {
                const stamp = stampTemplates.find((s) => s.id === stampId);
                if (!stamp) return;

                state.activeStamp = stamp;
                synth.playPop();
                toggleStampsModal(false);
                showEncouragement(`⭐ اضغط على اللوحة لوضع ${stamp.name}! يمكنك تغيير حجمها بالفرشاة!`);
            }

            function placeStamp(clientX, clientY) {
                if (!state.activeStamp) return;

                const rect = state.canvas.getBoundingClientRect();
                const x = clientX - rect.left;
                const y = clientY - rect.top;
                const size = state.brushSize * 3; // Stamp size is proportional to brush

                const svgString = state.activeStamp.svg;
                const svgBlob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
                const url = URL.createObjectURL(svgBlob);

                const img = new Image();
                img.onload = () => {
                    state.ctx.drawImage(img, x - size / 2, y - size / 2, size, size);
                    URL.revokeObjectURL(url);
                    saveState();
                    synth.playPop();
                };
                img.src = url;
            }

            /************************************************************
             * Canvas Background Selector - 🎨
             ************************************************************/

export { toggleStampsModal, renderStampsGallery, selectStamp, placeStamp };
