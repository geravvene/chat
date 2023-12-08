import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/chat',
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }, { find: '@img', replacement: path.resolve(__dirname, 'assets/img') }],
  },
})
