import { positiveQuotes } from "./data.js";

function showEncouragement(specificText = "") {
  const element = document.getElementById("encouragement-sidebar");
  if (!element) return;

  const text = specificText || positiveQuotes[Math.floor(Math.random() * positiveQuotes.length)];
  element.textContent = text;
  element.classList.remove("animate-pulse");
  void element.offsetWidth;
  element.classList.add("animate-pulse");
}

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

