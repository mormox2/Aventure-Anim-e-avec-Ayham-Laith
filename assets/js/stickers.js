/* Sticker placement, selection, drag, resize and rotation. */
            /************************************************************
             * 7. Sticker Placement & Interactive Manipulation
             ************************************************************/
            function renderStickers(category) {
                const container = document.getElementById("stickers-gallery");
                container.innerHTML = "";

                const filtered = stickersData.filter((st) => category === "all" || st.category === category);

                filtered.forEach((sticker) => {
                    const item = document.createElement("div");
                    item.className =
                        "bg-slate-50 border-2 md:border-3 border-slate-800 hover:border-pink-500 hover:bg-pink-50 rounded-2xl p-2 flex items-center justify-center cursor-pointer transition-all hover:scale-110 active:scale-95 shadow-cartoon-sm";
                    item.innerHTML = sticker.svg;
                    item.onclick = () => addStickerToCanvas(sticker.id);
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

            function addStickerToCanvas(stickerId) {
                const stickerInfo = stickersData.find((s) => s.id === stickerId);
                if (!stickerInfo) {
                    synth.playPop();
                    return;
                }

                // Play interactive Premium Sound Effects based on specific Sticker Category
                if (stickerInfo.category === "hats" || stickerInfo.category === "magic") {
                    synth.playMagicChime();
                } else if (stickerInfo.category === "eyes") {
                    synth.playFunnyGlissando();
                } else if (stickerInfo.category === "dino" || stickerInfo.category === "space") {
                    synth.playMiniGrowl();
                } else {
                    synth.playPop();
                }

                const layer = document.getElementById("stickers-layer");
                const uniqueId = `sticker-${stickerIdCounter++}`;

                // Create new sticker container
                const stickerDiv = document.createElement("div");
                stickerDiv.id = uniqueId;
                stickerDiv.className =
                    "sticker-element absolute select-none cursor-grab active:cursor-grabbing pointer-events-auto group touch-none";
                stickerDiv.dataset.category = stickerInfo.category;

                // Default dimensions & transformations (center on the canvas itself)
                const canvasRect = canvas.getBoundingClientRect();
                const startLeft = (canvasRect.width - 100) / 2;
                const startTop = (canvasRect.height - 100) / 2;
                stickerDiv.style.width = "100px";
                stickerDiv.style.height = "100px";
                stickerDiv.style.left = `${startLeft}px`;
                stickerDiv.style.top = `${startTop}px`;
                stickerDiv.dataset.angle = "0";
                stickerDiv.dataset.scale = "1";
                stickerDiv.style.transform = "rotate(0deg) scale(1)";

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
                deleteBtn.innerHTML = "❌";
                deleteBtn.title = "حذف الملصق";
                deleteBtn.onclick = (e) => {
                    e.stopPropagation();
                    synth.playBoing();
                    stickerDiv.remove();
                    activeSticker = null;
                };
                controls.appendChild(deleteBtn);

                // 2. Rotate Button (top-left)
                const rotateBtn = document.createElement("button");
                rotateBtn.className =
                    "absolute -top-4 -left-4 bg-yellow-400 hover:bg-yellow-300 text-slate-800 rounded-full w-8 h-8 flex items-center justify-center pointer-events-auto shadow-cartoon-sm border-2 border-slate-800 hover:scale-110 active:scale-95 transition-all text-sm";
                rotateBtn.innerHTML = "🔄";
                rotateBtn.title = "تدوير الملصق";
                // Pointer down for rotation
                rotateBtn.onpointerdown = (e) => {
                    e.stopPropagation();
                    setupStickerPointerData(e, stickerDiv);
                    isRotating = true;
                };
                controls.appendChild(rotateBtn);

                // 3. Scale/Resize Button (bottom-right)
                const resizeBtn = document.createElement("button");
                resizeBtn.className =
                    "absolute -bottom-4 -right-4 bg-cyan-400 hover:bg-cyan-300 text-slate-800 rounded-full w-8 h-8 flex items-center justify-center pointer-events-auto shadow-cartoon-sm border-2 border-slate-800 hover:scale-110 active:scale-95 transition-all text-sm";
                resizeBtn.innerHTML = "📐";
                resizeBtn.title = "تكبير/تصغير";
                // Pointer down for resizing
                resizeBtn.onpointerdown = (e) => {
                    e.stopPropagation();
                    setupStickerPointerData(e, stickerDiv);
                    isResizing = true;
                };
                controls.appendChild(resizeBtn);

                stickerDiv.appendChild(controls);

                // Pointer down for dragging the whole sticker
                stickerDiv.onpointerdown = (e) => {
                    // If clicked control button, ignore dragging
                    if (e.target.closest("button")) return;

                    e.stopPropagation();
                    const isAlreadyActive = stickerDiv.classList.contains("active");

                    deselectAllStickers();

                    activeSticker = stickerDiv;
                    stickerDiv.classList.add("active");

                    setupStickerPointerData(e, stickerDiv);
                    isDragging = true;

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
                };

                layer.appendChild(stickerDiv);

                // Auto-select the newly added sticker
                deselectAllStickers();
                activeSticker = stickerDiv;
                stickerDiv.classList.add("active");
            }

            function deselectAllStickers() {
                document.querySelectorAll(".sticker-element").forEach((st) => {
                    st.classList.remove("active");
                });
                activeSticker = null;
            }

            // Helper to calculate dimensions & bounds before starting drag/rotate/scale
            function setupStickerPointerData(e, sticker) {
                const rect = sticker.getBoundingClientRect();
                const canvasRect = canvas.getBoundingClientRect();

                initialPointerX = e.clientX;
                initialPointerY = e.clientY;

                stickerStartLeft = rect.left - canvasRect.left;
                stickerStartTop = rect.top - canvasRect.top;

                stickerStartWidth = rect.width;
                stickerStartHeight = rect.height;

                stickerStartAngle = parseFloat(sticker.dataset.angle) || 0;
                stickerStartScale = parseFloat(sticker.dataset.scale) || 1;

                // Calculate Center point of the sticker relative to window
                stickerCenter = {
                    x: rect.left + rect.width / 2,
                    y: rect.top + rect.height / 2,
                };
            }

            // Combined Global Pointer Move event to handle dragging, resizing, and rotating
            window.addEventListener("pointermove", (e) => {
                if (!activeSticker) return;

                if (isDragging) {
                    const dx = e.clientX - initialPointerX;
                    const dy = e.clientY - initialPointerY;

                    let newLeft = stickerStartLeft + dx;
                    let newTop = stickerStartTop + dy;

                    // Keep stickers within bounds of the canvas
                    const cRect = canvas.getBoundingClientRect();
                    const padding = 20;
                    newLeft = Math.max(-padding, Math.min(newLeft, cRect.width - activeSticker.clientWidth + padding));
                    newTop = Math.max(-padding, Math.min(newTop, cRect.height - activeSticker.clientHeight + padding));

                    activeSticker.style.left = `${newLeft}px`;
                    activeSticker.style.top = `${newTop}px`;
                } else if (isResizing) {
                    const currentDist = Math.hypot(e.clientX - stickerCenter.x, e.clientY - stickerCenter.y);
                    const startDist = Math.hypot(initialPointerX - stickerCenter.x, initialPointerY - stickerCenter.y);

                    if (startDist > 5) {
                        let newScale = stickerStartScale * (currentDist / startDist);
                        newScale = Math.max(0.4, Math.min(newScale, 3.5)); // limit sizes for kids

                        activeSticker.dataset.scale = newScale;
                        const currentAngle = activeSticker.dataset.angle || 0;
                        activeSticker.style.transform = `rotate(${currentAngle}deg) scale(${newScale})`;
                    }
                } else if (isRotating) {
                    const currentRad = Math.atan2(e.clientY - stickerCenter.y, e.clientX - stickerCenter.x);
                    const startRad = Math.atan2(initialPointerY - stickerCenter.y, initialPointerX - stickerCenter.x);

                    const deltaAngle = (currentRad - startRad) * (180 / Math.PI);
                    let newAngle = (stickerStartAngle + deltaAngle) % 360;

                    activeSticker.dataset.angle = newAngle;
                    const currentScale = activeSticker.dataset.scale || 1;
                    activeSticker.style.transform = `rotate(${newAngle}deg) scale(${currentScale})`;
                }
            });

            window.addEventListener("pointerup", () => {
                isDragging = false;
                isResizing = false;
                isRotating = false;
            });



/* ESM exports */
export { renderStickers, filterStickers, addStickerToCanvas, deselectAllStickers, setupStickerPointerData };
