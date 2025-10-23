// @ts-check
import { defineConfig } from 'astro/config';
import bun from "@nurodev/astro-bun";
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  adapter: bun(),
  vite: {
    plugins: [tailwindcss()]
  }
});