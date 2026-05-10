import type { Trip } from '../types';
import fukuoka from './fukuoka-2026';

// 新增旅遊：import 後在 trips Map 加一行即可，路由與導覽會自動產生
export const trips: Record<string, Trip> = {
  [fukuoka.slug]: fukuoka,
};

export const getTrip = (slug: string): Trip | undefined => trips[slug];

export const getAllTrips = (): Trip[] => Object.values(trips);
