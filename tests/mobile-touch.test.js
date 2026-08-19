import { beforeEach, describe, expect, it, vi } from "vitest";
import { synth } from "../assets/js/synth.js";
import { state } from "../assets/js/state.js";
import {
  filterMobileStickers,
  renderMobileColors,
  renderMobileStickers,
  switchMobileDrawerTab,
  toggleMobileDrawer,
} from "../assets/js/canvas-controls.js";
import { startDrawing, draw, stopDrawing } from "../assets/js/canvas-tools.js";
import { addStickerToCanvas } from "../assets/js/stickers.js";
import { stickersData } from "../assets/js/data.js";

describe("Mobile & Touch Screen Adaptation Tests", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="mobile-drawer" class="hidden">
        <div id="mobile-drawer-content" class="translate-y-full">
          <button id="tab-btn-tools" class="bg-amber-400"></button>
          <button id="tab-btn-stickers" class="bg-white/80"></button>
          <button id="tab-btn-backgrounds" class="bg-white/80"></button>
          <div id="panel-tools"></div>
          <div id="panel-stickers" class="hidden"></div>
          <div id="panel-backgrounds" class="hidden"></div>
          <div id="mobile-color-palette"></div>
          <div id="mobile-stickers-gallery"></div>
          <button id="mobile-tab-all"></button>
          <button id="mobile-tab-eyes"></button>
          <button id="mobile-tab-hats"></button>
          <button id="mobile-tab-faces"></button>
          <input id="mobile-brush-size" value="12" />
        </div>
      </div>
      <input id="brush-size" value="12" />
      <span id="brush-size-val">12</span>
      <div id="brush-preview" style="width: 12px; height: 12px;"></div>
      <div id="color-palette"></div>
      <div id="stickers-layer"></div>
      <canvas id="drawing-canvas" width="600" height="400"></canvas>
    `;

    state.canvas = document.getElementById("drawing-canvas");
    state.canvas.setPointerCapture = vi.fn();
    state.canvas.releasePointerCapture = vi.fn();
    state.canvas.hasPointerCapture = vi.fn(() => true);
    state.canvas.getBoundingClientRect = vi.fn(() => ({
      left: 0,
      top: 0,
      width: 600,
      height: 400,
    }));

    state.ctx = {
      beginPath: vi.fn(),
      moveTo: vi.fn(),
      lineTo: vi.fn(),
      stroke: vi.fn(),
      arc: vi.fn(),
      fill: vi.fn(),
      save: vi.fn(),
      restore: vi.fn(),
      clearRect: vi.fn(),
      fillRect: vi.fn(),
    };
  });

  describe("Web Audio API Synth - Touch Sounds", () => {
    it("playBoing executes without quadraticRampToValueAtTime error", () => {
      // Mock AudioContext
      const mockGain = {
        gain: {
          setValueAtTime: vi.fn(),
          exponentialRampToValueAtTime: vi.fn(),
          linearRampToValueAtTime: vi.fn(),
        },
        connect: vi.fn(),
      };
      const mockOsc = {
        type: "sine",
        frequency: {
          setValueAtTime: vi.fn(),
          exponentialRampToValueAtTime: vi.fn(),
          linearRampToValueAtTime: vi.fn(),
        },
        connect: vi.fn(),
        start: vi.fn(),
        stop: vi.fn(),
      };

      const mockCtx = {
        currentTime: 0,
        state: "running",
        destination: {},
        createGain: vi.fn(() => mockGain),
        createOscillator: vi.fn(() => mockOsc),
      };

      synth.ctx = mockCtx;

      expect(() => synth.playBoing()).not.toThrow();
      expect(mockOsc.frequency.exponentialRampToValueAtTime).toHaveBeenCalled();
      expect(mockGain.gain.exponentialRampToValueAtTime).toHaveBeenCalled();
    });
  });

  describe("Canvas Pointer Capture & Coalescing", () => {
    it("captures pointer on pointerdown and releases on pointerup", () => {
      const pointerDownEvent = {
        pointerId: 1,
        clientX: 100,
        clientY: 100,
        preventDefault: vi.fn(),
      };

      startDrawing(pointerDownEvent);
      expect(state.canvas.setPointerCapture).toHaveBeenCalledWith(1);
      expect(state.isDrawing).toBe(true);

      const pointerUpEvent = {
        pointerId: 1,
        clientX: 120,
        clientY: 120,
        preventDefault: vi.fn(),
      };

      stopDrawing(pointerUpEvent);
      expect(state.canvas.releasePointerCapture).toHaveBeenCalledWith(1);
      expect(state.isDrawing).toBe(false);
    });

    it("draws coalesced events when available for smooth capacitive touch", () => {
      startDrawing({ pointerId: 1, clientX: 50, clientY: 50, preventDefault: vi.fn() });

      const mockCoalesced = [
        { clientX: 55, clientY: 55 },
        { clientX: 60, clientY: 60 },
      ];

      const pointerMoveEvent = {
        pointerId: 1,
        clientX: 65,
        clientY: 65,
        preventDefault: vi.fn(),
        getCoalescedEvents: vi.fn(() => mockCoalesced),
      };

      draw(pointerMoveEvent);

      expect(pointerMoveEvent.getCoalescedEvents).toHaveBeenCalled();
      expect(state.ctx.lineTo).toHaveBeenCalled();
      expect(state.ctx.stroke).toHaveBeenCalled();
    });
  });

  describe("Mobile Drawer & Tab Switching", () => {
    it("renders mobile colors correctly", () => {
      const palette = document.getElementById("mobile-color-palette");
      renderMobileColors();
      expect(palette.children.length).toBeGreaterThan(0);
    });

    it("switches mobile drawer tabs between tools, stickers and backgrounds", () => {
      switchMobileDrawerTab("stickers");
      expect(document.getElementById("panel-stickers").classList.contains("hidden")).toBe(false);
      expect(document.getElementById("panel-tools").classList.contains("hidden")).toBe(true);
      expect(document.getElementById("tab-btn-stickers").classList.contains("bg-amber-400")).toBe(true);

      switchMobileDrawerTab("backgrounds");
      expect(document.getElementById("panel-backgrounds").classList.contains("hidden")).toBe(false);
      expect(document.getElementById("panel-stickers").classList.contains("hidden")).toBe(true);

      switchMobileDrawerTab("tools");
      expect(document.getElementById("panel-tools").classList.contains("hidden")).toBe(false);
      expect(document.getElementById("panel-backgrounds").classList.contains("hidden")).toBe(true);
    });

    it("toggles mobile drawer open and closed state", () => {
      const drawer = document.getElementById("mobile-drawer");
      expect(drawer.classList.contains("hidden")).toBe(true);

      toggleMobileDrawer(true);
      expect(drawer.classList.contains("hidden")).toBe(false);

      toggleMobileDrawer(false);
      expect(document.getElementById("mobile-drawer-content").classList.contains("translate-y-full")).toBe(true);
    });

    it("filters mobile sticker categories", () => {
      filterMobileStickers("eyes");
      const eyesTab = document.getElementById("mobile-tab-eyes");
      expect(eyesTab.classList.contains("bg-amber-400")).toBe(true);
    });
  });

  describe("Sticker Touch Controls & Multi-Touch", () => {
    it("creates sticker element with 40px touch control buttons and touch-none class", () => {
      addStickerToCanvas(stickersData[0].id);
      const stickerEl = document.querySelector(".sticker-element");
      expect(stickerEl).toBeDefined();
      expect(stickerEl.classList.contains("touch-none")).toBe(true);

      const buttons = stickerEl.querySelectorAll("button");
      expect(buttons.length).toBe(3); // Delete, Rotate, Scale buttons

      buttons.forEach((btn) => {
        expect(btn.className).toContain("w-10");
        expect(btn.className).toContain("touch-none");
        expect(btn.getAttribute("aria-label")).toBeDefined();
      });
    });
  });
});
