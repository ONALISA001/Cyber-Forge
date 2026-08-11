import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Lock, CheckCircle, Clock, BookOpen } from 'lucide-react';
import { Tier, ProgressData } from '../types';
import { courses } from '../data';

interface LearningPathsProps {
  progress: ProgressData;
  onSelectCourse: (id: string) => void;
}

const tiers: { key: Tier; label: string; color: string; badgeClass: string }[] = [
  { key: 'beginner', label: 'Beginner', color: 'text-info', badgeClass: 'badge-info' },
  { key: 'intermediate', label: 'Intermediate', color: 'text-warning', badgeClass: 'badge-warning' },
  { key: 'advanced', label: 'Advanced', color: 'text-error', badgeClass: 'badge-error' },
];

export const LearningPaths: React.FC<LearningPathsProps> = ({ progress, onSelectCourse }) => {
  const [expandedTier, setExpandedTier] = useState<Tier | null>(progress.currentTier);

  const isUnlocked = (courseId: string) => {
    const course = courses.find(c => c.id === courseId);
    if (!course) return false;
    return course.prerequisites.every(pre => progress.completedCourses.includes(pre));
  };

  return (
    <div className="fade-in p-6 overflow-y-auto h-full scrollbar-thin">
      <h1 className="text-2xl font-bold text-base-content mb-2">Learning Paths</h1>
      <p className="text-base-content/60 mb-6">Progress through three tiers to become job-ready.</p>

      <div className="space-y-3">
        {tiers.map(tier => {
          const tierCourses = courses.filter(c => c.tier === tier.key);
          const completed = tierCourses.filter(c => progress.completedCourses.includes(c.id)).length;
          const isExpanded = expandedTier === tier.key;

          return (
            <div key={tier.key} className="card bg-base-200">
              <button
                className="card-body p-4 cursor-pointer"
                onClick={() => setExpandedTier(isExpanded ? null : tier.key)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {isExpanded ? <ChevronDown size={18} className={tier.color} /> : <ChevronRight size={18} className={tier.color} />}
                    <h2 className={`font-bold text-lg ${tier.color}`}>{tier.label} Tier</h2>
                    <span className={`badge ${tier.badgeClass} badge-sm`}>{completed}/{tierCourses.length}</span>
                  </div>
                  <progress className="progress progress-success w-24" value={tierCourses.length ? (completed / tierCourses.length) * 100 : 0} max={100} />
                </div>
              </button>

              {isExpanded && (
                <div className="px-4 pb-4 space-y-2">
                  {tierCourses.map((course, idx) => {
                    const completed = progress.completedCourses.includes(course.id);
                    const unlocked = isUnlocked(course.id);

                    return (
                      <button
                        key={course.id}
                        className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${
                          unlocked ? 'hover:bg-base-300 cursor-pointer' : 'opacity-50 cursor-not-allowed'
                        }`}
                        onClick={() => unlocked && onSelectCourse(course.id)}
                        disabled={!unlocked}
                      >
                        <span className="text-base-content/40 font-mono text-sm w-6">{String(idx + 1).padStart(2, '0')}</span>
                        {completed ? (
                          <CheckCircle size={18} className="text-success flex-shrink-0" />
                        ) : unlocked ? (
                          <BookOpen size={18} className="text-base-content/40 flex-shrink-0" />
                        ) : (
                          <Lock size={18} className="text-base-content/20 flex-shrink-0" />
                        )}
                        <div className="flex-1 min-w-0">
                          <p className={`font-medium ${completed ? 'text-success' : 'text-base-content'} truncate`}>{course.title}</p>
                          <p className="text-xs text-base-content/40 truncate">{course.description}</p>
                        </div>
                        <div className="flex items-center gap-1 text-base-content/40 text-xs flex-shrink-0">
                          <Clock size={12} />
                          {course.estimatedHours}h
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
