import { beforeEach, describe, expect, it, vi } from "vitest";
import { stickersData } from "../assets/js/data.js";
import { state } from "../assets/js/state.js";
import { synth } from "../assets/js/synth.js";
import {
  addStickerToCanvas,
  captureStickerState,
  restoreStickerState,
} from "../assets/js/stickers.js";

function createAudioContextStub() {
  const oscillator = () => ({
    connect() {},
    start() {},
    stop() {},
    type: "sine",
    frequency: {
      setValueAtTime() {},
      exponentialRampToValueAtTime() {},
      linearRampToValueAtTime() {},
      quadraticRampToValueAtTime() {},
    },
  });
  const gain = () => ({
    connect() {},
    gain: {
      setValueAtTime() {},
      exponentialRampToValueAtTime() {},
    },
  });
  return {
    state: "running",
    currentTime: 0,
    destination: {},
    createOscillator: oscillator,
    createGain: gain,
    resume: vi.fn(),
  };
}

function createCanvas() {
  const canvas = document.createElement("canvas");
  Object.defineProperty(canvas, "getBoundingClientRect", {
    configurable: true,
    value: () => ({ left: 0, top: 0, width: 800, height: 600, right: 800, bottom: 600 }),
  });
  document.body.appendChild(canvas);
  return canvas;
}

function stickerCount() {
  return document.querySelectorAll("#stickers-layer .sticker-element").length;
}

describe("sticker history behavior", () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="stickers-layer"></div>';
    state.canvas = createCanvas();
    state.activeSticker = null;
    state.stickerIdCounter = 0;
    state.isDragging = false;
    state.isResizing = false;
    state.isRotating = false;
    synth.ctx = createAudioContextStub();
  });

  it("captures the sticker state after adding a sticker", () => {
    const historyChange = vi.fn();
    window.addEventListener("sticker-history-change", historyChange);

    addStickerToCanvas(stickersData[0].id);

    expect(stickerCount()).toBe(1);
    expect(historyChange).toHaveBeenCalledTimes(1);
    expect(captureStickerState()).toEqual([
      expect.objectContaining({
        id: "sticker-0",
        stickerId: stickersData[0].id,
        category: stickersData[0].category,
        width: "100px",
        height: "100px",
        angle: "0",
        scale: "1",
      }),
    ]);
  });

  it("restores position, size, rotation and scale from a snapshot", () => {
    addStickerToCanvas(stickersData[0].id);
    const sticker = document.querySelector(".sticker-element");
    sticker.style.left = "142px";
    sticker.style.top = "86px";
    sticker.style.width = "160px";
    sticker.style.height = "120px";
    sticker.dataset.angle = "28";
    sticker.dataset.scale = "1.6";
    sticker.style.transform = "rotate(28deg) scale(1.6)";
    const snapshot = captureStickerState();

    restoreStickerState([]);
    expect(stickerCount()).toBe(0);
    restoreStickerState(snapshot);

    const restored = document.querySelector(".sticker-element");
    expect(restored).not.toBeNull();
    expect(restored.id).toBe("sticker-0");
    expect(restored.dataset.stickerId).toBe(stickersData[0].id);
    expect(restored.style.left).toBe("142px");
    expect(restored.style.top).toBe("86px");
    expect(restored.style.width).toBe("160px");
    expect(restored.style.height).toBe("120px");
    expect(restored.dataset.angle).toBe("28");
    expect(restored.dataset.scale).toBe("1.6");
    expect(restored.style.transform).toBe("rotate(28deg) scale(1.6)");
    expect(state.activeSticker).toBeNull();
  });

  it("records a transformed sticker only after pointer movement ends", () => {
    const historyChange = vi.fn();
    window.addEventListener("sticker-history-change", historyChange);
    addStickerToCanvas(stickersData[0].id);
    historyChange.mockClear();

    const sticker = document.querySelector(".sticker-element");
    Object.defineProperty(sticker, "getBoundingClientRect", {
      configurable: true,
      value: () => ({ left: 100, top: 100, width: 100, height: 100, right: 200, bottom: 200 }),
    });
    sticker.dispatchEvent(new MouseEvent("pointerdown", { bubbles: true, clientX: 150, clientY: 150 }));
    window.dispatchEvent(new MouseEvent("pointermove", { clientX: 190, clientY: 175 }));
    window.dispatchEvent(new MouseEvent("pointerup", { clientX: 190, clientY: 175 }));

    expect(sticker.style.left).toBe("140px");
    expect(sticker.style.top).toBe("125px");
    expect(historyChange).toHaveBeenCalledTimes(1);
  });

  it("recreates a deleted sticker from the captured snapshot", () => {
    addStickerToCanvas(stickersData[0].id);
    const snapshot = captureStickerState();
    const deleteButton = document.querySelector(".sticker-element button");

    deleteButton.click();
    expect(stickerCount()).toBe(0);
    restoreStickerState(snapshot);

    expect(stickerCount()).toBe(1);
    expect(document.querySelector(".sticker-element").dataset.stickerId).toBe(stickersData[0].id);
  });
});

