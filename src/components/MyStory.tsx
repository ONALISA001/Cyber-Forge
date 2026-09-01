import React, { useState } from 'react';
import {
  Shield, MapPin, Target, Heart, ExternalLink, ChevronDown, ChevronUp,
  Cpu, BookOpen, Users, Zap, Award, Globe,
} from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
}

const timeline: TimelineEvent[] = [
  {
    year: '2022',
    title: 'The Starting Point - Mukuru kwa Njenga',
    desc: "Growing up in one of Nairobi's largest informal settlements, access to quality tech education felt like a dream for someone else. No structured courses, no mentors, no money for bootcamps. Just a phone, free internet, and a burning question: how does security actually work?",
    icon: <MapPin size={16} />,
    color: 'text-base-content/50',
  },
  {
    year: '2023',
    title: 'First Steps - Self-Taught from Scratch',
    desc: "Started with YouTube and free resources. Discovered TryHackMe, began Linux basics, learned networking fundamentals. Failed a lot. Kept going. Joined CyberShujaa - a Kenyan cybersecurity skills program - and completed structured training alongside working professionals.",
    icon: <BookOpen size={16} />,
    color: 'text-info',
  },
  {
    year: '2024',
    title: 'Building CyberForge - For Learners Like Me',
    desc: "Realised there was no single structured platform for African learners entering cybersecurity. Built CyberForge from scratch in React and TypeScript - a free, open-access platform with learning paths, interactive labs, certification roadmaps, and career toolkits. Deployed on GitHub and Netlify. Built for the person who was exactly where I was two years earlier.",
    icon: <Cpu size={16} />,
    color: 'text-success',
  },
  {
    year: '2024',
    title: '#MyFirstHack - 90 Days Public',
    desc: 'Launched a public 90-day cybersecurity challenge (#MyFirstHack) documented daily on LinkedIn. Practised SOC analyst skills: SIEM, log analysis, incident response, threat intelligence. Built accountability and attracted a community of learners following the same path.',
    icon: <Zap size={16} />,
    color: 'text-warning',
  },
  {
    year: '2025',
    title: 'Teaching What I Learn',
    desc: 'Created and sold Notion-based cybersecurity learning templates - SOC Analyst Career OS, 90-Day Challenge Tracker - on Gumroad, Selar, and Payhip. Helping other African learners structure their journey the way I wished someone had helped me structure mine.',
    icon: <Heart size={16} />,
    color: 'text-error',
  },
  {
    year: '2026',
    title: 'Next Chapter - University and Giving Back at Scale',
    desc: "Applying to USIU-Africa's BSc in Applied Computer Technology via the Mastercard Foundation Scholars Program. Goal: combine formal education with everything built self-taught - and return to communities like Mukuru kwa Njenga with the skills, network, and credibility to create real, lasting impact.",
    icon: <Target size={16} />,
    color: 'text-success',
  },
];

const impacts = [
  { stat: 'Free', label: 'CyberForge costs learners nothing', icon: <Shield size={20} />, color: 'text-success' },
  { stat: '90 days', label: 'Public challenge completed and documented', icon: <Award size={20} />, color: 'text-warning' },
  { stat: '3 tiers', label: 'Beginner to Intermediate to Advanced curriculum', icon: <BookOpen size={20} />, color: 'text-info' },
  { stat: 'Kenya', label: 'Built from Nairobi, for Africa', icon: <Globe size={20} />, color: 'text-error' },
];

export const MyStory: React.FC = () => {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(3);

  return (
    <div className="fade-in p-6 overflow-y-auto h-full scrollbar-thin max-w-3xl mx-auto">

      {/* Hero */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs text-base-content/40 uppercase tracking-widest mb-3">
          <MapPin size={12} /> Mukuru kwa Njenga, Nairobi, Kenya
        </div>
        <h1 className="text-3xl font-bold text-base-content mb-3 leading-tight">
          From <span className="text-success font-mono cyber-glow">Zero Access</span> to Building Access for Others
        </h1>
        <p className="text-base-content/60 text-base leading-relaxed">
          CyberForge was not born in a startup incubator or a university lab. It was built by a self-taught
          learner from an informal settlement in Nairobi - because the platform I needed did not exist.
          This is the story of why I built it, and where it is going next.
        </p>
      </div>

      {/* Impact stats */}
      <div className="grid grid-cols-2 gap-3 mb-8">
        {impacts.map(item => (
          <div key={item.label} className="card bg-base-200 border border-base-300">
            <div className="card-body p-4 flex-row items-center gap-3">
              <span className={item.color}>{item.icon}</span>
              <div>
                <div className={`text-lg font-bold ${item.color}`}>{item.stat}</div>
                <div className="text-xs text-base-content/50 leading-tight">{item.label}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-base-content mb-4 flex items-center gap-2">
          <Zap size={16} className="text-success" /> The Journey
        </h2>
        <div className="space-y-2">
          {timeline.map((event, idx) => {
            const isOpen = expandedIdx === idx;
            return (
              <div
                key={idx}
                className="card bg-base-200 border border-base-300 cursor-pointer hover:border-success/30 transition-colors"
                onClick={() => setExpandedIdx(isOpen ? null : idx)}
              >
                <div className="card-body p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <span className={`font-mono text-xs font-bold ${event.color} shrink-0`}>
                        {event.year}
                      </span>
                      <div className={`shrink-0 ${event.color}`}>{event.icon}</div>
                      <span className="text-sm font-semibold text-base-content truncate">
                        {event.title}
                      </span>
                    </div>
                    <span className="text-base-content/30 shrink-0">
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </span>
                  </div>
                  {isOpen && (
                    <p className="text-sm text-base-content/60 mt-3 ml-14 leading-relaxed border-l border-success/20 pl-3">
                      {event.desc}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Why CyberForge */}
      <div className="card bg-success/5 border border-success/20 mb-8">
        <div className="card-body p-5">
          <h2 className="text-base font-semibold text-success mb-3 flex items-center gap-2">
            <Heart size={16} /> Why This Platform Exists
          </h2>
          <p className="text-sm text-base-content/70 leading-relaxed mb-3">
            When I started learning cybersecurity, every good resource assumed you already had money,
            a laptop, stable internet, or a degree. I had none of those consistently.
          </p>
          <p className="text-sm text-base-content/70 leading-relaxed mb-3">
            CyberForge is built on a single belief:{' '}
            <strong className="text-base-content">
              talent is everywhere in Africa, but structured access to learning is not.
            </strong>{' '}
            Every feature - the free pricing, the tiered paths, the practical labs, the certification
            roadmaps - exists to lower the barrier for the next person sitting where I was.
          </p>
          <p className="text-sm text-base-content/70 leading-relaxed">
            If even one person in Mukuru kwa Njenga, Mathare, Kibera, or Kangemi uses this platform
            to land a remote SOC analyst job - the whole thing was worth building.
          </p>
        </div>
      </div>

      {/* Community commitment */}
      <div className="card bg-base-200 border border-base-300 mb-8">
        <div className="card-body p-5">
          <h2 className="text-base font-semibold text-base-content mb-3 flex items-center gap-2">
            <Users size={16} className="text-info" /> Commitment to Community
          </h2>
          <ul className="space-y-2 text-sm text-base-content/60">
            {[
              'CyberForge will remain 100% free - no paywalls, no upsells',
              'Actively share learning openly through #MyFirstHack and LinkedIn',
              'Create Swahili-language cybersecurity content to reach non-English learners',
              'Return to facilitate workshops in informal settlements after formal education',
              'Mentor the next generation of Kenyan cybersecurity professionals',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-success mt-0.5 shrink-0">[ OK ]</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Links out */}
      <div className="card bg-base-200 border border-base-300">
        <div className="card-body p-5">
          <h2 className="text-base font-semibold text-base-content mb-3 flex items-center gap-2">
            <Globe size={16} className="text-warning" /> Follow the Journey
          </h2>
          <div className="space-y-2">
            {[
              { label: 'GitHub - ONALISA001', url: 'https://github.com/ONALISA001', desc: 'All open-source work, including CyberForge' },
              { label: 'LinkedIn - James Mbari (Kabi)', url: 'https://linkedin.com/in/james-mbari', desc: '#MyFirstHack daily posts and cybersecurity content' },
              { label: 'CyberForge on Netlify', url: 'https://lively-jalebi-15c251.netlify.app', desc: 'The live platform - free for all learners' },
            ].map(link => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 p-3 rounded-lg bg-base-300 hover:bg-base-100 transition-colors group"
              >
                <div>
                  <div className="text-sm font-medium text-base-content group-hover:text-success transition-colors">
                    {link.label}
                  </div>
                  <div className="text-xs text-base-content/40">{link.desc}</div>
                </div>
                <ExternalLink size={14} className="text-base-content/30 shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center">
        <p className="text-xs text-base-content/30 italic">
          "The best way to predict the future is to build it." - Built by Mido (James Mbari), Nairobi
        </p>
      </div>

    </div>
  );
};
