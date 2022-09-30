import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'typewriter-effect/dist/core',
        './node_modules/typewriter-effect/dist/core'
      ]
    }
  }
})
