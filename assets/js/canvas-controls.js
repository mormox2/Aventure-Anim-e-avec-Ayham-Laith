import { colors, stickersData } from "./data.js";
import { selectColor, updateCanvasCursor } from "./canvas-tools.js";
import { showEncouragement, triggerConfetti } from "./feedback.js";
import { synth } from "./synth.js";
import { deselectAllStickers, addStickerToCanvas } from "./stickers.js";
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
                    btn.setAttribute("aria-label", `اختيار اللون ${color.name}`);
                    btn.className = `w-9 h-9 md:w-10 md:h-10 rounded-full border-3 border-slate-800 shadow-sm bubble-btn shrink-0 ${color.bgClass}`;
                    btn.addEventListener("click", () => {
                        const desktopButtons = document.querySelectorAll("#color-palette button");
                        const idx = colors.indexOf(color);
                        selectColor(color.val, desktopButtons[idx]);
                    });
                    container.appendChild(btn);
                });
            }

            // Populate mobile stickers gallery
            function renderMobileStickers(category = "all") {
                const container = document.getElementById("mobile-stickers-gallery");
                if (!container) return;
                container.replaceChildren();

                const filtered = stickersData.filter((st) => category === "all" || st.category === category);
                filtered.forEach((sticker) => {
                    const item = document.createElement("button");
                    item.type = "button";
                    item.setAttribute("aria-label", `إضافة ${sticker.name}`);
                    item.title = sticker.name;
                    item.className =
                        "bg-white border-2 border-slate-800 hover:border-pink-500 hover:bg-pink-50 rounded-2xl p-2 flex items-center justify-center cursor-pointer transition-all hover:scale-105 active:scale-95 shadow-cartoon-sm min-h-[56px]";
                    item.innerHTML = sticker.svg;
                    item.addEventListener("click", () => {
                        addStickerToCanvas(sticker.id);
                        showEncouragement(`✨ تمت إضافة ${sticker.name}! يمكنك تحريكه وتكبيره بيدك!`);
                        toggleMobileDrawer();
                    });
                    container.appendChild(item);
                });
            }

            function filterMobileStickers(category) {
                synth.playClick();
                const tabs = ["all", "eyes", "hats", "faces"];
                tabs.forEach((t) => {
                    const btn = document.getElementById(`mobile-tab-${t}`);
                    if (!btn) return;
                    if (t === category) {
                        btn.className = "bubble-btn py-1.5 px-3 rounded-xl border-2 border-slate-800 font-black text-xs bg-amber-400 text-slate-900 ring-2 ring-yellow-300 scale-105";
                    } else {
                        btn.className = "bubble-btn py-1.5 px-3 rounded-xl border-2 border-slate-800 font-bold text-xs bg-white text-slate-700 hover:bg-slate-100";
                    }
                });
                renderMobileStickers(category);
            }

            function switchMobileDrawerTab(tabName) {
                synth.playClick();
                const tabButtons = {
                    tools: document.getElementById("tab-btn-tools"),
                    stickers: document.getElementById("tab-btn-stickers"),
                    backgrounds: document.getElementById("tab-btn-backgrounds"),
                };
                const tabPanels = {
                    tools: document.getElementById("panel-tools"),
                    stickers: document.getElementById("panel-stickers"),
                    backgrounds: document.getElementById("panel-backgrounds"),
                };

                Object.keys(tabButtons).forEach((key) => {
                    if (!tabButtons[key] || !tabPanels[key]) return;
                    if (key === tabName) {
                        tabButtons[key].className = "flex-1 py-2 px-2 text-center font-black text-xs md:text-sm rounded-xl border-2 border-slate-800 bg-amber-400 text-slate-900 shadow-cartoon-sm transition-all";
                        tabPanels[key].classList.remove("hidden");
                    } else {
                        tabButtons[key].className = "flex-1 py-2 px-2 text-center font-bold text-xs md:text-sm rounded-xl border-2 border-slate-800 bg-white/80 text-slate-700 hover:bg-white transition-all";
                        tabPanels[key].classList.add("hidden");
                    }
                });

                if (tabName === "stickers") {
                    renderMobileStickers("all");
                }
            }

            // #16: Mobile tools drawer toggle
            function toggleMobileDrawer(forceState) {
                const drawer = document.getElementById("mobile-drawer");
                const content = document.getElementById("mobile-drawer-content");
                if (!drawer || !content) return;

                const shouldOpen = forceState !== undefined ? forceState : drawer.classList.contains("hidden");

                if (shouldOpen) {
                    renderMobileColors();
                    renderMobileStickers("all");
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


            /************************************************************
             * Brush Mode Selectors (calligraphy, star, shape)
             ************************************************************/
            function _resetBrushModeButtons() {
                ["btn-calligraphy", "btn-star-brush", "btn-shape"].forEach((id) => {
                    const b = document.getElementById(id);
                    if (b) b.classList.remove("bg-yellow-400", "scale-105");
                });
                const calBtn = document.getElementById("btn-calligraphy");
                if (calBtn) calBtn.classList.add("bg-indigo-300");
                const starBtn = document.getElementById("btn-star-brush");
                if (starBtn) starBtn.classList.add("bg-amber-300");
                const shapeBtn = document.getElementById("btn-shape");
                if (shapeBtn) shapeBtn.classList.add("bg-cyan-300");
            }

            function selectBrushMode(mode) {
                synth.playPop();
                // Toggle off if clicking the same mode
                if (state.brushMode === mode) {
                    state.brushMode = "normal";
                    _resetBrushModeButtons();
                    showEncouragement("🖌️ وضع الفرشاة العادي!");
                    updateCanvasCursor();
                    return;
                }
                // Deactivate conflicting tools
                state.isEraser = false;
                state.isSprayMode = false;
                state.isFillMode = false;
                state.activeStamp = null;
                state.brushMode = mode;
                _resetBrushModeButtons();

                const btnId = mode === "calligraphy" ? "btn-calligraphy"
                    : mode === "star" ? "btn-star-brush"
                    : "btn-shape";
                const btn = document.getElementById(btnId);
                if (btn) {
                    btn.classList.remove("bg-indigo-300", "bg-amber-300", "bg-cyan-300");
                    btn.classList.add("bg-yellow-400", "scale-105");
                }

                const messages = {
                    calligraphy: "✒️ وضع الخط العربي الجميل! ارسم ببطء للحصول على خط سميك!",
                    star: "⭐ وضع فرشاة النجوم السحرية! كل حركة تصنع نجمة!",
                    shape: "📐 وضع الأشكال! اختر شكلاً ثم اسحب على الرسمة!",
                };
                showEncouragement(messages[mode] || "");

                // Reset eraser, spray, fill buttons
                const eraserBtn = document.getElementById("btn-eraser");
                if (eraserBtn) { eraserBtn.classList.remove("bg-yellow-400", "scale-105"); eraserBtn.classList.add("bg-pink-300"); }
                const sprayBtn = document.getElementById("btn-spray");
                if (sprayBtn) { sprayBtn.classList.remove("bg-yellow-400", "scale-105"); sprayBtn.classList.add("bg-emerald-300"); }
                const fillBtn = document.getElementById("btn-fill");
                if (fillBtn) { fillBtn.classList.remove("bg-yellow-400", "scale-105"); fillBtn.classList.add("bg-purple-300"); }

                updateCanvasCursor();

                // Shape sub-panel: show if mode=shape, hide otherwise
                const shapePanel = document.getElementById("shape-sub-panel");
                if (shapePanel) shapePanel.classList.toggle("hidden", mode !== "shape");
            }

            function selectShape(type) {
                synth.playPop();
                state.shapeType = type;
                // Highlight selected shape button
                ["shape-circle", "shape-rect", "shape-line", "shape-heart"].forEach((id) => {
                    const b = document.getElementById(id);
                    if (b) b.classList.remove("ring-2", "ring-yellow-400", "scale-110");
                });
                const btn = document.getElementById(`shape-${type}`);
                if (btn) btn.classList.add("ring-2", "ring-yellow-400", "scale-110");
                showEncouragement(`📐 شكل ${type === "circle" ? "الدائرة" : type === "rect" ? "المستطيل" : type === "line" ? "الخط" : "القلب"} جاهز!`);
            }

export {
    selectSpray,
    selectCustomColor,
    renderMobileColors,
    renderMobileStickers,
    filterMobileStickers,
    switchMobileDrawerTab,
    toggleMobileDrawer,
    handleBackdropClick,
    downloadDrawingPNG,
    selectBrushMode,
    selectShape,
};
