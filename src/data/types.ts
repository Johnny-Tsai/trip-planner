// 行程資料模型
export type TagColor = 'red' | 'green' | 'blue' | 'amber' | 'purple';

export interface TimelineAlt {
  title: string;
  body: string;
}

export interface TimelineItem {
  time: string;
  place: string;
  desc: string;
  alt?: TimelineAlt[];
}

export interface Shop {
  name: string;
  tag?: string;
  tagColor?: TagColor;
  desc: string;
}

export interface ShopBlock {
  title: string;
  shops: Shop[];
}

export interface TransitStep {
  text: string;
  meta?: string;
}

export interface TransitCard {
  title: string;
  variant?: TagColor;
  steps: TransitStep[];
}

export interface MealRow {
  plan: string;
  name: string;
  feature: string;
}

export interface MealTable {
  caption: string;
  rows: MealRow[];
}

export interface InfoCard {
  title: string;
  paragraphs: string[];
}

export interface HeroIllust {
  type:
    | 'park'
    | 'castle'
    | 'tower'
    | 'river'
    | 'shrine'
    | 'shrine-hakata'
    | 'yufuin'
    | 'safari'
    | 'hells'
    | 'canalcity'
    | 'airport'
    | 'shopping';
  label: string;
}

export interface Day {
  num: number;
  date: string;
  weekday: string;
  tag: string;
  title: string;
  subtitle: string;
  summary: string;
  iconRow: string;
  hero: HeroIllust[];
  timeline: TimelineItem[];
  shops?: ShopBlock[];
  transit?: TransitCard[];
  tip?: string;
  table?: MealTable;
  infos?: InfoCard[];
}

export interface Hotel {
  range: string;
  nights: string;
  name: string;
  area: string;
}

export interface OverviewItem {
  num: number;
  date: string;
  title: string;
  body: string;
}
