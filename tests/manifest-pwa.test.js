import { describe, expect, it } from "vitest";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { MAX_HISTORY_SNAPSHOTS } from "../assets/js/history.js";

describe("PWA Manifest and Offline Configuration", () => {
  it("defines a valid web manifest with Arabic RTL configuration", () => {
    const manifestPath = resolve("public/manifest.webmanifest");
    expect(existsSync(manifestPath)).toBe(true);

    const manifest = JSON.parse(readFileSync(manifestPath, "utf-8"));
    expect(manifest.name).toBe("ارسم وحرّك مع أيهم و ليث");
    expect(manifest.short_name).toBe("ارسم وحرّك");
    expect(manifest.dir).toBe("rtl");
    expect(manifest.lang).toBe("ar");
    expect(manifest.display).toBe("standalone");
    expect(manifest.icons.length).toBeGreaterThan(0);
  });

  it("provides an app SVG icon in the public directory", () => {
    const iconPath = resolve("public/icon.svg");
    expect(existsSync(iconPath)).toBe(true);
    const content = readFileSync(iconPath, "utf-8");
    expect(content).toContain("<svg");
  });

  it("provides a service worker script in public/sw.js", () => {
    const swPath = resolve("public/sw.js");
    expect(existsSync(swPath)).toBe(true);
    const content = readFileSync(swPath, "utf-8");
    expect(content).toContain("CACHE_NAME");
    expect(content).toContain("install");
    expect(content).toContain("fetch");
  });

  it("exports a defined MAX_HISTORY_SNAPSHOTS bound", () => {
    expect(MAX_HISTORY_SNAPSHOTS).toBe(25);
  });
});
