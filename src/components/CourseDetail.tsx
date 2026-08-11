import React, { useState } from 'react';
import {
  ArrowLeft,
  Clock,
  CheckCircle,
  Circle,
  BookOpen,
  Target,
  ChevronDown,
  ChevronRight,
  Lightbulb,
  Dumbbell,
  ExternalLink,
  FileText,
} from 'lucide-react';
import { ProgressData, Module } from '../types';
import { courses } from '../data';

interface CourseDetailProps {
  courseId: string;
  progress: ProgressData;
  onBack: () => void;
  onComplete: (courseId: string) => void;
}

const ModuleCard: React.FC<{ mod: Module; index: number }> = ({ mod, index }) => {
  const [expanded, setExpanded] = useState(false);
  const [expandedTopics, setExpandedTopics] = useState<Set<number>>(new Set());

  const toggleTopic = (i: number) => {
    setExpandedTopics(prev => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <div className="card bg-base-300 overflow-hidden">
      <button
        className="w-full flex items-center gap-3 p-4 text-left hover:bg-base-100/30 transition-colors"
        onClick={() => setExpanded(!expanded)}
      >
        <span className="font-mono text-primary/60 text-sm w-8 flex-shrink-0">
          {String(index + 1).padStart(2, '0')}
        </span>
        {expanded ? (
          <ChevronDown size={16} className="text-primary flex-shrink-0" />
        ) : (
          <ChevronRight size={16} className="text-base-content/40 flex-shrink-0" />
        )}
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-base-content">{mod.title}</p>
          <p className="text-xs text-base-content/50 mt-0.5">{mod.duration}</p>
        </div>
        <span className="badge badge-ghost badge-sm flex-shrink-0">
          {mod.topics.length} topics
        </span>
      </button>

      {expanded && (
        <div className="px-4 pb-4 space-y-4 border-t border-base-100/20">
          {/* Overview */}
          <div className="pt-3">
            <p className="text-sm text-base-content/70 leading-relaxed">{mod.overview}</p>
          </div>

          {/* Topics */}
          <div>
            <h4 className="flex items-center gap-2 text-sm font-semibold text-base-content mb-2">
              <BookOpen size={14} className="text-info" /> Topics
            </h4>
            <div className="space-y-1">
              {mod.topics.map((topic, i) => (
                <div key={i} className="rounded-lg bg-base-100/40">
                  <button
                    className="w-full flex items-start gap-2 p-3 text-left hover:bg-base-100/60 transition-colors rounded-lg"
                    onClick={() => toggleTopic(i)}
                  >
                    {expandedTopics.has(i) ? (
                      <ChevronDown size={14} className="text-info mt-0.5 flex-shrink-0" />
                    ) : (
                      <ChevronRight size={14} className="text-base-content/30 mt-0.5 flex-shrink-0" />
                    )}
                    <span className="text-sm font-medium text-base-content/90">
                      {topic.heading}
                    </span>
                  </button>
                  {expandedTopics.has(i) && (
                    <div className="px-3 pb-3 pl-8">
                      <p className="text-sm text-base-content/65 leading-relaxed">
                        {topic.detail}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Key Takeaways */}
          <div>
            <h4 className="flex items-center gap-2 text-sm font-semibold text-base-content mb-2">
              <Lightbulb size={14} className="text-warning" /> Key Takeaways
            </h4>
            <ul className="space-y-1.5">
              {mod.keyTakeaways.map((takeaway, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-base-content/70">
                  <CheckCircle size={12} className="text-success mt-1 flex-shrink-0" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Exercises */}
          {mod.practiceExercises && mod.practiceExercises.length > 0 && (
            <div>
              <h4 className="flex items-center gap-2 text-sm font-semibold text-base-content mb-2">
                <Dumbbell size={14} className="text-error" /> Practice Exercises
              </h4>
              <ol className="space-y-1.5 list-decimal list-inside">
                {mod.practiceExercises.map((exercise, i) => (
                  <li key={i} className="text-sm text-base-content/70 leading-relaxed pl-1">
                    {exercise}
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Resources */}
          {mod.resources && mod.resources.length > 0 && (
            <div>
              <h4 className="flex items-center gap-2 text-sm font-semibold text-base-content mb-2">
                <FileText size={14} className="text-accent" /> Resources
              </h4>
              <div className="flex flex-wrap gap-2">
                {mod.resources.map((res, i) =>
                  res.url ? (
                    <a
                      key={i}
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="badge badge-outline badge-sm gap-1 hover:badge-primary transition-colors cursor-pointer"
                    >
                      <ExternalLink size={10} />
                      {res.name}
                    </a>
                  ) : (
                    <span key={i} className="badge badge-outline badge-sm">
                      {res.name}
                    </span>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export const CourseDetail: React.FC<CourseDetailProps> = ({
  courseId,
  progress,
  onBack,
  onComplete,
}) => {
  const course = courses.find(c => c.id === courseId);
  if (!course) return <div className="p-6 text-base-content">Course not found.</div>;

  const isCompleted = progress.completedCourses.includes(course.id);
  const tierColor =
    course.tier === 'beginner'
      ? 'badge-info'
      : course.tier === 'intermediate'
      ? 'badge-warning'
      : 'badge-error';

  return (
    <div className="fade-in p-6 overflow-y-auto h-full scrollbar-thin">
      <button className="btn btn-ghost btn-sm gap-1 mb-4" onClick={onBack}>
        <ArrowLeft size={16} /> Back to Learning Paths
      </button>

      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className={`badge ${tierColor} badge-sm`}>{course.tier}</span>
            <span className="flex items-center gap-1 text-base-content/60 text-sm">
              <Clock size={14} /> {course.estimatedHours} hours
            </span>
            <span className="text-base-content/40 text-sm">
              · {course.modules.length} modules
            </span>
          </div>
          <h1 className="text-2xl font-bold text-base-content">{course.title}</h1>
          <p className="text-base-content/60 mt-2 max-w-3xl leading-relaxed">
            {course.description}
          </p>
        </div>
        {isCompleted ? (
          <span className="badge badge-success gap-1">
            <CheckCircle size={14} /> Completed
          </span>
        ) : (
          <button
            className="btn btn-success btn-sm"
            onClick={() => onComplete(course.id)}
          >
            Mark Complete
          </button>
        )}
      </div>

      {/* Objectives */}
      <div className="card bg-base-200 mb-4">
        <div className="card-body p-4">
          <h2 className="flex items-center gap-2 font-semibold text-base-content mb-3">
            <Target size={16} className="text-success" /> Learning Objectives
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {course.objectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-base-content/80">
                <CheckCircle size={14} className="text-success mt-0.5 flex-shrink-0" />
                {obj}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Prerequisites */}
      {course.prerequisites.length > 0 && (
        <div className="card bg-base-200 mb-4">
          <div className="card-body p-4">
            <h3 className="text-sm font-semibold text-base-content mb-2">Prerequisites</h3>
            <div className="flex gap-2 flex-wrap">
              {course.prerequisites.map(preId => {
                const pre = courses.find(c => c.id === preId);
                const done = progress.completedCourses.includes(preId);
                return (
                  <span key={preId} className={`badge gap-1 ${done ? 'badge-success' : 'badge-ghost'}`}>
                    {done ? <CheckCircle size={12} /> : <Circle size={12} />}
                    {pre?.title || preId}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Modules */}
      <div className="mb-6">
        <h2 className="flex items-center gap-2 font-semibold text-base-content mb-3 text-lg">
          <BookOpen size={18} className="text-info" /> Course Modules
        </h2>
        <div className="space-y-2">
          {course.modules.map((mod, i) => (
            <ModuleCard key={i} mod={mod} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
