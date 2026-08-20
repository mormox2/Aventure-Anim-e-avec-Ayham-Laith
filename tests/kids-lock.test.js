import { describe, it, expect, beforeEach, vi } from "vitest";
import {
  isKidsLockActive,
  enableKidsLock,
  disableKidsLock,
  toggleKidsLock,
  openParentChallengeModal,
  closeParentChallengeModal,
  verifyParentChallenge,
} from "../assets/js/kids-lock.js";

describe("Kids Lock Security System", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="kids-lock-overlay" class="hidden">
        <button id="kids-lock-unlock-btn"></button>
        <span id="kids-lock-hold-text">Maintenez 3s 🔒</span>
        <svg><circle id="kids-lock-progress-circle" style="stroke-dashoffset: 100"></circle></svg>
      </div>
      <button id="btn-kids-lock"></button>
      <div id="kids-lock-challenge-modal" class="hidden opacity-0">
        <div id="kids-lock-challenge-content" class="scale-95"></div>
        <div id="kids-lock-question"></div>
        <div id="kids-lock-options-container"></div>
      </div>
      <div id="encouragement-toast" class="opacity-0"></div>
    `;

    // Mock document.fullscreenElement and requestFullscreen/exitFullscreen
    Object.defineProperty(document, "fullscreenElement", {
      value: null,
      writable: true,
    });
    document.documentElement.requestFullscreen = vi.fn().mockResolvedValue(undefined);
    document.exitFullscreen = vi.fn().mockResolvedValue(undefined);

    // Mock navigator.keyboard
    Object.defineProperty(navigator, "keyboard", {
      value: {
        lock: vi.fn().mockResolvedValue(undefined),
        unlock: vi.fn(),
      },
      writable: true,
      configurable: true,
    });

    if (isKidsLockActive()) {
      disableKidsLock();
    }
  });

  it("activates kids lock, requests fullscreen and updates UI", () => {
    expect(isKidsLockActive()).toBe(false);

    enableKidsLock();

    expect(isKidsLockActive()).toBe(true);
    expect(document.documentElement.requestFullscreen).toHaveBeenCalled();
    expect(navigator.keyboard.lock).toHaveBeenCalledWith(["Escape"]);
    expect(document.body.classList.contains("kids-locked")).toBe(true);

    const overlay = document.getElementById("kids-lock-overlay");
    expect(overlay.classList.contains("hidden")).toBe(false);
  });

  it("deactivates kids lock and restores normal UI", () => {
    enableKidsLock();
    expect(isKidsLockActive()).toBe(true);

    disableKidsLock();

    expect(isKidsLockActive()).toBe(false);
    expect(navigator.keyboard.unlock).toHaveBeenCalled();
    expect(document.body.classList.contains("kids-locked")).toBe(false);

    const overlay = document.getElementById("kids-lock-overlay");
    expect(overlay.classList.contains("hidden")).toBe(true);
  });

  it("opens parent challenge modal and solves correctly", () => {
    enableKidsLock();
    openParentChallengeModal();

    const modal = document.getElementById("kids-lock-challenge-modal");
    expect(modal.classList.contains("hidden")).toBe(false);

    const question = document.getElementById("kids-lock-question").textContent;
    expect(question).toContain("+");

    const optionsContainer = document.getElementById("kids-lock-options-container");
    expect(optionsContainer.children.length).toBe(3);

    // Extract equation from question (e.g., "4 + 5 = ?")
    const match = question.match(/(\d+)\s*\+\s*(\d+)/);
    expect(match).not.toBeNull();
    const correctAnswer = parseInt(match[1], 10) + parseInt(match[2], 10);

    // Solving with correct answer unlocks kids lock
    verifyParentChallenge(correctAnswer);
    expect(isKidsLockActive()).toBe(false);
  });

  it("rejects wrong answer in parent challenge without unlocking", () => {
    enableKidsLock();
    openParentChallengeModal();

    const question = document.getElementById("kids-lock-question").textContent;
    const match = question.match(/(\d+)\s*\+\s*(\d+)/);
    const wrongAnswer = parseInt(match[1], 10) + parseInt(match[2], 10) + 99;

    verifyParentChallenge(wrongAnswer);
    expect(isKidsLockActive()).toBe(true);
  });

  it("toggles kids lock between active and modal challenge", () => {
    expect(isKidsLockActive()).toBe(false);
    toggleKidsLock();
    expect(isKidsLockActive()).toBe(true);

    toggleKidsLock(); // when active, opens challenge modal
    const modal = document.getElementById("kids-lock-challenge-modal");
    expect(modal.classList.contains("hidden")).toBe(false);
  });
});
