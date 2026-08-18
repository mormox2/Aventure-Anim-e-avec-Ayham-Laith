import {
  clearCanvas,
  downloadDrawingPNG,
  redo,
  selectCanvasBg,
  selectCustomColor,
  selectEraser,
  selectFillTool,
  selectSpray,
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
import { animalReact, setAnimationSpeed, setTemplateOpacity, toggleHelpModal } from "./settings.js";
import { saveDrawing } from "./export-particles.js";
import { toggleSplitMode } from "./voice-duo.js";
import { state } from "./state.js";

const actions = Object.freeze({
  "add-friend": addFriend,
  "add-sample-friends": addSampleFriends,
  "clear-canvas": clearCanvas,
  "download-drawing-png": downloadDrawingPNG,
  "filter-templates": filterTemplates,
  redo,
  "reset-app": resetApp,
  "reset-friends": resetFriends,
  "save-drawing": saveDrawing,
  "select-canvas-bg": selectCanvasBg,
  "select-eraser": selectEraser,
  "select-fill-tool": selectFillTool,
  "select-spray": selectSpray,
  "toggle-friends-modal": toggleFriendsModal,
  "toggle-gallery-modal": toggleGalleryModal,
  "toggle-give-life": toggleGiveLife,
  "toggle-help-modal": toggleHelpModal,
  "toggle-hero-modal": toggleHeroModal,
  "toggle-mirror": toggleMirror,
  "toggle-mobile-drawer": toggleMobileDrawer,
  "toggle-music": toggleMusic,
  "toggle-split-mode": toggleSplitMode,
  "toggle-stamps-modal": toggleStampsModal,
  "toggle-theme": toggleTheme,
  undo,
});

const mobileTools = Object.freeze({
  "select-eraser": selectEraser,
  "select-spray": selectSpray,
  "select-fill-tool": selectFillTool,
  "toggle-mirror": toggleMirror,
  "clear-canvas": clearCanvas,
  "download-drawing-png": downloadDrawingPNG,
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
  toggleMobileDrawer();
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
  } else if (action === "trigger-animation") {
    triggerAnimation(element.dataset.uiAnimation, element.dataset.uiSelf ? element : null);
  } else if (action === "set-animation-speed") {
    setAnimationSpeed(Number(element.dataset.uiSpeed));
  } else if (action === "filter-stickers") {
    filterStickers(element.dataset.uiCategory);
  } else if (action === "filter-templates") {
    filterTemplates(element.dataset.uiCategory);
  } else if (action === "animal-react") {
    animalReact(element.dataset.uiAnimal);
  } else if (action === "select-canvas-bg") {
    selectCanvasBg(element.dataset.uiBg);
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
      selectCustomColor(element.value);
      break;
    case "template-opacity":
      setTemplateOpacity(Number.parseInt(element.value, 10) / 100);
      break;
    case "mobile-brush-size":
      state.brushSize = Number.parseInt(element.value, 10);
      document.getElementById("brush-size").value = element.value;
      document.getElementById("brush-size-val").textContent = element.value;
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
}
