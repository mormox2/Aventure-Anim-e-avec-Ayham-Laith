const dialogStates = new WeakMap();
const focusableSelector = [
  "button:not([disabled])",
  "[href]",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "[tabindex]:not([tabindex=\"-1\"])",
].join(",");

function isVisible(dialog) {
  return !dialog.classList.contains("hidden") && dialog.getAttribute("aria-hidden") !== "true";
}

function getFocusableElements(dialog) {
  return Array.from(dialog.querySelectorAll(focusableSelector)).filter((element) => {
    const style = window.getComputedStyle(element);
    return style.display !== "none" && style.visibility !== "hidden";
  });
}

function closeDialog(dialog) {
  const closeButton = dialog.querySelector('[data-ui-click][data-ui-value="false"]');
  if (closeButton) closeButton.click();
}

function syncDialog(dialog) {
  const state = dialogStates.get(dialog) || { open: false, trigger: null };
  const open = !dialog.classList.contains("hidden");
  dialog.setAttribute("aria-hidden", String(!open));

  if (open && !state.open) {
    state.open = true;
    state.trigger = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    dialogStates.set(dialog, state);
    window.setTimeout(() => {
      const firstFocusable = getFocusableElements(dialog)[0];
      if (firstFocusable) firstFocusable.focus({ preventScroll: true });
    }, 0);
  } else if (!open && state.open) {
    state.open = false;
    dialogStates.set(dialog, state);
    if (state.trigger?.isConnected) state.trigger.focus({ preventScroll: true });
  }
}

function getOpenDialog() {
  return Array.from(document.querySelectorAll('[role="dialog"]')).reverse().find(isVisible) || null;
}

function handleKeydown(event) {
  const dialog = getOpenDialog();
  if (!dialog) return;

  if (event.key === "Escape") {
    event.preventDefault();
    closeDialog(dialog);
    return;
  }

  if (event.key !== "Tab") return;
  const focusable = getFocusableElements(dialog);
  if (focusable.length === 0) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

export function initializeAccessibility() {
  const dialogs = document.querySelectorAll('[role="dialog"]');
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "attributes" && mutation.attributeName === "class") {
        syncDialog(mutation.target);
      }
    });
  });

  dialogs.forEach((dialog) => {
    dialogStates.set(dialog, { open: false, trigger: null });
    observer.observe(dialog, { attributes: true, attributeFilter: ["class"] });
    syncDialog(dialog);
  });
  document.addEventListener("keydown", handleKeydown);
}

