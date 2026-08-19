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

            function renderColors() {
                const palette = document.getElementById("color-palette");
                palette.replaceChildren();

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

                // Reset eraser style
                const eraserBtn = document.getElementById("btn-eraser");
                if (eraserBtn) {
                    eraserBtn.classList.remove("bg-yellow-400", "scale-105");
                    eraserBtn.classList.add("bg-pink-300");
                }
                const sprayBtn = document.getElementById("btn-spray");
                if (sprayBtn) {
                    sprayBtn.classList.remove("bg-yellow-400", "scale-105");
                    sprayBtn.classList.add("bg-emerald-300");
                }
                const fillBtn = document.getElementById("btn-fill");
                if (fillBtn) {
                    fillBtn.classList.remove("bg-yellow-400", "scale-105");
                    fillBtn.classList.add("bg-purple-300");
                }

                // Update active indicators
                document.querySelectorAll("#color-palette button").forEach((b) => {
                    b.classList.remove("scale-110");
                    const activeDot = b.querySelector(".active-dot");
                    if (activeDot) {
                        activeDot.classList.remove("opacity-100");
                        activeDot.classList.add("opacity-0");
                    }
                });

                if (buttonEl) {
                    buttonEl.classList.add("scale-110");
                    const activeDot = buttonEl.querySelector(".active-dot");
                    if (activeDot) {
                        activeDot.classList.remove("opacity-0");
                        activeDot.classList.add("opacity-100");
                    }
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

                // De-select colors from palette
                document.querySelectorAll("#color-palette button").forEach((b) => {
                    b.classList.remove("scale-110");
                    const activeDot = b.querySelector(".active-dot");
                    if (activeDot) {
                        activeDot.classList.remove("opacity-100");
                        activeDot.classList.add("opacity-0");
                    }
                });

                // Update brush preview to checkered pattern or white representing eraser
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

                // NEW: If Fill mode is active, perform flood fill and return
                if (state.isFillMode) {
                    if (performFloodFill(clickX, clickY)) saveState();
                    return;
                }

                // NEW: If a stamp is selected, place it
                if (state.activeStamp) {
                    placeStamp(e.clientX, e.clientY);
                    state.activeStamp = null;
                    updateCanvasCursor();
                    return;
                }

                state.isDrawing = true;
                state.lastX = clickX;
                state.lastY = clickY;

                // Spawn magic pointer particles
                particleSpawner(clickX, clickY);

                // Play soft drawing start sound
                synth.playClick();
            }

            function drawPoint(currentX, currentY) {
                // Spawn magic pointer particles as we draw
                particleSpawner(currentX, currentY);

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

            function draw(e) {
                if (!state.isDrawing) return;
                if (e.pointerType === "touch") {
                    e.preventDefault();
                }

                const rect = state.canvas.getBoundingClientRect();
                const events = (typeof e.getCoalescedEvents === "function") ? e.getCoalescedEvents() : [e];

                if (events && events.length > 0) {
                    for (const ev of events) {
                        const currentX = ev.clientX - rect.left;
                        const currentY = ev.clientY - rect.top;
                        drawPoint(currentX, currentY);
                    }
                } else {
                    const currentX = e.clientX - rect.left;
                    const currentY = e.clientY - rect.top;
                    drawPoint(currentX, currentY);
                }
            }

            function stopDrawing(e) {
                if (state.isDrawing) {
                    state.isDrawing = false;
                    if (state.ctx) {
                        state.ctx.globalCompositeOperation = "source-over"; // Reset to default
                        state.ctx.shadowBlur = 0; // Reset glow
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

export { renderColors, selectColor, selectEraser, startDrawing, draw, drawSpray, stopDrawing, selectFillTool, performFloodFill, toggleMirror, setParticleSpawner, updateCanvasCursor };
