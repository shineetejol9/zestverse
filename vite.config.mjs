import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_PATH || "/zestverse1", // ✅ move it here
  plugins: [
    tailwindcss(),
    react(),
  ],
})
