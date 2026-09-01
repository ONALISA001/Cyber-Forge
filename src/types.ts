export type Tier = 'beginner' | 'intermediate' | 'advanced';

export interface Video {
  id: string;
  youtubeId: string;
  title: string;
  creator: string;
  duration: string;
  keyPoints?: string[];
}

export interface Module {
  title: string;
  duration: string;
  overview: string;
  topics: { heading: string; detail: string }[];
  keyTakeaways: string[];
  practiceExercises?: string[];
  resources?: { name: string; url?: string }[];
  videos?: Video[];
}

export interface Course {
  id: string;
  tier: Tier;
  title: string;
  description: string;
  objectives: string[];
  modules: Module[];
  estimatedHours: number;
  prerequisites: string[];
}

export interface Lab {
  id: string;
  tier: Tier;
  title: string;
  skillArea: string;
  description: string;
  objectives: string[];
  instructions: string[];
  terminalCommands?: { command: string; output: string }[];
  externalPlatforms?: { name: string; url: string }[];
}

export interface Certification {
  id: string;
  tier: Tier;
  name: string;
  provider: string;
  cost: string;
  prerequisites: string;
  studyResources: string[];
  description: string;
}

export interface CareerMilestone {
  tier: Tier;
  milestones: string[];
}

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
  | 'cyber-awareness';

export interface AppState {
  currentPage: Page;
  selectedCourseId: string | null;
  selectedLabId: string | null;
  isLoggedIn: boolean;
  userName: string;
}

export interface ProgressData {
  completedCourses: string[];
  completedLabs: string[];
  currentTier: Tier;
  streak: number;
  lastActive: string;
  certStatuses: Record<string, 'planned' | 'studying' | 'passed'>;
}
