import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: "/anoma-intent-playground/",   // <-- Burası GitHub Pages URL base'in
  resolve: { alias: { '@': path.resolve(__dirname, './src') } },
})
