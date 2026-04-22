import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // VITE_BASE_URL is injected by the CD workflow for GitHub Pages 
  // Falls back to '/' for local dev and custom domains
  base: process.env.VITE_BASE_URL ?? '/',
})
