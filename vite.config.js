import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: "./", // Render için base
  resolve: { alias: { '@': path.resolve(__dirname, './src') } },
  preview: {
    host: true, // 0.0.0.0 ile dinle
    port: parseInt(process.env.PORT) || 4173,
    allowedHosts: ["anoma-intent-playground.onrender.com"]
  }
})
