import { resolve } from 'path';
import { defineConfig } from 'vitest/config';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/guide/build.html#library-mode

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'indexeddb-image-cache',
      fileName: 'indexeddb-image-cache',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest-setup.ts'],
  },
  plugins: [dts({
    insertTypesEntry: true,
  })],
});
