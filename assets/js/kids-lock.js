import { synth } from "./synth.js";
import { showEncouragement, triggerConfetti } from "./feedback.js";
import { t } from "./i18n.js";

let isKidsLock = false;
let holdTimer = null;
let holdStartTime = 0;
const HOLD_DURATION = 3000; // 3 seconds to unlock
let activeChallenge = { num1: 3, num2: 4, answer: 7, options: [5, 7, 9] };

const onBeforeUnloadHandler = (e) => {
    if (isKidsLock) {
        e.preventDefault();
        e.returnValue = "";
        return "";
    }
};

function isKidsLockActive() {
    return isKidsLock;
}

function enableKidsLock() {
    isKidsLock = true;
    synth.playPop();

    // 1. Request Fullscreen
    const docEl = document.documentElement;
    if (!document.fullscreenElement) {
        if (docEl.requestFullscreen) {
            docEl.requestFullscreen().catch(() => {});
        } else if (docEl.webkitRequestFullscreen) {
            docEl.webkitRequestFullscreen().catch(() => {});
        }
    }

    // 2. Request Keyboard Lock for Escape key if supported (Chromium / Edge / Android)
    if (navigator.keyboard && typeof navigator.keyboard.lock === "function") {
        navigator.keyboard.lock(["Escape"]).catch(() => {});
    }

    // 3. Prevent accidental tab / window closing
    window.addEventListener("beforeunload", onBeforeUnloadHandler);

    // 4. Update UI: Show floating unlock badge
    const overlay = document.getElementById("kids-lock-overlay");
    if (overlay) {
        overlay.classList.remove("hidden");
        overlay.classList.add("flex");
    }

    // 5. Update header button visual
    const lockBtn = document.getElementById("btn-kids-lock");
    if (lockBtn) {
        lockBtn.classList.add("ring-4", "ring-yellow-400", "scale-105", "bg-amber-400");
    }

    document.body.classList.add("kids-locked");
    showEncouragement(t("kids_lock.activated_toast", "🔒 Mode Verrouillage Enfant activé !"));
}

function disableKidsLock() {
    if (!isKidsLock) return;
    isKidsLock = false;
    synth.playTada();
    triggerConfetti();

    // 1. Unlock Keyboard
    if (navigator.keyboard && typeof navigator.keyboard.unlock === "function") {
        try {
            navigator.keyboard.unlock();
        } catch (_) {}
    }

    // 2. Remove beforeunload listener
    window.removeEventListener("beforeunload", onBeforeUnloadHandler);

    // 3. Exit Fullscreen if active
    if (document.fullscreenElement) {
        if (document.exitFullscreen) {
            document.exitFullscreen().catch(() => {});
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }

    // 4. Hide floating unlock overlay & challenge modal
    const overlay = document.getElementById("kids-lock-overlay");
    if (overlay) {
        overlay.classList.add("hidden");
        overlay.classList.remove("flex");
    }

    closeParentChallengeModal();

    // 5. Update header button visual
    const lockBtn = document.getElementById("btn-kids-lock");
    if (lockBtn) {
        lockBtn.classList.remove("ring-4", "ring-yellow-400", "scale-105", "bg-amber-400");
    }

    document.body.classList.remove("kids-locked");
    resetHoldProgress();
    showEncouragement(t("kids_lock.unlocked_toast", "🔓 Déverrouillage réussi !"));
}

function toggleKidsLock() {
    if (isKidsLock) {
        openParentChallengeModal();
    } else {
        enableKidsLock();
    }
}

// ---------------- Hold-to-Unlock Logic (3 Seconds) ----------------

function startHoldUnlock(e) {
    if (e && e.preventDefault) e.preventDefault();
    if (!isKidsLock) return;

    holdStartTime = Date.now();
    const progressCircle = document.getElementById("kids-lock-progress-circle");
    const label = document.getElementById("kids-lock-hold-text");

    if (holdTimer) clearInterval(holdTimer);

    holdTimer = setInterval(() => {
        const elapsed = Date.now() - holdStartTime;
        const remaining = Math.max(0, Math.ceil((HOLD_DURATION - elapsed) / 1000));
        const progress = Math.min(1, elapsed / HOLD_DURATION);

        if (progressCircle) {
            // Stroke dashoffset: 100 is empty, 0 is full
            const offset = 100 - progress * 100;
            progressCircle.style.strokeDashoffset = String(offset);
        }

        if (label) {
            label.textContent = `${remaining}s... ⏳`;
        }

        if (elapsed >= HOLD_DURATION) {
            clearInterval(holdTimer);
            holdTimer = null;
            disableKidsLock();
        }
    }, 50);
}

function cancelHoldUnlock() {
    if (holdTimer) {
        clearInterval(holdTimer);
        holdTimer = null;
    }
    resetHoldProgress();
}

function resetHoldProgress() {
    const progressCircle = document.getElementById("kids-lock-progress-circle");
    const label = document.getElementById("kids-lock-hold-text");

    if (progressCircle) {
        progressCircle.style.strokeDashoffset = "100";
    }
    if (label) {
        label.textContent = t("kids_lock.hold_to_unlock", "Maintenez 3s 🔒");
    }
}

// ---------------- Parental Math Challenge Modal ----------------

function generateParentChallenge() {
    const num1 = Math.floor(Math.random() * 6) + 3; // 3 to 8
    const num2 = Math.floor(Math.random() * 5) + 2; // 2 to 6
    const answer = num1 + num2;

    const wrong1 = answer + (Math.random() > 0.5 ? 1 : -1) * (Math.floor(Math.random() * 2) + 1);
    const wrong2 = answer + (Math.random() > 0.5 ? 2 : -2) * (Math.floor(Math.random() * 2) + 1);

    const options = [answer, wrong1, wrong2].sort(() => Math.random() - 0.5);
    activeChallenge = { num1, num2, answer, options };
    return activeChallenge;
}

function openParentChallengeModal() {
    const modal = document.getElementById("kids-lock-challenge-modal");
    if (!modal) return;

    const challenge = generateParentChallenge();
    const questionEl = document.getElementById("kids-lock-question");
    const optionsContainer = document.getElementById("kids-lock-options-container");

    if (questionEl) {
        questionEl.textContent = `${challenge.num1} + ${challenge.num2} = ?`;
    }

    if (optionsContainer) {
        optionsContainer.replaceChildren();
        challenge.options.forEach((opt) => {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "bubble-btn py-3 px-6 bg-amber-300 hover:bg-amber-200 text-slate-900 font-black text-xl md:text-2xl rounded-2xl border-3 border-slate-800 shadow-cartoon transition-all active:scale-95";
            btn.textContent = String(opt);
            btn.addEventListener("click", () => verifyParentChallenge(opt));
            optionsContainer.appendChild(btn);
        });
    }

    modal.classList.remove("hidden");
    modal.classList.remove("opacity-0");
    const content = document.getElementById("kids-lock-challenge-content");
    if (content) content.classList.remove("scale-95");
}

function closeParentChallengeModal() {
    const modal = document.getElementById("kids-lock-challenge-modal");
    if (!modal || modal.classList.contains("hidden")) return;

    modal.classList.add("opacity-0");
    const content = document.getElementById("kids-lock-challenge-content");
    if (content) content.classList.add("scale-95");

    modal.classList.add("hidden");
}

function verifyParentChallenge(selected) {
    if (selected === activeChallenge.answer) {
        disableKidsLock();
    } else {
        synth.playBoing();
        const content = document.getElementById("kids-lock-challenge-content");
        if (content) {
            content.classList.add("animate-shake");
            setTimeout(() => {
                if (typeof document !== "undefined") {
                    const el = document.getElementById("kids-lock-challenge-content");
                    if (el) el.classList.remove("animate-shake");
                }
            }, 500);
        }
        showEncouragement(t("kids_lock.wrong_answer", "Mauvaise réponse, réessayez ! 🤔"));
    }
}

export {
    isKidsLockActive,
    enableKidsLock,
    disableKidsLock,
    toggleKidsLock,
    startHoldUnlock,
    cancelHoldUnlock,
    openParentChallengeModal,
    closeParentChallengeModal,
    verifyParentChallenge,
};
