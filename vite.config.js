import { defineConfig } from "vite";

export default defineConfig({
  // Override with VITE_BASE_PATH when deploying under another subpath.
  base: process.env.VITE_BASE_PATH || "/Aventure-Anim-e-avec-Ayham-Laith/",
  publicDir: "public",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  server: {
    host: "0.0.0.0",
  },
});
