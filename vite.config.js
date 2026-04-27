import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// When deploying to GitHub Pages the app lives at
// https://<user>.github.io/<repo>/, so Vite needs `base` set to the repo
// segment in production. Locally (vite dev / preview) we still want `/`.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/responsive-mesh-playground/' : '/',
  plugins: [react()],
  server: { port: 5173, open: true }
}));
