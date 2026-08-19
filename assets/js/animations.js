import { aliveMessages } from "./data.js";
import { getAnimationSpeed } from "./animation-state.js";
import { showEncouragement, triggerConfetti } from "./feedback.js";
import { deselectAllStickers } from "./stickers.js";
import { synth } from "./synth.js";
import { speakArabic } from "./voice-duo.js";
import { state } from "./state.js";

/* Drawing animations, Give Life mode and day/night theme. */
            /************************************************************
             * 8. Cartoon Animation Controls
             ************************************************************/
            let activeAnimationName = null;

            function stopAllAnimations() {
                const drawingArea = document.getElementById("canvas-anim-container");
                if (!drawingArea) return;

                if ('speechSynthesis' in window) {
                    window.speechSynthesis.cancel();
                }

                const animClasses = [
                    "anim-dance",
                    "anim-jump",
                    "anim-spin",
                    "anim-shake",
                    "anim-grow",
                    "anim-shrink",
                    "anim-bounce-squish",
                    "anim-float-alive",
                ];
                animClasses.forEach((cls) => drawingArea.classList.remove(cls));
                activeAnimationName = null;

                // Reset highlight on all animation buttons
                const buttonsGrid = document.getElementById("anim-buttons-grid");
                if (buttonsGrid) {
                    buttonsGrid.querySelectorAll("button").forEach((btn) => {
                        btn.classList.remove("ring-4", "ring-yellow-400", "scale-105");
                    });
                }

                // Turn off Alive mode if active
                if (state.isAlive) {
                    state.isAlive = false;

                    const btn = document.getElementById("btn-give-life");
                    if (btn) {
                        btn.classList.remove("from-green-400", "to-emerald-400");
                        btn.classList.add("from-yellow-400", "to-pink-400");
                    }

                    const textSpan = document.getElementById("give-life-text");
                    if (textSpan) textSpan.textContent = "أعطِ الحياة للرسمة!";

                    const speechBubble = document.getElementById("speech-bubble");
                    if (speechBubble) {
                        speechBubble.classList.add("opacity-0", "translate-y-3");
                        setTimeout(() => {
                            speechBubble.classList.add("hidden");
                        }, 300);
                    }

                    const aliveGlow = document.getElementById("alive-glow");
                    if (aliveGlow) aliveGlow.classList.add("hidden");

                    if (aliveBubbleInterval) {
                        clearInterval(aliveBubbleInterval);
                        aliveBubbleInterval = null;
                    }
                }
            }

            function triggerAnimation(animName, buttonEl) {
                const speed = getAnimationSpeed() || 1;
                if (animName === "dance") synth.playDanceMelody(speed);
                else if (animName === "jump") synth.playJumpSound(speed);
                else if (animName === "spin") synth.playSpinSound(speed);
                else if (animName === "shake") synth.playShakeSound(speed);
                else if (animName === "grow") synth.playGrowSound(speed);
                else if (animName === "shrink") synth.playShrinkSound(speed);
                else if (animName === "bounce-squish") synth.playBounceSound(speed);
                else synth.playBoing(speed);

                deselectAllStickers(); // Make it cleaner for animation

                const drawingArea = document.getElementById("canvas-anim-container");
                if (!drawingArea) return;
                const targetClass = `anim-${animName}`;

                // 1. If this animation is already active, we stop it (toggle off)
                if (activeAnimationName === animName) {
                    stopAllAnimations();
                    showEncouragement("توقفت الحركة! 🛑");
                    return;
                }

                // 2. Stop any other active animations (including Give Life mode)
                stopAllAnimations();

                // 3. Force layout recalculation to re-trigger CSS animations
                void drawingArea.offsetWidth;

                // 4. Apply speed multiplier before adding class
                if (speed !== 1) {
                    // Remove and re-add the class after speed is set
                    const baseDuration = 1; // Base duration in seconds (relative)
                    const durationMultiplier = 1 / speed;
                    drawingArea.style.setProperty("--anim-speed-factor", speed);
                    // Apply a data attribute for CSS to use
                    drawingArea.dataset.speed = speed;
                } else {
                    drawingArea.dataset.speed = "1";
                }

                // 5. Add new animation class & update state
                drawingArea.classList.add(targetClass);
                activeAnimationName = animName;

                // 6. Highlight this button
                if (buttonEl) {
                    buttonEl.classList.add("ring-4", "ring-yellow-400", "scale-105");
                }

                // Play Confetti and motivational quote
                showEncouragement();
                triggerConfetti();
            }

            /************************************************************
             * 9. "Give Life to Drawing" Mode (إحياء الرسمة)
             ************************************************************/
            let aliveBubbleInterval;

            function toggleGiveLife() {
                synth.playTada();
                deselectAllStickers();

                const btn = document.getElementById("btn-give-life");
                const textSpan = document.getElementById("give-life-text");
                const drawingArea = document.getElementById("canvas-anim-container");
                const speechBubble = document.getElementById("speech-bubble");
                const aliveGlow = document.getElementById("alive-glow");

                if (!state.isAlive) {
                    // Stop any active normal animation first
                    stopAllAnimations();

                    state.isAlive = true;
                    btn.classList.remove("from-yellow-400", "to-pink-400");
                    btn.classList.add("from-green-400", "to-emerald-400");
                    textSpan.textContent = "إيقاف الحياة! 🛑";

                    // Float Canvas (Inner container moves, frame remains steady)
                    if (drawingArea) {
                        drawingArea.classList.add("anim-float-alive");
                    }

                    // Show Speech bubble & alive glow outline
                    speechBubble.classList.remove("hidden");
                    setTimeout(() => {
                        speechBubble.classList.remove("opacity-0", "translate-y-3");
                    }, 50);
                    aliveGlow.classList.remove("hidden");

                    // Confetti burst
                    triggerConfetti();

                    // Start cycling quotes
                    cycleSpeechMessages();
                    aliveBubbleInterval = setInterval(cycleSpeechMessages, 5000);

                    showEncouragement("أيهم و ليث، رسمتكما السحرية تتحرك الآن! 💫👾");
                } else {
                    // Turn off Alive mode simply using stopAllAnimations
                    stopAllAnimations();
                    showEncouragement("توقفت الحركة! 🛑");
                }
            }

            function cycleSpeechMessages() {
                if (!state.isAlive) return;
                const textEl = document.getElementById("speech-text");
                const randomMsg = aliveMessages[Math.floor(Math.random() * aliveMessages.length)];
                textEl.textContent = randomMsg;

                // Cute bubble synth sound
                synth.playPop();
                speakArabic(randomMsg);
            }

            /************************************************************
             * 10. Day & Night Mode Toggle
             ************************************************************/
            function toggleTheme() {
                synth.playPop();
                const body = document.body;
                const title = document.getElementById("app-title") || document.querySelector("h1");
                const subtitle = document.getElementById("app-subtitle");
                const icon = document.getElementById("theme-icon");
                const text = document.getElementById("theme-text");
                const decoClouds = document.getElementById("deco-clouds");
                const decoRainbow = document.getElementById("deco-rainbow");
                const decoNight = document.getElementById("deco-night");

                const subtitleAnd = subtitle?.querySelector('[data-role="separator"]');
                const subtitleAdventure = subtitle?.querySelector('[data-role="adventure"]');

                if (state.currentTheme === "day") {
                    state.currentTheme = "night";
                    // Apply Night Theme
                    body.classList.remove("rainbow-bg-glow");
                    body.classList.add("night-bg-glow");

                    if (title) {
                        title.classList.remove("text-slate-800");
                        title.classList.add("text-yellow-100");
                    }

                    // Adjust subtitle children for night if present
                    if (subtitleAnd) subtitleAnd.classList.replace("text-slate-500", "text-yellow-200");
                    if (subtitleAdventure) {
                        subtitleAdventure.classList.remove("text-pink-600", "bg-white/70", "border-pink-200");
                        subtitleAdventure.classList.add("text-yellow-300", "bg-slate-800/60", "border-yellow-400");
                    }

                    if (icon) icon.textContent = "🌙";
                    if (text) text.textContent = "الليل";

                    if (decoClouds) decoClouds.classList.add("opacity-10");
                    if (decoRainbow) decoRainbow.classList.add("opacity-5");
                    if (decoNight) {
                        decoNight.classList.remove("opacity-0");
                        decoNight.classList.add("opacity-100");
                    }

                    showEncouragement("أيهم و ليث، مرحباً بالوضع الليلي الجميل! 🌌🌠");
                } else {
                    state.currentTheme = "day";
                    // Apply Day Theme
                    body.classList.remove("night-bg-glow");
                    body.classList.add("rainbow-bg-glow");

                    if (title) {
                        title.classList.remove("text-yellow-100");
                        title.classList.add("text-slate-800");
                    }

                    // Restore subtitle children for day if present
                    if (subtitleAnd) subtitleAnd.classList.replace("text-yellow-200", "text-slate-500");
                    if (subtitleAdventure) {
                        subtitleAdventure.classList.remove("text-yellow-300", "bg-slate-800/60", "border-yellow-400");
                        subtitleAdventure.classList.add("text-pink-600", "bg-white/70", "border-pink-200");
                    }

                    if (icon) icon.textContent = "☀️";
                    if (text) text.textContent = "النهار";

                    if (decoClouds) decoClouds.classList.remove("opacity-10");
                    if (decoRainbow) decoRainbow.classList.remove("opacity-5");
                    if (decoNight) {
                        decoNight.classList.remove("opacity-100");
                        decoNight.classList.add("opacity-0");
                    }

                    showEncouragement("أيهم و ليث، أهلاً بالنهار والغيوم اللطيفة! ☀️🌈");
                }
            }

export { stopAllAnimations, triggerAnimation, toggleGiveLife, cycleSpeechMessages, toggleTheme };
