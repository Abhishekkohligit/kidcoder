'use client';
import Link from 'next/link';
import { DaySession, DayProgress } from '@/lib/types';

interface Props {
  day: DaySession;
  weekId: number;
  progress?: DayProgress;
}

export default function DayCard({ day, weekId, progress }: Props) {
  const scoreColor = progress
    ? progress.score >= 80 ? 'text-green-400' : progress.score >= 60 ? 'text-yellow-400' : 'text-red-400'
    : '';

  return (
    <Link href={`/week/${weekId}/day/${day.dayId}`}>
      <div className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-[1.02] ${
        progress?.completed
          ? 'border-green-500/40 bg-green-900/20'
          : 'border-white/10 bg-[#1a1a2e] hover:border-purple-500/50 hover:bg-[#1e1e38]'
      }`}>
        <div className="text-3xl">{day.emoji}</div>
        <div className="flex-1 min-w-0">
          <div className="text-xs text-gray-500 font-medium">DAY {day.dayId}</div>
          <div className="font-bold text-white leading-tight">{day.title}</div>
          <div className="text-xs text-gray-500 mt-0.5">{day.questions.length} questions</div>
        </div>
        {progress?.completed ? (
          <div className="text-right shrink-0">
            <div className={`font-bold text-lg ${scoreColor}`}>{progress.score}%</div>
            <div className="text-xs text-gray-500">done ✓</div>
          </div>
        ) : (
          <div className="text-purple-400 text-xl shrink-0">→</div>
        )}
      </div>
    </Link>
  );
}
