'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getWeek } from '@/lib/curriculum';
import { getDayProgress } from '@/lib/progress';
import DayCard from '@/components/DayCard';
import { Week } from '@/lib/types';

export default function WeekPage() {
  const params = useParams();
  const weekId = Number(params.weekId);
  const [week, setWeek] = useState<Week | null>(null);
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    setWeek(getWeek(weekId) || null);
    forceUpdate(n => n + 1);
  }, [weekId]);

  if (!week) return (
    <div className="min-h-screen bg-[#0f0f1a] flex items-center justify-center text-gray-400">Loading…</div>
  );

  const completedCount = week.days.filter(d => getDayProgress(weekId, d.dayId)?.completed).length;

  return (
    <div className="min-h-screen bg-[#0f0f1a]">
      {/* Header */}
      <header className={`bg-gradient-to-r ${week.color} text-white px-6 py-10 shadow-lg`}>
        <div className="max-w-2xl mx-auto">
          <Link href="/" className="inline-block text-white/70 hover:text-white text-sm mb-4">← Back to Home</Link>
          <div className="text-5xl mb-2">{week.emoji}</div>
          <div className="text-sm font-bold opacity-80 mb-1">WEEK {week.weekId}</div>
          <h1 className="text-3xl font-extrabold mb-2">{week.title}</h1>
          <p className="opacity-90 mb-4">{week.description}</p>

          <div className="bg-white/10 rounded-xl p-3">
            <div className="flex justify-between text-sm font-semibold mb-2">
              <span>Week Progress</span>
              <span>{completedCount}/5 days</span>
            </div>
            <div className="bg-white/20 rounded-full h-3">
              <div
                className="bg-white rounded-full h-3 transition-all duration-500"
                style={{ width: `${(completedCount / 5) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Day list */}
      <main className="max-w-2xl mx-auto px-4 py-8">
        <h2 className="text-xl font-bold text-white mb-4">📅 This Week&apos;s Lessons</h2>
        <div className="flex flex-col gap-3">
          {week.days.map(day => (
            <DayCard
              key={day.dayId}
              day={day}
              weekId={weekId}
              progress={getDayProgress(weekId, day.dayId)}
            />
          ))}
        </div>

        {completedCount === 5 && (
          <div className="mt-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl p-6 text-center shadow-lg">
            <div className="text-4xl mb-2">🏆</div>
            <h3 className="text-2xl font-extrabold mb-1">Week Complete!</h3>
            <p className="opacity-90 mb-4">Amazing work finishing all 5 days!</p>
            {weekId < 12 && (
              <Link href={`/week/${weekId + 1}`}>
                <button className="bg-white text-green-600 font-bold px-6 py-3 rounded-xl hover:bg-green-50 transition-colors">
                  Next Week →
                </button>
              </Link>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
