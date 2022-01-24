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
      proxy: {
        '/devapi': '0.0.0.0'
      }
    },
    resolve: {
      // 文件夹别名
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@static": path.resolve(__dirname, "public/static"),
        "@img": path.resolve(__dirname, "src/assets/img"),
        "@css": path.resolve(__dirname, "src/assets/css"),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@css/varuables.scss";`
        },
        less: {
          modifyVars: {
            'arcoblue-6': '#1d63ff',
          },
          javascriptEnabled: true,
        }
      }
    }
  })
}