import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // listen on all addresses
    port: 5173, // default port
    strictPort: true,
    allowedHosts: [
      '5ea7-103-190-170-58.ngrok-free.app', // domain ngrok Anda
    ]
  }
})
