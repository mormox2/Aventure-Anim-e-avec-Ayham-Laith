import { showEncouragement } from "./feedback.js";
import { readStoredArray, writeStoredArray } from "./storage.js";
import { toggleModal } from "./modal-service.js";
import { speakArabic } from "./voice-duo.js";
import { synth } from "./synth.js";
import { state } from "./state.js";

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
                return readStoredArray(GUEST_KEY);
            }

            function saveFriends(names) {
                try {
                    writeStoredArray(GUEST_KEY, names);
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

                container.replaceChildren();
                friends.forEach((name, index) => {
                    const badge = document.createElement("span");
                    const emoji = friendEmojis[index % friendEmojis.length];
                    // Magnified premium style for guest/friend badges
                    badge.className =
                        "inline-flex items-center gap-1.5 text-xs md:text-sm font-black bg-gradient-to-r from-purple-200 via-pink-200 to-indigo-100 text-slate-850 px-3 py-1 rounded-full border-2 border-slate-800 shadow-cartoon-sm hover:scale-110 hover:-rotate-1 active:scale-95 transition-all duration-200 cursor-pointer select-none";
                    badge.addEventListener("click", () => celebrateName(name));
                    
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
                list.replaceChildren();

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
                    delBtn.textContent = "🗑️";
                    delBtn.addEventListener("click", () => removeFriend(name));
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
                        // Focus the input; its Enter listener is bound once by ui.js.
                        document.getElementById("friend-name-input")?.focus();
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


export { celebrateName, getFriends, saveFriends, addFriend, removeFriend, resetFriends, addSampleFriends, renderFriendBadges, renderFriendList, toggleFriendsModal };
