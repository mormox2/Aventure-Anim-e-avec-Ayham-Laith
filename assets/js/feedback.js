import { positiveQuotes } from "./data.js";

/**
 * Displays a positive encouragement quote in the UI with a gentle pulse animation.
 * @param {string} [specificText=""] - Optional specific message to show; falls back to a random quote.
 */
function showEncouragement(specificText = "") {
  const element = document.getElementById("encouragement-sidebar");
  if (!element) return;

  const text = specificText || positiveQuotes[Math.floor(Math.random() * positiveQuotes.length)];
  element.textContent = text;
  element.classList.remove("animate-pulse");
  void element.offsetWidth;
  element.classList.add("animate-pulse");
}

/**
 * Triggers full-screen celebratory confetti particles using canvas-confetti.
 */
function triggerConfetti() {
  if (typeof confetti !== "function") return;

  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.6 },
    colors: ["#FF4D6D", "#FF8C00", "#FFD700", "#4CAF50", "#00BFFF", "#9C27B0", "#FF69B4"],
  });
}

export { showEncouragement, triggerConfetti };
