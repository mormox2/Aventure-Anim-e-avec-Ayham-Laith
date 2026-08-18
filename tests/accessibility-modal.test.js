import { beforeEach, describe, expect, it, vi } from "vitest";
import { initializeAccessibility } from "../assets/js/accessibility.js";

const tick = () => new Promise((resolve) => setTimeout(resolve, 0));

describe("accessibilité des modales", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <button id="open-help">Ouvrir</button>
      <div id="help-modal" role="dialog" class="hidden" aria-hidden="true">
        <div id="help-modal-content">
          <button id="close-help" data-ui-click="toggle-help-modal" data-ui-value="false">Fermer</button>
          <input id="help-input" />
        </div>
      </div>
    `;
    initializeAccessibility();
  });

  it("synchronise aria-hidden, place le focus et restaure le trigger à la fermeture", async () => {
    const trigger = document.getElementById("open-help");
    const dialog = document.getElementById("help-modal");
    const first = document.getElementById("close-help");
    const close = vi.fn();
    first.addEventListener("click", close);

    trigger.focus();
    dialog.classList.remove("hidden");
    await tick();
    await tick();

    expect(dialog.getAttribute("aria-hidden")).toBe("false");
    expect(document.activeElement).toBe(first);

    dialog.classList.add("hidden");
    await tick();
    await tick();
    expect(dialog.getAttribute("aria-hidden")).toBe("true");
    expect(document.activeElement).toBe(trigger);
  });

  it("ferme avec Escape et boucle le focus avec Tab", async () => {
    const dialog = document.getElementById("help-modal");
    const close = document.getElementById("close-help");
    const input = document.getElementById("help-input");
    const closeSpy = vi.spyOn(close, "click");

    dialog.classList.remove("hidden");
    await tick();
    await tick();

    input.focus();
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Tab", bubbles: true }));
    expect(document.activeElement).toBe(close);

    close.focus();
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Tab", shiftKey: true, bubbles: true }));
    expect(document.activeElement).toBe(input);

    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true }));
    expect(closeSpy).toHaveBeenCalledTimes(1);
  });
});
