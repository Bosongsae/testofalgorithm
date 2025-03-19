import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/testofalgorithm/', // GitHub Pages에서 사용될 경로 설정
});