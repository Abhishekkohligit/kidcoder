import { Week } from './types';
import { weeks1to3 } from './curriculum-weeks1-3';
import { weeks4to6 } from './curriculum-weeks4-6';
import { weeks7to9 } from './curriculum-weeks7-9';
import { weeks10to12 } from './curriculum-weeks10-12';

export const allWeeks: Week[] = [
  ...weeks1to3,
  ...weeks4to6,
  ...weeks7to9,
  ...weeks10to12,
];

export function getWeek(weekId: number): Week | undefined {
  return allWeeks.find(w => w.weekId === weekId);
}

export function getDay(weekId: number, dayId: number) {
  return getWeek(weekId)?.days.find(d => d.dayId === dayId);
}
