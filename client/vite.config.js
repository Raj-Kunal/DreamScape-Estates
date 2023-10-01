import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://65.1.84.19:3000',
        secure: false,
      },
    },
  },

  plugins: [react()],
});
