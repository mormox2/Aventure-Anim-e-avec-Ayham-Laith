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
