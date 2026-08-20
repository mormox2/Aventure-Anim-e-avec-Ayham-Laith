import { defineConfig } from "vite";

export default defineConfig({
  // Use relative base path so assets load seamlessly regardless of repo name or domain
  base: process.env.VITE_BASE_PATH || "./",
  publicDir: "public",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  server: {
    host: "0.0.0.0",
  },
});
