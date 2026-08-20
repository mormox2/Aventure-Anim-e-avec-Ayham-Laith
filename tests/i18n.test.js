import { beforeEach, describe, expect, it } from "vitest";
import {
  detectBrowserLanguage,
  getCurrentLanguage,
  initializeI18n,
  setLanguage,
  t,
  updateDOM,
} from "../assets/js/i18n.js";

describe("Internationalisation (i18n) - Arabe, Français, Anglais", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.lang = "ar";
    document.documentElement.dir = "rtl";
  });

  it("récupère la langue par défaut (ar) et traduit les clés", () => {
    expect(getCurrentLanguage()).toBe("ar");
    expect(t("app.title")).toBe("ارسم وحرّك!");
    expect(t("btn.gallery")).toBe("معرض");
    expect(t("tools.eraser")).toBe("الممحاة");
    expect(t("hero.ayham")).toBe("أيهم");
    expect(t("tools.custom_color")).toBe("🎨 لون مخصص:");
    expect(t("tools.bg_color")).toBe("🎨 خلفية اللوحة:");
  });

  it("change la langue en français et ajuste la direction en LTR", () => {
    setLanguage("fr");
    expect(getCurrentLanguage()).toBe("fr");
    expect(document.documentElement.lang).toBe("fr");
    expect(document.documentElement.dir).toBe("ltr");
    expect(localStorage.getItem("toondraw_lang")).toBe("fr");
    expect(t("app.title")).toBe("ToonDraw !");
    expect(t("btn.gallery")).toBe("Galerie");
    expect(t("tools.eraser")).toBe("Gomme");
    expect(t("hero.ayham")).toBe("Ayham");
    expect(t("tools.custom_color")).toBe("🎨 Couleur personnalisée :");
    expect(t("tools.bg_color")).toBe("🎨 Couleur du fond :");
    expect(t("anim.dance")).toBe("Danser");
  });

  it("change la langue en anglais et ajuste la direction en LTR", () => {
    setLanguage("en");
    expect(getCurrentLanguage()).toBe("en");
    expect(document.documentElement.lang).toBe("en");
    expect(document.documentElement.dir).toBe("ltr");
    expect(localStorage.getItem("toondraw_lang")).toBe("en");
    expect(t("app.title")).toBe("ToonDraw!");
    expect(t("btn.gallery")).toBe("Gallery");
    expect(t("tools.eraser")).toBe("Eraser");
    expect(t("hero.laith")).toBe("Laith");
    expect(t("tools.custom_color")).toBe("🎨 Custom color:");
    expect(t("tools.bg_color")).toBe("🎨 Canvas background:");
    expect(t("anim.jump")).toBe("Jump");
  });

  it("met à jour le DOM avec data-i18n, data-i18n-title et data-i18n-placeholder", () => {
    document.body.innerHTML = `
      <span id="title" data-i18n="app.title">العنوان القديم</span>
      <button id="save-btn" data-i18n-title="action.save" title="حفظ القديم">
        <span data-i18n="action.save">حفظ</span>
      </button>
      <input id="friend-input" data-i18n-placeholder="modal.friends.placeholder" placeholder="اكتب..." />
      <span id="custom-color-label" data-i18n="tools.custom_color">لون مخصص</span>
      <span id="lang-current-label">العربية</span>
    `;

    setLanguage("fr");
    updateDOM();

    expect(document.getElementById("title").textContent).toBe("ToonDraw !");
    expect(document.getElementById("save-btn").getAttribute("title")).toBe("Sauvegarder");
    expect(document.querySelector("#save-btn span").textContent).toBe("Sauvegarder");
    expect(document.getElementById("friend-input").getAttribute("placeholder")).toBe("Nom de l'ami...");
    expect(document.getElementById("custom-color-label").textContent).toBe("🎨 Couleur personnalisée :");
    expect(document.getElementById("lang-current-label").textContent).toBe("Français");
  });

  it("initialise la langue depuis le localStorage", () => {
    localStorage.setItem("toondraw_lang", "en");
    const lang = initializeI18n();
    expect(lang).toBe("en");
    expect(getCurrentLanguage()).toBe("en");
    expect(document.documentElement.dir).toBe("ltr");
  });

  it("détecte automatiquement la langue du navigateur (Français, Arabe, Anglais)", () => {
    const originalLanguage = navigator.language;
    const originalLanguages = navigator.languages;

    try {
      // Test French detection
      Object.defineProperty(navigator, "language", { value: "fr-FR", configurable: true });
      Object.defineProperty(navigator, "languages", { value: ["fr-FR", "fr", "en"], configurable: true });
      expect(detectBrowserLanguage()).toBe("fr");

      // Test Arabic detection
      Object.defineProperty(navigator, "language", { value: "ar-EG", configurable: true });
      Object.defineProperty(navigator, "languages", { value: ["ar-EG", "ar"], configurable: true });
      expect(detectBrowserLanguage()).toBe("ar");

      // Test English detection
      Object.defineProperty(navigator, "language", { value: "en-US", configurable: true });
      Object.defineProperty(navigator, "languages", { value: ["en-US", "en"], configurable: true });
      expect(detectBrowserLanguage()).toBe("en");

      // Test unsupported locale fallback to English
      Object.defineProperty(navigator, "language", { value: "es-ES", configurable: true });
      Object.defineProperty(navigator, "languages", { value: ["es-ES", "es"], configurable: true });
      expect(detectBrowserLanguage()).toBe("en");
    } finally {
      Object.defineProperty(navigator, "language", { value: originalLanguage, configurable: true });
      Object.defineProperty(navigator, "languages", { value: originalLanguages, configurable: true });
    }
  });

  it("initialise la langue automatiquement selon le navigateur quand le localStorage est vide", () => {
    const originalLanguage = navigator.language;
    const originalLanguages = navigator.languages;

    try {
      Object.defineProperty(navigator, "language", { value: "fr-CA", configurable: true });
      Object.defineProperty(navigator, "languages", { value: ["fr-CA", "fr"], configurable: true });

      const lang = initializeI18n();
      expect(lang).toBe("fr");
      expect(getCurrentLanguage()).toBe("fr");
      expect(document.documentElement.lang).toBe("fr");
      expect(document.documentElement.dir).toBe("ltr");
    } finally {
      Object.defineProperty(navigator, "language", { value: originalLanguage, configurable: true });
      Object.defineProperty(navigator, "languages", { value: originalLanguages, configurable: true });
    }
  });
});
