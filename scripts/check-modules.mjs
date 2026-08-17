import { execFile } from "node:child_process";
import { access, readdir } from "node:fs/promises";
import { promisify } from "node:util";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const run = promisify(execFile);
const root = fileURLToPath(new URL("..", import.meta.url));
const sourceDir = resolve(root, "assets/js");
const moduleFiles = (await readdir(sourceDir))
  .filter((file) => file.endsWith(".js"))
  .sort();

for (const file of moduleFiles) {
  await run(process.execPath, ["--check", resolve(sourceDir, file)]);
}

await access(resolve(root, "src/main.js"));
await access(resolve(root, "index.html"));
await access(resolve(root, "vite.config.js"));

console.log(`Checked ${moduleFiles.length} source modules and the ES module Vite entry.`);
