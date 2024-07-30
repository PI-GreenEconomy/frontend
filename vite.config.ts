import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/apiFrete": {
        target: "https://www.melhorenvio.com.br/api/v2/me/shipment/calculate",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/apiFrete/, ""),
      },
    },
  },
});
