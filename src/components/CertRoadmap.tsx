import React from 'react';
import { Award, DollarSign, BookOpen, ExternalLink, CheckCircle, Circle, Clock } from 'lucide-react';
import { Tier, ProgressData } from '../types';
import { certifications } from '../data';

interface CertRoadmapProps {
  progress: ProgressData;
  onUpdateCertStatus: (certId: string, status: 'planned' | 'studying' | 'passed') => void;
}

const tiers: { key: Tier; label: string; color: string; borderColor: string }[] = [
  { key: 'beginner', label: 'Beginner', color: 'text-info', borderColor: 'border-info' },
  { key: 'intermediate', label: 'Intermediate', color: 'text-warning', borderColor: 'border-warning' },
  { key: 'advanced', label: 'Advanced', color: 'text-error', borderColor: 'border-error' },
];

const statusIcons = {
  planned: <Circle size={14} className="text-base-content/40" />,
  studying: <Clock size={14} className="text-warning" />,
  passed: <CheckCircle size={14} className="text-success" />,
};

export const CertRoadmap: React.FC<CertRoadmapProps> = ({ progress, onUpdateCertStatus }) => {
  return (
    <div className="fade-in p-6 overflow-y-auto h-full scrollbar-thin">
      <h1 className="text-2xl font-bold text-base-content mb-2">Certification Roadmap</h1>
      <p className="text-base-content/60 mb-6">Industry certifications mapped to each learning tier. Track your progress below.</p>

      {/* Visual roadmap */}
      <div className="relative">
        {/* Connecting line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-base-300" />

        {tiers.map((tier, tierIdx) => {
          const tierCerts = certifications.filter(c => c.tier === tier.key);
          return (
            <div key={tier.key} className="relative mb-8 last:mb-0">
              {/* Tier node */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-full border-2 ${tier.borderColor} bg-base-200 flex items-center justify-center z-10`}>
                  <Award size={20} className={tier.color} />
                </div>
                <h2 className={`text-lg font-bold ${tier.color}`}>{tier.label} Tier</h2>
              </div>

              {/* Cert cards */}
              <div className="ml-16 space-y-3">
                {tierCerts.map(cert => {
                  const status = progress.certStatuses[cert.id] || 'planned';
                  return (
                    <div key={cert.id} className="card bg-base-200">
                      <div className="card-body p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              {statusIcons[status]}
                              <h3 className="font-semibold text-base-content text-sm">{cert.name}</h3>
                            </div>
                            <p className="text-xs text-base-content/60 mb-2">{cert.description}</p>
                            <div className="flex flex-wrap gap-3 text-xs text-base-content/60">
                              <span className="flex items-center gap-1"><DollarSign size={12} /> {cert.cost}</span>
                              <span className="flex items-center gap-1"><BookOpen size={12} /> {cert.prerequisites}</span>
                            </div>
                          </div>
                          <select
                            className="select select-bordered select-xs"
                            value={status}
                            onChange={e => onUpdateCertStatus(cert.id, e.target.value as 'planned' | 'studying' | 'passed')}
                          >
                            <option value="planned">Planned</option>
                            <option value="studying">Studying</option>
                            <option value="passed">Passed ✓</option>
                          </select>
                        </div>

                        {/* Study Resources */}
                        <div className="mt-3 pt-3 border-t border-base-300">
                          <p className="text-xs font-semibold text-base-content/60 mb-1">Study Resources</p>
                          <div className="flex flex-wrap gap-2">
                            {(cert.studyResources ?? []).map((r, i) => (
                              <span key={i} className="badge badge-ghost badge-xs">{r}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
