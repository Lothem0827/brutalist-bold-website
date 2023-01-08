import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@images": path.resolve(__dirname, "./src/assets/images"),
      "@components": path.resolve(__dirname, "./src/lib/components"),
    },
  },
  plugins: [
    svelte({
      experimental: {
        inspector: true,
      },
    }),
  ],
});
