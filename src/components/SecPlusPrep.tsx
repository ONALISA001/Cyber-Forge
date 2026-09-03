import React, { useState, useMemo } from 'react';
import {
  Shield,
  ChevronDown,
  ChevronRight,
  CheckCircle,
  XCircle,
  RotateCcw,
  Filter,
  BarChart2,
  BookOpen,
  Lightbulb,
} from 'lucide-react';
import { SecPlusDomain, SecPlusQuestion } from '../types';
import { secPlusQuestions } from '../data/secplus-questions';

const DOMAINS: SecPlusDomain[] = [
  'Threats, Attacks & Vulnerabilities',
  'Architecture & Design',
  'Implementation',
  'Operations & Incident Response',
  'Governance, Risk & Compliance',
];

const DOMAIN_COLORS: Record<SecPlusDomain, string> = {
  'Threats, Attacks & Vulnerabilities': 'badge-error',
  'Architecture & Design': 'badge-info',
  'Implementation': 'badge-success',
  'Operations & Incident Response': 'badge-warning',
  'Governance, Risk & Compliance': 'badge-secondary',
};

const DOMAIN_ICONS: Record<SecPlusDomain, React.ReactNode> = {
  'Threats, Attacks & Vulnerabilities': '⚔️',
  'Architecture & Design': '🏗️',
  'Implementation': '🔧',
  'Operations & Incident Response': '🚨',
  'Governance, Risk & Compliance': '📋',
};

type Mode = 'bank' | 'quiz' | 'results';

interface QuizState {
  questions: SecPlusQuestion[];
  current: number;
  answers: (number | null)[];
  revealed: boolean[];
}

export const SecPlusPrep: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<SecPlusDomain | 'all'>('all');
  const [mode, setMode] = useState<Mode>('bank');
  const [quizSize, setQuizSize] = useState(20);
  const [quiz, setQuiz] = useState<QuizState | null>(null);
  const [expandedQ, setExpandedQ] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      selectedDomain === 'all'
        ? secPlusQuestions
        : secPlusQuestions.filter(q => q.domain === selectedDomain),
    [selectedDomain],
  );

  // ── Domain breakdown stats ────────────────────────────────────────────────
  const domainCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    secPlusQuestions.forEach(q => {
      counts[q.domain] = (counts[q.domain] || 0) + 1;
    });
    return counts;
  }, []);

  // ── Start a quiz ──────────────────────────────────────────────────────────
  const startQuiz = () => {
    const pool = [...filtered].sort(() => Math.random() - 0.5).slice(0, quizSize);
    setQuiz({
      questions: pool,
      current: 0,
      answers: Array(pool.length).fill(null),
      revealed: Array(pool.length).fill(false),
    });
    setMode('quiz');
  };

  const selectAnswer = (optIndex: number) => {
    if (!quiz || quiz.revealed[quiz.current]) return;
    const newAnswers = [...quiz.answers];
    const newRevealed = [...quiz.revealed];
    newAnswers[quiz.current] = optIndex;
    newRevealed[quiz.current] = true;
    setQuiz({ ...quiz, answers: newAnswers, revealed: newRevealed });
  };

  const nextQuestion = () => {
    if (!quiz) return;
    if (quiz.current + 1 >= quiz.questions.length) {
      setMode('results');
    } else {
      setQuiz({ ...quiz, current: quiz.current + 1 });
    }
  };

  const resetAll = () => {
    setQuiz(null);
    setMode('bank');
  };

  // ── Results view ──────────────────────────────────────────────────────────
  if (mode === 'results' && quiz) {
    const correct = quiz.answers.filter((a, i) => a === quiz.questions[i].answer).length;
    const pct = Math.round((correct / quiz.questions.length) * 100);
    const passed = pct >= 75;

    const byDomain: Record<string, { correct: number; total: number }> = {};
    quiz.questions.forEach((q, i) => {
      if (!byDomain[q.domain]) byDomain[q.domain] = { correct: 0, total: 0 };
      byDomain[q.domain].total++;
      if (quiz.answers[i] === q.answer) byDomain[q.domain].correct++;
    });

    return (
      <div className="fade-in p-6 space-y-6">
        <div className={`card ${passed ? 'bg-success/10 border border-success/30' : 'bg-error/10 border border-error/30'}`}>
          <div className="card-body items-center text-center py-8">
            <div className="text-6xl font-bold font-mono mb-2" style={{ color: passed ? 'oklch(var(--su))' : 'oklch(var(--er))' }}>
              {pct}%
            </div>
            <div className="text-xl font-semibold text-base-content">
              {correct} / {quiz.questions.length} correct
            </div>
            <div className={`badge mt-2 ${passed ? 'badge-success' : 'badge-error'} badge-lg`}>
              {passed ? '✅ Passing Score' : '❌ Below Passing (75%)'}
            </div>
          </div>
        </div>

        {/* Domain breakdown */}
        <div className="card bg-base-200">
          <div className="card-body p-4">
            <h3 className="font-semibold text-base-content flex items-center gap-2 mb-3">
              <BarChart2 size={16} className="text-info" /> Domain Breakdown
            </h3>
            <div className="space-y-3">
              {Object.entries(byDomain).map(([domain, stats]) => {
                const domPct = Math.round((stats.correct / stats.total) * 100);
                return (
                  <div key={domain}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-base-content/80 truncate max-w-[70%]">{domain}</span>
                      <span className="font-mono text-base-content/60">{stats.correct}/{stats.total} ({domPct}%)</span>
                    </div>
                    <div className="w-full bg-base-300 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all ${domPct >= 75 ? 'bg-success' : domPct >= 50 ? 'bg-warning' : 'bg-error'}`}
                        style={{ width: `${domPct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Review answers */}
        <div>
          <h3 className="font-semibold text-base-content mb-3">Review All Answers</h3>
          <div className="space-y-3">
            {quiz.questions.map((q, i) => {
              const isCorrect = quiz.answers[i] === q.answer;
              return (
                <div key={q.id} className={`card border ${isCorrect ? 'border-success/30 bg-success/5' : 'border-error/30 bg-error/5'}`}>
                  <div className="card-body p-4">
                    <div className="flex items-start gap-3">
                      {isCorrect
                        ? <CheckCircle size={18} className="text-success mt-0.5 flex-shrink-0" />
                        : <XCircle size={18} className="text-error mt-0.5 flex-shrink-0" />}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-base-content mb-2">{q.question}</p>
                        {!isCorrect && (
                          <p className="text-xs text-error mb-1">
                            Your answer: {quiz.answers[i] !== null ? q.options[quiz.answers[i]!] : 'Not answered'}
                          </p>
                        )}
                        <p className="text-xs text-success mb-2">Correct: {q.options[q.answer]}</p>
                        <p className="text-xs text-base-content/60 leading-relaxed">{q.explanation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button className="btn btn-primary w-full gap-2" onClick={resetAll}>
          <RotateCcw size={16} /> Back to Question Bank
        </button>
      </div>
    );
  }

  // ── Active quiz view ──────────────────────────────────────────────────────
  if (mode === 'quiz' && quiz) {
    const q = quiz.questions[quiz.current];
    const userAnswer = quiz.answers[quiz.current];
    const revealed = quiz.revealed[quiz.current];
    const progress = Math.round(((quiz.current + (revealed ? 1 : 0)) / quiz.questions.length) * 100);

    return (
      <div className="fade-in p-6 space-y-4">
        {/* Progress bar */}
        <div>
          <div className="flex justify-between text-xs text-base-content/50 mb-1">
            <span>Question {quiz.current + 1} of {quiz.questions.length}</span>
            <span className={`badge ${DOMAIN_COLORS[q.domain]} badge-sm`}>{q.domain}</span>
          </div>
          <div className="w-full bg-base-300 rounded-full h-2">
            <div className="h-2 rounded-full bg-primary transition-all" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* Question */}
        <div className="card bg-base-200">
          <div className="card-body p-5">
            <p className="text-base font-medium text-base-content leading-relaxed">{q.question}</p>
          </div>
        </div>

        {/* Options */}
        <div className="space-y-2">
          {q.options.map((opt, i) => {
            let cls = 'btn btn-outline w-full text-left justify-start h-auto py-3 px-4 normal-case text-sm';
            if (revealed) {
              if (i === q.answer) cls += ' btn-success border-success';
              else if (i === userAnswer && i !== q.answer) cls += ' btn-error border-error';
              else cls += ' opacity-40';
            }
            return (
              <button key={i} className={cls} onClick={() => selectAnswer(i)} disabled={revealed}>
                <span className="font-mono text-xs mr-3 opacity-50">{String.fromCharCode(65 + i)}.</span>
                {opt}
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {revealed && (
          <div className={`card border ${userAnswer === q.answer ? 'border-success/30 bg-success/5' : 'border-error/30 bg-error/5'}`}>
            <div className="card-body p-4">
              <div className="flex items-start gap-2">
                <Lightbulb size={16} className="text-warning mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-base-content mb-1">Explanation</p>
                  <p className="text-sm text-base-content/75 leading-relaxed">{q.explanation}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex gap-3">
          <button className="btn btn-ghost btn-sm" onClick={resetAll}>
            ✕ Quit
          </button>
          {revealed && (
            <button className="btn btn-primary flex-1" onClick={nextQuestion}>
              {quiz.current + 1 >= quiz.questions.length ? 'See Results →' : 'Next Question →'}
            </button>
          )}
        </div>
      </div>
    );
  }

  // ── Question bank / home view ─────────────────────────────────────────────
  return (
    <div className="fade-in p-6 space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <Shield size={24} className="text-success" />
          <h1 className="text-2xl font-bold text-base-content">Security+ Prep</h1>
          <span className="badge badge-success">{secPlusQuestions.length} Questions</span>
        </div>
        <p className="text-base-content/60 text-sm leading-relaxed">
          Exam-style questions mapped to all 5 CompTIA Security+ SY0-701 domains. Practice by domain or take a full timed quiz.
        </p>
      </div>

      {/* Domain stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {DOMAINS.map(domain => (
          <button
            key={domain}
            onClick={() => setSelectedDomain(prev => prev === domain ? 'all' : domain)}
            className={`card text-left transition-all border ${selectedDomain === domain ? 'border-primary bg-primary/10' : 'bg-base-200 border-transparent hover:border-base-content/20'}`}
          >
            <div className="card-body p-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-lg">{DOMAIN_ICONS[domain]}</span>
                <span className={`badge ${DOMAIN_COLORS[domain]} badge-sm`}>{domainCounts[domain]} Qs</span>
              </div>
              <p className="text-xs font-medium text-base-content leading-snug">{domain}</p>
            </div>
          </button>
        ))}
        <button
          onClick={() => setSelectedDomain('all')}
          className={`card text-left transition-all border ${selectedDomain === 'all' ? 'border-primary bg-primary/10' : 'bg-base-200 border-transparent hover:border-base-content/20'}`}
        >
          <div className="card-body p-4">
            <div className="flex items-center justify-between mb-1">
              <span className="text-lg">🎯</span>
              <span className="badge badge-primary badge-sm">{secPlusQuestions.length} Qs</span>
            </div>
            <p className="text-xs font-medium text-base-content">All Domains</p>
          </div>
        </button>
      </div>

      {/* Quiz launcher */}
      <div className="card bg-base-200">
        <div className="card-body p-5">
          <h3 className="font-semibold text-base-content flex items-center gap-2 mb-4">
            <BookOpen size={16} className="text-primary" />
            Start a Practice Quiz
          </h3>
          <div className="flex flex-wrap items-center gap-3">
            <div>
              <label className="text-xs text-base-content/50 block mb-1">Questions</label>
              <select
                className="select select-sm select-bordered"
                value={quizSize}
                onChange={e => setQuizSize(Number(e.target.value))}
              >
                {[10, 20, 30, 50, filtered.length].filter((v, i, a) => a.indexOf(v) === i && v <= filtered.length).map(n => (
                  <option key={n} value={n}>{n === filtered.length ? `All (${n})` : n}</option>
                ))}
              </select>
            </div>
            <div className="flex-1 min-w-[120px]">
              <label className="text-xs text-base-content/50 block mb-1">Domain</label>
              <div className={`badge ${selectedDomain === 'all' ? 'badge-primary' : DOMAIN_COLORS[selectedDomain as SecPlusDomain]} badge-sm`}>
                {selectedDomain === 'all' ? 'All Domains' : selectedDomain}
              </div>
            </div>
            <button className="btn btn-primary btn-sm mt-4" onClick={startQuiz}>
              Start Quiz →
            </button>
          </div>
        </div>
      </div>

      {/* Filter bar */}
      <div className="flex items-center gap-2">
        <Filter size={14} className="text-base-content/40" />
        <span className="text-sm text-base-content/50">
          Showing {filtered.length} questions
          {selectedDomain !== 'all' && ` · ${selectedDomain}`}
        </span>
      </div>

      {/* Question list (browse mode) */}
      <div className="space-y-2">
        {filtered.map(q => (
          <div key={q.id} className="card bg-base-200 overflow-hidden">
            <button
              className="w-full flex items-start gap-3 p-4 text-left hover:bg-base-100/30 transition-colors"
              onClick={() => setExpandedQ(prev => prev === q.id ? null : q.id)}
            >
              <span className="font-mono text-primary/50 text-xs mt-0.5 w-8 flex-shrink-0">
                #{q.id}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-base-content leading-snug">{q.question}</p>
                <span className={`badge ${DOMAIN_COLORS[q.domain]} badge-xs mt-1`}>{q.domain}</span>
              </div>
              {expandedQ === q.id
                ? <ChevronDown size={14} className="text-primary mt-1 flex-shrink-0" />
                : <ChevronRight size={14} className="text-base-content/30 mt-1 flex-shrink-0" />}
            </button>
            {expandedQ === q.id && (
              <div className="px-4 pb-4 border-t border-base-100/20 pt-3 space-y-3">
                <div className="space-y-1.5">
                  {q.options.map((opt, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-2 p-2 rounded-lg text-sm ${i === q.answer ? 'bg-success/15 text-success font-medium' : 'text-base-content/65'}`}
                    >
                      <span className="font-mono text-xs mt-0.5">{String.fromCharCode(65 + i)}.</span>
                      <span>{opt}</span>
                      {i === q.answer && <CheckCircle size={14} className="ml-auto mt-0.5 flex-shrink-0" />}
                    </div>
                  ))}
                </div>
                <div className="flex items-start gap-2 bg-base-300 rounded-lg p-3">
                  <Lightbulb size={14} className="text-warning mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-base-content/70 leading-relaxed">{q.explanation}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
