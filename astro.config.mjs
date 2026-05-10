import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // 部署到 GitHub Pages：site 為 GitHub Pages domain，base 為 repo 名稱
  // 此專案為「多趟旅遊平台」，每趟以 /trips/<slug>/ 路由區隔
  site: 'https://johnny-tsai.github.io',
  base: '/trip-planner',
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
  compressHTML: true,
  vite: {
    build: {
      cssCodeSplit: false,
    },
  },
});
