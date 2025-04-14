import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  base: '/bright-motion-ventures/',
  plugins: [vue()],
  // vueDevTools()
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: 'dist', // Default build output folder
    rollupOptions: {
      external: [], // Ensure `vue` is not marked as external
    },
  },
  assetsInclude: ['**/*.JPG'],
})
