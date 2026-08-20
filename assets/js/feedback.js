import { positiveQuotes } from "./data.js";
import { getCurrentLanguage } from "./i18n.js";

const quotesFr = [
  "Quelles couleurs éclatantes ! 🎨🌟",
  "Tu es un artiste génial et très créatif ! 💖🤖",
  "Wouah ! Ton dessin est magnifique ! 🥰✨",
  "Trop beau ! Et si on le faisait danser maintenant ? 🕺",
  "Super travail champion ! Continue de dessiner ! 💪🚀",
  "Le plus joli dessin de la journée ! 🥳🌸",
  "Cette œuvre mérite d'être dans un musée ! 🖼️🎪",
  "Design féerique et superbes harmonies de couleurs ! 🔮🌈",
  "Bravo Ayham ! 👦🌟 Quel talent !",
  "Super Laith ! 👦✨ Tu es un vrai petit artiste !",
  "Ayham & Laith, vous êtes les rois du dessin ! 🏆🎨",
  "Allez Ayham & Laith, faisons danser ce dessin ! 💃🕺",
  "Magnifique création Ayham & Laith ! ✨🌈",
];

const quotesEn = [
  "What amazing colors! 🎨🌟",
  "You are a super smart and creative artist! 💖🤖",
  "Wow! Your drawing makes me so happy! 🥰✨",
  "Awesome design! Shall we make it dance now? 🕺",
  "Great job champion! Keep on drawing! 💪🚀",
  "The prettiest drawing of the day! 🥳🌸",
  "This masterpiece belongs in a museum! 🖼️🎪",
  "Magical design and beautiful color palette! 🔮🌈",
  "Well done Ayham! 👦🌟 Awesome drawing!",
  "Great job Laith! 👦✨ You are a little artist!",
  "Ayham & Laith, you are drawing champions today! 🏆🎨",
  "Come on Ayham & Laith, let's make it dance! 💃🕺",
  "Brilliant work Ayham & Laith! ✨🌈",
];

/**
 * Displays a positive encouragement quote in the UI with a gentle pulse animation.
 * @param {string} [specificText=""] - Optional specific message to show; falls back to a random quote.
 */
function showEncouragement(specificText = "") {
  const element = document.getElementById("encouragement-sidebar");
  if (!element) return;

  const lang = getCurrentLanguage();
  let pool = positiveQuotes;
  if (lang === "fr") pool = quotesFr;
  else if (lang === "en") pool = quotesEn;

  const text = specificText || pool[Math.floor(Math.random() * pool.length)];
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
