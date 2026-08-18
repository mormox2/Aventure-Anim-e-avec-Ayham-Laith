import { showEncouragement, triggerConfetti } from "./feedback.js";
import { toggleModal } from "./modal-service.js";
import { saveState } from "./history.js";
import { synth } from "./synth.js";
import { state } from "./state.js";

            /************************************************************
             * Superheroes Modal & Template Loader
             ************************************************************/
            let heroesGalleryRendered = false;
let heroesDataPromise;

function loadHeroesData() {
    heroesDataPromise ??= import("./data/heroes.js");
    return heroesDataPromise.then(({ superheroes }) => superheroes);
}

            async function toggleHeroModal(show) {
                if (show && !heroesGalleryRendered) {
                    await renderHeroesGallery("all");
                    heroesGalleryRendered = true;
                }
                toggleModal("hero-modal", "hero-modal-content", show);
            }

            let currentTemplateFilter = "all";

            async function renderHeroesGallery(filterCat) {
                const cat = filterCat || "all";
                const container = document.getElementById("heroes-gallery");
                container.innerHTML = "<div class=\"col-span-full py-8 text-center text-slate-500\">جاري تحميل الرسومات...</div>";
                const superheroes = await loadHeroesData();
                container.innerHTML = "";

                const filtered = cat === "all" ? superheroes : superheroes.filter((h) => h.category === cat);

                filtered.forEach((hero) => {
                    const card = document.createElement("button");
                    card.type = "button";
                    // Pick a background gradient based on category
                    const bgGrad =
                        hero.category === "dino"
                            ? "bg-gradient-to-br from-green-50 to-lime-50"
                            : "bg-gradient-to-br from-sky-50 to-pink-50";
                    card.className = `group bg-white border-3 border-slate-800 rounded-2xl p-2 hover:border-pink-500 cursor-pointer transition-all hover:scale-105 active:scale-95 shadow-cartoon-sm hover:shadow-cartoon flex flex-col items-center gap-1`;
                    card.addEventListener("click", () => loadSuperhero(hero.id));

                    // Thumbnail SVG
                    const thumb = document.createElement("div");
                    thumb.className = `w-full h-28 md:h-32 flex items-center justify-center ${bgGrad} rounded-xl overflow-hidden`;
                    thumb.innerHTML = hero.svg;
                    const svgEl = thumb.querySelector("svg");
                    if (svgEl) {
                        svgEl.setAttribute("width", "100%");
                        svgEl.setAttribute("height", "100%");
                        svgEl.style.maxHeight = "100%";
                    }
                    card.appendChild(thumb);

                    // Name label
                    const label = document.createElement("div");
                    label.className = "text-xs md:text-sm font-extrabold text-slate-700 text-center";
                    label.innerHTML = `<span class="text-base">${hero.emoji}</span> ${hero.name}`;
                    card.appendChild(label);

                    container.appendChild(card);
                });
            }

            async function filterTemplates(category) {
                synth.playClick();
                currentTemplateFilter = category;

                // Update tab styles
                const tabs = ["all", "hero", "dino"];
                tabs.forEach((t) => {
                    const btn = document.getElementById(`tmpl-tab-${t}`);
                    if (!btn) return;
                    if (t === category) {
                        if (t === "dino") {
                            btn.className =
                                "flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-green-400 to-emerald-400 text-white font-extrabold text-sm flex items-center justify-center gap-1.5 transition-all";
                        } else if (t === "hero") {
                            btn.className =
                                "flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-red-400 to-purple-400 text-white font-extrabold text-sm flex items-center justify-center gap-1.5 transition-all";
                        } else {
                            btn.className =
                                "flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-red-400 to-blue-400 text-white font-extrabold text-sm flex items-center justify-center gap-1.5 transition-all";
                        }
                    } else {
                        btn.className =
                            "flex-1 py-2 px-3 rounded-xl text-slate-700 font-extrabold text-sm flex items-center justify-center gap-1.5 hover:bg-white/60 transition-all";
                    }
                });

                await renderHeroesGallery(category);
            }

            async function loadSuperhero(heroId) {
                const superheroes = await loadHeroesData();
                const hero = superheroes.find((h) => h.id === heroId);
                if (!hero) return;

                synth.playTada();

                // Confirm clearing existing canvas
                const hasContent = state.undoStack.length > 1;
                if (hasContent) {
                    if (!confirm(`هل تريد تحميل "${hero.name}" والبدء بتلوينه؟ سيتم مسح الرسم الحالي. 🎨`)) {
                        return;
                    }
                }

                // Clear the canvas first
                state.ctx.save();
                state.ctx.setTransform(1, 0, 0, 1, 0, 0);
                state.ctx.clearRect(0, 0, state.canvas.width, state.canvas.height);
                state.ctx.restore();

                // Load the hero SVG as an image on the canvas
                const svgString = hero.svg;
                const svgBlob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
                const url = URL.createObjectURL(svgBlob);

                const img = new Image();
                img.onload = () => {
                    const layoutW = state.canvas.offsetWidth || 700;
                    const layoutH = state.canvas.offsetHeight || 480;
                    // Apply template opacity if set
                    state.ctx.save();
                    const templateOpacity =
                        parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--template-opacity")) ||
                        1;
                    if (templateOpacity < 1) {
                        state.ctx.globalAlpha = templateOpacity;
                    }
                    // Compute fit-to-canvas dimensions (preserve aspect ratio with padding)
                    const padding = 20;
                    const availableW = layoutW - padding * 2;
                    const availableH = layoutH - padding * 2;
                    const ratio = Math.min(availableW / img.width, availableH / img.height);
                    const drawW = img.width * ratio;
                    const drawH = img.height * ratio;
                    const drawX = (layoutW - drawW) / 2;
                    const drawY = (layoutH - drawH) / 2;

                    state.ctx.drawImage(img, drawX, drawY, drawW, drawH);
                    state.ctx.restore();
                    URL.revokeObjectURL(url);

                    // Save the new state with the hero loaded
                    saveState();

                    // Close the modal & celebrate
                    toggleHeroModal(false);
                    triggerConfetti();
                    showEncouragement(`رائع! لوّن ${hero.name} بألوانك المفضلة! ${hero.emoji}✨`);
                };
                img.onerror = () => {
                    alert("حدث خطأ أثناء تحميل البطل. حاول مرة أخرى!");
                    URL.revokeObjectURL(url);
                };
                img.src = url;
            }


export { loadHeroesData, toggleHeroModal, renderHeroesGallery, filterTemplates, loadSuperhero };
