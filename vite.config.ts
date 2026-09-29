import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Ensure Lightning CSS keeps standard backdrop-filter (not just -webkit- prefix).
    // Without this, Lightning CSS strips the unprefixed property in production builds.
    cssTarget: ['chrome88', 'firefox90', 'safari15', 'edge88'],
  },
})
