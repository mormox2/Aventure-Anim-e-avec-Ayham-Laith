import {
  clearCanvas,
  confirmClearCanvas,
  downloadDrawingPNG,
  filterMobileStickers,
  redo,
  selectBrushMode,
  selectCanvasBg,
  selectCustomColor,
  selectEraser,
  selectFillTool,
  selectShape,
  selectSpray,
  switchMobileDrawerTab,
  toggleClearModal,
  toggleMirror,
  toggleMobileDrawer,
  toggleStampsModal,
  undo,
} from "./drawing.js";
import { toggleMusic } from "./audio-controls.js";
import { toggleGiveLife, toggleTheme, triggerAnimation } from "./animations.js";
import { filterStickers } from "./stickers.js";
import {
  addFriend,
  addSampleFriends,
  celebrateName,
  filterTemplates,
  resetApp,
  resetFriends,
  toggleFriendsModal,
  toggleGalleryModal,
  toggleHeroModal,
} from "./utilities-gallery.js";
import {
  animalReact,
  copyQrLink,
  selectLanguage,
  setAnimationSpeed,
  setTemplateOpacity,
  toggleFullscreen,
  toggleHelpModal,
  toggleLangModal,
  toggleQrModal,
} from "./settings.js";
import { saveDrawing, shareDrawing } from "./export-particles.js";
import { toggleSplitMode } from "./voice-duo.js";
import {
  toggleShareModal,
  openShareModal,
  shareToSocial,
  copyShareLink,
  downloadSocialImage,
} from "./social-share.js";
import {
  toggleKidsLock,
  startHoldUnlock,
  cancelHoldUnlock,
  openParentChallengeModal,
  closeParentChallengeModal,
} from "./kids-lock.js";
import { state } from "./state.js";

const actions = Object.freeze({
  "add-friend": addFriend,
  "add-sample-friends": addSampleFriends,
  "clear-canvas": clearCanvas,
  "confirm-clear-canvas": confirmClearCanvas,
  "copy-qr-link": copyQrLink,
  "copy-share-link": copyShareLink,
  "download-drawing-png": downloadDrawingPNG,
  "download-social-image": downloadSocialImage,
  "filter-templates": filterTemplates,
  redo,
  "reset-app": resetApp,
  "reset-friends": resetFriends,
  "save-drawing": saveDrawing,
  "share-drawing": openShareModal,
  "select-canvas-bg": selectCanvasBg,
  "select-eraser": selectEraser,
  "select-fill-tool": selectFillTool,
  "select-spray": selectSpray,
  "select-brush-mode": selectBrushMode,
  "select-shape": selectShape,
  "toggle-clear-modal": toggleClearModal,
  "toggle-friends-modal": toggleFriendsModal,
  "toggle-fullscreen": toggleFullscreen,
  "toggle-gallery-modal": toggleGalleryModal,
  "toggle-give-life": toggleGiveLife,
  "toggle-help-modal": toggleHelpModal,
  "toggle-hero-modal": toggleHeroModal,
  "toggle-kids-lock": toggleKidsLock,
  "toggle-lang-modal": toggleLangModal,
  "toggle-mirror": toggleMirror,
  "toggle-mobile-drawer": toggleMobileDrawer,
  "toggle-music": toggleMusic,
  "toggle-qr-modal": toggleQrModal,
  "toggle-share-modal": toggleShareModal,
  "toggle-split-mode": toggleSplitMode,
  "toggle-stamps-modal": toggleStampsModal,
  "toggle-theme": toggleTheme,
  "open-parent-challenge": openParentChallengeModal,
  "close-parent-challenge": closeParentChallengeModal,
  undo,
});

const mobileTools = Object.freeze({
  "clear-canvas": clearCanvas,
  "download-drawing-png": downloadDrawingPNG,
  "reset-app": resetApp,
  "save-drawing": saveDrawing,
  "select-eraser": selectEraser,
  "select-fill-tool": selectFillTool,
  "select-spray": selectSpray,
  "share-drawing": openShareModal,
  "toggle-fullscreen": toggleFullscreen,
  "toggle-kids-lock": toggleKidsLock,
  "toggle-lang-modal": () => toggleLangModal(true),
  "toggle-mirror": toggleMirror,
  "toggle-qr-modal": () => toggleQrModal(true),
  "toggle-share-modal": () => toggleShareModal(true),
  "toggle-stamps-modal": () => toggleStampsModal(true),
});

function getActionValue(element) {
  const value = element.dataset.uiValue;
  if (value === "true" || value === "false") return value === "true";
  return undefined;
}

function invokeAction(name, element) {
  const action = actions[name];
  if (typeof action !== "function") {
    console.warn(`Unknown UI action: ${name}`);
    return;
  }

  const value = getActionValue(element);
  if (value === undefined) action();
  else action(value);
}

function handleMobileTool(element) {
  const action = mobileTools[element.dataset.uiTool];
  if (typeof action === "function") action();
  toggleMobileDrawer(false);
}

function handleClick(event) {
  const element = event.target.closest("[data-ui-click]");
  if (!element) return;

  const action = element.dataset.uiClick;
  if (element.dataset.uiValue !== "false" && typeof element.focus === "function") {
    element.focus();
  }
  if (action === "celebrate-name") {
    celebrateName(element.dataset.uiName);
  } else if (action === "select-language") {
    selectLanguage(element.dataset.uiLang);
  } else if (action === "trigger-animation") {
    triggerAnimation(element.dataset.uiAnimation, element.dataset.uiSelf ? element : null);
  } else if (action === "set-animation-speed") {
    setAnimationSpeed(Number(element.dataset.uiSpeed));
  } else if (action === "filter-stickers") {
    filterStickers(element.dataset.uiCategory);
  } else if (action === "filter-mobile-stickers") {
    filterMobileStickers(element.dataset.uiCategory);
  } else if (action === "switch-mobile-tab") {
    switchMobileDrawerTab(element.dataset.uiTab);
  } else if (action === "filter-templates") {
    filterTemplates(element.dataset.uiCategory);
  } else if (action === "animal-react") {
    animalReact(element.dataset.uiAnimal);
  } else if (action === "select-canvas-bg") {
    selectCanvasBg(element.dataset.uiBg);
  } else if (action === "select-brush-mode") {
    selectBrushMode(element.dataset.uiMode);
  } else if (action === "select-shape") {
    selectShape(element.dataset.uiShape);
  } else if (action === "share-social") {
    shareToSocial(element.dataset.uiPlatform);
  } else if (action === "mobile-tool") {
    handleMobileTool(element);
  } else {
    invokeAction(action, element);
  }
}

function handleInput(event) {
  const element = event.target.closest("[data-ui-input]");
  if (!element) return;

  switch (element.dataset.uiInput) {
    case "custom-color":
    case "mobile-custom-color":
      selectCustomColor(element.value);
      break;
    case "template-opacity":
    case "mobile-template-opacity":
      setTemplateOpacity(Number.parseInt(element.value, 10) / 100);
      break;
    case "mobile-brush-size":
      state.brushSize = Number.parseInt(element.value, 10);
      document.getElementById("brush-size").value = element.value;
      document.getElementById("brush-size-val").textContent = element.value;
      const brushPreview = document.getElementById("brush-preview");
      if (brushPreview) {
        brushPreview.style.width = `${element.value}px`;
        brushPreview.style.height = `${element.value}px`;
      }
      break;
    default:
      console.warn(`Unknown UI input: ${element.dataset.uiInput}`);
  }
}

function handleBackdropClick(event) {
  const backdrop = event.target.closest("[data-ui-backdrop]");
  if (!backdrop || event.target !== backdrop) return;

  const content = backdrop.querySelector('[id$="-content"], .absolute.bottom-0');
  if (content && content.contains(event.target)) return;

  const closeAction = actions[backdrop.dataset.uiClose];
  if (typeof closeAction === "function") closeAction(false);
}

function bindFriendInput() {
  const input = document.getElementById("friend-name-input");
  if (!input || input.dataset.uiBound === "true") return;
  input.dataset.uiBound = "true";
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addFriend();
    }
  });
}

export function initializeUI() {
  document.addEventListener("click", handleClick);
  document.addEventListener("click", handleBackdropClick);
  document.addEventListener("input", handleInput);
  bindFriendInput();

  const unlockBtn = document.getElementById("kids-lock-unlock-btn");
  if (unlockBtn) {
    unlockBtn.addEventListener("pointerdown", startHoldUnlock);
    unlockBtn.addEventListener("pointerup", cancelHoldUnlock);
    unlockBtn.addEventListener("pointerleave", cancelHoldUnlock);
    unlockBtn.addEventListener("pointercancel", cancelHoldUnlock);
    unlockBtn.addEventListener("contextmenu", (e) => e.preventDefault());
  }
}
