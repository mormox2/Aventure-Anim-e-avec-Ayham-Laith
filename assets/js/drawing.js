import {
  draw,
  drawSpray,
  performFloodFill,
  renderColors,
  selectColor,
  selectEraser,
  selectFillTool,
  setParticleSpawner,
  startDrawing,
  stopDrawing,
  toggleMirror,
  updateCanvasCursor,
} from "./canvas-tools.js";
import {
  placeStamp,
  renderStampsGallery,
  selectStamp,
  toggleStampsModal,
} from "./canvas-modals.js";
import {
  clearCanvas,
  drawCanvasBackground,
  selectCanvasBg,
} from "./canvas-backgrounds.js";
import {
  clearHistory,
  redo,
  restoreCanvas,
  restoreSnapshot,
  saveState,
  undo,
  updateUndoRedoButtons,
} from "./history.js";
import {
  downloadDrawingPNG,
  handleBackdropClick,
  renderMobileColors,
  selectCustomColor,
  selectSpray,
  toggleMobileDrawer,
} from "./canvas-controls.js";
import { toggleModal } from "./modal-service.js";

/* Canvas facade: preserves the public drawing API while features live in focused modules. */

export {
  renderColors,
  selectColor,
  selectEraser,
  startDrawing,
  draw,
  drawSpray,
  stopDrawing,
  selectFillTool,
  performFloodFill,
  toggleMirror,
  toggleStampsModal,
  renderStampsGallery,
  selectStamp,
  placeStamp,
  selectCanvasBg,
  drawCanvasBackground,
  clearCanvas,
  clearHistory,
  saveState,
  undo,
  redo,
  updateUndoRedoButtons,
  restoreCanvas,
  restoreSnapshot,
  selectSpray,
  selectCustomColor,
  renderMobileColors,
  toggleMobileDrawer,
  handleBackdropClick,
  downloadDrawingPNG,
  toggleModal,
  setParticleSpawner,
  updateCanvasCursor,
};
