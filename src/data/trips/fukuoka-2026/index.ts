import type { Trip } from '../../types';
import { meta } from './meta';
import { hotels } from './hotels';
import { info, overview } from './overview';
import { master, tickets } from './transit';
import { checklist } from './checklist';
import { days } from './days';
import { illustrations } from './illustrations';

const trip: Trip = {
  slug: 'fukuoka-2026',
  meta,
  hotels,
  info,
  overview,
  transit: { master, tickets },
  checklist,
  days,
  illustrations,
};

export default trip;
