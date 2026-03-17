import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "online-trading-platform-teal.vercel.app",
      "online-trading-platform-lp85.vercel.app"
    ]
  }
})