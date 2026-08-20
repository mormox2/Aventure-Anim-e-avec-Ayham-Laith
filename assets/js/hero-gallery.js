import { showEncouragement, triggerConfetti } from "./feedback.js";
import { toggleModal } from "./modal-service.js";
import { saveState } from "./history.js";
import { synth } from "./synth.js";
import { state } from "./state.js";

/************************************************************
 * Superheroes & Characters Modal & Template Loader
 ************************************************************/
let heroesGalleryRendered = false;
let heroesDataPromise;

function loadHeroesData() {
    heroesDataPromise ??= import("./data/heroes.js");
    return heroesDataPromise.then(({ superheroes }) => superheroes);
}

async function toggleHeroModal(show) {
    if (show && !heroesGalleryRendered) {
        await renderHeroesGallery(currentTemplateFilter || "all");
        heroesGalleryRendered = true;
    }
    toggleModal("hero-modal", "hero-modal-content", show);
}

let currentTemplateFilter = "all";

async function renderHeroesGallery(filterCat) {
    const cat = filterCat || "all";
    const container = document.getElementById("heroes-gallery");
    if (!container) return;

    const loading = document.createElement("div");
    loading.className = "col-span-full py-12 text-center text-slate-500 font-extrabold text-base flex flex-col items-center gap-2";
    loading.innerHTML = `<span class="text-3xl animate-bounce">🎨</span><span>جاري تجهيز الرسومات الممتعة...</span>`;
    container.replaceChildren(loading);

    const superheroes = await loadHeroesData();
    container.replaceChildren();

    const filtered = cat === "all" ? superheroes : superheroes.filter((h) => h.category === cat);

    filtered.forEach((hero, index) => {
        const card = document.createElement("button");
        card.type = "button";
        card.dataset.heroCategory = hero.category;

        // Custom gradients and tags per category
        let bgGrad = "bg-gradient-to-br from-sky-50 via-indigo-50 to-pink-50";
        let hoverBorder = "hover:border-pink-500";
        let badgeColor = "bg-pink-100 text-pink-700 border-pink-300";
        let badgeText = "بطل";

        if (hero.category === "dino") {
            bgGrad = "bg-gradient-to-br from-green-50 via-emerald-50 to-lime-50";
            hoverBorder = "hover:border-emerald-500";
            badgeColor = "bg-emerald-100 text-emerald-800 border-emerald-300";
            badgeText = "ديناصور";
        } else if (hero.category === "fantasy") {
            bgGrad = "bg-gradient-to-br from-purple-50 via-fuchsia-50 to-amber-50";
            hoverBorder = "hover:border-purple-500";
            badgeColor = "bg-purple-100 text-purple-800 border-purple-300";
            badgeText = "سحر وخيال";
        }

        card.className = `group relative bg-white border-3 border-slate-800 rounded-2xl p-2.5 ${hoverBorder} cursor-pointer transition-all duration-200 hover:-translate-y-1 active:translate-y-0.5 shadow-cartoon-sm hover:shadow-cartoon flex flex-col items-center gap-1.5 focus:outline-none focus:ring-4 focus:ring-yellow-300`;
        card.setAttribute("aria-label", `تحميل رسمة ${hero.name}`);
        card.style.animation = `fadeSlideIn 0.3s ease-out ${Math.min(index * 0.03, 0.4)}s both`;

        card.addEventListener("click", () => loadSuperhero(hero.id));

        // Thumbnail SVG Container with Badge
        const thumb = document.createElement("div");
        thumb.className = `relative w-full h-28 md:h-36 flex items-center justify-center ${bgGrad} rounded-xl overflow-hidden p-1.5 border border-slate-200 group-hover:border-slate-400 transition-colors`;
        thumb.innerHTML = hero.svg;

        const svgEl = thumb.querySelector("svg");
        if (svgEl) {
            svgEl.setAttribute("width", "100%");
            svgEl.setAttribute("height", "100%");
            svgEl.style.maxHeight = "100%";
            svgEl.style.maxWidth = "100%";
            svgEl.style.filter = "drop-shadow(0 2px 4px rgba(0,0,0,0.08))";
            svgEl.classList.add("group-hover:scale-105", "transition-transform", "duration-200");
        }

        // Category Mini Badge
        const categoryBadge = document.createElement("span");
        categoryBadge.className = `absolute top-1.5 right-1.5 text-[10px] font-extrabold px-1.5 py-0.5 rounded-full border ${badgeColor} shadow-xs select-none pointer-events-none`;
        categoryBadge.textContent = badgeText;
        thumb.appendChild(categoryBadge);

        card.appendChild(thumb);

        // Name label with emoji
        const label = document.createElement("div");
        label.className = "w-full text-xs md:text-sm font-black text-slate-800 text-center truncate px-1 flex items-center justify-center gap-1";
        
        const emoji = document.createElement("span");
        emoji.className = "text-base group-hover:scale-125 transition-transform inline-block";
        emoji.textContent = hero.emoji;

        const nameSpan = document.createElement("span");
        nameSpan.className = "truncate";
        nameSpan.textContent = hero.name;

        label.append(emoji, nameSpan);
        card.appendChild(label);

        container.appendChild(card);
    });
}

async function filterTemplates(category) {
    synth.playClick();
    currentTemplateFilter = category;

    // Update tab styles
    const tabs = ["all", "hero", "dino", "fantasy"];
    tabs.forEach((t) => {
        const btn = document.getElementById(`tmpl-tab-${t}`);
        if (!btn) return;
        if (t === category) {
            if (t === "dino") {
                btn.className =
                    "flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-emerald-500 to-green-400 text-white font-black text-xs md:text-sm flex items-center justify-center gap-1.5 shadow-cartoon-sm border-2 border-slate-800 transition-all";
            } else if (t === "hero") {
                btn.className =
                    "flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-rose-500 to-indigo-500 text-white font-black text-xs md:text-sm flex items-center justify-center gap-1.5 shadow-cartoon-sm border-2 border-slate-800 transition-all";
            } else if (t === "fantasy") {
                btn.className =
                    "flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-purple-500 to-amber-400 text-white font-black text-xs md:text-sm flex items-center justify-center gap-1.5 shadow-cartoon-sm border-2 border-slate-800 transition-all";
            } else {
                btn.className =
                    "flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 text-white font-black text-xs md:text-sm flex items-center justify-center gap-1.5 shadow-cartoon-sm border-2 border-slate-800 transition-all";
            }
        } else {
            btn.className =
                "flex-1 py-2 px-2 md:px-3 rounded-xl text-slate-700 font-extrabold text-xs md:text-sm flex items-center justify-center gap-1 hover:bg-white/80 transition-all border-2 border-transparent";
        }
    });

    await renderHeroesGallery(category);
}

async function loadSuperhero(heroId) {
    const superheroes = await loadHeroesData();
    const hero = superheroes.find((h) => h.id === heroId);
    if (!hero) return;

    synth.playTada();

    // Confirm clearing existing canvas if canvas has edits
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
        
        state.ctx.save();
        const templateOpacity =
            parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--template-opacity")) ||
            1;
        if (templateOpacity < 1) {
            state.ctx.globalAlpha = templateOpacity;
        }
        
        // Compute fit-to-canvas dimensions (preserve aspect ratio with padding)
        const padding = 24;
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
        showEncouragement(`رائع! لوّن ${hero.name} بألوانك السحرية الجميلة! ${hero.emoji}✨`);
    };
    img.onerror = () => {
        alert("حدث خطأ أثناء تحميل البطل. حاول مرة أخرى!");
        URL.revokeObjectURL(url);
    };
    img.src = url;
}

export { loadHeroesData, toggleHeroModal, renderHeroesGallery, filterTemplates, loadSuperhero };
