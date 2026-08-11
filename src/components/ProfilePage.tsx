import React from 'react';
import { Award, BookOpen, FlaskConical, Flame, Trophy, Calendar } from 'lucide-react';
import { ProgressData, Tier } from '../types';
import { courses, labs, certifications } from '../data';

interface ProfilePageProps {
  progress: ProgressData;
  userName: string;
}

const tierLabels: Record<Tier, string> = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
};

const tierColors: Record<Tier, string> = {
  beginner: 'badge-info',
  intermediate: 'badge-warning',
  advanced: 'badge-error',
};

export const ProfilePage: React.FC<ProfilePageProps> = ({ progress, userName }) => {
  const passedCerts = Object.entries(progress.certStatuses).filter(([_, s]) => s === 'passed');
  const studyingCerts = Object.entries(progress.certStatuses).filter(([_, s]) => s === 'studying');

  // Generate streak calendar (last 30 days)
  const today = new Date();
  const calendarDays = Array.from({ length: 35 }, (_, i) => {
    const d = new Date(today);
    d.setDate(d.getDate() - (34 - i));
    const active = i >= 35 - progress.streak;
    return { date: d, active };
  });

  return (
    <div className="fade-in p-6 overflow-y-auto h-full scrollbar-thin">
      {/* Profile Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center">
          <span className="text-2xl font-bold text-success">{userName.charAt(0).toUpperCase()}</span>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-base-content">{userName}</h1>
          <div className="flex items-center gap-2 mt-1">
            <span className={`badge ${tierColors[progress.currentTier]}`}>{tierLabels[progress.currentTier]} Tier</span>
            <span className="flex items-center gap-1 text-sm text-base-content/60">
              <Flame size={14} className="text-warning" /> {progress.streak} day streak
            </span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {[
          { icon: <BookOpen size={18} />, label: 'Courses', value: progress.completedCourses.length, total: courses.length, color: 'text-info' },
          { icon: <FlaskConical size={18} />, label: 'Labs', value: progress.completedLabs.length, total: labs.length, color: 'text-success' },
          { icon: <Award size={18} />, label: 'Certs Passed', value: passedCerts.length, total: certifications.length, color: 'text-warning' },
          { icon: <Trophy size={18} />, label: 'Badges', value: progress.completedCourses.length + progress.completedLabs.length + passedCerts.length, color: 'text-secondary' },
        ].map(s => (
          <div key={s.label} className="card bg-base-200">
            <div className="card-body p-3 items-center text-center">
              <span className={s.color}>{s.icon}</span>
              <span className="text-xl font-bold text-base-content">{s.value}{s.total ? `/${s.total}` : ''}</span>
              <span className="text-xs text-base-content/60">{s.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Streak Calendar */}
      <div className="card bg-base-200 mb-6">
        <div className="card-body p-4">
          <h2 className="flex items-center gap-2 font-semibold text-base-content mb-3">
            <Calendar size={16} className="text-success" /> Learning Streak
          </h2>
          <div className="flex gap-1 flex-wrap">
            {calendarDays.map((day, i) => (
              <div
                key={i}
                className="streak-cell"
                style={{ background: day.active ? '#22c55e' : 'rgba(255,255,255,0.05)' }}
                title={day.date.toLocaleDateString()}
              />
            ))}
          </div>
          <p className="text-xs text-base-content/40 mt-2">Last 35 days</p>
        </div>
      </div>

      {/* Completed Courses */}
      <div className="card bg-base-200 mb-4">
        <div className="card-body p-4">
          <h2 className="font-semibold text-base-content mb-2">Completed Courses</h2>
          {progress.completedCourses.length === 0 ? (
            <p className="text-sm text-base-content/40">No courses completed yet. Start learning!</p>
          ) : (
            <div className="space-y-1">
              {progress.completedCourses.map(id => {
                const course = courses.find(c => c.id === id);
                return course ? (
                  <div key={id} className="flex items-center gap-2 text-sm">
                    <span className={`badge badge-xs ${tierColors[course.tier]}`} />
                    <span className="text-base-content/80">{course.title}</span>
                  </div>
                ) : null;
              })}
            </div>
          )}
        </div>
      </div>

      {/* Completed Labs */}
      <div className="card bg-base-200 mb-4">
        <div className="card-body p-4">
          <h2 className="font-semibold text-base-content mb-2">Completed Labs</h2>
          {progress.completedLabs.length === 0 ? (
            <p className="text-sm text-base-content/40">No labs completed yet. Head to the Labs Library!</p>
          ) : (
            <div className="space-y-1">
              {progress.completedLabs.map(id => {
                const lab = labs.find(l => l.id === id);
                return lab ? (
                  <div key={id} className="flex items-center gap-2 text-sm">
                    <span className={`badge badge-xs ${tierColors[lab.tier]}`} />
                    <span className="text-base-content/80">{lab.title}</span>
                  </div>
                ) : null;
              })}
            </div>
          )}
        </div>
      </div>

      {/* Certification Tracker */}
      <div className="card bg-base-200">
        <div className="card-body p-4">
          <h2 className="font-semibold text-base-content mb-2">Certification Tracker</h2>
          {studyingCerts.length === 0 && passedCerts.length === 0 ? (
            <p className="text-sm text-base-content/40">No certifications tracked yet.</p>
          ) : (
            <div className="space-y-1">
              {[...passedCerts, ...studyingCerts].map(([id, status]) => {
                const cert = certifications.find(c => c.id === id);
                return cert ? (
                  <div key={id} className="flex items-center gap-2 text-sm">
                    <span className={`badge badge-xs ${status === 'passed' ? 'badge-success' : 'badge-warning'}`}>
                      {status === 'passed' ? '✓' : '📖'}
                    </span>
                    <span className="text-base-content/80">{cert.name}</span>
                  </div>
                ) : null;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
