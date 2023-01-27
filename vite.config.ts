import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import liveReload from 'vite-plugin-live-reload';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(),svgr(),liveReload('.path')],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.js',
    coverage: {
      reporter: ["text", 'html']
    }
  },
})
