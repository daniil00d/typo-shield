import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { resolve } from 'path';

export default defineConfig({
  plugins: [dts()],
  build: { 
    lib: { 
      entry: resolve(__dirname, 'src/index.ts'), 
      name: 'typo-shield-parsers' 
    } 
  },
  resolve: {
    alias: {
      assert: require.resolve("assert"),
      url: require.resolve("url"),
    },
  }
})
