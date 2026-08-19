import { colors } from "./data.js";
import { selectColor, updateCanvasCursor } from "./canvas-tools.js";
import { showEncouragement, triggerConfetti } from "./feedback.js";
import { synth } from "./synth.js";
import { deselectAllStickers } from "./stickers.js";
import { state } from "./state.js";

            // #7: Spray tool selector
            function selectSpray() {
                synth.playPop();
                state.isSprayMode = !state.isSprayMode;
                state.isEraser = false;
                state.isFillMode = false;
                state.activeStamp = null;

                const btn = document.getElementById("btn-spray");
                if (state.isSprayMode) {
                    if (btn) {
                        btn.classList.remove("bg-emerald-300");
                        btn.classList.add("bg-yellow-400", "scale-105");
                    }
                    // reset fill and eraser UI
                    const eraserBtn = document.getElementById("btn-eraser");
                    if (eraserBtn) {
                        eraserBtn.classList.remove("bg-yellow-400", "scale-105");
                        eraserBtn.classList.add("bg-pink-300");
                    }
                    const fillBtn = document.getElementById("btn-fill");
                    if (fillBtn) { fillBtn.classList.remove("bg-yellow-400","scale-105"); fillBtn.classList.add("bg-purple-300"); }
                    showEncouragement("🫧 وضع البخاخ! ارسم وستجد تأثيراً رائعاً!");
                } else {
                    if (btn) {
                        btn.classList.remove("bg-yellow-400", "scale-105");
                        btn.classList.add("bg-emerald-300");
                    }
                }
                updateCanvasCursor();
            }

            // #8: Custom color picker handler
            function selectCustomColor(hexColor) {
                synth.playPop();
                state.isEraser = false;
                state.isSprayMode = false;
                state.isFillMode = false;
                state.isRainbowBrush = false;
                state.activeStamp = null;
                state.activeColor = hexColor;

                // reset spray and fill button visuals
                const sprayBtn = document.getElementById("btn-spray");
                if (sprayBtn) { sprayBtn.classList.remove("bg-yellow-400","scale-105"); sprayBtn.classList.add("bg-emerald-300"); }
                const fillBtn = document.getElementById("btn-fill");
                if (fillBtn) { fillBtn.classList.remove("bg-yellow-400","scale-105"); fillBtn.classList.add("bg-purple-300"); }
                const eraserBtn = document.getElementById("btn-eraser");
                if (eraserBtn) {
                    eraserBtn.classList.remove("bg-yellow-400","scale-105");
                    eraserBtn.classList.add("bg-pink-300");
                }

                // Deselect all palette buttons
                document.querySelectorAll("#color-palette button").forEach((b) => {
                    b.classList.remove("scale-110");
                    const activeDot = b.querySelector(".active-dot");
                    if (activeDot) {
                        activeDot.classList.remove("opacity-100");
                        activeDot.classList.add("opacity-0");
                    }
                });

                // Update brush preview
                const preview = document.getElementById("brush-preview");
                if (preview) preview.style.background = hexColor;
                // Sync picker in case called programmatically
                const picker = document.getElementById("custom-color-picker");
                if (picker) picker.value = hexColor;

                updateCanvasCursor();
                showEncouragement("🎨 تم اختيار لون خاص بك!");
            }

            // #16: Populate mobile color palette (mirrors the desktop palette)
            function renderMobileColors() {
                const container = document.getElementById("mobile-color-palette");
                if (!container) return;
                container.replaceChildren();
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


export { selectSpray, selectCustomColor, renderMobileColors, toggleMobileDrawer, handleBackdropClick, downloadDrawingPNG };
