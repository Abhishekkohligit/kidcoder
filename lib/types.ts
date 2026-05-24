export type QuestionType = 'multiple-choice' | 'fill-blank' | 'true-false' | 'code-complete';

export interface Question {
  id: number;
  type: QuestionType;
  question: string;
  code?: string;
  options?: string[];
  answer: string;
  hint: string;
  explanation: string;
}

export interface DaySession {
  dayId: number;
  title: string;
  emoji: string;
  explanation: string;
  questions: Question[];
}

export interface Week {
  weekId: number;
  title: string;
  emoji: string;
  color: string;
  description: string;
  days: DaySession[];
}

export interface DayProgress {
  completed: boolean;
  score: number;
  completedAt?: string;
}

export interface Progress {
  [key: string]: DayProgress; // key: "week-1-day-1"
}
