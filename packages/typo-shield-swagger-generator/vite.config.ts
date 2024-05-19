import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { resolve } from 'path';

const entries = {
  server: { 
    entry: resolve(__dirname, 'src/server/index.ts'), 
    name: 'typo-shield-swagger-generator-server' 
  },
  main: { 
    entry: resolve(__dirname, 'src/index.ts'), 
    name: 'typo-shield-swagger-generator' 
  }
}

// const lib = process.env.LIB_NAME || 'main'

export default defineConfig({
  plugins: [dts()],
  build: {
    lib: { 
      entry: resolve(__dirname, 'src/server/index.ts'), 
      name: 'typo-shield-swagger-server'
    },
    emptyOutDir: false,
  },
})
