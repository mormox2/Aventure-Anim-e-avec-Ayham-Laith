import { captureStickerState, restoreStickerState } from "./stickers.js";
import { synth } from "./synth.js";
import { state } from "./state.js";

            function releaseSnapshot(snapshot) {
                const canvasUrl = typeof snapshot === "string" ? snapshot : snapshot?.canvasUrl;
                if (canvasUrl && canvasUrl.startsWith("blob:")) URL.revokeObjectURL(canvasUrl);
            }

            function releaseSnapshots(snapshots) {
                snapshots.forEach(releaseSnapshot);
            }

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

            function clearHistory() {
                releaseSnapshots(state.undoStack);
                releaseSnapshots(state.redoStack);
                state.undoStack = [];
                state.redoStack = [];
                updateUndoRedoButtons();
            }

            function saveState() {
                const stickers = captureStickerState();
                if (state.undoStack.length >= 25) {
                    releaseSnapshot(state.undoStack.shift());
                }
                releaseSnapshots(state.redoStack);
                state.redoStack = [];
                captureCurrentCanvas(stickers);
            }

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

            // Visual indicator for undo/redo availability
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

            function restoreSnapshot(snapshot) {
                if (!snapshot) return;
                restoreCanvas(snapshot.canvasUrl ?? snapshot);
                restoreStickerState(snapshot.stickers ?? []);
            }

            function restoreCanvas(url) {
                const img = new Image();
                img.onload = () => {
                    // Clear regardless of current transform
                    state.ctx.save();
                    state.ctx.setTransform(1, 0, 0, 1, 0, 0);
                    state.ctx.clearRect(0, 0, state.canvas.width, state.canvas.height);
                    state.ctx.restore();
                    // Draw in logical coordinates (DPR scale is applied via ctx)
                    const layoutW = state.canvas.offsetWidth || 700;
                    const layoutH = state.canvas.offsetHeight || 480;
                    state.ctx.drawImage(img, 0, 0, layoutW, layoutH);
                };
                img.src = url;
            }

export { clearHistory, saveState, undo, redo, updateUndoRedoButtons, restoreCanvas, restoreSnapshot };
