import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  APP_URL,
  copyShareLink,
  getShareText,
  shareToSocial,
  toggleShareModal,
} from "../assets/js/social-share.js";
import { setLanguage } from "../assets/js/i18n.js";

describe("Social Share Feature (WhatsApp, X, Facebook, Telegram, Pinterest, Link Copy)", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="share-modal" class="hidden opacity-0" aria-hidden="true">
        <div id="share-modal-content" class="scale-95">
          <img id="share-preview-img" src="" class="hidden" />
          <div id="share-preview-container"></div>
          <input id="share-link-input" value="" />
          <button id="btn-share-native" class="hidden"></button>
          <span id="copy-share-btn-text">Copier le lien</span>
        </div>
      </div>
      <div id="encouragement-toast" class="opacity-0"></div>
    `;
    vi.restoreAllMocks();
  });

  it("exports a valid app share url", () => {
    expect(APP_URL).toContain("toondraw.vercel.app");
    expect(APP_URL).toContain("ref=share");
  });

  it("returns localized share text based on active language", () => {
    setLanguage("fr");
    expect(getShareText()).toContain("ToonDraw");
    setLanguage("ar");
    expect(getShareText()).toContain("ToonDraw");
    setLanguage("en");
    expect(getShareText()).toContain("ToonDraw");
  });

  it("opens WhatsApp with encoded message and app url", () => {
    setLanguage("fr");
    const openSpy = vi.spyOn(window, "open").mockImplementation(() => null);

    shareToSocial("whatsapp");

    expect(openSpy).toHaveBeenCalled();
    const callUrl = openSpy.mock.calls[0][0];
    expect(callUrl).toContain("api.whatsapp.com/send");
    expect(callUrl).toContain(encodeURIComponent(APP_URL));
  });

  it("opens Twitter / X with text, url and hashtags", () => {
    const openSpy = vi.spyOn(window, "open").mockImplementation(() => null);

    shareToSocial("twitter");

    expect(openSpy).toHaveBeenCalled();
    const callUrl = openSpy.mock.calls[0][0];
    expect(callUrl).toContain("twitter.com/intent/tweet");
    expect(callUrl).toContain("ToonDraw");
  });

  it("opens Facebook and Telegram share dialogues", () => {
    const openSpy = vi.spyOn(window, "open").mockImplementation(() => null);

    shareToSocial("facebook");
    expect(openSpy.mock.calls[0][0]).toContain("facebook.com/sharer");

    shareToSocial("telegram");
    expect(openSpy.mock.calls[1][0]).toContain("t.me/share/url");
  });

  it("copies app link to clipboard", async () => {
    const writeTextMock = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, {
      clipboard: {
        writeText: writeTextMock,
      },
    });

    copyShareLink();

    expect(writeTextMock).toHaveBeenCalledWith(APP_URL);
  });

  it("toggles the share modal open and closed", () => {
    toggleShareModal(true);
    const modal = document.getElementById("share-modal");
    expect(modal.classList.contains("hidden")).toBe(false);
    expect(modal.getAttribute("aria-hidden")).toBe("false");

    toggleShareModal(false);
    expect(modal.classList.contains("opacity-0")).toBe(true);
  });
});
