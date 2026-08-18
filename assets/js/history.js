import { captureStickerState, restoreStickerState } from "./stickers.js";
import { synth } from "./synth.js";
import { state } from "./state.js";

/**
 * Maximum number of canvas snapshots to keep in memory.
 * Limits RAM usage during long creative sessions.
 * @type {number}
 */
export const MAX_HISTORY_SNAPSHOTS = 25;

/**
 * @typedef {Object} HistorySnapshot
 * @property {string} canvasUrl - Blob URL pointing to the serialized canvas image.
 * @property {Array<Object>} stickers - Serialized state of all active sticker elements.
 */

/**
 * Releases memory for a single snapshot's blob URL.
 * @param {HistorySnapshot|string} snapshot
 */
function releaseSnapshot(snapshot) {
    const canvasUrl = typeof snapshot === "string" ? snapshot : snapshot?.canvasUrl;
    if (canvasUrl && canvasUrl.startsWith("blob:")) URL.revokeObjectURL(canvasUrl);
}

/**
 * Releases memory for an array of snapshots.
 * @param {Array<HistorySnapshot|string>} snapshots
 */
function releaseSnapshots(snapshots) {
    snapshots.forEach(releaseSnapshot);
}

/**
 * Captures the current canvas as a WebP blob and pushes it onto the undo stack.
 * @param {Array<Object>} stickers - Snapshot of sticker elements.
 */
function captureCurrentCanvas(stickers) {
    state.canvas.toBlob((blob) => {
        if (!blob) return;
        state.undoStack.push({
            canvasUrl: URL.createObjectURL(blob),
            stickers,
        });
        updateUndoRedoButtons();
    }, "image/webp", 0.85);
}

/**
 * Clears both undo and redo stacks and releases associated blob memory.
 */
function clearHistory() {
    releaseSnapshots(state.undoStack);
    releaseSnapshots(state.redoStack);
    state.undoStack = [];
    state.redoStack = [];
    updateUndoRedoButtons();
}

/**
 * Saves the current state of canvas and stickers to the undo stack.
 */
function saveState() {
    const stickers = captureStickerState();
    if (state.undoStack.length >= MAX_HISTORY_SNAPSHOTS) {
        releaseSnapshot(state.undoStack.shift());
    }
    releaseSnapshots(state.redoStack);
    state.redoStack = [];
    captureCurrentCanvas(stickers);
}

/**
 * Restores the previous canvas and sticker snapshot from the undo stack.
 */
function undo() {
    if (state.undoStack.length <= 1) {
        updateUndoRedoButtons();
        return;
    }

    const currentState = state.undoStack.pop();
    state.redoStack.push(currentState);
    const previousState = state.undoStack[state.undoStack.length - 1];
    restoreSnapshot(previousState);
    synth.playPop();
    updateUndoRedoButtons();
}

/**
 * Reapplies the next state from the redo stack onto canvas and stickers.
 */
function redo() {
    if (state.redoStack.length === 0) {
        updateUndoRedoButtons();
        return;
    }

    const nextState = state.redoStack.pop();
    state.undoStack.push(nextState);
    restoreSnapshot(nextState);
    synth.playPop();
    updateUndoRedoButtons();
}

/**
 * Updates UI states and ARIA attributes for Undo and Redo toolbar buttons.
 */
function updateUndoRedoButtons() {
    const undoBtn = document.getElementById("btn-undo");
    const redoBtn = document.getElementById("btn-redo");
    if (undoBtn) {
        const disabled = state.undoStack.length <= 1;
        undoBtn.disabled = disabled;
        undoBtn.setAttribute("aria-disabled", String(disabled));
        undoBtn.classList.toggle("opacity-40", disabled);
        undoBtn.classList.toggle("pointer-events-none", disabled);
    }
    if (redoBtn) {
        const disabled = state.redoStack.length === 0;
        redoBtn.disabled = disabled;
        redoBtn.setAttribute("aria-disabled", String(disabled));
        redoBtn.classList.toggle("opacity-40", disabled);
        redoBtn.classList.toggle("pointer-events-none", disabled);
    }
}

/**
 * Restores both canvas image and stickers from a given snapshot.
 * @param {HistorySnapshot} snapshot
 */
function restoreSnapshot(snapshot) {
    if (!snapshot) return;
    restoreCanvas(snapshot.canvasUrl ?? snapshot);
    restoreStickerState(snapshot.stickers ?? []);
}

/**
 * Draws an image from a given URL onto the main 2D canvas context.
 * @param {string} url - Image source URL.
 */
function restoreCanvas(url) {
    const img = new Image();
    img.onload = () => {
        state.ctx.save();
        state.ctx.setTransform(1, 0, 0, 1, 0, 0);
        state.ctx.clearRect(0, 0, state.canvas.width, state.canvas.height);
        state.ctx.restore();
        const layoutW = state.canvas.offsetWidth || 700;
        const layoutH = state.canvas.offsetHeight || 480;
        state.ctx.drawImage(img, 0, 0, layoutW, layoutH);
    };
    img.src = url;
}

export { clearHistory, saveState, undo, redo, updateUndoRedoButtons, restoreCanvas, restoreSnapshot };
