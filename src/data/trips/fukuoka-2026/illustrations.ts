import type { IllustEntry } from '../../types';

// Wikimedia Commons CC-BY-SA 圖片來源 helper
const wm = (filename: string, width = 1200) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}?width=${width}`;

export const illustrations: Record<string, IllustEntry> = {
  airport: {
    img: wm('Fukuoka Airport International Terminal by night; April 2016.jpg'),
    label: '福岡國際機場',
    icon: '✈',
  },
  park: {
    img: wm('Sunset in Ohori Park.JPG'),
    label: '大濠公園夕陽',
    icon: '❀',
  },
  castle: {
    img: wm('View near east moat of Fukuoka Castle.jpg'),
    label: '福岡城跡',
    icon: '❖',
  },
  river: {
    img: wm('Yanagawa Cruise.jpg'),
    label: '柳川扁舟川下り',
    icon: '◆',
  },
  shrine: {
    img: wm('Dazaifu Tenmangu08n3200.jpg'),
    label: '太宰府天滿宮',
    icon: '❖',
  },
  'shrine-hakata': {
    img: wm('Kushida Jinja Hakata Okunchi.JPG'),
    label: '櫛田神社',
    icon: '✦',
  },
  tower: {
    img: wm('Fukuoka Tower 20180413.jpg'),
    label: '福岡塔',
    icon: '▲',
  },
  yufuin: {
    img: wm('View of Mount Yufudake and Yufuin Onsen Street in front of Yufuin Station.JPG'),
    label: '由布院・由布岳',
    icon: '▲',
  },
  safari: {
    img: wm('Africanlionsafari Bus.JPG'),
    label: '九州自然動物園',
    icon: '◆',
  },
  hells: {
    img: wm('Umi Jigoku (Sea Hell) in Beppu.jpg'),
    label: '別府海地獄',
    icon: '♨',
  },
  canalcity: {
    img: wm('Canal city hakata fukuoka3.jpg'),
    label: '博多運河城',
    icon: '★',
  },
  shopping: {
    img: wm('Hakata Station Business Center Building.JPG'),
    label: '博多站',
    icon: '★',
  },
};
