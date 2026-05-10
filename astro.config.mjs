import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // 部署到 GitHub Pages 時，site 與 base 需依實際 repo 名稱修改。
  // 範例：repo 名為 fukuoka-2026，使用者名稱為 yourname → https://yourname.github.io/fukuoka-2026
  site: 'https://YOUR-USERNAME.github.io',
  base: '/fukuoka-2026',
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
