import {
  defineConfig,
  loadEnv
} from 'vite'
import path from "path";

import vue from '@vitejs/plugin-vue'
import {
  svgBuilder
} from './src/assets/svg/svgBuilder';

// https://vitejs.dev/config/
export default ({
  mode
}) => {
  return defineConfig({
    base: loadEnv(mode, process.cwd()).VITE_APP_NAME,
    build: {
      outDir: 'docs'
    },
    plugins: [vue(), svgBuilder('./src/assets/svg/svg/')],
    server: {
      port: 8888,
      proxy: {
        '/devapi': {
          target: 'xxxxxxxx',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/devapi/, '')
        },
      }
    },
    resolve: {
      // 文件夹别名
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@static": path.resolve(__dirname, "public/static"),
        "@img": path.resolve(__dirname, "src/assets/img"),
        "@css": path.resolve(__dirname, "src/assets/css"),
        "@store": path.resolve(__dirname, "src/store"),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {}
      }
    }
  })
}