import { defineConfig } from 'vite';
import path from 'node:path';
import process from 'node:process';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import viteRawPlugin from './vite/vite-raw-plugin.js';

export default defineConfig({
  plugins: [
    svelte({
      emitCss: false,
    }),
    viteRawPlugin({
      fileRegex: /\.navy$/,
    }),
  ],
  root: 'src',
  publicDir: '../public',
  build: {
    rollupOptions: {
      input: {
        app: 'index.html',
      },
    },
  },
  server: {
    open: 'index.html',
  },
  resolve: {
    alias: {
      '~utils': path.resolve(process.cwd(), 'src/utils'),
      '~data': path.resolve(process.cwd(), 'src/data'),
      '~navy': path.resolve(process.cwd(), 'src/navy'),
    },
  },
});
