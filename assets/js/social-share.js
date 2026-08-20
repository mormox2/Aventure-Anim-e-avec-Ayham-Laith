import { createCompositeCanvas } from "./export-particles.js";
import { showEncouragement, triggerConfetti } from "./feedback.js";
import { getCurrentLanguage, t } from "./i18n.js";
import { toggleModal } from "./modal-service.js";
import { deselectAllStickers } from "./stickers.js";
import { synth } from "./synth.js";
import { downloadDrawingPNG } from "./canvas-controls.js";

const APP_URL = "https://toondraw.vercel.app/?ref=share";

function toggleShareModal(show = true) {
  toggleModal("share-modal", "share-modal-content", show);
}

async function openShareModal() {
  deselectAllStickers();
  synth.playTada();

  const previewContainer = document.getElementById("share-preview-container");
  const previewImg = document.getElementById("share-preview-img");

  if (previewImg) {
    try {
      const compositeCanvas = await createCompositeCanvas();
      if (compositeCanvas) {
        previewImg.src = compositeCanvas.toDataURL("image/png");
        previewImg.classList.remove("hidden");
      }
    } catch (e) {
      if (previewContainer) {
        previewContainer.classList.add("hidden");
      }
    }
  }

  // Update share link field value
  const linkInput = document.getElementById("share-link-input");
  if (linkInput) {
    linkInput.value = APP_URL;
  }

  // Show or hide native share button based on browser capability
  const nativeBtn = document.getElementById("btn-share-native");
  if (nativeBtn) {
    if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
      nativeBtn.classList.remove("hidden");
    } else {
      nativeBtn.classList.add("hidden");
    }
  }

  toggleShareModal(true);
}

function getShareText() {
  return t(
    "share.message_text",
    "Regardez ce magnifique dessin créé sur ToonDraw ! Venez dessiner et animer gratuitement 🎨✨"
  );
}

async function shareToSocial(platform) {
  const text = getShareText();
  const url = APP_URL;
  let shareUrl = "";

  switch (platform) {
    case "whatsapp":
      shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${text}\n${url}`)}`;
      break;
    case "twitter":
    case "x":
      shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}&hashtags=ToonDraw,KidsArt,Coloring`;
      break;
    case "facebook":
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
      break;
    case "telegram":
      shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
      break;
    case "pinterest":
      shareUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(text)}`;
      break;
    case "native":
      if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
        try {
          const compositeCanvas = await createCompositeCanvas();
          compositeCanvas.toBlob(async (blob) => {
            if (blob && navigator.canShare && navigator.canShare({ files: [new File([blob], "toondraw.png", { type: "image/png" })] })) {
              const file = new File([blob], `toondraw-${Date.now()}.png`, { type: "image/png" });
              await navigator.share({
                title: "ToonDraw 🎨",
                text,
                files: [file],
              });
            } else {
              await navigator.share({
                title: "ToonDraw 🎨",
                text,
                url,
              });
            }
            triggerConfetti();
            synth.playTada();
          }, "image/png");
          return;
        } catch (err) {
          if (err.name === "AbortError") return;
        }
      }
      break;
    default:
      console.warn(`Unknown social platform: ${platform}`);
      return;
  }

  if (shareUrl && typeof window !== "undefined") {
    synth.playPop();
    triggerConfetti();
    window.open(shareUrl, "_blank", "noopener,noreferrer,width=600,height=500");
  }
}

function copyShareLink() {
  const url = APP_URL;
  if (typeof navigator !== "undefined" && navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(() => {
      synth.playTada();
      triggerConfetti();
      showEncouragement(t("share.copied", "Lien copié dans le presse-papier ! 📋✨"));
      const copyBtnText = document.getElementById("copy-share-btn-text");
      if (copyBtnText) {
        const prev = copyBtnText.textContent;
        copyBtnText.textContent = "✅ " + t("share.copied_short", "Copié !");
        setTimeout(() => {
          copyBtnText.textContent = prev;
        }, 2000);
      }
    }).catch(() => {
      synth.playPop();
      showEncouragement(`👉 ${url}`);
    });
  } else {
    synth.playPop();
    showEncouragement(`👉 ${url}`);
  }
}

function downloadSocialImage() {
  synth.playTada();
  downloadDrawingPNG();
  showEncouragement(t("share.download_toast", "📸 Image téléchargée ! Idéale pour vos stories et statuts !"));
}

export {
  toggleShareModal,
  openShareModal,
  shareToSocial,
  copyShareLink,
  downloadSocialImage,
  getShareText,
  APP_URL,
};
