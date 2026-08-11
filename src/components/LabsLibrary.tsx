import React, { useState } from 'react';
import { Search, FlaskConical, CheckCircle, ExternalLink, ArrowLeft } from 'lucide-react';
import { Tier, ProgressData, Lab } from '../types';
import { labs } from '../data';
import { TerminalEmulator } from './Terminal';

interface LabsLibraryProps {
  progress: ProgressData;
  onCompleteLab: (labId: string) => void;
}

const tierOptions: { key: Tier | 'all'; label: string }[] = [
  { key: 'all', label: 'All Tiers' },
  { key: 'beginner', label: 'Beginner' },
  { key: 'intermediate', label: 'Intermediate' },
  { key: 'advanced', label: 'Advanced' },
];

const skillAreas = ['All', ...Array.from(new Set(labs.map(l => l.skillArea)))];

export const LabsLibrary: React.FC<LabsLibraryProps> = ({ progress, onCompleteLab }) => {
  const [search, setSearch] = useState('');
  const [tierFilter, setTierFilter] = useState<Tier | 'all'>('all');
  const [skillFilter, setSkillFilter] = useState('All');
  const [selectedLab, setSelectedLab] = useState<Lab | null>(null);

  const filtered = labs.filter(lab => {
    if (tierFilter !== 'all' && lab.tier !== tierFilter) return false;
    if (skillFilter !== 'All' && lab.skillArea !== skillFilter) return false;
    if (search && !lab.title.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  if (selectedLab) {
    const isCompleted = progress.completedLabs.includes(selectedLab.id);
    return (
      <div className="fade-in p-6 overflow-y-auto h-full scrollbar-thin">
        <button className="btn btn-ghost btn-sm gap-1 mb-4" onClick={() => setSelectedLab(null)}>
          <ArrowLeft size={16} /> Back to Labs
        </button>

        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={`badge badge-sm ${selectedLab.tier === 'beginner' ? 'badge-info' : selectedLab.tier === 'intermediate' ? 'badge-warning' : 'badge-error'}`}>
                {selectedLab.tier}
              </span>
              <span className="badge badge-ghost badge-sm">{selectedLab.skillArea}</span>
            </div>
            <h1 className="text-2xl font-bold text-base-content">{selectedLab.title}</h1>
            <p className="text-base-content/60 mt-1">{selectedLab.description}</p>
          </div>
          {isCompleted ? (
            <span className="badge badge-success gap-1"><CheckCircle size={14} /> Completed</span>
          ) : (
            <button className="btn btn-success btn-sm" onClick={() => onCompleteLab(selectedLab.id)}>Mark Complete</button>
          )}
        </div>

        {/* Objectives */}
        <div className="card bg-base-200 mb-4">
          <div className="card-body p-4">
            <h2 className="font-semibold text-base-content mb-2">Objectives</h2>
            <ul className="space-y-1">
              {selectedLab.objectives.map((o, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-base-content/80">
                  <CheckCircle size={14} className="text-success mt-0.5 flex-shrink-0" /> {o}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Instructions */}
        <div className="card bg-base-200 mb-4">
          <div className="card-body p-4">
            <h2 className="font-semibold text-base-content mb-2">Instructions</h2>
            <ol className="space-y-2">
              {selectedLab.instructions.map((inst, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-base-content/80">
                  <span className="font-mono text-base-content/40 w-5 flex-shrink-0">{i + 1}.</span>
                  {inst}
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Interactive Terminal */}
        {selectedLab.terminalCommands && selectedLab.terminalCommands.length > 0 && (
          <div className="mb-4">
            <h2 className="font-semibold text-base-content mb-2">Interactive Terminal</h2>
            <TerminalEmulator commands={selectedLab.terminalCommands} />
          </div>
        )}

        {/* External Platforms */}
        {selectedLab.externalPlatforms && selectedLab.externalPlatforms.length > 0 && (
          <div className="card bg-base-200">
            <div className="card-body p-4">
              <h2 className="font-semibold text-base-content mb-2">Practice on External Platforms</h2>
              <div className="space-y-2">
                {selectedLab.externalPlatforms.map((p, i) => (
                  <a
                    key={i}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-info hover:underline"
                  >
                    <ExternalLink size={14} /> {p.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="fade-in p-6 overflow-y-auto h-full scrollbar-thin">
      <h1 className="text-2xl font-bold text-base-content mb-2">Labs Library</h1>
      <p className="text-base-content/60 mb-4">Hands-on exercises with interactive terminals and real-world scenarios.</p>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-4">
        <label className="input input-bordered input-sm flex items-center gap-2 flex-1 min-w-[200px]">
          <Search className="h-[1em] opacity-50" />
          <input type="search" className="grow" placeholder="Search labs..." value={search} onChange={e => setSearch(e.target.value)} />
        </label>
        <select className="select select-bordered select-sm" value={tierFilter} onChange={e => setTierFilter(e.target.value as Tier | 'all')}>
          {tierOptions.map(t => <option key={t.key} value={t.key}>{t.label}</option>)}
        </select>
        <select className="select select-bordered select-sm" value={skillFilter} onChange={e => setSkillFilter(e.target.value)}>
          {skillAreas.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      {/* Lab Cards */}
      <div className="space-y-2">
        {filtered.map(lab => {
          const isCompleted = progress.completedLabs.includes(lab.id);
          return (
            <button
              key={lab.id}
              className="w-full card bg-base-200 hover:bg-base-300 transition-colors cursor-pointer text-left"
              onClick={() => setSelectedLab(lab)}
            >
              <div className="card-body p-3 flex-row items-center gap-3">
                {isCompleted ? (
                  <CheckCircle size={18} className="text-success flex-shrink-0" />
                ) : (
                  <FlaskConical size={18} className="text-base-content/40 flex-shrink-0" />
                )}
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-base-content text-sm truncate">{lab.title}</p>
                  <p className="text-xs text-base-content/40 truncate">{lab.description}</p>
                </div>
                <div className="flex gap-1 flex-shrink-0">
                  <span className={`badge badge-xs ${lab.tier === 'beginner' ? 'badge-info' : lab.tier === 'intermediate' ? 'badge-warning' : 'badge-error'}`}>
                    {lab.tier}
                  </span>
                  <span className="badge badge-ghost badge-xs">{lab.skillArea}</span>
                </div>
              </div>
            </button>
          );
        })}
        {filtered.length === 0 && (
          <p className="text-center text-base-content/40 py-8">No labs match your filters.</p>
        )}
      </div>
    </div>
  );
};
