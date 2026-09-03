import React, { useState } from 'react';
import {
  CheckCircle,
  XCircle,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  HelpCircle,
  BookOpen,
  Layers,
} from 'lucide-react';
import { QuizQuestion } from '../types';

type QuizMode = 'choice' | 'flashcard' | 'explain';

interface QuizPanelProps {
  questions: QuizQuestion[];
  title?: string;
  onClose?: () => void;
}

export const QuizPanel: React.FC<QuizPanelProps> = ({ questions, title = 'Module Quiz', onClose }) => {
  const [mode, setMode] = useState<QuizMode>('choice');
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [revealed, setRevealed] = useState<boolean[]>(Array(questions.length).fill(false));
  const [flipped, setFlipped] = useState(false);
  const [explainInput, setExplainInput] = useState('');
  const [explainFeedback, setExplainFeedback] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const q = questions[current];
  const isAnswered = revealed[current];
  const userAnswer = answers[current];

  const reset = () => {
    setCurrent(0);
    setAnswers(Array(questions.length).fill(null));
    setRevealed(Array(questions.length).fill(false));
    setFlipped(false);
    setExplainInput('');
    setExplainFeedback(null);
    setDone(false);
  };

  const handleModeChange = (m: QuizMode) => {
    setMode(m);
    reset();
  };

  const selectAnswer = (i: number) => {
    if (isAnswered) return;
    const newAnswers = [...answers];
    const newRevealed = [...revealed];
    newAnswers[current] = i;
    newRevealed[current] = true;
    setAnswers(newAnswers);
    setRevealed(newRevealed);
  };

  const goNext = () => {
    if (current + 1 >= questions.length) {
      setDone(true);
    } else {
      setCurrent(current + 1);
      setFlipped(false);
      setExplainInput('');
      setExplainFeedback(null);
    }
  };

  const goPrev = () => {
    if (current > 0) {
      setCurrent(current - 1);
      setFlipped(false);
    }
  };

  const checkExplanation = () => {
    const key = q.options[q.answer].toLowerCase();
    const userText = explainInput.toLowerCase();
    const words = key.split(/\s+/).filter(w => w.length > 4);
    const matched = words.filter(w => userText.includes(w)).length;
    const pct = words.length ? matched / words.length : 0;
    if (pct >= 0.3 || userText.length > 40) {
      setExplainFeedback('good');
      const nr = [...revealed]; nr[current] = true; setRevealed(nr);
      const na = [...answers]; na[current] = q.answer; setAnswers(na);
    } else {
      setExplainFeedback('try');
    }
  };

  // ── Results ───────────────────────────────────────────────────────────────
  if (done && mode === 'choice') {
    const score = answers.filter((a, i) => a === questions[i].answer).length;
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="rounded-xl bg-base-200 border border-base-100/20 p-5 space-y-4">
        <div className="text-center">
          <div className="text-4xl font-bold font-mono mb-1" style={{ color: pct >= 70 ? 'oklch(var(--su))' : 'oklch(var(--er))' }}>
            {pct}%
          </div>
          <p className="text-sm text-base-content/60">{score}/{questions.length} correct</p>
        </div>
        <div className="space-y-2">
          {questions.map((qq, i) => {
            const ok = answers[i] === qq.answer;
            return (
              <div key={i} className={`rounded-lg p-3 text-sm ${ok ? 'bg-success/10' : 'bg-error/10'}`}>
                <div className="flex items-start gap-2">
                  {ok ? <CheckCircle size={14} className="text-success mt-0.5 flex-shrink-0" /> : <XCircle size={14} className="text-error mt-0.5 flex-shrink-0" />}
                  <div>
                    <p className="font-medium text-base-content mb-1">{qq.question}</p>
                    {!ok && <p className="text-xs text-error">Your answer: {answers[i] !== null ? qq.options[answers[i]!] : '—'}</p>}
                    <p className="text-xs text-success">Correct: {qq.options[qq.answer]}</p>
                    <p className="text-xs text-base-content/55 mt-1 leading-relaxed">{qq.explanation}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex gap-2">
          <button className="btn btn-sm btn-ghost flex-1 gap-1" onClick={reset}>
            <RotateCcw size={14} /> Retry
          </button>
          {onClose && <button className="btn btn-sm btn-ghost" onClick={onClose}>Close</button>}
        </div>
      </div>
    );
  }

  // ── Header with mode tabs ─────────────────────────────────────────────────
  return (
    <div className="rounded-xl bg-base-200 border border-base-100/20 overflow-hidden">
      {/* Tab bar */}
      <div className="flex items-center gap-0 bg-base-300 border-b border-base-100/20">
        <span className="text-xs font-semibold text-base-content/40 px-3">{title}</span>
        <div className="ml-auto flex">
          {([
            { id: 'choice', icon: <HelpCircle size={13} />, label: 'Quiz' },
            { id: 'flashcard', icon: <Layers size={13} />, label: 'Flashcard' },
            { id: 'explain', icon: <BookOpen size={13} />, label: 'Explain' },
          ] as { id: QuizMode; icon: React.ReactNode; label: string }[]).map(tab => (
            <button
              key={tab.id}
              onClick={() => handleModeChange(tab.id)}
              className={`flex items-center gap-1 px-3 py-2 text-xs transition-colors ${mode === tab.id ? 'bg-primary text-primary-content font-semibold' : 'text-base-content/50 hover:text-base-content'}`}
            >
              {tab.icon}{tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4">
        {/* Progress */}
        <div className="flex justify-between text-xs text-base-content/40 mb-2">
          <span>Q{current + 1} / {questions.length}</span>
          {mode === 'choice' && <span>{answers.filter((a, i) => a === questions[i].answer).length} correct so far</span>}
        </div>
        <div className="w-full bg-base-300 rounded-full h-1.5 mb-4">
          <div className="h-1.5 rounded-full bg-primary transition-all" style={{ width: `${((current + (isAnswered ? 1 : 0)) / questions.length) * 100}%` }} />
        </div>

        {/* ── MULTIPLE CHOICE mode ─────────────────────────────────────── */}
        {mode === 'choice' && (
          <div className="space-y-3">
            <p className="text-sm font-medium text-base-content leading-relaxed">{q.question}</p>
            <div className="space-y-2">
              {q.options.map((opt, i) => {
                let cls = 'w-full flex items-start gap-2 p-3 rounded-lg text-sm text-left transition-all border ';
                if (!isAnswered) {
                  cls += 'border-base-300 bg-base-300 hover:border-primary/50 hover:bg-primary/5 cursor-pointer';
                } else if (i === q.answer) {
                  cls += 'border-success bg-success/15 text-success font-medium cursor-default';
                } else if (i === userAnswer) {
                  cls += 'border-error bg-error/15 text-error cursor-default';
                } else {
                  cls += 'border-base-300 bg-base-300 opacity-40 cursor-default';
                }
                return (
                  <button key={i} className={cls} onClick={() => selectAnswer(i)} disabled={isAnswered}>
                    <span className="font-mono text-xs mt-0.5 w-4 flex-shrink-0">{String.fromCharCode(65 + i)}.</span>
                    <span>{opt}</span>
                    {isAnswered && i === q.answer && <CheckCircle size={14} className="ml-auto mt-0.5 flex-shrink-0 text-success" />}
                    {isAnswered && i === userAnswer && i !== q.answer && <XCircle size={14} className="ml-auto mt-0.5 flex-shrink-0 text-error" />}
                  </button>
                );
              })}
            </div>
            {isAnswered && (
              <div className="flex items-start gap-2 bg-base-300 rounded-lg p-3">
                <Lightbulb size={14} className="text-warning mt-0.5 flex-shrink-0" />
                <p className="text-xs text-base-content/70 leading-relaxed">{q.explanation}</p>
              </div>
            )}
            <div className="flex gap-2">
              <button className="btn btn-xs btn-ghost" onClick={goPrev} disabled={current === 0}>
                <ChevronLeft size={14} />
              </button>
              {isAnswered && (
                <button className="btn btn-xs btn-primary flex-1" onClick={goNext}>
                  {current + 1 >= questions.length ? 'See Results' : 'Next →'}
                </button>
              )}
            </div>
          </div>
        )}

        {/* ── FLASHCARD mode ───────────────────────────────────────────── */}
        {mode === 'flashcard' && (
          <div className="space-y-3">
            <div
              className="relative cursor-pointer rounded-xl border border-base-300 bg-base-300 min-h-[140px] flex items-center justify-center p-5 text-center select-none"
              onClick={() => setFlipped(!flipped)}
            >
              {!flipped ? (
                <div>
                  <p className="text-xs text-primary font-semibold uppercase tracking-wide mb-3">Question</p>
                  <p className="text-sm font-medium text-base-content leading-relaxed">{q.question}</p>
                  <p className="text-xs text-base-content/30 mt-4">Tap to reveal answer</p>
                </div>
              ) : (
                <div>
                  <p className="text-xs text-success font-semibold uppercase tracking-wide mb-3">Answer</p>
                  <p className="text-base font-bold text-success mb-2">{q.options[q.answer]}</p>
                  <p className="text-xs text-base-content/60 leading-relaxed">{q.explanation}</p>
                </div>
              )}
            </div>
            <div className="flex gap-2 justify-center">
              <button className="btn btn-xs btn-ghost" onClick={goPrev} disabled={current === 0}>
                <ChevronLeft size={14} /> Prev
              </button>
              <button className="btn btn-xs btn-primary" onClick={goNext}>
                {current + 1 >= questions.length ? 'Done' : 'Next'} <ChevronRight size={14} />
              </button>
            </div>
          </div>
        )}

        {/* ── EXPLAIN mode (write your own answer) ─────────────────────── */}
        {mode === 'explain' && (
          <div className="space-y-3">
            <p className="text-sm font-medium text-base-content leading-relaxed">{q.question}</p>
            {!isAnswered ? (
              <>
                <textarea
                  className="textarea textarea-bordered w-full text-sm"
                  rows={3}
                  placeholder="Type your explanation in your own words..."
                  value={explainInput}
                  onChange={e => setExplainInput(e.target.value)}
                />
                {explainFeedback === 'try' && (
                  <p className="text-xs text-warning">Add more detail — explain the concept more fully.</p>
                )}
                <button className="btn btn-sm btn-primary w-full" onClick={checkExplanation} disabled={explainInput.trim().length < 10}>
                  Submit Explanation
                </button>
              </>
            ) : (
              <div className="space-y-2">
                <div className="bg-success/10 border border-success/30 rounded-lg p-3">
                  <p className="text-xs font-semibold text-success mb-1">Your answer accepted ✓</p>
                  <p className="text-xs text-base-content/60 italic">{explainInput}</p>
                </div>
                <div className="bg-base-300 rounded-lg p-3">
                  <p className="text-xs font-semibold text-base-content mb-1">Correct answer:</p>
                  <p className="text-sm font-bold text-success mb-2">{q.options[q.answer]}</p>
                  <p className="text-xs text-base-content/65 leading-relaxed">{q.explanation}</p>
                </div>
                <div className="flex gap-2">
                  <button className="btn btn-xs btn-ghost" onClick={goPrev} disabled={current === 0}>
                    <ChevronLeft size={14} />
                  </button>
                  <button className="btn btn-xs btn-primary flex-1" onClick={goNext}>
                    {current + 1 >= questions.length ? 'Done' : 'Next →'}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
