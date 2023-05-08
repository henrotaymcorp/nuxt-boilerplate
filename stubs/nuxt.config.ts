// import eslintPlugin from "vite-plugin-eslint";
import * as dotenv from "dotenv";
dotenv.config();

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      trustupIoAppKey: ""
    },
  },
  ssr: false,
  typescript: {
    shim: false,
    strict: true,
  },
  css: [
    "~/assets/css/main.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    plugins: [],
    server: {
      hmr: {
        port: parseInt(process.env.WEBSOCKET_PORT || "{{{{appPort}}}}"),
      },
    },
  },
  devServer: {
    port: parseInt(process.env.APP_PORT || "{{{{websocketPort}}}}"),
  },
});
