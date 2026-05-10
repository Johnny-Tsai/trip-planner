// 行程資料模型
export type TagColor = 'red' | 'green' | 'blue' | 'amber' | 'purple';

export interface TimelineAlt {
  title: string;
  body: string;
  mapQuery?: string;
}

export interface TimelineItem {
  time: string;
  place: string;
  desc: string;
  alt?: TimelineAlt[];
  mapQuery?: string;
}

export interface Shop {
  name: string;
  tag?: string;
  tagColor?: TagColor;
  desc: string;
  mapQuery?: string;
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
  mapQuery?: string;
}

export interface MealTable {
  caption: string;
  rows: MealRow[];
}

export interface InfoCard {
  title: string;
  paragraphs: string[];
}

// type 改為 string，由各 trip 的 illustrations 字典自行定義 key
export interface HeroIllust {
  type: string;
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
  mapQuery?: string;
}

export interface OverviewItem {
  num: number;
  date: string;
  title: string;
  body: string;
}

// === 多趟旅遊平台型別 ===

export interface TripMeta {
  title: string;
  subtitle: string;
  dateRange: string;
  dates: { start: string; end: string };
  totalDays: number;
  totalNights: number;
  themeColor?: string;       // 每趟可有自己主題色，覆寫 --c-accent
  description?: string;      // <meta name="description"> 用
  coverIcons?: string;       // 首頁卡片 / cover 區裝飾 icon row
  tagline?: string;          // cover 區的 tagline 文案
  badge?: string;            // cover 區左上角 badge（如 "FUKUOKA · KYUSHU"）
  coverImage?: string;       // trip 頁 cover hero 背景照（檔名，置於 public/illustrations/{slug}/）
}

export interface IllustEntry {
  img: string;
  label: string;
  icon: string;
}

export interface ChecklistBudgetItem {
  label: string;
  body: string;
}

export interface ChecklistData {
  documents: string[];
  packing: string[];
  budget: ChecklistBudgetItem[];
  emergency: ChecklistBudgetItem[];
}

export interface Trip {
  slug: string;
  meta: TripMeta;
  hotels: Hotel[];
  info: InfoCard[];                                 // 原 TRIP_INFO
  overview: OverviewItem[];
  transit: { master: TransitCard[]; tickets: InfoCard };
  checklist: ChecklistData;
  days: Day[];
  illustrations: Record<string, IllustEntry>;
}
