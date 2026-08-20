import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";

const { drawingMocks, animationMocks, galleryMocks, settingsMocks } = vi.hoisted(() => ({
  drawingMocks: {
    clearCanvas: vi.fn(),
    confirmClearCanvas: vi.fn(),
    downloadDrawingPNG: vi.fn(),
    filterMobileStickers: vi.fn(),
    redo: vi.fn(),
    selectBrushMode: vi.fn(),
    selectCanvasBg: vi.fn(),
    selectCustomColor: vi.fn(),
    selectEraser: vi.fn(),
    selectFillTool: vi.fn(),
    selectShape: vi.fn(),
    selectSpray: vi.fn(),
    switchMobileDrawerTab: vi.fn(),
    toggleClearModal: vi.fn(),
    toggleMirror: vi.fn(),
    toggleMobileDrawer: vi.fn(),
    toggleStampsModal: vi.fn(),
    undo: vi.fn(),
  },
  animationMocks: {
    toggleGiveLife: vi.fn(),
    toggleTheme: vi.fn(),
    triggerAnimation: vi.fn(),
  },
  galleryMocks: {
    addFriend: vi.fn(),
    addSampleFriends: vi.fn(),
    celebrateName: vi.fn(),
    filterTemplates: vi.fn(),
    resetApp: vi.fn(),
    resetFriends: vi.fn(),
    toggleFriendsModal: vi.fn(),
    toggleGalleryModal: vi.fn(),
    toggleHeroModal: vi.fn(),
  },
  settingsMocks: {
    animalReact: vi.fn(),
    copyQrLink: vi.fn(),
    selectLanguage: vi.fn(),
    setAnimationSpeed: vi.fn(),
    setTemplateOpacity: vi.fn(),
    toggleFullscreen: vi.fn(),
    toggleHelpModal: vi.fn(),
    toggleLangModal: vi.fn(),
    toggleQrModal: vi.fn(),
  },
}));

vi.mock("../assets/js/drawing.js", () => drawingMocks);
vi.mock("../assets/js/animations.js", () => animationMocks);
vi.mock("../assets/js/stickers.js", () => ({ filterStickers: vi.fn() }));
vi.mock("../assets/js/utilities-gallery.js", () => galleryMocks);
vi.mock("../assets/js/settings.js", () => settingsMocks);
vi.mock("../assets/js/export-particles.js", () => ({ saveDrawing: vi.fn(), shareDrawing: vi.fn() }));
vi.mock("../assets/js/voice-duo.js", () => ({ toggleSplitMode: vi.fn() }));

const { initializeUI } = await import("../assets/js/ui.js");

beforeAll(() => {
  initializeUI();
});

beforeEach(() => {
  document.body.innerHTML = '<input id="brush-size" /><span id="brush-size-val"></span>';
  vi.clearAllMocks();
});

describe("délégation des actions UI", () => {
  it("délègue un clic data-ui-click vers l’action correspondante", () => {
    const button = document.createElement("button");
    button.dataset.uiClick = "toggle-mobile-drawer";
    document.body.appendChild(button);

    button.click();

    expect(drawingMocks.toggleMobileDrawer).toHaveBeenCalledTimes(1);
    expect(document.activeElement).toBe(button);
  });

  it("transmet les valeurs des actions spécialisées et des inputs", () => {
    const speed = document.createElement("button");
    speed.dataset.uiClick = "set-animation-speed";
    speed.dataset.uiSpeed = "0.5";
    document.body.appendChild(speed);
    speed.click();

    const color = document.createElement("input");
    color.value = "#123456";
    color.dataset.uiInput = "custom-color";
    document.body.appendChild(color);
    color.dispatchEvent(new Event("input", { bubbles: true }));

    expect(settingsMocks.setAnimationSpeed).toHaveBeenCalledWith(0.5);
    expect(settingsMocks.setTemplateOpacity).not.toHaveBeenCalled();
  });

  it("délègue toggle-qr-modal et copy-qr-link", () => {
    const qrBtn = document.createElement("button");
    qrBtn.dataset.uiClick = "toggle-qr-modal";
    qrBtn.dataset.uiValue = "true";
    document.body.appendChild(qrBtn);
    qrBtn.click();

    expect(settingsMocks.toggleQrModal).toHaveBeenCalledWith(true);

    const copyBtn = document.createElement("button");
    copyBtn.dataset.uiClick = "copy-qr-link";
    document.body.appendChild(copyBtn);
    copyBtn.click();

    expect(settingsMocks.copyQrLink).toHaveBeenCalledTimes(1);
  });

  it("délègue toggle-lang-modal et select-language", () => {
    const langBtn = document.createElement("button");
    langBtn.dataset.uiClick = "toggle-lang-modal";
    langBtn.dataset.uiValue = "true";
    document.body.appendChild(langBtn);
    langBtn.click();

    expect(settingsMocks.toggleLangModal).toHaveBeenCalledWith(true);

    const choiceFr = document.createElement("button");
    choiceFr.dataset.uiClick = "select-language";
    choiceFr.dataset.uiLang = "fr";
    document.body.appendChild(choiceFr);
    choiceFr.click();

    expect(settingsMocks.selectLanguage).toHaveBeenCalledWith("fr");
  });
});
