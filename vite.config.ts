import { defineConfig } from 'vitest/config';
import { URL, fileURLToPath } from 'url';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ include: ['lib'] })],
  build: {
    lib: {
      entry: fileURLToPath(new URL('lib/index.ts', import.meta.url)),
      formats: ['es'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
    },
    emptyOutDir: true,
  },
  test: {
    // 👋 add the line below to add jsdom to vite
    environment: 'jsdom',
    // hey! 👋 over here
    globals: true,
    setupFiles: './tests/setup.js', // assuming the test folder is in the root of our project
  },
});
