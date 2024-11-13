import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  server: {
    open: true
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about/index.html'),
        catalog: resolve(__dirname, 'catalog/index.html'),
        contact: resolve(__dirname, 'contact/index.html')
      }
    }
  },
  optimizeDeps: {
    include: ['@tailwindcss/forms']
  }
});