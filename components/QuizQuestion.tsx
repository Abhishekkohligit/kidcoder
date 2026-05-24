'use client';
import { useState } from 'react';
import { Question } from '@/lib/types';

interface Props {
  question: Question;
  questionNumber: number;
  total: number;
  onAnswer: (correct: boolean) => void;
}

export default function QuizQuestion({ question, questionNumber, total, onAnswer }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const options = question.options || ['True', 'False'];

  function handleSelect(option: string) {
    if (showResult) return;
    setSelected(option);
    setShowResult(true);
  }

  const isCorrect = selected === question.answer;

  const confettiColors = ['#a855f7', '#ec4899', '#22d3ee', '#facc15', '#4ade80', '#f97316'];
  const confettiPieces = Array.from({ length: 24 }, (_, i) => ({
    left: `${Math.floor((i / 24) * 100)}%`,
    color: confettiColors[i % confettiColors.length],
    delay: `${(i * 0.06).toFixed(2)}s`,
    duration: `${(2.5 + Math.random() * 2.5).toFixed(2)}s`,
    size: i % 3 === 0 ? '16px' : '12px',
  }));

  const sadFaces = ['😢', '😞', '😟', '😿', '💧'];
  const sadPieces = Array.from({ length: 16 }, (_, i) => ({
    left: `${Math.floor((i / 16) * 100)}%`,
    emoji: sadFaces[i % sadFaces.length],
    delay: `${(i * 0.07).toFixed(2)}s`,
    duration: `${(2.5 + Math.random() * 2.5).toFixed(2)}s`,
  }));

  return (
    <div className="relative bg-[#1a1a2e] border border-white/10 rounded-2xl shadow-md p-6 w-full max-w-2xl mx-auto">
      {showResult && isCorrect && (
        <div className="confetti-container">
          {confettiPieces.map((p, i) => (
            <div
              key={i}
              className="confetti-piece"
              style={{ left: p.left, backgroundColor: p.color, animationDelay: p.delay, animationDuration: p.duration, width: p.size, height: p.size }}
            />
          ))}
        </div>
      )}
      {showResult && !isCorrect && (
        <div className="confetti-container">
          {sadPieces.map((p, i) => (
            <div
              key={i}
              className="sadface-piece"
              style={{ left: p.left, animationDelay: p.delay, animationDuration: p.duration }}
            >
              {p.emoji}
            </div>
          ))}
        </div>
      )}
      {/* Progress bar */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex-1 bg-white/10 rounded-full h-2">
          <div
            className="bg-purple-500 rounded-full h-2 transition-all duration-500"
            style={{ width: `${((questionNumber - 1) / total) * 100}%` }}
          />
        </div>
        <span className="text-sm text-gray-400 shrink-0">{questionNumber}/{total}</span>
      </div>

      {/* Type badge */}
      <div className="text-xs font-bold text-purple-400 uppercase tracking-wide mb-2">
        {question.type === 'multiple-choice' && '🔘 Multiple Choice'}
        {question.type === 'true-false' && '✅ True or False'}
        {question.type === 'fill-blank' && '✏️ Fill in the Blank'}
        {question.type === 'code-complete' && '💻 Complete the Code'}
      </div>

      {/* Question */}
      <h2 className="text-lg font-bold text-white mb-3 leading-snug">{question.question}</h2>

      {/* Code block */}
      {question.code && (
        <pre className="bg-[#0d0d1a] text-green-400 border border-white/10 rounded-xl p-4 text-sm font-mono mb-4 overflow-x-auto whitespace-pre-wrap">
          {question.code}
        </pre>
      )}

      {/* Hint */}
      {!showResult && (
        <button onClick={() => setShowHint(h => !h)} className="text-sm text-purple-400 hover:text-purple-300 mb-3 underline">
          {showHint ? 'Hide hint' : '💡 Need a hint?'}
        </button>
      )}
      {showHint && !showResult && (
        <div className="bg-yellow-900/30 border border-yellow-500/30 rounded-xl p-3 mb-3 text-sm text-yellow-300">
          💡 {question.hint}
        </div>
      )}

      {/* Options */}
      <div className="grid gap-3 mb-4">
        {options.map((opt) => {
          let style = 'border border-white/10 bg-white/5 text-gray-200 hover:border-purple-400 hover:bg-purple-900/30';
          if (showResult) {
            if (opt === question.answer) style = 'border border-green-500 bg-green-900/40 text-green-300';
            else if (opt === selected) style = 'border border-red-500 bg-red-900/40 text-red-300';
            else style = 'border border-white/5 bg-white/5 text-gray-500 opacity-50';
          }
          return (
            <button
              key={opt}
              onClick={() => handleSelect(opt)}
              className={`text-left px-4 py-3 rounded-xl font-medium transition-all duration-150 ${style} ${showResult ? 'cursor-default' : 'cursor-pointer'}`}
            >
              {showResult && opt === question.answer && <span className="mr-2">✅</span>}
              {showResult && opt === selected && opt !== question.answer && <span className="mr-2">❌</span>}
              {opt}
            </button>
          );
        })}
      </div>

      {/* Result feedback */}
      {showResult && (
        <div className={`rounded-xl p-4 mb-4 ${isCorrect ? 'bg-green-900/30 border border-green-500/40' : 'bg-red-900/30 border border-red-500/40'}`}>
          <div className={`font-bold text-lg mb-1 ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
            {isCorrect ? '🎉 Correct!' : '😅 Not quite!'}
          </div>
          <p className="text-sm text-gray-300">{question.explanation}</p>
        </div>
      )}

      {/* Next button */}
      {showResult && (
        <button
          onClick={() => onAnswer(isCorrect)}
          className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl transition-colors text-lg"
        >
          {questionNumber < total ? 'Next Question →' : 'See Results! 🏆'}
        </button>
      )}
    </div>
  );
}
