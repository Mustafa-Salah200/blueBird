import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    // The minifier drops the unprefixed backdrop-filter on .chip, which
    // removes the HUD blur, so the stylesheet ships as written.
    cssMinify: false,
  },
});
