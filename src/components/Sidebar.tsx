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
} from 'lucide-react';
import { Page } from '../types';

interface SidebarProps {
  currentPage: Page;
  isLoggedIn: boolean;
  isOpen: boolean;
  userName: string;
  onNavigate: (page: Page) => void;
  onLogout?: () => void;
}

const navItems: {
  page: Page;
  label: string;
  icon: React.ReactNode;
  requiresAuth: boolean;
}[] = [
  { page: 'landing',         label: 'Home',           icon: <Shield size={18} />,         requiresAuth: false },
  { page: 'dashboard',       label: 'Dashboard',      icon: <LayoutDashboard size={18} />, requiresAuth: true },
  { page: 'learning-paths',  label: 'Learning Paths', icon: <Map size={18} />,            requiresAuth: true },
  { page: 'labs',            label: 'Labs Library',   icon: <FlaskConical size={18} />,   requiresAuth: true },
  { page: 'certifications',  label: 'Certifications', icon: <Award size={18} />,          requiresAuth: true },
  { page: 'career-toolkit',  label: 'Career Toolkit', icon: <Briefcase size={18} />,      requiresAuth: true },
  { page: 'profile',         label: 'Profile',        icon: <User size={18} />,           requiresAuth: true },
  { page: 'community',       label: 'Community',      icon: <Users size={18} />,          requiresAuth: true },
  { page: 'cyber-awareness', label: 'Stay Safe',      icon: <ShieldAlert size={18} />,    requiresAuth: false },
  { page: 'my-story',        label: 'My Story',       icon: <BookOpen size={18} />,       requiresAuth: false },
];

export const Sidebar: React.FC<SidebarProps> = ({
  currentPage,
  isLoggedIn,
  isOpen,
  userName,
  onNavigate,
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
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      {/* User Info + Logout */}
      {isLoggedIn && userName && (
        <div className="p-3 border-t border-base-300">
          <p className="text-xs text-base-content/50 text-center mb-1">Logged in as:</p>
          <p className="text-sm font-semibold text-base-content text-center truncate mb-2">
            {userName}
          </p>
          {onLogout && (
            <button
              onClick={onLogout}
              className="btn btn-ghost btn-xs w-full text-xs"
            >
              Logout
            </button>
          )}
        </div>
      )}

      {/* Footer */}
      <div className="p-3 border-t border-base-300">
        <p className="text-xs text-base-content/30 text-center font-mono">
          cyber-forge v1.0
        </p>
      </div>
    </aside>
  );
};
