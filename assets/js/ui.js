import * as actions from "./services.js";
import { state } from "./state.js";

const mobileTools = {
  "select-eraser": "selectEraser",
  "select-spray": "selectSpray",
  "select-fill-tool": "selectFillTool",
  "toggle-mirror": "toggleMirror",
  "clear-canvas": "clearCanvas",
  "download-drawing-png": "downloadDrawingPNG",
};

function kebabToCamel(value) {
  return value.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

function invokeAction(name, element) {
  const action = actions[kebabToCamel(name)];
  if (typeof action !== "function") {
    console.warn(`Unknown UI action: ${name}`);
    return;
  }

  const value = element.dataset.uiValue;
  if (value === "true" || value === "false") {
    action(value === "true");
  } else {
    action();
  }
}

function handleMobileTool(element) {
  const method = mobileTools[element.dataset.uiTool];
  if (method && typeof actions[method] === "function") {
    actions[method]();
  }
  actions.toggleMobileDrawer();
}

function handleClick(event) {
  const element = event.target.closest("[data-ui-click]");
  if (!element) return;

  const action = element.dataset.uiClick;
  if (action === "celebrate-name") {
    actions.celebrateName(element.dataset.uiName);
  } else if (action === "trigger-animation") {
    actions.triggerAnimation(element.dataset.uiAnimation, element.dataset.uiSelf ? element : null);
  } else if (action === "set-animation-speed") {
    actions.setAnimationSpeed(Number(element.dataset.uiSpeed));
  } else if (action === "filter-stickers") {
    actions.filterStickers(element.dataset.uiCategory);
  } else if (action === "filter-templates") {
    actions.filterTemplates(element.dataset.uiCategory);
  } else if (action === "animal-react") {
    actions.animalReact(element.dataset.uiAnimal);
  } else if (action === "select-canvas-bg") {
    actions.selectCanvasBg(element.dataset.uiBg);
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
      actions.selectCustomColor(element.value);
      break;
    case "template-opacity":
      actions.setTemplateOpacity(Number.parseInt(element.value, 10) / 100);
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

  const closeAction = actions[kebabToCamel(backdrop.dataset.uiClose)];
  if (typeof closeAction === "function") closeAction(false);
}

function bindFriendInput() {
  const input = document.getElementById("friend-name-input");
  if (!input || input.dataset.uiBound === "true") return;
  input.dataset.uiBound = "true";
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      actions.addFriend();
    }
  });
}

export function initializeUI() {
  document.addEventListener("click", handleClick);
  document.addEventListener("click", handleBackdropClick);
  document.addEventListener("input", handleInput);
  bindFriendInput();
}
