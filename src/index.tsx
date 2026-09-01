import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import { Page, ProgressData } from './types';
import { courses } from './data';
import { Sidebar } from './components/Sidebar';
import { LandingPage } from './components/LandingPage';
import { Dashboard } from './components/Dashboard';
import { LearningPaths } from './components/LearningPaths';
import { CourseDetail } from './components/CourseDetail';
import { LabsLibrary } from './components/LabsLibrary';
import { CertRoadmap } from './components/CertRoadmap';
import { CareerToolkit } from './components/CareerToolkit';
import { ProfilePage } from './components/ProfilePage';
import { CommunityResources } from './components/CommunityResources';
import './styles.css';

const STORAGE_KEY = 'cyberforge_progress';
const USER_KEY = 'cyberforge_user';

const DEFAULT_PROGRESS: ProgressData = {
  completedCourses: [],
  completedLabs: [],
  currentTier: 'beginner',
  streak: 0,
  lastActive: new Date().toISOString(),
  certStatuses: {},
};

function loadProgress(): ProgressData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as ProgressData;
      const today = new Date().toDateString();
      const last = parsed.lastActive
        ? new Date(parsed.lastActive).toDateString()
        : null;
      const yesterday = new Date(Date.now() - 86400000).toDateString();

      let streak = parsed.streak ?? 0;
      if (last === today) {
        // same day — keep streak as is
      } else if (last === yesterday) {
        // visited yesterday — increment
        streak += 1;
      } else if (last !== today) {
        // missed a day — reset
        streak = 1;
      }

      return {
        ...DEFAULT_PROGRESS,
        ...parsed,
        streak,
        lastActive: new Date().toISOString(),
      };
    }
  } catch {}
  return { ...DEFAULT_PROGRESS, streak: 1, lastActive: new Date().toISOString() };
}

function saveProgress(p: ProgressData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}

function App() {
  const [userName, setUserName] = useState<string>(() => {
    const stored = localStorage.getItem(USER_KEY);
    return stored && stored.trim().length > 0 ? stored.trim() : '';
  });

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    const stored = localStorage.getItem(USER_KEY);
    return !!stored && stored.trim().length > 0;
  });

  const [page, setPage] = useState<Page>(() => {
    const stored = localStorage.getItem(USER_KEY);
    return stored && stored.trim().length > 0 ? 'dashboard' : 'landing';
  });

  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [progress, setProgress] = useState<ProgressData>(loadProgress);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => { saveProgress(progress); }, [progress]);

  const navigate = useCallback((p: Page) => {
    setPage(p);
    setSidebarOpen(false);
  }, []);

  const handleGetStarted = useCallback((name: string) => {
    const finalName = name.trim() || 'Learner';
    // Save to localStorage IMMEDIATELY (don't wait for state update)
    localStorage.setItem(USER_KEY, finalName);
    // Update state
    setUserName(finalName);
    setIsLoggedIn(true);
    setPage('dashboard');
  }, []);

  const handleLogout = useCallback(() => {
    localStorage.removeItem(USER_KEY);
    setUserName('');
    setIsLoggedIn(false);
    setPage('landing');
  }, []);

  const completeCourse = useCallback((courseId: string) => {
    setProgress(prev => {
      if (prev.completedCourses.includes(courseId)) return prev;
      return {
        ...prev,
        completedCourses: [...prev.completedCourses, courseId],
        lastActive: new Date().toISOString(),
      };
    });
  }, []);

  const completeLab = useCallback((labId: string) => {
    setProgress(prev => {
      if (prev.completedLabs.includes(labId)) return prev;
      return {
        ...prev,
        completedLabs: [...prev.completedLabs, labId],
        lastActive: new Date().toISOString(),
      };
    });
  }, []);

  const updateCertStatus = useCallback((certId: string, status: 'planned' | 'studying' | 'passed') => {
    setProgress(prev => ({
      ...prev,
      certStatuses: { ...prev.certStatuses, [certId]: status },
    }));
  }, []);

  const openCourse = useCallback((id: string) => {
    setSelectedCourseId(id);
    setPage('course-detail');
    setSidebarOpen(false);
  }, []);

  if (page === 'landing') {
    return <LandingPage onGetStarted={handleGetStarted} />;
  }

  return (
    <div className="flex h-screen bg-base-100 text-base-content overflow-hidden">
      {/* Mobile hamburger */}
      <button
        className="md:hidden fixed top-3 left-3 z-50 btn btn-ghost btn-sm"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle menu"
      >
        <div className="flex flex-col gap-1">
          <span className="block w-5 h-0.5 bg-success" />
          <span className="block w-5 h-0.5 bg-success" />
          <span className="block w-5 h-0.5 bg-success" />
        </div>
      </button>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <Sidebar
        currentPage={page}
        isLoggedIn={isLoggedIn}
        userName={userName}
        isOpen={sidebarOpen}
        onNavigate={navigate}
        onLogout={handleLogout}
      />

      <main className="flex-1 overflow-y-auto md:ml-0">
        {page === 'dashboard' && (
          <Dashboard
            progress={progress}
            onNavigate={navigate}
            onSelectCourse={openCourse}
          />
        )}
        {page === 'learning-paths' && (
          <LearningPaths
            progress={progress}
            onSelectCourse={openCourse}
          />
        )}
        {page === 'course-detail' && selectedCourseId && (
          <CourseDetail
            courseId={selectedCourseId}
            progress={progress}
            onComplete={completeCourse}
            onBack={() => navigate('learning-paths')}
          />
        )}
        {page === 'labs' && (
          <LabsLibrary
            progress={progress}
            onCompleteLab={completeLab}
          />
        )}
        {page === 'certifications' && (
          <CertRoadmap
            progress={progress}
            onUpdateCertStatus={updateCertStatus}
          />
        )}
        {page === 'career-toolkit' && <CareerToolkit />}
        {page === 'profile' && (
          <ProfilePage
            progress={progress}
            userName={userName}
          />
        )}
        {page === 'community' && <CommunityResources />}
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
