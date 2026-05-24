'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getDay, getWeek } from '@/lib/curriculum';
import { markDayComplete, getDayProgress } from '@/lib/progress';
import LessonContent from '@/components/LessonContent';
import QuizQuestion from '@/components/QuizQuestion';
import { DaySession, Week } from '@/lib/types';

type Phase = 'lesson' | 'quiz' | 'results';

export default function DayPage() {
  const params = useParams();
  const weekId = Number(params.weekId);
  const dayId = Number(params.dayId);

  const [week, setWeek] = useState<Week | null>(null);
  const [day, setDay] = useState<DaySession | null>(null);
  const [phase, setPhase] = useState<Phase>('lesson');
  const [currentQ, setCurrentQ] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [alreadyDone, setAlreadyDone] = useState(false);

  useEffect(() => {
    setWeek(getWeek(weekId) || null);
    setDay(getDay(weekId, dayId) || null);
    const prev = getDayProgress(weekId, dayId);
    if (prev?.completed) setAlreadyDone(true);
  }, [weekId, dayId]);

  if (!day || !week) return (
    <div className="min-h-screen bg-[#0f0f1a] flex items-center justify-center text-gray-400">Loading…</div>
  );

  function handleAnswer(correct: boolean) {
    if (correct) setCorrectCount(c => c + 1);
    if (currentQ + 1 >= day!.questions.length) {
      const finalScore = Math.round(((correctCount + (correct ? 1 : 0)) / day!.questions.length) * 100);
      markDayComplete(weekId, dayId, finalScore);
      setPhase('results');
    } else {
      setCurrentQ(q => q + 1);
    }
  }

  const finalScore = Math.round(((correctCount) / day.questions.length) * 100);
  const starCount = finalScore >= 90 ? 3 : finalScore >= 70 ? 2 : finalScore >= 50 ? 1 : 0;
  const stars = '⭐'.repeat(starCount) + '☆'.repeat(3 - starCount);

  // ── LESSON PHASE ──────────────────────────────────────────────────────────
  if (phase === 'lesson') {
    return (
      <div className="min-h-screen bg-[#0f0f1a]">
        <header className={`bg-gradient-to-r ${week.color} text-white px-6 py-6 shadow-lg`}>
          <div className="max-w-2xl mx-auto">
            <Link href={`/week/${weekId}`} className="text-white/70 hover:text-white text-sm">← Week {weekId}</Link>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-3xl">{day.emoji}</span>
              <div>
                <div className="text-xs font-bold opacity-80">DAY {dayId} &mdash; LESSON (15 min)</div>
                <h1 className="text-2xl font-extrabold">{day.title}</h1>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-2xl mx-auto px-4 py-8">
          <div className="bg-[#1a1a2e] border border-white/10 rounded-2xl shadow-md p-6 mb-6">
            <LessonContent content={day.explanation} />
          </div>

          {alreadyDone && (
            <div className="bg-green-900/40 border border-green-500/40 rounded-xl p-3 mb-4 text-sm text-green-400 text-center">
              ✅ You&apos;ve already completed this day! You can redo it for practice.
            </div>
          )}

          <button
            onClick={() => setPhase('quiz')}
            className={`w-full py-4 text-white font-bold rounded-2xl text-xl transition-all duration-200 hover:scale-105 shadow-lg bg-gradient-to-r ${week.color}`}
          >
            I&apos;m Ready &mdash; Start the Quiz! 🧠
          </button>
        </main>
      </div>
    );
  }

  // ── QUIZ PHASE ────────────────────────────────────────────────────────────
  if (phase === 'quiz') {
    return (
      <div className="min-h-screen bg-[#0f0f1a]">
        <header className={`bg-gradient-to-r ${week.color} text-white px-6 py-4 shadow`}>
          <div className="max-w-2xl mx-auto flex items-center justify-between">
            <button onClick={() => setPhase('lesson')} className="text-white/70 hover:text-white text-sm">
              ← Back to Lesson
            </button>
            <div className="text-sm font-bold">{day.emoji} {day.title}</div>
            <div className="text-sm opacity-80">{currentQ + 1}/{day.questions.length}</div>
          </div>
        </header>

        <main className="max-w-2xl mx-auto px-4 py-8">
          <QuizQuestion
            question={day.questions[currentQ]}
            questionNumber={currentQ + 1}
            total={day.questions.length}
            onAnswer={handleAnswer}
          />
        </main>
      </div>
    );
  }

  // ── RESULTS PHASE ─────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#0f0f1a] flex flex-col items-center justify-center px-4 py-12">
      <div className="bg-[#1a1a2e] border border-white/10 rounded-3xl shadow-xl p-8 max-w-md w-full text-center">
        <div className="text-6xl mb-4">
          {finalScore >= 90 ? '🏆' : finalScore >= 70 ? '🌟' : finalScore >= 50 ? '👍' : '💪'}
        </div>
        <h1 className="text-3xl font-extrabold text-white mb-2">
          {finalScore >= 90 ? 'Amazing!' : finalScore >= 70 ? 'Great Job!' : finalScore >= 50 ? 'Good Try!' : 'Keep Going!'}
        </h1>
        <div className="text-4xl mb-3">{stars}</div>
        <div className="text-6xl font-extrabold text-purple-400 mb-2">{finalScore}%</div>
        <p className="text-gray-400 mb-1">{correctCount} out of {day.questions.length} correct</p>
        <p className="text-sm text-gray-500 mb-8">Day {dayId} of Week {weekId} &mdash; {day.title}</p>

        <div className="flex flex-col gap-3">
          {dayId < 5 && (
            <Link href={`/week/${weekId}/day/${dayId + 1}`}>
              <button className={`w-full py-3 text-white font-bold rounded-xl bg-gradient-to-r ${week.color} hover:opacity-90 transition-opacity`}>
                Next Day →
              </button>
            </Link>
          )}
          {dayId === 5 && weekId < 12 && (
            <Link href={`/week/${weekId + 1}`}>
              <button className={`w-full py-3 text-white font-bold rounded-xl bg-gradient-to-r ${week.color} hover:opacity-90 transition-opacity`}>
                Next Week 🚀
              </button>
            </Link>
          )}
          <button
            onClick={() => { setPhase('quiz'); setCurrentQ(0); setCorrectCount(0); }}
            className="w-full py-3 border border-purple-500/50 text-purple-400 font-bold rounded-xl hover:bg-purple-900/30 transition-colors"
          >
            🔄 Try Again
          </button>
          <Link href={`/week/${weekId}`}>
            <button className="w-full py-3 text-gray-500 font-medium rounded-xl hover:bg-white/5 transition-colors">
              Back to Week {weekId}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
