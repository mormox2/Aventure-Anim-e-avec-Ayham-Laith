import { stickersData } from "./data.js";
import { synth } from "./synth.js";
import { state } from "./state.js";

/* Sticker placement, selection, drag, resize and rotation. */
            /************************************************************
             * 7. Sticker Placement & Interactive Manipulation
             ************************************************************/
            function renderStickers(category) {
                const container = document.getElementById("stickers-gallery");
                container.replaceChildren();

                const filtered = stickersData.filter((st) => category === "all" || st.category === category);

                filtered.forEach((sticker) => {
                    const item = document.createElement("button");
                    item.type = "button";
                    item.setAttribute("aria-label", `إضافة ${sticker.name}`);
                    item.title = sticker.name;
                    item.className =
                        "bg-slate-50 border-2 md:border-3 border-slate-800 hover:border-pink-500 hover:bg-pink-50 rounded-2xl p-2 flex items-center justify-center cursor-pointer transition-all hover:scale-110 active:scale-95 shadow-cartoon-sm";
                    item.innerHTML = sticker.svg;
                    item.addEventListener("click", () => addStickerToCanvas(sticker.id));
                    container.appendChild(item);
                });
            }

            function filterStickers(category) {
                synth.playClick();
                // Reset active tab button colors
                const tabStyles = {
                    all: {
                        active: "bubble-btn py-1.5 lg:py-2 px-1 rounded-xl border-2 border-slate-800 shadow-none flex items-center justify-center gap-1.5 font-black text-center text-xs lg:text-[13px] bg-amber-400 text-slate-900 ring-2 ring-yellow-300 scale-105",
                        inactive: "bubble-btn py-1.5 lg:py-2 px-1 rounded-xl border-2 border-slate-800 shadow-cartoon-sm flex items-center justify-center gap-1.5 font-black text-center text-xs lg:text-[13px] bg-amber-100 text-slate-800 hover:bg-amber-200"
                    },
                    eyes: {
                        active: "bubble-btn py-1.5 lg:py-2 px-1 rounded-xl border-2 border-slate-800 shadow-none flex items-center justify-center gap-1.5 font-black text-center text-xs lg:text-[13px] bg-sky-400 text-slate-900 ring-2 ring-sky-300 scale-105",
                        inactive: "bubble-btn py-1.5 lg:py-2 px-1 rounded-xl border-2 border-slate-800 shadow-cartoon-sm flex items-center justify-center gap-1.5 font-black text-center text-xs lg:text-[13px] bg-sky-100 text-slate-800 hover:bg-sky-200"
                    },
                    hats: {
                        active: "bubble-btn py-1.5 lg:py-2 px-1 rounded-xl border-2 border-slate-800 shadow-none flex items-center justify-center gap-1.5 font-black text-center text-xs lg:text-[13px] bg-purple-400 text-white ring-2 ring-purple-300 scale-105",
                        inactive: "bubble-btn py-1.5 lg:py-2 px-1 rounded-xl border-2 border-slate-800 shadow-cartoon-sm flex items-center justify-center gap-1.5 font-black text-center text-xs lg:text-[13px] bg-purple-100 text-slate-800 hover:bg-purple-200"
                    },
                    faces: {
                        active: "bubble-btn py-1.5 lg:py-2 px-1 rounded-xl border-2 border-slate-800 shadow-none flex items-center justify-center gap-1.5 font-black text-center text-xs lg:text-[13px] bg-emerald-400 text-slate-900 ring-2 ring-emerald-300 scale-105",
                        inactive: "bubble-btn py-1.5 lg:py-2 px-1 rounded-xl border-2 border-slate-800 shadow-cartoon-sm flex items-center justify-center gap-1.5 font-black text-center text-xs lg:text-[13px] bg-emerald-100 text-slate-800 hover:bg-emerald-200"
                    }
                };

                Object.keys(tabStyles).forEach((t) => {
                    const btn = document.getElementById(`tab-${t}`);
                    if (!btn) return;
                    if (t === category) {
                        btn.className = tabStyles[t].active;
                    } else {
                        btn.className = tabStyles[t].inactive;
                    }
                });
                renderStickers(category);
            }

            function addStickerToCanvas(stickerId, options = {}) {
                const { silent = false, savedState = null, recordHistory = true } = options;
                const stickerInfo = stickersData.find((s) => s.id === stickerId);
                if (!stickerInfo) {
                    synth.playPop();
                    return;
                }

                // Play interactive Premium Sound Effects based on specific Sticker Category
                if (!silent) {
                    if (stickerInfo.category === "hats" || stickerInfo.category === "magic") {
                        synth.playMagicChime();
                    } else if (stickerInfo.category === "eyes") {
                        synth.playFunnyGlissando();
                    } else if (stickerInfo.category === "dino" || stickerInfo.category === "space") {
                        synth.playMiniGrowl();
                    } else {
                        synth.playPop();
                    }
                }

                const layer = document.getElementById("stickers-layer");
                const uniqueId = savedState?.id || `sticker-${state.stickerIdCounter++}`;
                const numericId = Number.parseInt(uniqueId.replace("sticker-", ""), 10);
                if (Number.isFinite(numericId)) {
                    state.stickerIdCounter = Math.max(state.stickerIdCounter, numericId + 1);
                }

                // Create new sticker container
                const stickerDiv = document.createElement("div");
                stickerDiv.id = uniqueId;
                stickerDiv.className =
                    "sticker-element absolute select-none cursor-grab active:cursor-grabbing pointer-events-auto group touch-none";
                stickerDiv.dataset.category = savedState?.category ?? stickerInfo.category;
                stickerDiv.dataset.stickerId = savedState?.stickerId ?? stickerInfo.id;

                // Default dimensions & transformations (center on the canvas itself)
                const canvasRect = state.canvas.getBoundingClientRect();
                const defaultLeft = (canvasRect.width - 100) / 2;
                const defaultTop = (canvasRect.height - 100) / 2;
                const width = savedState?.width ?? "100px";
                const height = savedState?.height ?? "100px";
                const left = savedState?.left ?? `${defaultLeft}px`;
                const top = savedState?.top ?? `${defaultTop}px`;
                const angle = savedState?.angle ?? "0";
                const scale = savedState?.scale ?? "1";
                stickerDiv.style.width = width;
                stickerDiv.style.height = height;
                stickerDiv.style.left = left;
                stickerDiv.style.top = top;
                stickerDiv.dataset.angle = angle;
                stickerDiv.dataset.scale = scale;
                stickerDiv.style.transform = `rotate(${angle}deg) scale(${scale})`;

                // Inner content (The SVG)
                const content = document.createElement("div");
                content.className =
                    "sticker-content w-full h-full pointer-events-none flex items-center justify-center";
                content.innerHTML = stickerInfo.svg;
                stickerDiv.appendChild(content);

                // Create Controls UI (Visible when active)
                const controls = document.createElement("div");
                controls.className =
                    "sticker-controls hidden absolute -inset-3.5 border-2 border-dashed border-pink-500 rounded-2xl pointer-events-none group-[.active]:block";

                // 1. Delete Button (top-right)
                const deleteBtn = document.createElement("button");
                deleteBtn.className =
                    "absolute -top-4 -right-4 bg-rose-500 hover:bg-rose-400 text-white rounded-full w-8 h-8 flex items-center justify-center pointer-events-auto shadow-cartoon-sm border-2 border-slate-800 hover:scale-110 active:scale-95 transition-all text-xs";
                deleteBtn.textContent = "❌";
                deleteBtn.title = "حذف الملصق";
                deleteBtn.addEventListener("click", (e) => {
                    e.stopPropagation();
                    synth.playBoing();
                    stickerDiv.remove();
                    state.activeSticker = null;
                    notifyStickerHistoryChange();
                });
                controls.appendChild(deleteBtn);

                // 2. Rotate Button (top-left)
                const rotateBtn = document.createElement("button");
                rotateBtn.className =
                    "absolute -top-4 -left-4 bg-yellow-400 hover:bg-yellow-300 text-slate-800 rounded-full w-8 h-8 flex items-center justify-center pointer-events-auto shadow-cartoon-sm border-2 border-slate-800 hover:scale-110 active:scale-95 transition-all text-sm";
                rotateBtn.textContent = "🔄";
                rotateBtn.title = "تدوير الملصق";
                // Pointer down for rotation
                rotateBtn.addEventListener("pointerdown", (e) => {
                    e.stopPropagation();
                    setupStickerPointerData(e, stickerDiv);
                    state.isRotating = true;
                });
                controls.appendChild(rotateBtn);

                // 3. Scale/Resize Button (bottom-right)
                const resizeBtn = document.createElement("button");
                resizeBtn.className =
                    "absolute -bottom-4 -right-4 bg-cyan-400 hover:bg-cyan-300 text-slate-800 rounded-full w-8 h-8 flex items-center justify-center pointer-events-auto shadow-cartoon-sm border-2 border-slate-800 hover:scale-110 active:scale-95 transition-all text-sm";
                resizeBtn.textContent = "📐";
                resizeBtn.title = "تكبير/تصغير";
                // Pointer down for resizing
                resizeBtn.addEventListener("pointerdown", (e) => {
                    e.stopPropagation();
                    setupStickerPointerData(e, stickerDiv);
                    state.isResizing = true;
                });
                controls.appendChild(resizeBtn);

                stickerDiv.appendChild(controls);

                // Pointer down for dragging the whole sticker
                stickerDiv.addEventListener("pointerdown", (e) => {
                    // If clicked control button, ignore dragging
                    if (e.target.closest("button")) return;

                    e.stopPropagation();
                    const isAlreadyActive = stickerDiv.classList.contains("active");

                    deselectAllStickers();

                    state.activeSticker = stickerDiv;
                    stickerDiv.classList.add("active");

                    setupStickerPointerData(e, stickerDiv);
                    state.isDragging = true;

                    // Play specific category sound on selection if it wasn't already active
                    if (!isAlreadyActive) {
                        const cat = stickerDiv.dataset.category;
                        if (cat === "hats" || cat === "magic") {
                            synth.playMagicChime();
                        } else if (cat === "eyes") {
                            synth.playFunnyGlissando();
                        } else if (cat === "dino" || cat === "space") {
                            synth.playMiniGrowl();
                        } else {
                            synth.playPop();
                        }
                    }
                });

                layer.appendChild(stickerDiv);

                // Auto-select the newly added sticker
                deselectAllStickers();
                state.activeSticker = stickerDiv;
                stickerDiv.classList.add("active");
                if (recordHistory) notifyStickerHistoryChange();
            }

            function captureStickerState() {
                return Array.from(document.querySelectorAll(".sticker-element")).map((sticker) => ({
                    id: sticker.id,
                    stickerId: sticker.dataset.stickerId,
                    category: sticker.dataset.category,
                    width: sticker.style.width,
                    height: sticker.style.height,
                    left: sticker.style.left,
                    top: sticker.style.top,
                    angle: sticker.dataset.angle || "0",
                    scale: sticker.dataset.scale || "1",
                }));
            }

            function restoreStickerState(stickers = []) {
                const layer = document.getElementById("stickers-layer");
                if (!layer) return;
                layer.replaceChildren();
                state.activeSticker = null;
                stickers.forEach((savedState) => {
                    addStickerToCanvas(savedState.stickerId, {
                        silent: true,
                        savedState,
                        recordHistory: false,
                    });
                });
                deselectAllStickers();
            }

            function notifyStickerHistoryChange() {
                window.dispatchEvent(new CustomEvent("sticker-history-change"));
            }

            function deselectAllStickers() {
                document.querySelectorAll(".sticker-element").forEach((st) => {
                    st.classList.remove("active");
                });
                state.activeSticker = null;
            }

            // Helper to calculate dimensions & bounds before starting drag/rotate/scale
            function setupStickerPointerData(e, sticker) {
                const rect = sticker.getBoundingClientRect();
                const canvasRect = state.canvas.getBoundingClientRect();

                state.initialPointerX = e.clientX;
                state.initialPointerY = e.clientY;

                state.stickerStartLeft = rect.left - canvasRect.left;
                state.stickerStartTop = rect.top - canvasRect.top;

                state.stickerStartWidth = rect.width;
                state.stickerStartHeight = rect.height;

                state.stickerStartAngle = parseFloat(sticker.dataset.angle) || 0;
                state.stickerStartScale = parseFloat(sticker.dataset.scale) || 1;

                // Calculate Center point of the sticker relative to window
                state.stickerCenter = {
                    x: rect.left + rect.width / 2,
                    y: rect.top + rect.height / 2,
                };
            }

            let stickerInteractionChanged = false;
            let pendingStickerEvent = null;
            let stickerRafId = null;

            function applyStickerPointerMove(e) {
                if (!state.activeSticker) return;

                if (state.isDragging) {
                    const dx = e.clientX - state.initialPointerX;
                    const dy = e.clientY - state.initialPointerY;

                    let newLeft = state.stickerStartLeft + dx;
                    let newTop = state.stickerStartTop + dy;

                    // Keep stickers within bounds of the canvas
                    const cRect = state.canvas ? state.canvas.getBoundingClientRect() : { width: 800, height: 600 };
                    const padding = 20;
                    newLeft = Math.max(-padding, Math.min(newLeft, cRect.width - state.activeSticker.clientWidth + padding));
                    newTop = Math.max(-padding, Math.min(newTop, cRect.height - state.activeSticker.clientHeight + padding));

                    state.activeSticker.style.left = `${newLeft}px`;
                    state.activeSticker.style.top = `${newTop}px`;
                    stickerInteractionChanged = true;
                } else if (state.isResizing) {
                    const currentDist = Math.hypot(e.clientX - state.stickerCenter.x, e.clientY - state.stickerCenter.y);
                    const startDist = Math.hypot(state.initialPointerX - state.stickerCenter.x, state.initialPointerY - state.stickerCenter.y);

                    if (startDist > 5) {
                        let newScale = state.stickerStartScale * (currentDist / startDist);
                        newScale = Math.max(0.4, Math.min(newScale, 3.5)); // limit sizes for kids

                        state.activeSticker.dataset.scale = newScale;
                        stickerInteractionChanged = true;
                        const currentAngle = state.activeSticker.dataset.angle || 0;
                        state.activeSticker.style.transform = `rotate(${currentAngle}deg) scale(${newScale})`;
                    }
                } else if (state.isRotating) {
                    const currentRad = Math.atan2(e.clientY - state.stickerCenter.y, e.clientX - state.stickerCenter.x);
                    const startRad = Math.atan2(state.initialPointerY - state.stickerCenter.y, state.initialPointerX - state.stickerCenter.x);

                    const deltaAngle = (currentRad - startRad) * (180 / Math.PI);
                    let newAngle = (state.stickerStartAngle + deltaAngle) % 360;

                    state.activeSticker.dataset.angle = newAngle;
                    stickerInteractionChanged = true;
                    const currentScale = state.activeSticker.dataset.scale || 1;
                    state.activeSticker.style.transform = `rotate(${newAngle}deg) scale(${currentScale})`;
                }
            }

            // Combined Global Pointer Move event to handle dragging, resizing, and rotating
            window.addEventListener("pointermove", (e) => {
                if (!state.activeSticker || (!state.isDragging && !state.isResizing && !state.isRotating)) return;
                pendingStickerEvent = e;
                if (stickerRafId === null) {
                    stickerRafId = requestAnimationFrame(() => {
                        stickerRafId = null;
                        if (pendingStickerEvent) {
                            applyStickerPointerMove(pendingStickerEvent);
                        }
                    });
                }
            });

            window.addEventListener("pointerup", () => {
                if (stickerRafId !== null) {
                    cancelAnimationFrame(stickerRafId);
                    stickerRafId = null;
                }
                if (pendingStickerEvent) {
                    applyStickerPointerMove(pendingStickerEvent);
                    pendingStickerEvent = null;
                }
                const shouldSave = stickerInteractionChanged;
                state.isDragging = false;
                state.isResizing = false;
                state.isRotating = false;
                stickerInteractionChanged = false;
                if (shouldSave) notifyStickerHistoryChange();
            });

export { renderStickers, filterStickers, addStickerToCanvas, captureStickerState, restoreStickerState, deselectAllStickers, setupStickerPointerData };
