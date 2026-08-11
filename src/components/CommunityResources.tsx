import React, { useState } from 'react';
import { ExternalLink, Globe } from 'lucide-react';
import { Tier } from '../types';
import { communityResources } from '../data';

const tiers: { key: Tier; label: string; color: string }[] = [
  { key: 'beginner', label: 'Beginner', color: 'text-info' },
  { key: 'intermediate', label: 'Intermediate', color: 'text-warning' },
  { key: 'advanced', label: 'Advanced', color: 'text-error' },
];

export const CommunityResources: React.FC = () => {
  const [activeTier, setActiveTier] = useState<Tier>('beginner');
  const resources = communityResources.find(r => r.tier === activeTier)?.resources || [];

  return (
    <div className="fade-in p-6 overflow-y-auto h-full scrollbar-thin">
      <h1 className="text-2xl font-bold text-base-content mb-2">Community & Resources</h1>
      <p className="text-base-content/60 mb-6">Curated external platforms, channels, and communities organized by tier.</p>

      {/* Tier tabs */}
      <div className="tabs tabs-boxed bg-base-200 mb-6 w-fit">
        {tiers.map(t => (
          <button
            key={t.key}
            className={`tab ${activeTier === t.key ? 'tab-active' : ''}`}
            onClick={() => setActiveTier(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Resource cards */}
      <div className="space-y-3">
        {resources.map(r => (
          <a
            key={r.name}
            href={r.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card bg-base-200 hover:bg-base-300 transition-colors cursor-pointer"
          >
            <div className="card-body p-4 flex-row items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                <Globe size={20} className="text-success" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-base-content text-sm">{r.name}</h3>
                <p className="text-xs text-base-content/60">{r.description}</p>
              </div>
              <ExternalLink size={16} className="text-base-content/30 flex-shrink-0" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
