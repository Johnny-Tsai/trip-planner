# 福岡九天八夜 · 景點插畫 AI 生圖 Prompt

把生成的 PNG 直接放在這個目錄，檔名須與 illustrations.ts 內定義一致。

## 共用風格約定（每個 prompt 都加在最後）

```
Style: soft watercolor illustration, hand-drawn ink outlines, off-white paper
texture, muted warm palette (terracotta, ochre, sage, dusty blue, cream),
gentle wash, painterly, magazine editorial illustration.
Composition: subject centered, generous negative space, simplified background.
Aspect ratio: 16:9.
Negative: no text, no signage, no watermark, no people focus, no photorealism,
no harsh shadows, no neon colors, no 3D rendering.
```

---

## 12 景點 prompt

### 1. airport.png — 福岡國際機場
```
Watercolor illustration of Fukuoka International Airport at dusk: a streamlined
modern terminal with large glass facade glowing softly from inside, a single
airplane silhouette taking off in muted ochre sky, ground crew lights dotted
along the runway, soft purple-blue evening clouds.
```

### 2. park.png — 大濠公園夕陽
```
Watercolor illustration of Ohori Park at sunset: a calm round lake with a
small Japanese pavilion bridge crossing it, willow trees on the shore, warm
orange and rose-pink reflections shimmering on the water, soft sage trees,
quiet pastoral mood.
```

### 3. castle.png — 福岡城跡
```
Watercolor illustration of Fukuoka Castle ruins: stacked stone walls covered
in moss and grass, a few cherry blossom branches in soft pink at the corner,
hints of blue sky and white drifting clouds, sense of historic stillness,
gentle morning light.
```

### 4. river.png — 柳川扁舟川下り
```
Watercolor illustration of Yanagawa river boat tour: a flat wooden punt boat
with a straw-hatted boatman gently poling along a narrow canal, willow
branches arching overhead, low traditional white-walled houses on the banks,
ripples in dusty blue water, peaceful summer afternoon.
```

### 5. shrine.png — 太宰府天滿宮
```
Watercolor illustration of Dazaifu Tenmangu shrine: vermillion red wooden
arched bridge crossing a koi pond, large plum tree blossoming in soft pink
to one side, traditional curved temple roof with green-bronze tiles in the
background, lanterns lining the path.
```

### 6. shrine-hakata.png — 櫛田神社
```
Watercolor illustration of Kushida Shrine in Hakata: a tall vermillion torii
gate at the entrance, traditional white walls with dark wood beams, a giant
wooden festival float (yamakasa) decorated with mythological figures partially
visible, warm afternoon light.
```

### 7. tower.png — 福岡塔
```
Watercolor illustration of Fukuoka Tower: a slim triangular silver tower
with mirrored glass panels reflecting sunset, viewed against a coastal
backdrop with the sea on one side and low city buildings on the other,
soft pink and lavender sky.
```

### 8. yufuin.png — 由布院・由布岳
```
Watercolor illustration of Yufuin onsen town with Mount Yufu in the
background: a twin-peaked mountain in muted blue-green silhouette, a
foreground of golden rice paddies and a small stream, traditional wooden
inn rooftop visible at lower edge, gentle steam wisps rising from a
distant onsen, serene countryside mood.
```

### 9. safari.png — 九州自然動物園
```
Watercolor illustration of African Safari park in Kyushu: a small jungle
bus painted with friendly stripes driving through rolling savanna hills,
silhouettes of giraffe, zebra and lion in the distance, soft yellow-ochre
grasslands, scattered acacia-like trees, warm overcast sky.
```

### 10. hells.png — 別府海地獄
```
Watercolor illustration of Beppu Umi Jigoku (Sea Hell): a small cobalt-blue
hot spring pond steaming heavily with thick white wisps, surrounded by
red-brown volcanic rock and a small wooden viewing fence, distant pine
trees, a faint torii gate hint at the back, mysterious yet calm.
```

### 11. canalcity.png — 博多運河城
```
Watercolor illustration of Canal City Hakata: a curved postmodern shopping
complex in warm terracotta and ochre tones, an artificial canal running
through the central plaza with a small fountain spray, rounded balconies
and palm-like decorative trees, soft evening lights starting to glow.
```

### 12. shopping.png — 博多站
```
Watercolor illustration of Hakata Station: a wide modern station building
with a multi-tier facade, a covered plaza with people-shaped silhouettes
walking, a Shinkansen bullet train nose visible at the platform on one
side, soft afternoon light, urban-but-warm magazine feel.
```

---

## 推薦工具

- **Midjourney** v6+：把 prompt 丟進去，加 `--ar 16:9 --style raw --stylize 250`
- **Imagen 3 / 4** (Vertex AI / AI Studio)：直接貼 prompt + aspect ratio 設 16:9
- **DALL-E 3** (ChatGPT)：請 ChatGPT 「以這段 prompt 生成 16:9 圖」，提到 watercolor 多次以加強

## 命名與放置

生成後把檔案存成 PNG，命名為對應的 key（小寫、連字號），放入此目錄：

```
public/illustrations/fukuoka-2026/
  airport.png
  park.png
  castle.png
  river.png
  shrine.png
  shrine-hakata.png
  tower.png
  yufuin.png
  safari.png
  hells.png
  canalcity.png
  shopping.png
```

未生圖的景點不會破版——`Illust.astro` 會 onerror 隱藏 img，自動 fallback 到
`global.css` 內 `.illust--xxx` 預定義的色塊漸層。
