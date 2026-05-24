'use client';
import { useEffect, useState } from 'react';
import { allWeeks } from '@/lib/curriculum';
import { getWeekCompletedCount, getTotalCompleted } from '@/lib/progress';
import WeekCard from '@/components/WeekCard';

export default function Home() {
  const [completedMap, setCompletedMap] = useState<Record<number, number>>({});
  const [totalDone, setTotalDone] = useState(0);

  useEffect(() => {
    const map: Record<number, number> = {};
    allWeeks.forEach(w => {
      map[w.weekId] = getWeekCompletedCount(w.weekId);
    });
    setCompletedMap(map);
    setTotalDone(getTotalCompleted());
  }, []);

  const totalDays = 60;
  const pct = Math.round((totalDone / totalDays) * 100);

  return (
    <div className="min-h-screen bg-[#0f0f1a]">
      {/* Hero header */}
      <header className="bg-gradient-to-r from-purple-700 to-pink-600 text-white px-6 py-10 text-center shadow-lg">
        <div className="text-5xl mb-3">🚀</div>
        <h1 className="text-4xl font-extrabold mb-2 tracking-tight">KidCoder</h1>
        <p className="text-lg opacity-90 mb-6">Learn to code in 12 weeks — 45 minutes a day!</p>

        <div className="max-w-sm mx-auto bg-white/10 rounded-2xl p-4">
          <div className="flex justify-between text-sm font-semibold mb-2">
            <span>Your Progress</span>
            <span>{totalDone}/{totalDays} days</span>
          </div>
          <div className="bg-white/20 rounded-full h-4 mb-1">
            <div
              className="bg-white rounded-full h-4 transition-all duration-700"
              style={{ width: `${pct}%` }}
            />
          </div>
          <div className="text-sm opacity-90">{pct}% complete {pct === 100 ? '🎓' : pct > 50 ? '🔥' : '⭐'}</div>
        </div>
      </header>

      {/* Stats bar */}
      <div className="max-w-5xl mx-auto px-4 py-5 grid grid-cols-3 gap-4">
        {[
          { label: 'Days Done', value: totalDone, emoji: '✅' },
          { label: 'Weeks Started', value: Object.values(completedMap).filter(v => v > 0).length, emoji: '📅' },
          { label: 'Days Left', value: totalDays - totalDone, emoji: '🎯' },
        ].map(s => (
          <div key={s.label} className="bg-[#1a1a2e] rounded-2xl shadow p-4 text-center border border-white/10">
            <div className="text-2xl mb-1">{s.emoji}</div>
            <div className="text-3xl font-extrabold text-purple-400">{s.value}</div>
            <div className="text-xs text-gray-400 font-medium">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Week grid */}
      <main className="max-w-5xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-4">📚 Your 12-Week Journey</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {allWeeks.map(week => (
            <WeekCard
              key={week.weekId}
              week={week}
              completedDays={completedMap[week.weekId] ?? 0}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
