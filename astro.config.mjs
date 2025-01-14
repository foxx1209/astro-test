import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config

const path = "/dist"
export default defineConfig({
  // site:"",
    base: path, // ここにベースパスを定義

  integrations: [sitemap()],
  base: path,
  // trailingSlash: "never",
    vite: {
      define: {
      'import.meta.env.BASE_PATH': JSON.stringify(path),
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "/src/sass/_styles.scss" as *;',
        },
      },
    },
    
    build: {
      // cssTarget:""
      minify: false,
      emptyOutDir: true,
      rollupOptions: {
        output: {
          entryFileNames: `assets/js/[name]-.js`,
          chunkFileNames: `assets/js/[name]-.js`,
          assetFileNames: ({ names}) => {
            if (/\.(gif|jpeg|jpg|png|svg|webp)$/.test(names ?? "")) {
              return "assets/img/[name]-[hash][extname]";
            }
            if (/\.css$/.test(names ?? "")) {
              return "assets/css/[name]-[hash][extname]";
            }
            if (/\.js$/.test(names ?? "")) {
              return "assets/js/[name]-[hash][extname]";
            }
            return "assets/[name]-[hash][extname]";
          },
        },
      },
      assetsInlineLimit: 0,
    },
    
  },
 
});

