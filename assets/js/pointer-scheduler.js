/**
 * Creates a coalescing scheduler that synchronizes pointer drawing events with requestAnimationFrame.
 * Prevents redundant re-renders and input lag during high-frequency pointer moves.
 *
 * @param {(event: PointerEvent|MouseEvent) => void} draw - The drawing function to invoke per animation frame.
 * @param {typeof globalThis.requestAnimationFrame} [requestFrame=globalThis.requestAnimationFrame] - RAF provider.
 * @returns {((event: PointerEvent|MouseEvent) => void) & { cancel: () => void }} Coalesced scheduler function with a cancel method.
 */
function createPointerMoveScheduler(draw, requestFrame = globalThis.requestAnimationFrame) {
  let pendingEvent = null;
  let frameId = null;
  const scheduleFrame = requestFrame || ((callback) => globalThis.setTimeout(callback, 0));

  const schedule = (event) => {
    pendingEvent = event;
    if (frameId !== null) return;

    frameId = scheduleFrame(() => {
      frameId = null;
      const nextEvent = pendingEvent;
      pendingEvent = null;
      if (nextEvent) draw(nextEvent);
    });
  };

  schedule.cancel = () => {
    pendingEvent = null;
    frameId = null;
  };

  return schedule;
}

export { createPointerMoveScheduler };
