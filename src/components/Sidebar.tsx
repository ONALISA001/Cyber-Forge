import React from 'react';
import {
  Shield,
  LayoutDashboard,
  BookOpen,
  FlaskConical,
  Award,
  Briefcase,
  User,
  Users,
  Map,
  ShieldAlert,
  Target,
  Terminal,
  LogIn,
  LogOut,
} from 'lucide-react';
import { Page } from '../types';

interface SidebarProps {
  currentPage: Page;
  isLoggedIn: boolean;
  isOpen: boolean;
  userName: string;
  userEmail?: string;
  onNavigate: (page: Page) => void;
  onLogin: () => void;
  onLogout: () => void;
}

const navItems: {
  page: Page;
  label: string;
  icon: React.ReactNode;
  requiresAuth: boolean;
  badge?: string;
}[] = [
  { page: 'landing',        label: 'Home',             icon: <Shield size={18} />,          requiresAuth: false },
  { page: 'dashboard',      label: 'Dashboard',        icon: <LayoutDashboard size={18} />, requiresAuth: true },
  { page: 'learning-paths', label: 'Learning Paths',   icon: <Map size={18} />,             requiresAuth: true },
  { page: 'labs',           label: 'Labs Library',     icon: <FlaskConical size={18} />,    requiresAuth: true },
  { page: 'certifications', label: 'Certifications',   icon: <Award size={18} />,           requiresAuth: true },
  { page: 'secplus-prep',   label: 'Security+ Prep',   icon: <Target size={18} />,          requiresAuth: true, badge: '150+' },
  { page: 'career-toolkit', label: 'Career Toolkit',   icon: <Briefcase size={18} />,       requiresAuth: true },
  { page: 'profile',        label: 'Profile',          icon: <User size={18} />,            requiresAuth: true },
  { page: 'community',      label: 'Community',        icon: <Users size={18} />,           requiresAuth: true },
  { page: 'cyber-awareness',label: 'Stay Safe',        icon: <ShieldAlert size={18} />,     requiresAuth: false },
  { page: 'my-story',       label: 'My Story',         icon: <BookOpen size={18} />,        requiresAuth: false },
  { page: 'terminal', label: 'Practice Lab', icon: <Terminal size={18} />, requiresAuth: true },
];

export const Sidebar: React.FC<SidebarProps> = ({
  currentPage,
  isLoggedIn,
  isOpen,
  userName,
  userEmail,
  onNavigate,
  onLogin,
  onLogout,
}) => {
  const visibleItems = navItems.filter(
    item => !item.requiresAuth || isLoggedIn
  );

  return (
    <aside
      className={`
        fixed md:static top-0 left-0 h-full z-40
        w-56 bg-base-200 flex flex-col border-r border-base-300
        transition-transform duration-200
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}
    >
      {/* Logo */}
      <div className="p-4 flex items-center gap-2 border-b border-base-300">
        <Shield size={24} className="text-success" />
        <span className="font-bold text-lg text-base-content cyber-glow font-mono">
          CYBER FORGE
        </span>
      </div>

      {/* Nav */}
      <ul className="menu menu-sm flex-1 px-2 py-3 gap-1">
        {visibleItems.map(item => (
          <li key={item.page}>
            <button
              className={`flex items-center gap-2 w-full ${
                currentPage === item.page ? 'active' : ''
              }`}
              onClick={() => onNavigate(item.page)}
            >
              {item.icon}
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge && (
                <span className="badge badge-success badge-xs">{item.badge}</span>
              )}
            </button>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="p-3 border-t border-base-300">
        {isLoggedIn ? (
          <div className="mb-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center shrink-0">
                <span className="text-sm font-bold text-success">{userName.charAt(0).toUpperCase()}</span>
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-base-content truncate">{userName}</p>
                {userEmail && <p className="text-xs text-base-content/50 truncate">{userEmail}</p>}
              </div>
            </div>
            <button className="btn btn-ghost btn-sm w-full justify-start gap-2" onClick={onLogout}>
              <LogOut size={16} /> Log out
            </button>
          </div>
        ) : (
          <button className="btn btn-success btn-sm w-full gap-2 mb-3" onClick={onLogin}>
            <LogIn size={16} /> Log in
          </button>
        )}
        <p className="text-xs text-base-content/30 text-center font-mono">
          cyber-forge v2.0
        </p>
      </div>
    </aside>
  );
};
