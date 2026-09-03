// ── Topic & Module ─────────────────────────────────────────────────────────
export interface Topic {
  heading: string;
  detail: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  answer: number;          // index of correct option
  explanation: string;
}

export interface Module {
  title: string;
  duration: string;
  overview: string;
  topics: Topic[];
  keyTakeaways: string[];
  practiceExercises?: string[];
  resources?: { name: string; url?: string }[];
  keyConcepts?: { term: string; definition: string }[];   // NEW: quick-ref card
  youtubeIds?: string[];                                  // NEW: embedded videos
  quiz?: QuizQuestion[];                                  // NEW: per-module quiz
}

// ── Course ─────────────────────────────────────────────────────────────────
export interface Course {
  id: string;
  title: string;
  tier: Tier;
  duration?: string;      // optional — data files don't always include it
  topics?: string[];      // optional — data files don't always include it
  description: string;
  objectives: string[];
  estimatedHours: number;
  prerequisites: string[];
  modules: Module[];
  courseQuiz?: QuizQuestion[];
}

// ── Certification (matches actual data.ts shape) ───────────────────────────
export interface Certification {
  id: string;
  name: string;
  tier: Tier;
  cost: string;
  description: string;
  provider?: string;
  prerequisites?: string;
  studyResources?: string[];
  // legacy fields (kept optional)
  acronym?: string;
  duration?: string;
  topics?: string[];
  url?: string;
}

// ── CareerMilestone (matches actual data.ts shape) ─────────────────────────
export interface CareerMilestone {
  tier: Tier;
  milestones: string[];
}

// ── Tier alias (used by several components) ────────────────────────────────
export type Tier = 'beginner' | 'intermediate' | 'advanced';

// ── Lab ────────────────────────────────────────────────────────────────────
export interface Lab {
  id: string;
  title: string;
  tier: Tier;
  duration?: string;
  tool?: string;
  skillArea?: string;
  description: string;
  steps?: string[];
  objectives?: string[];
  instructions?: string[];
  terminalCommands?: { command: string; output: string }[];
  externalPlatforms?: { name: string; url: string; description?: string }[];
}

// ── Cert Path ──────────────────────────────────────────────────────────────
export interface CertPath {
  id: string;
  name: string;
  acronym: string;
  tier: 'beginner' | 'intermediate' | 'advanced';
  cost: string;
  duration: string;
  description: string;
  topics: string[];
  url: string;
}

// ── Progress ───────────────────────────────────────────────────────────────
export interface ProgressData {
  completedCourses: string[];
  completedLabs: string[];
  currentTier: 'beginner' | 'intermediate' | 'advanced';
  streak: number;
  lastActive: string;
  certStatuses: Record<string, 'planned' | 'studying' | 'passed'>;
  watchedVideos?: Record<string, boolean>;   // NEW: videoId → watched
}

// ── Pages ──────────────────────────────────────────────────────────────────
export type Page =
  | 'landing'
  | 'dashboard'
  | 'learning-paths'
  | 'course-detail'
  | 'labs'
  | 'certifications'
  | 'career-toolkit'
  | 'profile'
  | 'community'
  | 'my-story'
  | 'cyber-awareness'
  | 'secplus-prep';   // NEW: Security+ question bank page

// ── Security+ Question Bank ────────────────────────────────────────────────
export type SecPlusDomain =
  | 'Threats, Attacks & Vulnerabilities'
  | 'Architecture & Design'
  | 'Implementation'
  | 'Operations & Incident Response'
  | 'Governance, Risk & Compliance';

export interface SecPlusQuestion {
  id: number;
  domain: SecPlusDomain;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}
