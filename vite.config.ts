import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/vite-deploy/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        subpage1: resolve(__dirname, 'src/countries/countries.html')
      }
    }
  }
});