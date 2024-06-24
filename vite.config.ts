import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/vite-deployment/', // der projektname in github !
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        subpage1: resolve(__dirname, 'src/countries/countries.html')
      }
    }
  }
});