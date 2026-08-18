import { stopAllAnimations } from "./animations.js";
import { colors, stampTemplates } from "./data.js";
import { showEncouragement, triggerConfetti } from "./settings.js";
import { synth } from "./synth.js";
import { speakArabic } from "./voice-duo.js";
import { state } from "./state.js";
import { captureStickerState, restoreStickerState } from "./stickers.js";

/* Canvas tools, history, flood fill, backgrounds, dialogs and mobile tools. */
            /************************************************************
             * 5. Color Palette & Brush Management
             ************************************************************/
            function renderColors() {
                const palette = document.getElementById("color-palette");
                palette.innerHTML = "";

                colors.forEach((color) => {
                    const btn = document.createElement("button");
                    btn.type = "button";
                    btn.title = color.name;
                    btn.setAttribute("aria-label", `اختيار اللون ${color.name}`);
                    btn.addEventListener("click", () => selectColor(color.val, btn));
                    btn.className = `w-9 h-9 lg:w-10 lg:h-10 rounded-full border-3 border-slate-800 shadow-cartoon-sm hover:scale-110 active:scale-95 bubble-btn flex items-center justify-center relative overflow-hidden transition-all ${color.bgClass}`;

                    // Active indicator dot
                    const dot = document.createElement("div");
                    dot.className =
                        "w-2.5 h-2.5 bg-white rounded-full border border-slate-800 opacity-0 transition-opacity active-dot";
                    btn.appendChild(dot);

                    // Set default active color button
                    if (color.val === state.activeColor) {
                        dot.classList.remove("opacity-0");
                        dot.classList.add("opacity-100");
                        btn.classList.add("scale-110");
                    }

                    palette.appendChild(btn);
                });
            }

            function selectColor(colorValue, buttonEl) {
                synth.playPop();
                state.isEraser = false;

                // Update state
                if (colorValue === "rainbow") {
                    state.isRainbowBrush = true;
                } else {
                    state.isRainbowBrush = false;
                    state.activeColor = colorValue;
                }

                // Reset eraser style
                document.getElementById("btn-eraser").classList.remove("bg-yellow-400", "scale-105");
                document.getElementById("btn-eraser").classList.add("bg-pink-300");

                // Update active indicators
                document.querySelectorAll("#color-palette button").forEach((b) => {
                    b.classList.remove("scale-110");
                    b.querySelector(".active-dot").classList.remove("opacity-100");
                    b.querySelector(".active-dot").classList.add("opacity-0");
                });

                buttonEl.classList.add("scale-110");
                buttonEl.querySelector(".active-dot").classList.remove("opacity-0");
                buttonEl.querySelector(".active-dot").classList.add("opacity-100");

                // Update brush preview
                const preview = document.getElementById("brush-preview");
                if (state.isRainbowBrush) {
                    preview.style.background = "linear-gradient(to right, red, orange, yellow, green, blue, violet)";
                } else {
                    preview.style.background = state.activeColor;
                }
            }

            function selectEraser() {
                synth.playPop();
                state.isEraser = true;
                state.isRainbowBrush = false;
                state.isSprayMode = false;
                state.isFillMode = false;

                // Reset spray button
                const sprayBtn = document.getElementById("btn-spray");
                if (sprayBtn) { sprayBtn.classList.remove("bg-yellow-400","scale-105"); sprayBtn.classList.add("bg-emerald-300"); }
                // Reset fill button
                const fillBtn = document.getElementById("btn-fill");
                if (fillBtn) { fillBtn.classList.remove("bg-yellow-400","scale-105"); fillBtn.classList.add("bg-purple-300"); }
                // Update Eraser Button look
                const eraserBtn = document.getElementById("btn-eraser");
                eraserBtn.classList.remove("bg-pink-300");
                eraserBtn.classList.add("bg-yellow-400", "scale-105");

                // De-select colors from palette
                document.querySelectorAll("#color-palette button").forEach((b) => {
                    b.classList.remove("scale-110");
                    b.querySelector(".active-dot").classList.remove("opacity-100");
                    b.querySelector(".active-dot").classList.add("opacity-0");
                });

                // Update brush preview to checkered pattern or white representing eraser
                document.getElementById("brush-preview").style.background = "#FFFFFF";
            }

            /************************************************************
             * 6. Canvas Drawing Core
             ************************************************************/
            function startDrawing(e) {
                // Instantly stop animations to allow stable, accurate drawing coordinates
                stopAllAnimations();

                // Prevent scrolling or zooming on iOS touch devices while drawing
                if (e.pointerType === "touch") {
                    e.preventDefault();
                }

                // Get relative position
                const rect = state.canvas.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const clickY = e.clientY - rect.top;

                // NEW: If Fill mode is active, perform flood fill and return
                if (state.isFillMode) {
                    if (performFloodFill(clickX, clickY)) saveState();
                    return;
                }

                // NEW: If a stamp is selected, place it
                if (state.activeStamp) {
                    placeStamp(e.clientX, e.clientY);
                    state.activeStamp = null;
                    return;
                }

                state.isDrawing = true;
                state.lastX = clickX;
                state.lastY = clickY;

                // Spawn magic pointer particles
                spawnParticles(clickX, clickY);

                // Play soft drawing start sound
                synth.playClick();
            }

            function draw(e) {
                if (!state.isDrawing) return;
                if (e.pointerType === "touch") {
                    e.preventDefault();
                }

                const rect = state.canvas.getBoundingClientRect();
                const currentX = e.clientX - rect.left;
                const currentY = e.clientY - rect.top;

                // Spawn magic pointer particles as we draw
                spawnParticles(currentX, currentY);

                // #7: Spray mode — no stroke, scatter dots
                if (state.isSprayMode && !state.isEraser) {
                    drawSpray(currentX, currentY);
                    state.lastX = currentX;
                    state.lastY = currentY;
                    if (Math.random() < 0.005) showEncouragement();
                    return;
                }

                state.ctx.beginPath();
                state.ctx.moveTo(state.lastX, state.lastY);
                state.ctx.lineTo(currentX, currentY);

                // Line characteristics
                state.ctx.lineCap = "round";
                state.ctx.lineJoin = "round";
                state.ctx.lineWidth = state.brushSize;

                if (state.isEraser) {
                    // Eraser clears drawings with transparency
                    state.ctx.globalCompositeOperation = "destination-out";
                    state.ctx.strokeStyle = "rgba(0,0,0,1)";
                    state.ctx.shadowBlur = 0; // Reset glow for eraser
                } else {
                    // Normal drawing
                    state.ctx.globalCompositeOperation = "source-over";
                    if (state.isRainbowBrush) {
                        state.rainbowHue = (state.rainbowHue + 2) % 360;
                        state.ctx.strokeStyle = `hsl(${state.rainbowHue}, 100%, 55%)`;
                    } else {
                        state.ctx.strokeStyle = state.activeColor;
                    }

                    // Apply magic glow in night mode
                    if (state.currentTheme === "night") {
                        state.ctx.shadowBlur = 15;
                        state.ctx.shadowColor = state.ctx.strokeStyle;
                    } else {
                        state.ctx.shadowBlur = 0;
                    }
                }

                state.ctx.stroke();

                // Mirror mode: mirror horizontally
                if (state.isMirrorMode) {
                    const layoutW = state.canvas.offsetWidth || 700;
                    const mirrorLastX = layoutW - state.lastX;
                    const mirrorCurX = layoutW - currentX;
                    // Save and restore context to avoid affecting main stroke style
                    state.ctx.save();
                    state.ctx.lineCap = "round";
                    state.ctx.lineJoin = "round";
                    state.ctx.lineWidth = state.brushSize;
                    if (state.isEraser) {
                        state.ctx.globalCompositeOperation = "destination-out";
                        state.ctx.strokeStyle = "rgba(0,0,0,1)";
                        state.ctx.shadowBlur = 0;
                    } else {
                        state.ctx.globalCompositeOperation = "source-over";
                        if (state.isRainbowBrush) {
                            // Recreate rainbow hue for mirror
                            state.ctx.strokeStyle = `hsl(${(state.rainbowHue + 2) % 360}, 100%, 55%)`;
                        } else {
                            state.ctx.strokeStyle = state.activeColor;
                        }

                        // Apply magic glow in night mode
                        if (state.currentTheme === "night") {
                            state.ctx.shadowBlur = 15;
                            state.ctx.shadowColor = state.ctx.strokeStyle;
                        } else {
                            state.ctx.shadowBlur = 0;
                        }
                    }
                    state.ctx.beginPath();
                    state.ctx.moveTo(mirrorLastX, state.lastY);
                    state.ctx.lineTo(mirrorCurX, currentY);
                    state.ctx.stroke();
                    state.ctx.restore();
                }

                state.lastX = currentX;
                state.lastY = currentY;

                // Periodic check to trigger motivational speech bubble while drawing
                if (Math.random() < 0.005) {
                    showEncouragement();
                }
            }

            // #7: Spray paint draw (called inside draw() for spray mode)
            function drawSpray(x, y) {
                const density = 35;
                const radius = state.brushSize * 2;
                state.ctx.globalCompositeOperation = "source-over";
                state.ctx.fillStyle = state.isRainbowBrush ? `hsl(${state.rainbowHue}, 100%, 55%)` : state.activeColor;
                
                // Add phosphorescent glow in night mode for spray
                if (state.currentTheme === "night") {
                    state.ctx.shadowBlur = 10;
                    state.ctx.shadowColor = state.ctx.fillStyle;
                } else {
                    state.ctx.shadowBlur = 0;
                }

                for (let i = 0; i < density; i++) {
                    const angle = Math.random() * Math.PI * 2;
                    const r = Math.random() * radius;
                    state.ctx.beginPath();
                    state.ctx.arc(x + r * Math.cos(angle), y + r * Math.sin(angle), 1, 0, Math.PI * 2);
                    state.ctx.fill();
                }
                if (state.isMirrorMode) {
                    const layoutW = state.canvas.offsetWidth || 700;
                    state.ctx.fillStyle = state.isRainbowBrush ? `hsl(${(state.rainbowHue+1)%360}, 100%, 55%)` : state.activeColor;
                    
                    // Add glow for mirror spray
                    if (state.currentTheme === "night") {
                        state.ctx.shadowBlur = 10;
                        state.ctx.shadowColor = state.ctx.fillStyle;
                    } else {
                        state.ctx.shadowBlur = 0;
                    }

                    for (let i = 0; i < density; i++) {
                        const angle = Math.random() * Math.PI * 2;
                        const r = Math.random() * radius;
                        state.ctx.beginPath();
                        state.ctx.arc((layoutW - x) + r * Math.cos(angle), y + r * Math.sin(angle), 1, 0, Math.PI * 2);
                        state.ctx.fill();
                    }
                }
                if (state.isRainbowBrush) state.rainbowHue = (state.rainbowHue + 1) % 360;
                state.ctx.shadowBlur = 0; // Always reset after spray block
            }

            function stopDrawing() {
                if (state.isDrawing) {
                    state.isDrawing = false;
                    state.ctx.globalCompositeOperation = "source-over"; // Reset to default
                    state.ctx.shadowBlur = 0; // Reset glow
                }
            }

            /************************************************************
             * Fill Bucket (Flood Fill) - 🪣
             ************************************************************/
            function selectFillTool() {
                synth.playPop();
                state.isFillMode = !state.isFillMode;
                state.isEraser = false;
                state.isSprayMode = false;

                // Reset spray button
                const sprayBtn = document.getElementById("btn-spray");
                if (sprayBtn) { sprayBtn.classList.remove("bg-yellow-400","scale-105"); sprayBtn.classList.add("bg-emerald-300"); }
                const btn = document.getElementById("btn-fill");
                if (state.isFillMode) {
                    btn.classList.remove("bg-purple-300");
                    btn.classList.add("bg-yellow-400", "scale-105");
                    // Deactivate eraser
                    document.getElementById("btn-eraser").classList.remove("bg-yellow-400", "scale-105");
                    document.getElementById("btn-eraser").classList.add("bg-pink-300");
                    showEncouragement("🪣 اضغط على أي منطقة في الرسم لملئها بلونك السحري!");
                } else {
                    btn.classList.remove("bg-yellow-400", "scale-105");
                    btn.classList.add("bg-purple-300");
                }
            }

            function performFloodFill(startX, startY) {
                const rect = state.canvas.getBoundingClientRect();
                // Convert coordinates taking DPR into account
                const dpr = window.devicePixelRatio || 1;
                const pixelX = Math.floor(startX * dpr);
                const pixelY = Math.floor(startY * dpr);

                // Get the image data
                const imageData = state.ctx.getImageData(0, 0, state.canvas.width, state.canvas.height);
                const data = imageData.data;
                const w = state.canvas.width;
                const h = state.canvas.height;

                // Source color (what we clicked on)
                const srcIdx = (pixelY * w + pixelX) * 4;
                const srcR = data[srcIdx];
                const srcG = data[srcIdx + 1];
                const srcB = data[srcIdx + 2];
                const srcA = data[srcIdx + 3];

                // Prevent filling active outline/black/very dark lines
                if (srcR < 45 && srcG < 45 && srcB < 45 && srcA > 200) {
                    showEncouragement("🪣 خطوط الرسم السوداء تحميك! لوّن داخل الفراغات! 🛡️🖤");
                    speakArabic("خطوط الرسم السوداء تحميك، لوّن داخل الفراغات يا بطل!");
                    synth.playBoing();
                    return false;
                }

                // Fill color (current brush color)
                const tempDiv = document.createElement("div");
                tempDiv.style.color = state.activeColor;
                document.body.appendChild(tempDiv);
                const computedColor = getComputedStyle(tempDiv).color;
                document.body.removeChild(tempDiv);
                const match = computedColor.match(/\d+/g);
                let fillR = 0,
                    fillG = 0,
                    fillB = 0,
                    fillA = 255;
                if (match && match.length >= 3) {
                    fillR = parseInt(match[0], 10);
                    fillG = parseInt(match[1], 10);
                    fillB = parseInt(match[2], 10);
                }

                // If the source is already the fill color, do nothing
                if (srcR === fillR && srcG === fillG && srcB === fillB && srcA === fillA) return false;

                // BFS flood fill — #1: use index pointer (O(1) dequeue, avoids O(n) shift)
                const matchColor = (idx) => {
                    return (
                        Math.abs(data[idx] - srcR) < 5 &&
                        Math.abs(data[idx + 1] - srcG) < 5 &&
                        Math.abs(data[idx + 2] - srcB) < 5 &&
                        Math.abs(data[idx + 3] - srcA) < 5
                    );
                };

                const setColor = (idx) => {
                    data[idx] = fillR;
                    data[idx + 1] = fillG;
                    data[idx + 2] = fillB;
                    data[idx + 3] = fillA;
                };

                const visited = new Uint8Array(w * h); // faster than Set
                const queue = [[pixelX, pixelY]];
                let qi = 0;

                while (qi < queue.length && queue.length < 500000) {
                    const [cx, cy] = queue[qi++];
                    if (cx < 0 || cx >= w || cy < 0 || cy >= h) continue;
                    const visitIdx = cy * w + cx;
                    if (visited[visitIdx]) continue;

                    const idx = (cy * w + cx) * 4;
                    if (!matchColor(idx)) continue;

                    visited[cy * w + cx] = 1;
                    setColor(idx);

                    queue.push([cx + 1, cy]);
                    queue.push([cx - 1, cy]);
                    queue.push([cx, cy + 1]);
                    queue.push([cx, cy - 1]);
                }

                state.ctx.putImageData(imageData, 0, 0);
                synth.playPop();
                showEncouragement("🪣 تم ملء المنطقة بنجاح! رائع!");
                return true;
            }

            /************************************************************
             * Mirror Mode - 🪞
             ************************************************************/
            function toggleMirror() {
                synth.playPop();
                state.isMirrorMode = !state.isMirrorMode;

                const btn = document.getElementById("btn-mirror");
                if (state.isMirrorMode) {
                    btn.classList.remove("bg-teal-300");
                    btn.classList.add("bg-yellow-400", "scale-105");
                    showEncouragement("🪞 وضع المرآة السحرية نشط! ارسم على اليسار يظهر على اليمين!");
                } else {
                    btn.classList.remove("bg-yellow-400", "scale-105");
                    btn.classList.add("bg-teal-300");
                }
            }

            /************************************************************
             * Stamps (Shapes) Tool - ⭐
             ************************************************************/
            let stampsGalleryRendered = false;

            // #13: Generic modal toggle helper — eliminates repeated show/hide boilerplate
            function toggleModal(modalId, contentId, show) {
                synth.playClick();
                const modal = document.getElementById(modalId);
                const content = document.getElementById(contentId);
                if (!modal || !content) return;

                if (show) {
                    modal.classList.remove("hidden");
                    setTimeout(() => {
                        modal.classList.remove("opacity-0");
                        content.classList.remove("scale-95");
                        content.classList.add("scale-100");
                    }, 10);
                } else {
                    modal.classList.add("opacity-0");
                    content.classList.remove("scale-100");
                    content.classList.add("scale-95");
                    setTimeout(() => {
                        modal.classList.add("hidden");
                    }, 300);
                }
            }

            function toggleStampsModal(show) {
                if (!stampsGalleryRendered) {
                    renderStampsGallery();
                    stampsGalleryRendered = true;
                }
                toggleModal("stamps-modal", "stamps-modal-content", show);
            }

            function renderStampsGallery() {
                const container = document.getElementById("stamps-gallery");
                container.innerHTML = "";

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
                    stickersContainer.innerHTML = "";
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
            function releaseSnapshot(snapshot) {
                const canvasUrl = typeof snapshot === "string" ? snapshot : snapshot?.canvasUrl;
                if (canvasUrl && canvasUrl.startsWith("blob:")) URL.revokeObjectURL(canvasUrl);
            }

            function releaseSnapshots(snapshots) {
                snapshots.forEach(releaseSnapshot);
            }

            function captureCurrentCanvas(stickers) {
                state.canvas.toBlob((blob) => {
                    if (!blob) return;
                    state.undoStack.push({
                        canvasUrl: URL.createObjectURL(blob),
                        stickers,
                    });
                    updateUndoRedoButtons();
                }, "image/webp", 0.85);
            }

            function clearHistory() {
                releaseSnapshots(state.undoStack);
                releaseSnapshots(state.redoStack);
                state.undoStack = [];
                state.redoStack = [];
                updateUndoRedoButtons();
            }

            function saveState() {
                const stickers = captureStickerState();
                if (state.undoStack.length >= 25) {
                    releaseSnapshot(state.undoStack.shift());
                }
                releaseSnapshots(state.redoStack);
                state.redoStack = [];
                captureCurrentCanvas(stickers);
            }

            function undo() {
                if (state.undoStack.length <= 1) {
                    updateUndoRedoButtons();
                    return;
                }

                const currentState = state.undoStack.pop();
                state.redoStack.push(currentState);
                const previousState = state.undoStack[state.undoStack.length - 1];
                restoreSnapshot(previousState);
                synth.playPop();
                updateUndoRedoButtons();
            }

            function redo() {
                if (state.redoStack.length === 0) {
                    updateUndoRedoButtons();
                    return;
                }

                const nextState = state.redoStack.pop();
                state.undoStack.push(nextState);
                restoreSnapshot(nextState);
                synth.playPop();
                updateUndoRedoButtons();
            }

            // Visual indicator for undo/redo availability
            function updateUndoRedoButtons() {
                const undoBtn = document.getElementById("btn-undo");
                const redoBtn = document.getElementById("btn-redo");
                if (undoBtn) {
                    const disabled = state.undoStack.length <= 1;
                    undoBtn.disabled = disabled;
                    undoBtn.setAttribute("aria-disabled", String(disabled));
                    undoBtn.classList.toggle("opacity-40", disabled);
                    undoBtn.classList.toggle("pointer-events-none", disabled);
                }
                if (redoBtn) {
                    const disabled = state.redoStack.length === 0;
                    redoBtn.disabled = disabled;
                    redoBtn.setAttribute("aria-disabled", String(disabled));
                    redoBtn.classList.toggle("opacity-40", disabled);
                    redoBtn.classList.toggle("pointer-events-none", disabled);
                }
            }

            function restoreSnapshot(snapshot) {
                if (!snapshot) return;
                restoreCanvas(snapshot.canvasUrl ?? snapshot);
                restoreStickerState(snapshot.stickers ?? []);
            }

            function restoreCanvas(url) {
                const img = new Image();
                img.onload = () => {
                    // Clear regardless of current transform
                    state.ctx.save();
                    state.ctx.setTransform(1, 0, 0, 1, 0, 0);
                    state.ctx.clearRect(0, 0, state.canvas.width, state.canvas.height);
                    state.ctx.restore();
                    // Draw in logical coordinates (DPR scale is applied via ctx)
                    const layoutW = state.canvas.offsetWidth || 700;
                    const layoutH = state.canvas.offsetHeight || 480;
                    state.ctx.drawImage(img, 0, 0, layoutW, layoutH);
                };
                img.src = url;
            }

            // #7: Spray tool selector
            function selectSpray() {
                synth.playPop();
                state.isSprayMode = !state.isSprayMode;
                state.isEraser = false;
                state.isFillMode = false;

                const btn = document.getElementById("btn-spray");
                if (state.isSprayMode) {
                    btn.classList.remove("bg-emerald-300");
                    btn.classList.add("bg-yellow-400", "scale-105");
                    // reset fill and eraser UI
                    document.getElementById("btn-eraser").classList.remove("bg-yellow-400", "scale-105");
                    document.getElementById("btn-eraser").classList.add("bg-pink-300");
                    const fillBtn = document.getElementById("btn-fill");
                    if (fillBtn) { fillBtn.classList.remove("bg-yellow-400","scale-105"); fillBtn.classList.add("bg-purple-300"); }
                    showEncouragement("🫧 وضع البخاخ! ارسم وستجد تأثيراً رائعاً!");
                } else {
                    btn.classList.remove("bg-yellow-400", "scale-105");
                    btn.classList.add("bg-emerald-300");
                }
            }

            // #8: Custom color picker handler
            function selectCustomColor(hexColor) {
                synth.playPop();
                state.isEraser = false;
                state.isSprayMode = false;
                state.isRainbowBrush = false;
                state.activeColor = hexColor;

                // reset spray and fill button visuals
                const sprayBtn = document.getElementById("btn-spray");
                if (sprayBtn) { sprayBtn.classList.remove("bg-yellow-400","scale-105"); sprayBtn.classList.add("bg-emerald-300"); }
                const fillBtn = document.getElementById("btn-fill");
                if (fillBtn) { fillBtn.classList.remove("bg-yellow-400","scale-105"); fillBtn.classList.add("bg-purple-300"); }
                document.getElementById("btn-eraser").classList.remove("bg-yellow-400","scale-105");
                document.getElementById("btn-eraser").classList.add("bg-pink-300");

                // Deselect all palette buttons
                document.querySelectorAll("#color-palette button").forEach((b) => {
                    b.classList.remove("scale-110");
                    b.querySelector(".active-dot").classList.remove("opacity-100");
                    b.querySelector(".active-dot").classList.add("opacity-0");
                });

                // Update brush preview
                document.getElementById("brush-preview").style.background = hexColor;
                // Sync picker in case called programmatically
                const picker = document.getElementById("custom-color-picker");
                if (picker) picker.value = hexColor;

                showEncouragement("🎨 تم اختيار لون خاص بك!");
            }

            // #16: Populate mobile color palette (mirrors the desktop palette)
            function renderMobileColors() {
                const container = document.getElementById("mobile-color-palette");
                if (!container) return;
                container.innerHTML = "";
                colors.forEach((color) => {
                    const btn = document.createElement("button");
                    btn.type = "button";
                    btn.title = color.name;
                    btn.className = `w-9 h-9 rounded-full border-3 border-slate-800 shadow-sm bubble-btn ${color.bgClass}`;
                    btn.addEventListener("click", () => {
                        selectColor(color.val, document.querySelectorAll("#color-palette button")[colors.indexOf(color)]);
                        toggleMobileDrawer();
                    });
                    container.appendChild(btn);
                });
            }

            // #16: Mobile tools drawer toggle
            function toggleMobileDrawer() {
                const drawer = document.getElementById("mobile-drawer");
                const content = document.getElementById("mobile-drawer-content");
                if (!drawer || !content) return;

                if (drawer.classList.contains("hidden")) {
                    drawer.classList.remove("hidden");
                    requestAnimationFrame(() => content.classList.remove("translate-y-full"));
                } else {
                    content.classList.add("translate-y-full");
                    setTimeout(() => drawer.classList.add("hidden"), 300);
                }
            }

            // #10: Generic backdrop click handler
            function handleBackdropClick(event, modalId, closeCallback) {
                const modal = document.getElementById(modalId);
                const content = modal ? modal.querySelector('[id$="-content"], .absolute.bottom-0') : null;
                if (event.target === modal || (content && !content.contains(event.target) && event.target !== content)) {
                    closeCallback();
                }
            }

            // #6: Quick PNG download (canvas + stickers, no gallery save)
            function downloadDrawingPNG() {
                deselectAllStickers();
                synth.playTada();

                const exportCanvas = document.createElement("canvas");
                const exportCtx = exportCanvas.getContext("2d");
                const layoutW = state.canvas.offsetWidth || 700;
                const layoutH = state.canvas.offsetHeight || 480;
                const dpr = window.devicePixelRatio || 1;
                exportCanvas.width = layoutW * dpr;
                exportCanvas.height = layoutH * dpr;
                exportCtx.scale(dpr, dpr);

                // White background
                exportCtx.fillStyle = "#FFFFFF";
                exportCtx.fillRect(0, 0, layoutW, layoutH);
                // Draw canvas content
                exportCtx.drawImage(state.canvas, 0, 0, state.canvas.width, state.canvas.height, 0, 0, layoutW, layoutH);

                // Draw stickers
                const stickers = Array.from(document.querySelectorAll(".sticker-element"));
                const loadPromises = stickers.map((sticker) => {
                    const svgEl = sticker.querySelector("svg");
                    if (!svgEl) return Promise.resolve(null);
                    const left = parseFloat(sticker.style.left) || 0;
                    const top = parseFloat(sticker.style.top) || 0;
                    const width = parseFloat(sticker.style.width) || 100;
                    const height = parseFloat(sticker.style.height) || 100;
                    const angle = parseFloat(sticker.dataset.angle) || 0;
                    const scale = parseFloat(sticker.dataset.scale) || 1;
                    const svgString = new XMLSerializer().serializeToString(svgEl);
                    const svgBlob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
                    const url = URL.createObjectURL(svgBlob);
                    return new Promise((resolve) => {
                        const img = new Image();
                        img.onload = () => resolve({ img, left, top, width, height, angle, scale, url });
                        img.onerror = () => resolve(null);
                        img.src = url;
                    });
                });

                Promise.all(loadPromises).then((items) => {
                    items.forEach((d) => {
                        if (!d) return;
                        exportCtx.save();
                        exportCtx.translate(d.left + d.width / 2, d.top + d.height / 2);
                        exportCtx.rotate((d.angle * Math.PI) / 180);
                        exportCtx.scale(d.scale, d.scale);
                        exportCtx.drawImage(d.img, -d.width / 2, -d.height / 2, d.width, d.height);
                        exportCtx.restore();
                        URL.revokeObjectURL(d.url);
                    });

                    exportCanvas.toBlob((blob) => {
                        const link = document.createElement("a");
                        link.download = `رسمة-أيهم-وليث-${Date.now()}.png`;
                        link.href = URL.createObjectURL(blob);
                        link.click();
                        setTimeout(() => URL.revokeObjectURL(link.href), 5000);
                        triggerConfetti();
                        showEncouragement("📥 تم تحميل الرسمة بنجاح! 🎉");
                    }, "image/png");
                });
            }

export { renderColors, selectColor, selectEraser, startDrawing, draw, drawSpray, stopDrawing, selectFillTool, performFloodFill, toggleMirror, toggleStampsModal, renderStampsGallery, selectStamp, placeStamp, selectCanvasBg, drawCanvasBackground, clearCanvas, clearHistory, saveState, undo, redo, updateUndoRedoButtons, restoreCanvas, restoreSnapshot, selectSpray, selectCustomColor, renderMobileColors, toggleMobileDrawer, handleBackdropClick, downloadDrawingPNG, toggleModal };
