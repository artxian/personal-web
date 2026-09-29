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
    // Minify JS and CSS for maximum compression and performance
    minify: true,
    cssMinify: true,
    // Disable sourcemaps for lighter production assets
    sourcemap: false,
    // Vendor chunk splitting for efficient long-term browser and CDN caching
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/framer-motion')) {
            return 'vendor-motion';
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
})
