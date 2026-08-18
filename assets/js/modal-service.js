import { synth } from "./synth.js";

function toggleModal(modalId, contentId, show) {
  synth.playClick();
  const modal = document.getElementById(modalId);
  const content = document.getElementById(contentId);
  if (!modal || !content) return;

  if (show) {
    modal.classList.remove("hidden");
    modal.setAttribute("aria-hidden", "false");
    setTimeout(() => {
      modal.classList.remove("opacity-0");
      content.classList.remove("scale-95");
      content.classList.add("scale-100");
    }, 10);
  } else {
    modal.classList.add("opacity-0");
    modal.setAttribute("aria-hidden", "true");
    content.classList.remove("scale-100");
    content.classList.add("scale-95");
    setTimeout(() => modal.classList.add("hidden"), 300);
  }
}

export { toggleModal };

