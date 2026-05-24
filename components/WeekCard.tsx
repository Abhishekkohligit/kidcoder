'use client';
import Link from 'next/link';
import { Week } from '@/lib/types';

interface Props {
  week: Week;
  completedDays: number;
}

export default function WeekCard({ week, completedDays }: Props) {
  const allDone = completedDays === 5;

  return (
    <Link href={`/week/${week.weekId}`}>
      <div className={`relative rounded-2xl p-5 cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-xl bg-gradient-to-br ${week.color} text-white shadow-lg`}>
        {allDone && (
          <div className="absolute top-3 right-3 text-2xl">✅</div>
        )}
        <div className="text-4xl mb-2">{week.emoji}</div>
        <div className="text-xs font-bold opacity-80 mb-1">WEEK {week.weekId}</div>
        <h3 className="font-bold text-lg leading-tight mb-2">{week.title}</h3>
        <p className="text-sm opacity-90 mb-3 leading-snug">{week.description}</p>

        {/* Progress bar */}
        <div className="bg-white/30 rounded-full h-2 mb-1">
          <div
            className="bg-white rounded-full h-2 transition-all duration-500"
            style={{ width: `${(completedDays / 5) * 100}%` }}
          />
        </div>
        <div className="text-xs opacity-80">{completedDays}/5 days done</div>
      </div>
    </Link>
  );
}
