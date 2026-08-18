import { describe, expect, it, vi } from "vitest";
import { createPointerMoveScheduler } from "../assets/js/pointer-scheduler.js";

describe("scheduler pointermove", () => {
  it("coalesce les événements jusqu’à la prochaine frame", () => {
    const draw = vi.fn();
    let runFrame;
    const schedule = createPointerMoveScheduler(draw, (callback) => {
      runFrame = callback;
      return 1;
    });

    schedule({ clientX: 1 });
    schedule({ clientX: 2 });
    schedule({ clientX: 3 });

    expect(draw).not.toHaveBeenCalled();
    runFrame();
    expect(draw).toHaveBeenCalledTimes(1);
    expect(draw).toHaveBeenCalledWith({ clientX: 3 });
  });

  it("permet de programmer une nouvelle frame après exécution", () => {
    const draw = vi.fn();
    const frames = [];
    const schedule = createPointerMoveScheduler(draw, (callback) => {
      frames.push(callback);
      return frames.length;
    });

    schedule({ clientX: 10 });
    frames.shift()();
    schedule({ clientX: 20 });
    frames.shift()();

    expect(draw.mock.calls.map(([event]) => event.clientX)).toEqual([10, 20]);
  });
});
