// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.world-wan.com.tw',
  vite: {
    plugins: [tailwindcss()],
  },
});
