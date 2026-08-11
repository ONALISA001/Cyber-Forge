import React from 'react';
import { BookOpen, FlaskConical, Award, Flame, ArrowRight } from 'lucide-react';
import { ProgressData, Tier, Page } from '../types';
import { courses, labs } from '../data';

interface DashboardProps {
  progress: ProgressData;
  onNavigate: (page: Page) => void;
  onSelectCourse: (id: string) => void;
}

const tierColors: Record<Tier, string> = {
  beginner: 'text-info',
  intermediate: 'text-warning',
  advanced: 'text-error',
};

const tierLabels: Record<Tier, string> = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
};

export const Dashboard: React.FC<DashboardProps> = ({
  progress,
  onNavigate,
  onSelectCourse,
}) => {
  const tierCourses = courses.filter(c => c.tier === progress.currentTier);
  const tierLabs = labs.filter(l => l.tier === progress.currentTier);
  const completedTierCourses = tierCourses.filter(c =>
    progress.completedCourses.includes(c.id)
  );
  const completedTierLabs = tierLabs.filter(l =>
    progress.completedLabs.includes(l.id)
  );
  const courseProgress = tierCourses.length
    ? Math.round((completedTierCourses.length / tierCourses.length) * 100)
    : 0;
  const labProgress = tierLabs.length
    ? Math.round((completedTierLabs.length / tierLabs.length) * 100)
    : 0;

  const nextCourse = tierCourses.find(
    c => !progress.completedCourses.includes(c.id)
  );

  return (
    <div className="fade-in p-6 overflow-y-auto h-full scrollbar-thin">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-base-content">Welcome back!</h1>
          <p className="text-base-content/60">
            Current tier:{' '}
            <span className={`font-semibold ${tierColors[progress.currentTier]}`}>
              {tierLabels[progress.currentTier]}
            </span>
          </p>
        </div>
        <div className="flex items-center gap-2 bg-base-200 rounded-lg px-4 py-2">
          <Flame size={20} className="text-warning" />
          <span className="font-bold text-base-content">{progress.streak}</span>
          <span className="text-base-content/60 text-sm">day streak</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="card bg-base-200">
          <div className="card-body p-4">
            <div className="flex items-center gap-2 text-base-content/60 text-sm">
              <BookOpen size={16} /> Course Progress
            </div>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-2xl font-bold text-base-content">
                {completedTierCourses.length}/{tierCourses.length}
              </span>
              <progress
                className="progress progress-info w-full"
                value={courseProgress}
                max={100}
              />
            </div>
          </div>
        </div>

        <div className="card bg-base-200">
          <div className="card-body p-4">
            <div className="flex items-center gap-2 text-base-content/60 text-sm">
              <FlaskConical size={16} /> Labs Completed
            </div>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-2xl font-bold text-base-content">
                {completedTierLabs.length}/{tierLabs.length}
              </span>
              <progress
                className="progress progress-success w-full"
                value={labProgress}
                max={100}
              />
            </div>
          </div>
        </div>

        <div className="card bg-base-200">
          <div className="card-body p-4">
            <div className="flex items-center gap-2 text-base-content/60 text-sm">
              <Award size={16} /> Total Completed
            </div>
            <div className="mt-2">
              <span className="text-2xl font-bold text-base-content">
                {progress.completedCourses.length + progress.completedLabs.length}
              </span>
              <span className="text-base-content/60 text-sm ml-1">items</span>
            </div>
          </div>
        </div>
      </div>

      {/* Next Recommended */}
      {nextCourse && (
        <div className="card bg-success/10 mb-6">
          <div className="card-body p-4">
            <h3 className="text-sm font-semibold text-success uppercase tracking-wide">
              Next Recommended
            </h3>
            <div className="flex items-center justify-between mt-2">
              <div>
                <p className="font-semibold text-base-content">{nextCourse.title}</p>
                <p className="text-sm text-base-content/60">
                  {nextCourse.estimatedHours}h estimated
                </p>
              </div>
              <button
                className="btn btn-success btn-sm gap-1"
                onClick={() => onSelectCourse(nextCourse.id)}
              >
                Start <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quick Links */}
      <div className="grid grid-cols-2 gap-3">
        <button
          className="btn btn-outline btn-sm gap-2 justify-start"
          onClick={() => onNavigate('labs')}
        >
          <FlaskConical size={16} /> Labs Library
        </button>
        <button
          className="btn btn-outline btn-sm gap-2 justify-start"
          onClick={() => onNavigate('certifications')}
        >
          <Award size={16} /> Cert Roadmap
        </button>
        <button
          className="btn btn-outline btn-sm gap-2 justify-start"
          onClick={() => onNavigate('career-toolkit')}
        >
          <BookOpen size={16} /> Career Toolkit
        </button>
        <button
          className="btn btn-outline btn-sm gap-2 justify-start"
          onClick={() => onNavigate('profile')}
        >
          <Award size={16} /> My Progress
        </button>
      </div>
    </div>
  );
};
