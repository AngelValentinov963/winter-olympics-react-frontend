import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "localhost",
    //allowedHosts: true,
    port: 5173,
    proxy: {
      "/api": {
        target: "http://localhost:8084",
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
