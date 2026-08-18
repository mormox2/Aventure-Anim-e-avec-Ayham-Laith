import { beforeEach, describe, expect, it, vi } from "vitest";
import { clearHistory, redo, saveState, undo } from "../assets/js/history.js";
import { state } from "../assets/js/state.js";
import { synth } from "../assets/js/synth.js";

function createContext() {
  return {
    clearRect: vi.fn(),
    drawImage: vi.fn(),
    restore: vi.fn(),
    save: vi.fn(),
    setTransform: vi.fn(),
  };
}

describe("historique canvas", () => {
  beforeEach(() => {
    document.body.innerHTML = '<button id="btn-undo"></button><button id="btn-redo"></button><div id="stickers-layer"></div>';
    let blobId = 0;
    vi.stubGlobal("URL", {
      createObjectURL: vi.fn(() => `blob:test-${++blobId}`),
      revokeObjectURL: vi.fn(),
    });
    state.canvas = {
      width: 800,
      height: 600,
      offsetWidth: 800,
      offsetHeight: 600,
      toBlob(callback) {
        callback(new Blob(["canvas"]));
      },
    };
    state.ctx = createContext();
    state.undoStack = [];
    state.redoStack = [];
    state.activeSticker = null;
    vi.spyOn(synth, "playPop").mockImplementation(() => {});
  });

  it("enregistre un snapshot puis déplace l’état vers redo avec undo", () => {
    saveState();
    saveState();

    expect(state.undoStack).toHaveLength(2);
    expect(state.redoStack).toHaveLength(0);

    undo();

    expect(state.undoStack).toHaveLength(1);
    expect(state.redoStack).toHaveLength(1);
    expect(document.getElementById("btn-undo").disabled).toBe(true);
    expect(document.getElementById("btn-redo").disabled).toBe(false);
  });

  it("restaure l’état annulé avec redo et libère l’historique explicitement", () => {
    saveState();
    saveState();
    undo();
    redo();

    expect(state.undoStack).toHaveLength(2);
    expect(state.redoStack).toHaveLength(0);

    clearHistory();

    expect(state.undoStack).toHaveLength(0);
    expect(state.redoStack).toHaveLength(0);
    expect(URL.revokeObjectURL).toHaveBeenCalled();
  });
});
