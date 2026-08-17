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
                    btn.onclick = () => selectColor(color.val, btn);
                    btn.className = `w-9 h-9 lg:w-10 lg:h-10 rounded-full border-3 border-slate-800 shadow-cartoon-sm hover:scale-110 active:scale-95 bubble-btn flex items-center justify-center relative overflow-hidden transition-all ${color.bgClass}`;

                    // Active indicator dot
                    const dot = document.createElement("div");
                    dot.className =
                        "w-2.5 h-2.5 bg-white rounded-full border border-slate-800 opacity-0 transition-opacity active-dot";
                    btn.appendChild(dot);

                    // Set default active color button
                    if (color.val === activeColor) {
                        dot.classList.remove("opacity-0");
                        dot.classList.add("opacity-100");
                        btn.classList.add("scale-110");
                    }

                    palette.appendChild(btn);
                });
            }

            function selectColor(colorValue, buttonEl) {
                synth.playPop();
                isEraser = false;

                // Update state
                if (colorValue === "rainbow") {
                    isRainbowBrush = true;
                } else {
                    isRainbowBrush = false;
                    activeColor = colorValue;
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
                if (isRainbowBrush) {
                    preview.style.background = "linear-gradient(to right, red, orange, yellow, green, blue, violet)";
                } else {
                    preview.style.background = activeColor;
                }
            }

            function selectEraser() {
                synth.playPop();
                isEraser = true;
                isRainbowBrush = false;
                isSprayMode = false;
                isFillMode = false;

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
                const rect = canvas.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const clickY = e.clientY - rect.top;

                // NEW: If Fill mode is active, perform flood fill and return
                if (isFillMode) {
                    saveState();
                    performFloodFill(clickX, clickY);
                    return;
                }

                // NEW: If a stamp is selected, place it
                if (activeStamp) {
                    saveState();
                    placeStamp(e.clientX, e.clientY);
                    activeStamp = null;
                    return;
                }

                isDrawing = true;
                lastX = clickX;
                lastY = clickY;

                // Spawn magic pointer particles
                spawnParticles(clickX, clickY);

                // Play soft drawing start sound
                synth.playClick();
            }

            function draw(e) {
                if (!isDrawing) return;
                if (e.pointerType === "touch") {
                    e.preventDefault();
                }

                const rect = canvas.getBoundingClientRect();
                const currentX = e.clientX - rect.left;
                const currentY = e.clientY - rect.top;

                // Spawn magic pointer particles as we draw
                spawnParticles(currentX, currentY);

                // #7: Spray mode — no stroke, scatter dots
                if (isSprayMode && !isEraser) {
                    drawSpray(currentX, currentY);
                    lastX = currentX;
                    lastY = currentY;
                    if (Math.random() < 0.005) showEncouragement();
                    return;
                }

                ctx.beginPath();
                ctx.moveTo(lastX, lastY);
                ctx.lineTo(currentX, currentY);

                // Line characteristics
                ctx.lineCap = "round";
                ctx.lineJoin = "round";
                ctx.lineWidth = brushSize;

                if (isEraser) {
                    // Eraser clears drawings with transparency
                    ctx.globalCompositeOperation = "destination-out";
                    ctx.strokeStyle = "rgba(0,0,0,1)";
                    ctx.shadowBlur = 0; // Reset glow for eraser
                } else {
                    // Normal drawing
                    ctx.globalCompositeOperation = "source-over";
                    if (isRainbowBrush) {
                        rainbowHue = (rainbowHue + 2) % 360;
                        ctx.strokeStyle = `hsl(${rainbowHue}, 100%, 55%)`;
                    } else {
                        ctx.strokeStyle = activeColor;
                    }

                    // Apply magic glow in night mode
                    if (currentTheme === "night") {
                        ctx.shadowBlur = 15;
                        ctx.shadowColor = ctx.strokeStyle;
                    } else {
                        ctx.shadowBlur = 0;
                    }
                }

                ctx.stroke();

                // Mirror mode: mirror horizontally
                if (isMirrorMode) {
                    const layoutW = canvas.offsetWidth || 700;
                    const mirrorLastX = layoutW - lastX;
                    const mirrorCurX = layoutW - currentX;
                    // Save and restore context to avoid affecting main stroke style
                    ctx.save();
                    ctx.lineCap = "round";
                    ctx.lineJoin = "round";
                    ctx.lineWidth = brushSize;
                    if (isEraser) {
                        ctx.globalCompositeOperation = "destination-out";
                        ctx.strokeStyle = "rgba(0,0,0,1)";
                        ctx.shadowBlur = 0;
                    } else {
                        ctx.globalCompositeOperation = "source-over";
                        if (isRainbowBrush) {
                            // Recreate rainbow hue for mirror
                            ctx.strokeStyle = `hsl(${(rainbowHue + 2) % 360}, 100%, 55%)`;
                        } else {
                            ctx.strokeStyle = activeColor;
                        }

                        // Apply magic glow in night mode
                        if (currentTheme === "night") {
                            ctx.shadowBlur = 15;
                            ctx.shadowColor = ctx.strokeStyle;
                        } else {
                            ctx.shadowBlur = 0;
                        }
                    }
                    ctx.beginPath();
                    ctx.moveTo(mirrorLastX, lastY);
                    ctx.lineTo(mirrorCurX, currentY);
                    ctx.stroke();
                    ctx.restore();
                }

                lastX = currentX;
                lastY = currentY;

                // Periodic check to trigger motivational speech bubble while drawing
                if (Math.random() < 0.005) {
                    showEncouragement();
                }
            }

            // #7: Spray paint draw (called inside draw() for spray mode)
            function drawSpray(x, y) {
                const density = 35;
                const radius = brushSize * 2;
                ctx.globalCompositeOperation = "source-over";
                ctx.fillStyle = isRainbowBrush ? `hsl(${rainbowHue}, 100%, 55%)` : activeColor;
                
                // Add phosphorescent glow in night mode for spray
                if (currentTheme === "night") {
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = ctx.fillStyle;
                } else {
                    ctx.shadowBlur = 0;
                }

                for (let i = 0; i < density; i++) {
                    const angle = Math.random() * Math.PI * 2;
                    const r = Math.random() * radius;
                    ctx.beginPath();
                    ctx.arc(x + r * Math.cos(angle), y + r * Math.sin(angle), 1, 0, Math.PI * 2);
                    ctx.fill();
                }
                if (isMirrorMode) {
                    const layoutW = canvas.offsetWidth || 700;
                    ctx.fillStyle = isRainbowBrush ? `hsl(${(rainbowHue+1)%360}, 100%, 55%)` : activeColor;
                    
                    // Add glow for mirror spray
                    if (currentTheme === "night") {
                        ctx.shadowBlur = 10;
                        ctx.shadowColor = ctx.fillStyle;
                    } else {
                        ctx.shadowBlur = 0;
                    }

                    for (let i = 0; i < density; i++) {
                        const angle = Math.random() * Math.PI * 2;
                        const r = Math.random() * radius;
                        ctx.beginPath();
                        ctx.arc((layoutW - x) + r * Math.cos(angle), y + r * Math.sin(angle), 1, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
                if (isRainbowBrush) rainbowHue = (rainbowHue + 1) % 360;
                ctx.shadowBlur = 0; // Always reset after spray block
            }

            function stopDrawing() {
                if (isDrawing) {
                    isDrawing = false;
                    ctx.globalCompositeOperation = "source-over"; // Reset to default
                    ctx.shadowBlur = 0; // Reset glow
                }
            }

            /************************************************************
             * Fill Bucket (Flood Fill) - 🪣
             ************************************************************/
            function selectFillTool() {
                synth.playPop();
                isFillMode = !isFillMode;
                isEraser = false;
                isSprayMode = false;

                // Reset spray button
                const sprayBtn = document.getElementById("btn-spray");
                if (sprayBtn) { sprayBtn.classList.remove("bg-yellow-400","scale-105"); sprayBtn.classList.add("bg-emerald-300"); }
                const btn = document.getElementById("btn-fill");
                if (isFillMode) {
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
                const rect = canvas.getBoundingClientRect();
                // Convert coordinates taking DPR into account
                const dpr = window.devicePixelRatio || 1;
                const pixelX = Math.floor(startX * dpr);
                const pixelY = Math.floor(startY * dpr);

                // Get the image data
                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const data = imageData.data;
                const w = canvas.width;
                const h = canvas.height;

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
                    return;
                }

                // Fill color (current brush color)
                const tempDiv = document.createElement("div");
                tempDiv.style.color = activeColor;
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
                if (srcR === fillR && srcG === fillG && srcB === fillB && srcA === fillA) return;

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

                ctx.putImageData(imageData, 0, 0);
                synth.playPop();
                showEncouragement("🪣 تم ملء المنطقة بنجاح! رائع!");
            }

            /************************************************************
             * Mirror Mode - 🪞
             ************************************************************/
            function toggleMirror() {
                synth.playPop();
                isMirrorMode = !isMirrorMode;

                const btn = document.getElementById("btn-mirror");
                if (isMirrorMode) {
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
                    btn.onclick = () => selectStamp(stamp.id);
                    container.appendChild(btn);
                });
            }

            function selectStamp(stampId) {
                const stamp = stampTemplates.find((s) => s.id === stampId);
                if (!stamp) return;

                activeStamp = stamp;
                synth.playPop();
                toggleStampsModal(false);
                showEncouragement(`⭐ اضغط على اللوحة لوضع ${stamp.name}! يمكنك تغيير حجمها بالفرشاة!`);
            }

            function placeStamp(clientX, clientY) {
                if (!activeStamp) return;

                const rect = canvas.getBoundingClientRect();
                const x = clientX - rect.left;
                const y = clientY - rect.top;
                const size = brushSize * 3; // Stamp size is proportional to brush

                const svgString = activeStamp.svg;
                const svgBlob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
                const url = URL.createObjectURL(svgBlob);

                const img = new Image();
                img.onload = () => {
                    ctx.drawImage(img, x - size / 2, y - size / 2, size, size);
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
                if (bgId === currentBg) return;

                // Save state before changing background
                saveState();

                currentBg = bgId;
                synth.playPop();

                // Update button highlights
                document.querySelectorAll(".bg-selector-btn").forEach((btn) => {
                    btn.classList.remove("ring-4", "ring-yellow-400");
                });
                const activeBtn = document.querySelector(`.bg-selector-btn[data-bg="${bgId}"]`);
                if (activeBtn) {
                    activeBtn.classList.add("ring-4", "ring-yellow-400");
                }

                // Redraw background
                drawCanvasBackground();

                showEncouragement(`🎨 تم تغيير خلفية اللوحة!`);
            }

            function drawCanvasBackground() {
                const rect = canvas.getBoundingClientRect();
                const layoutW = canvas.offsetWidth || rect.width || 700;
                const layoutH = canvas.offsetHeight || rect.height || 480;

                // Save current drawing content
                const tempDataUrl = canvas.toDataURL();

                // Draw background first, then restore drawing on top
                const dpr = window.devicePixelRatio || 1;
                ctx.save();
                ctx.setTransform(1, 0, 0, 1, 0, 0);

                // Clear with the selected background
                switch (currentBg) {
                    case "white":
                        ctx.fillStyle = "#FFFFFF";
                        break;
                    case "sky":
                        ctx.fillStyle = "#BAE6FD";
                        break;
                    case "grass":
                        ctx.fillStyle = "#A7F3D0";
                        break;
                    case "sunset":
                        const grad = ctx.createLinearGradient(0, 0, 0, layoutH * dpr);
                        grad.addColorStop(0, "#FED7AA");
                        grad.addColorStop(0.5, "#FDA4AF");
                        grad.addColorStop(1, "#C4B5FD");
                        ctx.fillStyle = grad;
                        break;
                    case "dark":
                        ctx.fillStyle = "#334155";
                        break;
                    default:
                        ctx.fillStyle = "#FFFFFF";
                }
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.restore();

                // Redraw the saved image onto the new background
                const savedImg = new Image();
                savedImg.onload = () => {
                    ctx.drawImage(savedImg, 0, 0, layoutW, layoutH);
                };
                savedImg.src = tempDataUrl;
            }

            function clearCanvas() {
                synth.playBoing();
                if (confirm("هل أنت متأكد أنك تريد مسح اللوحة بالكامل والبدء من جديد؟ 🧹")) {
                    // Save state before clearing
                    saveState();
                    // Use save/restore to clear the entire canvas regardless of transformation
                    ctx.save();
                    ctx.setTransform(1, 0, 0, 1, 0, 0);
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.restore();

                    // Remove all stickers
                    const stickersContainer = document.getElementById("stickers-layer");
                    stickersContainer.innerHTML = "";
                    activeSticker = null;

                    // Turn off Alive mode if active
                    if (isAlive) {
                        toggleGiveLife();
                    }

                    triggerConfetti();
                    showEncouragement("بداية جديدة مرحة! 🌟🎨");
                }
            }

            // #11: saveState uses toBlob (async, non-blocking) — stores DataURL as fallback on error
            function saveState() {
                // Revoke oldest URL if stack is full to avoid memory leak
                if (undoStack.length >= 25) {
                    const old = undoStack.shift();
                    if (old && old.startsWith("blob:")) URL.revokeObjectURL(old);
                }
                canvas.toBlob((blob) => {
                    if (!blob) return;
                    undoStack.push(URL.createObjectURL(blob));
                    redoStack.forEach(u => { if (u && u.startsWith("blob:")) URL.revokeObjectURL(u); });
                    redoStack = [];
                    updateUndoRedoButtons();
                }, "image/webp", 0.85);
            }

            function undo() {
                if (undoStack.length > 0) {
                    const prevState = undoStack.pop();
                    // push current state to redo (as blob)
                    canvas.toBlob((blob) => {
                        if (blob) redoStack.push(URL.createObjectURL(blob));
                        updateUndoRedoButtons();
                    }, "image/webp", 0.85);
                    restoreCanvas(prevState);
                    synth.playPop();
                }
                updateUndoRedoButtons();
            }

            function redo() {
                if (redoStack.length > 0) {
                    const nextState = redoStack.pop();
                    canvas.toBlob((blob) => {
                        if (blob) undoStack.push(URL.createObjectURL(blob));
                        updateUndoRedoButtons();
                    }, "image/webp", 0.85);
                    restoreCanvas(nextState);
                    synth.playPop();
                }
                updateUndoRedoButtons();
            }

            // Visual indicator for undo/redo availability
            function updateUndoRedoButtons() {
                const undoBtn = document.getElementById("btn-undo");
                const redoBtn = document.getElementById("btn-redo");
                if (undoBtn) {
                    if (undoStack.length === 0) {
                        undoBtn.classList.add("opacity-40", "pointer-events-none");
                    } else {
                        undoBtn.classList.remove("opacity-40", "pointer-events-none");
                    }
                }
                if (redoBtn) {
                    if (redoStack.length === 0) {
                        redoBtn.classList.add("opacity-40", "pointer-events-none");
                    } else {
                        redoBtn.classList.remove("opacity-40", "pointer-events-none");
                    }
                }
            }

            function restoreCanvas(url) {
                const img = new Image();
                img.onload = () => {
                    // Clear regardless of current transform
                    ctx.save();
                    ctx.setTransform(1, 0, 0, 1, 0, 0);
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.restore();
                    // Draw in logical coordinates (DPR scale is applied via ctx)
                    const layoutW = canvas.offsetWidth || 700;
                    const layoutH = canvas.offsetHeight || 480;
                    ctx.drawImage(img, 0, 0, layoutW, layoutH);
                    // Blob URLs can be revoked after draw (no longer needed)
                    if (url && url.startsWith("blob:")) URL.revokeObjectURL(url);
                };
                img.src = url;
            }

            // #7: Spray tool selector
            function selectSpray() {
                synth.playPop();
                isSprayMode = !isSprayMode;
                isEraser = false;
                isFillMode = false;

                const btn = document.getElementById("btn-spray");
                if (isSprayMode) {
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
                isEraser = false;
                isSprayMode = false;
                isRainbowBrush = false;
                activeColor = hexColor;

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
                    btn.onclick = () => {
                        selectColor(color.val, document.querySelectorAll("#color-palette button")[colors.indexOf(color)]);
                        toggleMobileDrawer();
                    };
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
                const layoutW = canvas.offsetWidth || 700;
                const layoutH = canvas.offsetHeight || 480;
                const dpr = window.devicePixelRatio || 1;
                exportCanvas.width = layoutW * dpr;
                exportCanvas.height = layoutH * dpr;
                exportCtx.scale(dpr, dpr);

                // White background
                exportCtx.fillStyle = "#FFFFFF";
                exportCtx.fillRect(0, 0, layoutW, layoutH);
                // Draw canvas content
                exportCtx.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, layoutW, layoutH);

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

