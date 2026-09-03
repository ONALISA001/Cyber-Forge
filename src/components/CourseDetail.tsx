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
  Youtube,
  Zap,
  HelpCircle,
  Eye,
  EyeOff,
} from 'lucide-react';
import { ProgressData, Module } from '../types';
import { courses } from '../data';
import { QuizPanel } from './QuizPanel';

interface CourseDetailProps {
  courseId: string;
  progress: ProgressData;
  onBack: () => void;
  onComplete: (courseId: string) => void;
  onVideoWatched?: (videoId: string) => void;
}

// ── YouTube embed with watch tracking ─────────────────────────────────────
const YouTubeEmbed: React.FC<{
  videoId: string;
  watched: boolean;
  onWatch: () => void;
}> = ({ videoId, watched, onWatch }) => {
  const [showPlayer, setShowPlayer] = useState(false);

  const handlePlay = () => {
    setShowPlayer(true);
    if (!watched) onWatch();
  };

  return (
    <div className="rounded-xl overflow-hidden bg-base-300 relative group">
      {!showPlayer ? (
        <button
          className="w-full aspect-video flex items-center justify-center relative"
          onClick={handlePlay}
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
            alt="Video thumbnail"
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
          <div className="relative z-10 flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Youtube size={28} className="text-white" />
            </div>
            {watched && (
              <span className="badge badge-success badge-sm gap-1">
                <CheckCircle size={10} /> Watched
              </span>
            )}
          </div>
        </button>
      ) : (
        <div className="aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            className="w-full h-full"
            allowFullScreen
            allow="autoplay; encrypted-media"
            title="Course video"
          />
        </div>
      )}
    </div>
  );
};

// ── Key Concepts quick-reference card ─────────────────────────────────────
const KeyConceptsCard: React.FC<{ concepts: Module['keyConcepts'] }> = ({ concepts }) => {
  if (!concepts || concepts.length === 0) return null;
  return (
    <div className="rounded-xl bg-primary/8 border border-primary/20 p-4">
      <h4 className="flex items-center gap-2 text-sm font-semibold text-base-content mb-3">
        <Zap size={14} className="text-primary" /> Key Concepts
        <span className="badge badge-primary badge-xs ml-1">Quick Reference</span>
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {concepts.map((c, i) => (
          <div key={i} className="rounded-lg bg-base-100/40 p-2.5">
            <p className="text-xs font-bold text-primary mb-0.5">{c.term}</p>
            <p className="text-xs text-base-content/65 leading-relaxed">{c.definition}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// ── ModuleCard with all 4 new features ────────────────────────────────────
const ModuleCard: React.FC<{
  mod: Module;
  index: number;
  watchedVideos: Record<string, boolean>;
  onVideoWatch: (videoId: string) => void;
}> = ({ mod, index, watchedVideos, onVideoWatch }) => {
  const [expanded, setExpanded] = useState(false);
  const [expandedTopics, setExpandedTopics] = useState<Set<number>>(new Set());
  const [showQuiz, setShowQuiz] = useState(false);

  const toggleTopic = (i: number) => {
    setExpandedTopics(prev => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  const hasVideos = mod.youtubeIds && mod.youtubeIds.length > 0;
  const hasConcepts = mod.keyConcepts && mod.keyConcepts.length > 0;
  const hasQuiz = mod.quiz && mod.quiz.length > 0;

  return (
    <div className="card bg-base-300 overflow-hidden">
      {/* Module header */}
      <button
        className="w-full flex items-center gap-3 p-4 text-left hover:bg-base-100/30 transition-colors"
        onClick={() => setExpanded(!expanded)}
      >
        <span className="font-mono text-primary/60 text-sm w-8 flex-shrink-0">
          {String(index + 1).padStart(2, '0')}
        </span>
        {expanded
          ? <ChevronDown size={16} className="text-primary flex-shrink-0" />
          : <ChevronRight size={16} className="text-base-content/40 flex-shrink-0" />}
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-base-content">{mod.title}</p>
          <p className="text-xs text-base-content/50 mt-0.5">{mod.duration}</p>
        </div>
        <div className="flex items-center gap-1.5 flex-shrink-0">
          {hasVideos && <Youtube size={13} className="text-red-500" />}
          {hasConcepts && <Zap size={13} className="text-primary" />}
          {hasQuiz && <HelpCircle size={13} className="text-warning" />}
          <span className="badge badge-ghost badge-sm">{mod.topics.length} topics</span>
        </div>
      </button>

      {expanded && (
        <div className="px-4 pb-4 space-y-5 border-t border-base-100/20">
          {/* Overview */}
          <div className="pt-3">
            <p className="text-sm text-base-content/70 leading-relaxed">{mod.overview}</p>
          </div>

          {/* ── YouTube Videos ──────────────────────────────────────── */}
          {hasVideos && (
            <div>
              <h4 className="flex items-center gap-2 text-sm font-semibold text-base-content mb-3">
                <Youtube size={14} className="text-red-500" /> Video Lessons
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {mod.youtubeIds!.map((vid, i) => (
                  <YouTubeEmbed
                    key={vid}
                    videoId={vid}
                    watched={!!watchedVideos[vid]}
                    onWatch={() => onVideoWatch(vid)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* ── Key Concepts ─────────────────────────────────────────── */}
          {hasConcepts && <KeyConceptsCard concepts={mod.keyConcepts} />}

          {/* ── Topics ───────────────────────────────────────────────── */}
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
                    {expandedTopics.has(i)
                      ? <ChevronDown size={14} className="text-info mt-0.5 flex-shrink-0" />
                      : <ChevronRight size={14} className="text-base-content/30 mt-0.5 flex-shrink-0" />}
                    <span className="text-sm font-medium text-base-content/90">{topic.heading}</span>
                  </button>
                  {expandedTopics.has(i) && (
                    <div className="px-3 pb-3 pl-8">
                      <p className="text-sm text-base-content/65 leading-relaxed">{topic.detail}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ── Key Takeaways ─────────────────────────────────────────── */}
          <div>
            <h4 className="flex items-center gap-2 text-sm font-semibold text-base-content mb-2">
              <Lightbulb size={14} className="text-warning" /> Key Takeaways
            </h4>
            <ul className="space-y-1.5">
              {mod.keyTakeaways.map((t, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-base-content/70">
                  <CheckCircle size={12} className="text-success mt-1 flex-shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Practice Exercises ────────────────────────────────────── */}
          {mod.practiceExercises && mod.practiceExercises.length > 0 && (
            <div>
              <h4 className="flex items-center gap-2 text-sm font-semibold text-base-content mb-2">
                <Dumbbell size={14} className="text-error" /> Practice Exercises
              </h4>
              <ol className="space-y-1.5 list-decimal list-inside">
                {mod.practiceExercises.map((ex, i) => (
                  <li key={i} className="text-sm text-base-content/70 leading-relaxed pl-1">{ex}</li>
                ))}
              </ol>
            </div>
          )}

          {/* ── Resources ─────────────────────────────────────────────── */}
          {mod.resources && mod.resources.length > 0 && (
            <div>
              <h4 className="flex items-center gap-2 text-sm font-semibold text-base-content mb-2">
                <FileText size={14} className="text-accent" /> Resources
              </h4>
              <div className="flex flex-wrap gap-2">
                {mod.resources.map((res, i) =>
                  res.url ? (
                    <a key={i} href={res.url} target="_blank" rel="noopener noreferrer"
                      className="badge badge-outline badge-sm gap-1 hover:badge-primary transition-colors cursor-pointer">
                      <ExternalLink size={10} />{res.name}
                    </a>
                  ) : (
                    <span key={i} className="badge badge-outline badge-sm">{res.name}</span>
                  )
                )}
              </div>
            </div>
          )}

          {/* ── Module Quiz ───────────────────────────────────────────── */}
          {hasQuiz && (
            <div>
              <button
                className="btn btn-sm gap-2 w-full"
                onClick={() => setShowQuiz(!showQuiz)}
              >
                <HelpCircle size={14} className="text-warning" />
                {showQuiz ? 'Hide' : 'Take'} Module Quiz
                <span className="badge badge-warning badge-xs">{mod.quiz!.length} Qs</span>
                {showQuiz ? <EyeOff size={13} /> : <Eye size={13} />}
              </button>
              {showQuiz && (
                <div className="mt-3">
                  <QuizPanel
                    questions={mod.quiz!}
                    title={`${mod.title} Quiz`}
                    onClose={() => setShowQuiz(false)}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// ── Main CourseDetail ─────────────────────────────────────────────────────
export const CourseDetail: React.FC<CourseDetailProps> = ({
  courseId,
  progress,
  onBack,
  onComplete,
  onVideoWatched,
}) => {
  const [showCourseQuiz, setShowCourseQuiz] = useState(false);
  const course = courses.find(c => c.id === courseId);
  if (!course) return <div className="p-6 text-base-content">Course not found.</div>;

  const isCompleted = progress.completedCourses.includes(course.id);
  const watchedVideos = progress.watchedVideos || {};

  const tierColor =
    course.tier === 'beginner' ? 'badge-info'
    : course.tier === 'intermediate' ? 'badge-warning'
    : 'badge-error';

  const handleVideoWatch = (videoId: string) => {
    onVideoWatched?.(videoId);
  };

  // Count total & watched videos across all modules
  const allVideoIds = course.modules.flatMap(m => m.youtubeIds || []);
  const watchedCount = allVideoIds.filter(id => watchedVideos[id]).length;

  return (
    <div className="fade-in p-6 overflow-y-auto h-full scrollbar-thin">
      <button className="btn btn-ghost btn-sm gap-1 mb-4" onClick={onBack}>
        <ArrowLeft size={16} /> Back to Learning Paths
      </button>

      {/* Course header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className={`badge ${tierColor} badge-sm`}>{course.tier}</span>
            <span className="flex items-center gap-1 text-base-content/60 text-sm">
              <Clock size={14} /> {course.estimatedHours} hours
            </span>
            <span className="text-base-content/40 text-sm">· {course.modules.length} modules</span>
            {allVideoIds.length > 0 && (
              <span className="flex items-center gap-1 text-base-content/50 text-sm">
                <Youtube size={13} className="text-red-500" />
                {watchedCount}/{allVideoIds.length} watched
              </span>
            )}
          </div>
          <h1 className="text-2xl font-bold text-base-content">{course.title}</h1>
          <p className="text-base-content/60 mt-2 max-w-3xl leading-relaxed">{course.description}</p>
        </div>
        {isCompleted ? (
          <span className="badge badge-success gap-1">
            <CheckCircle size={14} /> Completed
          </span>
        ) : (
          <button className="btn btn-success btn-sm" onClick={() => onComplete(course.id)}>
            Mark Complete
          </button>
        )}
      </div>

      {/* Learning Objectives */}
      <div className="card bg-base-200 mb-4">
        <div className="card-body p-4">
          <h2 className="flex items-center gap-2 font-semibold text-base-content mb-3">
            <Target size={16} className="text-success" /> Learning Objectives
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {course.objectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-base-content/80">
                <CheckCircle size={14} className="text-success mt-0.5 flex-shrink-0" />{obj}
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
            <ModuleCard
              key={i}
              mod={mod}
              index={i}
              watchedVideos={watchedVideos}
              onVideoWatch={handleVideoWatch}
            />
          ))}
        </div>
      </div>

      {/* Full course quiz */}
      {course.courseQuiz && course.courseQuiz.length > 0 && (
        <div className="mb-6">
          <button
            className="btn btn-outline btn-warning w-full gap-2"
            onClick={() => setShowCourseQuiz(!showCourseQuiz)}
          >
            <HelpCircle size={16} />
            {showCourseQuiz ? 'Hide' : 'Take'} Full Course Quiz
            <span className="badge badge-warning">{course.courseQuiz.length} Questions</span>
          </button>
          {showCourseQuiz && (
            <div className="mt-3">
              <QuizPanel
                questions={course.courseQuiz}
                title={`${course.title} — Full Course Quiz`}
                onClose={() => setShowCourseQuiz(false)}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
