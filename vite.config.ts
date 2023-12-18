import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions:{
      output:{
        manualChunks:{
          "@chakra-ui/react":['@chakra-ui/react'],
          "framer-motion":['framer-motion'],
          "@emotion/react":['@emotion/react'],
          "@emotion/styled":['@emotion/styled']
        }
      }
    }
  }
})
