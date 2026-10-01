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
import { MyStory } from './components/MyStory';
import { CommunityResources } from './components/CommunityResources';
import { CyberAwareness } from './components/CyberAwareness';
import { SecPlusPrep } from './components/SecPlusPrep';
import { TerminalEmulator } from './components/Terminal';
import { AuthModal, AuthMode } from './components/AuthModal';
import { getUser, logout, onAuthChange, handleAuthCallback, AUTH_EVENTS, type User } from '@netlify/identity';
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
  watchedVideos: {},
};

function loadProgress(): ProgressData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return { ...DEFAULT_PROGRESS, ...parsed };
    }
  } catch {}
  return { ...DEFAULT_PROGRESS };
}

function saveProgress(p: ProgressData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}

function App() {
  const [page, setPage] = useState<Page>('landing');
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [progress, setProgress] = useState<ProgressData>(loadProgress);
  const [user, setUser] = useState<User | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const [authMode, setAuthMode] = useState<AuthMode | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isLoggedIn = user !== null;
  const userName = user?.name || user?.email?.split('@')[0] || localStorage.getItem(USER_KEY) || 'Learner';

  useEffect(() => { saveProgress(progress); }, [progress]);

  const navigate = useCallback((p: Page) => {
    setPage(p);
    setSidebarOpen(false);
  }, []);

  // Restore an existing session and handle email confirmation / password recovery links
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const result = await handleAuthCallback();
        if (result?.type === 'recovery') setAuthMode('reset');
      } catch {}
      const current = await getUser();
      if (cancelled) return;
      setUser(current);
      if (current) setPage(p => (p === 'landing' ? 'dashboard' : p));
      setAuthReady(true);
    })();

    const unsubscribe = onAuthChange((event, u) => {
      if (event === AUTH_EVENTS.LOGOUT) {
        setUser(null);
        setPage('landing');
      } else {
        setUser(u);
      }
    });
    return () => { cancelled = true; unsubscribe(); };
  }, []);

  const handleGetStarted = useCallback(() => {
    if (isLoggedIn) navigate('dashboard');
    else setAuthMode('signup');
  }, [isLoggedIn, navigate]);

  const handleAuthSuccess = useCallback(async () => {
    setUser(await getUser());
    setAuthMode(null);
    navigate('dashboard');
  }, [navigate]);

  const handleLogout = useCallback(async () => {
    try { await logout(); } catch {}
    setUser(null);
    navigate('landing');
  }, [navigate]);

  const authModal = authMode && (
    <AuthModal
      key={authMode}
      initialMode={authMode}
      onClose={() => setAuthMode(null)}
      onSuccess={handleAuthSuccess}
    />
  );

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

  // NEW: mark a YouTube video as watched
  const markVideoWatched = useCallback((videoId: string) => {
    setProgress(prev => ({
      ...prev,
      watchedVideos: { ...(prev.watchedVideos || {}), [videoId]: true },
    }));
  }, []);

  const openCourse = useCallback((id: string) => {
    setSelectedCourseId(id);
    setPage('course-detail');
    setSidebarOpen(false);
  }, []);

  if (!authReady) {
    return (
      <div data-theme="dark" className="min-h-screen bg-base-100 flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-success" />
      </div>
    );
  }

  if (page === 'landing' || (!isLoggedIn && page !== 'cyber-awareness' && page !== 'my-story')) {
    return (
      <>
        <LandingPage
          isLoggedIn={isLoggedIn}
          userName={userName}
          onGetStarted={handleGetStarted}
          onLogin={() => setAuthMode('login')}
          onLogout={handleLogout}
        />
        {authModal}
      </>
    );
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
        isOpen={sidebarOpen}
        userName={userName}
        userEmail={user?.email}
        onNavigate={navigate}
        onLogin={() => setAuthMode('login')}
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
            onVideoWatched={markVideoWatched}
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
        {page === 'secplus-prep' && <SecPlusPrep />}
        {page === 'career-toolkit' && <CareerToolkit />}
        {page === 'profile' && (
          <ProfilePage
            progress={progress}
            userName={userName}
          />
        )}
        {page === 'community' && <CommunityResources />}
        {page === 'my-story' && <MyStory />}
        {page === 'cyber-awareness' && <CyberAwareness />}
        {page === 'terminal' && <TerminalEmulator />}
      </main>
      {authModal}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
