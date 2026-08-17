import { state } from "./state.js";
import * as services from "./services.js";

/* Animation settings, help, encouragement and confetti helpers. */
            /************************************************************
             * 15. Animation Speed Control
             ************************************************************/
            let animationSpeed = 1; // 1 = normal

            function setAnimationSpeed(speed) {
                animationSpeed = speed;
                services.synth.playPop();

                const slowBtn = document.getElementById("speed-slow");
                const normalBtn = document.getElementById("speed-normal");
                const fastBtn = document.getElementById("speed-fast");

                if (slowBtn) {
                    if (speed === 0.6) {
                        slowBtn.className = "speed-btn bubble-btn text-lg md:text-xl w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-pink-400 text-slate-900 font-extrabold rounded-xl border-3 border-slate-800 shadow-cartoon scale-110 ring-4 ring-yellow-400 z-10 transition-all";
                    } else {
                        slowBtn.className = "speed-btn bubble-btn text-lg md:text-xl w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-pink-200 hover:bg-pink-300 text-slate-800 font-extrabold rounded-xl border-3 border-slate-800 shadow-cartoon-sm transition-all";
                    }
                }

                if (normalBtn) {
                    if (speed === 1) {
                        normalBtn.className = "speed-btn bubble-btn text-lg md:text-xl w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-amber-400 text-slate-900 font-extrabold rounded-xl border-3 border-slate-800 shadow-cartoon scale-110 ring-4 ring-yellow-400 z-10 transition-all";
                    } else {
                        normalBtn.className = "speed-btn bubble-btn text-lg md:text-xl w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-amber-200 hover:bg-amber-300 text-slate-800 font-extrabold rounded-xl border-3 border-slate-800 shadow-cartoon-sm transition-all";
                    }
                }

                if (fastBtn) {
                    if (speed === 1.5) {
                        fastBtn.className = "speed-btn bubble-btn text-lg md:text-xl w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-emerald-400 text-slate-900 font-extrabold rounded-xl border-3 border-slate-800 shadow-cartoon scale-110 ring-4 ring-yellow-400 z-10 transition-all";
                    } else {
                        fastBtn.className = "speed-btn bubble-btn text-lg md:text-xl w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-emerald-200 hover:bg-emerald-300 text-slate-800 font-extrabold rounded-xl border-3 border-slate-800 shadow-cartoon-sm transition-all";
                    }
                }

                // Update global CSS custom property used by all animation keyframes
                document.documentElement.style.setProperty("--anim-speed-factor", speed);

                // Also apply to the canvas-anim-container for direct style override
                const animContainer = document.getElementById("canvas-anim-container");
                if (animContainer) {
                    animContainer.style.setProperty("--anim-speed-factor", speed);
                    animContainer.dataset.speed = speed;
                }
            }

            /************************************************************
             * 15. Template Opacity Control
             ************************************************************/
            function setTemplateOpacity(opacity) {
                const templates = document.querySelectorAll(".template-img");
                templates.forEach((t) => {
                    t.style.opacity = opacity;
                });
                // Also store the preference for future templates
                document.documentElement.style.setProperty("--template-opacity", opacity);
            }

            function toggleHelpModal(show) {
                toggleModal("help-modal", "help-modal-content", show);
            }

            // Peeking Animals Fun interactions
            function animalReact(animal) {
                services.synth.playBoing();
                triggerConfetti();

                let bubble;
                if (animal === "bunny") {
                    bubble = document.getElementById("bunny-bubble");
                } else {
                    bubble = document.getElementById("cat-bubble");
                }

                // Show bubble message
                bubble.classList.remove("opacity-0");
                setTimeout(() => {
                    bubble.classList.add("opacity-0");
                }, 2500);

                showEncouragement(
                    animal === "bunny"
                        ? "الأرنب اللطيف يحييكما يا أيهم و ليث! 🐰🌈"
                        : "القطة الوديعة تحبكما يا أيهم و ليث! 🐱💖",
                );
            }

            // Show floating encouragement text on top or sidebar
            function showEncouragement(specificText = "") {
                const el = document.getElementById("encouragement-sidebar");
                const text = specificText || positiveQuotes[Math.floor(Math.random() * positiveQuotes.length)];
                el.textContent = text;

                // Visual bounce on text update
                el.classList.remove("animate-pulse");
                void el.offsetWidth;
                el.classList.add("animate-pulse");
            }

            // Local Confetti burst wrapper
            function triggerConfetti() {
                if (typeof confetti === "function") {
                    confetti({
                        particleCount: 80,
                        spread: 70,
                        origin: { y: 0.6 },
                        colors: ["#FF4D6D", "#FF8C00", "#FFD700", "#4CAF50", "#00BFFF", "#9C27B0", "#FF69B4"],
                    });
                }
            }

export { animationSpeed, setAnimationSpeed, setTemplateOpacity, toggleHelpModal, animalReact, showEncouragement, triggerConfetti };
