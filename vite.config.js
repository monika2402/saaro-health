import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      process: "process/browser", // <- add this
    },
  },
  define: {
    'process.env': {},
    'process.title': JSON.stringify(''), // <- add this to stub
  },
});
