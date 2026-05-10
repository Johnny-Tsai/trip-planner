import type { IllustEntry } from '../../types';

// 本地手繪 / 水彩風 PNG（放於 public/illustrations/fukuoka-2026/）
// 未生圖前 Illust.astro 會 onerror 隱藏 img，露出 CSS 漸層 fallback (.illust--xxx)
const base = import.meta.env.BASE_URL;
const b = base.endsWith('/') ? base : `${base}/`;
const local = (filename: string) => `${b}illustrations/fukuoka-2026/${filename}`;

export const illustrations: Record<string, IllustEntry> = {
  airport: {
    img: local('airport.png'),
    label: '福岡國際機場',
    icon: '✈',
  },
  park: {
    img: local('park.png'),
    label: '大濠公園夕陽',
    icon: '❀',
  },
  castle: {
    img: local('castle.png'),
    label: '福岡城跡',
    icon: '❖',
  },
  river: {
    img: local('river.png'),
    label: '柳川扁舟川下り',
    icon: '◆',
  },
  shrine: {
    img: local('shrine.png'),
    label: '太宰府天滿宮',
    icon: '❖',
  },
  'shrine-hakata': {
    img: local('shrine-hakata.png'),
    label: '櫛田神社',
    icon: '✦',
  },
  tower: {
    img: local('tower.png'),
    label: '福岡塔',
    icon: '▲',
  },
  yufuin: {
    img: local('yufuin.png'),
    label: '由布院・由布岳',
    icon: '▲',
  },
  safari: {
    img: local('safari.png'),
    label: '九州自然動物園',
    icon: '◆',
  },
  hells: {
    img: local('hells.png'),
    label: '別府海地獄',
    icon: '♨',
  },
  canalcity: {
    img: local('canalcity.png'),
    label: '博多運河城',
    icon: '★',
  },
  shopping: {
    img: local('shopping.png'),
    label: '博多站',
    icon: '★',
  },
};
