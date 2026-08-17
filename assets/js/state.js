/* Shared mutable state for the application. */
export const state = {
  canvas: null, ctx: null, isDrawing: false, lastX: 0, lastY: 0,
  activeColor: "#FF4D6D", isRainbowBrush: false, rainbowHue: 0, brushSize: 12,
  isEraser: false, isSprayMode: false, isFillMode: false, isMirrorMode: false,
  activeStamp: null, currentBg: "white", undoStack: [], redoStack: [], stickerIdCounter: 0,
  activeSticker: null, isAlive: false, currentTheme: "day", isSplitMode: false,
  particles: [], particlesCanvas: null, particlesCtx: null, isDragging: false,
  isResizing: false, isRotating: false, initialPointerX: 0, initialPointerY: 0,
  stickerStartLeft: 0, stickerStartTop: 0, stickerStartWidth: 100, stickerStartHeight: 100,
  stickerStartAngle: 0, stickerStartScale: 1, stickerCenter: { x: 0, y: 0 },
};
