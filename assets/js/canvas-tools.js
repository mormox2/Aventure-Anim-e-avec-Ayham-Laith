import { colors } from "./data.js";
import { stopAllAnimations } from "./animations.js";
import { showEncouragement } from "./feedback.js";
import { saveState } from "./history.js";
import { placeStamp } from "./canvas-modals.js";
import { synth } from "./synth.js";
import { speakArabic } from "./voice-duo.js";
import { state } from "./state.js";

let particleSpawner = () => {};

function setParticleSpawner(spawner) {
  particleSpawner = typeof spawner === "function" ? spawner : () => {};
}

function parseColorToRgb(colorStr) {
  if (!colorStr) return { r: 255, g: 77, b: 109, a: 255 };
  if (colorStr.startsWith("#")) {
    let hex = colorStr.slice(1);
    if (hex.length === 3) {
      hex = hex.split("").map((c) => c + c).join("");
    }
    const num = parseInt(hex, 16);
    if (Number.isNaN(num)) return { r: 255, g: 77, b: 109, a: 255 };
    return {
      r: (num >> 16) & 255,
      g: (num >> 8) & 255,
      b: num & 255,
      a: 255,
    };
  }
  if (colorStr.startsWith("rgb")) {
    const parts = colorStr.match(/\d+/g);
    if (parts && parts.length >= 3) {
      return {
        r: parseInt(parts[0], 10),
        g: parseInt(parts[1], 10),
        b: parseInt(parts[2], 10),
        a: parts[3] ? Math.round(parseFloat(parts[3]) * 255) : 255,
      };
    }
  }
  if (colorStr.startsWith("hsl")) {
    const parts = colorStr.match(/[\d.]+/g);
    if (parts && parts.length >= 3) {
      const h = parseFloat(parts[0]) / 360;
      const s = parseFloat(parts[1]) / 100;
      const l = parseFloat(parts[2]) / 100;
      let r;
      let g;
      let b;
      if (s === 0) {
        r = g = b = l;
      } else {
        const hue2rgb = (p, q, t) => {
          let adjustedT = t;
          if (adjustedT < 0) adjustedT += 1;
          if (adjustedT > 1) adjustedT -= 1;
          if (adjustedT < 1 / 6) return p + (q - p) * 6 * adjustedT;
          if (adjustedT < 1 / 2) return q;
          if (adjustedT < 2 / 3) return p + (q - p) * (2 / 3 - adjustedT) * 6;
          return p;
        };
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
      }
      return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255),
        a: 255,
      };
    }
  }
  return { r: 255, g: 77, b: 109, a: 255 };
}

            let activeColorButton = null;

            function renderColors() {
                const palette = document.getElementById("color-palette");
                if (!palette) return;
                palette.replaceChildren();
                activeColorButton = null;

                colors.forEach((color) => {
                    const btn = document.createElement("button");
                    btn.type = "button";
                    btn.title = color.name;
                    btn.setAttribute("aria-label", `اختيار اللون ${color.name}`);
                    btn.addEventListener("click", () => selectColor(color.val, btn));
                    btn.className = `w-9 h-9 lg:w-10 lg:h-10 rounded-full border-3 border-slate-800 shadow-cartoon-sm hover:scale-110 active:scale-95 bubble-btn flex items-center justify-center relative overflow-hidden transition-transform ${color.bgClass}`;

                    // Active indicator dot (pointer-events-none so click target is cleanly the button)
                    const dot = document.createElement("div");
                    dot.className =
                        "w-2.5 h-2.5 bg-white rounded-full border border-slate-800 opacity-0 active-dot pointer-events-none transition-opacity";
                    btn.appendChild(dot);

                    // Set default active color button
                    if (color.val === state.activeColor) {
                        dot.classList.remove("opacity-0");
                        dot.classList.add("opacity-100");
                        btn.classList.add("scale-110");
                        activeColorButton = btn;
                    }

                    palette.appendChild(btn);
                });
            }

function updateCanvasCursor() {
    const canvas = state.canvas || document.getElementById("drawing-canvas");
    if (!canvas) return;
    canvas.classList.remove("cursor-brush", "cursor-eraser", "cursor-spray", "cursor-fill", "cursor-stamp", "cursor-crosshair");
    if (state.activeStamp) {
        canvas.classList.add("cursor-stamp");
    } else if (state.isEraser) {
        canvas.classList.add("cursor-eraser");
    } else if (state.isSprayMode) {
        canvas.classList.add("cursor-spray");
    } else if (state.isFillMode) {
        canvas.classList.add("cursor-fill");
    } else {
        canvas.classList.add("cursor-brush");
    }
}

            function selectColor(colorValue, buttonEl) {
                synth.playPop();
                state.isEraser = false;
                state.isSprayMode = false;
                state.isFillMode = false;
                state.activeStamp = null;

                // Update state
                if (colorValue === "rainbow") {
                    state.isRainbowBrush = true;
                } else {
                    state.isRainbowBrush = false;
                    state.activeColor = colorValue;
                }

                // Reset tool buttons if active
                const eraserBtn = document.getElementById("btn-eraser");
                if (eraserBtn && eraserBtn.classList.contains("bg-yellow-400")) {
                    eraserBtn.classList.remove("bg-yellow-400", "scale-105");
                    eraserBtn.classList.add("bg-pink-300");
                }
                const sprayBtn = document.getElementById("btn-spray");
                if (sprayBtn && sprayBtn.classList.contains("bg-yellow-400")) {
                    sprayBtn.classList.remove("bg-yellow-400", "scale-105");
                    sprayBtn.classList.add("bg-emerald-300");
                }
                const fillBtn = document.getElementById("btn-fill");
                if (fillBtn && fillBtn.classList.contains("bg-yellow-400")) {
                    fillBtn.classList.remove("bg-yellow-400", "scale-105");
                    fillBtn.classList.add("bg-purple-300");
                }

                // Fast O(1) active color button toggle
                if (activeColorButton && activeColorButton !== buttonEl) {
                    activeColorButton.classList.remove("scale-110");
                    const oldDot = activeColorButton.querySelector(".active-dot");
                    if (oldDot) {
                        oldDot.classList.remove("opacity-100");
                        oldDot.classList.add("opacity-0");
                    }
                }

                if (buttonEl) {
                    buttonEl.classList.add("scale-110");
                    const newDot = buttonEl.querySelector(".active-dot");
                    if (newDot) {
                        newDot.classList.remove("opacity-0");
                        newDot.classList.add("opacity-100");
                    }
                    activeColorButton = buttonEl;
                } else {
                    // If buttonEl not provided, find and activate matching button
                    const allBtns = document.querySelectorAll("#color-palette button");
                    allBtns.forEach((b) => {
                        b.classList.remove("scale-110");
                        const d = b.querySelector(".active-dot");
                        if (d) {
                            d.classList.remove("opacity-100");
                            d.classList.add("opacity-0");
                        }
                    });
                    activeColorButton = null;
                }

                // Update brush preview
                const preview = document.getElementById("brush-preview");
                if (preview) {
                    if (state.isRainbowBrush) {
                        preview.style.background = "linear-gradient(to right, red, orange, yellow, green, blue, violet)";
                    } else {
                        preview.style.background = state.activeColor;
                    }
                }

                updateCanvasCursor();
            }

            function selectEraser() {
                synth.playPop();
                state.isEraser = true;
                state.isRainbowBrush = false;
                state.isSprayMode = false;
                state.isFillMode = false;
                state.activeStamp = null;

                // Reset spray button
                const sprayBtn = document.getElementById("btn-spray");
                if (sprayBtn) { sprayBtn.classList.remove("bg-yellow-400","scale-105"); sprayBtn.classList.add("bg-emerald-300"); }
                // Reset fill button
                const fillBtn = document.getElementById("btn-fill");
                if (fillBtn) { fillBtn.classList.remove("bg-yellow-400","scale-105"); fillBtn.classList.add("bg-purple-300"); }
                // Update Eraser Button look
                const eraserBtn = document.getElementById("btn-eraser");
                if (eraserBtn) {
                    eraserBtn.classList.remove("bg-pink-300");
                    eraserBtn.classList.add("bg-yellow-400", "scale-105");
                }

                // Fast O(1) de-selection of active color button
                if (activeColorButton) {
                    activeColorButton.classList.remove("scale-110");
                    const dot = activeColorButton.querySelector(".active-dot");
                    if (dot) {
                        dot.classList.remove("opacity-100");
                        dot.classList.add("opacity-0");
                    }
                    activeColorButton = null;
                }

                // Update brush preview to white representing eraser
                const preview = document.getElementById("brush-preview");
                if (preview) preview.style.background = "#FFFFFF";

                updateCanvasCursor();
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

                if (state.canvas && e.pointerId !== undefined && typeof state.canvas.setPointerCapture === "function") {
                    try {
                        state.canvas.setPointerCapture(e.pointerId);
                    } catch (_) {}
                }

                // Get relative position
                const rect = state.canvas.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const clickY = e.clientY - rect.top;

                // If Fill mode is active, perform flood fill and return
                if (state.isFillMode) {
                    if (performFloodFill(clickX, clickY)) saveState();
                    return;
                }

                // If a stamp is selected, place it
                if (state.activeStamp) {
                    placeStamp(e.clientX, e.clientY);
                    state.activeStamp = null;
                    updateCanvasCursor();
                    return;
                }

                // Shape mode: record start point + snapshot canvas for live preview
                if (state.brushMode === "shape") {
                    state.isDrawing = true;
                    state.shapeStartX = clickX;
                    state.shapeStartY = clickY;
                    state.lastX = clickX;
                    state.lastY = clickY;
                    // Capture snapshot so preview can restore it on each drag frame
                    _shapeSnapshot = state.ctx.getImageData(0, 0, state.canvas.width, state.canvas.height);
                    synth.playClick();
                    return;
                }

                state.isDrawing = true;
                state.lastX = clickX;
                state.lastY = clickY;
                // Initialize Bézier control point
                state.bezierCpX = clickX;
                state.bezierCpY = clickY;
                state.prevSpeed = 0;

                // Spawn magic pointer particles
                particleSpawner(clickX, clickY);

                // Play soft drawing start sound
                synth.playClick();
            }

            /************************************************************
             * Spray Paint Tool 🫧
             ************************************************************/
            function drawSpray(x, y) {
                const ctx = state.ctx;
                const radius = state.brushSize * 3;
                const density = Math.ceil(state.brushSize * 4);
                const colorStr = state.isRainbowBrush
                    ? `hsl(${(state.rainbowHue = (state.rainbowHue + 2) % 360)}, 100%, 55%)`
                    : state.activeColor;

                ctx.globalCompositeOperation = "source-over";
                ctx.fillStyle = colorStr;

                if (state.currentTheme === "night") {
                    ctx.shadowBlur = 8;
                    ctx.shadowColor = colorStr;
                } else {
                    ctx.shadowBlur = 0;
                }

                for (let i = 0; i < density; i++) {
                    const angle = Math.random() * Math.PI * 2;
                    const dist = Math.random() * radius;
                    const dropX = x + Math.cos(angle) * dist;
                    const dropY = y + Math.sin(angle) * dist;
                    const dropR = Math.random() * 1.5 + 0.5;
                    ctx.beginPath();
                    ctx.arc(dropX, dropY, dropR, 0, Math.PI * 2);
                    ctx.fill();
                }
                ctx.shadowBlur = 0;

                // Mirror spray
                if (state.isMirrorMode) {
                    const layoutW = state.canvas.offsetWidth || 700;
                    const mx = layoutW - x;
                    ctx.save();
                    ctx.fillStyle = colorStr;
                    for (let i = 0; i < density; i++) {
                        const angle = Math.random() * Math.PI * 2;
                        const dist = Math.random() * radius;
                        const dropR = Math.random() * 1.5 + 0.5;
                        ctx.beginPath();
                        ctx.arc(mx + Math.cos(angle) * dist, y + Math.sin(angle) * dist, dropR, 0, Math.PI * 2);
                        ctx.fill();
                    }
                    ctx.restore();
                }
            }

            /************************************************************
             * Star Brush ⭐
             ************************************************************/
            function drawStarBrush(x, y, color) {
                const ctx = state.ctx;
                const size = state.brushSize * 1.2;
                const spikes = 5;
                const outerR = size;
                const innerR = size * 0.45;

                ctx.save();
                ctx.globalCompositeOperation = "source-over";
                ctx.fillStyle = color;
                ctx.globalAlpha = 0.85;
                if (state.currentTheme === "night") {
                    ctx.shadowBlur = 12;
                    ctx.shadowColor = color;
                }

                ctx.beginPath();
                let rotation = (Math.PI / 2) * 3;
                const step = Math.PI / spikes;
                ctx.moveTo(x, y - outerR);
                for (let i = 0; i < spikes; i++) {
                    ctx.lineTo(x + Math.cos(rotation) * outerR, y + Math.sin(rotation) * outerR);
                    rotation += step;
                    ctx.lineTo(x + Math.cos(rotation) * innerR, y + Math.sin(rotation) * innerR);
                    rotation += step;
                }
                ctx.closePath();
                ctx.fill();
                ctx.restore();

                // Mirror star
                if (state.isMirrorMode) {
                    const layoutW = state.canvas.offsetWidth || 700;
                    ctx.save();
                    ctx.globalCompositeOperation = "source-over";
                    ctx.fillStyle = color;
                    ctx.globalAlpha = 0.85;
                    ctx.beginPath();
                    let rot2 = (Math.PI / 2) * 3;
                    const mx = layoutW - x;
                    ctx.moveTo(mx, y - outerR);
                    for (let i = 0; i < spikes; i++) {
                        ctx.lineTo(mx + Math.cos(rot2) * outerR, y + Math.sin(rot2) * outerR);
                        rot2 += step;
                        ctx.lineTo(mx + Math.cos(rot2) * innerR, y + Math.sin(rot2) * innerR);
                        rot2 += step;
                    }
                    ctx.closePath();
                    ctx.fill();
                    ctx.restore();
                }
            }

            /************************************************************
             * Calligraphy Brush ✒️
             ************************************************************/
            function drawCalligraphy(x, y, color) {
                const ctx = state.ctx;
                const dx = x - state.lastX;
                const dy = y - state.lastY;
                const speed = Math.sqrt(dx * dx + dy * dy);
                // Smooth speed transition
                state.prevSpeed = state.prevSpeed * 0.7 + speed * 0.3;
                // Fast = thin (min 1px), slow = thick (up to brushSize * 2)
                const minW = Math.max(1, state.brushSize * 0.2);
                const maxW = state.brushSize * 2;
                const lineW = Math.max(minW, maxW - state.prevSpeed * 0.6);

                ctx.save();
                ctx.globalCompositeOperation = "source-over";
                ctx.strokeStyle = color;
                ctx.lineWidth = lineW;
                ctx.lineCap = "round";
                ctx.lineJoin = "round";
                ctx.globalAlpha = 0.9;
                if (state.currentTheme === "night") {
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = color;
                }

                // Quadratic Bézier for smooth calligraphy
                const cpX = (state.lastX + x) / 2;
                const cpY = (state.lastY + y) / 2;
                ctx.beginPath();
                ctx.moveTo(state.lastX, state.lastY);
                ctx.quadraticCurveTo(state.bezierCpX, state.bezierCpY, cpX, cpY);
                ctx.stroke();
                state.bezierCpX = cpX;
                state.bezierCpY = cpY;
                ctx.restore();

                // Mirror calligraphy
                if (state.isMirrorMode) {
                    const layoutW = state.canvas.offsetWidth || 700;
                    ctx.save();
                    ctx.strokeStyle = color;
                    ctx.lineWidth = lineW;
                    ctx.lineCap = "round";
                    ctx.lineJoin = "round";
                    ctx.globalAlpha = 0.9;
                    ctx.beginPath();
                    ctx.moveTo(layoutW - state.lastX, state.lastY);
                    ctx.quadraticCurveTo(layoutW - state.bezierCpX, state.bezierCpY, layoutW - cpX, cpY);
                    ctx.stroke();
                    ctx.restore();
                }
            }

            /************************************************************
             * Shape Preview (live while dragging) 🔷
             ************************************************************/
            function _drawShapeOnCtx(ctx, type, x1, y1, x2, y2, color, lineW) {
                ctx.save();
                ctx.globalCompositeOperation = "source-over";
                ctx.strokeStyle = color;
                ctx.lineWidth = lineW;
                ctx.lineCap = "round";
                ctx.lineJoin = "round";
                ctx.globalAlpha = 0.9;

                if (type === "line") {
                    ctx.beginPath();
                    ctx.moveTo(x1, y1);
                    ctx.lineTo(x2, y2);
                    ctx.stroke();
                } else if (type === "rect") {
                    ctx.beginPath();
                    ctx.rect(x1, y1, x2 - x1, y2 - y1);
                    ctx.stroke();
                } else if (type === "circle") {
                    const rx = Math.abs(x2 - x1) / 2;
                    const ry = Math.abs(y2 - y1) / 2;
                    const cx = Math.min(x1, x2) + rx;
                    const cy = Math.min(y1, y2) + ry;
                    ctx.beginPath();
                    ctx.ellipse(cx, cy, rx || 1, ry || 1, 0, 0, Math.PI * 2);
                    ctx.stroke();
                } else if (type === "heart") {
                    const w = x2 - x1;
                    const h = y2 - y1;
                    const hx = x1 + w / 2;
                    const hy = y1 + h / 2;
                    const scale = Math.min(Math.abs(w), Math.abs(h)) / 2;
                    ctx.beginPath();
                    ctx.moveTo(hx, hy + scale * 0.9);
                    ctx.bezierCurveTo(
                        hx - scale * 1.5, hy + scale * 0.3,
                        hx - scale * 2,   hy - scale * 0.8,
                        hx,               hy - scale * 0.3
                    );
                    ctx.bezierCurveTo(
                        hx + scale * 2,   hy - scale * 0.8,
                        hx + scale * 1.5, hy + scale * 0.3,
                        hx,               hy + scale * 0.9
                    );
                    ctx.stroke();
                }
                ctx.restore();
            }

            // Offscreen snapshot for shape preview (avoid redraw artifacts)
            let _shapeSnapshot = null;

            function drawShapePreview(x, y) {
                if (!_shapeSnapshot) return;
                // Restore background under shape
                state.ctx.putImageData(_shapeSnapshot, 0, 0);
                const color = state.isRainbowBrush
                    ? `hsl(${state.rainbowHue}, 100%, 55%)`
                    : state.activeColor;
                _drawShapeOnCtx(state.ctx, state.shapeType,
                    state.shapeStartX, state.shapeStartY, x, y,
                    color, state.brushSize);
            }

            function finalizeShape(x, y) {
                drawShapePreview(x, y); // Render final shape
                _shapeSnapshot = null;
                saveState();
                synth.playPop();
                if (Math.random() < 0.4) showEncouragement();
            }

            /************************************************************
             * Core drawPoint — Bézier smoothed
             ************************************************************/
            function drawPoint(currentX, currentY) {
                // Spawn magic pointer particles as we draw
                particleSpawner(currentX, currentY);

                // Spray mode — scatter dots
                if (state.isSprayMode && !state.isEraser) {
                    drawSpray(currentX, currentY);
                    state.lastX = currentX;
                    state.lastY = currentY;
                    if (Math.random() < 0.005) showEncouragement();
                    return;
                }

                // Determine active color
                let activeStroke;
                if (state.isEraser) {
                    activeStroke = "rgba(0,0,0,1)";
                } else if (state.isRainbowBrush) {
                    state.rainbowHue = (state.rainbowHue + 2) % 360;
                    activeStroke = `hsl(${state.rainbowHue}, 100%, 55%)`;
                } else {
                    activeStroke = state.activeColor;
                }

                // Star brush mode
                if (state.brushMode === "star" && !state.isEraser) {
                    drawStarBrush(currentX, currentY, activeStroke);
                    state.lastX = currentX;
                    state.lastY = currentY;
                    if (Math.random() < 0.005) showEncouragement();
                    return;
                }

                // Calligraphy brush mode
                if (state.brushMode === "calligraphy" && !state.isEraser) {
                    drawCalligraphy(currentX, currentY, activeStroke);
                    state.lastX = currentX;
                    state.lastY = currentY;
                    if (Math.random() < 0.005) showEncouragement();
                    return;
                }

                // ── Normal brush with quadratic Bézier smoothing ──────────────
                const ctx = state.ctx;
                ctx.beginPath();
                ctx.lineCap = "round";
                ctx.lineJoin = "round";
                ctx.lineWidth = state.brushSize;

                if (state.isEraser) {
                    ctx.globalCompositeOperation = "destination-out";
                    ctx.strokeStyle = "rgba(0,0,0,1)";
                    ctx.shadowBlur = 0;
                } else {
                    ctx.globalCompositeOperation = "source-over";
                    ctx.strokeStyle = activeStroke;
                    if (state.currentTheme === "night") {
                        ctx.shadowBlur = 15;
                        ctx.shadowColor = activeStroke;
                    } else {
                        ctx.shadowBlur = 0;
                    }
                }

                // Use quadratic Bézier: draw to midpoint for smooth curves
                const midX = (state.lastX + currentX) / 2;
                const midY = (state.lastY + currentY) / 2;
                ctx.moveTo(state.bezierCpX, state.bezierCpY);
                ctx.quadraticCurveTo(state.lastX, state.lastY, midX, midY);
                ctx.stroke();
                state.bezierCpX = midX;
                state.bezierCpY = midY;

                // Mirror mode
                if (state.isMirrorMode) {
                    const layoutW = state.canvas.offsetWidth || 700;
                    ctx.save();
                    ctx.lineCap = "round";
                    ctx.lineJoin = "round";
                    ctx.lineWidth = state.brushSize;
                    if (state.isEraser) {
                        ctx.globalCompositeOperation = "destination-out";
                        ctx.strokeStyle = "rgba(0,0,0,1)";
                        ctx.shadowBlur = 0;
                    } else {
                        ctx.globalCompositeOperation = "source-over";
                        ctx.strokeStyle = activeStroke;
                        if (state.currentTheme === "night") {
                            ctx.shadowBlur = 15;
                            ctx.shadowColor = activeStroke;
                        } else {
                            ctx.shadowBlur = 0;
                        }
                    }
                    ctx.beginPath();
                    ctx.moveTo(layoutW - state.bezierCpX, state.bezierCpY);
                    ctx.quadraticCurveTo(layoutW - state.lastX, state.lastY, layoutW - midX, midY);
                    ctx.stroke();
                    ctx.restore();
                }

                state.lastX = currentX;
                state.lastY = currentY;

                // Periodic encouragement
                if (Math.random() < 0.005) showEncouragement();
            }

            function draw(e) {
                if (!state.isDrawing) return;
                if (e.pointerType === "touch") {
                    e.preventDefault();
                }

                const rect = state.canvas.getBoundingClientRect();
                const events = (typeof e.getCoalescedEvents === "function") ? e.getCoalescedEvents() : [e];
                const evList = (events && events.length > 0) ? events : [e];

                for (const ev of evList) {
                    const currentX = ev.clientX - rect.left;
                    const currentY = ev.clientY - rect.top;

                    // Shape mode: just update preview
                    if (state.brushMode === "shape") {
                        drawShapePreview(currentX, currentY);
                        state.lastX = currentX;
                        state.lastY = currentY;
                    } else {
                        drawPoint(currentX, currentY);
                    }
                }
            }

            function stopDrawing(e) {
                if (state.isDrawing) {
                    state.isDrawing = false;

                    // Finalize shape if in shape mode
                    if (state.brushMode === "shape" && e) {
                        const rect = state.canvas.getBoundingClientRect();
                        finalizeShape(e.clientX - rect.left, e.clientY - rect.top);
                    } else if (state.ctx) {
                        state.ctx.globalCompositeOperation = "source-over";
                        state.ctx.shadowBlur = 0;
                        saveState();
                    }

                    if (e && e.pointerId !== undefined && state.canvas && typeof state.canvas.releasePointerCapture === "function") {
                        try {
                            if (typeof state.canvas.hasPointerCapture !== "function" || state.canvas.hasPointerCapture(e.pointerId)) {
                                state.canvas.releasePointerCapture(e.pointerId);
                            }
                        } catch (_) {}
                    }
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
                updateCanvasCursor();
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

                // Fill color (current brush color or rainbow)
                const fillColorStr = state.isRainbowBrush ? `hsl(${state.rainbowHue}, 100%, 55%)` : state.activeColor;
                const { r: fillR, g: fillG, b: fillB, a: fillA } = parseColorToRgb(fillColorStr);

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

export { renderColors, selectColor, selectEraser, startDrawing, draw, drawSpray, stopDrawing, selectFillTool, performFloodFill, toggleMirror, setParticleSpawner, updateCanvasCursor, drawStarBrush, drawCalligraphy, drawShapePreview, finalizeShape };
