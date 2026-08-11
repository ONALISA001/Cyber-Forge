import React, { useState } from 'react';
import { ExternalLink as LinkedinIcon, GitBranch as GithubIcon, FileText, MessageSquare, ChevronDown, ChevronRight } from 'lucide-react';

type Section = 'linkedin' | 'github' | 'resume' | 'interview';

const sections: { key: Section; label: string; icon: React.ReactNode }[] = [
  { key: 'linkedin', label: 'LinkedIn Optimization', icon: <LinkedinIcon size={18} /> },
  { key: 'github', label: 'GitHub Portfolio', icon: <GithubIcon size={18} /> },
  { key: 'resume', label: 'Resume & CV', icon: <FileText size={18} /> },
  { key: 'interview', label: 'Interview Prep', icon: <MessageSquare size={18} /> },
];

export const CareerToolkit: React.FC = () => {
  const [expanded, setExpanded] = useState<Section | null>('linkedin');

  const toggle = (s: Section) => setExpanded(expanded === s ? null : s);

  return (
    <div className="fade-in p-6 overflow-y-auto h-full scrollbar-thin">
      <h1 className="text-2xl font-bold text-base-content mb-2">Career Toolkit</h1>
      <p className="text-base-content/60 mb-6">Everything you need to land your first cybersecurity role.</p>

      <div className="space-y-3">
        {sections.map(sec => (
          <div key={sec.key} className="card bg-base-200">
            <button className="card-body p-4 cursor-pointer" onClick={() => toggle(sec.key)}>
              <div className="flex items-center gap-3">
                {expanded === sec.key ? <ChevronDown size={16} className="text-success" /> : <ChevronRight size={16} className="text-base-content/40" />}
                <span className="text-success">{sec.icon}</span>
                <h2 className="font-semibold text-base-content">{sec.label}</h2>
              </div>
            </button>
            {expanded === sec.key && (
              <div className="px-4 pb-4">
                {sec.key === 'linkedin' && <LinkedInSection />}
                {sec.key === 'github' && <GitHubSection />}
                {sec.key === 'resume' && <ResumeSection />}
                {sec.key === 'interview' && <InterviewSection />}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const LinkedInSection: React.FC = () => (
  <div className="space-y-4 text-sm text-base-content/80">
    <div>
      <h3 className="font-semibold text-base-content mb-1">Headline Formulas</h3>
      <div className="space-y-1 font-mono text-xs bg-base-300 p-3 rounded-lg">
        <p>Aspiring SOC Analyst | CompTIA Security+ | Python | SIEM</p>
        <p>Cybersecurity Student | Networking | Linux | Threat Detection</p>
        <p>Junior Penetration Tester | eJPT | CTF Player | Security Researcher</p>
      </div>
    </div>
    <div>
      <h3 className="font-semibold text-base-content mb-1">About Section Template</h3>
      <div className="bg-base-300 p-3 rounded-lg text-xs">
        <p>I'm a [your background] transitioning into cybersecurity. Currently focused on [current tier focus], with hands-on experience in [key tools/skills].</p>
        <p className="mt-2">🔐 Certifications: [list certs]</p>
        <p>🛡️ Skills: [list top 5-7 skills]</p>
        <p>🎯 Goal: [target role] within [timeframe]</p>
      </div>
    </div>
    <div>
      <h3 className="font-semibold text-base-content mb-1">Skills to List Per Tier</h3>
      <div className="space-y-2">
        <div><span className="badge badge-info badge-xs mr-2">Beginner</span>Network Security, Linux, Windows, TCP/IP, Firewalls, CIA Triad</div>
        <div><span className="badge badge-warning badge-xs mr-2">Intermediate</span>SIEM (Splunk/ELK), Incident Response, Python, Threat Intelligence, MITRE ATT&CK</div>
        <div><span className="badge badge-error badge-xs mr-2">Advanced</span>Penetration Testing, Digital Forensics, Cloud Security, GRC, Vulnerability Assessment</div>
      </div>
    </div>
  </div>
);

const GitHubSection: React.FC = () => (
  <div className="space-y-4 text-sm text-base-content/80">
    <div>
      <h3 className="font-semibold text-base-content mb-1">Repo Structure Standards</h3>
      <div className="font-mono text-xs bg-base-300 p-3 rounded-lg whitespace-pre">{`project-name/
├── README.md          # Overview, setup, usage
├── docs/              # Detailed documentation
├── src/               # Source code
├── screenshots/       # Demo screenshots
├── LICENSE
└── .gitignore`}</div>
    </div>
    <div>
      <h3 className="font-semibold text-base-content mb-1">Projects to Showcase Per Tier</h3>
      <div className="space-y-2">
        <div>
          <span className="badge badge-info badge-xs mr-2">Beginner</span>
          Home lab setup documentation, Security+ study notes, Network scanning scripts
        </div>
        <div>
          <span className="badge badge-warning badge-xs mr-2">Intermediate</span>
          SIEM deployment guide, Incident response playbook, Python security tools, CTF write-ups
        </div>
        <div>
          <span className="badge badge-error badge-xs mr-2">Advanced</span>
          Pentest reports (authorized), Security tool contributions, Vulnerability research, Blog/writeups
        </div>
      </div>
    </div>
    <div>
      <h3 className="font-semibold text-base-content mb-1">README Template</h3>
      <div className="bg-base-300 p-3 rounded-lg text-xs font-mono whitespace-pre">{`# Project Name
Brief description of what this project does.

## Purpose
Why you built it and what you learned.

## Tools & Technologies
- Tool 1
- Tool 2

## Setup / How to Use
Step-by-step instructions.

## Screenshots
Include visuals of your work.

## Key Findings / Results
What you discovered or accomplished.`}</div>
    </div>
  </div>
);

const ResumeSection: React.FC = () => (
  <div className="space-y-4 text-sm text-base-content/80">
    <div>
      <h3 className="font-semibold text-base-content mb-1">Resume Structure</h3>
      <ol className="list-decimal list-inside space-y-1">
        <li><strong>Contact Info</strong> — Name, email, LinkedIn, GitHub, location (city only)</li>
        <li><strong>Professional Summary</strong> — 2-3 sentences highlighting your focus and key skills</li>
        <li><strong>Certifications</strong> — List prominently (this is huge for entry-level)</li>
        <li><strong>Technical Skills</strong> — Organized by category (Tools, Languages, Frameworks)</li>
        <li><strong>Projects</strong> — 2-3 relevant projects with measurable outcomes</li>
        <li><strong>Education</strong> — Degrees, relevant coursework, online certificates</li>
        <li><strong>Experience</strong> — Any relevant work, internships, or volunteer work</li>
      </ol>
    </div>
    <div>
      <h3 className="font-semibold text-base-content mb-1">Tips for Entry-Level</h3>
      <ul className="space-y-1">
        <li>• Lead with certifications and projects over work experience</li>
        <li>• Use action verbs: "Configured," "Analyzed," "Implemented," "Detected"</li>
        <li>• Quantify where possible: "Analyzed 500+ log entries," "Reduced false positives by 30%"</li>
        <li>• Keep to one page</li>
        <li>• ATS-friendly format — avoid tables, images, fancy formatting</li>
        <li>• Tailor to each job description — match their keywords</li>
      </ul>
    </div>
  </div>
);

const InterviewSection: React.FC = () => (
  <div className="space-y-4 text-sm text-base-content/80">
    <div>
      <h3 className="font-semibold text-base-content mb-1">Common SOC Analyst Interview Questions</h3>
      <div className="space-y-3">
        {[
          { q: 'What is the CIA Triad?', a: 'Confidentiality, Integrity, and Availability — the three core principles of information security.' },
          { q: 'Explain the difference between IDS and IPS.', a: 'IDS (Intrusion Detection System) monitors and alerts on suspicious activity. IPS (Intrusion Prevention System) actively blocks threats.' },
          { q: 'What is a SIEM and why is it important?', a: 'Security Information and Event Management — collects, correlates, and analyzes logs from multiple sources to detect security threats in real-time.' },
          { q: 'Walk me through an incident response process.', a: 'Preparation → Detection & Analysis → Containment → Eradication → Recovery → Lessons Learned (NIST framework).' },
          { q: 'What is the difference between a vulnerability and an exploit?', a: 'A vulnerability is a weakness in a system. An exploit is the code or method used to take advantage of that vulnerability.' },
        ].map((item, i) => (
          <div key={i} className="bg-base-300 p-3 rounded-lg">
            <p className="font-semibold text-base-content text-xs">Q: {item.q}</p>
            <p className="text-xs mt-1 text-base-content/60">A: {item.a}</p>
          </div>
        ))}
      </div>
    </div>
    <div>
      <h3 className="font-semibold text-base-content mb-1">STAR Method Framework</h3>
      <div className="bg-base-300 p-3 rounded-lg">
        <div className="space-y-1 text-xs">
          <p><strong className="text-success">S</strong>ituation — Set the scene. What was the context?</p>
          <p><strong className="text-success">T</strong>ask — What was your responsibility?</p>
          <p><strong className="text-success">A</strong>ction — What specific steps did you take?</p>
          <p><strong className="text-success">R</strong>esult — What was the outcome? Quantify if possible.</p>
        </div>
      </div>
    </div>
  </div>
);
