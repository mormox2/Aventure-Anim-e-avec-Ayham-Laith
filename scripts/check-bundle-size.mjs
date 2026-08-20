import { readdir, stat } from "node:fs/promises";
import { resolve } from "node:path";

const assetDirectory = resolve("dist/assets");
const budgets = {
  initialJavaScript: 125 * 1024, // raised from 100 KB: full trilingual i18n dictionaries (AR/FR/EN), voice synthesis, QR modal
  lazyHeroesJavaScript: 75 * 1024, // expanded template library with 21 rich SVG characters
  stylesheet: 70 * 1024, // cartoon styling, trilingual RTL/LTR typography & modals
};

const files = await readdir(assetDirectory);
const assets = await Promise.all(
  files.map(async (name) => ({
    name,
    size: (await stat(resolve(assetDirectory, name))).size,
  })),
);

const initialJavaScript = assets.find(({ name }) => /^index-.*\.js$/.test(name));
const lazyHeroesJavaScript = assets.find(({ name }) => /^heroes-.*\.js$/.test(name));
const stylesheet = assets.find(({ name }) => /^index-.*\.css$/.test(name));

const checks = [
  ["initial JavaScript", initialJavaScript, budgets.initialJavaScript],
  ["lazy heroes JavaScript", lazyHeroesJavaScript, budgets.lazyHeroesJavaScript],
  ["stylesheet", stylesheet, budgets.stylesheet],
];

const failures = [];
for (const [label, asset, budget] of checks) {
  if (!asset) {
    failures.push(`${label}: asset introuvable`);
    continue;
  }
  const status = asset.size <= budget ? "OK" : "FAIL";
  console.log(`${status} ${label}: ${asset.name} ${asset.size} B / ${budget} B`);
  if (status === "FAIL") failures.push(`${label}: ${asset.size} B dépasse ${budget} B`);
}

if (failures.length > 0) {
  console.error("\nBudget bundle dépassé :");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exitCode = 1;
}

