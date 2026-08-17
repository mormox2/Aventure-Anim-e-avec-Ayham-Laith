/* Reset, templates, gallery and friends persistence. */
            /************************************************************
             * 12. App Utilities: Reset, Save, Help, Animal Interactivities
             ************************************************************/
            function resetApp() {
                synth.playTada();
                if (confirm("هل تريد مسح اللوحة والملصقات وإعادة ضبط كل شيء؟ 🥳")) {
                    ctx.save();
                    ctx.setTransform(1, 0, 0, 1, 0, 0);
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.restore();
                    document.getElementById("stickers-layer").innerHTML = "";

                    // Reset defaults
                    activeColor = "#FF4D6D";
                    isRainbowBrush = false;
                    isEraser = false;
                    brushSize = 12;
                    document.getElementById("brush-size").value = 12;
                    document.getElementById("brush-size-val").textContent = 12;
                    // Reset brush preview size & color
                    const preview = document.getElementById("brush-preview");
                    preview.style.width = "12px";
                    preview.style.height = "12px";
                    preview.style.background = "#FF4D6D";
                    // Reset eraser button
                    document.getElementById("btn-eraser").classList.remove("bg-yellow-400", "scale-105");
                    document.getElementById("btn-eraser").classList.add("bg-pink-300");

                    // Reset all animations and live states cleanly using stopAllAnimations
                    stopAllAnimations();

                    // Reset theme & music
                    if (currentTheme === "night") {
                        toggleTheme();
                    }
                    if (synth.isPlayingMusic) {
                        toggleMusic();
                    }

                    undoStack = [];
                    redoStack = [];
                    saveState();

                    renderColors();
                    triggerConfetti();
                    showEncouragement("تم تصفير لوحتك السحرية بنجاح! جاهز للإبداع؟ 🚀");
                }
            }

            /************************************************************
             * Superheroes Modal & Template Loader
             ************************************************************/
            let heroesGalleryRendered = false;

            function toggleHeroModal(show) {
                if (show && !heroesGalleryRendered) {
                    renderHeroesGallery("all");
                    heroesGalleryRendered = true;
                }
                toggleModal("hero-modal", "hero-modal-content", show);
            }

            let currentTemplateFilter = "all";

            function renderHeroesGallery(filterCat) {
                const cat = filterCat || "all";
                const container = document.getElementById("heroes-gallery");
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
                    card.onclick = () => loadSuperhero(hero.id);

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

            function filterTemplates(category) {
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

                renderHeroesGallery(category);
            }

            function loadSuperhero(heroId) {
                const hero = superheroes.find((h) => h.id === heroId);
                if (!hero) return;

                synth.playTada();

                // Confirm clearing existing canvas
                const hasContent = undoStack.length > 1;
                if (hasContent) {
                    if (!confirm(`هل تريد تحميل "${hero.name}" والبدء بتلوينه؟ سيتم مسح الرسم الحالي. 🎨`)) {
                        return;
                    }
                }

                // Save current state for undo
                saveState();

                // Clear the canvas first
                ctx.save();
                ctx.setTransform(1, 0, 0, 1, 0, 0);
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.restore();

                // Load the hero SVG as an image on the canvas
                const svgString = hero.svg;
                const svgBlob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
                const url = URL.createObjectURL(svgBlob);

                const img = new Image();
                img.onload = () => {
                    const layoutW = canvas.offsetWidth || 700;
                    const layoutH = canvas.offsetHeight || 480;
                    // Apply template opacity if set
                    ctx.save();
                    const templateOpacity =
                        parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--template-opacity")) ||
                        1;
                    if (templateOpacity < 1) {
                        ctx.globalAlpha = templateOpacity;
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

                    ctx.drawImage(img, drawX, drawY, drawW, drawH);
                    ctx.restore();
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

            /************************************************************
             * 13. Gallery (localStorage saved drawings)
             ************************************************************/
            const GALLERY_KEY = "arsam_wa_harrik_gallery";

            function getSavedDrawings() {
                try {
                    const data = localStorage.getItem(GALLERY_KEY);
                    return data ? JSON.parse(data) : [];
                } catch (e) {
                    return [];
                }
            }

            function saveDrawingToGallery(thumbnailUrl) {
                const drawings = getSavedDrawings();
                const timestamp = Date.now();
                const label = `رسم ${new Date().toLocaleDateString("ar-SA")}`;

                drawings.push({ id: timestamp, label, dataUrl: thumbnailUrl, date: timestamp });

                // Keep only the most recent 12 drawings (limit storage)
                while (drawings.length > 12) {
                    drawings.shift();
                }

                try {
                    localStorage.setItem(GALLERY_KEY, JSON.stringify(drawings));
                } catch (e) {
                    showEncouragement("مساحة التخزين ممتلئة! احذف بعض الرسومات القديمة.");
                }
            }

            function deleteDrawingFromGallery(drawId) {
                let drawings = getSavedDrawings();
                drawings = drawings.filter((d) => d.id !== drawId);
                try {
                    localStorage.setItem(GALLERY_KEY, JSON.stringify(drawings));
                } catch (e) {}
                renderGalleryGrid();
            }

            function renderGalleryGrid() {
                const grid = document.getElementById("gallery-grid");
                const empty = document.getElementById("gallery-empty");
                const drawings = getSavedDrawings();

                grid.innerHTML = "";

                if (drawings.length === 0) {
                    empty.classList.remove("hidden");
                    return;
                }
                empty.classList.add("hidden");

                drawings
                    .slice()
                    .reverse()
                    .forEach((draw) => {
                        const card = document.createElement("div");
                        card.className =
                            "bg-white border-3 border-slate-800 rounded-2xl p-2 flex flex-col gap-1.5 shadow-cartoon-sm";

                        const img = document.createElement("img");
                        img.src = draw.dataUrl;
                        img.className =
                            "w-full aspect-square object-cover rounded-xl border-2 border-slate-600 cursor-pointer hover:opacity-80 transition-all";
                        img.onclick = () => loadDrawingFromGallery(draw.dataUrl);
                        card.appendChild(img);

                        const label = document.createElement("div");
                        label.className = "text-xs font-extrabold text-slate-700 text-center";
                        label.textContent = draw.label;
                        card.appendChild(label);

                        const delBtn = document.createElement("button");
                        delBtn.className =
                            "bubble-btn text-xs bg-red-300 hover:bg-red-200 text-slate-800 font-extrabold rounded-xl border-2 border-slate-800 shadow-cartoon-sm py-1 px-2";
                        delBtn.innerHTML = "🗑️ حذف";
                        delBtn.onclick = () => deleteDrawingFromGallery(draw.id);
                        card.appendChild(delBtn);

                        grid.appendChild(card);
                    });
            }

            function loadDrawingFromGallery(dataUrl) {
                synth.playBoing();
                if (confirm("هل تريد تحميل هذه الرسمة؟ سيتم حفظ الرسمة الحالية أولاً.")) {
                    // Save current drawing first
                    saveCurrentDrawingToGallery();

                    // Load the gallery drawing
                    const img = new Image();
                    img.onload = () => {
                        const layoutW = canvas.offsetWidth || 700;
                        const layoutH = canvas.offsetHeight || 480;
                        ctx.save();
                        ctx.setTransform(1, 0, 0, 1, 0, 0);
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        ctx.restore();
                        ctx.drawImage(img, 0, 0, layoutW, layoutH);
                        saveState();
                        showEncouragement("🖼️ تم تحميل الرسمة من المعرض!");
                    };
                    img.src = dataUrl;
                }
            }

            function saveCurrentDrawingToGallery() {
                const dataUrl = canvas.toDataURL("image/jpeg", 0.7);
                saveDrawingToGallery(dataUrl);
            }

            function toggleGalleryModal(show) {
                if (show) renderGalleryGrid();
                toggleModal("gallery-modal", "gallery-modal-content", show);
            }

            function celebrateName(name) {
                if (window.synth) {
                    synth.playTada();
                }
                showEncouragement(`✨ بطلنا الخارق ${name}! ✨`);
                speakArabic("أهلاً بالبطل " + name);

                if (typeof confetti === "function") {
                    const colors = name === "أيهم"
                        ? ["#FFB000", "#FF6B00", "#FFD700", "#FF4500"]
                        : name === "ليث"
                        ? ["#00E5FF", "#0088FF", "#00F5FF", "#1E90FF"]
                        : ["#FF4D6D", "#4AE0A3", "#3B82F6", "#FBBF24", "#A78BFA"];

                    const duration = 1.5 * 1000;
                    const end = Date.now() + duration;

                    (function frame() {
                        confetti({
                            particleCount: 5,
                            angle: 60,
                            spread: 55,
                            origin: { x: 0 },
                            colors: colors
                        });
                        confetti({
                            particleCount: 5,
                            angle: 120,
                            spread: 55,
                            origin: { x: 1 },
                            colors: colors
                        });

                        if (Date.now() < end) {
                            requestAnimationFrame(frame);
                        }
                    }());
                }
            }

            /************************************************************
             * 14. Friends / Guest Names for Ayhem & Layth
             ************************************************************/
            const GUEST_KEY = "arsam_wa_harrik_guests";

            function getFriends() {
                try {
                    const data = localStorage.getItem(GUEST_KEY);
                    return data ? JSON.parse(data) : [];
                } catch (e) {
                    return [];
                }
            }

            function saveFriends(names) {
                try {
                    localStorage.setItem(GUEST_KEY, JSON.stringify(names));
                } catch (e) {}
                renderFriendBadges();
                renderFriendList();
            }

            function addFriend() {
                const input = document.getElementById("friend-name-input");
                const name = input.value.trim();
                if (!name) return;

                const friends = getFriends();
                if (friends.includes(name)) {
                    showEncouragement(`🤔 ${name} موجود بالفعل!`);
                    return;
                }
                if (friends.length >= 15) {
                    showEncouragement("⚠️ الحد الأقصى 15 صديقاً!");
                    return;
                }

                friends.push(name);
                saveFriends(friends);
                input.value = "";
                input.focus();
                synth.playPop();
                showEncouragement(`🎉 مرحباً ${name}! أنت الآن صديق أيهم وليث!`);
                speakArabic("مرحباً " + name + "! أنت الآن صديق أيهم وليث!");
            }

            function removeFriend(name) {
                let friends = getFriends();
                friends = friends.filter((f) => f !== name);
                saveFriends(friends);
                synth.playBoing();
                showEncouragement(`👋 وداعاً ${name}! سنشتاق إليك!`);
            }

            function resetFriends() {
                if (confirm("هل تريد حذف جميع الأصدقاء؟")) {
                    saveFriends([]);
                    synth.playBoing();
                    showEncouragement("🗑️ تم حذف جميع الأصدقاء!");
                }
            }

            function addSampleFriends() {
                const sample = ["سارة", "خالد", "نور", "يوسف", "مريم", "عمر", "حسن", "لينا"];
                const friends = getFriends();
                let addedCount = 0;

                sample.forEach((name) => {
                    if (!friends.includes(name) && friends.length < 15) {
                        friends.push(name);
                        addedCount++;
                    }
                });

                if (addedCount > 0) {
                    saveFriends(friends);
                    synth.playTada();
                    showEncouragement(`🎉 تم إضافة ${addedCount} أصدقاء جدد!`);
                } else {
                    showEncouragement("🤗 جميع الأصدقاء موجودون بالفعل!");
                }
            }

            // Emojis for friend badges (assigned based on index)
            const friendEmojis = [
                "😊",
                "😎",
                "🤩",
                "🥳",
                "😺",
                "🦊",
                "🐼",
                "🐨",
                "🦁",
                "🐯",
                "🐸",
                "🐵",
                "🦄",
                "🐲",
                "🪄",
            ];

            function renderFriendBadges() {
                const container = document.getElementById("guest-badges");
                if (!container) return;
                const friends = getFriends();

                container.innerHTML = "";
                friends.forEach((name, index) => {
                    const badge = document.createElement("span");
                    const emoji = friendEmojis[index % friendEmojis.length];
                    // Magnified premium style for guest/friend badges
                    badge.className =
                        "inline-flex items-center gap-1.5 text-xs md:text-sm font-black bg-gradient-to-r from-purple-200 via-pink-200 to-indigo-100 text-slate-850 px-3 py-1 rounded-full border-2 border-slate-800 shadow-cartoon-sm hover:scale-110 hover:-rotate-1 active:scale-95 transition-all duration-200 cursor-pointer select-none";
                    badge.onclick = () => celebrateName(name);
                    
                    const spanEmoji = document.createElement("span");
                    spanEmoji.textContent = emoji;
                    const spanName = document.createElement("span");
                    spanName.textContent = name;
                    badge.appendChild(spanEmoji);
                    badge.appendChild(spanName);
                    container.appendChild(badge);
                });
            }

            function renderFriendList() {
                const list = document.getElementById("friend-list");
                const empty = document.getElementById("friend-list-empty");
                if (!list || !empty) return;

                const friends = getFriends();
                list.innerHTML = "";

                if (friends.length === 0) {
                    empty.classList.remove("hidden");
                    return;
                }
                empty.classList.add("hidden");

                friends.forEach((name, index) => {
                    const emoji = friendEmojis[index % friendEmojis.length];
                    const item = document.createElement("div");
                    item.className =
                        "flex items-center gap-3 bg-white border-2 border-slate-800 rounded-2xl p-3 shadow-cartoon-sm";

                    const avatar = document.createElement("span");
                    avatar.className = "text-2xl";
                    avatar.textContent = emoji;
                    item.appendChild(avatar);

                    const nameSpan = document.createElement("span");
                    nameSpan.className = "flex-grow font-extrabold text-slate-800 text-base";
                    nameSpan.textContent = name;
                    item.appendChild(nameSpan);

                    const delBtn = document.createElement("button");
                    delBtn.className =
                        "bubble-btn text-sm bg-red-300 hover:bg-red-200 text-slate-800 font-extrabold rounded-xl border-2 border-slate-800 shadow-cartoon-sm px-3 py-1";
                    delBtn.innerHTML = "🗑️";
                    delBtn.onclick = () => removeFriend(name);
                    item.appendChild(delBtn);

                    list.appendChild(item);
                });
            }

            function toggleFriendsModal(show) {
                synth.playClick();
                const modal = document.getElementById("friends-modal");
                const content = document.getElementById("friends-modal-content");

                if (show) {
                    renderFriendList();
                    modal.classList.remove("hidden");
                    setTimeout(() => {
                        modal.classList.remove("opacity-0");
                        content.classList.remove("scale-95");
                        content.classList.add("scale-100");
                        // Focus the input and add keyboard listener
                        const input = document.getElementById("friend-name-input");
                        if (input) {
                            input.focus();
                            input.onkeydown = (e) => {
                                if (e.key === "Enter") {
                                    e.preventDefault();
                                    addFriend();
                                }
                            };
                        }
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

