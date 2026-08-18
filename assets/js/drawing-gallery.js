import { showEncouragement } from "./feedback.js";
import { readStoredArray, writeStoredArray } from "./storage.js";
import { toggleModal } from "./modal-service.js";
import { saveState } from "./history.js";
import { synth } from "./synth.js";
import { state } from "./state.js";

            /************************************************************
             * 13. Gallery (localStorage saved drawings)
             ************************************************************/
            const GALLERY_KEY = "arsam_wa_harrik_gallery";

            function getSavedDrawings() {
                return readStoredArray(GALLERY_KEY);
            }

            function saveDrawingToGallery(thumbnailUrl) {
                const drawings = getSavedDrawings();
                const timestamp = Date.now();
                const label = `رسم ${new Date().toLocaleDateString("ar-SA")}`;

                drawings.push({ id: timestamp, label, dataUrl: thumbnailUrl, date: timestamp });

                // Keep only the most recent 12 drawings (limit storage)
                while (drawings.length > 12) {
                    drawings.shift();
                }

                try {
                    writeStoredArray(GALLERY_KEY, drawings);
                } catch (e) {
                    showEncouragement("مساحة التخزين ممتلئة! احذف بعض الرسومات القديمة.");
                }
            }

            function deleteDrawingFromGallery(drawId) {
                let drawings = getSavedDrawings();
                drawings = drawings.filter((d) => d.id !== drawId);
                try {
                    writeStoredArray(GALLERY_KEY, drawings);
                } catch (e) {}
                renderGalleryGrid();
            }

            function renderGalleryGrid() {
                const grid = document.getElementById("gallery-grid");
                const empty = document.getElementById("gallery-empty");
                const drawings = getSavedDrawings();

                grid.innerHTML = "";

                if (drawings.length === 0) {
                    empty.classList.remove("hidden");
                    return;
                }
                empty.classList.add("hidden");

                drawings
                    .slice()
                    .reverse()
                    .forEach((draw) => {
                        const card = document.createElement("div");
                        card.className =
                            "bg-white border-3 border-slate-800 rounded-2xl p-2 flex flex-col gap-1.5 shadow-cartoon-sm";

                        const img = document.createElement("img");
                        img.src = draw.dataUrl;
                        img.className =
                            "w-full aspect-square object-cover rounded-xl border-2 border-slate-600 cursor-pointer hover:opacity-80 transition-all";
                        img.addEventListener("click", () => loadDrawingFromGallery(draw.dataUrl));
                        card.appendChild(img);

                        const label = document.createElement("div");
                        label.className = "text-xs font-extrabold text-slate-700 text-center";
                        label.textContent = draw.label;
                        card.appendChild(label);

                        const delBtn = document.createElement("button");
                        delBtn.className =
                            "bubble-btn text-xs bg-red-300 hover:bg-red-200 text-slate-800 font-extrabold rounded-xl border-2 border-slate-800 shadow-cartoon-sm py-1 px-2";
                        delBtn.innerHTML = "🗑️ حذف";
                        delBtn.addEventListener("click", () => deleteDrawingFromGallery(draw.id));
                        card.appendChild(delBtn);

                        grid.appendChild(card);
                    });
            }

            function loadDrawingFromGallery(dataUrl) {
                synth.playBoing();
                if (confirm("هل تريد تحميل هذه الرسمة؟ سيتم حفظ الرسمة الحالية أولاً.")) {
                    // Save current drawing first
                    saveCurrentDrawingToGallery();

                    // Load the gallery drawing
                    const img = new Image();
                    img.onload = () => {
                        const layoutW = state.canvas.offsetWidth || 700;
                        const layoutH = state.canvas.offsetHeight || 480;
                        state.ctx.save();
                        state.ctx.setTransform(1, 0, 0, 1, 0, 0);
                        state.ctx.clearRect(0, 0, state.canvas.width, state.canvas.height);
                        state.ctx.restore();
                        state.ctx.drawImage(img, 0, 0, layoutW, layoutH);
                        saveState();
                        showEncouragement("🖼️ تم تحميل الرسمة من المعرض!");
                    };
                    img.src = dataUrl;
                }
            }

            function saveCurrentDrawingToGallery() {
                const dataUrl = state.canvas.toDataURL("image/jpeg", 0.7);
                saveDrawingToGallery(dataUrl);
            }

            function toggleGalleryModal(show) {
                if (show) renderGalleryGrid();
                toggleModal("gallery-modal", "gallery-modal-content", show);
            }


export { getSavedDrawings, saveDrawingToGallery, deleteDrawingFromGallery, renderGalleryGrid, loadDrawingFromGallery, saveCurrentDrawingToGallery, toggleGalleryModal };
