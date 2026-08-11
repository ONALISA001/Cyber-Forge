import React, { useState } from 'react';
import { Shield, ChevronRight, Lock, BookOpen, Award, Terminal } from 'lucide-react';

interface LandingPageProps {
  onGetStarted: (name: string) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  const [name, setName] = useState('');

  return (
    <div data-theme="dark" className="min-h-screen bg-base-100 overflow-y-auto">
      {/* Hero */}
      <div className="text-center py-20 px-6">
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-success/10">
            <Shield size={52} className="text-success cyber-glow" />
          </div>
        </div>
        <h1 className="text-5xl font-bold text-base-content mb-4">
          <span className="font-mono cyber-glow text-success">CYBER</span>{' '}
          <span className="font-mono">FORGE</span>
        </h1>
        <p className="text-lg text-base-content/60 max-w-xl mx-auto mb-8">
          Your structured path from complete beginner to job-ready cybersecurity professional.
          Theory. Labs. Certs. Career guidance. All in one place.
        </p>

        {/* Name input + CTA */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto mb-4">
          <input
            type="text"
            className="input input-bordered w-full sm:w-auto flex-1"
            placeholder="Your name (optional)"
            value={name}
            onChange={e => setName(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && onGetStarted(name)}
          />
          <button className="btn btn-success gap-2 whitespace-nowrap" onClick={() => onGetStarted(name)}>
            Start Your Journey <ChevronRight size={18} />
          </button>
        </div>
        <p className="text-sm text-base-content/40">100% Free — No credit card required</p>
      </div>

      {/* Tiers */}
      <div className="px-6 pb-14">
        <h2 className="text-2xl font-bold text-center mb-8 text-base-content">Three Tiers to Mastery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {[
            { tier: 'Beginner', color: 'text-info', bg: 'bg-info/10', desc: 'Foundations — networking, OS basics, Security+', icon: <BookOpen size={24} /> },
            { tier: 'Intermediate', color: 'text-warning', bg: 'bg-warning/10', desc: 'SOC skills — SIEM, IR, threat intel, scripting', icon: <Terminal size={24} /> },
            { tier: 'Advanced', color: 'text-error', bg: 'bg-error/10', desc: 'Specialization — pentesting, forensics, GRC', icon: <Award size={24} /> },
          ].map(t => (
            <div key={t.tier} className={`card ${t.bg} tier-card border border-base-300`}>
              <div className="card-body items-center text-center">
                <div className={t.color}>{t.icon}</div>
                <h3 className={`card-title ${t.color}`}>{t.tier}</h3>
                <p className="text-base-content/60 text-sm">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="bg-base-200 px-6 py-14">
        <h2 className="text-2xl font-bold text-center mb-8 text-base-content">Everything You Need</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {[
            { icon: <Terminal size={20} />, title: 'Interactive Labs', desc: 'Hands-on exercises with in-browser terminals and real-world scenarios' },
            { icon: <Award size={20} />, title: 'Certification Roadmap', desc: 'Mapped certs from Google CC to OSCP with cost, prereqs, and study guides' },
            { icon: <Lock size={20} />, title: 'Structured Progression', desc: 'Prerequisite-gated courses ensuring you build skills in the right order' },
            { icon: <Shield size={20} />, title: 'Career Toolkit', desc: 'LinkedIn, GitHub, resume, and interview guides tailored to cybersecurity' },
          ].map(f => (
            <div key={f.title} className="flex gap-3">
              <div className="text-success mt-1 flex-shrink-0">{f.icon}</div>
              <div>
                <h4 className="font-semibold text-base-content">{f.title}</h4>
                <p className="text-sm text-base-content/60">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial */}
      <div className="px-6 py-14 text-center">
        <p className="text-base-content/50 italic text-sm max-w-md mx-auto">
          "Cyber Forge gave me the structure I needed. I went from zero to SOC Analyst in 8 months."
        </p>
        <p className="text-base-content/30 text-xs mt-2">— Community member</p>
      </div>
    </div>
  );
};
