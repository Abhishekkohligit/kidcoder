'use client';
import { Progress, DayProgress } from './types';

const KEY = 'kidcoder-progress';

export function loadProgress(): Progress {
  if (typeof window === 'undefined') return {};
  try {
    return JSON.parse(localStorage.getItem(KEY) || '{}');
  } catch {
    return {};
  }
}

export function saveProgress(progress: Progress): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(KEY, JSON.stringify(progress));
}

export function markDayComplete(weekId: number, dayId: number, score: number): void {
  const progress = loadProgress();
  const key = `week-${weekId}-day-${dayId}`;
  progress[key] = { completed: true, score, completedAt: new Date().toISOString() };
  saveProgress(progress);
}

export function getDayProgress(weekId: number, dayId: number): DayProgress | undefined {
  return loadProgress()[`week-${weekId}-day-${dayId}`];
}

export function getWeekCompletedCount(weekId: number): number {
  const progress = loadProgress();
  return Array.from({ length: 5 }, (_, i) => i + 1)
    .filter(dayId => progress[`week-${weekId}-day-${dayId}`]?.completed)
    .length;
}

export function getTotalCompleted(): number {
  return Object.values(loadProgress()).filter(d => d.completed).length;
}
