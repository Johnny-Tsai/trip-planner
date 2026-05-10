# 福岡九天八夜 · 旅遊計畫網站

> 2026/05/28 — 06/05｜福岡 · 由布院 · 別府

使用 [Astro](https://astro.build) 製作的個人旅遊計畫靜態網站，部署於 GitHub Pages。

## 功能特色

- 響應式雜誌風格設計（手機 / 平板 / 桌機）
- 9 天行程逐日獨立頁面 + 商店清單 + 大眾交通指南
- Checklist 頁面支援 `localStorage` 勾選狀態持久化
- 自動暗黑模式（依系統設定）
- GitHub Actions 自動部署
- 中文字型透過 Google Fonts 載入 Noto Sans/Serif TC

## 本地開發

```bash
# 1. 安裝依賴（Node.js 20+ 必須）
npm install

# 2. 開發模式
npm run dev
# 開啟 http://localhost:4321

# 3. 建置生產版本
npm run build

# 4. 預覽建置結果
npm run preview
```

## 部署到 GitHub Pages（Private Repo）

> ⚠️ 此 repo 包含真實住宿地址等個人資訊，**請務必設為 Private**。
> Private repo 使用 GitHub Pages 需要 **GitHub Pro** 帳號（每月 $4 美元）。

### 步驟一：建立 GitHub Repo（從本地推送）

```bash
# 在本資料夾內，初始化 git
cd fukuoka-2026
git init
git add -A
git commit -m "Initial commit: 福岡九天八夜旅遊計畫"

# 建立 GitHub Private Repo（需先安裝 gh CLI: https://cli.github.com）
gh auth login
gh repo create fukuoka-2026 --private --source=. --push

# 或者，先在 github.com 手動建立 Private Repo，然後：
git branch -M main
git remote add origin git@github.com:YOUR-USERNAME/fukuoka-2026.git
git push -u origin main
```

### 步驟二：修改 `astro.config.mjs`

打開 `astro.config.mjs`，將 `YOUR-USERNAME` 改為你的 GitHub 帳號：

```js
site: 'https://YOUR-USERNAME.github.io',
base: '/fukuoka-2026',  // 若 repo 名稱不同，請對應修改
```

### 步驟三：啟用 GitHub Pages

1. 進入你的 repo → Settings → Pages
2. 在 **Source** 下拉選單選擇 **GitHub Actions**
3. 等 1–2 分鐘第一次部署完成
4. 部署後可在 `https://YOUR-USERNAME.github.io/fukuoka-2026` 查看（Private repo 需登入）

### 步驟四（選用）：開啟 Private Pages

預設 Private repo 的 Pages 是公開的（任何人有連結都能存取）。
如需限制只有 repo 協作者才可瀏覽：

1. 進入 Settings → Pages → **Visibility** 選擇 `Private`
2. 此功能要求 **GitHub Pro / Team / Enterprise** 方案

## 修改內容

所有行程資料都集中在 `src/data/trip.ts`，包含：

- `TRIP_META`：標題、日期
- `HOTELS`：住宿
- `TRIP_INFO`：旅程資訊與交通策略
- `OVERVIEW`：每日一覽（首頁卡片）
- `TRANSIT_MASTER`：交通指南頁
- `TRANSIT_TICKETS`：必備票券
- `CHECKLIST`：清單與預算
- `DAYS`：9 天每日完整內容（時間軸、商店、交通、提示）

修改完該檔案後，git commit + push 即會自動部署。

## 專案結構

```
fukuoka-2026/
├── astro.config.mjs        # 站點與 base 路徑設定
├── package.json
├── tsconfig.json
├── public/
│   └── favicon.svg
├── src/
│   ├── data/
│   │   ├── types.ts        # 資料模型 TypeScript 介面
│   │   └── trip.ts         # 全部行程資料（修改這裡）
│   ├── components/
│   │   ├── DayHero.astro
│   │   ├── Illust.astro    # CSS 漸層插圖
│   │   ├── InfoCard.astro
│   │   ├── MealTable.astro
│   │   ├── ShopBlock.astro
│   │   ├── Timeline.astro
│   │   ├── Tip.astro
│   │   └── TransitCard.astro
│   ├── layouts/
│   │   └── Layout.astro    # 全站共用版型 + 導覽列
│   ├── pages/
│   │   ├── index.astro     # 首頁（總覽）
│   │   ├── transit.astro   # 交通指南
│   │   ├── checklist.astro # 出發前清單
│   │   └── days/
│   │       └── [num].astro # 動態路由：/days/1 ... /days/9
│   └── styles/
│       └── global.css      # 全站 CSS
└── .github/
    └── workflows/
        └── deploy.yml      # GitHub Actions 自動部署
```

## 後續可擴充功能

- [ ] 加入 Google Maps 連結（每個景點點擊開啟導航）
- [ ] PWA 離線快取（`@vite-pwa/astro`）
- [ ] 加入真實照片（建議拍完後再放，使用 Astro 內建 `<Image>`）
- [ ] 旅程結束後加入心得/照片回顧頁

## 授權

本專案僅供個人使用，內容為個人旅遊規劃。
