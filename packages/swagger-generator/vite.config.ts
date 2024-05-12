// vite.config.ts
import { defineConfig } from 'vite'
// import tsconfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'
import { resolve } from 'path';

export default defineConfig({
  plugins: [dts()],
  build: { lib: { entry: resolve(__dirname, 'src/index.ts'), formats: ['es'] } },
  resolve: { alias: { src: resolve('src/') } },
  // build: {
  //   lib: {
  //     entry: 'src/index.ts',
  //     name: 'typo-shield-swagger-generator',
  //     // fileName: format => `typo-shield-swagger-generator.${format}.js`,
  //   },
  //   // rollupOptions: {
  //   //   external: ['vue'],
  //   //   output: {
  //   //     globals: {
  //   //       vue: 'Vue',
  //   //     },
  //   //   },
  //   // },
  // }
})
