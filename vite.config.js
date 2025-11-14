import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // When deploying to GitHub Pages under a repository (not a user/organization site),
  // set the `base` option to the repository name so asset URLs resolve correctly.
  // Repository name: PyDelhi-
  base: '/PyDelhi-/',
  plugins: [react()],
})
