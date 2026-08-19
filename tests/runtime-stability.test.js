import { beforeEach, describe, expect, it, vi } from "vitest";
import { state } from "../assets/js/state.js";
import { toggleTheme } from "../assets/js/animations.js";
import { toggleMusic } from "../assets/js/audio-controls.js";
import { renderMobileColors } from "../assets/js/canvas-controls.js";
import { toggleStampsModal } from "../assets/js/canvas-modals.js";
import { toggleFullscreen } from "../assets/js/settings.js";
import { generateThumbnailDataUrl } from "../assets/js/drawing-gallery.js";
import { selectColor, selectEraser, selectFillTool, updateCanvasCursor } from "../assets/js/canvas-tools.js";
import { selectSpray } from "../assets/js/canvas-controls.js";

describe("Runtime Stability & Bug Prevention", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <h1 id="app-title" class="text-slate-800">ارسم وحرّك!</h1>
      <div id="app-subtitle">
        <span data-role="separator" class="text-slate-500">&</span>
        <span data-role="adventure" class="text-pink-600 bg-white/70 border-pink-200">مغامرة</span>
      </div>
      <button id="btn-music"><span id="music-icon">🔇</span><span id="music-text">موسيقى</span></button>
      <button id="btn-theme"><span id="theme-icon">☀️</span><span id="theme-text">النهار</span></button>
      <div id="deco-clouds"></div>
      <div id="deco-rainbow"></div>
      <div id="deco-night" class="opacity-0"></div>
      <div id="color-palette"></div>
      <div id="mobile-color-palette"></div>
      <div id="stamps-modal" class="hidden"><div id="stamps-modal-content"></div></div>
      <div id="stamps-gallery"></div>
      <canvas id="drawing-canvas" width="600" height="400"></canvas>
    `;
    state.canvas = document.getElementById("drawing-canvas");
    state.canvas.toDataURL = vi.fn(() => "data:image/jpeg;base64,mockThumbnail");
    state.ctx = {
      drawImage: vi.fn(),
      fillRect: vi.fn(),
      clearRect: vi.fn(),
      save: vi.fn(),
      restore: vi.fn(),
      setTransform: vi.fn(),
      putImageData: vi.fn(),
      getImageData: vi.fn(() => ({ data: new Uint8ClampedArray(600 * 400 * 4) })),
    };
    state.currentTheme = "day";
    state.currentBg = "white";
  });

  it("toggleTheme bascule jour/nuit sans exception et met à jour le DOM", () => {
    expect(state.currentTheme).toBe("day");
    toggleTheme();
    expect(state.currentTheme).toBe("night");
    expect(document.body.classList.contains("night-bg-glow")).toBe(true);
    expect(document.getElementById("theme-icon").textContent).toBe("🌙");
    expect(document.getElementById("theme-text").textContent).toBe("الليل");

    toggleTheme();
    expect(state.currentTheme).toBe("day");
    expect(document.body.classList.contains("rainbow-bg-glow")).toBe(true);
    expect(document.getElementById("theme-icon").textContent).toBe("☀️");
    expect(document.getElementById("theme-text").textContent).toBe("النهار");
  });

  it("toggleMusic met à jour music-icon et music-text sans crash", () => {
    toggleMusic();
    const musicText = document.getElementById("music-text");
    const musicIcon = document.getElementById("music-icon");
    expect(["🎵", "🔇"]).toContain(musicIcon.textContent);
    expect(["موسيقى نشطة", "موسيقى هادئة"]).toContain(musicText.textContent);
  });

  it("renderMobileColors peuple la palette mobile sans crash ni dépendance non importée", () => {
    const mobilePalette = document.getElementById("mobile-color-palette");
    renderMobileColors();
    expect(mobilePalette.children.length).toBeGreaterThan(5);
  });

  it("toggleStampsModal initialise stamps-gallery sans variable non déclarée", () => {
    const gallery = document.getElementById("stamps-gallery");
    expect(gallery.children.length).toBe(0);
    toggleStampsModal(true);
    expect(gallery.children.length).toBeGreaterThan(0);
  });

  it("toggleFullscreen bascule sans erreur d'exécution", () => {
    expect(() => toggleFullscreen()).not.toThrow();
  });

  it("generateThumbnailDataUrl génère une image réduite pour la galerie", () => {
    const thumb = generateThumbnailDataUrl(100, 100);
    expect(thumb).toBeDefined();
    expect(typeof thumb).toBe("string");
    expect(thumb.startsWith("data:image/")).toBe(true);
  });

  it("met à jour le curseur de la souris (pinceau, gomme, spray, seau)", () => {
    const canvas = state.canvas;
    updateCanvasCursor();
    expect(canvas.classList.contains("cursor-brush")).toBe(true);

    selectEraser();
    expect(canvas.classList.contains("cursor-eraser")).toBe(true);

    selectSpray();
    expect(canvas.classList.contains("cursor-spray")).toBe(true);

    selectColor("#FF0000", null);
    expect(canvas.classList.contains("cursor-brush")).toBe(true);
  });
});
