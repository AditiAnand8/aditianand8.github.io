import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: 'dist', // Output directory for the build
    assetsDir: 'assets', // Directory to nest generated static assets under
    sourcemap: false, // Generate source maps for the build
    minify: 'esbuild', // Minification option, can be 'terser' or 'esbuild'
    rollupOptions: {
      output: {
        manualChunks: {
          // Example of manually splitting vendor and app code
          vendor: ['vue']
        }
      }
    }
  }
})
